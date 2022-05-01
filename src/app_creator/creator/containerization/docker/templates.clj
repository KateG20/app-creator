(ns app-creator.creator.containerization.docker.templates
  (:import (java.io File)))

(require '[clojure.string :as string])

(use 'selmer.parser)

(def sep File/separator)

(def current-jdk-image "adoptopenjdk/openjdk11:jdk-11.0.11_9-alpine")

(defn jar-dockerfile [jar-path]
  (->> [
        "FROM {{current-jdk-image}}"
        "COPY {{jar-path}} ."
        "CMD [\"java\", \"-jar\", {{jar-path}}]"
        ]
       (string/join \newline)
       (<<)))
