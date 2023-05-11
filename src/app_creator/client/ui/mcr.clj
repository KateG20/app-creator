;(ns app-creator.client.ui.mcr
;  (:require [clojure.java.io :as io]))
;
;(def out-path-regex #"^([^\.])+$")
;
;(defmacro foo
;  [path]
;  `(str "clJS - exists? " (and
;                              ~(.isDirectory (clojure.java.io/file ~path))
;                              1
;                              (some? (re-matches out-path-regex (str ~path)))) ~path))
;
;(defn my-precomputed-macro [arg]
;  (str  arg))
;
;;; Use the `clojure.core/defmacro` macro to define the precomputed macro
;(clojure.core/defmacro my-precomputed-macro-cljs [arg]
;  (read-string (my-precomputed-macro arg)))
;
;(defn dir-exists?
;  [path]
;  `(str "clJS - exists? " (and
;                            (.isDirectory (clojure.java.io/file path))
;                            1
;                            (some? (re-matches out-path-regex (str path)))) path))
;
;(defmacro str-result []
;  )
