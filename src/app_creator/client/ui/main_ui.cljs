(ns app-creator.client.ui.main-ui
  (:require [app-creator.client.ui.db :as db-ui]
            [app-creator.client.ui.server :as server-ui]
            [app-creator.client.ui.client :as client-ui]))


(defn main-ui []
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


        [:div
         {:class "col-12 pb-5 center no-pt"}
         [:div
          {:class "col-12 pb-5 input-field more-w"}
          [:input
           {:type "text",
            :name "text",
            :id "result-path",
            :autocomplete "off",
            :required true}]
          [:label
           {:for "result-path", :class "label-name"}
           [:span {:class "content-name"} "Path to result"]]]]
        [:button
         {:class "checkbox-comp-type final",
          :type "button",
          :name "create",
          :id "create"}]
        [:label
         {:class "for-checkbox-comp-type final", :for "create"}
         "Create!"]

        [:div
         {:class "col-12 pt-5 mt-20"}
         [:p
          {:class "mt-20"}
          "In case of any issues, please contact the developer by email:"
          [:br]
          "moskva20013@gmail.com"]]
        ]
       ]]]
    ))