(ns app-creator.server.service
  (:require [app-creator.core.creator.creator :as creator]
            [taoensso.timbre :as log]))

(defn create-projects [data]
  (let [result-map (creator/create-from-web data)]
    (Thread/sleep 1000)
    ;(log/info (str "\n[App-Creator] RESULT MAP: " result-map))
    result-map))