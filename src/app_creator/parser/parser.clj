(ns app-creator.parser.parser)

(require '[clj-yaml.core :as yaml]
         '[app-creator.parser.validator :as validator]
         '[malli.provider :as mp])

(defn parse-from-file [path]                                ; todo https://github.com/metosin/malli#dot визуализация
  ; https://github.com/metosin/malli
  (let [data (yaml/parse-string (slurp path))
        errors (validator/explain data)]

    {:errors errors :data data}))

