goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35634 = arguments.length;
var i__5770__auto___35635 = (0);
while(true){
if((i__5770__auto___35635 < len__5769__auto___35634)){
args__5775__auto__.push((arguments[i__5770__auto___35635]));

var G__35636 = (i__5770__auto___35635 + (1));
i__5770__auto___35635 = G__35636;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35271){
var G__35272 = cljs.core.first(seq35271);
var seq35271__$1 = cljs.core.next(seq35271);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35272,seq35271__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35273 = cljs.core.seq(sources);
var chunk__35274 = null;
var count__35275 = (0);
var i__35276 = (0);
while(true){
if((i__35276 < count__35275)){
var map__35283 = chunk__35274.cljs$core$IIndexed$_nth$arity$2(null,i__35276);
var map__35283__$1 = cljs.core.__destructure_map(map__35283);
var src = map__35283__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35284){var e_35637 = e35284;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35637);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35637.message)].join('')));
}

var G__35638 = seq__35273;
var G__35639 = chunk__35274;
var G__35640 = count__35275;
var G__35641 = (i__35276 + (1));
seq__35273 = G__35638;
chunk__35274 = G__35639;
count__35275 = G__35640;
i__35276 = G__35641;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35273);
if(temp__5804__auto__){
var seq__35273__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35273__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35273__$1);
var G__35642 = cljs.core.chunk_rest(seq__35273__$1);
var G__35643 = c__5568__auto__;
var G__35644 = cljs.core.count(c__5568__auto__);
var G__35645 = (0);
seq__35273 = G__35642;
chunk__35274 = G__35643;
count__35275 = G__35644;
i__35276 = G__35645;
continue;
} else {
var map__35285 = cljs.core.first(seq__35273__$1);
var map__35285__$1 = cljs.core.__destructure_map(map__35285);
var src = map__35285__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35285__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35285__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35285__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35285__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35286){var e_35646 = e35286;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35646);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35646.message)].join('')));
}

var G__35647 = cljs.core.next(seq__35273__$1);
var G__35648 = null;
var G__35649 = (0);
var G__35650 = (0);
seq__35273 = G__35647;
chunk__35274 = G__35648;
count__35275 = G__35649;
i__35276 = G__35650;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35287 = cljs.core.seq(js_requires);
var chunk__35288 = null;
var count__35289 = (0);
var i__35290 = (0);
while(true){
if((i__35290 < count__35289)){
var js_ns = chunk__35288.cljs$core$IIndexed$_nth$arity$2(null,i__35290);
var require_str_35653 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35653);


var G__35654 = seq__35287;
var G__35655 = chunk__35288;
var G__35656 = count__35289;
var G__35657 = (i__35290 + (1));
seq__35287 = G__35654;
chunk__35288 = G__35655;
count__35289 = G__35656;
i__35290 = G__35657;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35287);
if(temp__5804__auto__){
var seq__35287__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35287__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35287__$1);
var G__35662 = cljs.core.chunk_rest(seq__35287__$1);
var G__35663 = c__5568__auto__;
var G__35664 = cljs.core.count(c__5568__auto__);
var G__35665 = (0);
seq__35287 = G__35662;
chunk__35288 = G__35663;
count__35289 = G__35664;
i__35290 = G__35665;
continue;
} else {
var js_ns = cljs.core.first(seq__35287__$1);
var require_str_35666 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35666);


