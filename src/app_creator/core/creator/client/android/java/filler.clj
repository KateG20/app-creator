(ns app-creator.core.creator.client.android.java.filler
  (:require [app-creator.core.creator.client.android.defaults :as defaults])
  (:import (java.io File)))

(require '[app-creator.core.creator.client.android.java.templates :as templates]
         '[clojure.java.shell :as cmd]
         '[clojure.java.io :as io]
         '[clojure.string :as string])

(use 'selmer.parser)

(def sep File/separator)

(defn has-val [opt]
  (if (empty? (:value opt)) nil (:value opt)))

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

(defn create-requests [endpoints]
  (apply str
         (for [[num endp] endpoints
               :let [{:keys [url name request body]} endp
                     url (or (has-val url) "/demo")
                     name (or (has-val name) "demoGet")
                     request (or (has-val request) "get")
                     body (or (has-val body) "DemoClass")]]
           (templates/request name url request body))))

(defn create-entity-imports [package-name requests]
  "Поступает вектор реквестов - это мапы, в числе ключей которых есть :entity,
  из которых нужно составить список импортов для шапки java-файла"
  (reduce (fn [cur next] (str cur "import " package-name "." (:entity next) ";\n"))
          ""
          requests))

(defn create-api-interface [path package-name requests]
  "В интерфейс может быть нужно залить импорты для всех сущностей, которые будут использоваться
  в реквестах. Поэтому отдельно можно создать комплект импортов entity-imports и передать его
  в функцию. У нас сейчас всё в одном пакете, поэтому импорты не требуются, но вдруг"
  (let [requests (if (nil? requests) defaults/endpoint-content requests)
        requests (create-requests requests)
        ;entity-imports (create-entity-imports package-name (vec requests))
        ]
    (spit path (templates/api-interface package-name requests))))

; Из дженерик типа "List<Obj>" достает "Obj"
(defn type-from-generic [body]
  (if (= (last body) \>)
    (subs body
          (-> body (.indexOf "<") (inc))
          (-> body (count) (dec)))
    body))

(defn create-pojos [path package-name requests]
  "Для сущности из каждого реквеста проверяет, существует ли уже POJO для нее.
  Если нет, создает и заливает туда его"
  (let [requests (if (nil? requests) defaults/endpoint-content requests)]
        (dorun (for [[num req] requests
               :let [{:keys [body]} req
                     body (or (has-val body) "DemoClass")
                     body (type-from-generic body)
                     pojo-file-name (str path body ".java")]]
           (if (not (.exists (io/as-file pojo-file-name)))
             (let [pojo (templates/pojo package-name body)]
               (spit pojo-file-name pojo)))))))

(defn fill [specs out-path]
  (try (let [{:keys [proj-name package-name server-host server-port endpoints]} specs
             proj-name (or (has-val proj-name) defaults/proj-name)
             package-name (or (has-val package-name) defaults/package-name)
             server-host (or (has-val server-host) defaults/server-host)
             server-port (or (has-val server-port) defaults/server-port)
             endpoints (if (empty? (:content endpoints))
                         defaults/endpoint-content (:content endpoints))

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

         ; create directories for values and layout in resources
         (dorun (for [dir [values-dir layout-dir]]
                  (io/make-parents (str dir "files"))))

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

         (create-network-service network-service-path package-name server-host server-port)
         (create-api-interface api-path package-name endpoints)
         (create-pojos package-dir package-name endpoints)
         ;true
         {:result true :errors nil})
       (catch Exception e
         ;false
         {:result false :errors [e]})))
