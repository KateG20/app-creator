(ns app-creator.creator.server.spring.filler.java
  (:import (java.io File))
  (:use clojure.pprint))

(require '[app-creator.creator.server.spring.templates :as templates])

(use 'selmer.parser)

(def sep File/separator)

(defn create-requests [requests controller-name]
  (println "creating requests")
  (apply str
         (for [req requests
               :let [{:keys [req-name uri type]} req]]
           (templates/request req-name uri type controller-name)))
  )

(defn create-controllers [controllers group artifact path]
  (println "creating controllers")
  (let [dir-name (<< "{{path}}controller{{sep}}files")]
    ; Создает директорию типа ...\src\main\java\com\example\demo_proj\controller\
    (clojure.java.io/make-parents dir-name)

    (println (for [controller controllers
                   :let [{:keys [controller-name requests]} controller
                         requests (create-requests (vec requests) controller-name)
                         controllers (templates/controller group artifact controller-name requests)
                         file-name (<< "{{path}}controller{{sep}}{{controller-name}}.java")]]
                 (spit file-name controllers))))
  )

(defn fill [specs out-path]
  (let [{:keys [project url entities controllers]} specs
        {:keys [proj-name group artifact language]} project
        path (templates/path-to-packages out-path proj-name group artifact language)]
    (println "FILLING")
    (create-controllers controllers group artifact path)
    ))