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
                   (vec (for [err errors
                              :let [path-err (str "Path: " (if (= 0 (s/index-of err "\nError message"))
                                                             "the very beginning of file"
                                                             "") err)]]
                          path-err))
                   errors)]

      {:errors errors :data data})

    (catch ScannerException sc-e
      (println (.getMessage sc-e))
      {:errors [(str "Error message: cannot scan file contents. "
                     "Check correctness of YAML syntax and absence of backslashes, fix and try again.")]
       :data   nil})

    (catch Exception e
      {:errors ["Error: unexpected error. Contact us to solve issue."]})))

