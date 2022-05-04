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

(defn safe [action what?]
  (try action
       (catch Exception e
         (println (str "Something went wrong while creating " what?
                       ". Try again or contact us to solve issue.")))))

(defn create [in-path out-path]
  (println "Parsing input file...")
  (let [{:keys [errors data]} (parser/parse-from-file in-path)]
    (io/make-parents (str out-path File/separator "utils" File/separator "files"))

    (cond
      (some? errors)
      (do
        (println (str "Something went wrong.\n"
                      "Errors occurred while validating input file.\n"
                      "Please fix them and try again.\n"))
        (dorun (map println errors)))

      (some? data)
      (let [{:keys [info db server client containerization]} data]
        (println "Parsed, no errors found!\n")
        ;(and (some? db)                                     ; names: db, out-path - it's important
        ;     (safe (adapter/create-db) 'sql-scripts))
        ;
        ;(and (some? server)                                 ; names: server, out-path - it's important
        ;     (safe (adapter/create-server) 'server))
        ;
        ;(and (some? client)                                 ; names: client, out-path - it's important
        ;     (safe (adapter/create-client) 'client))
        ;
        ;(and (some? containerization)                       ; names: containerization, out-path - it's important
        ;     (safe (adapter/containerize) 'containerization-scripts))
        )))
  (println "Finished!\n"))

(defn start [args]
  ; Достаем аргументы из фронтенда
  (let [{:keys [in-path out-path]} (ui/get-input args)]
    (create in-path out-path)))
