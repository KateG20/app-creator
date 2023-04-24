(ns app-creator.client.ui.server)

(defn server-ui []
  (fn []
    [:div
     [:div
      {:class "col-12 pt-5 big-text"}
      [:p {:class "mb-4 pb-2"} "2. Server"]]
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
       "Node.js"]]

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
       [:ul
        {:class "controller-list"}
        [:li
         {:class "col-12 pb-5 opts-group center box"}
         [:div
          {:class "col-12 pb-5 input-field"}
          [:input
           {:type         "text",
            :name         "text",
            :id           "controller-name-1",
            :autocomplete "off",
            :required     true}]
          [:label
           {:for "controller-name-1", :class "label-name"}
           [:span {:class "content-name"} "Controller name"]]]
         [:ul
          {:class "db-col-list"}
          [:li
           {:class "table-row-li"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-request-1-1",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-request-1-1", :class "label-name"}
             [:span {:class "content-name"} "Method name"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-url-1-1",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-url-1-1", :class "label-name"}
             [:span {:class "content-name"} "Request URL"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-mapping-1-1",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-mapping-1-1", :class "label-name"}
             [:span {:class "content-name"} "Request type"]]]]
          [:li
           {:class "table-row-li"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-request-1-2",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-request-1-2", :class "label-name"}
             [:span {:class "content-name"} "Method name"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-url-1-2",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-url-1-2", :class "label-name"}
             [:span {:class "content-name"} "Request URL"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-mapping-1-2",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-mapping-1-2", :class "label-name"}
             [:span {:class "content-name"} "Request type"]]]]
          [:li
           {:class "table-row-li"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-request-1-3",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-request-1-3", :class "label-name"}
             [:span {:class "content-name"} "Method name"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-url-1-3",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-url-1-3", :class "label-name"}
             [:span {:class "content-name"} "Request URL"]]]
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "col-mapping-1-3",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "col-mapping-1-3", :class "label-name"}
             [:span {:class "content-name"} "Request type"]]]]]
         [:button
          {:type "button", :name "plus", :id "plus-req-column-1"}]
         [:label
          {:class "plus-label mt-20", :for "plus-req-column-1"}
          "+"]]]]]

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


