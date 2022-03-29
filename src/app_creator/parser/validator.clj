(ns app-creator.parser.validator)

(require '[malli.core :as m]
         '[malli.error :as me]
         '[clojure.string :as string])

(def ip-regex "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
(def host-regex "^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$")

(def java-vers (string/join "\n- " (map str [8 9 10 11 12 13 14 15 16 17])))

(defn restrict-enum [& elems]
  (let [error-message (string/join "\n- " elems)
        enum (map str elems)]
    (concat [:enum {:error/message error-message}] enum)))

(def db-schema
  [:db
   [:map
    [:type [:enum {:error/message "should be one of:\n- postgres\n- *other dbs are coming soon*"}
            "postgres"]]
    [:db-name string?]                                      ; любое, т.к. скрипт не запускается. валидация на совести юзера
    [:host [:fn {:error/message "invalid ip-address or host name"}
            (fn [{:keys [host]}] (and (string? host)
                                      (or
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
          [:opts [:enum {:error/message "should be one of:\n- bool\n- number\n- string\n- date"}
                  "bool" "number" "string" "date"]]]]]]]]]])

(def server-schema
  [:server
   [:map
    [:type [:enum {:error/message "should be one of:\n- spring\n- *other types are coming soon*"}
            "spring"]]
    [:project
     [:map
      [:build {:optional true} [:enum
                                {:error/message "should be one of:\n- maven\n- gradle"}
                                "maven" "gradle"]]
      [:language {:optional true} [:enum
                                   {:error/message "should be one of:\n- java\n- kotlin\n- groovy"}
                                   "java" "kotlin" "groovy"]]
      [:boot-version {:optional true} [:enum
                                       {:error/message
                                        "should be one of:\n- 2.5.11\n- 2.5.12\n- 2.6.5\n- 2.6.6\n- 2.7.0\n- 3.0.0"}
                                       "2.5.11" "2.5.12" "2.6.5" "2.6.6" "2.7.0" "3.0.0"]]
      [:group-id {:optional true} string?]
      [:artifact-id {:optional true} string?]
      [:proj-name {:optional true} string?]
      [:description {:optional true} string?]
      [:packaging {:optional true} [:enum
                                    {:error/message "should be one of:\n- jar\n- war\n- pom\n- ear\n- rar\n- par"}
                                    "jar" "war" "pom" "ear" "rar" "par"]]
      [:java-version {:optional true} [:enum
                                       {:error/message (str "should be one of:" java-vers)}
                                       "8" "9" "10" "11" "12" "13" "14" "15" "16" "17"]]
      [:version {:optional true} string?]
      [:deps
       [:sequential string?]]]]
    [:properties
     [:map
      [:db
       [:map
        [:type string?]
        [:username string?]
        [:password string?]
        [:host string?]
        [:port int?]
        [:db-name string?]]]]]
    [:controllers
     [:sequential
      [:map
       [:controller-name string?]
       [:requests
        [:sequential
         [:map
          [:req-name string?]
          [:uri string?]
          [:type string?]]]]]]]]])

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
