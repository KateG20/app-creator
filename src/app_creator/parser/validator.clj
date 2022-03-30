(ns app-creator.parser.validator)

(require '[malli.core :as m]
         '[malli.error :as me]
         '[clojure.string :as string])

(def ip-regex #"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
(def host-regex #"^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$")
(def port-regex #"^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$")
(def controller-name-regex #"^[A-Z][\w]*Controller$")
(def method-name-regex #"^[a-z][\w]*$")
(def uri-regex #"^(\/{1}\w+)+$")

(defn restrict-enum [elems & {:keys [in-work] :or {in-work false}}]
  "Создает перечисление со всеми возможными значениями для malli, а также сообщение об ошибке"
  (let [error-message (as-> elems e
                            (if in-work (conj e "*more options are coming soon!*") e)
                            (string/join "\n- " e)
                            (str "should be one of:\n- " e))
        enum (map str elems)]
    (vec (concat [:enum {:error/message error-message}] enum))))

(defn matches [str regex]
  (and (string? str) (re-matches regex str)))

(def db-schema
  [:db
   [:map
    [:type (restrict-enum ["postgresql"] :in-work true)]
    [:db-name string?]                                      ; любое, т.к. скрипт не запускается. валидация на совести юзера
    [:host [:fn {:error/message "invalid ip-address or host name"}
            (fn [host]
              (and (string? host)
                   (or
                     (= "localhost" host)
                     (re-matches ip-regex host)
                     (re-matches host-regex host))))]]
    [:username string?]
    [:password string?]
    [:tables
     [:sequential
      [:map
       [:table-name string?]
       [:columns
        [:sequential
         [:map
          [:col-name string?]
          [:opts (restrict-enum ["bool" "number" "string" "date"])]]]]]]]]])

(def server-schema
  [:server
   [:map
    [:type (restrict-enum ["spring"] :in-work true)]
    [:project
     [:map
      [:build {:optional true} (restrict-enum ["maven" "gradle"])]
      [:language {:optional true} (restrict-enum ["java" "kotlin" "groovy"])]
      [:boot-version {:optional true} (restrict-enum ["2.5.11" "2.5.12" "2.6.5" "2.6.6" "2.7.0" "3.0.0"])]
      [:group-id {:optional true} string?]
      [:artifact-id {:optional true} string?]
      [:proj-name {:optional true} string?]
      [:description {:optional true} string?]
      [:packaging {:optional true} (restrict-enum ["jar" "war" "pom" "ear" "rar" "par"])]
      [:java-version {:optional true} (restrict-enum ["1.8" "8" "9" "10" "11" "12" "13" "14" "15" "16" "17"])]
      [:version {:optional true} string?]
      [:deps
       [:sequential string?]]]]                             ; todo; some deps must be default
    [:properties
     [:map
      [:db
       [:map
        [:type string?]
        [:username string?]
        [:password string?]
        [:host [:fn {:error/message "invalid ip-address or host name"}
                (fn [host] (and (string? host)
                                          (or
                                            (= "localhost" host)
                                            (re-matches ip-regex host)
                                            (re-matches host-regex host))))]]
        [:port [:fn {:error/message "invalid port number"}
                (fn [port] (and (int? port) (< 1 port) (< port 65535)))]] ; Integer/parseInt if not work
        [:db-name string?]]]]]
    [:controllers
     [:sequential
      [:map
       [:controller-name [:fn {:error/message "incorrect spring controller name"}
                          (fn [name] (and (string? name) (re-matches controller-name-regex name)))]]
       [:requests
        [:sequential
         [:map
          [:req-name [:fn {:error/message "incorrect method name"}
                      (fn [name] (and (string? name) (re-matches method-name-regex name)))]]
          [:uri [:fn {:error/message "incorrect path"}
                 (fn [uri] (and (string? uri) (re-matches uri-regex uri)))]]
          [:mapping (restrict-enum ["post" "put" "get" "patch" "delete"])]]]]]]]]])

(def client-schema
  [:client
   [:map
    [:os string?]
    [:language string?]
    [:endpoints
     [:sequential
      [:map
       [:name string?]
       [:endpoint string?]
       [:type string?]]]]]])

(def input-schema
  [:map
   [:info
    [:map
     [:app-name string?]
     [:description :maybe string?]]]
   db-schema
   server-schema
   client-schema])

(defn validate [input]
  (m/validate input-schema input))

(defn explain [input]
  (-> input-schema
      (m/explain input)
      (me/humanize)))
