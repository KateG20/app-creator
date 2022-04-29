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

(defn add-main-activity [path package-name]
  (spit path (templates/main-activity package-name)))

(defn create-network-service [path package-name host port]
  (spit path (templates/network-service package-name host port)))

(defn create-requests [requests]
  (apply str
         (for [req requests
               :let [{:keys [req-name uri type entity]} req]]
           (templates/request req-name uri type entity))))

(defn create-entity-imports [package-name requests]
  "Поступает вектор реквестов - это мапы, в числе ключей которых есть :entity,
  из которых нужно составить список импортов для шапки java-файла"
  (reduce (fn [cur next] (str cur "import " package-name "." (:entity next) ";\n"))
          ""
          requests))

(defn create-api-interface [path package-name requests]
  "В интерфейс также нужно залить импорты для всех сущностей, которые будут использоваться
  в реквестах. Поэтому отдельно создается комплект импортов entity-imports"
  (let [requests (create-requests (vec requests))
        ;entity-imports (create-entity-imports package-name (vec requests))
        entity-imports nil
        ]
    (spit path (templates/api-interface package-name requests entity-imports))))

(defn create-pojos [path package-name requests]
  "Для сущности из каждого реквеста проверяет, существует ли уже POJO для нее.
  Если нет, создает и заливает туда его"
  (dorun (for [req requests
               :let [{:keys [entity]} req
                     pojo-file-name (str path entity ".java")]]
           (if (not (.exists (io/as-file pojo-file-name)))
             (let [pojo (templates/pojo package-name entity)]
               (spit pojo-file-name pojo))))))

(defn fill [specs out-path]
  (let [{:keys [proj-name package-name host port requests]} specs
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
        network-service-path (<< "{{package-dir}}NetworkService.java")
        api-path (<< "{{package-dir}}MyApi.java")]
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
    (println "creating files with configs...")
    (add-root-build-gradle root-build-gradle-path)
    (add-app-build-gradle app-build-gradle-path package-name)
    (add-properties-gradle props-path)
    (add-styles-res values-dir)
    (add-manifest manifest-path package-name)

    (println "creating files for activities...")
    (add-main-activity activity-path package-name)
    (add-main-activity-layout layout-dir)

    (println "creating files for api...")
    (create-network-service network-service-path package-name host port)
    (create-api-interface api-path package-name requests)
    (create-pojos package-dir package-name requests)

    (println "project filled!")))
