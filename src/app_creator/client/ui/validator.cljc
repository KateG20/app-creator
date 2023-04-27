(ns app-creator.client.ui.validator
  (:require [clojure.string :as cs]
    ;[clojure.java.io :as io]
            ))

(def ip-regex #"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
(def out-path-regex #"^([^\.])+$")

(defn trim-input [s]
  (cs/trim s))

(defn valid-host? [host]
  (or (= "localhost" host)
      (or (empty? host)
          (some? (re-matches ip-regex host)))))

(defn valid-dir? [path]
  ;(and
  (or (empty? path) (some? (re-matches out-path-regex path)))
  ;(.isDirectory (io/file %))
  ;)
  )
