(ns app-creator.client.core
  (:require [reagent.dom :as rdom]
            [app-creator.client.events :as events]
            [app-creator.client.subs :as subs]
            [re-frame.core :as re-frame]
            [app-creator.client.ui.main-ui :as ui]
            [reagent.core :as reagent]))

(defn simple-component []
  [:div
   [:p "I am a component!!!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn text-input-field [textatom]
  "Просто текстовое поле ввода (атомическое)
  По идее, можно впихнуть прямо в разметку"

  (let [gettext (fn [e] (-> e .-target .-value))
        emit    (fn [e] (re-frame/dispatch [::events/text-change (gettext e)]))]
    [:div
     [:input {:type "text"
           :value @textatom        ;; subscribe
           :on-change emit}]]))

(defn error-field []
  (let [display (re-frame/subscribe [::subs/error-display])]
    [:div
     {:id    "error-field"
      :style {:color   "red"
              :display @display}}
     "Incorrect value"]))

(defn success-field []
  (let [display (re-frame/subscribe [::subs/success-display])]
    [:div
     {:id    "success-field"
      :style {:color   "green"
              :display @display}}
     "Created!"]))

(defn server-framework-input-field []
  (let [server-framework-value (re-frame/subscribe [::subs/server-framework-text])
        gettext (fn [e] (-> e .-target .-value))
        emit    (fn [e] (re-frame/dispatch [::events/server-framework-text-change (gettext e)]))]
    [:div
     [:input {:type "text"
              :value @server-framework-value
              :on-change emit}]]))

(defn server-lang-input-field []
  (let [server-lang-value (re-frame/subscribe [::subs/server-lang-text])
        gettext (fn [e] (-> e .-target .-value))
        emit    (fn [e] (re-frame/dispatch [::events/server-lang-text-change (gettext e)]))]
    [:div
     [:input {:type "text"
              :value @server-lang-value
              :on-change emit}]]))

(defn http-info []
  (let [text (re-frame/subscribe [::subs/http-post-result-text])]
    [:p @text]))

(defn ui []
  (let [textatom (re-frame/subscribe [::subs/text])] ;; subscribe
    (fn []
      [:div
       [:p "The value is now: " @textatom]
       [:p "Change it here: " [text-input-field textatom]]
       [error-field]
       [:p "Enter your server framework: " [server-framework-input-field]]
       [:p "Enter your server language: " [server-lang-input-field]]
       [:input {:type "button"
                :value "Create!"
                :on-click #(re-frame/dispatch [::events/http-post])}]
       ;[:button.green
       ; {:on-click #(swap! state inc)}
       ; (str txt " " @state)]
       [http-info]
       [success-field]
       ])))

(defn ^:export run []
  (let [app-node (js/document.getElementById "app")]
    (re-frame/dispatch-sync [::events/initialize])
    (rdom/render [ui/main-ui] app-node)))


