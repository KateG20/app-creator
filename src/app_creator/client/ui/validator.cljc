(ns app-creator.client.ui.validator
  (:require [clojure.string :as cstr]
    ;[clojure.java.io :as io]
            ))

(def ip-regex #"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
; using re-pattern requires double-escape
(def url-regex (re-pattern "^\\/([!#$&\\-;=?-\\[\\]_a-z~]|%[0-9a-fA-F]{2}|\\/?)+$"))
(def java-name-regex #"^[a-zA-Z0-9_]+$")
(def out-path-regex #"^([^\.])+$")

(def http-methods ["get" "head" "post" "put" "patch" "delete" "options"])

(defn trim-input [s]
  (cstr/trim s))

(defn empty-or-matches [val regex]
  (or (empty? val)
      (re-matches regex val)))

(defn valid-host? [host]
  (or (= "localhost" host)
      (empty-or-matches host ip-regex)))

(defn valid-url? [url]
  (empty-or-matches url url-regex))

(defn valid-java-name? [name]
  (empty-or-matches name java-name-regex))

(defn valid-dir? [path]
  (empty-or-matches path out-path-regex))

(defn valid-req-type? [req-type]
  (some #(= (cstr/lower-case req-type) %) (conj http-methods "")))
