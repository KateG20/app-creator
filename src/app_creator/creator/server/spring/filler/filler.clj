(ns app-creator.creator.server.spring.filler.filler)

(require '[app-creator.creator.adapter :as adapter]
         '[app-creator.creator.server.spring.defaults :as defaults])

(defn fulfill [specs out-path]
  (adapter/server-lang-adapter
    (or (:language (:project specs))
        defaults/language)
    specs
    out-path)
  )