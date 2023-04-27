(ns app-creator.client.ui.db
  (:require [re-frame.core :as re-frame]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [reagent.core :as reagent]))

(defn choose-type []
  (fn []
    [:div
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
       "ClickHouse"]]]))

; Колонка таблицы (строка в боксе)
(defn table-column-item [box row]
  (let [name (str "col-name-" box "-" row)
        type (str "col-type-" box "-" row)]
    [:li
     {:class "table-row-li"}
     [:div
      {:class "col-12 pb-5 input-field"}
      [:input
       {:type         "text",
        :name         "text",
        :id           name,
        :autocomplete "off",
        :required     true}]
      [:label
       {:for name, :class "label-name"}
       [:span {:class "content-name"} "Column"]]]
     [:div
      {:class "col-12 pb-5 input-field"}
      [:input
       {:type         "text",
        :name         "text",
        :id           type,
        :autocomplete "off",
        :required     true}]
      [:label
       {:for type, :class "label-name"}
       [:span {:class "content-name"} "Type"]]]]))

; принимает двумерный массив типа [[0 0] [0 1] [0 2] [1 1]]
; и для аргумента box=0 находит число 2
(defn find-last-item-number-in-box [box vector]
  (second (last (filter #(= box (first %)) vector))))

; Кнопка для добавления колонки в таблице
(defn plus-table-row-button [box]
  (fn [box]
    (let [id (str "plus-column-" box)
          current-items (re-frame/subscribe [::subs/table-columns])
          new-col-num (+ 1 (find-last-item-number-in-box box @current-items))
          new-item-vec (reagent/atom [box new-col-num])]
      [:div
       [:button {:type     "button", :name "plus", :id id
                 :on-click #(re-frame/dispatch [::events/add-table-column-item @new-item-vec])}]
       [:label {:class "plus-label mt-20", :for id} "+"]])))

; Кнопка для добавления таблицы
(defn plus-table-button []
  (fn []
    (let [current-items (re-frame/subscribe [::subs/tables])
          new-item-vec (reagent/atom (+ 1 (last @current-items)))]
      [:div
       {:class "col-12 pt-5 button-center"}
       [:button
        {:type     "button",
         :name     "plus-table",
         :id       "plus-table"
         :on-click #(re-frame/dispatch [::events/add-table-item @new-item-vec])}]
       [:label {:class "mb-4 pb-2 plus-label", :for "plus-table"} "+"]])))

; Список колонок в таблице (строки в боксе)
(defn table-box-columns [box]
  (fn [box]
    (let [all-items @(re-frame/subscribe [::subs/table-columns])
          our-box-items (filter #(= box (first %)) all-items)]
      [:ul
       {:class "db-col-list"}
       (for [item our-box-items]
         (table-column-item (first item) (second item)))])))

; Список таблиц (боксов)
(defn table-list []
  (let [tables (re-frame/subscribe [::subs/tables])]
    (fn []
      [:ul
       {:class "db-list"}
       (for [t @tables]
         [:li
          {:class "col-12 pb-5 opts-group center box"}
          [:div
           {:class "col-12 pb-5 input-field"}
           [:input
            {:type         "text",
             :name         "text",
             :id           (str "table-name-" t),
             :autocomplete "off",
             :required     true}]
           [:label
            {:for (str "table-name-" t), :class "label-name"}
            [:span {:class "content-name"} "Table name"]]]
          [table-box-columns t]
          [plus-table-row-button t]
          ])])))

(defn db-ui []
  (fn []
    [:div
     [:div
      {:class "col-12 pt-5 big-text"}
      [:p {:class "mb-4 pb-2"} "1. Database"]]

     [choose-type]

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
       [table-list]]
      [plus-table-button]]

     [:div
      {:class "col-12 pt-5 for-mongodb center", :style      ;"display: none;"
       {:display "none"}}
      "Coming soon!"]
     [:div
      {:class "col-12 pt-5 for-clickhouse center",
       :style                                               ;"display: none;"
       {:display "none"}}
      "Coming soon!"]
     ]))