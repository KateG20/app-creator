(ns app-creator.parser.parser)

(require '[clj-yaml.core :as yaml]
         '[app-creator.parser.validator :as validator]
         '[malli.provider :as mp])

(defn parse-from-file [path]                                ; todo https://github.com/metosin/malli#dot визуализация
  ; https://github.com/metosin/malli
  (let [text (yaml/parse-string (slurp path))
        errors (validator/explain text)]
    (clojure.pprint/pprint text)
    ;(println "\nPROVIDEDSTART\n")
    ;(clojure.pprint/pprint (mp/provide text))
    ;(println "\nPROVIDEDEND\n")
    (if errors
      (clojure.pprint/pprint errors)
      (println "YAML IS VALID"))
    text))

