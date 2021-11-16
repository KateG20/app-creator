(ns app-creator.parser.parser)

(require '[clj-yaml.core :as yaml]
         '[defun.core :refer [defun]])

(defn parse-from-file [path]
  ;(yaml/parse-string (slurp path))
  (println (yaml/parse-string (slurp path)))
  )

(defun get-info-about
         (["db"] (println 'db))
         (["server"] (println 'back))
         ([other] (throw (Throwable. (format "Incorrect name of app part: %s", other))))
  )

