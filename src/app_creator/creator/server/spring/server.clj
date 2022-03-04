(ns app-creator.creator.server.spring.server
  (:import (java.io File)))

(require '[app-creator.creator.server.spring.templates :as templates]
         '[app-creator.creator.server.spring.defaults :as defaults]
         ;'[app-creator.filler.server :as filler]
         '[clojure.java.shell :as cmd])

(defn create-options [specs]
  (let [{:keys [build language boot-version group artifact name description
                packaging java-version project-version deps]} (:project specs)]

    (as-> {"build"        (or build defaults/build)
           "language"     (or language defaults/language)
           "boot-version" (or boot-version defaults/boot-version)
           "group-id"     (or group defaults/group)
           "artifact-id"  (or artifact defaults/artifact)
           "name"         (or name defaults/name)
           "description"  (or description defaults/description)
           "packaging"    (or packaging defaults/packaging)
           "java-version" (or java-version defaults/java-version)
           "version"      (or project-version defaults/project-version)
           "force"        "true"
           "dependencies" (clojure.string/join "," deps)} $
          (for [[k v] $]
            (format "--%s=%s " k v))
          (apply str $))))

(defn create [specs out-path]
  ; Заливаем в файл команду
  (spit (format "%s%sspringinit.bat" out-path File/separator)
        (templates/spring-init
          (:name (:project specs))
          (create-options specs)
          out-path))
  ; Вызываем выполнение этого файла
  (println (cmd/sh (format "%s%sspringinit.bat" out-path File/separator)))
  (println "server created")
  ;(filler/)
  )
