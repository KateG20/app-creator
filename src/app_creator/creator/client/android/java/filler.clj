(ns app-creator.creator.client.android.java.filler
  (:import (java.io File)))

(require '[app-creator.creator.client.android.java.templates :as templates])

(use 'selmer.parser)

(def sep File/separator)

(defn add-root-build-gradle [path]
  (spit path templates/root-build-gradle))

(defn add-app-build-gradle [path package-name]
  (->> package-name
       (templates/app-build-gradle)
       (spit path)))

(defn add-styles-res [res-dir]
  (-> res-dir
      (clojure.java.io/make-parents)
      (spit templates/styles)))

(defn add-manifest [path package-name]
  (->> package-name
       (templates/manifest)
       (spit path)))

(defn fill [specs out-path]
  (let [{:keys [proj-name package-name endpoints]} specs
        proj-dir (<< "{{out-path}}{{sep}}{{proj-name}}{{sep}}")
        root-build-gradle-path (<< "{{proj-dir}}build.gradle")
        app-build-gradle-path (<< "{{proj-dir}}app{{sep}}build.gradle")
        res-dir (<< "{{proj-dir}}src{{sep}}main{{sep}}res{{sep}}values{{sep}}files")
        manifest-path (<< "{{proj-dir}}src{{sep}}main{{sep}}AndroidManifest.xml")
        ]
    (println "adding files to android project...")
    (add-root-build-gradle root-build-gradle-path)
    (add-app-build-gradle app-build-gradle-path package-name)
    (add-styles-res res-dir)
    (add-manifest manifest-path package-name)
    (println "project filled!")
    ))
