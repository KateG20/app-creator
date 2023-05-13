(ns app-creator.core
  (:gen-class))

(require '[app-creator.core.creator.creator :as creator])

(defn -main [& args]
  (try
    (creator/start args)
    (catch Exception e
      (println "Something went wrong. Exception message: " (.getMessage e)))))