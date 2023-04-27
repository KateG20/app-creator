(ns app-creator.client.ui.containerization
  (:require [re-frame.core :as re-frame]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [reagent.core :as reagent]))

;------------------------------------------------JAR containers-----------------------------------

; Характеристика контейнера (строки в боксе)
(defn jar-cont-box-chars [box]
  (fn [box]
    (let [cont-name (str "docker-jar-cont-name-" box)
          img-name (str "docker-jar-img-name-" box)
          run-dir (str "docker-jar-run-dir-" box)
          jar-path (str "docker-jar-path-" box)]
      [:div
       {:class "col-12 pb-5 opts-group center no-pb"}
       [:div
        {:class "col-12 pb-5 center no-pt"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           cont-name,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for cont-name, :class "label-name"}
          [:span {:class "content-name"} "Container name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           img-name,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for img-name, :class "label-name"}
          [:span {:class "content-name"} "Image name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           run-dir,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for run-dir, :class "label-name"}
          [:span {:class "content-name"} "Run directory name"]]]]
       [:div
        {:class "col-12 pb-5 center no-pt full-w"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           jar-path,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for jar-path, :class "label-name"}
          [:span {:class "content-name"} "Path to JAR"]]]]])))

; Список джар-контейнеров (боксов)
(defn jar-conts-list []
  (let [jar-conts (re-frame/subscribe [::subs/jar-conts])]
    (fn []
      [:ul
       {:class "center no-marker"}
       (for [j @jar-conts]
       [:li
        {:class "box"}
        [jar-cont-box-chars j]])])))


; Кнопка для добавления джар-контейнера
(defn plus-jar-cont-button []
  (fn []
    (let [current-items (re-frame/subscribe [::subs/jar-conts])
          new-item-vec (reagent/atom (+ 1 (last @current-items)))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button", :name "plus-jar-cont", :id "plus-jar-cont"
         :on-click #(re-frame/dispatch [::events/add-jar-cont-item @new-item-vec])}]
       [:label
        {:class "mb-4 pb-2 plus-label", :for "plus-jar-cont"}
        "+"]])))

;------------------------------------------------NGINX containers-----------------------------------

; Характеристика контейнера (строки в боксе)
(defn nginx-cont-box-chars [box]
  (fn [box]
    (let [cont-name (str "docker-nginx-cont-name-" box)
          img-name (str "docker-nginx-img-name-" box)
          run-dir (str "docker-nginx-run-dir-" box)
          back-cont (str "docker-ngx-back-cont-" box)]
      [:div
       {:class "col-12 pb-5 opts-group center no-pb"}
       [:div
        {:class "col-12 pb-5 center no-pt"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           cont-name,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for cont-name, :class "label-name"}
          [:span {:class "content-name"} "Container name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           img-name,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for img-name, :class "label-name"}
          [:span {:class "content-name"} "Image name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           run-dir,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for run-dir, :class "label-name"}
          [:span {:class "content-name"} "Run directory name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           back-cont,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for back-cont, :class "label-name"}
          [:span {:class "content-name"} "Backend container"]]]]])))

; Список nginx-контейнеров (боксов)
(defn nginx-conts-list []
  (let [nginx-conts (re-frame/subscribe [::subs/nginx-conts])]
    (fn []
      [:ul
       {:class "center no-marker"}
       (for [n @nginx-conts]
         [:li
          {:class "box"}
          [nginx-cont-box-chars n]])])))

; Кнопка для добавления nginx-контейнера
(defn plus-nginx-cont-button []
  (fn []
    (let [current-items (re-frame/subscribe [::subs/nginx-conts])
          new-item-vec (reagent/atom (+ 1 (last @current-items)))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button", :name "plus-nginx-cont", :id "plus-nginx-cont"
         :on-click #(re-frame/dispatch [::events/add-nginx-cont-item @new-item-vec])}]
       [:label
        {:class "mb-4 pb-2 plus-label", :for "plus-nginx-cont"}
        "+"]])))

;------------------------------------------------POSTGRES containers-----------------------------------

; Характеристика контейнера (строки в боксе)
(defn postgres-cont-box-chars [box]
  (fn [box]
    (let [cont-name (str "docker-pg-cont-name-" box)
          pg-port (str "docker-pg-port-" box)
          pg-pwd (str "docker-pg-pwd-" box)]
      [:div
       {:class "col-12 pb-5 opts-group center no-pb"}
       [:div
        {:class "col-12 pb-5 center no-pt"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           cont-name,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for cont-name, :class "label-name"}
          [:span {:class "content-name"} "Container name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           pg-port,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for pg-port, :class "label-name"}
          [:span {:class "content-name"} "DB port"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           pg-pwd,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for pg-pwd, :class "label-name"}
          [:span {:class "content-name"} "DB password"]]]]])))