var G__35667 = cljs.core.next(seq__35287__$1);
var G__35668 = null;
var G__35669 = (0);
var G__35670 = (0);
seq__35287 = G__35667;
chunk__35288 = G__35668;
count__35289 = G__35669;
i__35290 = G__35670;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35294){
var map__35295 = p__35294;
var map__35295__$1 = cljs.core.__destructure_map(map__35295);
var msg = map__35295__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35295__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35295__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35296(s__35297){
return (new cljs.core.LazySeq(null,(function (){
var s__35297__$1 = s__35297;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__35297__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__35302 = cljs.core.first(xs__6360__auto__);
var map__35302__$1 = cljs.core.__destructure_map(map__35302);
var src = map__35302__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35302__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35302__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__35297__$1,map__35302,map__35302__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35295,map__35295__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35296_$_iter__35298(s__35299){
return (new cljs.core.LazySeq(null,((function (s__35297__$1,map__35302,map__35302__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35295,map__35295__$1,msg,info,reload_info){
return (function (){
var s__35299__$1 = s__35299;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__35299__$1);
if(temp__5804__auto____$1){
var s__35299__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35299__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__35299__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__35301 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__35300 = (0);
while(true){
if((i__35300 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__35300);
cljs.core.chunk_append(b__35301,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35671 = (i__35300 + (1));
i__35300 = G__35671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35301),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35296_$_iter__35298(cljs.core.chunk_rest(s__35299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35301),null);
}
} else {
var warning = cljs.core.first(s__35299__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35296_$_iter__35298(cljs.core.rest(s__35299__$2)));
}
} else {
return null;
}
break;
}
});})(s__35297__$1,map__35302,map__35302__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35295,map__35295__$1,msg,info,reload_info))
,null,null));
});})(s__35297__$1,map__35302,map__35302__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35295,map__35295__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35296(cljs.core.rest(s__35297__$1)));
} else {
var G__35672 = cljs.core.rest(s__35297__$1);
s__35297__$1 = G__35672;
continue;
}
} else {
var G__35673 = cljs.core.rest(s__35297__$1);
s__35297__$1 = G__35673;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35303_35674 = cljs.core.seq(warnings);
var chunk__35304_35675 = null;
var count__35305_35676 = (0);
var i__35306_35677 = (0);
while(true){
if((i__35306_35677 < count__35305_35676)){
var map__35311_35682 = chunk__35304_35675.cljs$core$IIndexed$_nth$arity$2(null,i__35306_35677);
var map__35311_35683__$1 = cljs.core.__destructure_map(map__35311_35682);
var w_35684 = map__35311_35683__$1;
var msg_35685__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35311_35683__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35311_35683__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35311_35683__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35311_35683__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35688)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35686),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35687),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35685__$1)].join(''));


var G__35689 = seq__35303_35674;
var G__35690 = chunk__35304_35675;
var G__35691 = count__35305_35676;
var G__35692 = (i__35306_35677 + (1));
seq__35303_35674 = G__35689;
chunk__35304_35675 = G__35690;
count__35305_35676 = G__35691;
i__35306_35677 = G__35692;
continue;
} else {
var temp__5804__auto___35693 = cljs.core.seq(seq__35303_35674);
if(temp__5804__auto___35693){
var seq__35303_35694__$1 = temp__5804__auto___35693;
if(cljs.core.chunked_seq_QMARK_(seq__35303_35694__$1)){
var c__5568__auto___35695 = cljs.core.chunk_first(seq__35303_35694__$1);
var G__35696 = cljs.core.chunk_rest(seq__35303_35694__$1);
var G__35697 = c__5568__auto___35695;
var G__35698 = cljs.core.count(c__5568__auto___35695);
var G__35699 = (0);
seq__35303_35674 = G__35696;
chunk__35304_35675 = G__35697;
count__35305_35676 = G__35698;
i__35306_35677 = G__35699;
continue;
} else {
var map__35312_35700 = cljs.core.first(seq__35303_35694__$1);
var map__35312_35701__$1 = cljs.core.__destructure_map(map__35312_35700);
var w_35702 = map__35312_35701__$1;
var msg_35703__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35312_35701__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35312_35701__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35312_35701__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35312_35701__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35706)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35704),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35705),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35703__$1)].join(''));


