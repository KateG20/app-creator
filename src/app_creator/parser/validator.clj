(ns app-creator.parser.validator)

(require '[sci.core]                                        ; https://github.com/metosin/malli#serializable-functions
         '[malli.core :as m]
         '[malli.error :as me]
         '[clojure.string :as string]
         '[app-creator.parser.messages :as msg]
         '[app-creator.parser.regex :as r]
         '[app-creator.parser.opts :as o])

(defn restrict-error-msg [elems & {:keys [in-work] :or {in-work false}}]
  "Создает сообщение об недопустимом значении, перечисляя допустимые"
  (as-> elems e
        (if in-work (conj e "*more options are coming soon!*") e)
        (string/join " | " e)
        (str "should be one of: " e)))

(defn restrict-enum [elems & {:keys [in-work] :or {in-work false}}]
  "Создает перечисление со всеми возможными значениями для malli, а также сообщение об ошибке"
  (let [error-message (restrict-error-msg elems :in-work in-work)
        enum (map str elems)]
    (vec (concat [:enum {:error/message error-message}] enum))))

(def db-schema
  [:db
   [:map {:closed        true
          ; if map keys are not from allowed list:
          :error/message (restrict-error-msg o/dbms-opts :in-work true)}
    [:postgresql {:optional true}
     [:map {:closed true}
      [:db-name string?]                                    ; любое, т.к. скрипт не запускается прогой. валидация на совести юзера
      [:host [:fn {:error/message msg/host-error
                   :error/path    [:db :host]}
              (fn [host]
                (and (string? host)
                     (or
                       (= "localhost" host)
                       (re-matches r/ip-regex host)
                       (re-matches r/host-regex host))))]]
      [:username string?]
      [:password string?]
      [:tables
       [:sequential
        [:map {:closed true}
         [:table-name string?]
         [:columns
          [:sequential
           [:map {:closed true}
            [:col-name string?]
            [:opts (restrict-enum o/col-type-opts)]]]]]]]]]
    ; other db types here, for example:
    ; [:mongo {:optional true} string?]
    ]
   ])

(def server-schema
  [:server
   [:map {:closed        true
          ; if map keys are not from allowed list:
          :error/message (restrict-error-msg o/server-opts :in-work true)}
    [:spring {:optional true}
     [:map {:closed true}
      [:project
       [:map {:closed true}
        [:build {:optional true} (restrict-enum o/build-opts)]
        [:language {:optional true} (restrict-enum o/lang-opts)]
        [:boot-version {:optional true} (restrict-enum o/boot-v-opts)]
        [:group {:optional true} string?]
        [:artifact {:optional true} string?]
        [:proj-name {:optional true} string?]
        [:description {:optional true} string?]
        [:packaging {:optional true} (restrict-enum o/packaging-opts)]
        [:java-version {:optional true} (restrict-enum o/java-v-opts)]
        [:project-version {:optional true} string?]
        [:deps {:optional true}
         [:sequential (restrict-enum o/deps-opts)]]]]
      [:properties
       [:map {:closed true}
        [:db
         [:map {:closed true}
          [:type string?]
          [:username string?]
          [:password string?]
          [:sql-host [:fn {:error/message msg/host-error}
                      (fn [host] (and (string? host)
                                      (or
                                        (= "localhost" host)
                                        (re-matches r/ip-regex host)
                                        (re-matches r/host-regex host))))]]
          [:sql-port [:fn {:error/message msg/port-error}
                      (fn [port] (and (int? port) (< 1 port) (< port 65535)))]]
          [:db-name string?]]]]]
      [:controllers
       [:sequential
        [:map {:closed true}
         [:controller-name [:fn {:error/message msg/controller-name-error}
                            (fn [name] (and (string? name) (re-matches r/controller-name-regex name)))]]
         [:requests
          [:sequential
           [:map {:closed true}
            [:req-name [:fn {:error/message msg/method-name-error}
                        (fn [name] (and (string? name) (re-matches r/method-name-regex name)))]]

            [:uri [:fn {:error/message msg/uri-path-error}
                   (fn [uri] (and (string? uri) (re-matches r/uri-regex uri)))]]

            [:mapping (restrict-enum o/mapping-opts)]]]]]]]]]]])

(def client-schema
  [:client
   [:map {:closed        true
          ; if map keys are not from allowed list:
          :error/message (restrict-error-msg o/client-opts :in-work true)}
    [:android {:optional true}
     [:map {:closed true}
      [:proj-name string?]
      [:language (restrict-enum ["java"] :in-work true)]
      [:package-name [:fn {:error/message msg/package-name-error}
                      (fn [name] (and (string? name) (string/includes? name ".")))]]
      [:test-framework (restrict-enum ["junit" "testng" "spock" "junit-jupiter"])]
      [:endpoints
       [:sequential
        [:map {:closed true}
         [:name string?]
         [:endpoint string?]
         [:type string?]]]]]]]])

(def input-schema
  [:map {:closed true}
   [:info
    [:map {:closed true}
     [:app-name string?]
     [:description :maybe string?]]]
   db-schema
   server-schema
   client-schema])

(defn find-error-paths [data]
  "Находит все пути от корня до листьев в ациклическом графе, где листья - строки,
  а другие ноды могут быть векторы или мапы. Возвращает всегда вектор строк -
  найденных для данной вершины путей."

  (if (string? data)
    [(str "\nError message: \"" data "\"\n")]
    (if (vector? data)
      (reduce
        (fn [prev new]
          (->> new
               (find-error-paths)
               (concat prev)
               (vec)))
        []
        data)
      (if (map? data)
        (reduce-kv (fn [prev key val]
                     (->> val
                          (find-error-paths)
                          (reduce
                            (fn [prev new]
                              (let [key (as-> key k
                                              (str k)
                                              (if (= ":" (subs k 0 1))
                                                (subs k 1) k)
                                              (if (every? #(Character/isDigit ^char %) k)
                                                (str "element " (+ 1 (Integer/parseInt k))) k))
                                    sep (if (= (subs new 0 1) "\n") "" " >> ")]
                                (conj prev (str key sep new))))
                            [])
                          (concat prev)
                          (vec)))
                   []
                   data)
        data))))

(defn explain [input]
  ;(-> [:and [:map
  ;           [:password string?]
  ;           [:password2 string?]]
  ;     [:fn {:error/message "passwords don't match"}
  ;      '(fn [{:keys [password password2]}]
  ;         (= password password2))]]
  ;    (m/explain {:password "secret"
  ;                :password2 "secret"})
  ;    (me/humanize))
  (-> input-schema
      (m/explain input)
      (me/humanize)
      (find-error-paths))
  )

(def provided-schema                                        ; autogenerated by lib; incorrect imho
  [:vector
   [:or
    keyword?
    [:map
     [:controllers
      {:optional true}
      [:sequential
       [:map
        [:controller-name string?]
        [:requests [:sequential [:map-of keyword? string?]]]]]]
     [:description {:optional true} string?]
     [:properties
      {:optional true}
      [:map
       [:db
        [:map
         [:type string?]
         [:username string?]
         [:password string?]
         [:host string?]
         [:port int?]
         [:db-name string?]]]]]
     [:password {:optional true} string?]
     [:db-name {:optional true} string?]
     [:username {:optional true} string?]
     [:type {:optional true} string?]
     [:tables
      {:optional true}
      [:sequential
       [:map
        [:table-name string?]
        [:columns
         [:sequential [:map [:col-name string?] [:opts string?]]]]]]]
     [:app-name {:optional true} string?]
     [:endpoints
      {:optional true}
      [:sequential [:map-of keyword? string?]]]
     [:host {:optional true} string?]
     [:project
      {:optional true}
      [:map
       [:description string?]
       [:group string?]
       [:packaging string?]
       [:java-version string?]
       [:build string?]
       [:language string?]
       [:boot-version string?]
       [:proj-name string?]
       [:artifact string?]
       [:project-version string?]
       [:deps [:sequential string?]]]]
     [:language {:optional true} string?]
     [:os {:optional true} string?]]]])
