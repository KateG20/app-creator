(ns app-creator.core (:gen-class))

(require '[app-creator.ui.cli :as ui])

(defn -main [& args]
  (try
    (ui/run args)
     (catch Exception e
       (println "Exception message: " (.getMessage e))
       ))
  )