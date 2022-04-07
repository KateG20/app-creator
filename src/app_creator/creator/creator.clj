(ns app-creator.creator.creator)

(require '[app-creator.parser.parser :as parser]
         '[app-creator.creator.adapter :as adapter]
         '[app-creator.ui.cli :as ui])

(defn create [in-path out-path]
  (let [{:keys [errors data]} (parser/parse-from-file in-path)]
    (println "PARSED DATA")
    (cond
      (some? errors)
      (do (println "ERRORS FOUND")
          (println "Errors occurred while validating input file.\nPlease fix and try again.\n")
          (dorun (map #(println (str "Path: " %)) errors))) ; todo лучше "Path" добавлять где-то раньше

      (some? data)
      (let [{:keys [info db server front]} data]
        (println "NO ERRORS FOUND")
        ;(and (some? db)
        ;     (let [{:keys [type]} (db)]
        ;       (adapter/db-type-adapter type db out-path)))

        ;(and (some? server)
        ;     (let [{:keys [type]} server]
        ;       (adapter/server-type-adapter type server out-path)))
        )))
  (println "FINISHED"))

(defn start [args]
  ; Достаем аргументы из фронтенда
  (let [{:keys [in-path out-path]} (ui/get-input args)]
    (println "GOT INPUT")
    (create in-path out-path)))
