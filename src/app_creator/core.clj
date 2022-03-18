(ns app-creator.core (:gen-class))

(require '[app-creator.creator.creator :as creator])

(defn -main [& args]
  (try
    (creator/start args)
     (catch Exception e
       (println "Exception message: " (.getMessage e))
       ))
  )