; Список nginx-контейнеров (боксов)
(defn postgres-conts-list []
  (let [postgres-conts (re-frame/subscribe [::subs/postgres-conts])]
    (fn []
      [:ul
       {:class "center no-marker"}
       (for [n @postgres-conts]
         [:li
          {:class "box"}
          [postgres-cont-box-chars n]])])))

; Кнопка для добавления postgres-контейнера
(defn plus-postgres-cont-button []
  (fn []
    (let [current-items (re-frame/subscribe [::subs/postgres-conts])
          new-item-vec (reagent/atom (+ 1 (last @current-items)))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button", :name "plus-postgres-cont", :id "plus-postgres-cont"
         :on-click #(re-frame/dispatch [::events/add-postgres-cont-item @new-item-vec])}]
       [:label
        {:class "mb-4 pb-2 plus-label", :for "plus-postgres-cont"}
        "+"]])))

;------------------------------------------------------------------------------------------------------

(defn cont-ui []
  (fn []
    [:div
     [:div
      {:class "col-12 pt-5 big-text"}
      [:p {:class "mb-4 pb-2"} "4. Deploy"]]
     [:div
      {:class "col-12 pt-5"}
      [:p {:class "mb-4 pb-2"} "Choose platform"]]

     [:div
      {:class "col-12 pb-5"}
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "deploy-type",
        :id    "docker",
        ;:checked ""
        }]
      [:label {:class "for-checkbox-comp-type", :for "docker"} "Docker"]
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "deploy-type",
        :id    "vagrant"}]
      [:label
       {:class "for-checkbox-comp-type", :for "vagrant"}
       "Vagrant"]]

     [:div
      {:class "col-12 pt-5 for-docker center", :style       ;"display: block;"
       {:display "block"}}
      [:div {:class "col-12 pt-5"} [:p {:class "mb-4 pb-2"} "Network"]]
      [:div
       {:class "col-12 pb-5 opts-group center"}
       [:div
        {:class "col-12 pb-5 center no-pt"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "network-name",
           :autocomplete "off",
           :required     true}]
         [:label
          {:for "network-name", :class "label-name"}
          [:span {:class "content-name"} "Network name"]]]]]
      [:div
       {:class "col-12 pt-5"}
       [:p {:class "mb-4 pb-2"} "JAR containers"]]

      [jar-conts-list]
      [plus-jar-cont-button]

      [:div
       {:class "col-12 pt-5 pt-10 mt-20"}
       [:p {:class "mb-4 pb-2"} "Nginx containers"]]

      [nginx-conts-list]
      [plus-nginx-cont-button]

      [:div
       {:class "col-12 pt-5 pt-10 mt-20"}
       [:p {:class "mb-4 pb-2"} "Postgres containers"]]

      [postgres-conts-list]
      [plus-postgres-cont-button]

      ]

     [:div
      {:class "col-12 pt-5 for-vagrant center", :style      ;"display: none;"
       {:display "none"}}
      "Coming soon!"]
     ]
    ))
