goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28457){
var map__28458 = p__28457;
var map__28458__$1 = cljs.core.__destructure_map(map__28458);
var runtime = map__28458__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28458__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_28649 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_28649)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__28464 = runtime;
var G__28465 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_28649);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__28464,G__28465) : shadow.remote.runtime.shared.process.call(null,G__28464,G__28465));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28466,res){
var map__28467 = p__28466;
var map__28467__$1 = cljs.core.__destructure_map(map__28467);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28467__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28467__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28468 = res;
var G__28468__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28468,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28468);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28468__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28468__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28475 = arguments.length;
switch (G__28475) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28484,msg,handlers,timeout_after_ms){
var map__28488 = p__28484;
var map__28488__$1 = cljs.core.__destructure_map(map__28488);
var runtime = map__28488__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28488__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28664 = arguments.length;
var i__5770__auto___28665 = (0);
while(true){
if((i__5770__auto___28665 < len__5769__auto___28664)){
args__5775__auto__.push((arguments[i__5770__auto___28665]));

var G__28666 = (i__5770__auto___28665 + (1));
i__5770__auto___28665 = G__28666;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28505,ev,args){
var map__28506 = p__28505;
var map__28506__$1 = cljs.core.__destructure_map(map__28506);
var runtime = map__28506__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28506__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28509 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28512 = null;
var count__28513 = (0);
var i__28514 = (0);
while(true){
if((i__28514 < count__28513)){
var ext = chunk__28512.cljs$core$IIndexed$_nth$arity$2(null,i__28514);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28671 = seq__28509;
var G__28672 = chunk__28512;
var G__28673 = count__28513;
var G__28674 = (i__28514 + (1));
seq__28509 = G__28671;
chunk__28512 = G__28672;
count__28513 = G__28673;
i__28514 = G__28674;
continue;
} else {
var G__28676 = seq__28509;
var G__28677 = chunk__28512;
var G__28678 = count__28513;
var G__28679 = (i__28514 + (1));
seq__28509 = G__28676;
chunk__28512 = G__28677;
count__28513 = G__28678;
i__28514 = G__28679;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28509);
if(temp__5804__auto__){
var seq__28509__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28509__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28509__$1);
var G__28681 = cljs.core.chunk_rest(seq__28509__$1);
var G__28682 = c__5568__auto__;
var G__28683 = cljs.core.count(c__5568__auto__);
var G__28684 = (0);
seq__28509 = G__28681;
chunk__28512 = G__28682;
count__28513 = G__28683;
i__28514 = G__28684;
continue;
} else {
var ext = cljs.core.first(seq__28509__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28686 = cljs.core.next(seq__28509__$1);
var G__28687 = null;
var G__28688 = (0);
var G__28689 = (0);
seq__28509 = G__28686;
chunk__28512 = G__28687;
count__28513 = G__28688;
i__28514 = G__28689;
continue;
} else {
var G__28690 = cljs.core.next(seq__28509__$1);
var G__28691 = null;
var G__28692 = (0);
var G__28693 = (0);
seq__28509 = G__28690;
chunk__28512 = G__28691;
count__28513 = G__28692;
i__28514 = G__28693;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28496){
var G__28497 = cljs.core.first(seq28496);
var seq28496__$1 = cljs.core.next(seq28496);
var G__28498 = cljs.core.first(seq28496__$1);
var seq28496__$2 = cljs.core.next(seq28496__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28497,G__28498,seq28496__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28538,p__28539){
var map__28540 = p__28538;
var map__28540__$1 = cljs.core.__destructure_map(map__28540);
var runtime = map__28540__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28540__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28541 = p__28539;
var map__28541__$1 = cljs.core.__destructure_map(map__28541);
var msg = map__28541__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28541__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__28542 = cljs.core.deref(state_ref);
var map__28542__$1 = cljs.core.__destructure_map(map__28542);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28544,msg){
var map__28546 = p__28544;
var map__28546__$1 = cljs.core.__destructure_map(map__28546);
var runtime = map__28546__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28546__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28552,key,p__28553){
var map__28554 = p__28552;
var map__28554__$1 = cljs.core.__destructure_map(map__28554);
var state = map__28554__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28554__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28555 = p__28553;
var map__28555__$1 = cljs.core.__destructure_map(map__28555);
var spec = map__28555__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28555__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__28560,key,spec){
var map__28562 = p__28560;
var map__28562__$1 = cljs.core.__destructure_map(map__28562);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28562__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__28563_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__28563_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__28564_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__28564_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__28565_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__28565_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__28566_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__28566_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__28567_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__28567_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__28571,key){
var map__28573 = p__28571;
var map__28573__$1 = cljs.core.__destructure_map(map__28573);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28573__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__28583,msg){
var map__28584 = p__28583;
var map__28584__$1 = cljs.core.__destructure_map(map__28584);
var runtime = map__28584__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28584__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__28595,p__28596){
var map__28600 = p__28595;
var map__28600__$1 = cljs.core.__destructure_map(map__28600);
var runtime = map__28600__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28600__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28601 = p__28596;
var map__28601__$1 = cljs.core.__destructure_map(map__28601);
var msg = map__28601__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28601__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28601__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__28604 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28606 = null;
var count__28607 = (0);
var i__28608 = (0);
while(true){
if((i__28608 < count__28607)){
var map__28617 = chunk__28606.cljs$core$IIndexed$_nth$arity$2(null,i__28608);
var map__28617__$1 = cljs.core.__destructure_map(map__28617);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28617__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__28771 = seq__28604;
var G__28772 = chunk__28606;
var G__28773 = count__28607;
var G__28774 = (i__28608 + (1));
seq__28604 = G__28771;
chunk__28606 = G__28772;
count__28607 = G__28773;
i__28608 = G__28774;
continue;
} else {
var G__28777 = seq__28604;
var G__28778 = chunk__28606;
var G__28779 = count__28607;
var G__28780 = (i__28608 + (1));
seq__28604 = G__28777;
chunk__28606 = G__28778;
count__28607 = G__28779;
i__28608 = G__28780;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28604);
if(temp__5804__auto__){
var seq__28604__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28604__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28604__$1);
var G__28790 = cljs.core.chunk_rest(seq__28604__$1);
var G__28791 = c__5568__auto__;
var G__28792 = cljs.core.count(c__5568__auto__);
var G__28793 = (0);
seq__28604 = G__28790;
chunk__28606 = G__28791;
count__28607 = G__28792;
i__28608 = G__28793;
continue;
} else {
var map__28624 = cljs.core.first(seq__28604__$1);
var map__28624__$1 = cljs.core.__destructure_map(map__28624);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28624__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__28795 = cljs.core.next(seq__28604__$1);
var G__28796 = null;
var G__28797 = (0);
var G__28798 = (0);
seq__28604 = G__28795;
chunk__28606 = G__28796;
count__28607 = G__28797;
i__28608 = G__28798;
continue;
} else {
var G__28799 = cljs.core.next(seq__28604__$1);
var G__28800 = null;
var G__28801 = (0);
var G__28802 = (0);
seq__28604 = G__28799;
chunk__28606 = G__28800;
count__28607 = G__28801;
i__28608 = G__28802;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