var G__35707 = cljs.core.next(seq__35303_35694__$1);
var G__35708 = null;
var G__35709 = (0);
var G__35710 = (0);
seq__35303_35674 = G__35707;
chunk__35304_35675 = G__35708;
count__35305_35676 = G__35709;
i__35306_35677 = G__35710;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35293_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35293_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35314){
var map__35315 = p__35314;
var map__35315__$1 = cljs.core.__destructure_map(map__35315);
var msg = map__35315__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__35316 = cljs.core.seq(updates);
var chunk__35318 = null;
var count__35319 = (0);
var i__35320 = (0);
while(true){
if((i__35320 < count__35319)){
var path = chunk__35318.cljs$core$IIndexed$_nth$arity$2(null,i__35320);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35473_35711 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35477_35712 = null;
var count__35478_35713 = (0);
var i__35479_35714 = (0);
while(true){
if((i__35479_35714 < count__35478_35713)){
var node_35715 = chunk__35477_35712.cljs$core$IIndexed$_nth$arity$2(null,i__35479_35714);
if(cljs.core.not(node_35715.shadow$old)){
var path_match_35716 = shadow.cljs.devtools.client.browser.match_paths(node_35715.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35716)){
var new_link_35717 = (function (){var G__35513 = node_35715.cloneNode(true);
G__35513.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35716),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35513;
})();
(node_35715.shadow$old = true);

(new_link_35717.onload = ((function (seq__35473_35711,chunk__35477_35712,count__35478_35713,i__35479_35714,seq__35316,chunk__35318,count__35319,i__35320,new_link_35717,path_match_35716,node_35715,path,map__35315,map__35315__$1,msg,updates,reload_info){
return (function (e){
var seq__35514_35718 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__35516_35719 = null;
var count__35517_35720 = (0);
var i__35518_35721 = (0);
while(true){
if((i__35518_35721 < count__35517_35720)){
var map__35522_35722 = chunk__35516_35719.cljs$core$IIndexed$_nth$arity$2(null,i__35518_35721);
var map__35522_35723__$1 = cljs.core.__destructure_map(map__35522_35722);
var task_35724 = map__35522_35723__$1;
var fn_str_35725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522_35723__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522_35723__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35727 = goog.getObjectByName(fn_str_35725,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35726)].join(''));

(fn_obj_35727.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35727.cljs$core$IFn$_invoke$arity$2(path,new_link_35717) : fn_obj_35727.call(null,path,new_link_35717));


var G__35728 = seq__35514_35718;
var G__35729 = chunk__35516_35719;
var G__35730 = count__35517_35720;
var G__35731 = (i__35518_35721 + (1));
seq__35514_35718 = G__35728;
chunk__35516_35719 = G__35729;
count__35517_35720 = G__35730;
i__35518_35721 = G__35731;
continue;
} else {
var temp__5804__auto___35732 = cljs.core.seq(seq__35514_35718);
if(temp__5804__auto___35732){
var seq__35514_35733__$1 = temp__5804__auto___35732;
if(cljs.core.chunked_seq_QMARK_(seq__35514_35733__$1)){
var c__5568__auto___35734 = cljs.core.chunk_first(seq__35514_35733__$1);
var G__35735 = cljs.core.chunk_rest(seq__35514_35733__$1);
var G__35736 = c__5568__auto___35734;
var G__35737 = cljs.core.count(c__5568__auto___35734);
var G__35738 = (0);
seq__35514_35718 = G__35735;
chunk__35516_35719 = G__35736;
count__35517_35720 = G__35737;
i__35518_35721 = G__35738;
continue;
} else {
var map__35523_35739 = cljs.core.first(seq__35514_35733__$1);
var map__35523_35740__$1 = cljs.core.__destructure_map(map__35523_35739);
var task_35741 = map__35523_35740__$1;
var fn_str_35742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35523_35740__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35523_35740__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35745 = goog.getObjectByName(fn_str_35742,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35743)].join(''));

(fn_obj_35745.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35745.cljs$core$IFn$_invoke$arity$2(path,new_link_35717) : fn_obj_35745.call(null,path,new_link_35717));


var G__35746 = cljs.core.next(seq__35514_35733__$1);
var G__35747 = null;
var G__35748 = (0);
var G__35749 = (0);
seq__35514_35718 = G__35746;
chunk__35516_35719 = G__35747;
count__35517_35720 = G__35748;
i__35518_35721 = G__35749;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_35715);
});})(seq__35473_35711,chunk__35477_35712,count__35478_35713,i__35479_35714,seq__35316,chunk__35318,count__35319,i__35320,new_link_35717,path_match_35716,node_35715,path,map__35315,map__35315__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35716], 0));

goog.dom.insertSiblingAfter(new_link_35717,node_35715);


var G__35750 = seq__35473_35711;
var G__35751 = chunk__35477_35712;
var G__35752 = count__35478_35713;
var G__35753 = (i__35479_35714 + (1));
seq__35473_35711 = G__35750;
chunk__35477_35712 = G__35751;
count__35478_35713 = G__35752;
i__35479_35714 = G__35753;
continue;
} else {
var G__35754 = seq__35473_35711;
var G__35755 = chunk__35477_35712;
var G__35756 = count__35478_35713;
var G__35757 = (i__35479_35714 + (1));
seq__35473_35711 = G__35754;
chunk__35477_35712 = G__35755;
count__35478_35713 = G__35756;
i__35479_35714 = G__35757;
continue;
}
} else {
var G__35758 = seq__35473_35711;
var G__35759 = chunk__35477_35712;
var G__35760 = count__35478_35713;
var G__35761 = (i__35479_35714 + (1));
seq__35473_35711 = G__35758;
chunk__35477_35712 = G__35759;
count__35478_35713 = G__35760;
i__35479_35714 = G__35761;
continue;
}
} else {
var temp__5804__auto___35762 = cljs.core.seq(seq__35473_35711);
if(temp__5804__auto___35762){
var seq__35473_35763__$1 = temp__5804__auto___35762;
if(cljs.core.chunked_seq_QMARK_(seq__35473_35763__$1)){
var c__5568__auto___35764 = cljs.core.chunk_first(seq__35473_35763__$1);
var G__35767 = cljs.core.chunk_rest(seq__35473_35763__$1);
var G__35768 = c__5568__auto___35764;
var G__35769 = cljs.core.count(c__5568__auto___35764);
var G__35770 = (0);
seq__35473_35711 = G__35767;
chunk__35477_35712 = G__35768;
count__35478_35713 = G__35769;
i__35479_35714 = G__35770;
continue;
} else {
var node_35771 = cljs.core.first(seq__35473_35763__$1);
if(cljs.core.not(node_35771.shadow$old)){
var path_match_35772 = shadow.cljs.devtools.client.browser.match_paths(node_35771.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35772)){
var new_link_35773 = (function (){var G__35524 = node_35771.cloneNode(true);
G__35524.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35772),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35524;
})();
(node_35771.shadow$old = true);

(new_link_35773.onload = ((function (seq__35473_35711,chunk__35477_35712,count__35478_35713,i__35479_35714,seq__35316,chunk__35318,count__35319,i__35320,new_link_35773,path_match_35772,node_35771,seq__35473_35763__$1,temp__5804__auto___35762,path,map__35315,map__35315__$1,msg,updates,reload_info){
return (function (e){
var seq__35525_35774 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__35527_35775 = null;
var count__35528_35776 = (0);
var i__35529_35777 = (0);
while(true){
if((i__35529_35777 < count__35528_35776)){
var map__35537_35778 = chunk__35527_35775.cljs$core$IIndexed$_nth$arity$2(null,i__35529_35777);
var map__35537_35779__$1 = cljs.core.__destructure_map(map__35537_35778);
var task_35780 = map__35537_35779__$1;
var fn_str_35781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35537_35779__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35537_35779__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35783 = goog.getObjectByName(fn_str_35781,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35782)].join(''));

(fn_obj_35783.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35783.cljs$core$IFn$_invoke$arity$2(path,new_link_35773) : fn_obj_35783.call(null,path,new_link_35773));


var G__35784 = seq__35525_35774;
var G__35785 = chunk__35527_35775;
var G__35786 = count__35528_35776;
var G__35787 = (i__35529_35777 + (1));
seq__35525_35774 = G__35784;
chunk__35527_35775 = G__35785;
count__35528_35776 = G__35786;
i__35529_35777 = G__35787;
continue;
} else {
var temp__5804__auto___35788__$1 = cljs.core.seq(seq__35525_35774);
if(temp__5804__auto___35788__$1){
var seq__35525_35789__$1 = temp__5804__auto___35788__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35525_35789__$1)){
var c__5568__auto___35790 = cljs.core.chunk_first(seq__35525_35789__$1);
var G__35791 = cljs.core.chunk_rest(seq__35525_35789__$1);
var G__35792 = c__5568__auto___35790;
var G__35793 = cljs.core.count(c__5568__auto___35790);
var G__35794 = (0);
seq__35525_35774 = G__35791;
chunk__35527_35775 = G__35792;
count__35528_35776 = G__35793;
i__35529_35777 = G__35794;
continue;
} else {
var map__35538_35795 = cljs.core.first(seq__35525_35789__$1);
var map__35538_35796__$1 = cljs.core.__destructure_map(map__35538_35795);
var task_35797 = map__35538_35796__$1;
var fn_str_35798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35538_35796__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35538_35796__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35800 = goog.getObjectByName(fn_str_35798,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35799)].join(''));

(fn_obj_35800.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35800.cljs$core$IFn$_invoke$arity$2(path,new_link_35773) : fn_obj_35800.call(null,path,new_link_35773));


var G__35801 = cljs.core.next(seq__35525_35789__$1);
var G__35802 = null;
var G__35803 = (0);
var G__35804 = (0);
seq__35525_35774 = G__35801;
chunk__35527_35775 = G__35802;
count__35528_35776 = G__35803;
i__35529_35777 = G__35804;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_35771);
});})(seq__35473_35711,chunk__35477_35712,count__35478_35713,i__35479_35714,seq__35316,chunk__35318,count__35319,i__35320,new_link_35773,path_match_35772,node_35771,seq__35473_35763__$1,temp__5804__auto___35762,path,map__35315,map__35315__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35772], 0));

goog.dom.insertSiblingAfter(new_link_35773,node_35771);


var G__35805 = cljs.core.next(seq__35473_35763__$1);
var G__35806 = null;
var G__35807 = (0);
var G__35808 = (0);
seq__35473_35711 = G__35805;
chunk__35477_35712 = G__35806;
count__35478_35713 = G__35807;
i__35479_35714 = G__35808;
continue;
} else {
var G__35809 = cljs.core.next(seq__35473_35763__$1);
var G__35810 = null;
var G__35811 = (0);
var G__35812 = (0);
seq__35473_35711 = G__35809;
chunk__35477_35712 = G__35810;
count__35478_35713 = G__35811;
i__35479_35714 = G__35812;
continue;
}
} else {
var G__35813 = cljs.core.next(seq__35473_35763__$1);
var G__35814 = null;
var G__35815 = (0);
var G__35816 = (0);
seq__35473_35711 = G__35813;
chunk__35477_35712 = G__35814;
count__35478_35713 = G__35815;
i__35479_35714 = G__35816;
continue;
}
}
} else {
}
}
break;
}


