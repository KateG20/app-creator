(ns app-creator.creator.creator)

(require '[app-creator.parser.parser :as parser]
         '[app-creator.creator.adapter :as adapter]
         '[app-creator.creator.server.spring.setter :as setter])

(defn from-creator []
  (print "from-creator "))

(defn create [in-path out-path]
  (println (str "in creator " (setter/from-setter)))
  (let [{:keys [info db server front]} (parser/parse-from-file in-path)]
    (and (some? db)
         (let [{:keys [type]} (db)]
           (adapter/db-type-adapter type db out-path)))
    (println "PARSED")
    (and (some? server)
         (let [{:keys [type]} server]
           (adapter/server-type-adapter type server out-path)))

    ;(front/create front out-path)
    )
  (println "CREATED")
  )
