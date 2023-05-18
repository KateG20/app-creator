(ns app-creator.client.ui.containerization
  (:require [re-frame.core :as re-frame]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [app-creator.client.ui.info :as info]))

(defn choose-type []
  (let [deploy-checked (re-frame/subscribe [::subs/deploy-checked])]
    (fn []
      [:div
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
          :checked  (= @deploy-checked "docker")
          :on-click #(re-frame/dispatch [::events/change-deploy-checked "docker"])
          }]
        [:label {:class "for-checkbox-comp-type", :for "docker"} "Docker"]
        [:input
         {:class "checkbox-comp-type",
          :type  "radio",
          :name  "deploy-type",
          :id    "vagrant"
          :checked  (= @deploy-checked "vagrant")
          :on-click #(re-frame/dispatch [::events/change-deploy-checked "vagrant"])}]
        [:label
         {:class "for-checkbox-comp-type", :for "vagrant"}
         "Vagrant"]]])))

(defn network-field []
  (let [network (re-frame/subscribe [::subs/docker-network])]
    (fn []
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
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-network-change (-> % .-target .-value)])
           :value (get @network :value)}]
         [:label
          (if-not (get @network :valid)
            {:for   "network-name", :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for "network-name", :class "label-name"})
          [:span (if-not (get @network :valid)
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Network name"]]]]])))

;------------------------------------------------JAR containers-----------------------------------

; Кнопка для удаления бокса
(defn minus-jar-cont-box-button [box]
  (fn [box]
    (let [id (str "minus-jar-cont-box-" box)]
      [:div
       [:button {:type     "button", :name "minus", :id id
                 :on-click #(re-frame/dispatch [::events/minus-jar-cont-item box])}]
       [:label {:class "plus-label mt-20", :for id} "-"]])))

; Характеристика контейнера (строки в боксе)
(defn jar-cont-box-chars [box]
  (fn [box]
    (let [cont-name (str "docker-jar-cont-name-" box)
          img-name (str "docker-jar-img-name-" box)
          run-dir (str "docker-jar-run-dir-" box)
          jar-path (str "docker-jar-path-" box)
          all-content (re-frame/subscribe [::subs/docker-containers-content :jars])
          content (get @all-content box)]
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
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-container-opts-change (-> % .-target .-value) box :jars :container-name])
           :value (get-in content [:container-name :value])}]
         [:label
          (if-not (get-in content [:container-name :valid])
            {:for   cont-name, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for cont-name, :class "label-name"})
          [:span (if-not (get-in content [:container-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Container name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           img-name,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-container-opts-change (-> % .-target .-value) box :jars :image-name])
           :value (get-in content [:image-name :value])}]
         [:label
          (if-not (get-in content [:image-name :valid])
            {:for   img-name, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for img-name, :class "label-name"})
          [:span (if-not (get-in content [:image-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Image name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           run-dir,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-container-opts-change (-> % .-target .-value) box :jars :dir-name])
           :value (get-in content [:dir-name :value])}]
         [:label
          (if-not (get-in content [:dir-name :valid])
            {:for   run-dir, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for run-dir, :class "label-name"})
          [:span (if-not (get-in content [:dir-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Build directory name"]]]
        [minus-jar-cont-box-button box]]
       [:div
        {:class "col-12 pb-5 center no-pt no-pb full-w"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           jar-path,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-container-opts-change (-> % .-target .-value) box :jars :jar-path])
           :value (get-in content [:jar-path :value])}]
         [:label
          (if-not (get-in content [:jar-path :valid])
            {:for   jar-path, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for jar-path, :class "label-name"})
          [:span (if-not (get-in content [:jar-path :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Path to JAR"]]]]])))

; Список джар-контейнеров (боксов)
(defn jar-conts-list []
  (let [jar-conts (re-frame/subscribe [::subs/docker-containers-vec :jars])]
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
    (let [current-items (re-frame/subscribe [::subs/docker-containers-vec :jars])
          ;new-item-vec (reagent/atom (+ 1 (last @current-items)))
          new-item-vec (+ 1 (or (apply max @current-items) -1))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button", :name "plus-jar-cont", :id "plus-jar-cont"
         :on-click #(re-frame/dispatch [::events/add-jar-cont-item new-item-vec])}]
       [:label
        {:class "mb-4 pb-2 plus-label", :for "plus-jar-cont"}
        "+"]])))

;------------------------------------------------NGINX containers-----------------------------------

; Кнопка для удаления бокса
(defn minus-nginx-cont-box [box]
  (fn [box]
    (let [id (str "minus-nginx-cont-box-" box)]
      [:div
       [:button {:type     "button", :name "minus", :id id
                 :on-click #(re-frame/dispatch [::events/minus-nginx-cont-item box])}]
       [:label {:class "plus-label mt-20", :for id} "-"]])))

; Характеристика контейнера (строки в боксе)
(defn nginx-cont-box-chars [box]
  (fn [box]
    (let [cont-name (str "docker-nginx-cont-name-" box)
          img-name (str "docker-nginx-img-name-" box)
          run-dir (str "docker-nginx-run-dir-" box)
          back-cont (str "docker-ngx-back-cont-" box)
          all-content (re-frame/subscribe [::subs/docker-containers-content :nginx])
          content (get @all-content box)]
      [:div
       {:class "col-12 pb-5 opts-group center no-pb"}
       [:div
        {:class "col-12 pb-5 center no-pt no-pb"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           cont-name,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-container-opts-change (-> % .-target .-value) box :nginx :container-name])
           :value (get-in content [:container-name :value])}]
         [:label
          (if-not (get-in content [:container-name :valid])
            {:for   cont-name, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for cont-name, :class "label-name"})
          [:span (if-not (get-in content [:container-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Container name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           img-name,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-container-opts-change (-> % .-target .-value) box :nginx :image-name])
           :value (get-in content [:image-name :value])}]
         [:label
          (if-not (get-in content [:image-name :valid])
            {:for   img-name, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for img-name, :class "label-name"})
          [:span (if-not (get-in content [:image-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Image name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           run-dir,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-container-opts-change (-> % .-target .-value) box :nginx :dir-name])
           :value (get-in content [:dir-name :value])}]
         [:label
          (if-not (get-in content [:dir-name :valid])
            {:for   run-dir, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for run-dir, :class "label-name"})
          [:span (if-not (get-in content [:dir-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Build directory name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           back-cont,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-container-opts-change
                             (-> % .-target .-value) box :nginx :backend-container-name])
           :value (get-in content [:backend-container-name :value])}]
         [:label
          (if-not (get-in content [:backend-container-name :valid])
            {:for   back-cont, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for back-cont, :class "label-name"})
          [:span (if-not (get-in content [:backend-container-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Backend container"]]]
        [minus-nginx-cont-box box]
        ]])))

; Список nginx-контейнеров (боксов)
(defn nginx-conts-list []
  (let [nginx-conts (re-frame/subscribe [::subs/docker-containers-vec :nginx])]
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
    (let [current-items (re-frame/subscribe [::subs/docker-containers-vec :nginx])
          new-item-vec (+ 1 (or (apply max @current-items) -1))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button", :name "plus-nginx-cont", :id "plus-nginx-cont"
         :on-click #(re-frame/dispatch [::events/add-nginx-cont-item new-item-vec])}]
       [:label
        {:class "mb-4 pb-2 plus-label", :for "plus-nginx-cont"}
        "+"]])))

;------------------------------------------------POSTGRES containers-----------------------------------

; Кнопка для удаления бокса
(defn minus-postgres-cont-box [box]
  (fn [box]
    (let [id (str "minus-postgres-cont-box-" box)]
      [:div
       [:button {:type     "button", :name "minus", :id id
                 :on-click #(re-frame/dispatch [::events/minus-postgres-cont-item box])}]
       [:label {:class "plus-label mt-20", :for id} "-"]])))

; Характеристика контейнера (строки в боксе)
(defn postgres-cont-box-chars [box]
  (fn [box]
    (let [cont-name (str "docker-pg-cont-name-" box)
          pg-port (str "docker-pg-port-" box)
          pg-pwd (str "docker-pg-pwd-" box)
          all-content (re-frame/subscribe [::subs/docker-containers-content :postgres])
          content (get @all-content box)]
      [:div
       {:class "col-12 pb-5 opts-group center no-pb"}
       [:div
        {:class "col-12 pb-5 center no-pt no-pb"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           cont-name,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-container-opts-change
                             (-> % .-target .-value) box :postgres :container-name])
           :value (get-in content [:container-name :value])}]
         [:label
          (if-not (get-in content [:container-name :valid])
            {:for   cont-name, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for cont-name, :class "label-name"})
          [:span (if-not (get-in content [:container-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Container name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           pg-port,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-container-opts-change (-> % .-target .-value) box :postgres :port])
           :value (get-in content [:port :value])}]
         [:label
          (if-not (get-in content [:port :valid])
            {:for   pg-port, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for pg-port, :class "label-name"})
          [:span (if-not (get-in content [:port :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "DB port"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           pg-pwd,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/docker-container-opts-change (-> % .-target .-value) box :postgres :password])
           :value (get-in content [:password :value])}]
         [:label
          (if-not (get-in content [:password :valid])
            {:for   pg-pwd, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for pg-pwd, :class "label-name"})
          [:span (if-not (get-in content [:password :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "DB password"]]]
        [minus-postgres-cont-box box]
        ]])))

; Список контейнеров (боксов)
(defn postgres-conts-list []
  (let [postgres-conts (re-frame/subscribe [::subs/docker-containers-vec :postgres])]
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
    (let [current-items (re-frame/subscribe [::subs/docker-containers-vec :postgres])
          new-item-vec (+ 1 (or (apply max @current-items) -1))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button", :name "plus-postgres-cont", :id "plus-postgres-cont"
         :on-click #(re-frame/dispatch [::events/add-postgres-cont-item new-item-vec])}]
       [:label
        {:class "mb-4 pb-2 plus-label", :for "plus-postgres-cont"}
        "+"]])))

;------------------------------------------------------------------------------------------------------

(defn cont-ui []
  (let [deploy-checked (re-frame/subscribe [::subs/deploy-checked])]
    (fn []
    [:div
     [:div
      {:class "col-12 pt-5 big-text"}
      [:p {:class "mb-4 pb-2"} "4. Deploy"]
      [:input
       {:type  "checkbox",
        :class "tick-input",
        :id    "do-deploy-checkbox"
        :checked  (if (= @deploy-checked "none") false true)
        :on-click (if (= @deploy-checked "none")
                    #(re-frame/dispatch [::events/change-deploy-checked "docker"])
                    #(re-frame/dispatch [::events/change-deploy-checked "none"]))}]
      [:label
       {:for "do-deploy-checkbox", :class "tick-label"}
       [:span {:class "tick-checked"}]]]

     [choose-type]

     [:div
      {:class "col-12 pt-5 none-client center", :style
       {:display (if (= @deploy-checked "none") "block" "none")}}
      "Choose one of the platforms to create this component!"]

     [:div
      {:class "col-12 pt-5 for-docker center", :style
       {:display (if (= @deploy-checked "docker") "block" "none")}}

      [info/help-label "network-help" info/deploy-network-info "Network"]

      [network-field]

      [info/help-label "jar-cont-help" info/cont-jar-info "JAR containers"]

      [jar-conts-list]
      [plus-jar-cont-button]

      [info/help-label "nginx-cont-help" info/cont-nginx-info "Nginx containers"]

      [nginx-conts-list]
      [plus-nginx-cont-button]

      [info/help-label "pg-cont-help" info/cont-pg-info "Postgres containers"]

      [postgres-conts-list]
      [plus-postgres-cont-button]]

     [:div
      {:class "col-12 pt-5 for-vagrant center", :style
       {:display (if (= @deploy-checked "vagrant") "block" "none")}}
      "Coming soon!" [:br] "Please, choose another platform."]])))
