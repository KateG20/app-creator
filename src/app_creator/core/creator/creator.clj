(ns app-creator.core.creator.creator
  (:import (java.io File)))

(require '[app-creator.core.parser.parser :as parser]
         '[app-creator.core.validator.validator :as validator]
         '[app-creator.core.creator.db.postgresql.filler :as postgresql]
         '[app-creator.core.creator.server.spring.setter :as spring]
         '[app-creator.core.creator.server.spring.java.filler :as java]
         '[app-creator.core.creator.client.android.setter :as android]
         '[app-creator.core.creator.containerization.docker.filler :as docker]
         '[app-creator.core.creator.adapter :as adapter]
         '[app-creator.cli.cli :as ui]
         '[clojure.java.io :as io]
         '[clojure.string :as s]
         '[taoensso.timbre :as log])

(defn safe [action what?]
    (try action
         (catch Exception e
           (let [error-str (str "Something went wrong while creating " what?
                                ". Try again or contact us to solve issue.")]
             (do (println error-str)
                 {:result false :errors [error-str]} {})))))

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
        (clojure.pprint/pprint data)
        (println "Parsed, no errors found!\n")
        (and (some? db)                                     ; names: db, out-path - it's important
             (safe (adapter/create-db) 'sql-scripts))

        (and (some? server)                                 ; names: server, out-path - it's important
             (safe (adapter/create-server) 'server))

        (and (some? client)                                 ; names: client, out-path - it's important
             (safe (adapter/create-client) 'client))

        (and (some? containerization)                       ; names: containerization, out-path - it's important
             (safe (adapter/containerize) 'containerization-scripts))
        )))
  (println "Finished!\n"))

(defn err-vec [errs]
  (vec (for [err errs
             :let [path-err (str "Path: " (if (= 0 (s/index-of err "\nError message"))
                                            "the very beginning of file"
                                            "") err)]]
         path-err)))

; Возвращает мапу вида {:result ["Database" <true/false>
;                                "Server" <true/false>
;                                "Client" <true/false>
;                                "Deploy" <true/false>]
;                       :errors [errors]}
(defn create-from-web [data]
  (let [result-map {:result {"Database" true
                             "Server" true
                             "Client" true
                             "Deploy" true}
                    :errors []}]
    (if (some? data)
      (let [errors nil
            ;(validator/explain data)
            ]
        (if (some? errors)
          (update result-map :errors #(-> errors (err-vec) (concat %) (vec)))

          (let [{:keys [db server client containerization out-path]} data
                out-path (:value out-path)
                out-path-valid? (validator/validate-out-path out-path)]
            (if (not out-path-valid?)
              (update result-map :errors #(-> [(str "Output directory does not exist. "
                                                    "Please, enter absolute path to existing directory.")]
                                              (concat %) (vec)))
              (do
                (io/make-parents (str out-path File/separator "utils" File/separator "files"))

                (let [db-res (if (= "none" (:type db))
                               {:result true :errors nil}
                               (safe (adapter/create-db) 'sql-scripts)) ; names: db, out-path - it's important
                      server-res (if (= "none" (:type server))
                                   {:result true :errors nil}
                                   (safe (adapter/create-server) 'server)) ; names: server, out-path - it's important
                      client-res (if (= "none" (:type client))
                                   {:result true :errors nil}
                                   (safe (adapter/create-client) 'client)) ; names: client, out-path - it's important
                      deploy-res (if (= "none" (:type containerization))
                                   {:result true :errors nil}
                                   (safe (adapter/containerize)
                                         'containerization-scripts))] ; names: containerization, out-path - it's important

                  (-> result-map
                      (assoc-in [:result "Database"] (:result db-res))
                      (update :errors #(-> (:errors db-res) (concat %) (vec)))

                      (assoc-in [:result "Server"] (:result server-res))
                      (update :errors #(-> (:errors server-res) (concat %) (vec)))

                      (assoc-in [:result "Client"] (:result client-res))
                      (update :errors #(-> (:errors client-res) (concat %) (vec)))

                      (assoc-in [:result "Deploy"] (:result deploy-res))
                      (update :errors #(-> (:errors deploy-res) (concat %) (vec)))))

                ))))

        ;(log/info (str "\nGot data!\n\n" data "\n\n"))

        ;(str "\n\nresult: " (get-in data [:client :android :endpoints]))
        )
      (update result-map :errors #(-> ["No data provided"] (concat %) (vec))))))

(defn start [args]
  ; Достаем аргументы из консольного ввода
  (let [{:keys [in-path out-path]} (ui/get-input args)]
    (create in-path out-path)))
