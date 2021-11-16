(ns app-creator.core (:gen-class))

(require '[app-creator.ui.cli :as ui])

(defn -main [& args]
  (try
    (ui/run args)
    ;(println (re-matches #"^(.+)(\/|\\)([^(\/|\\)]+)(\.yaml|\.yml)$" "C:\\Users\\Lenovo X1\\Downloads\\yaml.ml"))
     (catch Exception e
       (println "Exception message: " (.getMessage e))
       ))
  ;(println "App run")
  )

;(-main)