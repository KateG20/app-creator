goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__37075 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37076 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37076);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___37189 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___37189)){
var new_db_37190 = temp__5804__auto___37189;
var fexpr__37083_37191 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37083_37191.cljs$core$IFn$_invoke$arity$1 ? fexpr__37083_37191.cljs$core$IFn$_invoke$arity$1(new_db_37190) : fexpr__37083_37191.call(null,new_db_37190));
} else {
}

var seq__37086 = cljs.core.seq(effects_without_db);
var chunk__37087 = null;
var count__37088 = (0);
var i__37089 = (0);
while(true){
if((i__37089 < count__37088)){
var vec__37103 = chunk__37087.cljs$core$IIndexed$_nth$arity$2(null,i__37089);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37103,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37103,(1),null);
var temp__5802__auto___37192 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37192)){
var effect_fn_37193 = temp__5802__auto___37192;
(effect_fn_37193.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37193.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37193.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37194 = seq__37086;
var G__37195 = chunk__37087;
var G__37196 = count__37088;
var G__37197 = (i__37089 + (1));
seq__37086 = G__37194;
chunk__37087 = G__37195;
count__37088 = G__37196;
i__37089 = G__37197;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37086);
if(temp__5804__auto__){
var seq__37086__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37086__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37086__$1);
var G__37198 = cljs.core.chunk_rest(seq__37086__$1);
var G__37199 = c__5568__auto__;
var G__37200 = cljs.core.count(c__5568__auto__);
var G__37201 = (0);
seq__37086 = G__37198;
chunk__37087 = G__37199;
count__37088 = G__37200;
i__37089 = G__37201;
continue;
} else {
var vec__37107 = cljs.core.first(seq__37086__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37107,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37107,(1),null);
var temp__5802__auto___37202 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37202)){
var effect_fn_37203 = temp__5802__auto___37202;
(effect_fn_37203.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37203.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37203.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37206 = cljs.core.next(seq__37086__$1);
var G__37207 = null;
var G__37208 = (0);
var G__37209 = (0);
seq__37086 = G__37206;
chunk__37087 = G__37207;
count__37088 = G__37208;
i__37089 = G__37209;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__36741__auto___37210 = re_frame.interop.now();
var duration__36742__auto___37211 = (end__36741__auto___37210 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36742__auto___37211,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__36741__auto___37210);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37075);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___37212 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___37212)){
var new_db_37213 = temp__5804__auto___37212;
var fexpr__37112_37214 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37112_37214.cljs$core$IFn$_invoke$arity$1 ? fexpr__37112_37214.cljs$core$IFn$_invoke$arity$1(new_db_37213) : fexpr__37112_37214.call(null,new_db_37213));
} else {
}

