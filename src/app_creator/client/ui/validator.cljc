(ns app-creator.client.ui.validator
  (:require [clojure.string :as cstr]
    ;[clojure.java.io :as io]
            [taoensso.timbre :as log]))

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

;(defn find-all-nested
;  [m k]
;  (->> (tree-seq map? vals m)
;       (filter map?)
;       (keep k)))

;(defn flatten-map [m result]
;  (if (map? m)
;    (flatten
;    (for [[k v] m]
;      (if (= k :valid)
;        v
;      (cons (flatten-map v) result))))))

;(defn find-all-valid [m result]
;  (for [[k v] m]
;    (if (= k :valid)
;      v
;      ())))

(defn find-all-valid [m]
  (reduce-kv (fn [prev k v]
               (if (= k :valid)
                 (conj prev v)
                 (if (map? v)
                   (into [] (concat prev (find-all-valid v)))
                   prev)))
             []
             m))


(defn whole-map-valid? [db]
  ;(flatten-map db)
  ;(if (map? db) (flatten-map db))
  ;(str (->> (tree-seq map? vals db)
  ;          (filter map?)
  ;          (keep :valid)))
  ;(str (some false?
  ;      (->> (tree-seq map? vals db)
  ;     (filter map?)
  ;     (keep :valid))))
  ;(some false? (for [[k v] (flatten (seq db))] (and (= k :valid) (= v true))))
  ;(str (find-all-valid db))
  (nil? (some false? (find-all-valid db)))
  ;(some false? (find-all-valid db))
  )
