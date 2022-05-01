(ns app-creator.parser.opts)

(def dbms-opts ["postgresql"])
(def server-opts ["spring"])
(def build-opts ["maven" "gradle"])
(def lang-opts ["java" "kotlin" "groovy"])
(def boot-v-opts ["2.5.11" "2.5.12" "2.6.5" "2.6.6" "2.7.0" "3.0.0"])
(def packaging-opts ["jar" "war" "pom" "ear" "rar" "par"])
(def java-v-opts ["1.8" "8" "9" "10" "11" "12" "13" "14" "15" "16" "17"])
(def col-type-opts ["bool" "number" "string" "date"])
(def server-mapping-opts ["post" "put" "get" "patch" "delete"])
(def client-mapping-opts ["post" "put" "get" "delete"])
(def client-type-opts ["android"])
(def client-language-opts ["java"])
(def test-framework-opts ["junit" "testng" "spock" "junit-jupiter"])
(def cont-opts ["docker"])
(def deps-opts ["activemq" "actuator" "amqp" "artemis" "azure-active-directory" "azure-cosmos-db" "azure-keyvault-secrets"
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