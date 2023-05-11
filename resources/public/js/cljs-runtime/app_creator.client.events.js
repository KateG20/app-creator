goog.provide('app_creator.client.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","initialize","app-creator.client.events/initialize",777377475),(function (_,___$1){
var stored_data = window.localStorage.getItem(new cljs.core.Keyword(null,"all-data","all-data",649969801));
var empty_data = app_creator.client.init.init_db;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stored_data], 0));

if(cljs.core.truth_(stored_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(empty_data,new cljs.core.Keyword(null,"data","data",-232669377),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(stored_data));
} else {
return empty_data;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","clear-data","app-creator.client.events/clear-data",408714815),(function (p__55937,_){
var map__55938 = p__55937;
var map__55938__$1 = cljs.core.__destructure_map(map__55938);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55938__$1,new cljs.core.Keyword(null,"db","db",993250759));
var db_with_empty_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_creator.client.init.init_db,new cljs.core.Keyword(null,"data","data",-232669377)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db_with_empty_data,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),db_with_empty_data], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),(function (new_db){
return window.localStorage.setItem(new cljs.core.Keyword(null,"all-data","all-data",649969801),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_db)], 0)));
}));
app_creator.client.events.input_update_handler = (function app_creator$client$events$input_update_handler(is_valid_func,place){
return (function (p__55939,p__55940){
var map__55941 = p__55939;
var map__55941__$1 = cljs.core.__destructure_map(map__55941);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55941__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55942 = p__55940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55942,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55942,(1),null);
var is_valid = (!(((is_valid_func.cljs$core$IFn$_invoke$arity$1 ? is_valid_func.cljs$core$IFn$_invoke$arity$1(new_value) : is_valid_func.call(null,new_value)) == null)));
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
});
});
app_creator.client.events.radio_check_handler = (function app_creator$client$events$radio_check_handler(var_args){
var G__55946 = arguments.length;
switch (G__55946) {
case 1:
return app_creator.client.events.radio_check_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app_creator.client.events.radio_check_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app_creator.client.events.radio_check_handler.cljs$core$IFn$_invoke$arity$1 = (function (place){
return (function (p__55947,p__55948){
var map__55949 = p__55947;
var map__55949__$1 = cljs.core.__destructure_map(map__55949);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55949__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55950 = p__55948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55950,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55950,(1),null);
var updated_db = cljs.core.assoc_in(db,place,new_value);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
});
}));

(app_creator.client.events.radio_check_handler.cljs$core$IFn$_invoke$arity$2 = (function (place,opts_QMARK_){
return (function (p__55953,p__55954){
var map__55955 = p__55953;
var map__55955__$1 = cljs.core.__destructure_map(map__55955);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55955__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55956 = p__55954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55956,(0),null);
var opt_keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55956,(1),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55956,(2),null);
var updated_db = cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,opt_keyword),new_value);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
});
}));

