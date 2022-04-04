(ns app-creator.parser.validator)

(require '[malli.core :as m]
         '[malli.error :as me]
         '[malli.dev.pretty :as pretty]
         '[clojure.string :as string]
         '[app-creator.parser.messages :as msg])

(def ip-regex #"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
(def host-regex #"^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$")
(def port-regex #"^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$")
(def controller-name-regex #"^[A-Z][\w]*Controller$")
(def method-name-regex #"^[a-z][\w]*$")
(def uri-regex #"^(\/{1}\w+)+$")

(def deps ["activemq" "actuator" "amqp" "artemis" "azure-active-directory" "azure-cosmos-db" "azure-keyvault-secrets"
           "azure-storage" "azure-support" "batch" "cache" "camel" "cloud-bus" "cloud-cloudfoundry-discovery"
           "cloud-config-client" "cloud-config-server" "cloud-contract-stub-runner" "cloud-contract-verifier"
           "cloud-eureka" "cloud-eureka-server" "cloud-feign" "cloud-function" "cloud-gateway" "cloud-gcp"
           "cloud-gcp-pubsub" "cloud-gcp-storage" "cloud-loadbalancer" "cloud-resilience4j" "cloud-starter"
           "cloud-starter-consul-config" "cloud-starter-consul-discovery" "cloud-starter-sleuth"
           "cloud-starter-vault-config" "cloud-starter-zipkin" "cloud-starter-zookeeper-config"
           "cloud-starter-zookeeper-discovery" "cloud-stream" "cloud-task" "codecentric-spring-boot-admin-client"
           "codecentric-spring-boot-admin-server" "configuration-processor" "data-cassandra" "data-cassandra-reactive"
           "data-couchbase" "data-couchbase-reactive" "data-elasticsearch" "data-jdbc" "data-jpa" "data-ldap"
           "data-mongodb" "data-mongodb-reactive" "data-neo4j" "data-r2dbc" "data-redis" "data-redis-reactive"
           "data-rest" "data-rest-explorer" "datadog" "db2" "derby" "devtools" "flapdoodle-mongo" "flyway" "freemarker"
           "geode" "graphite" "graphql" "groovy-templates" "h2" "hateoas" "hsql" "influx" "integration" "jdbc" "jersey"
           "jooq" "kafka" "kafka-streams" "liquibase" "lombok" "mail" "mariadb" "mustache" "mybatis" "mysql" "native"
           "new-relic" "oauth2-client" "oauth2-resource-server" "okta" "open-service-broker" "oracle" "picocli"
           "postgresql" "prometheus" "quartz" "restdocs" "rsocket" "scs-config-client" "scs-service-registry" "security"
           "session" "solace" "sqlserver" "testcontainers" "thymeleaf" "unboundid-ldap" "vaadin" "validation"
           "wavefront" "web" "web-services" "webflux" "websocket"])

(defn restrict-enum [elems & {:keys [in-work] :or {in-work false}}]
  "Создает перечисление со всеми возможными значениями для malli, а также сообщение об ошибке"
  (let [error-message (as-> elems e
                            (if in-work (conj e "*more options are coming soon!*") e)
                            (string/join " | " e)
                            (str "should be one of: " e))
        enum (map str elems)]
    (vec (concat [:enum {:error/message error-message}] enum))))

(def db-schema
  [:db
   [:map
    [:type (restrict-enum ["postgresql"] :in-work true)]
    [:db-name string?]                                      ; любое, т.к. скрипт не запускается. валидация на совести юзера
    [:host [:fn {:error/message msg/host-error
                 :error/path    [:db :host]}
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
       [:sequential (restrict-enum deps)]]]]                ; todo; some deps must be default
    [:properties
     [:map
      [:db
       [:map
        [:type string?]
        [:username string?]
        [:password string?]
        [:host [:fn {:error/message msg/host-error}
                (fn [host] (and (string? host)
                                (or
                                  (= "localhost" host)
                                  (re-matches ip-regex host)
                                  (re-matches host-regex host))))]]
        [:port [:fn {:error/message msg/port-error}
                (fn [port] (and (int? port) (< 1 port) (< port 65535)))]] ; Integer/parseInt if not work
        [:db-name string?]]]]]
    [:controllers
     [:sequential
      [:map
       [:controller-name [:fn {:error/message msg/controller-name-error}
                          (fn [name] (and (string? name) (re-matches controller-name-regex name)))]]
       [:requests
        [:sequential
         [:map
          [:req-name [:fn {:error/message msg/method-name-error}
                      (fn [name] (and (string? name) (re-matches method-name-regex name)))]]

          [:uri [:fn {:error/message msg/uri-path-error}
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

;(defn validate [input]
;  (m/validate input-schema input))

(defn keys-in
  "Returns a sequence of all key paths in a given map using DFS walk."
  [m]
  (letfn [(children [node]
            (let [v (get-in m node)]
              (if (string? v)
                ()
                (if (vector? v)
                  ()
                  (if (map? v)
                    (map (fn [x] (conj node x)) (keys v))
                    [])))))
          (branch? [node] (-> (children node) seq boolean))]
    (->> (keys m)
         (map vector)
         (mapcat #(tree-seq branch? children %)))))

(require '[clojure.walk :as walk])

(defn vectorize [data]
  (if (vector? data) (map vectorize data)
                     (if (map? data)
                       [(nth (keys data) 0)
                        (vectorize (nth (vals data) 0))]
                       data)))

(defn get-paths [data]
  (println "current data piece:")
  (clojure.pprint/pprint data)
  (println)
  (if (string? data)
    (str "\nError: " (apply str data))
    (if (vector? data)
      (apply str (map get-paths data))
      (if (map? data)
        ;(apply str (map (fn [x] (str ">>" (nth x 0) (get-paths (nth x 1))))))
        ;(map (fn [x] (str ">>" (nth x 0) (apply str (get-paths (nth x 1))))))
        (map (fn [[key val]]
               (let [got (apply str (get-paths val))]
                 (println (str "\nNEXT STEP: " got))
                 (str " >> " key got))) data)
        data
        ))))

(defn find-paths [data path paths]
  (if (string? data)
    [(str "\nPATHSTART: " path "\nError: " data " :PATHEND")]
    (if (vector? data)
      (map (fn [piece] (conj paths (find-paths piece path paths))) data)
      (if (map? data)
        (map (fn [[key val]]
               (let [str-key (str key)
                     clean-key (if (= ":" (subs str-key 0 1))
                                 (subs str-key 1) str-key)
                     final-key (if (every? #(Character/isDigit ^char %) clean-key) ; todo может это не номер в спике, а номер в ошибках
                                 (str "element " (+ 1 (Integer/parseInt clean-key)))
                                 clean-key)
                     separator (if (empty? path) "" " >> ")]
                 (conj paths (find-paths val (str path separator final-key) paths)))) data)
        data))))

(defn find-paths-version-100500 [data]
  (println (str "START. WE HAVE DATA: " data "\n"))

  (if (string? data)
    (do
      (println (str "WE HAVE STRING. WE RETURN [\"Error: " data "\"]\n"))
      [(str "\nError: " data)]
      )
    (if (vector? data)
      (do
        (println (str "WE HAVE VECTOR. GO INTO:"))
      ;(map find-paths-version-100500 data)
        (let [res (vec (apply concat (map (fn [x] (if x (find-paths-version-100500 x)))
             data)))]
          (println (str "WE RETURN FROM VECTOR: " res "\n"))
          res))
      (if (map? data)
        (do
         (println (str "WE HAVE MAP. GO INTO:"))
        (map (fn [[key val]]
               (let [res
                     (map (fn [v] (str key " >> " v))
                          (find-paths-version-100500 val))]
                 (println (str "FOR " key " FROM MAP WE RETURN: " res "\n"))
                 res)
               )
             data))
        data))))

(defn glob-find-paths [glob-data]
  (let [paths []]
    (letfn [(find-paths [data path]
              (if (string? data)
                (do
                  (conj paths (str path "\nError: " data))
                  ;(println (str "\nPATHS: " path "\nError: " data "END"))
                  )
                (if (vector? data)
                  (map (fn [piece] (find-paths piece path paths)) data)
                  (if (map? data)
                    (map (fn [[key val]]
                           (let [str-key (str key)
                                 clean-key (if (= ":" (subs str-key 0 1))
                                             (subs str-key 1) str-key)
                                 final-key (if (every? #(Character/isDigit ^char %) clean-key)
                                             (str "element " (+ 1 (Integer/parseInt clean-key)))
                                             clean-key)
                                 separator (if (empty? path) "" " >> ")]
                             (find-paths val (str path separator final-key) paths))) data)
                    data))))]
      (find-paths glob-data "")
      (println (str "PATHS " paths))
      paths)))

;(defn red-paths [data]
;  (reduce (fn [prev next]
;            (if (string? next)
;              (do
;                (str prev " >> " next)
;                )
;              (if (vector? d)
;                ()
;                (if (map? d)
;                  ()
;                  d))))
;          "" data)
;  )

(defn explain [input]
  ;(pretty/explain input-schema input)
  (-> input-schema
      (m/explain input)
      (me/humanize)
      (find-paths-version-100500)
      ;(find-paths "" [])
      ;(glob-find-paths)
      ;(println)
      )
  ;(let [res (me/humanize (m/explain input-schema input))]
  ;  (println "\nRES:\n")
  ;  (clojure.pprint/pprint res)
  ;  (println "\nKEYS-IN:\n")
  ;  (clojure.pprint/pprint (keys-in res))
  ;  (println "\nVECTORIZE\n")
  ;  (vectorize res)
  ;  ;(walk/postwalk
  ;  ;  (fn [v]
  ;  ;    ((println v)
  ;  ;     (if (map? v)
  ;  ;       ((juxt #(nth (keys %) 0) #(nth (vals %) 0)) v)
  ;  ;       v)))
  ;  ;  res)
  ;  )
  )

(def myres
  {:db
   {:tables
    [nil
     {:columns
      {0 {:opts ["should be one of: bool | number | string | date"]}}}]},
   :server
   {:controllers
    [{:requests {0 {:req-name ["missing required key"]}}}
     {:requests {0 {:uri ["incorrect path"]}}}]}})




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
