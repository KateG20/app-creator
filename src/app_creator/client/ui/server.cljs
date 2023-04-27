(ns app-creator.client.ui.server
  (:require [re-frame.core :as re-frame]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [reagent.core :as reagent]))

(defn choose-type []
  (fn []
    [:div
     [:div
      {:class "col-12 pt-5"}
      [:p {:class "mb-4 pb-2"} "Choose framework"]]
     [:div
      {:class "col-12 pb-5"}
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "server-type",
        :id    "spring",
        ;:checked ""
        }]
      [:label
       {:class "for-checkbox-comp-type", :for "spring"}
       "Spring Boot"]
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "server-type",
        :id    "django"}]
      [:label {:class "for-checkbox-comp-type", :for "django"} "Django"]
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "server-type",
        :id    "nodejs"}]
      [:label
       {:class "for-checkbox-comp-type", :for "nodejs"}
       "Node.js"]]]))


; Метод запроса (строка в боксе)
(defn controller-method-item [box row]
  (let [request (str "col-request-" box "-" row)
        url (str "col-url-" box "-" row)
        mapping (str "col-mapping-" box "-" row)]
    [:li
     {:class "table-row-li"}
     [:div
      {:class "col-12 pb-5 input-field"}
      [:input
       {:type         "text",
        :name         "text",
        :id           request,
        :autocomplete "off",
        :required     true}]
      [:label
       {:for request, :class "label-name"}
       [:span {:class "content-name"} "Method name"]]]
     [:div
      {:class "col-12 pb-5 input-field"}
      [:input
       {:type         "text",
        :name         "text",
        :id           url,
        :autocomplete "off",
        :required     true}]
      [:label
       {:for url, :class "label-name"}
       [:span {:class "content-name"} "Request URL"]]]
     [:div
      {:class "col-12 pb-5 input-field"}
      [:input
       {:type         "text",
        :name         "text",
        :id           mapping,
        :autocomplete "off",
        :required     true}]
      [:label
       {:for mapping, :class "label-name"}
       [:span {:class "content-name"} "Request type"]]]]
    ))

