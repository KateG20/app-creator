(ns app-creator.creator.client.android.java.filler
  (:import (java.io File)))

(require '[app-creator.creator.client.android.java.templates :as templates]
         '[clojure.java.shell :as cmd]
         '[clojure.java.io :as io]
         '[clojure.string :as string])

(use 'selmer.parser)

(def sep File/separator)

(defn add-root-build-gradle [path]
  (spit path templates/root-build-gradle))

(defn add-app-build-gradle [path package-name]
  (->> package-name
       (templates/app-build-gradle)
       (spit path)))

(defn add-styles-res [values-dir]
  (-> values-dir
      (str sep "styles.xml")
      (spit templates/styles)))

(defn add-main-activity-layout [layout-dir]
  (-> layout-dir
      (str sep "activity_main.xml")
      (spit templates/main-activity-layout)))

(defn add-manifest [path package-name]
  (->> package-name
       (templates/manifest)
       (spit path)))

(defn add-properties-gradle [path]
  (spit path templates/gradle-properties))

(defn delete-waste [out-path dir-path & [what?]]
  (let [bat-path (str out-path sep "delete.bat")]
    (spit bat-path
          (cond
            (= what? 'resources) (templates/delete-resources dir-path)
            (= what? 'app-class) (templates/delete-app-class dir-path))
          :append true)
    bat-path))

;(defn delete-app-class [path package-dir]
;  (let [bat-path (str path sep "delete.bat")]
;    (spit bat-path (templates/delete-app-class package-dir) :append true)
;    (cmd/sh bat-path)))

(defn add-main-activity [path package-name]
  (spit path (templates/main-activity package-name)))

(defn fill [specs out-path]
  (let [{:keys [proj-name package-name endpoints]} specs
        package-path (string/replace package-name #"\." "/")
        proj-dir (<< "{{out-path}}{{sep}}{{proj-name}}{{sep}}")
        app-dir (<< "{{proj-dir}}app{{sep}}")
        package-dir (<< "{{app-dir}}src{{sep}}main{{sep}}java{{sep}}{{package-path}}{{sep}}")
        root-build-gradle-path (<< "{{proj-dir}}build.gradle")
        app-build-gradle-path (<< "{{app-dir}}build.gradle")
        res-dir (<< "{{app-dir}}src{{sep}}main{{sep}}res{{sep}}")
        values-dir (<< "{{res-dir}}values{{sep}}")
        layout-dir (<< "{{res-dir}}layout{{sep}}")
        manifest-path (<< "{{app-dir}}src{{sep}}main{{sep}}AndroidManifest.xml")
        props-path (<< "{{proj-dir}}gradle.properties")
        activity-path (<< "{{package-dir}}MainActivity.java")
        ]
    (println "adding files to android project...")

    ; create directories for values and layout in resources
    (dorun (for [dir [values-dir layout-dir]]
             (clojure.java.io/make-parents (str dir "files"))))

    ; delete unnecessary "resources" folder and "App.java" file
    (let [del-path (do
                     (delete-waste out-path package-dir 'app-class)
                     (delete-waste out-path app-dir 'resources))]
      (cmd/sh del-path)
      (io/delete-file del-path true))

    ; add and/or fill necessary files
    (add-root-build-gradle root-build-gradle-path)
    (add-app-build-gradle app-build-gradle-path package-name)
    (add-properties-gradle props-path)
    (add-styles-res values-dir)
    (add-manifest manifest-path package-name)
    (add-main-activity activity-path package-name)
    (add-main-activity-layout layout-dir)

    (println "project filled!")))
