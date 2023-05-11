goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__36765){
var map__36766 = p__36765;
var map__36766__$1 = cljs.core.__destructure_map(map__36766);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__36768_36796 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__36769_36797 = null;
var count__36770_36798 = (0);
var i__36771_36799 = (0);
while(true){
if((i__36771_36799 < count__36770_36798)){
var vec__36783_36800 = chunk__36769_36797.cljs$core$IIndexed$_nth$arity$2(null,i__36771_36799);
var k_36801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36783_36800,(0),null);
var cb_36802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36783_36800,(1),null);
try{var G__36787_36803 = cljs.core.deref(re_frame.trace.traces);
(cb_36802.cljs$core$IFn$_invoke$arity$1 ? cb_36802.cljs$core$IFn$_invoke$arity$1(G__36787_36803) : cb_36802.call(null,G__36787_36803));
}catch (e36786){var e_36804 = e36786;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36801,"while storing",cljs.core.deref(re_frame.trace.traces),e_36804], 0));
}

var G__36805 = seq__36768_36796;
var G__36806 = chunk__36769_36797;
var G__36807 = count__36770_36798;
var G__36808 = (i__36771_36799 + (1));
seq__36768_36796 = G__36805;
chunk__36769_36797 = G__36806;
count__36770_36798 = G__36807;
i__36771_36799 = G__36808;
continue;
} else {
var temp__5804__auto___36809 = cljs.core.seq(seq__36768_36796);
if(temp__5804__auto___36809){
var seq__36768_36810__$1 = temp__5804__auto___36809;
if(cljs.core.chunked_seq_QMARK_(seq__36768_36810__$1)){
var c__5568__auto___36811 = cljs.core.chunk_first(seq__36768_36810__$1);
var G__36812 = cljs.core.chunk_rest(seq__36768_36810__$1);
var G__36813 = c__5568__auto___36811;
var G__36814 = cljs.core.count(c__5568__auto___36811);
var G__36815 = (0);
seq__36768_36796 = G__36812;
chunk__36769_36797 = G__36813;
count__36770_36798 = G__36814;
i__36771_36799 = G__36815;
continue;
} else {
var vec__36788_36816 = cljs.core.first(seq__36768_36810__$1);
var k_36817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36788_36816,(0),null);
var cb_36818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36788_36816,(1),null);
try{var G__36792_36819 = cljs.core.deref(re_frame.trace.traces);
(cb_36818.cljs$core$IFn$_invoke$arity$1 ? cb_36818.cljs$core$IFn$_invoke$arity$1(G__36792_36819) : cb_36818.call(null,G__36792_36819));
}catch (e36791){var e_36820 = e36791;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_36817,"while storing",cljs.core.deref(re_frame.trace.traces),e_36820], 0));
}

var G__36821 = cljs.core.next(seq__36768_36810__$1);
var G__36822 = null;
var G__36823 = (0);
var G__36824 = (0);
seq__36768_36796 = G__36821;
chunk__36769_36797 = G__36822;
count__36770_36798 = G__36823;
i__36771_36799 = G__36824;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
