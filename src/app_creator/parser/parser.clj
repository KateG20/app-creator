(ns app-creator.parser.parser
  (:import (org.yaml.snakeyaml.scanner ScannerException)))

(require '[clj-yaml.core :as yaml]
         '[app-creator.parser.validator :as validator]
         '[app-creator.parser.messages :as m]
         '[clojure.string :as s])

(defn parse-from-file [path]                                ; todo https://github.com/metosin/malli#dot визуализация
  ; https://github.com/metosin/malli

  (try
    (let [data (yaml/parse-string (slurp path))
          errors (validator/explain data)
          errors (if (some? errors)
                     (if (s/includes? (nth errors 0) "invalid type")
                     [(str "Error message: " m/invalid-yaml-error)]
                     (vec (for [err errors
                                :let [path-err (str "Path: " err)]]
                            path-err)))
                   errors)]
      (clojure.pprint/pprint data)
      {:errors errors :data data})

    (catch ScannerException sc-e
      (println (.getMessage sc-e))
      {:errors [(str "Error message: cannot scan file contents. "
                     "Check correctness of YAML syntax and absence of backslashes, fix and try again.")]
       :data nil})

    (catch Exception e
      {:errors ["Something went wrong while parsing. Try again or contact us to solve issue."]})))

