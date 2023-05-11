(ns app-creator.client.core
  (:require [reagent.dom :as rdom]
            [app-creator.client.events :as events]
            [re-frame.core :as re-frame]
            [app-creator.client.ui.main-ui :as ui]))

(defn ^:export run []
  (let [app-node (js/document.getElementById "app")]
    (re-frame/dispatch-sync [::events/initialize])
    (rdom/render [ui/main-ui] app-node)))