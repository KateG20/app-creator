(ns app-creator.creator.creator
  (:import (java.io File)))

(require '[app-creator.parser.parser :as parser]
         '[app-creator.creator.db.postgresql.filler :as postgresql]
         '[app-creator.creator.server.spring.setter :as spring]
         '[app-creator.creator.server.spring.java.filler :as java]
         '[app-creator.creator.client.android.setter :as android]
         '[app-creator.creator.containerization.docker.filler :as docker]
         '[app-creator.creator.adapter :as adapter]
         '[app-creator.ui.cli :as ui]
         '[clojure.java.io :as io])

(defn create [in-path out-path]
  (let [{:keys [errors data]} (parser/parse-from-file in-path)]
    (println "PARSED DATA")
    (io/make-parents (str out-path File/separator "utils" File/separator "files"))

    (cond
      (some? errors)
      (do (println "ERRORS FOUND")
          (println "Errors occurred while validating input file.\nPlease fix and try again.\n")
          (dorun (map println errors)))

      (some? data)
      (let [{:keys [info db server client containerization]} data]
        (println "NO ERRORS FOUND")
        (and (some? db)                                     ; names: db, out-path - it's important
             (adapter/create-db))

        (and (some? server)                                 ; names: server, out-path - it's important
             (adapter/create-server))

        (and (some? client)                                  ; names: client, out-path - it's important
             (adapter/create-client))

        (and (some? containerization)                        ; names: containerization, out-path - it's important
             (adapter/containerize))
        )
      ))
  (println "FINISHED"))

(defn start [args]
  ; Достаем аргументы из фронтенда
  (let [{:keys [in-path out-path]} (ui/get-input args)]
    (println "GOT INPUT")
    (create in-path out-path)))
