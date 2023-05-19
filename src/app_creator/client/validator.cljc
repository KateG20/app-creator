(ns app-creator.client.validator
  (:require [clojure.string :as cstr]
            #?(:clj  [clojure.java.io :as io]
               :cljs [cljs.nodejs :as nodejs])))

(def ip-regex                                               ; ok
  #"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
; using re-pattern requires double-escape
(def url-regex (re-pattern "^\\/([?=$&\\-_a-z~#]|\\/?|\\{[a-zA-Z0-9]+\\})+$")) ; ok
(def java-name-regex #"^[a-zA-Z0-9_]+$")                    ; ok
(def java-collection-regex #"^[A-Z][a-zA-Z0-9_]*<[a-zA-Z0-9_]+>$") ; ok

(def dir-path-regex #"^[A-Za-z]:{0,1}[\w \/-]*$")           ; ok
(def folder-regex #"^[\w -]*$")                             ; ok

(def password-regex #"^.+$")                                ; ok
(def username-regex #"^[^ ]+$")                             ; ok

(def sql-identifier-regex #"^[a-zA-Z_][\w]{0,62}$")         ; ok

(def port-regex                                             ; ok
  #"^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$")
(def docker-containers-regex #"^[a-zA-Z0-9][a-zA-Z0-9_.-]*$") ; ok
(def docker-image-regex #"^[a-zA-Z0-9_][a-zA-Z0-9_.-]{0,127}$") ;ok
(def docker-network-regex #"^[a-zA-Z0-9_][a-zA-Z0-9_.-]{0,14}$") ; ok
(def jar-path-regex #"^[\w-]:{0,1}[\w _\/-]*[\w-]\.jar$")   ; ok
(def controller-name-regex #"^[a-zA-Z0-9_]+Controller$")    ; ok
(def package-name-dot-regex #"^([A-Za-z]{1}[A-Za-z\d_]*\.)+[A-Za-z][A-Za-z\d_]*$") ; ok
(def package-name-regex #"^[A-Za-z]{1}[A-Za-z\d_]*$")       ; ok

(def http-methods ["get" "head" "post" "put" "patch" "delete" "options"])
(def column-opts ["bool" "number" "string" "date" "id"])

(defn directory-exists? [path]
  #?(:clj
     (and
       (.isDirectory (io/file path))
       (some? (re-matches dir-path-regex path)))))

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

(defn valid-java-obj? [name]
  (or (empty? name)
      (re-matches java-name-regex name)
      (re-matches java-collection-regex name)))

(defn valid-dir? [path]                                     ; todo тут можно добавить reader conditionals
  (empty-or-matches path dir-path-regex))

(defn valid-req-type? [req-type]
  (some #(= (cstr/lower-case req-type) %) (conj http-methods "")))

(defn find-all-valid [m]
  (reduce-kv (fn [prev k v]
               (if (= k :valid)
                 (conj prev v)
                 (if (map? v)
                   (into [] (concat prev (find-all-valid v)))
                   prev)))
             []
             m))

(defn at-least-one-component [m]
  (let [chosen-components [(get-in m [:db :type])
                           (get-in m [:server :type])
                           (get-in m [:client :type])
                           (get-in m [:containerization :type])]]
    (not (empty? (filter #(not= "none" %) chosen-components)))))

(defn whole-map-valid? [db]
  (nil? (some false? (find-all-valid db))))

(defn valid-postgres-db-name? [value]
  (empty-or-matches value sql-identifier-regex))

(defn valid-postgres-username? [value]
  (empty-or-matches value username-regex))

(defn valid-postgres-password? [value]
  (empty-or-matches value password-regex))

(defn valid-postgres-table-name? [value]
  (empty-or-matches value sql-identifier-regex))

(defn valid-postgres-column-name? [value]
  (empty-or-matches value sql-identifier-regex))

(defn valid-postgres-column-opts? [value]
  (some #(= (cstr/lower-case value) %) (conj column-opts "")))

(defn valid-spring-group? [value]
  (empty-or-matches value package-name-dot-regex))

(defn valid-spring-artifact? [value]
  (empty-or-matches value package-name-regex))

(defn valid-spring-proj-name? [value]
  (empty-or-matches value package-name-regex))

(defn valid-spring-db-type? [value]
  (if (and (not (empty? value)) (not= "postgresql" value)) nil true))

(defn valid-spring-db-username? [value]
  (empty-or-matches value username-regex))

(defn valid-spring-db-password? [value]
  (empty-or-matches value password-regex))

(defn valid-spring-db-sql-host? [value]
  (or (= "localhost" value)
      (empty-or-matches value ip-regex)))

(defn valid-spring-db-sql-port? [value]
  (empty-or-matches value port-regex))

(defn valid-spring-db-name? [value]
  (empty-or-matches value sql-identifier-regex))

(defn valid-spring-controller-name? [value]
  (empty-or-matches value controller-name-regex))

(defn valid-spring-method-name? [value]
  (valid-java-name? value))

(defn valid-spring-method-url? [value]
  (empty-or-matches value url-regex))

(defn valid-spring-method-type? [value]
  (valid-req-type? value))

(defn valid-android-proj-name? [value]
  (empty-or-matches value package-name-regex))

(defn valid-android-package-name? [value]
  (empty-or-matches value package-name-dot-regex))

(defn valid-android-server-host? [value]
  (or (= "localhost" value)
      (empty-or-matches value ip-regex)))

(defn valid-android-server-port? [value]
  (empty-or-matches value port-regex))

(defn valid-docker-container-image-name? [value]
  (empty-or-matches value docker-image-regex))

(defn valid-docker-container-container-name? [value]
  (empty-or-matches value docker-containers-regex))

(defn valid-docker-container-dir-name? [value]
  (empty-or-matches value folder-regex))

(defn valid-docker-container-backend-container-name? [value]
  (empty-or-matches value docker-containers-regex))

(defn valid-docker-container-jar-path? [value]
  (empty-or-matches value jar-path-regex))

(defn valid-docker-container-port? [value]
  (empty-or-matches value port-regex))

(defn valid-docker-container-password? [value]
  (empty-or-matches value password-regex))

(defn valid-docker-network? [value]
  (empty-or-matches value docker-network-regex))

(defn always-valid? [value] true)