var G__35817 = seq__35316;
var G__35818 = chunk__35318;
var G__35819 = count__35319;
var G__35820 = (i__35320 + (1));
seq__35316 = G__35817;
chunk__35318 = G__35818;
count__35319 = G__35819;
i__35320 = G__35820;
continue;
} else {
var G__35821 = seq__35316;
var G__35822 = chunk__35318;
var G__35823 = count__35319;
var G__35824 = (i__35320 + (1));
seq__35316 = G__35821;
chunk__35318 = G__35822;
count__35319 = G__35823;
i__35320 = G__35824;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35316);
if(temp__5804__auto__){
var seq__35316__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35316__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35316__$1);
var G__35825 = cljs.core.chunk_rest(seq__35316__$1);
var G__35826 = c__5568__auto__;
var G__35827 = cljs.core.count(c__5568__auto__);
var G__35828 = (0);
seq__35316 = G__35825;
chunk__35318 = G__35826;
count__35319 = G__35827;
i__35320 = G__35828;
continue;
} else {
var path = cljs.core.first(seq__35316__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35541_35829 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35545_35830 = null;
var count__35546_35831 = (0);
var i__35547_35832 = (0);
while(true){
if((i__35547_35832 < count__35546_35831)){
var node_35833 = chunk__35545_35830.cljs$core$IIndexed$_nth$arity$2(null,i__35547_35832);
if(cljs.core.not(node_35833.shadow$old)){
var path_match_35834 = shadow.cljs.devtools.client.browser.match_paths(node_35833.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35834)){
var new_link_35835 = (function (){var G__35581 = node_35833.cloneNode(true);
G__35581.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35834),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35581;
})();
(node_35833.shadow$old = true);

(new_link_35835.onload = ((function (seq__35541_35829,chunk__35545_35830,count__35546_35831,i__35547_35832,seq__35316,chunk__35318,count__35319,i__35320,new_link_35835,path_match_35834,node_35833,path,seq__35316__$1,temp__5804__auto__,map__35315,map__35315__$1,msg,updates,reload_info){
return (function (e){
var seq__35582_35840 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__35584_35841 = null;
var count__35585_35842 = (0);
var i__35586_35843 = (0);
while(true){
if((i__35586_35843 < count__35585_35842)){
var map__35592_35844 = chunk__35584_35841.cljs$core$IIndexed$_nth$arity$2(null,i__35586_35843);
var map__35592_35845__$1 = cljs.core.__destructure_map(map__35592_35844);
var task_35846 = map__35592_35845__$1;
var fn_str_35847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592_35845__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592_35845__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35849 = goog.getObjectByName(fn_str_35847,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35848)].join(''));

(fn_obj_35849.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35849.cljs$core$IFn$_invoke$arity$2(path,new_link_35835) : fn_obj_35849.call(null,path,new_link_35835));


var G__35850 = seq__35582_35840;
var G__35851 = chunk__35584_35841;
var G__35852 = count__35585_35842;
var G__35853 = (i__35586_35843 + (1));
seq__35582_35840 = G__35850;
chunk__35584_35841 = G__35851;
count__35585_35842 = G__35852;
i__35586_35843 = G__35853;
continue;
} else {
var temp__5804__auto___35854__$1 = cljs.core.seq(seq__35582_35840);
if(temp__5804__auto___35854__$1){
var seq__35582_35855__$1 = temp__5804__auto___35854__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35582_35855__$1)){
var c__5568__auto___35856 = cljs.core.chunk_first(seq__35582_35855__$1);
var G__35857 = cljs.core.chunk_rest(seq__35582_35855__$1);
var G__35858 = c__5568__auto___35856;
var G__35859 = cljs.core.count(c__5568__auto___35856);
var G__35860 = (0);
seq__35582_35840 = G__35857;
chunk__35584_35841 = G__35858;
count__35585_35842 = G__35859;
i__35586_35843 = G__35860;
continue;
} else {
var map__35593_35861 = cljs.core.first(seq__35582_35855__$1);
var map__35593_35862__$1 = cljs.core.__destructure_map(map__35593_35861);
var task_35863 = map__35593_35862__$1;
var fn_str_35864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35593_35862__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35593_35862__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35866 = goog.getObjectByName(fn_str_35864,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35865)].join(''));

(fn_obj_35866.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35866.cljs$core$IFn$_invoke$arity$2(path,new_link_35835) : fn_obj_35866.call(null,path,new_link_35835));


var G__35867 = cljs.core.next(seq__35582_35855__$1);
var G__35868 = null;
var G__35869 = (0);
var G__35870 = (0);
seq__35582_35840 = G__35867;
chunk__35584_35841 = G__35868;
count__35585_35842 = G__35869;
i__35586_35843 = G__35870;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_35833);
});})(seq__35541_35829,chunk__35545_35830,count__35546_35831,i__35547_35832,seq__35316,chunk__35318,count__35319,i__35320,new_link_35835,path_match_35834,node_35833,path,seq__35316__$1,temp__5804__auto__,map__35315,map__35315__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35834], 0));

goog.dom.insertSiblingAfter(new_link_35835,node_35833);


var G__35871 = seq__35541_35829;
var G__35872 = chunk__35545_35830;
var G__35873 = count__35546_35831;
var G__35874 = (i__35547_35832 + (1));
seq__35541_35829 = G__35871;
chunk__35545_35830 = G__35872;
count__35546_35831 = G__35873;
i__35547_35832 = G__35874;
continue;
} else {
var G__35875 = seq__35541_35829;
var G__35876 = chunk__35545_35830;
var G__35877 = count__35546_35831;
var G__35878 = (i__35547_35832 + (1));
seq__35541_35829 = G__35875;
chunk__35545_35830 = G__35876;
count__35546_35831 = G__35877;
i__35547_35832 = G__35878;
continue;
}
} else {
var G__35879 = seq__35541_35829;
var G__35880 = chunk__35545_35830;
var G__35881 = count__35546_35831;
var G__35882 = (i__35547_35832 + (1));
seq__35541_35829 = G__35879;
chunk__35545_35830 = G__35880;
count__35546_35831 = G__35881;
i__35547_35832 = G__35882;
continue;
}
} else {
var temp__5804__auto___35883__$1 = cljs.core.seq(seq__35541_35829);
if(temp__5804__auto___35883__$1){
var seq__35541_35884__$1 = temp__5804__auto___35883__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35541_35884__$1)){
var c__5568__auto___35885 = cljs.core.chunk_first(seq__35541_35884__$1);
var G__35886 = cljs.core.chunk_rest(seq__35541_35884__$1);
var G__35887 = c__5568__auto___35885;
var G__35888 = cljs.core.count(c__5568__auto___35885);
var G__35889 = (0);
seq__35541_35829 = G__35886;
chunk__35545_35830 = G__35887;
count__35546_35831 = G__35888;
i__35547_35832 = G__35889;
continue;
} else {
var node_35890 = cljs.core.first(seq__35541_35884__$1);
if(cljs.core.not(node_35890.shadow$old)){
var path_match_35891 = shadow.cljs.devtools.client.browser.match_paths(node_35890.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35891)){
var new_link_35892 = (function (){var G__35594 = node_35890.cloneNode(true);
G__35594.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35891),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35594;
})();
(node_35890.shadow$old = true);

(new_link_35892.onload = ((function (seq__35541_35829,chunk__35545_35830,count__35546_35831,i__35547_35832,seq__35316,chunk__35318,count__35319,i__35320,new_link_35892,path_match_35891,node_35890,seq__35541_35884__$1,temp__5804__auto___35883__$1,path,seq__35316__$1,temp__5804__auto__,map__35315,map__35315__$1,msg,updates,reload_info){
return (function (e){
var seq__35597_35894 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__35599_35895 = null;
var count__35600_35896 = (0);
var i__35601_35897 = (0);
while(true){
if((i__35601_35897 < count__35600_35896)){
var map__35605_35898 = chunk__35599_35895.cljs$core$IIndexed$_nth$arity$2(null,i__35601_35897);
var map__35605_35899__$1 = cljs.core.__destructure_map(map__35605_35898);
var task_35900 = map__35605_35899__$1;
var fn_str_35901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35605_35899__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35605_35899__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35903 = goog.getObjectByName(fn_str_35901,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35902)].join(''));

(fn_obj_35903.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35903.cljs$core$IFn$_invoke$arity$2(path,new_link_35892) : fn_obj_35903.call(null,path,new_link_35892));


var G__35904 = seq__35597_35894;
var G__35905 = chunk__35599_35895;
var G__35906 = count__35600_35896;
var G__35907 = (i__35601_35897 + (1));
seq__35597_35894 = G__35904;
chunk__35599_35895 = G__35905;
count__35600_35896 = G__35906;
i__35601_35897 = G__35907;
continue;
} else {
var temp__5804__auto___35908__$2 = cljs.core.seq(seq__35597_35894);
if(temp__5804__auto___35908__$2){
var seq__35597_35909__$1 = temp__5804__auto___35908__$2;
if(cljs.core.chunked_seq_QMARK_(seq__35597_35909__$1)){
var c__5568__auto___35910 = cljs.core.chunk_first(seq__35597_35909__$1);
var G__35911 = cljs.core.chunk_rest(seq__35597_35909__$1);
var G__35912 = c__5568__auto___35910;
var G__35913 = cljs.core.count(c__5568__auto___35910);
var G__35914 = (0);
seq__35597_35894 = G__35911;
chunk__35599_35895 = G__35912;
count__35600_35896 = G__35913;
i__35601_35897 = G__35914;
continue;
} else {
var map__35606_35915 = cljs.core.first(seq__35597_35909__$1);
var map__35606_35916__$1 = cljs.core.__destructure_map(map__35606_35915);
var task_35917 = map__35606_35916__$1;
var fn_str_35918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35606_35916__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35606_35916__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35920 = goog.getObjectByName(fn_str_35918,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35919)].join(''));

(fn_obj_35920.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35920.cljs$core$IFn$_invoke$arity$2(path,new_link_35892) : fn_obj_35920.call(null,path,new_link_35892));


var G__35921 = cljs.core.next(seq__35597_35909__$1);
var G__35922 = null;
var G__35923 = (0);
var G__35924 = (0);
seq__35597_35894 = G__35921;
chunk__35599_35895 = G__35922;
count__35600_35896 = G__35923;
i__35601_35897 = G__35924;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_35890);
});})(seq__35541_35829,chunk__35545_35830,count__35546_35831,i__35547_35832,seq__35316,chunk__35318,count__35319,i__35320,new_link_35892,path_match_35891,node_35890,seq__35541_35884__$1,temp__5804__auto___35883__$1,path,seq__35316__$1,temp__5804__auto__,map__35315,map__35315__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35891], 0));

