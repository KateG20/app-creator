(ns app-creator.core.creator.server.spring.java.filler
  (:require [taoensso.timbre :as log])
  (:import (java.io File)))

(require '[app-creator.core.creator.server.spring.java.templates :as templates])

(use 'selmer.parser)

(def sep File/separator)

(defn create-dir [path name]
  (let [dir-name (<< "{{path}}{{name}}{{sep}}files")]
    ; Создает директорию типа ...\src\main\java\com\example\demo_proj\{{name}}\
    (clojure.java.io/make-parents dir-name)))

(defn create-requests [requests controller-name]
  (apply str
         (for [[num req] requests
               :let [{:keys [name url type]} req
                     service-var-name (templates/service-name controller-name :var? true)
                     entity-name (templates/entity-name controller-name)]]
           (templates/request (:value name) (:value url) (:value type) service-var-name entity-name))))

(defn create-controllers [controllers packages path]
  (create-dir path "controller")
  (dorun (for [[num controller] controllers
               :let [{:keys [name methods]} controller
                     controller-name (:value name)
                     requests (create-requests methods controller-name)
                     controllers (templates/controller packages controller-name requests)
                     file-name (<< "{{path}}controller{{sep}}{{controller-name}}.java")]]
           (spit file-name controllers))))

(defn create-service-methods [requests controller-name & {:keys [implementation?] :or {implementation? false}}]
  (apply str
         (for [[num req] requests
               :let [{:keys [name]} req
                     entity-name (templates/entity-name controller-name)]]
           (templates/service-method entity-name (:value name) :implementation? implementation?))))

(defn create-services [controllers packages path]
  (create-dir path "service")
  (dorun (for [[num controller] controllers
               :let [{:keys [name methods]} controller
                     controller-name (:value name)
                     service-name (templates/service-name controller-name)
                     service-name-impl (str service-name "Impl")
                     entity-name (templates/entity-name controller-name)

                     service-interface-methods (create-service-methods methods controller-name)
                     service-impl-methods (create-service-methods methods controller-name :implementation? true)

                     service-interface (templates/service-interface packages service-name entity-name service-interface-methods)
                     service-impl (templates/service-impl packages service-name-impl service-name entity-name service-impl-methods)

                     file-name-interface (<< "{{path}}service{{sep}}{{service-name}}.java")
                     file-name-impl (<< "{{path}}service{{sep}}{{service-name-impl}}.java")]]
           (do
             (spit file-name-interface service-interface)
             (spit file-name-impl service-impl)))))

(defn create-entities [controllers packages path]
  (create-dir path "entity")
  (dorun (for [[num controller] controllers
               :let [{:keys [name]} controller
                     entity-name (templates/entity-name (:value name))
                     entity (templates/entity packages entity-name)
                     file-name (<< "{{path}}entity{{sep}}{{entity-name}}.java")]]
           (spit file-name entity))))

(defn create-repos [controllers packages path]
  (create-dir path "repository")
  (dorun (for [[num controller] controllers
               :let [{:keys [name]} controller
                     entity-name (templates/entity-name (:value name))
                     repo (templates/repo packages entity-name) ; todo можно заполнять методами
                     file-name (<< "{{path}}repository{{sep}}{{entity-name}}Repository.java")]]
           (spit file-name repo))))

(defn create-properties [properties path]
  (let [props (templates/props properties)]
    (spit path props)))

(defn fill [specs out-path]
  (try (let [{:keys [project properties controllers]} specs
             {:keys [proj-name group artifact language]} project
             group (:value group)
             artifact (:value artifact)
             proj-name (:value proj-name)
             packages (str group "." artifact)
             path (templates/path-to-code out-path proj-name group artifact language)
             props-path (templates/path-to-props out-path proj-name group artifact language)
             controllers (:content controllers)]
         (create-controllers controllers packages path)
         (create-services controllers packages path)
         (create-entities controllers packages path)
         (create-repos controllers packages path)
         (create-properties properties props-path)
         {:result true :errors nil})
       (catch Exception e
         {:result false :errors [e]})))