(ns app-creator.creator.creator)

(require '[app-creator.parser.parser :as parser]
         '[app-creator.creator.db :as db]
         '[app-creator.creator.server :as server])

(defn create [in-path out-path]
  (let [{:keys [info db server front]} (parser/parse-from-file in-path)]
    ;(db/create db out-path)
    (server/create server out-path)
    ;(front/create front out-path)
    )
  )
