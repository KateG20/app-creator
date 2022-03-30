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
                            (string/join "\n- " e)
                            (str "should be one of:\n- " e))
        enum (map str elems)]
    (vec (concat [:enum {:error/message error-message}] enum))))

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
       [:sequential (restrict-enum deps)]]]]                             ; todo; some deps must be default
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
