(ns app-creator.parser.parser)

(require '[clj-yaml.core :as yaml]
         '[app-creator.parser.validator :as validator])

(defn parse-from-file [path]
  ; https://github.com/metosin/malli
  (let [text (yaml/parse-string (slurp path))
        errors (validator/explain text)]
    (if errors
      (clojure.pprint/pprint errors)
      (println "YAML IS VALID"))
    ;TODO норм сообщение, если валидация не прошла
    text))

