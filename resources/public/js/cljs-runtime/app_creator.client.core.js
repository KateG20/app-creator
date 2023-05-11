goog.provide('app_creator.client.core');
app_creator.client.core.run = (function app_creator$client$core$run(){
var app_node = document.getElementById("app");
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-creator.client.events","initialize","app-creator.client.events/initialize",777377475)], null));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_creator.client.ui.main_ui.main_ui], null),app_node);
});
goog.exportSymbol('app_creator.client.core.run', app_creator.client.core.run);

//# sourceMappingURL=app_creator.client.core.js.map
