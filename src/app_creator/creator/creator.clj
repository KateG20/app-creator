(ns app-creator.creator.creator)

(require '[app-creator.parser.parser :as parser]
         '[app-creator.creator.db.postgresql.filler :as postgresql]
         '[app-creator.creator.server.spring.setter :as spring]
         '[app-creator.creator.server.spring.java.filler :as java]
         '[app-creator.creator.front.android.setter :as android]
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
        (and (some? db)                                     ; names: db, out-path - it's important
             (adapter/create-db))

        (and (some? server)                                 ; names: server, out-path - it's important
             (adapter/create-server))

        (and (some? front)                                  ; names: front, out-path - it's important
             (adapter/create-front))
        )
      ))
  (println "FINISHED"))

(defn start [args]
  ; Достаем аргументы из фронтенда
  (let [{:keys [in-path out-path]} (ui/get-input args)]
    (println "GOT INPUT")
    (create in-path out-path)))
