(ns app-creator.creator.server.spring.templates
  (:import (java.io File)))

(require '[clojure.string :as string])

(use 'selmer.parser)

(def sep File/separator)

(defn replace-several [str & replacements]
  (let [replacements (partition 2 replacements)]
    (reduce #(apply string/replace %1 %2) str replacements)))

(defn spring-init [proj-name options path]
  (let [path (string/replace path "(\\)|/" sep)]
    (as-> ["@echo off"
           ""
           "spring init {{options}}\"{{path}}{{sep}}{{proj-name}}\""] $
          (string/join \newline $)
          (<< $)))
  )

(defn path-to-packages [out-path proj-name group artifact lang]
  (cond
    (= lang "java")
    (let [group (string/replace group #"\." "/")]
      (-> "{{out-path}}/{{proj-name}}/src/main/java/{{group}}/{{artifact}}/"
          (<<)
          (string/replace "/" sep)))
    )
  )

(defn service-name [controller-name]
  (as-> controller-name $
        (count $)
        (- $ 10)
        (subs controller-name 0 $)
        (string/lower-case $)
        (str $ "Service")))

(defn request [req-name uri type controller-name]
  (let [service-var-name (service-name controller-name)]
    (->> ["    @{{(string/capitalize type)}}Mapping(\"{{uri}}\")"
          "    public ResponseEntity<Object> {{req-name}}() {"
          "        val response = {{service-var-name}}.{{req-name}}();"
          "        if (response) {"
          "            return ResponseEntity.ok(response);"
          "        } else {"
          "            return ResponseEntity.badRequest();"
          "        }"
          "    }"
          ""]
         (string/join \newline)
         (<<)))
  )

(defn controller [group artifact controller-name requests]
  (let [service-class-name (string/capitalize (service-name controller-name))
        service-var-name (service-name controller-name)]
    (as-> ["package {{group}}.{{artifact}}.controller;"
           ""
           "import lombok.val;"
           "import org.springframework.beans.factory.annotation.Autowired;"
           "import org.springframework.http.ResponseEntity;"
           "import org.springframework.web.bind.annotation.*;"
           ""
           "@RestController"
           "public class {{controller-name}} {"
           "    @Autowired"
           "    {{service-class-name)}} {{service-var-name}}"
           ""
           "{{requests}}"
           "}"] $
          (string/join \newline $)
          (<< $)
          (replace-several $ "&quot;" "\"" "&lt;" "<" "&gt;" ">")))
  )
