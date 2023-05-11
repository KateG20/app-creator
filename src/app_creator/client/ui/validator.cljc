(ns app-creator.client.ui.validator
  (:require [clojure.string :as cstr]
            #?(:clj  [clojure.java.io :as io]
               :cljs [cljs.nodejs :as nodejs])
            [cljs.nodejs :as nodejs]
    ["fs-extra" :as fs-extra]
            ;#?(:cljs [fs :as fs])

    ;[app-creator.server.macros :as m :include-macros true]
    ;[app-creator.client.ui.mcr :as m]
            )
  #?(:cljs (:require-macros [app-creator.client.ui.validator :refer [my-macro infix]]))

  ;#?(:cljs(:require-macros [app-creator.client.ui.mcr :refer [my-precomputed-macro-cljs]]))
  ;(:require-macros [app-creator.server.macros :as m])
  )

;(defn my-function [arg]
;  (my-precomputed-macro-cljs (str "(:foo " arg ")")))

(def ip-regex #"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
; using re-pattern requires double-escape
(def url-regex (re-pattern "^\\/([!#$&\\-;=?-\\[\\]_a-z~]|%[0-9a-fA-F]{2}|\\/?)+$"))
(def java-name-regex #"^[a-zA-Z0-9_]+$")
(def out-path-regex #"^([^\.])+$")

(def http-methods ["get" "head" "post" "put" "patch" "delete" "options"])
;(defn save-file [path file]
;  #?(:clj
;     (do
;       (println "clojure code")
;       (let [content (slurp file)]
;         (spit path content)))
;     :cljs (println "i can't save file!")))

;(defmacro foo
;  [path]
;  `(str "clJS - exists? " (and
;                           (.isDirectory (io/file path))
;                           (some? (re-matches out-path-regex path))) ~path))

(set! *warn-on-infer* true)
;(nodejs/enable-util-print!)
;(def fs (nodejs/require "fs"))

(defn directory-exists? [path]
  (let [
        ;fs (nodejs/require "fs")
        ;js-path ^js/__dirname path
        ]
    (println "i'm in func!")
    ;(str "clJS - exists? "(.existsSync fs path))
    ))
  ;#?(:clj
  ;   (str "clj - exists? " (and
  ;                           (.isDirectory (io/file path))
  ;                           (some? (re-matches out-path-regex path))))
  ;   :cljs (let [fs (nodejs/require "fs")
  ;               js-path ^js/__dirname path]
  ;           (str "clJS - exists? "(.existsSync fs js-path)))
  ;   ;(let [
  ;   ;            ;filesystem (fs/getTemporary)
  ;   ;            fso (js/ActiveXObject. "Scripting.FileSystemObject")
  ;   ;            ; fso.FolderExists(sFolderPath)
  ;   ;            ]
  ;   ;        (str "clJS - exists? " (.FolderExists fso path)))
  ;   ))
#?(:clj (defmacro my-macro
          [global-path]
          ;(path)
          ;`(str "clJS - exists? " ~(.isDirectory ~(clojure.java.io/file ~path))
          ;      ;(and
          ;      ;                    (~.isDirectory (~clojure.java.io/file ~path))
          ;      ;                    1
          ;      ;                    (some? (re-matches out-path-regex (str ~path)))) ~path
          ;      )

          ;(list 'str "clJS - exists? " (.isDirectory (clojure.java.io/file (str path))))

          (list 'str "clJS - exists? "
                ;(.isDirectory (clojure.java.io/file 'out-dir-path))
                " | PATH: " global-path
                " | " (str global-path)
                " | " (= global-path "C:\\Users\\Lenovo X1\\Downloads\\ttttt")
                " | " (ns-resolve (find-ns 'app-creator.client.events) global-path))

          ;`()

          ;(list (second path) (first path) (last path))
          ;(let [isdir "a"
          ;(.isDirectory (clojure.java.io/file `(~path)))
          ;]
          ;`(str "clJS - exists? " (str ~path) " path: " (str `(~path)) " " ~isdir))
          ))

#?(:clj (defmacro infix
          "Use this macro when you pine for the notation of your childhood"
          [infixed]
          (list (second infixed) (first infixed) (last infixed))))

(defn trim-input [s]
  (cstr/trim s))

(defn empty-or-matches [val regex]
  (let [val (trim-input val)]
    (or (empty? val)
        (re-matches regex val))))

(defn valid-host? [host]
  (or (= "localhost" host)
      (empty-or-matches host ip-regex)))

(defn valid-url? [url]
  (empty-or-matches url url-regex))

(defn valid-java-name? [name]
  (empty-or-matches name java-name-regex))

(defn valid-dir? [path]                                     ; todo тут можно добавить reader conditionals
  (empty-or-matches path out-path-regex))

(defn valid-req-type? [req-type]
  (some #(= (cstr/lower-case (trim-input req-type)) %) (conj http-methods "")))

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
  (nil? (some false? (find-all-valid db))))
