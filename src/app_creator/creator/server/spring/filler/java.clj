(ns app-creator.creator.server.spring.filler.java
  (:import (java.io File))
  (:use clojure.pprint))

(require '[app-creator.creator.server.spring.templates :as templates])

(use 'selmer.parser)

(def sep File/separator)

(defn create-requests [requests controller-name]
  (println "creating requests")
  (apply str
         ;(map #(let [{:keys [req-name uri type]} %]
         ;            (templates/request req-name uri type controller-name)) requests)
         (for [req requests
               :let [{:keys [req-name uri type]} req]]
           (templates/request req-name uri type controller-name))
         )
  )

(defn create-controllers [controllers group proj-name path]
  (println "creating controllers")
  (let [dir-name (<< "{{path}}controller{{sep}}files")]
    ; Создает директорию типа ...\src\main\java\com\example\demo_proj\controller\
    (clojure.java.io/make-parents dir-name)
    ;(map (fn [ctrls] (do
    ;        (println "in map")
    ;        (let [{:keys [controller-name requests]} ctrls
    ;            requests (create-requests requests controller-name)
    ;            file-name (<< "{{path}}{{sep}}controller{{sep}}{{controller-name}}.java")]
    ;        (spit file-name (templates/controller group proj-name controller-name requests)))))
    ;     controllers)

    ;(map #(get-in % [:value :values]) controllers)

    (println (for [controller controllers
                   :let [{:keys [controller-name requests]} controller
                         requests (create-requests [vec requests] controller-name)
                         file-name (<< "{{path}}{{sep}}controller{{sep}}{{controller-name}}.java")]]
               (spit file-name (templates/controller group proj-name controller-name requests))))
    )
  )

(defn test [controllers]
  (pprint controllers)
  (map (fn [ctrls] (let [{:keys [controller-name requests]} ctrls
                         file-name "file name biba boba"]
                     (pprint (str controller-name " " requests))))
       controllers)
  )

(defn fill [specs out-path]
  (let [{:keys [project url entities controllers]} specs
        {:keys [proj-name group artifact language]} project
        path (templates/path-to-packages out-path proj-name group artifact language)]
    (println "FILLING")
    ;(println (test controllers))
    (create-controllers controllers group proj-name path)
    ))