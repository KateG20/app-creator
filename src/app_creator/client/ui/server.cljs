(ns app-creator.client.ui.server
  (:require [re-frame.core :as re-frame]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [reagent.core :as reagent]
            [app-creator.client.ui.info :as info]))

(defn choose-type []
  (let [server-checked (re-frame/subscribe [::subs/server-checked])]
    (fn []
      [:div
       [:div
        {:class "col-12 pt-5"}
        [:p {:class "mb-4 pb-2"} "Choose framework"]]
       [:div
        {:class "col-12 pb-5"}
        [:input
         {:class    "checkbox-comp-type",
          :type     "radio",
          :name     "server-type",
          :id       "spring",
          :checked  (= @server-checked "spring")
          :on-click #(re-frame/dispatch [::events/change-server-checked "spring"])}]
        [:label
         {:class "for-checkbox-comp-type", :for "spring"}
         "Spring Boot"]
        [:input
         {:class    "checkbox-comp-type",
          :type     "radio",
          :name     "server-type",
          :id       "django"
          :checked  (= @server-checked "django")
          :on-click #(re-frame/dispatch [::events/change-server-checked "django"])}]
        [:label {:class "for-checkbox-comp-type", :for "django"} "Django"]
        [:input
         {:class    "checkbox-comp-type",
          :type     "radio",
          :name     "server-type",
          :id       "nodejs"
          :checked  (= @server-checked "nodejs")
          :on-click #(re-frame/dispatch [::events/change-server-checked "nodejs"])}]
        [:label
         {:class "for-checkbox-comp-type", :for "nodejs"}
         "Node.js"]]])))

(defn project-opts []
  (let [opts (re-frame/subscribe [::subs/spring-project-opts])]
    (fn []
      [:div
       [:div
        {:class "col-12 pt-5 center opts",
         :style {:display "flex"}}
        [:div
         {:class "col-12 pb-5 opts-group center"}
         [:p {:class "mb-4 pb-2"} "Build Tool"]
         [:div
          {:class "col-12 pb-5 thin"}
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "build-tool",
            :id       "gradle",
            :checked  (= (:build @opts) "gradle")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :build "gradle"])
            }]
          [:label
           {:class "for-checkbox-comp-type", :for "gradle"}
           "Gradle"]
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "build-tool",
            :id       "maven"
            :checked  (= (:build @opts) "maven")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :build "maven"])}]
          [:label
           {:class "for-checkbox-comp-type", :for "maven"}
           "Maven"]]]
        [:div
         {:class "col-12 pb-5 opts-group center"}
         [:p {:class "mb-4 pb-2"} "Language"]
         [:div
          {:class "col-12 pb-5 thin"}
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "lang",
            :id       "java",
            :checked  (= (:language @opts) "java")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :language "java"])
            }]
          [:label {:class "for-checkbox-comp-type", :for "java"} "Java"]
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "lang",
            :id       "kotlin"
            :checked  (= (:language @opts) "kotlin")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :language "kotlin"])}]
          [:label
           {:class "for-checkbox-comp-type", :for "kotlin"}
           "Kotlin"]]]
        [:div
         {:class "col-12 pb-5 opts-group center"}
         [:p {:class "mb-4 pb-2"} "Packaging"]
         [:div
          {:class "col-12 pb-5 thin"}
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "packaging",
            :id       "jar",
            :checked  (= (:packaging @opts) "jar")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :packaging "jar"])
            }]
          [:label {:class "for-checkbox-comp-type", :for "jar"} "Jar"]
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "packaging",
            :id       "war"
            :checked  (= (:packaging @opts) "war")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :packaging "war"])}]
          [:label {:class "for-checkbox-comp-type", :for "war"} "War"]]]]
       [:div
        {:class "col-12 pt-5 center opts",
         :style {:display "flex"}}
        [:div
         {:class "col-12 pb-5 opts-group center"}
         [:p {:class "mb-4 pb-2"} "Boot Version"]
         [:div
          {:class "col-12 pb-5 thin"}
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "boot-v",
            :id       "3.1.0"
            :checked  (= (:boot-version @opts) "3.1.0")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :boot-version "3.1.0"])}]
          [:label
           {:class "for-checkbox-comp-type", :for "3.1.0"}
           "3.1.0"]
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "boot-v",
            :id       "3.0.7",
            :checked  (= (:boot-version @opts) "3.0.7")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :boot-version "3.0.7"])
            }]
          [:label
           {:class "for-checkbox-comp-type", :for "3.0.7"}
           "3.0.7"]
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "boot-v",
            :id       "3.0.6"
            :checked  (= (:boot-version @opts) "3.0.6")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :boot-version "3.0.6"])}]
          [:label
           {:class "for-checkbox-comp-type", :for "3.0.6"}
           "3.0.6"]
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "boot-v",
            :id       "2.7.12"
            :checked  (= (:boot-version @opts) "2.7.12")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :boot-version "2.7.12"])}]
          [:label
           {:class "for-checkbox-comp-type", :for "2.7.12"}
           "2.7.12"]
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "boot-v",
            :id       "2.7.11"
            :checked  (= (:boot-version @opts) "2.7.11")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :boot-version "2.7.11"])}]
          [:label
           {:class "for-checkbox-comp-type", :for "2.7.11"}
           "2.7.11"]]]
        [:div
         {:class "col-12 pb-5 opts-group center"}
         [:p {:class "mb-4 pb-2"} "Java Version"]
         [:div
          {:class "col-12 pb-5 thin"}
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "java-v",
            :id       "20"
            :checked  (= (:java-version @opts) "20")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :java-version "20"])}]
          [:label {:class "for-checkbox-comp-type", :for "20"} "20"]
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "java-v",
            :id       "17",
            :checked  (= (:java-version @opts) "17")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :java-version "17"])
            }]
          [:label {:class "for-checkbox-comp-type", :for "17"} "17"]
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "java-v",
            :id       "11"
            :checked  (= (:java-version @opts) "11")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :java-version "11"])}]
          [:label {:class "for-checkbox-comp-type", :for "11"} "11"]
          [:input
           {:class    "checkbox-comp-type",
            :type     "radio",
            :name     "java-v",
            :id       "8"
            :checked  (= (:java-version @opts) "8")
            :on-click #(re-frame/dispatch [::events/change-spring-opt-radio :java-version "8"])}]
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
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/spring-group-change (-> % .-target .-value)])
           :value (get-in @opts [:group :value])}]
         [:label
          (if-not (get-in @opts [:group :valid])
            {:for   "proj-group", :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for "proj-group", :class "label-name"})
          [:span (if-not (get-in @opts [:group :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Group"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "artifact",
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/spring-artifact-change (-> % .-target .-value)])
           :value (get-in @opts [:artifact :value])}]
         [:label
          (if-not (get-in @opts [:artifact :valid])
            {:for   "artifact", :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for "artifact", :class "label-name"})
          [:span (if-not (get-in @opts [:artifact :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Artifact"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "proj-name",
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/spring-proj-name-change (-> % .-target .-value)])
           :value (get-in @opts [:proj-name :value])}]
         [:label
          (if-not (get-in @opts [:proj-name :valid])
            {:for   "proj-name", :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for "proj-name", :class "label-name"})
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
           :id           "description",
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/spring-description-change (-> % .-target .-value)])
           :value (get-in @opts [:description :value])}]
         [:label
          (if-not (get-in @opts [:description :valid])
            {:for   "description", :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for "description", :class "label-name"})
          [:span (if-not (get-in @opts [:description :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Description"]]]]])))

(defn properties []
    (fn []
      (let [db-props (re-frame/subscribe [::subs/spring-db-props])]
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
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/spring-db-props-change :type (-> % .-target .-value)])
           :value (get-in @db-props [:type :value])}]
         [:label
          (if-not (get-in @db-props [:type :valid])
            {:for   "prop-db-type", :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for "prop-db-type", :class "label-name"})
          [:span (if-not (get-in @db-props [:type :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Type"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "prop-db-host",
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/spring-db-props-change :sql-host (-> % .-target .-value)])
           :value (get-in @db-props [:sql-host :value])}]
         [:label
          (if-not (get-in @db-props [:sql-host :valid])
            {:for   "prop-db-host", :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for "prop-db-host", :class "label-name"})
          [:span (if-not (get-in @db-props [:sql-host :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Host"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "prop-db-port",
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/spring-db-props-change :sql-port (-> % .-target .-value)])
           :value (get-in @db-props [:sql-port :value])}]
         [:label
          (if-not (get-in @db-props [:sql-port :valid])
            {:for   "prop-db-port", :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for "prop-db-port", :class "label-name"})
          [:span (if-not (get-in @db-props [:sql-port :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Port"]]]]
       [:div
        {:class "col-12 pb-5 center no-pt"}
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "prop-db-name",
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/spring-db-props-change :db-name (-> % .-target .-value)])
           :value (get-in @db-props [:db-name :value])}]
         [:label
          (if-not (get-in @db-props [:db-name :valid])
            {:for   "prop-db-name", :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for "prop-db-name", :class "label-name"})
          [:span (if-not (get-in @db-props [:db-name :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "DB name"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "prop-db-username",
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/spring-db-props-change :username (-> % .-target .-value)])
           :value (get-in @db-props [:username :value])}]
         [:label
          (if-not (get-in @db-props [:username :valid])
            {:for   "prop-db-username", :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for "prop-db-username", :class "label-name"})
          [:span (if-not (get-in @db-props [:username :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Username"]]]
        [:div
         {:class "col-12 pb-5 input-field"}
         [:input
          {:type         "text",
           :name         "text",
           :id           "prop-db-password",
           :autocomplete "off",
           :required     true
           :on-change    #(re-frame/dispatch-sync
                            [::events/spring-db-props-change :password (-> % .-target .-value)])
           :value (get-in @db-props [:password :value])}]
         [:label
          (if-not (get-in @db-props [:password :valid])
            {:for   "prop-db-password", :class "label-name incorrect-label"
             :style {:border-bottom-color "red"}}
            {:for "prop-db-password", :class "label-name"})
          [:span (if-not (get-in @db-props [:password :valid])
                   {:class "content-name"
                    :style {:color "red"}}
                   {:class "content-name"})
           "Password"]]]]])))


; Кнопка для удаления метода
(defn minus-controller-method-button [box row]
  (fn [box row]
    (let [id (str "minus-server-method-" box "-" row)]
      [:div
       [:button
        {:type     "button", :name "minus", :id id
         :on-click #(re-frame/dispatch [::events/minus-controller-method-item box row])}]
       [:label
        {:class "plus-label mt-20", :for id}
        "-"]])))


; Метод запроса (строка в боксе)
(defn controller-method-item [box row]
  (fn [box row]
    (let [method-name (str "col-method-name-" box "-" row)
          url (str "col-url-" box "-" row)
          mapping (str "col-mapping-" box "-" row)
          all-content (re-frame/subscribe [::subs/spring-controllers-content])
          box-content (get @all-content box)
          row-content (get-in box-content [:methods row])]
      [:li
       {:class "table-row-li"}
       [:div
        {:class "col-12 pb-5 input-field"}
        [:input
         {:type         "text",
          :name         "text",
          :id           method-name,
          :autocomplete "off",
          :required     true
          :on-change    #(re-frame/dispatch-sync
                           [::events/spring-method-name-change (-> % .-target .-value) box row])
          :value (get-in row-content [:name :value])}]
        ;[:label
        ; {:for method-name, :class "label-name"}
        ; [:span {:class "content-name"} "Method name"]]
        [:label
         (if-not (get-in row-content [:name :valid])
           {:for   method-name, :class "label-name incorrect-label"
            :style {:border-bottom-color "red"}}
           {:for method-name, :class "label-name"})
         [:span (if-not (get-in row-content [:name :valid])
                  {:class "content-name"
                   :style {:color "red"}}
                  {:class "content-name"})
          "Method name"]]]
       [:div
        {:class "col-12 pb-5 input-field"}
        [:input
         {:type         "text",
          :name         "text",
          :id           url,
          :autocomplete "off",
          :required     true
          :on-change    #(re-frame/dispatch-sync
                           [::events/spring-method-url-change (-> % .-target .-value) box row])
          :value (get-in row-content [:url :value])}]
        ;[:label
        ; {:for url, :class "label-name"}
        ; [:span {:class "content-name"} "Request URL"]]
        [:label
         (if-not (get-in row-content [:url :valid])
           {:for   url, :class "label-name incorrect-label"
            :style {:border-bottom-color "red"}}
           {:for url, :class "label-name"})
         [:span (if-not (get-in row-content [:url :valid])
                  {:class "content-name"
                   :style {:color "red"}}
                  {:class "content-name"})
          "Request URL"]]]
       [:div
        {:class "col-12 pb-5 input-field"}
        [:input
         {:type         "text",
          :name         "text",
          :id           mapping,
          :autocomplete "off",
          :required     true
          :on-change    #(re-frame/dispatch-sync
                           [::events/spring-method-type-change (-> % .-target .-value) box row])
          :value (get-in row-content [:type :value])}]
        ;[:label
        ; {:for mapping, :class "label-name"}
        ; [:span {:class "content-name"} "Request type"]]
        [:label
         (if-not (get-in row-content [:type :valid])
           {:for   mapping, :class "label-name incorrect-label"
            :style {:border-bottom-color "red"}}
           {:for mapping, :class "label-name"})
         [:span (if-not (get-in row-content [:type :valid])
                  {:class "content-name"
                   :style {:color "red"}}
                  {:class "content-name"})
          "Request type"]]]
       [minus-controller-method-button box row]])))

; принимает двумерный массив типа [[0 0] [0 1] [0 2] [1 1]]
; и для аргумента box=0 находит число 2
(defn find-last-item-number-in-box [box vector]
  (second (last (filter #(= box (first %)) vector))))

; Кнопка для добавления метода в контроллер
(defn plus-controller-method-button [box]
  (fn [box]
    (let [id (str "plus-server-method-" box)
          current-items (re-frame/subscribe [::subs/spring-controller-methods-vec])
          new-col-num (+ 1 (find-last-item-number-in-box box @current-items))
          new-item-vec (reagent/atom [box new-col-num])]
      [:div
       [:button
        {:type     "button", :name "plus", :id id
         :on-click #(re-frame/dispatch [::events/add-controller-method-item @new-item-vec])}]
       [:label
        {:class "plus-label mt-20", :for id}
        "+"]
       ])))

; Кнопка для добавления контроллера
(defn plus-controller-button []
  (fn []
    (let [current-items (re-frame/subscribe [::subs/spring-controllers-vec])
          new-item-vec (+ 1 (or (apply max @current-items) -1))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type     "button",
         :name     "plus-controller",
         :id       "plus-controller"
         :on-click #(re-frame/dispatch [::events/add-controller-item new-item-vec])}]
       [:label {:class "mb-4 pb-2 plus-label", :for "plus-controller"} "+"]])))

; Кнопка для удаления контроллера
(defn minus-controller-button [box]
  (fn [box]
    (let [id (str "minus-controller-" box)]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type     "button",
         :name     "minus-controller",
         :id       id
         :on-click #(re-frame/dispatch [::events/minus-controller-item box])}]
       [:label {:class "mb-4 pb-2 plus-label", :for id} "-"]])))

; Список методов в контроллере (строки в боксе)
(defn controller-box-methods [box]
  (fn [box]
    (let [all-items @(re-frame/subscribe [::subs/spring-controller-methods-vec])
          our-box-items (filter #(= box (first %)) all-items)]
      [:ul
       {:class "db-col-list"}
       (for [item our-box-items]
         [controller-method-item (first item) (second item)])
       ])))

; Сам бокс контроллера
(defn controller-box [box]
  (fn [box]
    (let [all-content (re-frame/subscribe [::subs/spring-controllers-content])
          content (get @all-content box)
          id (str "controller-name-" box)
          t-vec-content (re-frame/subscribe [::subs/spring-controllers-vec])
          c-vec-content (re-frame/subscribe [::subs/spring-controller-methods-vec])]
      [:li
       {:class "col-12 pb-5 opts-group center box"}
       ;[:p {:style {:font-size "10px" :color "black"}} t-vec-content]
       ;[:p {:style {:font-size "10px" :color "black"}} c-vec-content]
       ;[:ul
       ; {:class "db-col-list"}
       ; [:li
       ;  {:class "table-row-li"}

       [:div
        {:class "col-12 pb-5"
         :style {:display "flex"
                 :align-items "center"
                 :column-gap "20px"
                 :justify-content "space-between"}}

       [:div
        {:class "col-12 pb-5 input-field"}
        [:input
         {:type         "text",
          :name         "text",
          :id           id,
          :autocomplete "off",
          :required     true
          :on-change    #(re-frame/dispatch-sync
                           [::events/spring-controller-name-change (-> % .-target .-value) box])
          :value (get-in content [:name :value])}]
        [:label
         (if-not (get-in content [:name :valid])
           {:for   id, :class "label-name incorrect-label"
            :style {:border-bottom-color "red"}}
           {:for id, :class "label-name"})
         [:span (if-not (get-in content [:name :valid])
                  {:class "content-name"
                   :style {:color "red"}}
                  {:class "content-name"})
          "Controller name"]]]
         [minus-controller-button box]]
         ;]]

       [controller-box-methods box]
       [plus-controller-method-button box]])))

; Список контроллеров (боксов)
(defn controller-list []
  (let [controllers (re-frame/subscribe [::subs/spring-controllers-vec])]
    (fn []
      [:ul
       {:class "controller-list"}
       (for [c @controllers]
         [controller-box c])])))

(defn server-ui []
  (let [server-checked (re-frame/subscribe [::subs/server-checked])]
    (fn []
      [:div
       [:div
        {:class "col-12 pt-5 big-text"}
        [:p {:class "mb-4 pb-2"} "2. Server"]
        [:input
         {:type  "checkbox",
          :class "tick-input",
          :id    "do-server-checkbox"
          :checked  (if (= @server-checked "none") false true)
          :on-click (if (= @server-checked "none")
                      #(re-frame/dispatch [::events/change-server-checked "spring"])
                      #(re-frame/dispatch [::events/change-server-checked "none"]))}]
        [:label
         {:for "do-server-checkbox", :class "tick-label"}
         [:span {:class "tick-checked"}]]]

       [choose-type]

       [:div
        {:class "col-12 pt-5 none-client center", :style
         {:display (if (= @server-checked "none") "block" "none")}}
        "Choose one of the frameworks to create this component!"]

       [:div
        {:class "col-12 pt-5 for-spring center",
         :style
         {:display (if (= @server-checked "spring") "block" "none")}}

        [info/help-label "spring-opts-help" info/server-opts-info "Project options"]

        [project-opts]

        [info/help-label "spring-props-help" info/server-props-info "Properties"]

        [properties]

        [info/help-label "spring-controllers-help" info/server-controllers-info "Controllers"]

        [:div
         {:class "col-12 pt-5 center opts", :style          ;"display: flex;"
          {:display "flex"}}
         [controller-list]]
        [plus-controller-button]]

       [:div
        {:class "col-12 pt-5 for-django center", :style
         {:display (if (= @server-checked "django") "block" "none")}}
        "Coming soon!" [:br] "Please, choose another framework."]
       [:div
        {:class "col-12 pt-5 for-nodejs center", :style
         {:display (if (= @server-checked "nodejs") "block" "none")}}
        "Coming soon!" [:br] "Please, choose another framework."]])))


