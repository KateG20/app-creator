(ns app-creator.core.creator.server.spring.defaults)

;(def build "maven")                                         ; outdated
(def type "gradle-project")
(def language "java")
(def boot-version "3.0.6")
(def group "com.example")
(def artifact "demoserver")
(def proj-name "demoserver")
(def description "\"Demo project for Spring Boot\"")
(def packaging "jar")
(def java-version "17")
(def project-version "0.0.1-SNAPSHOT")
(def deps '("validation" "web" "data-jpa" "lombok"))
(def controller-methods {0
                        {:name {:value "demoGet", :valid true},
                         :url {:value "/demo", :valid true},
                         :type {:value "get", :valid true}}})
(def controller-content {0
                         {:name    {:value "DemoController", :valid true}
                          :methods controller-methods}})
