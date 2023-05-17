(ns app-creator.client.ui.client
  (:require [re-frame.core :as re-frame]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [reagent.core :as reagent]))

(defn choose-type []
  (let [client-checked (re-frame/subscribe [::subs/client-checked])]
    (fn []
      [:div
       [:div
        {:class "col-12 pt-5"}
        [:p {:class "mb-4 pb-2"} "Choose platform"]]
       [:div
        {:class "col-12 pb-5"}
        [:input
         {:class    "checkbox-comp-type",
          :type     "radio",
          :name     "client-type",
          :id       "android",
          :checked  (= @client-checked "android")
          :on-click #(re-frame/dispatch [::events/change-client-checked "android"])
          }]
        [:label
         {:class "for-checkbox-comp-type", :for "android"}
         "Android"]
        [:input
         {:class    "checkbox-comp-type",
          :type     "radio",
          :name     "client-type",
          :id       "ios"
          :checked  (= @client-checked "ios")
          :on-click #(re-frame/dispatch [::events/change-client-checked "ios"])}]
        [:label {:class "for-checkbox-comp-type", :for "ios"} "iOS"]
        [:input
         {:class    "checkbox-comp-type",
          :type     "radio",
          :name     "client-type",
          :id       "flutter"
          :checked  (= @client-checked "flutter")
          :on-click #(re-frame/dispatch [::events/change-client-checked "flutter"])}]
        [:label
         {:class "for-checkbox-comp-type", :for "flutter"}
         "Flutter"]
        [:input
         {:class    "checkbox-comp-type",
          :type     "radio",
          :name     "client-type",
          :id       "web"
          :checked  (= @client-checked "web")
          :on-click #(re-frame/dispatch [::events/change-client-checked "web"])}]
        [:label {:class "for-checkbox-comp-type", :for "web"} "Web"]]])))

(defn project-opts []
  (let [opts (re-frame/subscribe [::subs/android-data])]
    (fn []
      [:div
       {:class "col-12 pt-5 center opts",
        :style {:display "flex"}}
       [:div
        {:class "col-12 pb-5 opts-group center"}
        [:p {:class "mb-4 pb-2"} "Language"]
        [:div
         {:class "col-12 pb-5 thin"}
         [:input
          {:class    "checkbox-comp-type",
           :type     "radio",
           :name     "client-lang",
           :id       "client-java",
           :checked  (= (:language @opts) "java")
           :on-click #(re-frame/dispatch [::events/android-radio-opts-change :language "java"])
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "client-java"}
          "Java"]
         [:input
          {:class    "checkbox-comp-type",
           :type     "radio",
           :name     "client-lang",
           :id       "client-kotlin"
           :checked  (= (:language @opts) "kotlin")
           :on-click #(re-frame/dispatch [::events/android-radio-opts-change :language "kotlin"])}]
         [:label
          {:class "for-checkbox-comp-type", :for "client-kotlin"}
          "Kotlin"]]]
       [:div
        {:class "col-12 pb-5 opts-group center"}
        [:p {:class "mb-4 pb-2"} "Test framework"]
        [:div
         {:class "col-12 pb-5 thin"}
         [:input
          {:class    "checkbox-comp-type",
           :type     "radio",
           :name     "test-framework",
           :id       "junit",
           :checked  (= (:test-framework @opts) "junit")
           :on-click #(re-frame/dispatch [::events/android-radio-opts-change :test-framework "junit"])
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "junit"}
          "JUnit"]
         [:input
          {:class    "checkbox-comp-type",
           :type     "radio",
           :name     "test-framework",
           :id       "testng",
           :checked  (= (:test-framework @opts) "testng")
           :on-click #(re-frame/dispatch [::events/android-radio-opts-change :test-framework "testng"])
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "testng"}
          "TestNG"]
         [:input
          {:class    "checkbox-comp-type",
           :type     "radio",
           :name     "test-framework",
           :id       "spock",
           :checked  (= (:test-framework @opts) "spock")
           :on-click #(re-frame/dispatch [::events/android-radio-opts-change :test-framework "spock"])
           }]
         [:label
          {:class "for-checkbox-comp-type", :for "spock"}
          "Spock"]
         [:input
          {:class    "checkbox-comp-type",
           :type     "radio",
           :name     "test-framework",
           :id       "junit-jupiter",
           :checked  (= (:test-framework @opts) "junit-jupiter")
           :on-click #(re-frame/dispatch [::events/android-radio-opts-change :test-framework "junit-jupiter"])
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
            :required     true
            :on-change    #(re-frame/dispatch-sync
                             [::events/android-props-change :proj-name (-> % .-target .-value)])
            :value (get-in @opts [:proj-name :value])}]
          [:label
           (if-not (get-in @opts [:proj-name :valid])
             {:for   "client-proj-name", :class "label-name incorrect-label"
              :style {:border-bottom-color "red"}}
             {:for "client-proj-name", :class "label-name"})
           [:span (if-not (get-in @opts [:proj-name :valid])
                    {:class "content-name"
                     :style {:color "red"}}
                    {:class "content-name"})
            "Project name"]]]
         [:div
          {:class "col-12 pb-5 input-field"}
          [:input
           {:type         "text",
            :name         "text",
            :id           "client-pack-name",
            :autocomplete "off",
            :required     true
            :on-change    #(re-frame/dispatch-sync
                             [::events/android-props-change :package-name (-> % .-target .-value)])
            :value (get-in @opts [:package-name :value])}]
          [:label
           (if-not (get-in @opts [:package-name :valid])
             {:for   "client-pack-name", :class "label-name incorrect-label"
              :style {:border-bottom-color "red"}}
             {:for "client-pack-name", :class "label-name"})
           [:span (if-not (get-in @opts [:package-name :valid])
                    {:class "content-name"
                     :style {:color "red"}}
                    {:class "content-name"})
            "Package name"]]]
         [:div
          {:class "col-12 pb-5 input-field"}
          [:input
           {:type         "text",
            :name         "text",
            :id           "client-host",
            :autocomplete "off",
            :required     true
            :on-change    #(re-frame/dispatch-sync
                             [::events/android-props-change :server-host (-> % .-target .-value)])
            :value (get-in @opts [:server-host :value])}]
          [:label
           (if-not (get-in @opts [:server-host :valid])
             {:for   "client-host", :class "label-name incorrect-label"
              :style {:border-bottom-color "red"}}
             {:for "client-host", :class "label-name"})
           [:span (if-not (get-in @opts [:server-host :valid])
                    {:class "content-name"
                     :style {:color "red"}}
                    {:class "content-name"})
            "Server host"]]]
         [:div
          {:class "col-12 pb-5 input-field"}
          [:input
           {:type         "text",
            :name         "text",
            :id           "client-port",
            :autocomplete "off",
            :required     true
            :on-change    #(re-frame/dispatch-sync
                             [::events/android-props-change :server-port (-> % .-target .-value)])
            :value (get-in @opts [:server-port :value])}]
          [:label
           (if-not (get-in @opts [:server-port :valid])
             {:for   "client-port", :class "label-name incorrect-label"
              :style {:border-bottom-color "red"}}
             {:for "client-port", :class "label-name"})
           [:span (if-not (get-in @opts [:server-port :valid])
                    {:class "content-name"
                     :style {:color "red"}}
                    {:class "content-name"})
            "Server port"]]]]]])))

; Кнопка для добавления эндпоинта
(defn plus-endpoint-button []
  (fn []
    (let [current-items (re-frame/subscribe [::subs/client-endpoints-vec])
          new-item-vec (+ 1 (or (apply max @current-items) -1))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type     "button",
         :name     "plus-client-endpoint",
         :id       "plus-client-endpoint",
         :on-click #(re-frame/dispatch [::events/add-client-endpoint-item new-item-vec])}]
       [:label
        {:class "mb-4 pb-2 plus-label", :for "plus-client-endpoint"}
        "+"]])))


; Кнопка для удаления эндпоинта
(defn minus-endpoint-box [box]
  (fn [box]
    (let [id (str "minus-endpoint-box-" box)]
      [:div
       [:button {:type     "button", :name "minus", :id id
                 :on-click #(re-frame/dispatch [::events/minus-client-endpoint-item box])}]
       [:label {:class "plus-label mt-20", :for id} "-"]])))

; Характеристики эндпоинтов (строки в боксе)
(defn endpoint-box-chars [box]
  (fn [box]
    (let [uri-id (str "uri-" box)
          method-id (str "method-" box)
          r-type-id (str "request-type-" box)
          b-type-id (str "body-type-" box)
          all-content (re-frame/subscribe [::subs/client-endpoints-content])
          content (get @all-content box)]
      [:ul
       {:class "db-col-list"}
       ;[:li
       ; [minus-endpoint-box box]]
       [:li
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           uri-id,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/android-endpoint-url-change (-> % .-target .-value) box])
           :value (get-in content [:url :value])}]
         [:label
          (if-not (get-in content [:url :valid])
            {:for   uri-id, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for uri-id, :class "label-name"})
          [:span (if-not (get-in content [:url :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "URL"]]]]
       [:li
        {:class "pt-10"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           method-id,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/android-endpoint-method-change (-> % .-target .-value) box])
           :value (get-in content [:name :value])}]
         [:label
          (if-not (get-in content [:name :valid])
            {:for   method-id, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for method-id, :class "label-name"})
          [:span (if-not (get-in content [:name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Method name"]]]]
       [:li
        {:class "pt-10"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           r-type-id,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync [::events/android-endpoint-request-change (-> % .-target .-value) box])
           :value (get-in content [:request :value])}]
         [:label
          (if-not (get-in content [:request :valid])
            {:for   r-type-id, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for r-type-id, :class "label-name"})
          [:span (if-not (get-in content [:request :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Request type"]]]]
       [:li
        {:class "pt-10 table-row-li"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           b-type-id,
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync [::events/android-endpoint-body-change (-> % .-target .-value) box])
           :value (get-in content [:body :value])}]
         [:label
          (if-not (get-in content [:body :valid])
            {:for   b-type-id, :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for b-type-id, :class "label-name"})
          [:span (if-not (get-in content [:body :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Body type"]]]
        [minus-endpoint-box box]
        ]])))

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
  (let [client-checked (re-frame/subscribe [::subs/client-checked])]
    (fn []
      [:div
       [:div
        {:class "col-12 pt-5 big-text"}
        [:p {:class "mb-4 pb-2"} "3. Client"]
        [:input
         {:type  "checkbox",
          :class "tick-input",
          :id    "do-client-checkbox"
          :checked  (if (= @client-checked "none") false true)
          :on-click (if (= @client-checked "none")
                      #(re-frame/dispatch [::events/change-client-checked "android"])
                      #(re-frame/dispatch [::events/change-client-checked "none"]))}]
        [:label
         {:for "do-client-checkbox", :class "tick-label"}
         [:span {:class "tick-checked"}]]]

       [choose-type]

       [:div
        {:class "col-12 pt-5 none-client center", :style
         {:display (if (= @client-checked "none") "block" "none")}}
        "Choose one of the platforms to create this component!"]

       [:div
        {:class "col-12 pt-5 for-android center",
         :style
         {:display (if (= @client-checked "android") "block" "none")}}
        [:div
         {:class "col-12 pt-5 header-with-help"}
         [:label {:class "plus-label mt-20 help-label"
                  :style {:visibility "hidden"}} "?"]
         [:p {:class "mb-4 pb-2"} [:p {:class "mb-4 pb-2"} "Project options"]]
         [:label {:class "shadow-label mt-20 help-label" :for "android-options-help"} "?"]
         [:button {:class "help-button" :id "android-options-help" :style {:display "none"}}]
         [:div {:class "help-div box"}
          ; todo
          [:p [:b "Table name:"] " valid SQL-identifier for your future table" [:br]
           [:b "Column:"] " valid SQL-identifier for your future table" [:br]
           [:b "Type:"] " column data type, one of [bool number string date]" [:br]]]]

        [project-opts]

        ;[:div
        ; {:class "col-12 pt-5"}
        ; [:p {:class "mb-4 pb-2"} "Endpoints"]]
        [:div
         {:class "col-12 pt-5 header-with-help"}
         [:label {:class "plus-label mt-20 help-label"
                  :style {:visibility "hidden"}} "?"]
         [:p {:class "mb-4 pb-2"} [:p {:class "mb-4 pb-2"} "Endpoints"]]
         [:label {:class "shadow-label mt-20 help-label" :for "android-endpoints-help"} "?"]
         [:button {:class "help-button" :id "android-endpoints-help" :style {:display "none"}}]
         [:div {:class "help-div box"}
          ; todo
          [:p [:b "Table name:"] " valid SQL-identifier for your future table" [:br]
           [:b "Column:"] " valid SQL-identifier for your future table" [:br]
           [:b "Type:"] " column data type, one of [bool number string date]" [:br]]]]

        [:div
         {:class "col-12 pt-5 center opts", :style          ;"display: flex;"
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
