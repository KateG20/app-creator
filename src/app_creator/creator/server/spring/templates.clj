(ns app-creator.creator.server.spring.templates
  (:import (java.io File)))

(require '[clojure.string :as string])

(use 'selmer.parser)

(def sep File/separator)

(defn spring-init [name options path]
  (let [path (string/replace path "(\\)|/" sep)]
    (as-> ["@echo off"
           ""
           "spring init {{options}}\"{{path}}{{sep}}{{name}}\""] $
          (string/join \newline $)
          (<< $)))
  )

(defn path-to-packages [out-path name group artifact lang]
  (cond
    (= lang "java")
    (let [group (string/replace group #"\." "/")]
      (-> "{{out-path}}/{{name}}/src/main/java/{{group}}/{{artifact}}/"
          (string/replace "/" "{{sep}}")
          (<<)))
    )
  )
