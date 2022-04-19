(ns app-creator.creator.front.android.templates
  (:import (java.io File)))

(require '[clojure.string :as string]
         '[selmer.util :as sutil :refer [without-escaping]])

(use 'selmer.parser)
(sutil/turn-off-escaping!)

(def sep File/separator)

(defn gradle-init [proj-name path options]
  (let [path (string/replace path "(\\)|/" sep)]
    (->> ["@echo off"
          ""
          "cd {{path}}{{sep}}{{proj-name}}"
          "gradle init {{options}} --incubating"]
         (string/join \newline)
         (<<))))
