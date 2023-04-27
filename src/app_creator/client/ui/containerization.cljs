(ns app-creator.client.ui.containerization
  (:require [re-frame.core :as re-frame]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [reagent.core :as reagent]))

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
          [:span {:class "content-name"} "Path to JAR"]]]]]
      )))

; Список джар-контейнеров (боксов)
(defn jar-conts-list []
  (let [jar-conts (re-frame/subscribe [::subs/jar-conts])]
    (fn []

      [:ul
       {:class "center no-marker"}
       (for [j @jar-conts]
       [:li
        {:class "box"}
        [jar-cont-box-chars j]
        ;[:div
        ; {:class "col-12 pb-5 opts-group center no-pb"}
        ; [:div
        ;  {:class "col-12 pb-5 center no-pt"}
        ;  [:div
        ;   {:class "col-12 pb-5 input-field"}
        ;   [:input
        ;    {:type         "text",
        ;     :name         "text",
        ;     :id           "docker-jar-cont",
        ;     :autocomplete "off",
        ;     :required     true}]
        ;   [:label
        ;    {:for "docker-jar-cont", :class "label-name"}
        ;    [:span {:class "content-name"} "Container name"]]]
        ;  [:div
        ;   {:class "col-12 pb-5 input-field"}
        ;   [:input
        ;    {:type         "text",
        ;     :name         "text",
        ;     :id           "docker-jar-img",
        ;     :autocomplete "off",
        ;     :required     true}]
        ;   [:label
        ;    {:for "docker-jar-img", :class "label-name"}
        ;    [:span {:class "content-name"} "Image name"]]]
        ;  [:div
        ;   {:class "col-12 pb-5 input-field"}
        ;   [:input
        ;    {:type         "text",
        ;     :name         "text",
        ;     :id           "docker-jar-run-dir",
        ;     :autocomplete "off",
        ;     :required     true}]
        ;   [:label
        ;    {:for "docker-jar-run-dir", :class "label-name"}
        ;    [:span {:class "content-name"} "Run directory name"]]]]
        ; [:div
        ;  {:class "col-12 pb-5 center no-pt full-w"}
        ;  [:div
        ;   {:class "col-12 pb-5 input-field"}
        ;   [:input
        ;    {:type         "text",
        ;     :name         "text",
        ;     :id           "docker-jar-path",
        ;     :autocomplete "off",
        ;     :required     true}]
        ;   [:label
        ;    {:for "docker-jar-path", :class "label-name"}
        ;    [:span {:class "content-name"} "Path to JAR"]]]]]
        ]
       )]
      )))


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
      [:ul
       {:class "center no-marker"}
       [:li
        {:class "box"}
        [:div
         {:class "col-12 pb-5 opts-group center no-pb"}
         [:div
          {:class "col-12 pb-5 center no-pt"}
          [:div
           {:class "col-12 pb-5 input-field"}
           [:input
            {:type         "text",
             :name         "text",
             :id           "docker-ngx-cont",
             :autocomplete "off",
             :required     true}]
           [:label
            {:for "docker-ngx-cont", :class "label-name"}
            [:span {:class "content-name"} "Container name"]]]
          [:div
           {:class "col-12 pb-5 input-field"}
           [:input
            {:type         "text",
             :name         "text",
             :id           "docker-ngx-img",
             :autocomplete "off",
             :required     true}]
           [:label
            {:for "docker-ngx-img", :class "label-name"}
            [:span {:class "content-name"} "Image name"]]]
          [:div
           {:class "col-12 pb-5 input-field"}
           [:input
            {:type         "text",
             :name         "text",
             :id           "docker-ngx-run-dir",
             :autocomplete "off",
             :required     true}]
           [:label
            {:for "docker-ngx-run-dir", :class "label-name"}
            [:span {:class "content-name"} "Run directory name"]]]
          [:div
           {:class "col-12 pb-5 input-field"}
           [:input
            {:type         "text",
             :name         "text",
             :id           "docker-ngx-back-cont",
             :autocomplete "off",
             :required     true}]
           [:label
            {:for "docker-ngx-back-cont", :class "label-name"}
            [:span {:class "content-name"} "Backend container"]]]]]]]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button", :name "plus-ngx-cont", :id "plus-ngx-cont"}]
       [:label
        {:class "mb-4 pb-2 plus-label", :for "plus-ngx-cont"}
        "+"]]
      [:div
       {:class "col-12 pt-5 pt-10 mt-20"}
       [:p {:class "mb-4 pb-2"} "Postgres containers"]]
      [:ul
       {:class "center no-marker"}
       [:li
        {:class "box"}
        [:div
         {:class "col-12 pb-5 opts-group center no-pb"}
         [:div
          {:class "col-12 pb-5 center no-pt"}
          [:div
           {:class "col-12 pb-5 input-field"}
           [:input
            {:type         "text",
             :name         "text",
             :id           "docker-pg-cont",
             :autocomplete "off",
             :required     true}]
           [:label
            {:for "docker-pg-cont", :class "label-name"}
            [:span {:class "content-name"} "Container name"]]]
          [:div
           {:class "col-12 pb-5 input-field"}
           [:input
            {:type         "text",
             :name         "text",
             :id           "docker-pg-port",
             :autocomplete "off",
             :required     true}]
           [:label
            {:for "docker-pg-port", :class "label-name"}
            [:span {:class "content-name"} "DB port"]]]
          [:div
           {:class "col-12 pb-5 input-field"}
           [:input
            {:type         "text",
             :name         "text",
             :id           "docker-pg-pwd",
             :autocomplete "off",
             :required     true}]
           [:label
            {:for "docker-pg-pwd", :class "label-name"}
            [:span {:class "content-name"} "DB password"]]]]]]]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button", :name "plus-pg-cont", :id "plus-pg-cont"}]
       [:label
        {:class "mb-4 pb-2 plus-label", :for "plus-pg-cont"}
        "+"]]]

     [:div
      {:class "col-12 pt-5 for-vagrant center", :style      ;"display: none;"
       {:display "none"}}
      "Coming soon!"]
     ]
    ))
