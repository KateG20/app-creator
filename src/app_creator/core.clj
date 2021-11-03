(ns app-creator.core (:gen-class))

(require '[app-creator.ui.console-ui :as ui])

(defn -main []
  (ui/run)
  ;(println "App run")
  )