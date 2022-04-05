(ns app-creator.parser.parser)

(require '[clj-yaml.core :as yaml]
         '[app-creator.parser.validator :as validator]
         '[malli.provider :as mp])

(defn parse-from-file [path]                                ; todo https://github.com/metosin/malli#dot визуализация
  ; https://github.com/metosin/malli
  (let [text (yaml/parse-string (slurp path))
        errors (validator/explain text)]

    (if errors
      (do (println "ERRORS:\n")
      (dorun (map println errors)))
      (println "YAML IS VALID"))
    text))

