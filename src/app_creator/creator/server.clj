(ns app-creator.creator.server
  (:import (java.io File)))

(require '[app-creator.creator.templates :as tmpl]
         '[app-creator.creator.defaults :as dflt]
         '[clojure.java.shell :as cmd])

(defn create-options [specs]
  (let [{:keys [build language boot-version group artifact name description
                packaging java-version project-version deps]} (:project specs)]

    (as-> {"build"        (or build dflt/build)
           "language"     (or language dflt/language)
           "boot-version" (or boot-version dflt/boot-version)
           "group-id"     (or group dflt/group)
           "artifact-id"  (or artifact dflt/artifact)
           "name"         (or name dflt/name)
           "description"  (or description dflt/description)
           "packaging"    (or packaging dflt/packaging)
           "java-version" (or java-version dflt/java-version)
           "version"      (or project-version dflt/project-version)
           "force"        "true"
           "dependencies" (clojure.string/join "," deps)} $
          (for [[k v] $]
            (format "--%s=%s " k v))
          (apply str $))))

(defn create [specs out-path]
  ; Заливаем в файл команду
  (spit (format "%s%sspringinit.bat" out-path File/separator)
        (tmpl/spring-init
          (:name (:project specs))
          (create-options specs)
          out-path))
  ; Вызываем выполнение этого файла
  (println (cmd/sh (format "%s%sspringinit.bat" out-path File/separator)))
  (println "server created")
  )