var seq__37113 = cljs.core.seq(effects_without_db);
var chunk__37114 = null;
var count__37115 = (0);
var i__37116 = (0);
while(true){
if((i__37116 < count__37115)){
var vec__37124 = chunk__37114.cljs$core$IIndexed$_nth$arity$2(null,i__37116);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37124,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37124,(1),null);
var temp__5802__auto___37217 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37217)){
var effect_fn_37218 = temp__5802__auto___37217;
(effect_fn_37218.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37218.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37218.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37220 = seq__37113;
var G__37221 = chunk__37114;
var G__37222 = count__37115;
var G__37223 = (i__37116 + (1));
seq__37113 = G__37220;
chunk__37114 = G__37221;
count__37115 = G__37222;
i__37116 = G__37223;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37113);
if(temp__5804__auto__){
var seq__37113__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37113__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37113__$1);
var G__37224 = cljs.core.chunk_rest(seq__37113__$1);
var G__37225 = c__5568__auto__;
var G__37226 = cljs.core.count(c__5568__auto__);
var G__37227 = (0);
seq__37113 = G__37224;
chunk__37114 = G__37225;
count__37115 = G__37226;
i__37116 = G__37227;
continue;
} else {
var vec__37139 = cljs.core.first(seq__37113__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37139,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37139,(1),null);
var temp__5802__auto___37229 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37229)){
var effect_fn_37230 = temp__5802__auto___37229;
(effect_fn_37230.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37230.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37230.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37231 = cljs.core.next(seq__37113__$1);
var G__37232 = null;
var G__37233 = (0);
var G__37234 = (0);
seq__37113 = G__37231;
chunk__37114 = G__37232;
count__37115 = G__37233;
i__37116 = G__37234;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37146){
var map__37147 = p__37146;
var map__37147__$1 = cljs.core.__destructure_map(map__37147);
var effect = map__37147__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37147__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37147__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__37148 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37149 = null;
var count__37150 = (0);
var i__37151 = (0);
while(true){
if((i__37151 < count__37150)){
var effect = chunk__37149.cljs$core$IIndexed$_nth$arity$2(null,i__37151);
re_frame.fx.dispatch_later(effect);


var G__37236 = seq__37148;
var G__37237 = chunk__37149;
var G__37238 = count__37150;
var G__37239 = (i__37151 + (1));
seq__37148 = G__37236;
chunk__37149 = G__37237;
count__37150 = G__37238;
i__37151 = G__37239;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37148);
if(temp__5804__auto__){
var seq__37148__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37148__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37148__$1);
var G__37242 = cljs.core.chunk_rest(seq__37148__$1);
var G__37243 = c__5568__auto__;
var G__37244 = cljs.core.count(c__5568__auto__);
var G__37245 = (0);
seq__37148 = G__37242;
chunk__37149 = G__37243;
count__37150 = G__37244;
i__37151 = G__37245;
continue;
} else {
var effect = cljs.core.first(seq__37148__$1);
re_frame.fx.dispatch_later(effect);


var G__37247 = cljs.core.next(seq__37148__$1);
var G__37248 = null;
var G__37249 = (0);
var G__37250 = (0);
seq__37148 = G__37247;
chunk__37149 = G__37248;
count__37150 = G__37249;
i__37151 = G__37250;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__37153 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37154 = null;
var count__37155 = (0);
var i__37156 = (0);
while(true){
if((i__37156 < count__37155)){
var vec__37167 = chunk__37154.cljs$core$IIndexed$_nth$arity$2(null,i__37156);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37167,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37167,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___37252 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37252)){
var effect_fn_37253 = temp__5802__auto___37252;
(effect_fn_37253.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37253.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37253.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37254 = seq__37153;
var G__37255 = chunk__37154;
var G__37256 = count__37155;
var G__37257 = (i__37156 + (1));
seq__37153 = G__37254;
chunk__37154 = G__37255;
count__37155 = G__37256;
i__37156 = G__37257;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37153);
if(temp__5804__auto__){
var seq__37153__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37153__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37153__$1);
var G__37258 = cljs.core.chunk_rest(seq__37153__$1);
var G__37259 = c__5568__auto__;
var G__37260 = cljs.core.count(c__5568__auto__);
var G__37261 = (0);
seq__37153 = G__37258;
chunk__37154 = G__37259;
count__37155 = G__37260;
i__37156 = G__37261;
continue;
} else {
var vec__37173 = cljs.core.first(seq__37153__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37173,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37173,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___37263 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___37263)){
var effect_fn_37264 = temp__5802__auto___37263;
(effect_fn_37264.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37264.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37264.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37265 = cljs.core.next(seq__37153__$1);
var G__37266 = null;
var G__37267 = (0);
var G__37268 = (0);
seq__37153 = G__37265;
chunk__37154 = G__37266;
count__37155 = G__37267;
i__37156 = G__37268;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__37179 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37180 = null;
var count__37181 = (0);
var i__37182 = (0);
while(true){
if((i__37182 < count__37181)){
var event = chunk__37180.cljs$core$IIndexed$_nth$arity$2(null,i__37182);
re_frame.router.dispatch(event);


var G__37270 = seq__37179;
var G__37271 = chunk__37180;
var G__37272 = count__37181;
var G__37273 = (i__37182 + (1));
seq__37179 = G__37270;
chunk__37180 = G__37271;
count__37181 = G__37272;
i__37182 = G__37273;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37179);
if(temp__5804__auto__){
var seq__37179__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37179__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37179__$1);
var G__37275 = cljs.core.chunk_rest(seq__37179__$1);
var G__37276 = c__5568__auto__;
var G__37277 = cljs.core.count(c__5568__auto__);
var G__37278 = (0);
seq__37179 = G__37275;
chunk__37180 = G__37276;
count__37181 = G__37277;
i__37182 = G__37278;
continue;
} else {
var event = cljs.core.first(seq__37179__$1);
re_frame.router.dispatch(event);


var G__37281 = cljs.core.next(seq__37179__$1);
var G__37282 = null;
var G__37283 = (0);
var G__37284 = (0);
seq__37179 = G__37281;
chunk__37180 = G__37282;
count__37181 = G__37283;
i__37182 = G__37284;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__37184 = cljs.core.seq(value);
var chunk__37185 = null;
var count__37186 = (0);
var i__37187 = (0);
while(true){
if((i__37187 < count__37186)){
var event = chunk__37185.cljs$core$IIndexed$_nth$arity$2(null,i__37187);
clear_event(event);


var G__37285 = seq__37184;
var G__37286 = chunk__37185;
var G__37287 = count__37186;
var G__37288 = (i__37187 + (1));
seq__37184 = G__37285;
chunk__37185 = G__37286;
count__37186 = G__37287;
i__37187 = G__37288;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37184);
if(temp__5804__auto__){
var seq__37184__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37184__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37184__$1);
var G__37289 = cljs.core.chunk_rest(seq__37184__$1);
var G__37290 = c__5568__auto__;
var G__37291 = cljs.core.count(c__5568__auto__);
var G__37292 = (0);
seq__37184 = G__37289;
chunk__37185 = G__37290;
count__37186 = G__37291;
i__37187 = G__37292;
continue;
} else {
var event = cljs.core.first(seq__37184__$1);
clear_event(event);


var G__37297 = cljs.core.next(seq__37184__$1);
var G__37298 = null;
var G__37299 = (0);
var G__37300 = (0);
seq__37184 = G__37297;
chunk__37185 = G__37298;
count__37186 = G__37299;
i__37187 = G__37300;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
