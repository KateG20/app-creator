(ns app-creator.creator.server.spring.templates
  (:import (java.io File)))

(require '[clojure.string :as string]
         '[selmer.util :refer [without-escaping]])

(use 'selmer.parser)
(selmer.util/turn-off-escaping!)

(def sep File/separator)

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

(defn service-name [controller-name & {:keys [var] :or {var false}}]
  (as-> controller-name $
        (count $)
        (- $ 10)
        (subs controller-name 0 $)
        (string/lower-case $)
        (if (false? var) (string/capitalize $) $)
        (str $ "Service")))

(defn service-interface [group artifact service-name]
    (->> ["package {{group}}.{{artifact}}.service;"
          ""
          "public interface {{service-name}} {"
          ""
          "    // methods here"
          ""
          "}"]
         (string/join \newline)
         (<<)))

(defn service-impl [group artifact service-name-impl service-name]
    (->> ["package {{group}}.{{artifact}}.service;"
          ""
          "import org.springframework.stereotype.Service;"
          ""
          "@Service"
          "public class {{service-name-impl}} implements {{service-name}} {"
          ""
          "    // methods here"
          ""
          "}"]
         (string/join \newline)
         (<<)))

(defn request [req-name uri type controller-name]
  (let [service-var-name (service-name controller-name :var true)
        type (string/capitalize type)]
    (->> ["    @{{type}}Mapping(\"{{uri}}\")"
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
         (<<))))

(defn controller [group artifact controller-name requests]
  (let [service-class-name (service-name controller-name)
        service-var-name (service-name controller-name :var true)]
    (->> ["package {{group}}.{{artifact}}.controller;"
           ""
           "import lombok.val;"
           "import org.springframework.beans.factory.annotation.Autowired;"
           "import org.springframework.http.ResponseEntity;"
           "import org.springframework.web.bind.annotation.*;"
           ""
           "@RestController"
           "public class {{controller-name}} {"
           "    @Autowired"
           "    {{service-class-name}} {{service-var-name}};"
           ""
           "{{requests}}"
           "}"]
          (string/join \newline)
          (<<))))
