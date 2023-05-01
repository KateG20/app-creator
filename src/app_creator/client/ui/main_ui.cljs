(ns app-creator.client.ui.main-ui
  (:require [app-creator.client.ui.db :as db-ui]
            [app-creator.client.ui.server :as server-ui]
            [app-creator.client.ui.client :as client-ui]
            [app-creator.client.ui.containerization :as cont-ui]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [re-frame.core :as re-frame]))

(defn log-field []
    (let [display (re-frame/subscribe [::subs/log-field-display])
          text (re-frame/subscribe [::subs/log-text])]
      [:div
       {:class "col-12 pt-5 mt-20"
        :style {:display "flex"
                :height "80px"
                :justify-content "center"
                :align-items "center"}}                            ; @display}}
       [:p {:style
            {:color "#50862a"}}
        @text]]
      ))

(defn main-ui []
  (let [out-path-valid (re-frame/subscribe [::subs/out-path-valid])]
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
         {:class "col-12 pb-5 center no-pt"}
         [:div
          {:class "col-12 pb-5 input-field more-w"}
          [:input
           {:type "text",
            :name "text",
            :id "result-path",
            :autocomplete "off",
            :required true
            :on-change    #(re-frame/dispatch [::events/out-path-text-change (-> % .-target .-value)])}]
          ;[:label
          ; {:for "result-path", :class "label-name"}
          ; [:span {:class "content-name"} "Path to result"]]
          [:label
           (if-not @out-path-valid
             {:for "result-path", :class "label-name incorrect-label"
              :style {:border-bottom-color "red"}}
             {:for "result-path", :class "label-name"})
           ;{:for "db-host", :class "label-name incorrect-label"
           ; :style {:border-bottom-color "red"}}
           [:span (if-not @out-path-valid
                    {:class "content-name"
                     :style {:color "red"}}
                    {:class "content-name"})
            "Path to result"]]
          ]]
        [:button
         {:class    "checkbox-comp-type final",
          :type     "button",
          :name     "create",
          :id       "create"
          :on-click #(re-frame/dispatch [::events/http-post])}]
        [:label
         {:class "for-checkbox-comp-type final", :for "create"}
         "Create!"]

        [log-field]

        [:div
         {:class "col-12 pt-5 mt-20"}
         [:p
          {:class "mt-20"
           :style {:font-weight "300"
                   :font-size "15px"}}
          "In case of any issues, please contact the developer by email:"
          [:br]
          "moskva20013@gmail.com"]]
        ]
       ]]]
    )))