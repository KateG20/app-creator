(ns app-creator.parser.validator)

(require '[malli.core :as m]
         '[malli.error :as me]
         '[clojure.string :as string]
         '[app-creator.parser.messages :as msg])

(def ip-regex #"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
(def host-regex #"^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$")
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
   [:map {:closed true}
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
      [:map {:closed true}
       [:table-name string?]
       [:columns
        [:sequential
         [:map {:closed true}
          [:col-name string?]
          [:opts (restrict-enum ["bool" "number" "string" "date"])]]]]]]]
    ]])

(def server-schema
  [:server
   [:map {:closed true}
    [:type (restrict-enum ["spring"] :in-work true)]
    [:project
     [:map {:closed true}
      [:build {:optional true} (restrict-enum ["maven" "gradle"])]
      [:language {:optional true} (restrict-enum ["java" "kotlin" "groovy"])]
      [:boot-version {:optional true} (restrict-enum ["2.5.11" "2.5.12" "2.6.5" "2.6.6" "2.7.0" "3.0.0"])]
      [:group {:optional true} string?]
      [:artifact {:optional true} string?]
      [:proj-name {:optional true} string?]
      [:description {:optional true} string?]
      [:packaging {:optional true} (restrict-enum ["jar" "war" "pom" "ear" "rar" "par"])]
      [:java-version {:optional true} (restrict-enum ["1.8" "8" "9" "10" "11" "12" "13" "14" "15" "16" "17"])]
      [:project-version {:optional true} string?]
      [:deps {:optional true}
       [:sequential (restrict-enum deps)]]]]
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
                                  (re-matches ip-regex host)
                                  (re-matches host-regex host))))]]
        [:sql-port [:fn {:error/message msg/port-error}
                (fn [port] (and (int? port) (< 1 port) (< port 65535)))]]
        [:db-name string?]]]]]
    [:controllers
     [:sequential
      [:map {:closed true}
       [:controller-name [:fn {:error/message msg/controller-name-error}
                          (fn [name] (and (string? name) (re-matches controller-name-regex name)))]]
       [:requests
        [:sequential
         [:map {:closed true}
          [:req-name [:fn {:error/message msg/method-name-error}
                      (fn [name] (and (string? name) (re-matches method-name-regex name)))]]

          [:uri [:fn {:error/message msg/uri-path-error}
                 (fn [uri] (and (string? uri) (re-matches uri-regex uri)))]]

          [:mapping (restrict-enum ["post" "put" "get" "patch" "delete"])]]]]]]]]])

(def client-schema
  [:client
   [:map {:closed true}
    [:type (restrict-enum ["android"] :in-work true)]
    [:language string?]
    [:endpoints
     [:sequential
      [:map {:closed true}
       [:name string?]
       [:endpoint string?]
       [:type string?]]]]]])

; TODO ВСЁ НЕПРАВИЛЬНО. Содержимое может быть разное в зависимости от типа проекта. (((((

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
  (-> input-schema
      (m/explain input)
      (me/humanize)
      (find-error-paths)))

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
