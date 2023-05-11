(ns app-creator.client.ui.db
  (:require [re-frame.core :as re-frame]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [reagent.core :as reagent]))

(defn choose-type []
  (let [db-checked (re-frame/subscribe [::subs/db-checked])]
    (fn []
      [:div
       [:div
        {:class "col-12 pt-5"}
        [:p {:class "mb-4 pb-2"} "Choose type"]]

       [:div
        {:class "col-12 pb-5"}
        [:input
         {:class    "checkbox-comp-type",
          :type     "radio",
          :name     "db-type",
          :id       "postgres",
          :checked  (= @db-checked "postgres")
          :on-click #(re-frame/dispatch [::events/change-db-checked "postgres"])
          }]
        [:label
         {:class "for-checkbox-comp-type", :for "postgres"}
         "PostgreSQL"]
        [:input
         {:class    "checkbox-comp-type",
          :type     "radio",
          :name     "db-type",
          :id       "mongodb"
          :checked  (= @db-checked "mongodb")
          :on-click #(re-frame/dispatch [::events/change-db-checked "mongodb"])}]
        [:label
         {:class "for-checkbox-comp-type", :for "mongodb"}
         "MongoDB"]
        [:input
         {:class    "checkbox-comp-type",
          :type     "radio",
          :name     "db-type",
          :id       "clickhouse"
          :checked  (= @db-checked "clickhouse")
          :on-click #(re-frame/dispatch [::events/change-db-checked "clickhouse"])}]
        [:label
         {:class "for-checkbox-comp-type", :for "clickhouse"}
         "ClickHouse"]]])))

; Кнопка для удаления колонки в таблице
(defn minus-table-row-button [box row]
  (fn [box row]
    (let [id (str "minus-column-" box "-" row)]
      [:div
       [:button {:type     "button", :name "minus", :id id
                 :on-click #(re-frame/dispatch [::events/minus-table-column-item box row])}]
       [:label {:class "plus-label mt-20", :for id} "-"]])))

; Колонка таблицы (строка в боксе)
(defn table-column-item [box row]
  (fn [box row]
    (let [name (str "col-name-" box "-" row)
          type (str "col-type-" box "-" row)
          all-content (re-frame/subscribe [::subs/postgres-tables-content])
          box-content (get @all-content box)
          row-content (get-in box-content [:columns row])]
      [:li
       {:class "table-row-li"}
       [:div
        {:class "col-12 pb-5 input-field"}
        [:input
         {:type         "text",
          :name         "text",
          :id           name,
          :autocomplete "off",
          :required     true
          :on-change    #(re-frame/dispatch-sync
                           [::events/postgres-column-name-change (-> % .-target .-value) box row])
          :value (get-in row-content [:name :value])}]
        [:label
         (if-not (get-in row-content [:name :valid])
           {:for   name, :class "label-name incorrect-label"
            :style {:border-bottom-color "red"}}
           {:for name, :class "label-name"})
         [:span (if-not (get-in row-content [:name :valid])
                  {:class "content-name"
                   :style {:color "red"}}
                  {:class "content-name"})
          "Column"]]]
       [:div
        {:class "col-12 pb-5 input-field"}
        [:input
         {:type         "text",
          :name         "text",
          :id           type,
          :autocomplete "off",
          :required     true
          :on-change    #(re-frame/dispatch-sync
                           [::events/postgres-column-opts-change (-> % .-target .-value) box row])
          :value (get-in row-content [:opts :value])}]
        [:label
         (if-not (get-in row-content [:opts :valid])
           {:for   type, :class "label-name incorrect-label"
            :style {:border-bottom-color "red"}}
           {:for type, :class "label-name"})
         [:span (if-not (get-in row-content [:opts :valid])
                  {:class "content-name"
                   :style {:color "red"}}
                  {:class "content-name"})
          "Type"]]]
       [minus-table-row-button box row]
       ])))

; принимает двумерный массив типа [[0 0] [0 1] [0 2] [1 1]]
; и для аргумента box=0 находит число 2
(defn find-last-item-number-in-box [box vector]
  (or (second (last (filter #(= box (first %)) vector))) -1))

; Кнопка для добавления колонки в таблице
(defn plus-table-row-button [box]
    (fn [box]
      (let [id (str "plus-column-" box)
            current-items (re-frame/subscribe [::subs/postgres-columns-vec])
            new-col-num (+ 1 (find-last-item-number-in-box box @current-items))
            new-item-vec (reagent/atom [box new-col-num])]
      [:div
       [:button {:type     "button", :name "plus", :id id
                 :on-click #(re-frame/dispatch [::events/add-table-column-item @new-item-vec])}]
       [:label {:class "plus-label mt-20", :for id} "+"]])))

; Кнопка для добавления таблицы
(defn plus-table-button []
    (fn []
      (let [current-items (re-frame/subscribe [::subs/postgres-tables-vec])
            new-item-id (+ 1 (or (apply max @current-items) -1))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type     "button",
         :name     "plus-table",
         :id       "plus-table"
         :on-click #(re-frame/dispatch [::events/add-table-item new-item-id])}]
       [:label {:class "mb-4 pb-2 plus-label", :for "plus-table"} "+"]])))

; Кнопка для удаления таблицы
(defn minus-table-button [box]
  (fn [box]
    (let [id (str "minus-table-" box)]
      [:div
       [:button {:type     "button", :name "minus", :id id
                 :on-click #(re-frame/dispatch [::events/minus-table-item box])}]
       [:label {:class "plus-label mt-20", :for id} "-"]])))

; Список колонок в таблице (строки в боксе)
(defn table-box-columns [box]
    (fn [box]
      (let [all-items @(re-frame/subscribe [::subs/postgres-columns-vec])
            our-box-items (filter #(= box (first %)) all-items)]
      [:ul
       {:class "db-col-list"}
       (for [item our-box-items]
         [table-column-item (first item) (second item)]
         )])))

; Содержимое бокса таблицы
; Когда это было включено в table-list, оно не работало, хотя let было то же самое.
; Хм, а еще не работает, если тут let снаружи fn...
; Но если вернуть это в table-list даже с let внутри, там оно все равно не работает.
(defn table-box [box]
  (fn [box]
    (let [all-content (re-frame/subscribe [::subs/postgres-tables-content])
          content (get @all-content box)
          id (str "table-name-" box)
          t-vec-content (re-frame/subscribe [::subs/postgres-tables-vec])
          c-vec-content (re-frame/subscribe [::subs/postgres-columns-vec])]
      [:li
       {:class "col-12 pb-5 opts-group center box"}
       ;[:p {:style {:font-size "10px"}} content]
       ;[:p {:style {:font-size "10px" :color "black"}} t-vec-content]
       ;[:p {:style {:font-size "10px" :color "black"}} c-vec-content]


       [:ul
        {:class "db-col-list"}
        [:li
         {:class "table-row-li"}
         [:div
          {:class "col-12 pb-5 input-field"}
          [:input
           {:type         "text",
            :name         "text",
            :id           id,
            :autocomplete "off",
            :required     true
            :on-change    #(re-frame/dispatch-sync
                             [::events/postgres-table-name-change (-> % .-target .-value) box])
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
            "Table name"]]]
         [minus-table-button box]
         ]]

       [table-box-columns box]
       [plus-table-row-button box]])))

; Список таблиц (боксов)
(defn table-list []
  (let [tables (re-frame/subscribe [::subs/postgres-tables-vec])]
    (fn []
      [:ul
       {:class "db-list"}
       (for [t @tables]
         [table-box t]
         )])))

(defn db-ui []
  (let [db-checked (re-frame/subscribe [::subs/db-checked])
        props (re-frame/subscribe [::subs/postgres-data])]
    (fn []
      [:div
       [:div
        {:class "col-12 pt-5 big-text"}
        [:p {:class "mb-4 pb-2"} "1. Database"]

        ;[:input
        ; {:type "checkbox",
        ;  :class "tick-input",
        ;  :id "customCheckbox1",
        ;  :checked true
        ;  :hidden ""}]
        ;[:label
        ; {:for "customCheckbox1", :class "tick-label"}
        ; [:div
        ;  {:class "tick-group"}
        ;  [:span {:class "tick-checked"}]]]

        ;[:div
        ; [:input {:type "checkbox", :id "scales", :name "scales", :checked ""}]
        ; [:label {:for "scales"} "Scales"]]

        ;[:div
        ; {:class "tick-group"}
         [:input
          {:type "checkbox",
           :class "tick-input",
           :id "customCheckbox1",
           ;:hidden true
           ;:visibility "hidden"
           ;:style {:display "block"
           ;        ;:opacity "0"
           ;        ;:width "0px"
           ;        ;:height "0px"
           ;        :margin "0px"}
           }]
         ;]
        [:label
         {:for "customCheckbox1", :class "tick-label"}
         [:span {:class "tick-checked"
                 ;:style {:z-index "200"}
                 }]]

        ;[:label
        ; {:for "customCheckbox1", :class "tick-label"}
        ; [:div
        ;  {:class "tick-group"}
        ;  [:input
        ;   {:type "checkbox",
        ;    :class "tick-input",
        ;    :id "customCheckbox1",
        ;    ;:hidden true
        ;    ;:visibility "hidden"
        ;    :style {:display "block" :opacity "0" :width "0px" :height "0px" :margin "0px"}
        ;    }]
        ;  [:span {:class "tick-checked"
        ;          ;:style {:z-index "200"}
        ;          }]]]

        ]

       [choose-type]

       [:div
        {:class "col-12 pt-5 for-postgres center",
         :style
         {:display (if (= @db-checked "postgres") "block" "none")}}

        [:div
         {:class "col-12 pt-5 header-with-help"}
         [:label {:class "plus-label mt-20 help-label"
                  :style {:visibility "hidden"}} "?"]
         [:p {:class "mb-4 pb-2"} "Properties"]
         [:label {:class "plus-label mt-20 help-label" :for "db-prop-help"} "?"]
         [:button {:class "help-button" :id "db-prop-help" :style {:display "none"}}]
         [:div {:class "help-div box"}
          [:p [:b "DB name:"] " valid SQL-identifier of your future database" [:br]
           [:b "Host:"] " valid host of your PostgreSQL server" [:br]
           [:b "Username:"] " your PostgreSQL username" [:br]
           [:b "Password:"] " password for your PostgreSQL user" [:br]]]]

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
             :required     true
             :on-change    #(re-frame/dispatch-sync
                              [::events/postgres-db-name-change (-> % .-target .-value)])
             :value (get-in @props [:db-name :value])}]
           [:label
            (if-not (get-in @props [:db-name :valid])
              {:for   "db-name", :class "label-name incorrect-label"
               :style {:border-bottom-color "red"}}
              {:for "db-name", :class "label-name"})
            [:span (if-not (get-in @props [:db-name :valid])
                     {:class "content-name"
                      :style {:color "red"}}
                     {:class "content-name"})
             "DB name"]]]
          [:div
           {:class "col-12 pb-5 input-field"}
           [:input
            {:type         "text",
             :name         "text",
             :id           "db-host",
             :autocomplete "off",
             :required     true
             :on-change    #(re-frame/dispatch-sync [::events/postgres-host-change (-> % .-target .-value)])
             :value (get-in @props [:host :value])}]
           [:label
            (if-not (get-in @props [:host :valid])
              {:for   "db-host", :class "label-name incorrect-label"
               :style {:border-bottom-color "red"}}
              {:for "db-host", :class "label-name"})
            [:span (if-not (get-in @props [:host :valid])
                     {:class "content-name"
                      :style {:color "red"}}
                     {:class "content-name"})
             "Host"]]
           ]
          [:div
           {:class "col-12 pb-5 input-field"}
           [:input
            {:type         "text",
             :name         "text",
             :id           "db-username",
             :autocomplete "off",
             :required     true
             :on-change    #(re-frame/dispatch-sync [::events/postgres-username-change (-> % .-target .-value)])
             :value (get-in @props [:username :value])}]
           [:label
            (if-not (get-in @props [:username :valid])
              {:for   "db-username", :class "label-name incorrect-label"
               :style {:border-bottom-color "red"}}
              {:for "db-username", :class "label-name"})
            [:span (if-not (get-in @props [:username :valid])
                     {:class "content-name"
                      :style {:color "red"}}
                     {:class "content-name"})
             "Username"]]]
          [:div
           {:class "col-12 pb-5 input-field"}
           [:input
            {:type         "text",
             :name         "text",
             :id           "db-password",
             :autocomplete "off",
             :required     true
             :on-change    #(re-frame/dispatch-sync [::events/postgres-password-change (-> % .-target .-value)])
             :value (get-in @props [:password :value])}]
           [:label
            (if-not (get-in @props [:password :valid])
              {:for   "db-password", :class "label-name incorrect-label"
               :style {:border-bottom-color "red"}}
              {:for "db-password", :class "label-name"})
            [:span (if-not (get-in @props [:password :valid])
                     {:class "content-name"
                      :style {:color "red"}}
                     {:class "content-name"})
             "Password"]]]]]


        [:div
         {:class "col-12 pt-5 header-with-help"}
         [:label {:class "plus-label mt-20 help-label"
                  :style {:visibility "hidden"}} "?"]
         [:p {:class "mb-4 pb-2"} "Tables"]
         [:label {:class "plus-label mt-20 help-label" :for "db-tables-help"} "?"]
         [:button {:class "help-button" :id "db-tables-help" :style {:display "none"}}]
         [:div {:class "help-div box"}
          [:p [:b "Table name:"] " valid SQL-identifier for your future table" [:br]
           [:b "Column:"] " valid SQL-identifier for your future table" [:br]
           [:b "Type:"] " column data type, one of [bool number string date]" [:br]]]]
        [:div
         {:class "col-12 pt-5 center opts",
          :style {:display "flex"}}
         [table-list]]
        [plus-table-button]]

       [:div
        {:class "col-12 pt-5 for-mongodb center",
         :style {:display (if (= @db-checked "mongodb") "block" "none")}}
        "Coming soon!" [:br] "Please, choose another database type."]
       [:div
        {:class "col-12 pt-5 for-clickhouse center",
         :style {:display (if (= @db-checked "clickhouse") "block" "none")}}
        "Coming soon!" [:br] "Please, choose another database type."]
       ])))