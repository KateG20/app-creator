(ns app-creator.parser.parser)

(require '[clj-yaml.core :as yaml])

(defn parse-from-file [path]
  (yaml/parse-string (slurp path)))

; todo semantic validation

