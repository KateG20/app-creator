goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__34529,p__34530){
var map__34531 = p__34529;
var map__34531__$1 = cljs.core.__destructure_map(map__34531);
var svc = map__34531__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34531__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34531__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34531__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34532 = p__34530;
var map__34532__$1 = cljs.core.__destructure_map(map__34532);
var msg = map__34532__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34532__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34532__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34532__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34532__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__34547,p__34548){
var map__34550 = p__34547;
var map__34550__$1 = cljs.core.__destructure_map(map__34550);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34550__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__34552 = p__34548;
var map__34552__$1 = cljs.core.__destructure_map(map__34552);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34552__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__34561,p__34562){
var map__34564 = p__34561;
var map__34564__$1 = cljs.core.__destructure_map(map__34564);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34564__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34564__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34565 = p__34562;
var map__34565__$1 = cljs.core.__destructure_map(map__34565);
var msg = map__34565__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34565__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__34574,tid){
var map__34575 = p__34574;
var map__34575__$1 = cljs.core.__destructure_map(map__34575);
var svc = map__34575__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34575__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__34605 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__34606 = null;
var count__34607 = (0);
var i__34608 = (0);
while(true){
if((i__34608 < count__34607)){
var vec__34621 = chunk__34606.cljs$core$IIndexed$_nth$arity$2(null,i__34608);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34621,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34621,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34849 = seq__34605;
var G__34850 = chunk__34606;
var G__34851 = count__34607;
var G__34852 = (i__34608 + (1));
seq__34605 = G__34849;
chunk__34606 = G__34850;
count__34607 = G__34851;
i__34608 = G__34852;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34605);
if(temp__5804__auto__){
var seq__34605__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34605__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34605__$1);
var G__34853 = cljs.core.chunk_rest(seq__34605__$1);
var G__34854 = c__5568__auto__;
var G__34855 = cljs.core.count(c__5568__auto__);
var G__34856 = (0);
seq__34605 = G__34853;
chunk__34606 = G__34854;
count__34607 = G__34855;
i__34608 = G__34856;
continue;
} else {
var vec__34630 = cljs.core.first(seq__34605__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34630,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34630,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34857 = cljs.core.next(seq__34605__$1);
var G__34858 = null;
var G__34859 = (0);
var G__34860 = (0);
seq__34605 = G__34857;
chunk__34606 = G__34858;
count__34607 = G__34859;
i__34608 = G__34860;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__34582_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__34582_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__34583_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__34583_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__34584_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__34584_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__34585_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__34585_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__34663){
var map__34664 = p__34663;
var map__34664__$1 = cljs.core.__destructure_map(map__34664);
var svc = map__34664__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34664__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
