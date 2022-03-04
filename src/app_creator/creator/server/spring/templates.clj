(ns app-creator.creator.server.spring.templates
  (:import (java.io File)))

(require '[clojure.string :as string])

(defn spring-init [name options path]
  (as-> ["@echo off"
         ""
         "spring init %s\"%s%s%s\""] $
        (string/join \newline $)
        (format $ options path File/separator name)))

(defn path-to-packages [out-path name group artifact lang]
  (cond
    (= lang "java")
    (format "%s/%s/src/main/java/%s/%s/" out-path name (string/replace group #"\." "/") artifact))
  )