(app_creator.client.events.radio_check_handler.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","success-post-result","app-creator.client.events/success-post-result",-1476860468),(function (p__55959,p__55960){
var map__55961 = p__55959;
var map__55961__$1 = cljs.core.__destructure_map(map__55961);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55962 = p__55960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55962,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55962,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-text","log-text",699493217),["Finished! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join('')], 0))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","failure-post-result","app-creator.client.events/failure-post-result",-752548440),(function (p__55965,p__55966){
var map__55967 = p__55965;
var map__55967__$1 = cljs.core.__destructure_map(map__55967);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55967__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55968 = p__55966;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55968,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55968,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-text","log-text",699493217),["Something went wrong! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug-message","debug-message",-502855302).cljs$core$IFn$_invoke$arity$1(details)),". Server may be down. \n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(details)].join('')], 0))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","http-post","app-creator.client.events/http-post",-1564245552),(function (p__55971,p__55972){
var map__55973 = p__55971;
var map__55973__$1 = cljs.core.__destructure_map(map__55973);
var cofx = map__55973__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55973__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55974 = p__55972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55974,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55974,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:80/api/v1/create",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-creator.client.events","success-post-result","app-creator.client.events/success-post-result",-1476860468)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-creator.client.events","failure-post-result","app-creator.client.events/failure-post-result",-752548440)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","create-projects","app-creator.client.events/create-projects",1049233514),(function (p__55977,_){
var map__55978 = p__55977;
var map__55978__$1 = cljs.core.__destructure_map(map__55978);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55978__$1,new cljs.core.Keyword(null,"db","db",993250759));
var data_valid = app_creator.client.ui.validator.whole_map_valid_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(db));
var out_dir_path = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"out-path","out-path",1731331778),new cljs.core.Keyword(null,"value","value",305978217)], null));
var out_dir_exists = app_creator.client.ui.validator.directory_exists_QMARK_(out_dir_path);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([out_dir_path], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"log-text","log-text",699493217),out_dir_exists)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","set-loading","app-creator.client.events/set-loading",76419253),(function (db,p__55979){
var vec__55980 = p__55979;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55980,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55980,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),loading_QMARK_);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","out-path-text-change","app-creator.client.events/out-path-text-change",-990558671),app_creator.client.events.input_update_handler(app_creator.client.ui.validator.valid_dir_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"out-path","out-path",1731331778)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","change-db-checked","app-creator.client.events/change-db-checked",-979033729),app_creator.client.events.radio_check_handler.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"type","type",1174270348)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","postgres-db-name-change","app-creator.client.events/postgres-db-name-change",526740713),app_creator.client.events.input_update_handler(app_creator.client.ui.validator.valid_host_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"db-name","db-name",1157928745)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","postgres-host-change","app-creator.client.events/postgres-host-change",-1350253280),app_creator.client.events.input_update_handler(app_creator.client.ui.validator.valid_host_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"host","host",-1558485167)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","postgres-username-change","app-creator.client.events/postgres-username-change",1157538617),app_creator.client.events.input_update_handler(app_creator.client.ui.validator.valid_host_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"username","username",1605666410)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","postgres-password-change","app-creator.client.events/postgres-password-change",-1738060483),app_creator.client.events.input_update_handler(app_creator.client.ui.validator.valid_host_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"password","password",417022471)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","postgres-table-name-change","app-creator.client.events/postgres-table-name-change",-1111162371),(function (p__55983,p__55984){
var map__55985 = p__55983;
var map__55985__$1 = cljs.core.__destructure_map(map__55985);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55985__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55986 = p__55984;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55986,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55986,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55986,(2),null);
var is_valid = (!((app_creator.client.ui.validator.valid_host_QMARK_(new_value) == null)));
var place = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224),box,new cljs.core.Keyword(null,"name","name",1843675177)], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","postgres-column-name-change","app-creator.client.events/postgres-column-name-change",-1559845311),(function (p__55989,p__55990){
var map__55991 = p__55989;
var map__55991__$1 = cljs.core.__destructure_map(map__55991);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55991__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55992 = p__55990;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55992,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55992,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55992,(2),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55992,(3),null);
var is_valid = (!((app_creator.client.ui.validator.valid_host_QMARK_(new_value) == null)));
var place = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224),box,new cljs.core.Keyword(null,"columns","columns",1998437288),row,new cljs.core.Keyword(null,"name","name",1843675177)], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","postgres-column-opts-change","app-creator.client.events/postgres-column-opts-change",-769562088),(function (p__55995,p__55996){
var map__55997 = p__55995;
var map__55997__$1 = cljs.core.__destructure_map(map__55997);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55997__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55998 = p__55996;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55998,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55998,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55998,(2),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55998,(3),null);
var is_valid = (!((app_creator.client.ui.validator.valid_host_QMARK_(new_value) == null)));
var place = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224),box,new cljs.core.Keyword(null,"columns","columns",1998437288),row,new cljs.core.Keyword(null,"opts","opts",155075701)], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","add-table-item","app-creator.client.events/add-table-item",151484519),(function (p__56001,p__56002){
var map__56003 = p__56001;
var map__56003__$1 = cljs.core.__destructure_map(map__56003);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56003__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56004 = p__56002;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56004,(0),null);
var new_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56004,(1),null);
var updated_db = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"table-vec","table-vec",2127015317)], null),cljs.core.conj,new_item),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224),new_item], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"columns","columns",1998437288),null], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["added. new: \n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"table-vec","table-vec",2127015317)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"column-vec","column-vec",1294610291)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224)], null)))].join('')], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","add-table-column-item","app-creator.client.events/add-table-column-item",-949706654),(function (p__56007,p__56008){
var map__56009 = p__56007;
var map__56009__$1 = cljs.core.__destructure_map(map__56009);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56009__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56010 = p__56008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56010,(0),null);
var new_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56010,(1),null);
var updated_db = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"column-vec","column-vec",1294610291)], null),cljs.core.conj,new_item),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.first(new_item),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.second(new_item)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null)], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["added. new: \n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"table-vec","table-vec",2127015317)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"column-vec","column-vec",1294610291)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224)], null)))].join('')], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
app_creator.client.events.remove_elem = (function app_creator$client$events$remove_elem(coll,pred){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,coll));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","minus-table-item","app-creator.client.events/minus-table-item",-960836096),(function (p__56015,p__56016){
var map__56017 = p__56015;
var map__56017__$1 = cljs.core.__destructure_map(map__56017);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56017__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56018 = p__56016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56018,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56018,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["old: \n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"table-vec","table-vec",2127015317)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"column-vec","column-vec",1294610291)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224)], null)))].join('')], 0));

var updated_db = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"table-vec","table-vec",2127015317)], null),app_creator.client.events.remove_elem,(function (p1__56013_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56013_SHARP_,id);
})),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"column-vec","column-vec",1294610291)], null),app_creator.client.events.remove_elem,(function (p1__56014_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__56014_SHARP_),id);
})),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.dissoc,id);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["removed. new: \n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"table-vec","table-vec",2127015317)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"column-vec","column-vec",1294610291)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224)], null)))].join('')], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","minus-table-column-item","app-creator.client.events/minus-table-column-item",-478388280),(function (p__56022,p__56023){
var map__56024 = p__56022;
var map__56024__$1 = cljs.core.__destructure_map(map__56024);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56024__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56025 = p__56023;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56025,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56025,(1),null);
var col_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56025,(2),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["old: \n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"table-vec","table-vec",2127015317)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"column-vec","column-vec",1294610291)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224)], null)))].join('')], 0));

var updated_db = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"column-vec","column-vec",1294610291)], null),app_creator.client.events.remove_elem,(function (p1__56021_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__56021_SHARP_),t_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__56021_SHARP_),col_id)));
})),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224),t_id,new cljs.core.Keyword(null,"columns","columns",1998437288)], null),cljs.core.dissoc,col_id);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["removed. new: \n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"table-vec","table-vec",2127015317)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"column-vec","column-vec",1294610291)], null))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(updated_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"tables","tables",1334623052),new cljs.core.Keyword(null,"content","content",15833224)], null)))].join('')], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","change-server-checked","app-creator.client.events/change-server-checked",1711792577),app_creator.client.events.radio_check_handler.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"type","type",1174270348)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","change-spring-opt-radio","app-creator.client.events/change-spring-opt-radio",-1444615473),app_creator.client.events.radio_check_handler.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"project","project",1124394579)], null),true));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","spring-group-change","app-creator.client.events/spring-group-change",141597419),app_creator.client.events.input_update_handler(app_creator.client.ui.validator.valid_host_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"group","group",582596132)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","spring-artifact-change","app-creator.client.events/spring-artifact-change",41203770),app_creator.client.events.input_update_handler(app_creator.client.ui.validator.valid_host_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"artifact","artifact",610074681)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","spring-proj-name-change","app-creator.client.events/spring-proj-name-change",1395536569),app_creator.client.events.input_update_handler(app_creator.client.ui.validator.valid_host_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"proj-name","proj-name",216171800)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","spring-description-change","app-creator.client.events/spring-description-change",607398178),app_creator.client.events.input_update_handler(app_creator.client.ui.validator.valid_host_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"description","description",-1428560544)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","spring-db-props-change","app-creator.client.events/spring-db-props-change",1713690636),(function (p__56028,p__56029){
var map__56030 = p__56028;
var map__56030__$1 = cljs.core.__destructure_map(map__56030);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56030__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56031 = p__56029;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56031,(0),null);
var prop_keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56031,(1),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56031,(2),null);
var is_valid = (!(((function (){var G__56034 = prop_keyword;
var G__56034__$1 = (((G__56034 instanceof cljs.core.Keyword))?G__56034.fqn:null);
switch (G__56034__$1) {
case "type":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "username":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "password":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "sql-host":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "sql-port":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "db-name":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56034__$1)].join('')));

}
})() == null)));
var place = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"db","db",993250759),prop_keyword], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","spring-controller-name-change","app-creator.client.events/spring-controller-name-change",-1315536721),(function (p__56035,p__56036){
var map__56037 = p__56035;
var map__56037__$1 = cljs.core.__destructure_map(map__56037);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56037__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56038 = p__56036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56038,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56038,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56038,(2),null);
var is_valid = (!((app_creator.client.ui.validator.valid_host_QMARK_(new_value) == null)));
var place = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"content","content",15833224),box,new cljs.core.Keyword(null,"name","name",1843675177)], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","spring-method-name-change","app-creator.client.events/spring-method-name-change",1999920662),(function (p__56041,p__56042){
var map__56043 = p__56041;
var map__56043__$1 = cljs.core.__destructure_map(map__56043);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56043__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56044 = p__56042;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(2),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(3),null);
var is_valid = (!((app_creator.client.ui.validator.valid_host_QMARK_(new_value) == null)));
var place = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"content","content",15833224),box,new cljs.core.Keyword(null,"methods","methods",453930866),row,new cljs.core.Keyword(null,"name","name",1843675177)], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","spring-method-url-change","app-creator.client.events/spring-method-url-change",575124177),(function (p__56047,p__56048){
var map__56049 = p__56047;
var map__56049__$1 = cljs.core.__destructure_map(map__56049);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56049__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56050 = p__56048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56050,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56050,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56050,(2),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56050,(3),null);
var is_valid = (!((app_creator.client.ui.validator.valid_host_QMARK_(new_value) == null)));
var place = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"content","content",15833224),box,new cljs.core.Keyword(null,"methods","methods",453930866),row,new cljs.core.Keyword(null,"url","url",276297046)], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","spring-method-type-change","app-creator.client.events/spring-method-type-change",695217131),(function (p__56053,p__56054){
var map__56055 = p__56053;
var map__56055__$1 = cljs.core.__destructure_map(map__56055);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56055__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56056 = p__56054;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56056,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56056,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56056,(2),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56056,(3),null);
var is_valid = (!((app_creator.client.ui.validator.valid_host_QMARK_(new_value) == null)));
var place = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"content","content",15833224),box,new cljs.core.Keyword(null,"methods","methods",453930866),row,new cljs.core.Keyword(null,"type","type",1174270348)], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","add-controller-item","app-creator.client.events/add-controller-item",-8779314),(function (p__56059,p__56060){
var map__56061 = p__56059;
var map__56061__$1 = cljs.core.__destructure_map(map__56061);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56061__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56062 = p__56060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56062,(0),null);
var new_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56062,(1),null);
var updated_db = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"controller-vec","controller-vec",592982682)], null),cljs.core.conj,new_item),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"content","content",15833224),new_item], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"methods","methods",453930866),null], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","add-controller-method-item","app-creator.client.events/add-controller-method-item",-423479769),(function (p__56065,p__56066){
var map__56067 = p__56065;
var map__56067__$1 = cljs.core.__destructure_map(map__56067);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56067__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56068 = p__56066;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56068,(0),null);
var new_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56068,(1),null);
var updated_db = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"method-vec","method-vec",-1384288504)], null),cljs.core.conj,new_item),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.first(new_item),new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.second(new_item)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","change-client-checked","app-creator.client.events/change-client-checked",-1629356854),app_creator.client.events.radio_check_handler.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"type","type",1174270348)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","android-radio-opts-change","app-creator.client.events/android-radio-opts-change",1610978995),app_creator.client.events.radio_check_handler.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"android","android",-2084094573)], null),true));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","android-props-change","app-creator.client.events/android-props-change",966002207),(function (p__56071,p__56072){
var map__56073 = p__56071;
var map__56073__$1 = cljs.core.__destructure_map(map__56073);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56073__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56074 = p__56072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56074,(0),null);
var prop_keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56074,(1),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56074,(2),null);
var is_valid = (!(((function (){var G__56077 = prop_keyword;
var G__56077__$1 = (((G__56077 instanceof cljs.core.Keyword))?G__56077.fqn:null);
switch (G__56077__$1) {
case "proj-name":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "package-name":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "server-host":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "server-port":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56077__$1)].join('')));

}
})() == null)));
var place = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"android","android",-2084094573),prop_keyword], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","android-endpoint-url-change","app-creator.client.events/android-endpoint-url-change",850786185),(function (p__56078,p__56079){
var map__56080 = p__56078;
var map__56080__$1 = cljs.core.__destructure_map(map__56080);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56080__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56081 = p__56079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56081,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56081,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56081,(2),null);
var is_valid = (!((app_creator.client.ui.validator.valid_url_QMARK_(new_value) == null)));
var place = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.Keyword(null,"endpoints","endpoints",274088209),new cljs.core.Keyword(null,"content","content",15833224),box,new cljs.core.Keyword(null,"url","url",276297046)], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","android-endpoint-method-change","app-creator.client.events/android-endpoint-method-change",-1825648621),(function (p__56084,p__56085){
var map__56086 = p__56084;
var map__56086__$1 = cljs.core.__destructure_map(map__56086);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56086__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56087 = p__56085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56087,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56087,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56087,(2),null);
var is_valid = (!((app_creator.client.ui.validator.valid_java_name_QMARK_(new_value) == null)));
var place = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.Keyword(null,"endpoints","endpoints",274088209),new cljs.core.Keyword(null,"content","content",15833224),box,new cljs.core.Keyword(null,"name","name",1843675177)], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","android-endpoint-request-change","app-creator.client.events/android-endpoint-request-change",1542505135),(function (p__56090,p__56091){
var map__56092 = p__56090;
var map__56092__$1 = cljs.core.__destructure_map(map__56092);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56092__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56093 = p__56091;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56093,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56093,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56093,(2),null);
var is_valid = (!((app_creator.client.ui.validator.valid_req_type_QMARK_(new_value) == null)));
var place = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.Keyword(null,"endpoints","endpoints",274088209),new cljs.core.Keyword(null,"content","content",15833224),box,new cljs.core.Keyword(null,"request","request",1772954723)], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","android-endpoint-body-change","app-creator.client.events/android-endpoint-body-change",-705325887),(function (p__56096,p__56097){
var map__56098 = p__56096;
var map__56098__$1 = cljs.core.__destructure_map(map__56098);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56098__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56099 = p__56097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56099,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56099,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56099,(2),null);
var is_valid = (!((app_creator.client.ui.validator.valid_java_name_QMARK_(new_value) == null)));
var place = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.Keyword(null,"endpoints","endpoints",274088209),new cljs.core.Keyword(null,"content","content",15833224),box,new cljs.core.Keyword(null,"body","body",-2049205669)], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","add-client-endpoint-item","app-creator.client.events/add-client-endpoint-item",1205826467),(function (p__56102,p__56103){
var map__56104 = p__56102;
var map__56104__$1 = cljs.core.__destructure_map(map__56104);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56104__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56105 = p__56103;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56105,(0),null);
var new_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56105,(1),null);
var updated_db = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.Keyword(null,"endpoints","endpoints",274088209),new cljs.core.Keyword(null,"endpoints-vec","endpoints-vec",-817796454)], null),cljs.core.conj,new_item),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"android","android",-2084094573),new cljs.core.Keyword(null,"endpoints","endpoints",274088209),new cljs.core.Keyword(null,"content","content",15833224),new_item], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","change-deploy-checked","app-creator.client.events/change-deploy-checked",-300340289),app_creator.client.events.radio_check_handler.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"containerization","containerization",31033440),new cljs.core.Keyword(null,"type","type",1174270348)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","docker-container-opts-change","app-creator.client.events/docker-container-opts-change",-527700631),(function (p__56108,p__56109){
var map__56110 = p__56108;
var map__56110__$1 = cljs.core.__destructure_map(map__56110);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56110__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56111 = p__56109;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56111,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56111,(1),null);
var box = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56111,(2),null);
var type_keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56111,(3),null);
var prop_keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56111,(4),null);
var is_valid = (!(((function (){var G__56114 = prop_keyword;
var G__56114__$1 = (((G__56114 instanceof cljs.core.Keyword))?G__56114.fqn:null);
switch (G__56114__$1) {
case "image-name":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "container-name":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "dir-name":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "backend-container-name":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "jar-path":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "port":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
case "password":
return app_creator.client.ui.validator.valid_host_QMARK_(new_value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56114__$1)].join('')));

}
})() == null)));
var place = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"containerization","containerization",31033440),new cljs.core.Keyword(null,"docker","docker",743480170),type_keyword,new cljs.core.Keyword(null,"content","content",15833224),box,prop_keyword], null);
var updated_db = cljs.core.assoc_in(cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"value","value",305978217)),new_value),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(place,new cljs.core.Keyword(null,"valid","valid",155614240)),is_valid);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","docker-network-change","app-creator.client.events/docker-network-change",1628854559),app_creator.client.events.input_update_handler(app_creator.client.ui.validator.valid_host_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"containerization","containerization",31033440),new cljs.core.Keyword(null,"docker","docker",743480170),new cljs.core.Keyword(null,"network","network",2050004697)], null)));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","add-jar-cont-item","app-creator.client.events/add-jar-cont-item",-13183929),(function (p__56115,p__56116){
var map__56117 = p__56115;
var map__56117__$1 = cljs.core.__destructure_map(map__56117);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56117__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56118 = p__56116;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56118,(0),null);
var new_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56118,(1),null);
var updated_db = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"containerization","containerization",31033440),new cljs.core.Keyword(null,"docker","docker",743480170),new cljs.core.Keyword(null,"jars","jars",1942248052),new cljs.core.Keyword(null,"cont-vec","cont-vec",-1037884859)], null),cljs.core.conj,new_item),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"containerization","containerization",31033440),new cljs.core.Keyword(null,"docker","docker",743480170),new cljs.core.Keyword(null,"jars","jars",1942248052),new cljs.core.Keyword(null,"content","content",15833224),new_item], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"image-name","image-name",901949725),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"container-name","container-name",357968146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"dir-name","dir-name",1571676828),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"jar-path","jar-path",-48225445),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","add-nginx-cont-item","app-creator.client.events/add-nginx-cont-item",808040495),(function (p__56121,p__56122){
var map__56123 = p__56121;
var map__56123__$1 = cljs.core.__destructure_map(map__56123);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56123__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56124 = p__56122;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56124,(0),null);
var new_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56124,(1),null);
var updated_db = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"containerization","containerization",31033440),new cljs.core.Keyword(null,"docker","docker",743480170),new cljs.core.Keyword(null,"nginx","nginx",-289958416),new cljs.core.Keyword(null,"cont-vec","cont-vec",-1037884859)], null),cljs.core.conj,new_item),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"containerization","containerization",31033440),new cljs.core.Keyword(null,"docker","docker",743480170),new cljs.core.Keyword(null,"nginx","nginx",-289958416),new cljs.core.Keyword(null,"content","content",15833224),new_item], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"image-name","image-name",901949725),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"container-name","container-name",357968146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"dir-name","dir-name",1571676828),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"backend-container-name","backend-container-name",1124555431),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-creator.client.events","add-postgres-cont-item","app-creator.client.events/add-postgres-cont-item",-1505895026),(function (p__56127,p__56128){
var map__56129 = p__56127;
var map__56129__$1 = cljs.core.__destructure_map(map__56129);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56129__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__56130 = p__56128;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56130,(0),null);
var new_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56130,(1),null);
var updated_db = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"containerization","containerization",31033440),new cljs.core.Keyword(null,"docker","docker",743480170),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"cont-vec","cont-vec",-1037884859)], null),cljs.core.conj,new_item),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"containerization","containerization",31033440),new cljs.core.Keyword(null,"docker","docker",743480170),new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"content","content",15833224),new_item], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container-name","container-name",357968146),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"valid","valid",155614240),true], null)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),updated_db,new cljs.core.Keyword(null,"update-storage","update-storage",-98456194),updated_db], null);
}));

//# sourceMappingURL=app_creator.client.events.js.map
