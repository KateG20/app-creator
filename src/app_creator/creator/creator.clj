(ns app-creator.creator.creator)

(require '[app-creator.parser.parser :as parser]
         '[app-creator.creator.adapter :as adapter]
         '[app-creator.ui.cli :as ui])

(defn create [in-path out-path]
  (let [{:keys [info db server front]} (parser/parse-from-file in-path)]
    ;(and (some? db)
    ;     (let [{:keys [type]} (db)]
    ;       (adapter/db-type-adapter type db out-path)))
    (println "PARSED")
    (and (some? server)
         (let [{:keys [type]} server]
           (adapter/server-type-adapter type server out-path)))

    ;(front/create front out-path)
    )
  (println "FINISHED")
  )

(defn start [args]
  ; Достаем аргументы из фронтенда
  (let [{:keys [in-path out-path]} (ui/get-input args)]
    (println "GOT INPUT")
    (create in-path out-path)))
