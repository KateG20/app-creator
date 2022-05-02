(ns app-creator.parser.parser
  (:import (org.yaml.snakeyaml.scanner ScannerException)))

(require '[clj-yaml.core :as yaml]
         '[app-creator.parser.validator :as validator]
         '[app-creator.parser.messages :as m])

(defn parse-from-file [path]                                ; todo https://github.com/metosin/malli#dot визуализация
  ; https://github.com/metosin/malli

  (try
    (let [data (yaml/parse-string (slurp path))
          errors (validator/explain data)
          errors (if (some? errors)
                   (vec (for [err errors
                              :let [path-err (str "Path: " err)]]
                          path-err))
                   errors)]
      {:errors errors :data data})

    (catch ScannerException sc-e
      {:errors [(str "Error message: " m/jar-path-error)] :data nil})

    (catch Exception e
      {:errors ["Something went wrong while parsing. Try again or contact us to solve issue."]})))