; принимает двумерный массив типа [[0 0] [0 1] [0 2] [1 1]]
; и для аргумента box=0 находит число 2
(defn find-last-item-number-in-box [box vector]
  (second (last (filter #(= box (first %)) vector))))

; Кнопка для добавления метода в контроллер
(defn plus-controller-method-button [box]
  (fn [box]
    (let [id (str "plus-server-method-" box)
          current-items (re-frame/subscribe [::subs/controller-methods])
          new-col-num (+ 1 (find-last-item-number-in-box box @current-items))
          new-item-vec (reagent/atom [box new-col-num])]
      [:div
       [:button
        {:type "button", :name "plus", :id id
         :on-click #(re-frame/dispatch [::events/add-controller-method-item @new-item-vec])}]
       [:label
        {:class "plus-label mt-20", :for id}
        "+"]
       ])))

; Кнопка для добавления контроллера
(defn plus-controller-button []
  (fn []
    (let [current-items (re-frame/subscribe [::subs/controllers])
          new-item-vec (reagent/atom (+ 1 (last @current-items)))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type     "button",
         :name     "plus-controller",
         :id       "plus-controller"
         :on-click #(re-frame/dispatch [::events/add-controller-item @new-item-vec])}]
       [:label {:class "mb-4 pb-2 plus-label", :for "plus-controller"} "+"]])))

; Список методов в контроллере (строки в боксе)
(defn controller-box-methods [box]
  (fn [box]
    (let [all-items @(re-frame/subscribe [::subs/controller-methods])
          our-box-items (filter #(= box (first %)) all-items)]
      [:ul
       {:class "db-col-list"}
       (for [item our-box-items]
         (controller-method-item (first item) (second item)))
       ])))

; Список контроллеров (боксов)
(defn controller-list []
  (let [controllers (re-frame/subscribe [::subs/controllers])]
    (fn []
      [:ul
       {:class "controller-list"}
       (for [c @controllers]
       [:li
        {:class "col-12 pb-5 opts-group center box"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           (str "controller-name-" c),
           :autocomplete "off",
           :required     true}]
         [:label
          {:for (str "controller-name-" c), :class "label-name"}
          [:span {:class "content-name"} "Controller name"]]]
        [controller-box-methods c]
        [plus-controller-method-button c]
        ])])))

(defn server-ui []
  (fn []
    [:div
     [:div
      {:class "col-12 pt-5 big-text"}
      [:p {:class "mb-4 pb-2"} "2. Server"]]

     [choose-type]

     [:div
      {:class "col-12 pt-5 for-spring center", :style       ;"display: block;"
       {:display "block"}}
      [:div
       {:class "col-12 pt-5"}
       [:p {:class "mb-4 pb-2"} "Project options"]]
      [:div
       {:class "col-12 pt-5 center opts", :style            ;"display: flex;"
        {:display "flex"}}
       [:div
        {:class "col-12 pb-5 opts-group center"}
        [:p {:class "mb-4 pb-2"} "Build Tool"]
        [:div
         {:class "col-12 pb-5 thin"}
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "build-tool",
           :id    "gradle",
           ;:checked ""
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "gradle"}
          "Gradle"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "build-tool",
           :id    "maven"}]
         [:label
          {:class "for-checkbox-comp-type", :for "maven"}
          "Maven"]]]
       [:div
        {:class "col-12 pb-5 opts-group center"}
        [:p {:class "mb-4 pb-2"} "Language"]
        [:div
         {:class "col-12 pb-5 thin"}
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "lang",
           :id    "java",
           ;:checked ""
           }]
         [:label {:class "for-checkbox-comp-type", :for "java"} "Java"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "lang",
           :id    "kotlin"}]
         [:label
          {:class "for-checkbox-comp-type", :for "kotlin"}
          "Kotlin"]]]
       [:div
        {:class "col-12 pb-5 opts-group center"}
        [:p {:class "mb-4 pb-2"} "Packaging"]
        [:div
         {:class "col-12 pb-5 thin"}
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "packaging",
           :id    "jar",
           ;:checked ""
           }]
         [:label {:class "for-checkbox-comp-type", :for "jar"} "Jar"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "packaging",
           :id    "war"}]
         [:label {:class "for-checkbox-comp-type", :for "war"} "War"]]]]
      [:div
       {:class "col-12 pt-5 center opts", :style            ;"display: flex;"
        {:display "flex"}}
       [:div
        {:class "col-12 pb-5 opts-group center"}
        [:p {:class "mb-4 pb-2"} "Boot Version"]
        [:div
         {:class "col-12 pb-5 thin"}
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "boot-v",
           :id    "3.1.0"}]
         [:label
          {:class "for-checkbox-comp-type", :for "3.1.0"}
          "3.1.0"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "boot-v",
           :id    "3.0.6"}]
         [:label
          {:class "for-checkbox-comp-type", :for "3.0.6"}
          "3.0.6"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "boot-v",
           :id    "3.0.5",
           ;:checked ""
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "3.0.5"}
          "3.0.5"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "boot-v",
           :id    "2.7.11"}]
         [:label
          {:class "for-checkbox-comp-type", :for "2.7.11"}
          "2.7.11"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "boot-v",
           :id    "2.7.10"}]
         [:label
          {:class "for-checkbox-comp-type", :for "2.7.10"}
          "2.7.10"]]]
       [:div
        {:class "col-12 pb-5 opts-group center"}
        [:p {:class "mb-4 pb-2"} "Java Version"]
        [:div
         {:class "col-12 pb-5 thin"}
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "java-v",
           :id    "20"}]
         [:label {:class "for-checkbox-comp-type", :for "20"} "20"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "java-v",
           :id    "17",
           ;:checked ""
           }]
         [:label {:class "for-checkbox-comp-type", :for "17"} "17"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "java-v",
           :id    "11"}]
         [:label {:class "for-checkbox-comp-type", :for "11"} "11"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "java-v",
           :id    "8"}]
         [:label {:class "for-checkbox-comp-type", :for "8"} "8"]]]]
      [:div
       {:class "col-12 pb-5 center no-pt"}
       [:div
        {:class "col-12 pb-5 input-field"}
        [:input
         {:type         "text",
          :name         "text",
          :id           "proj-group",
          :autocomplete "off",
          :required     true}]
        [:label
         {:for "proj-group", :class "label-name"}
         [:span {:class "content-name"} "Group"]]]
       [:div
        {:class "col-12 pb-5 input-field"}
        [:input
         {:type         "text",
          :name         "text",
          :id           "artifact",
          :autocomplete "off",
          :required     true}]
        [:label
         {:for "artifact", :class "label-name"}
         [:span {:class "content-name"} "Artifact"]]]
       [:div
        {:class "col-12 pb-5 input-field"}
        [:input
         {:type         "text",
          :name         "text",
          :id           "proj-name",
          :autocomplete "off",
          :required     true}]
        [:label
         {:for "proj-name", :class "label-name"}
         [:span {:class "content-name"} "Project name"]]]
       [:div
        {:class "col-12 pb-5 input-field"}
        [:input
         {:type         "text",
          :name         "text",
          :id           "description",
          :autocomplete "off",
          :required     true}]
        [:label
         {:for "description", :class "label-name"}
         [:span {:class "content-name"} "Description"]]]]
      [:div
       {:class "col-12 pt-5"}
       [:p {:class "mb-4 pb-2"} "Properties"]]
      [:div
       {:class "col-12 pb-5 opts-group center"}
       [:p {:class "mb-4 pb-2"} "Database"]
       [:div
        {:class "col-12 pb-5 center no-pt"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "prop-db-type",
           :autocomplete "off",
           :required     true}]
         [:label
          {:for "prop-db-type", :class "label-name"}
          [:span {:class "content-name"} "Type"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "prop-db-host",
           :autocomplete "off",
           :required     true}]
         [:label
          {:for "prop-db-host", :class "label-name"}
          [:span {:class "content-name"} "Host"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "prop-db-port",
           :autocomplete "off",
           :required     true}]
         [:label
          {:for "prop-db-port", :class "label-name"}
          [:span {:class "content-name"} "Port"]]]]
       [:div
        {:class "col-12 pb-5 center no-pt"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "prop-db-name",
           :autocomplete "off",
           :required     true}]
         [:label
          {:for "prop-db-name", :class "label-name"}
          [:span {:class "content-name"} "DB name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "prop-db-username",
           :autocomplete "off",
           :required     true}]
         [:label
          {:for "prop-db-username", :class "label-name"}
          [:span {:class "content-name"} "Username"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "prop-db-password",
           :autocomplete "off",
           :required     true}]
         [:label
          {:for "prop-db-password", :class "label-name"}
          [:span {:class "content-name"} "Password"]]]]]
      [:div
       {:class "col-12 pt-5"}
       [:p {:class "mb-4 pb-2"} "Controllers"]]
      [:div
       {:class "col-12 pt-5 center opts", :style            ;"display: flex;"
        {:display "flex"}}
       [controller-list]]
      [plus-controller-button]]

     [:div
      {:class "col-12 pt-5 for-django center", :style       ;"display: none;"
       {:display "none"}}
      "Coming soon!"]
     [:div
      {:class "col-12 pt-5 for-nodejs center", :style       ;"display: none;"
       {:display "none"}}
      "Coming soon!"]
     ]
    ))


