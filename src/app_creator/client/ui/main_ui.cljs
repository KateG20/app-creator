(ns app-creator.client.ui.main-ui
  (:require [app-creator.client.ui.db :as db-ui]
            [app-creator.client.ui.server :as server-ui]
            [app-creator.client.ui.client :as client-ui]
            [app-creator.client.ui.containerization :as cont-ui]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [re-frame.core :as re-frame]
            [app-creator.client.ui.info :as info]))

; А здесь, как и во всем неймспейсе ui, разметка с подписками и диспатчами.
; Подписываемся (subscribe) на штуки, которые зарегистрированы в файле subs.cljs.
; Диспатчим события, которые зарегистрированы в файле events.cljs.
; Смотрим в них.

(defn log-field []
  (let [text (re-frame/subscribe [::subs/log-text])]
    [:div
     {:class "col-12 pt-5 mt-20 center"
      :style {:height     "auto"
              :min-height "80px"}
      }
     [:p {:style
          {:color "#50862a"}}
      @text]]))

(defn loader []
  (let [loading? (re-frame/subscribe [::subs/loading?])]
    [:div
     {:class "col-12 pt-5"}
     [:div
      {:class "loader"
       :style {:visibility (if @loading? "visible" "hidden")}}]]))

(defn main-ui []
  (let [out-path-content (re-frame/subscribe [::subs/out-path])]
    (fn []
      [:div
       {:class "section over-hide z-bigger"}
       [:input
        {:class "checkbox",
         :type  "checkbox",
         :name  "general",
         :id    "general"}]
       [:label {:class "theme-label", :for "general"} "Theme"]
       [:label {:class "checkbox-label", :for "general"}]
       [:div {:class "background-color"}]
       [:div
        {:class "section over-hide z-bigger"}
        [:div
         {:class "container pb-5"}
         [:div
          {:class "row justify-content-center pb-5"}

          [:div
           {:class "col-12 pt-5 big-big-text"}
           [:p {:class "mb-4 pb-2"} "AppCreator"]]
          [:div
           {:class "col-12 pt-0 smaller"}
           [:p {:class "mb-0 pb-0"} "Start developing right now"]]

          [db-ui/db-ui]
          [server-ui/server-ui]
          [client-ui/client-ui]
          [cont-ui/cont-ui]

          [:div
           {:class "col-12 pb-5 center no-pt"
            :style {:align-items "center"
                    :gap         "0"}}
           [:div
            {:class "col-12 pb-5 input-field more-w"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "result-path",
              :autocomplete "off",
              :required     true
              :on-change    #(re-frame/dispatch-sync [::events/out-path-text-change (-> % .-target .-value)])
              :value        (get @out-path-content :value)}]
            [:label
             (if-not (get @out-path-content :valid)
               {:for   "result-path", :class "label-name incorrect-label"
                :style {:border-bottom-color "#ff6969"}}
               {:for "result-path", :class "label-name"})
             [:span (if-not (get @out-path-content :valid)
                      {:class "content-name"
                       :style {:color "#ff6969"}}
                      {:class "content-name"})
              "Path to result"]]]

           [:div
            {:style {:position "relative"}} [:label {:class "shadow-label mt-20 help-label" :for "out-path-help"} "?"]
            [:button {:class "help-button" :id "out-path-help" :style {:display "none"}}]
            [:div {:class "help-div box"}
             info/out-path-info]]]

          [:div
           {:class "col-12 pb-5 center"}
           [:button
            {:class    "big-button"
             :type     "button",
             :name     "create",
             :id       "create"
             :on-click #(re-frame/dispatch [::events/create-projects])}]
           [:label
            {:class "big-button"
             :for   "create"}
            "Create!"]

           [:button
            {:class    "big-button grey"
             :type     "button",
             :name     "clear",
             :id       "clear"
             :on-click #(re-frame/dispatch [::events/clear-data])}]
           [:label
            {:class "big-button"
             :for   "clear"}
            "Clear all"]]

          [log-field]
          [loader]

          [:div
           {:class "col-12 pt-5 mt-20"}
           [:p
            {:class "mt-20"
             :style {:font-weight "300"
                     :font-size   "15px"}}
            "In case of any issues, please contact the developer by email:"
            [:br]
            "moskva20013@gmail.com"
            [:br] [:br]
            "AppCreator v1.0"]]]]]])))