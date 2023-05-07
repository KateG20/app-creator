(ns app-creator.client.ui.containerization
  (:require [re-frame.core :as re-frame]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [reagent.core :as reagent]))

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
           :on-change    #(re-frame/dispatch
                            [::events/docker-network-change (-> % .-target .-value)])}]
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
           :on-change    #(re-frame/dispatch
                            [::events/docker-container-opts-change (-> % .-target .-value) box :jars :container-name])}]
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
           :on-change    #(re-frame/dispatch
                            [::events/docker-container-opts-change (-> % .-target .-value) box :jars :image-name])}]
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
           :on-change    #(re-frame/dispatch
                            [::events/docker-container-opts-change (-> % .-target .-value) box :jars :dir-name])}]
         [:label
          (if-not (get-in content [:dir-name :valid])
            {:for   run-dir, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for run-dir, :class "label-name"})
          [:span (if-not (get-in content [:dir-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Run directory name"]]]]
       [:div
        {:class "col-12 pb-5 center no-pt full-w"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           jar-path,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch
                            [::events/docker-container-opts-change (-> % .-target .-value) box :jars :jar-path])}]
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
          new-item-vec (+ 1 (last @current-items))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button", :name "plus-jar-cont", :id "plus-jar-cont"
         :on-click #(re-frame/dispatch [::events/add-jar-cont-item new-item-vec])}]
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
          back-cont (str "docker-ngx-back-cont-" box)
          all-content (re-frame/subscribe [::subs/docker-containers-content :nginx])
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
           :on-change    #(re-frame/dispatch
                            [::events/docker-container-opts-change (-> % .-target .-value) box :nginx :container-name])}]
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
           :on-change    #(re-frame/dispatch
                            [::events/docker-container-opts-change (-> % .-target .-value) box :nginx :image-name])}]
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
           :on-change    #(re-frame/dispatch
                            [::events/docker-container-opts-change (-> % .-target .-value) box :nginx :dir-name])}]
         [:label
          (if-not (get-in content [:dir-name :valid])
            {:for   run-dir, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for run-dir, :class "label-name"})
          [:span (if-not (get-in content [:dir-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Run directory name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           back-cont,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch
                            [::events/docker-container-opts-change (-> % .-target .-value) box :nginx :backend-container-name])}]
         [:label
          (if-not (get-in content [:backend-container-name :valid])
            {:for   back-cont, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for back-cont, :class "label-name"})
          [:span (if-not (get-in content [:backend-container-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Backend container"]]]]])))

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
          pg-pwd (str "docker-pg-pwd-" box)
          all-content (re-frame/subscribe [::subs/docker-containers-content :postgres])
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
           :on-change    #(re-frame/dispatch
                            [::events/docker-container-opts-change (-> % .-target .-value) box :postgres :container-name])}]
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
           :on-change    #(re-frame/dispatch
                            [::events/docker-container-opts-change (-> % .-target .-value) box :postgres :port])}]
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
           :on-change    #(re-frame/dispatch
                            [::events/docker-container-opts-change (-> % .-target .-value) box :postgres :password])}]
         [:label
          (if-not (get-in content [:password :valid])
            {:for   pg-pwd, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for pg-pwd, :class "label-name"})
          [:span (if-not (get-in content [:password :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "DB password"]]]]])))

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
  (let [deploy-checked (re-frame/subscribe [::subs/deploy-checked])]
    (fn []
    [:div
     [:div
      {:class "col-12 pt-5 big-text"}
      [:p {:class "mb-4 pb-2"} "4. Deploy"]]

     [choose-type]

     [:div
      {:class "col-12 pt-5 for-docker center", :style
       {:display (if (= @deploy-checked "docker") "block" "none")}}

      [:div
       {:class "col-12 pt-5 header-with-help"}
       [:label {:class "plus-label mt-20 help-label"
                :style {:visibility "hidden"}} "?"]
       [:p {:class "mb-4 pb-2"} [:p {:class "mb-4 pb-2"} "Network"]]
       [:label {:class "plus-label mt-20 help-label" :for "network-help"} "?"]
       [:button {:class "help-button" :id "network-help" :style {:display "none"}}]
       [:div {:class "help-div box"}
        [:p "Name of the network to run your containers in"]]]

      [network-field]

      [:div
       {:class "col-12 pt-5 header-with-help"}
       [:label {:class "plus-label mt-20 help-label"
                :style {:visibility "hidden"}} "?"]
       [:p {:class "mb-4 pb-2"} [:p {:class "mb-4 pb-2"} "JAR containers"]]
       [:label {:class "plus-label mt-20 help-label" :for "jar-cont-help"} "?"]
       [:button {:class "help-button" :id "jar-cont-help" :style {:display "none"}}]
       [:div {:class "help-div box"}
        [:p [:b "Container name:"] " name of your future container" [:br]
         [:b "Image name:"] " name of the image to build" [:br]
         [:b "Run directory name:"] " name of the directory to build your image and run container" [:br]
         [:b "Path to jar:"] " path to the jar file to put and execute in the container" [:br]]]]

      [jar-conts-list]
      [plus-jar-cont-button]

      [:div
       {:class "col-12 pt-5 header-with-help"}
       [:label {:class "plus-label mt-20 help-label"
                :style {:visibility "hidden"}} "?"]
       [:p {:class "mb-4 pb-2"} [:p {:class "mb-4 pb-2"} "Nginx containers"]]
       [:label {:class "plus-label mt-20 help-label" :for "nginx-cont-help"} "?"]
       [:button {:class "help-button" :id "nginx-cont-help" :style {:display "none"}}]
       [:div {:class "help-div box"}
        ; todo
        [:p [:b "Container name:"] " name of your future container" [:br]
         [:b "Image name:"] " name of the image to build" [:br]
         [:b "Run directory name:"] " name of the directory to build your image and run container" [:br]
         [:b "Path to jar:"] " path to the jar file to put and execute in the container" [:br]]]]

      [nginx-conts-list]
      [plus-nginx-cont-button]

      [:div
       {:class "col-12 pt-5 header-with-help"}
       [:label {:class "plus-label mt-20 help-label"
                :style {:visibility "hidden"}} "?"]
       [:p {:class "mb-4 pb-2"} [:p {:class "mb-4 pb-2"} "Postgres containers"]]
       [:label {:class "plus-label mt-20 help-label" :for "pg-cont-help"} "?"]
       [:button {:class "help-button" :id "pg-cont-help" :style {:display "none"}}]
       [:div {:class "help-div box"}
        ; todo
        [:p [:b "Table name:"] " valid SQL-identifier for your future table" [:br]
         [:b "Column:"] " valid SQL-identifier for your future table" [:br]
         [:b "Type:"] " column data type, one of [bool number string date]" [:br]]]]

      [postgres-conts-list]
      [plus-postgres-cont-button]]

     [:div
      {:class "col-12 pt-5 for-vagrant center", :style
       {:display (if (= @deploy-checked "vagrant") "block" "none")}}
      "Coming soon!" [:br] "Please, choose another platform."]])))
