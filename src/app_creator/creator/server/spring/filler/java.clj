(ns app-creator.creator.server.spring.filler.java)

(require '[app-creator.creator.server.spring.templates :as templates])

(defn create-requests [requests]
  (apply str (map #(let [{:keys [req-name uri type]} %]
                     (templates/request req-name uri type)) requests))
  )

(defn create-controllers [controllers group proj-name]
  (apply str (map #(let [{:keys [controller-name requests]} %
                         requests (create-requests requests)]
                     (templates/controller group proj-name controller-name requests)) controllers))
  )

(defn fill [specs out-path]
  (let [{:keys [project url entities controllers]} specs
        {:keys [proj-name group artifact language]} project
        path (templates/path-to-packages out-path proj-name group artifact language)]
    ;(spit (templates/controller group proj-name controller-name))
    )
  )