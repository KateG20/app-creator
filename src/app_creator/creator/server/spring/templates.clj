(ns app-creator.creator.server.spring.templates
  (:import (java.io File)))

(require '[clojure.string :as string])

(use 'selmer.parser)

(def sep File/separator)

(defn from-templates []
  (print "from-templates "))

(defn spring-init [name options path]
  (let [path (string/replace path "(\\)|/" sep)]
    (as-> ["@echo off"
           ""
           "spring init {{options}}\"{{path}}{{sep}}{{name}}\""] $
          (string/join \newline $)
          (<< $)))
  )

(defn path-to-packages [out-path proj-name group artifact lang]
  (cond
    (= lang "java")
    (let [group (string/replace group #"\." "/")]
      (-> "{{out-path}}/{{proj-name}}/src/main/java/{{group}}/{{artifact}}/"
          (string/replace "/" "{{sep}}")
          (<<)))
    )
  )

(defn service-name [controller-name]
  (as-> controller-name $
        (count $)
        (- $ 10)
        (subs controller-name 0 $)
        (string/lower-case $)
        (str $ "Service")))

(defn request [req-name uri type]
  (->> ["    @{{(string/capitalize type)}}Mapping(\"{{uri}}\")"
        "    public ResponseEntity<Object> {{req-name}}() {"]

       (string/join \newline)
       (<<))
  )

(defn controller [group proj-name controller-name requests]
  (let [service-class-name (string/capitalize (service-name controller-name))
        service-var-name (service-name controller-name)]
    (->> ["package {{group}}.{{proj-name}}.controller;"
          ""
          "import org.springframework.beans.factory.annotation.Autowired;"
          ""
          "@RestController"
          "public class {{controller-name}} {"
          "    @Autowired"
          "    {{service-class-name)}} {{service-var-name}}"
          ""
          "{{requests}}"
          "}"]
         (string/join \newline)
         (<<)))
  )
