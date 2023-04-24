(ns app-creator.client.ui.db)

(defn db-ui []
  (fn []

    [:div
     [:div
      {:class "col-12 pt-5 big-text"}
      [:p {:class "mb-4 pb-2"} "1. Database"]]
     [:div
      {:class "col-12 pt-5"}
      [:p {:class "mb-4 pb-2"} "Choose type"]]

     [:div
      {:class "col-12 pb-5"}
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "db-type",
        :id    "postgres",
        ;:checked ""
        }]
      [:label
       {:class "for-checkbox-comp-type", :for "postgres"}
       "PostgreSQL"]
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "db-type",
        :id    "mongodb"}]
      [:label
       {:class "for-checkbox-comp-type", :for "mongodb"}
       "MongoDB"]
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "db-type",
        :id    "clickhouse"}]
      [:label
       {:class "for-checkbox-comp-type", :for "clickhouse"}
       "ClickHouse"]]

     [:div
      {:class "col-12 pt-5 for-postgres center",
       :style
       {:display "block"}}
      [:div
       {:class "col-12 pt-5"}
       [:p {:class "mb-4 pb-2"} "Properties"]]

      [:div
       {:class "col-12 pb-5 opts-group center"}
       [:div
        {:class "col-12 pb-5 center no-pt"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "db-name",
           :autocomplete "off",
           :required     true}]
         [:label
          {:for "db-name", :class "label-name"}
          [:span {:class "content-name"} "DB name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "db-host",
           :autocomplete "off",
           :required     true}]
         [:label
          {:for "db-host", :class "label-name"}
          [:span {:class "content-name"} "Host"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "db-username",
           :autocomplete "off",
           :required     true}]
         [:label
          {:for "db-username", :class "label-name"}
          [:span {:class "content-name"} "Username"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "db-password",
           :autocomplete "off",
           :required     true}]
         [:label
          {:for "db-password", :class "label-name"}
          [:span {:class "content-name"} "Password"]]]]]


      [:div {:class "col-12 pt-5"} [:p {:class "mb-4 pb-2"} "Tables"]]
      [:div
       {:class "col-12 pt-5 center opts", :style            ;"display: flex;"
        {:display "flex"}}
       [:ul
        {:class "db-list"}
        [:li
         {:class "col-12 pb-5 opts-group center box"}
         [:div
          {:class "col-12 pb-5 input-field"}
          [:input
           {:type         "text",
            :name         "text",
            :id           "table-name-1",
            :autocomplete "off",
            :required     true}]
          [:label
           {:for "table-name-1", :class "label-name"}
           [:span {:class "content-name"} "Table name"]]]
         [:ul
          {:class "db-col-list"}
          [:li
           {:class "table-row-li"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-name-1-1",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-name-1-1", :class "label-name"}
             [:span {:class "content-name"} "Column"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-type-1-1",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-type-1-1", :class "label-name"}
             [:span {:class "content-name"} "Type"]]]]
          [:li
           {:class "table-row-li"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-name-1-2",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-name-1-2", :class "label-name"}
             [:span {:class "content-name"} "Column"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-type-1-2",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-type-1-2", :class "label-name"}
             [:span {:class "content-name"} "Type"]]]]
          [:li
           {:class "table-row-li"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-name-1-3",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-name-1-3", :class "label-name"}
             [:span {:class "content-name"} "Column"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-type-1-3",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-type-1-3", :class "label-name"}
             [:span {:class "content-name"} "Type"]]]]]
         [:button {:type "button", :name "plus", :id "plus-column-1"}]
         [:label {:class "plus-label mt-20", :for "plus-column-1"} "+"]]
        [:li
         {:class "col-12 pb-5 opts-group center box"}
         [:div
          {:class "col-12 pb-5 input-field"}
          [:input
           {:type         "text",
            :name         "text",
            :id           "table-name-2",
            :autocomplete "off",
            :required     true}]
          [:label
           {:for "table-name-2", :class "label-name"}
           [:span {:class "content-name"} "Table name"]]]
         [:ul
          {:class "db-col-list"}
          [:li
           {:class "table-row-li"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-name-2-1",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-name-2-1", :class "label-name"}
             [:span {:class "content-name"} "Column"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-type-2-1",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-type-2-1", :class "label-name"}
             [:span {:class "content-name"} "Type"]]]]
          [:li
           {:class "table-row-li"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-name-2-2",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-name-2-2", :class "label-name"}
             [:span {:class "content-name"} "Column"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-type-2-2",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-type-2-2", :class "label-name"}
             [:span {:class "content-name"} "Type"]]]]
          [:li
           {:class "table-row-li"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-name-2-3",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-name-2-3", :class "label-name"}
             [:span {:class "content-name"} "Column"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-type-2-3",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-type-2-3", :class "label-name"}
             [:span {:class "content-name"} "Type"]]]]]
         [:button {:type "button", :name "plus", :id "plus-column-2"}]
         [:label
          {:class "plus-label mt-20", :for "plus-column-2"}
          "+"]]]]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button",
         :name "plus-client-endpoint",
         :id   "plus-table"}]
       [:label {:class "mb-4 pb-2 plus-label", :for "plus-table"} "+"]]
      ]

     [:div
      {:class "col-12 pt-5 for-mongodb center", :style      ;"display: none;"
       {:display "none"}}
      "Coming soon!"]
     [:div
      {:class "col-12 pt-5 for-clickhouse center",
       :style                                               ;"display: none;"
       {:display "none"}}
      "Coming soon!"]
     ]

    ))