goog.dom.insertSiblingAfter(new_link_35892,node_35890);


var G__35925 = cljs.core.next(seq__35541_35884__$1);
var G__35926 = null;
var G__35927 = (0);
var G__35928 = (0);
seq__35541_35829 = G__35925;
chunk__35545_35830 = G__35926;
count__35546_35831 = G__35927;
i__35547_35832 = G__35928;
continue;
} else {
var G__35929 = cljs.core.next(seq__35541_35884__$1);
var G__35930 = null;
var G__35931 = (0);
var G__35932 = (0);
seq__35541_35829 = G__35929;
chunk__35545_35830 = G__35930;
count__35546_35831 = G__35931;
i__35547_35832 = G__35932;
continue;
}
} else {
var G__35933 = cljs.core.next(seq__35541_35884__$1);
var G__35934 = null;
var G__35935 = (0);
var G__35936 = (0);
seq__35541_35829 = G__35933;
chunk__35545_35830 = G__35934;
count__35546_35831 = G__35935;
i__35547_35832 = G__35936;
continue;
}
}
} else {
}
}
break;
}


var G__35937 = cljs.core.next(seq__35316__$1);
var G__35938 = null;
var G__35939 = (0);
var G__35940 = (0);
seq__35316 = G__35937;
chunk__35318 = G__35938;
count__35319 = G__35939;
i__35320 = G__35940;
continue;
} else {
var G__35941 = cljs.core.next(seq__35316__$1);
var G__35942 = null;
var G__35943 = (0);
var G__35944 = (0);
seq__35316 = G__35941;
chunk__35318 = G__35942;
count__35319 = G__35943;
i__35320 = G__35944;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__35614){
var map__35615 = p__35614;
var map__35615__$1 = cljs.core.__destructure_map(map__35615);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35617,done,error){
var map__35618 = p__35617;
var map__35618__$1 = cljs.core.__destructure_map(map__35618);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35618__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35619,done,error){
var map__35620 = p__35619;
var map__35620__$1 = cljs.core.__destructure_map(map__35620);
var msg = map__35620__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35620__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35620__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35620__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35621){
var map__35622 = p__35621;
var map__35622__$1 = cljs.core.__destructure_map(map__35622);
var src = map__35622__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35622__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35624 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35624) : done.call(null,G__35624));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35625){
var map__35626 = p__35625;
var map__35626__$1 = cljs.core.__destructure_map(map__35626);
var msg__$1 = map__35626__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35626__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35627){var ex = e35627;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35628){
var map__35629 = p__35628;
var map__35629__$1 = cljs.core.__destructure_map(map__35629);
var env = map__35629__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35629__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35630){
var map__35631 = p__35630;
var map__35631__$1 = cljs.core.__destructure_map(map__35631);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35631__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35631__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35632){
var map__35633 = p__35632;
var map__35633__$1 = cljs.core.__destructure_map(map__35633);
var svc = map__35633__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35633__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
