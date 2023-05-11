;(ns app-creator.server.macros
;  ;(:require #?(:clj [clojure.java.io :as io]))
;  )
;
;(def out-path-regex #"^([^\.])+$")
;
;#?( :clj (defmacro foo
;  [path]
;  `(
;    ;(require '[clojure.java.io :as io])
;    (
;     str "clJS - exists? " (and
;                            (.isDirectory (clojure.java.io/file path))
;                            1
;                            (some? (re-matches out-path-regex (str ~path)))) ~path))))
