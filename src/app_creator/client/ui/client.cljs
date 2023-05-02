(ns app-creator.client.ui.client
  (:require [re-frame.core :as re-frame]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [reagent.core :as reagent]))


; Кнопка для добавления эндпоинта
(defn plus-endpoint-button []
  (fn []
    (let [current-items (re-frame/subscribe [::subs/client-endpoints-vec])
          new-item-vec (reagent/atom (+ 1 (last @current-items)))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type "button",
         :name "plus-client-endpoint",
         :id   "plus-client-endpoint",
         :on-click #(re-frame/dispatch [::events/add-client-endpoint-item @new-item-vec])}]
       [:label
        {:class "mb-4 pb-2 plus-label", :for "plus-client-endpoint"}
        "+"]])))

; Характеристики эндпоинтов (строки в боксе)
(defn endpoint-box-chars [box]
  (fn [box]
    (let [uri-id (str "uri-" box)
          method-id (str "method-" box)
          r-type-id (str "request-type-" box)
          b-type-id (str "body-type-" box)]
      [:ul
       {:class "db-col-list"}
       [:li
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           uri-id,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for uri-id, :class "label-name"}
          [:span {:class "content-name"} "URL"]]]]
       [:li
        {:class "pt-10"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           method-id,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for method-id, :class "label-name"}
          [:span {:class "content-name"} "Method name"]]]]
       [:li
        {:class "pt-10"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           r-type-id,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for r-type-id, :class "label-name"}
          [:span {:class "content-name"} "Request type"]]]]
       [:li
        {:class "pt-10"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           b-type-id,
           :autocomplete "off",
           :required     true}]
         [:label
          {:for b-type-id, :class "label-name"}
          [:span {:class "content-name"} "Body type"]]]]])))

; Список эндпоинтов (боксов)
(defn endpoint-list []
  (let [endpoints (re-frame/subscribe [::subs/client-endpoints-vec])]
    (fn []
      [:ul
       {:class "db-list"}
       (for [e @endpoints]
         [:li
          {:class "col-12 pb-5 opts-group center box"}
          [endpoint-box-chars e]])])))

(defn client-ui []
  (let [client-checked (re-frame/subscribe [::subs/client-checked])
        opts-checked (re-frame/subscribe [::subs/client-opts])]
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
        :checked  (= @client-checked "android")
        :on-click #(re-frame/dispatch [::events/change-client-checked "android"])
        }]
      [:label
       {:class "for-checkbox-comp-type", :for "android"}
       "Android"]
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "client-type",
        :id    "ios"
        :checked  (= @client-checked "ios")
        :on-click #(re-frame/dispatch [::events/change-client-checked "ios"])}]
      [:label {:class "for-checkbox-comp-type", :for "ios"} "iOS"]
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "client-type",
        :id    "flutter"
        :checked  (= @client-checked "flutter")
        :on-click #(re-frame/dispatch [::events/change-client-checked "flutter"])}]
      [:label
       {:class "for-checkbox-comp-type", :for "flutter"}
       "Flutter"]
      [:input
       {:class "checkbox-comp-type",
        :type  "radio",
        :name  "client-type",
        :id    "web"
        :checked  (= @client-checked "web")
        :on-click #(re-frame/dispatch [::events/change-client-checked "web"])}]
      [:label {:class "for-checkbox-comp-type", :for "web"} "Web"]]

     [:div
      {:class "col-12 pt-5 for-android center",
       :style                                               ;"display: block;"
       {:display (if (= @client-checked "android") "block" "none")}}
      ;[:div
      ; {:class "col-12 pt-5"}
      ; [:p {:class "mb-4 pb-2"} "Project options"]]
      [:div
       {:class "col-12 pt-5 header-with-help"}
       [:label {:class "plus-label mt-20 help-label"
                :style {:visibility "hidden"}} "?"]
       [:p {:class "mb-4 pb-2"} [:p {:class "mb-4 pb-2"} "Project options"]]
       [:label {:class "plus-label mt-20 help-label" :for "android-options-help"} "?"]
       [:button {:class "help-button" :id "android-options-help" :style {:display "none"}}]
       [:div {:class "help-div box"}
        ; todo
        [:p [:b "Table name:"] " valid SQL-identifier for your future table" [:br]
         [:b "Column:"] " valid SQL-identifier for your future table" [:br]
         [:b "Type:"] " column data type, one of [bool number string date]" [:br]]]]

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
           :checked  (= (:lang @opts-checked) "java")
           :on-click #(re-frame/dispatch [::events/change-android-lang "java"])
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "client-java"}
          "Java"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "client-lang",
           :id    "client-kotlin"
           :checked  (= (:lang @opts-checked) "kotlin")
           :on-click #(re-frame/dispatch [::events/change-android-lang "kotlin"])}]
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
           :checked  (= (:test @opts-checked) "junit")
           :on-click #(re-frame/dispatch [::events/change-android-test "junit"])
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "junit"}
          "JUnit"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "test-framework",
           :id    "testng",
           :checked  (= (:test @opts-checked) "testng")
           :on-click #(re-frame/dispatch [::events/change-android-test "testng"])
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "testng"}
          "TestNG"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "test-framework",
           :id    "spock",
           :checked  (= (:test @opts-checked) "spock")
           :on-click #(re-frame/dispatch [::events/change-android-test "spock"])
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "spock"}
          "Spock"]
         [:input
          {:class "checkbox-comp-type",
           :type  "radio",
           :name  "test-framework",
           :id    "junit-jupiter",
           :checked  (= (:test @opts-checked) "junit-jupiter")
           :on-click #(re-frame/dispatch [::events/change-android-test "junit-jupiter"])
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
      ;[:div
      ; {:class "col-12 pt-5"}
      ; [:p {:class "mb-4 pb-2"} "Endpoints"]]
      [:div
       {:class "col-12 pt-5 header-with-help"}
       [:label {:class "plus-label mt-20 help-label"
                :style {:visibility "hidden"}} "?"]
       [:p {:class "mb-4 pb-2"} [:p {:class "mb-4 pb-2"} "Endpoints"]]
       [:label {:class "plus-label mt-20 help-label" :for "android-endpoints-help"} "?"]
       [:button {:class "help-button" :id "android-endpoints-help" :style {:display "none"}}]
       [:div {:class "help-div box"}
        ; todo
        [:p [:b "Table name:"] " valid SQL-identifier for your future table" [:br]
         [:b "Column:"] " valid SQL-identifier for your future table" [:br]
         [:b "Type:"] " column data type, one of [bool number string date]" [:br]]]]

      [:div
       {:class "col-12 pt-5 center opts", :style            ;"display: flex;"
        {:display "flex"}}
       [endpoint-list]]
      [plus-endpoint-button]]

     [:div
      {:class "col-12 pt-5 for-ios center", :style
       {:display (if (= @client-checked "ios") "block" "none")}}
      "Coming soon!" [:br] "Please, choose another platform."]
     [:div
      {:class "col-12 pt-5 for-flutter center", :style
       {:display (if (= @client-checked "flutter") "block" "none")}}
      "Coming soon!" [:br] "Please, choose another platform."]
     [:div
      {:class "col-12 pt-5 for-web center", :style
       {:display (if (= @client-checked "web") "block" "none")}}
      "Coming soon!" [:br] "Please, choose another platform."]])))
