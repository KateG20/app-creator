(ns app-creator.creator.server.spring.filler.java
  (:import (java.io File)))

(require '[app-creator.creator.server.spring.templates :as templates])

(use 'selmer.parser)

(def sep File/separator)

(defn create-requests [requests]
  (apply str (map #(let [{:keys [req-name uri type]} %]
                     (templates/request req-name uri type)) requests))
  )

(defn create-controllers [controllers group proj-name path]
  (map #(let [{:keys [controller-name requests]} %
              requests (create-requests requests)]
          (spit (<< "{{path}}{{sep}}controller{{sep}}{{controller-name}}.java")
                (templates/controller group proj-name controller-name requests)))
       controllers)
  )

(defn fill [specs out-path]
  (let [{:keys [project url entities controllers]} specs
        {:keys [proj-name group artifact language]} project
        path (templates/path-to-packages out-path proj-name group artifact language)]
    ;(create-controllers controllers group proj-name path)
    )
  )