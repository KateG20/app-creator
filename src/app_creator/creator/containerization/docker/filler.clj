(ns app-creator.creator.containerization.docker.filler
  (:import (java.io File)))

(require '[clojure.java.io :as io]
         '[app-creator.creator.containerization.docker.templates :as templates])

(use 'selmer.parser)

(def sep File/separator)

(defn create [specs out-path]
  (let [{:keys [jar-paths]} specs
        docker-path (<< "{{out-path}}{{sep}}docker{{sep}}")]

    (println "in cont!")
    ;(io/make-parents (<< "{{docker-path}}files"))
    ;(map (fn [jar] (spit docker-path (templates/jar-dockerfile ))))
    ))