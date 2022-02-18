(ns app-creator.parser.parser)

(require '[clj-yaml.core :as yaml]
         '[app-creator.parser.validator :as validator])

(defn parse-from-file [path]

  (let [text (yaml/parse-string (slurp path))]
    (if (validator/validate text) (println "VALID") (println "INVALID")) ;TODO норм сообщение, если валидация не прошла
    text))

