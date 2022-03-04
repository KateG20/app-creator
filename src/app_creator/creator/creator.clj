(ns app-creator.creator.creator)

(require '[app-creator.parser.parser :as parser]
         '[app-creator.creator.db :as db]
         '[app-creator.creator.server :as server]
         '[app-creator.creator.adapter :as adapter])

(defn create [in-path out-path]
  (let [{:keys [info db server front]} (parser/parse-from-file in-path)]
    (and (some? db)
         (let [{:keys [type]} (db)]
           (adapter/db-type-adapter type db out-path)))

    (and (some? server)
         (let [{:keys [type]} (server)]
           (adapter/server-type-adapter type server out-path)))

    ;(front/create front out-path)
    )
  (println "created")
  )
