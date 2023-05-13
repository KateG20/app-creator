(ns app-creator.core.creator.server.spring.templates
  (:import (java.io File)))

(require '[clojure.string :as string]
         '[selmer.util :as sutil :refer [without-escaping]])

(use 'selmer.parser)
(sutil/turn-off-escaping!)

(def sep File/separator)

(defn spring-init [proj-name options path]
  (let [path (string/replace path "(\\)|/" sep)]
    (->> ["@echo off"
          ""
          "spring init {{options}}\"{{path}}{{sep}}{{proj-name}}\""]
         (string/join \newline)
         (<<))))
