(ns app-creator.client.ui.client)

(defn client-ui []
  (fn []
    [:div
     [:div
      {:class "col-12 pt-5 big-text"}
      [:p {:class "mb-4 pb-2"} "3. Client"]]
     [:div
      {:class "col-12 pt-5"}
      [:p {:class "mb-4 pb-2"} "Choose platform"]]

     [:div
      {:class "col-12 pb-5"}
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "client-type",
        :id    "android",
        ;:checked ""
        }]
      [:label
       {:class "for-checkbox-comp-type", :for "android"}
       "Android"]
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "client-type",
        :id    "ios"}]
      [:label {:class "for-checkbox-comp-type", :for "ios"} "iOS"]
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "client-type",
        :id    "flutter"}]
      [:label
       {:class "for-checkbox-comp-type", :for "flutter"}
       "Flutter"]
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "client-type",
        :id    "web"}]
      [:label {:class "for-checkbox-comp-type", :for "web"} "Web"]]

     [:div
      {:class "col-12 pt-5 for-android center",
       :style                                               ;"display: block;"
       {:display "block"}}
      [:div
       {:class "col-12 pt-5"}
       [:p {:class "mb-4 pb-2"} "Project options"]]
      [:div
       {:class "col-12 pt-5 center opts", :style            ;"display: flex;"
        {:display "flex"}}
       [:div
        {:class "col-12 pb-5 opts-group center"}
        [:p {:class "mb-4 pb-2"} "Language"]
        [:div
         {:class "col-12 pb-5 thin"}
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "client-lang",
           :id    "client-java",
           ;:checked ""
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "client-java"}
          "Java"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "client-lang",
           :id    "client-kotlin"}]
         [:label
          {:class "for-checkbox-comp-type", :for "client-kotlin"}
          "Kotlin"]]]
       [:div
        {:class "col-12 pb-5 opts-group center"}
        [:p {:class "mb-4 pb-2"} "Test framework"]
        [:div
         {:class "col-12 pb-5 thin"}
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "test-framework",
           :id    "junit",
           ;:checked ""
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "junit"}
          "JUnit"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "test-framework",
           :id    "testng",
           ;:checked ""
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "testng"}
          "TestNG"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "test-framework",
           :id    "spock",
           ;:checked ""
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "spock"}
          "Spock"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "test-framework",
           :id    "junit-jupiter",
           ;:checked ""
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "junit-jupiter"}
          "JUnit-Jupiter"]]]
       [:div
        {:class "col-12 pb-5 opts-group center"}
        [:div
         {:class "col-12 pb-5 center no-pt"}
         [:div
          {:class "col-12 pb-5 input-field"}
          [:input
           {:type         "text",
            :name         "text",
            :id           "client-proj-name",
            :autocomplete "off",
            :required     true}]
          [:label
           {:for "client-proj-name", :class "label-name"}
           [:span {:class "content-name"} "Project name"]]]
         [:div
          {:class "col-12 pb-5 input-field"}
          [:input
           {:type         "text",
            :name         "text",
            :id           "client-pack-name",
            :autocomplete "off",
            :required     true}]
          [:label
           {:for "client-pack-name", :class "label-name"}
           [:span {:class "content-name"} "Package name"]]]
         [:div
          {:class "col-12 pb-5 input-field"}
          [:input
           {:type         "text",
            :name         "text",
            :id           "client-host",
            :autocomplete "off",
            :required     true}]
          [:label
           {:for "client-host", :class "label-name"}
           [:span {:class "content-name"} "Server host"]]]
         [:div
          {:class "col-12 pb-5 input-field"}
          [:input
           {:type         "text",
            :name         "text",
            :id           "client-port",
            :autocomplete "off",
            :required     true}]
          [:label
           {:for "client-port", :class "label-name"}
           [:span {:class "content-name"} "Server port"]]]]]]
      [:div
       {:class "col-12 pt-5"}
       [:p {:class "mb-4 pb-2"} "Endpoints"]]
      [:div
       {:class "col-12 pt-5 center opts", :style            ;"display: flex;"
        {:display "flex"}}
       [:ul
        {:class "db-list"}
        [:li
         {:class "col-12 pb-5 opts-group center box"}
         [:ul
          {:class "db-col-list"}
          [:li
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "uri-1",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "uri-1", :class "label-name"}
             [:span {:class "content-name"} "URL"]]]]
          [:li
           {:class "pt-10"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "method-1",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "method-1", :class "label-name"}
             [:span {:class "content-name"} "Method name"]]]]
          [:li
           {:class "pt-10"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "request-type-1",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "request-type-1", :class "label-name"}
             [:span {:class "content-name"} "Request type"]]]]
          [:li
           {:class "pt-10"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "body-type-1",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "body-type-1", :class "label-name"}
             [:span {:class "content-name"} "Body type"]]]]]]
        [:li
         {:class "col-12 pb-5 opts-group center box"}
         [:ul
          {:class "db-col-list"}
          [:li
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "uri-2",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "uri-2", :class "label-name"}
             [:span {:class "content-name"} "URL"]]]]
          [:li
           {:class "pt-10"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "method-2",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "method-2", :class "label-name"}
             [:span {:class "content-name"} "Method name"]]]]
          [:li
           {:class "pt-10"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "request-type-2",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "request-type-2", :class "label-name"}
             [:span {:class "content-name"} "Request type"]]]]
          [:li
           {:class "pt-10"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "body-type-2",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "body-type-2", :class "label-name"}
             [:span {:class "content-name"} "Body type"]]]]]]
        [:li
         {:class "col-12 pb-5 opts-group center box"}
         [:ul
          {:class "db-col-list"}
          [:li
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "uri-3",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "uri-3", :class "label-name"}
             [:span {:class "content-name"} "URL"]]]]
          [:li
           {:class "pt-10"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "method-3",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "method-3", :class "label-name"}
             [:span {:class "content-name"} "Method name"]]]]
          [:li
           {:class "pt-10"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "request-type-3",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "request-type-3", :class "label-name"}
             [:span {:class "content-name"} "Request type"]]]]
          [:li
           {:class "pt-10"}
           [:div
            {:class "col-12 pb-5 input-field"}
            [:input
             {:type         "text",
              :name         "text",
              :id           "body-type-3",
              :autocomplete "off",
              :required     true}]
            [:label
             {:for "body-type-3", :class "label-name"}
             [:span {:class "content-name"} "Body type"]]]]]]]]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button",
         :name "plus-client-endpoint",
         :id   "plus-client-endpoint"}]
       [:label
        {:class "mb-4 pb-2 plus-label", :for "plus-client-endpoint"}
        "+"]]]

     [:div
      {:class "col-12 pt-5 for-ios center", :style          ;"display: none;"
       {:display "none"}}
      "Coming soon!"]
     [:div
      {:class "col-12 pt-5 for-flutter center", :style      ;"display: none;"
       {:display "none"}}
      "Coming soon!"]
     [:div
      {:class "col-12 pt-5 for-web center", :style          ;"display: none;"
       {:display "none"}}
      "Coming soon!"]
     ]
    ))
