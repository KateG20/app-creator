goog.provide('app_creator.client.ui.validator');
var module$node_modules$fs_extra$lib$index=shadow.js.require("module$node_modules$fs_extra$lib$index", {});
app_creator.client.ui.validator.ip_regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
app_creator.client.ui.validator.url_regex = cljs.core.re_pattern("^\\/([!#$&\\-;=?-\\[\\]_a-z~]|%[0-9a-fA-F]{2}|\\/?)+$");
app_creator.client.ui.validator.java_name_regex = /^[a-zA-Z0-9_]+$/;
app_creator.client.ui.validator.out_path_regex = /^([^\.])+$/;
app_creator.client.ui.validator.http_methods = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["get","head","post","put","patch","delete","options"], null);
app_creator.client.ui.validator.directory_exists_QMARK_ = (function app_creator$client$ui$validator$directory_exists_QMARK_(path){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["i'm in func!"], 0));
});
app_creator.client.ui.validator.trim_input = (function app_creator$client$ui$validator$trim_input(s){
return clojure.string.trim(s);
});
app_creator.client.ui.validator.empty_or_matches = (function app_creator$client$ui$validator$empty_or_matches(val,regex){
var val__$1 = app_creator.client.ui.validator.trim_input(val);
var or__5045__auto__ = cljs.core.empty_QMARK_(val__$1);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(regex,val__$1);
}
});
app_creator.client.ui.validator.valid_host_QMARK_ = (function app_creator$client$ui$validator$valid_host_QMARK_(host){
var or__5045__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("localhost",host);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return app_creator.client.ui.validator.empty_or_matches(host,app_creator.client.ui.validator.ip_regex);
}
});
app_creator.client.ui.validator.valid_url_QMARK_ = (function app_creator$client$ui$validator$valid_url_QMARK_(url){
return app_creator.client.ui.validator.empty_or_matches(url,app_creator.client.ui.validator.url_regex);
});
app_creator.client.ui.validator.valid_java_name_QMARK_ = (function app_creator$client$ui$validator$valid_java_name_QMARK_(name){
return app_creator.client.ui.validator.empty_or_matches(name,app_creator.client.ui.validator.java_name_regex);
});
app_creator.client.ui.validator.valid_dir_QMARK_ = (function app_creator$client$ui$validator$valid_dir_QMARK_(path){
return app_creator.client.ui.validator.empty_or_matches(path,app_creator.client.ui.validator.out_path_regex);
});
app_creator.client.ui.validator.valid_req_type_QMARK_ = (function app_creator$client$ui$validator$valid_req_type_QMARK_(req_type){
return cljs.core.some((function (p1__55936_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(app_creator.client.ui.validator.trim_input(req_type)),p1__55936_SHARP_);
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(app_creator.client.ui.validator.http_methods,""));
});
app_creator.client.ui.validator.find_all_valid = (function app_creator$client$ui$validator$find_all_valid(m){
return cljs.core.reduce_kv((function (prev,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"valid","valid",155614240))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev,v);
} else {
if(cljs.core.map_QMARK_(v)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(prev,(app_creator.client.ui.validator.find_all_valid.cljs$core$IFn$_invoke$arity$1 ? app_creator.client.ui.validator.find_all_valid.cljs$core$IFn$_invoke$arity$1(v) : app_creator.client.ui.validator.find_all_valid.call(null,v))));
} else {
return prev;
}
}
}),cljs.core.PersistentVector.EMPTY,m);
});
app_creator.client.ui.validator.whole_map_valid_QMARK_ = (function app_creator$client$ui$validator$whole_map_valid_QMARK_(db){
return (cljs.core.some(cljs.core.false_QMARK_,app_creator.client.ui.validator.find_all_valid(db)) == null);
});

//# sourceMappingURL=app_creator.client.ui.validator.js.map
