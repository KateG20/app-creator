goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33248 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33248(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33261 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33261(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31842 = coll;
var G__31843 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31842,G__31843) : shadow.dom.lazy_native_coll_seq.call(null,G__31842,G__31843));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__31871 = arguments.length;
switch (G__31871) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__31880 = arguments.length;
switch (G__31880) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__31898 = arguments.length;
switch (G__31898) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__31913 = arguments.length;
switch (G__31913) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__31966 = arguments.length;
switch (G__31966) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__31981 = arguments.length;
switch (G__31981) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e31993){if((e31993 instanceof Object)){
var e = e31993;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31993;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32012 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32013 = null;
var count__32014 = (0);
var i__32015 = (0);
while(true){
if((i__32015 < count__32014)){
var el = chunk__32013.cljs$core$IIndexed$_nth$arity$2(null,i__32015);
var handler_33282__$1 = ((function (seq__32012,chunk__32013,count__32014,i__32015,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32012,chunk__32013,count__32014,i__32015,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33282__$1);


var G__33283 = seq__32012;
var G__33284 = chunk__32013;
var G__33285 = count__32014;
var G__33286 = (i__32015 + (1));
seq__32012 = G__33283;
chunk__32013 = G__33284;
count__32014 = G__33285;
i__32015 = G__33286;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32012);
if(temp__5804__auto__){
var seq__32012__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32012__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32012__$1);
var G__33287 = cljs.core.chunk_rest(seq__32012__$1);
var G__33288 = c__5568__auto__;
var G__33289 = cljs.core.count(c__5568__auto__);
var G__33290 = (0);
seq__32012 = G__33287;
chunk__32013 = G__33288;
count__32014 = G__33289;
i__32015 = G__33290;
continue;
} else {
var el = cljs.core.first(seq__32012__$1);
var handler_33291__$1 = ((function (seq__32012,chunk__32013,count__32014,i__32015,el,seq__32012__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32012,chunk__32013,count__32014,i__32015,el,seq__32012__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33291__$1);


var G__33292 = cljs.core.next(seq__32012__$1);
var G__33293 = null;
var G__33294 = (0);
var G__33295 = (0);
seq__32012 = G__33292;
chunk__32013 = G__33293;
count__32014 = G__33294;
i__32015 = G__33295;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32103 = arguments.length;
switch (G__32103) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32116 = cljs.core.seq(events);
var chunk__32117 = null;
var count__32118 = (0);
var i__32119 = (0);
while(true){
if((i__32119 < count__32118)){
var vec__32130 = chunk__32117.cljs$core$IIndexed$_nth$arity$2(null,i__32119);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32130,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33298 = seq__32116;
var G__33299 = chunk__32117;
var G__33300 = count__32118;
var G__33301 = (i__32119 + (1));
seq__32116 = G__33298;
chunk__32117 = G__33299;
count__32118 = G__33300;
i__32119 = G__33301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32116);
if(temp__5804__auto__){
var seq__32116__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32116__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32116__$1);
var G__33302 = cljs.core.chunk_rest(seq__32116__$1);
var G__33303 = c__5568__auto__;
var G__33304 = cljs.core.count(c__5568__auto__);
var G__33305 = (0);
seq__32116 = G__33302;
chunk__32117 = G__33303;
count__32118 = G__33304;
i__32119 = G__33305;
continue;
} else {
var vec__32135 = cljs.core.first(seq__32116__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32135,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32135,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33307 = cljs.core.next(seq__32116__$1);
var G__33308 = null;
var G__33309 = (0);
var G__33310 = (0);
seq__32116 = G__33307;
chunk__32117 = G__33308;
count__32118 = G__33309;
i__32119 = G__33310;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32144 = cljs.core.seq(styles);
var chunk__32145 = null;
var count__32146 = (0);
var i__32147 = (0);
while(true){
if((i__32147 < count__32146)){
var vec__32167 = chunk__32145.cljs$core$IIndexed$_nth$arity$2(null,i__32147);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32167,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32167,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33311 = seq__32144;
var G__33312 = chunk__32145;
var G__33313 = count__32146;
var G__33314 = (i__32147 + (1));
seq__32144 = G__33311;
chunk__32145 = G__33312;
count__32146 = G__33313;
i__32147 = G__33314;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32144);
if(temp__5804__auto__){
var seq__32144__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32144__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32144__$1);
var G__33315 = cljs.core.chunk_rest(seq__32144__$1);
var G__33316 = c__5568__auto__;
var G__33317 = cljs.core.count(c__5568__auto__);
var G__33318 = (0);
seq__32144 = G__33315;
chunk__32145 = G__33316;
count__32146 = G__33317;
i__32147 = G__33318;
continue;
} else {
var vec__32181 = cljs.core.first(seq__32144__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32181,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32181,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33319 = cljs.core.next(seq__32144__$1);
var G__33320 = null;
var G__33321 = (0);
var G__33322 = (0);
seq__32144 = G__33319;
chunk__32145 = G__33320;
count__32146 = G__33321;
i__32147 = G__33322;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32189_33323 = key;
var G__32189_33324__$1 = (((G__32189_33323 instanceof cljs.core.Keyword))?G__32189_33323.fqn:null);
switch (G__32189_33324__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33327 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_33327,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_33327,"aria-");
}
})())){
el.setAttribute(ks_33327,value);
} else {
(el[ks_33327] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32222){
var map__32223 = p__32222;
var map__32223__$1 = cljs.core.__destructure_map(map__32223);
var props = map__32223__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32223__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32225 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32225,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32225,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32225,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32230 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32230,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32230;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32237 = arguments.length;
switch (G__32237) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32248){
var vec__32249 = p__32248;
var seq__32250 = cljs.core.seq(vec__32249);
var first__32251 = cljs.core.first(seq__32250);
var seq__32250__$1 = cljs.core.next(seq__32250);
var nn = first__32251;
var first__32251__$1 = cljs.core.first(seq__32250__$1);
var seq__32250__$2 = cljs.core.next(seq__32250__$1);
var np = first__32251__$1;
var nc = seq__32250__$2;
var node = vec__32249;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32255 = nn;
var G__32256 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32255,G__32256) : create_fn.call(null,G__32255,G__32256));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32258 = nn;
var G__32259 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32258,G__32259) : create_fn.call(null,G__32258,G__32259));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32269 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32269,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32269,(1),null);
var seq__32272_33361 = cljs.core.seq(node_children);
var chunk__32273_33362 = null;
var count__32274_33363 = (0);
var i__32275_33364 = (0);
while(true){
if((i__32275_33364 < count__32274_33363)){
var child_struct_33365 = chunk__32273_33362.cljs$core$IIndexed$_nth$arity$2(null,i__32275_33364);
var children_33366 = shadow.dom.dom_node(child_struct_33365);
if(cljs.core.seq_QMARK_(children_33366)){
var seq__32331_33367 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33366));
var chunk__32334_33368 = null;
var count__32335_33369 = (0);
var i__32336_33370 = (0);
while(true){
if((i__32336_33370 < count__32335_33369)){
var child_33371 = chunk__32334_33368.cljs$core$IIndexed$_nth$arity$2(null,i__32336_33370);
if(cljs.core.truth_(child_33371)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33371);


var G__33372 = seq__32331_33367;
var G__33373 = chunk__32334_33368;
var G__33374 = count__32335_33369;
var G__33375 = (i__32336_33370 + (1));
seq__32331_33367 = G__33372;
chunk__32334_33368 = G__33373;
count__32335_33369 = G__33374;
i__32336_33370 = G__33375;
continue;
} else {
var G__33376 = seq__32331_33367;
var G__33377 = chunk__32334_33368;
var G__33378 = count__32335_33369;
var G__33379 = (i__32336_33370 + (1));
seq__32331_33367 = G__33376;
chunk__32334_33368 = G__33377;
count__32335_33369 = G__33378;
i__32336_33370 = G__33379;
continue;
}
} else {
var temp__5804__auto___33380 = cljs.core.seq(seq__32331_33367);
if(temp__5804__auto___33380){
var seq__32331_33381__$1 = temp__5804__auto___33380;
if(cljs.core.chunked_seq_QMARK_(seq__32331_33381__$1)){
var c__5568__auto___33382 = cljs.core.chunk_first(seq__32331_33381__$1);
var G__33383 = cljs.core.chunk_rest(seq__32331_33381__$1);
var G__33384 = c__5568__auto___33382;
var G__33385 = cljs.core.count(c__5568__auto___33382);
var G__33386 = (0);
seq__32331_33367 = G__33383;
chunk__32334_33368 = G__33384;
count__32335_33369 = G__33385;
i__32336_33370 = G__33386;
continue;
} else {
var child_33387 = cljs.core.first(seq__32331_33381__$1);
if(cljs.core.truth_(child_33387)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33387);


var G__33388 = cljs.core.next(seq__32331_33381__$1);
var G__33389 = null;
var G__33390 = (0);
var G__33391 = (0);
seq__32331_33367 = G__33388;
chunk__32334_33368 = G__33389;
count__32335_33369 = G__33390;
i__32336_33370 = G__33391;
continue;
} else {
var G__33392 = cljs.core.next(seq__32331_33381__$1);
var G__33393 = null;
var G__33394 = (0);
var G__33395 = (0);
seq__32331_33367 = G__33392;
chunk__32334_33368 = G__33393;
count__32335_33369 = G__33394;
i__32336_33370 = G__33395;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33366);
}


var G__33396 = seq__32272_33361;
var G__33397 = chunk__32273_33362;
var G__33398 = count__32274_33363;
var G__33399 = (i__32275_33364 + (1));
seq__32272_33361 = G__33396;
chunk__32273_33362 = G__33397;
count__32274_33363 = G__33398;
i__32275_33364 = G__33399;
continue;
} else {
var temp__5804__auto___33400 = cljs.core.seq(seq__32272_33361);
if(temp__5804__auto___33400){
var seq__32272_33401__$1 = temp__5804__auto___33400;
if(cljs.core.chunked_seq_QMARK_(seq__32272_33401__$1)){
var c__5568__auto___33402 = cljs.core.chunk_first(seq__32272_33401__$1);
var G__33403 = cljs.core.chunk_rest(seq__32272_33401__$1);
var G__33404 = c__5568__auto___33402;
var G__33405 = cljs.core.count(c__5568__auto___33402);
var G__33406 = (0);
seq__32272_33361 = G__33403;
chunk__32273_33362 = G__33404;
count__32274_33363 = G__33405;
i__32275_33364 = G__33406;
continue;
} else {
var child_struct_33407 = cljs.core.first(seq__32272_33401__$1);
var children_33408 = shadow.dom.dom_node(child_struct_33407);
if(cljs.core.seq_QMARK_(children_33408)){
var seq__32364_33409 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33408));
var chunk__32366_33410 = null;
var count__32367_33411 = (0);
var i__32368_33412 = (0);
while(true){
if((i__32368_33412 < count__32367_33411)){
var child_33413 = chunk__32366_33410.cljs$core$IIndexed$_nth$arity$2(null,i__32368_33412);
if(cljs.core.truth_(child_33413)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33413);


var G__33414 = seq__32364_33409;
var G__33415 = chunk__32366_33410;
var G__33416 = count__32367_33411;
var G__33417 = (i__32368_33412 + (1));
seq__32364_33409 = G__33414;
chunk__32366_33410 = G__33415;
count__32367_33411 = G__33416;
i__32368_33412 = G__33417;
continue;
} else {
var G__33418 = seq__32364_33409;
var G__33419 = chunk__32366_33410;
var G__33420 = count__32367_33411;
var G__33421 = (i__32368_33412 + (1));
seq__32364_33409 = G__33418;
chunk__32366_33410 = G__33419;
count__32367_33411 = G__33420;
i__32368_33412 = G__33421;
continue;
}
} else {
var temp__5804__auto___33423__$1 = cljs.core.seq(seq__32364_33409);
if(temp__5804__auto___33423__$1){
var seq__32364_33424__$1 = temp__5804__auto___33423__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32364_33424__$1)){
var c__5568__auto___33425 = cljs.core.chunk_first(seq__32364_33424__$1);
var G__33426 = cljs.core.chunk_rest(seq__32364_33424__$1);
var G__33427 = c__5568__auto___33425;
var G__33428 = cljs.core.count(c__5568__auto___33425);
var G__33429 = (0);
seq__32364_33409 = G__33426;
chunk__32366_33410 = G__33427;
count__32367_33411 = G__33428;
i__32368_33412 = G__33429;
continue;
} else {
var child_33430 = cljs.core.first(seq__32364_33424__$1);
if(cljs.core.truth_(child_33430)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33430);


var G__33431 = cljs.core.next(seq__32364_33424__$1);
var G__33432 = null;
var G__33433 = (0);
var G__33434 = (0);
seq__32364_33409 = G__33431;
chunk__32366_33410 = G__33432;
count__32367_33411 = G__33433;
i__32368_33412 = G__33434;
continue;
} else {
var G__33435 = cljs.core.next(seq__32364_33424__$1);
var G__33436 = null;
var G__33437 = (0);
var G__33438 = (0);
seq__32364_33409 = G__33435;
chunk__32366_33410 = G__33436;
count__32367_33411 = G__33437;
i__32368_33412 = G__33438;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33408);
}


var G__33439 = cljs.core.next(seq__32272_33401__$1);
var G__33440 = null;
var G__33441 = (0);
var G__33442 = (0);
seq__32272_33361 = G__33439;
chunk__32273_33362 = G__33440;
count__32274_33363 = G__33441;
i__32275_33364 = G__33442;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32427 = cljs.core.seq(node);
var chunk__32428 = null;
var count__32429 = (0);
var i__32430 = (0);
while(true){
if((i__32430 < count__32429)){
var n = chunk__32428.cljs$core$IIndexed$_nth$arity$2(null,i__32430);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33443 = seq__32427;
var G__33444 = chunk__32428;
var G__33445 = count__32429;
var G__33446 = (i__32430 + (1));
seq__32427 = G__33443;
chunk__32428 = G__33444;
count__32429 = G__33445;
i__32430 = G__33446;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32427);
if(temp__5804__auto__){
var seq__32427__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32427__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32427__$1);
var G__33448 = cljs.core.chunk_rest(seq__32427__$1);
var G__33449 = c__5568__auto__;
var G__33450 = cljs.core.count(c__5568__auto__);
var G__33451 = (0);
seq__32427 = G__33448;
chunk__32428 = G__33449;
count__32429 = G__33450;
i__32430 = G__33451;
continue;
} else {
var n = cljs.core.first(seq__32427__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33452 = cljs.core.next(seq__32427__$1);
var G__33453 = null;
var G__33454 = (0);
var G__33455 = (0);
seq__32427 = G__33452;
chunk__32428 = G__33453;
count__32429 = G__33454;
i__32430 = G__33455;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32436 = arguments.length;
switch (G__32436) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32442 = arguments.length;
switch (G__32442) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32475 = arguments.length;
switch (G__32475) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33465 = arguments.length;
var i__5770__auto___33466 = (0);
while(true){
if((i__5770__auto___33466 < len__5769__auto___33465)){
args__5775__auto__.push((arguments[i__5770__auto___33466]));

var G__33467 = (i__5770__auto___33466 + (1));
i__5770__auto___33466 = G__33467;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32519_33468 = cljs.core.seq(nodes);
var chunk__32520_33469 = null;
var count__32521_33470 = (0);
var i__32522_33471 = (0);
while(true){
if((i__32522_33471 < count__32521_33470)){
var node_33472 = chunk__32520_33469.cljs$core$IIndexed$_nth$arity$2(null,i__32522_33471);
fragment.appendChild(shadow.dom._to_dom(node_33472));


var G__33473 = seq__32519_33468;
var G__33474 = chunk__32520_33469;
var G__33475 = count__32521_33470;
var G__33476 = (i__32522_33471 + (1));
seq__32519_33468 = G__33473;
chunk__32520_33469 = G__33474;
count__32521_33470 = G__33475;
i__32522_33471 = G__33476;
continue;
} else {
var temp__5804__auto___33477 = cljs.core.seq(seq__32519_33468);
if(temp__5804__auto___33477){
var seq__32519_33478__$1 = temp__5804__auto___33477;
if(cljs.core.chunked_seq_QMARK_(seq__32519_33478__$1)){
var c__5568__auto___33479 = cljs.core.chunk_first(seq__32519_33478__$1);
var G__33480 = cljs.core.chunk_rest(seq__32519_33478__$1);
var G__33481 = c__5568__auto___33479;
var G__33482 = cljs.core.count(c__5568__auto___33479);
var G__33483 = (0);
seq__32519_33468 = G__33480;
chunk__32520_33469 = G__33481;
count__32521_33470 = G__33482;
i__32522_33471 = G__33483;
continue;
} else {
var node_33484 = cljs.core.first(seq__32519_33478__$1);
fragment.appendChild(shadow.dom._to_dom(node_33484));


var G__33485 = cljs.core.next(seq__32519_33478__$1);
var G__33486 = null;
var G__33487 = (0);
var G__33488 = (0);
seq__32519_33468 = G__33485;
chunk__32520_33469 = G__33486;
count__32521_33470 = G__33487;
i__32522_33471 = G__33488;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32504){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32504));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32535_33489 = cljs.core.seq(scripts);
var chunk__32536_33490 = null;
var count__32537_33491 = (0);
var i__32538_33492 = (0);
while(true){
if((i__32538_33492 < count__32537_33491)){
var vec__32566_33493 = chunk__32536_33490.cljs$core$IIndexed$_nth$arity$2(null,i__32538_33492);
var script_tag_33494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32566_33493,(0),null);
var script_body_33495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32566_33493,(1),null);
eval(script_body_33495);


var G__33496 = seq__32535_33489;
var G__33497 = chunk__32536_33490;
var G__33498 = count__32537_33491;
var G__33499 = (i__32538_33492 + (1));
seq__32535_33489 = G__33496;
chunk__32536_33490 = G__33497;
count__32537_33491 = G__33498;
i__32538_33492 = G__33499;
continue;
} else {
var temp__5804__auto___33500 = cljs.core.seq(seq__32535_33489);
if(temp__5804__auto___33500){
var seq__32535_33501__$1 = temp__5804__auto___33500;
if(cljs.core.chunked_seq_QMARK_(seq__32535_33501__$1)){
var c__5568__auto___33502 = cljs.core.chunk_first(seq__32535_33501__$1);
var G__33503 = cljs.core.chunk_rest(seq__32535_33501__$1);
var G__33504 = c__5568__auto___33502;
var G__33505 = cljs.core.count(c__5568__auto___33502);
var G__33506 = (0);
seq__32535_33489 = G__33503;
chunk__32536_33490 = G__33504;
count__32537_33491 = G__33505;
i__32538_33492 = G__33506;
continue;
} else {
var vec__32579_33507 = cljs.core.first(seq__32535_33501__$1);
var script_tag_33508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32579_33507,(0),null);
var script_body_33509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32579_33507,(1),null);
eval(script_body_33509);


var G__33510 = cljs.core.next(seq__32535_33501__$1);
var G__33511 = null;
var G__33512 = (0);
var G__33513 = (0);
seq__32535_33489 = G__33510;
chunk__32536_33490 = G__33511;
count__32537_33491 = G__33512;
i__32538_33492 = G__33513;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32589){
var vec__32591 = p__32589;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32591,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32591,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32614 = arguments.length;
switch (G__32614) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32644 = cljs.core.seq(style_keys);
var chunk__32645 = null;
var count__32646 = (0);
var i__32647 = (0);
while(true){
if((i__32647 < count__32646)){
var it = chunk__32645.cljs$core$IIndexed$_nth$arity$2(null,i__32647);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33552 = seq__32644;
var G__33553 = chunk__32645;
var G__33554 = count__32646;
var G__33555 = (i__32647 + (1));
seq__32644 = G__33552;
chunk__32645 = G__33553;
count__32646 = G__33554;
i__32647 = G__33555;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32644);
if(temp__5804__auto__){
var seq__32644__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32644__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32644__$1);
var G__33557 = cljs.core.chunk_rest(seq__32644__$1);
var G__33558 = c__5568__auto__;
var G__33559 = cljs.core.count(c__5568__auto__);
var G__33560 = (0);
seq__32644 = G__33557;
chunk__32645 = G__33558;
count__32646 = G__33559;
i__32647 = G__33560;
continue;
} else {
var it = cljs.core.first(seq__32644__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33561 = cljs.core.next(seq__32644__$1);
var G__33562 = null;
var G__33563 = (0);
var G__33564 = (0);
seq__32644 = G__33561;
chunk__32645 = G__33562;
count__32646 = G__33563;
i__32647 = G__33564;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k32666,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__32676 = k32666;
var G__32676__$1 = (((G__32676 instanceof cljs.core.Keyword))?G__32676.fqn:null);
switch (G__32676__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32666,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__32680){
var vec__32681 = p__32680;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32681,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32681,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32665){
var self__ = this;
var G__32665__$1 = this;
return (new cljs.core.RecordIter((0),G__32665__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32667,other32668){
var self__ = this;
var this32667__$1 = this;
return (((!((other32668 == null)))) && ((((this32667__$1.constructor === other32668.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32667__$1.x,other32668.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32667__$1.y,other32668.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32667__$1.__extmap,other32668.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k32666){
var self__ = this;
var this__5350__auto____$1 = this;
var G__32714 = k32666;
var G__32714__$1 = (((G__32714 instanceof cljs.core.Keyword))?G__32714.fqn:null);
switch (G__32714__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32666);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__32665){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__32721 = cljs.core.keyword_identical_QMARK_;
var expr__32722 = k__5352__auto__;
if(cljs.core.truth_((pred__32721.cljs$core$IFn$_invoke$arity$2 ? pred__32721.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32722) : pred__32721.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32722)))){
return (new shadow.dom.Coordinate(G__32665,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32721.cljs$core$IFn$_invoke$arity$2 ? pred__32721.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32722) : pred__32721.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32722)))){
return (new shadow.dom.Coordinate(self__.x,G__32665,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__32665),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__32665){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32665,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32670){
var extmap__5385__auto__ = (function (){var G__32740 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32670,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32670)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32740);
} else {
return G__32740;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32670),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32670),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k32743,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__32748 = k32743;
var G__32748__$1 = (((G__32748 instanceof cljs.core.Keyword))?G__32748.fqn:null);
switch (G__32748__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32743,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__32753){
var vec__32754 = p__32753;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32754,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32754,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32742){
var self__ = this;
var G__32742__$1 = this;
return (new cljs.core.RecordIter((0),G__32742__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32744,other32745){
var self__ = this;
var this32744__$1 = this;
return (((!((other32745 == null)))) && ((((this32744__$1.constructor === other32745.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32744__$1.w,other32745.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32744__$1.h,other32745.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32744__$1.__extmap,other32745.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k32743){
var self__ = this;
var this__5350__auto____$1 = this;
var G__32806 = k32743;
var G__32806__$1 = (((G__32806 instanceof cljs.core.Keyword))?G__32806.fqn:null);
switch (G__32806__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32743);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__32742){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__32809 = cljs.core.keyword_identical_QMARK_;
var expr__32810 = k__5352__auto__;
if(cljs.core.truth_((pred__32809.cljs$core$IFn$_invoke$arity$2 ? pred__32809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32810) : pred__32809.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32810)))){
return (new shadow.dom.Size(G__32742,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32809.cljs$core$IFn$_invoke$arity$2 ? pred__32809.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32810) : pred__32809.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32810)))){
return (new shadow.dom.Size(self__.w,G__32742,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__32742),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__32742){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32742,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32746){
var extmap__5385__auto__ = (function (){var G__32853 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32746,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32746)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32853);
} else {
return G__32853;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32746),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32746),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__33671 = (i + (1));
var G__33672 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33671;
ret = G__33672;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32904){
var vec__32905 = p__32904;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32905,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32905,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32918 = arguments.length;
switch (G__32918) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33678 = ps;
var G__33679 = (i + (1));
el__$1 = G__33678;
i = G__33679;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32967 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32967,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32967,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32967,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32974_33680 = cljs.core.seq(props);
var chunk__32975_33681 = null;
var count__32976_33682 = (0);
var i__32977_33683 = (0);
while(true){
if((i__32977_33683 < count__32976_33682)){
var vec__32986_33684 = chunk__32975_33681.cljs$core$IIndexed$_nth$arity$2(null,i__32977_33683);
var k_33685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32986_33684,(0),null);
var v_33686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32986_33684,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_33685);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33685),v_33686);


var G__33687 = seq__32974_33680;
var G__33688 = chunk__32975_33681;
var G__33689 = count__32976_33682;
var G__33690 = (i__32977_33683 + (1));
seq__32974_33680 = G__33687;
chunk__32975_33681 = G__33688;
count__32976_33682 = G__33689;
i__32977_33683 = G__33690;
continue;
} else {
var temp__5804__auto___33691 = cljs.core.seq(seq__32974_33680);
if(temp__5804__auto___33691){
var seq__32974_33692__$1 = temp__5804__auto___33691;
if(cljs.core.chunked_seq_QMARK_(seq__32974_33692__$1)){
var c__5568__auto___33693 = cljs.core.chunk_first(seq__32974_33692__$1);
var G__33694 = cljs.core.chunk_rest(seq__32974_33692__$1);
var G__33695 = c__5568__auto___33693;
var G__33696 = cljs.core.count(c__5568__auto___33693);
var G__33697 = (0);
seq__32974_33680 = G__33694;
chunk__32975_33681 = G__33695;
count__32976_33682 = G__33696;
i__32977_33683 = G__33697;
continue;
} else {
var vec__32991_33702 = cljs.core.first(seq__32974_33692__$1);
var k_33703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32991_33702,(0),null);
var v_33704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32991_33702,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_33703);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33703),v_33704);


var G__33707 = cljs.core.next(seq__32974_33692__$1);
var G__33708 = null;
var G__33709 = (0);
var G__33710 = (0);
seq__32974_33680 = G__33707;
chunk__32975_33681 = G__33708;
count__32976_33682 = G__33709;
i__32977_33683 = G__33710;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33008 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33008,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33008,(1),null);
var seq__33011_33712 = cljs.core.seq(node_children);
var chunk__33013_33713 = null;
var count__33014_33714 = (0);
var i__33015_33715 = (0);
while(true){
if((i__33015_33715 < count__33014_33714)){
var child_struct_33716 = chunk__33013_33713.cljs$core$IIndexed$_nth$arity$2(null,i__33015_33715);
if((!((child_struct_33716 == null)))){
if(typeof child_struct_33716 === 'string'){
var text_33717 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33717),child_struct_33716].join(''));
} else {
var children_33720 = shadow.dom.svg_node(child_struct_33716);
if(cljs.core.seq_QMARK_(children_33720)){
var seq__33038_33721 = cljs.core.seq(children_33720);
var chunk__33040_33722 = null;
var count__33041_33723 = (0);
var i__33042_33724 = (0);
while(true){
if((i__33042_33724 < count__33041_33723)){
var child_33725 = chunk__33040_33722.cljs$core$IIndexed$_nth$arity$2(null,i__33042_33724);
if(cljs.core.truth_(child_33725)){
node.appendChild(child_33725);


var G__33726 = seq__33038_33721;
var G__33727 = chunk__33040_33722;
var G__33728 = count__33041_33723;
var G__33729 = (i__33042_33724 + (1));
seq__33038_33721 = G__33726;
chunk__33040_33722 = G__33727;
count__33041_33723 = G__33728;
i__33042_33724 = G__33729;
continue;
} else {
var G__33730 = seq__33038_33721;
var G__33731 = chunk__33040_33722;
var G__33732 = count__33041_33723;
var G__33733 = (i__33042_33724 + (1));
seq__33038_33721 = G__33730;
chunk__33040_33722 = G__33731;
count__33041_33723 = G__33732;
i__33042_33724 = G__33733;
continue;
}
} else {
var temp__5804__auto___33734 = cljs.core.seq(seq__33038_33721);
if(temp__5804__auto___33734){
var seq__33038_33735__$1 = temp__5804__auto___33734;
if(cljs.core.chunked_seq_QMARK_(seq__33038_33735__$1)){
var c__5568__auto___33736 = cljs.core.chunk_first(seq__33038_33735__$1);
var G__33737 = cljs.core.chunk_rest(seq__33038_33735__$1);
var G__33738 = c__5568__auto___33736;
var G__33739 = cljs.core.count(c__5568__auto___33736);
var G__33740 = (0);
seq__33038_33721 = G__33737;
chunk__33040_33722 = G__33738;
count__33041_33723 = G__33739;
i__33042_33724 = G__33740;
continue;
} else {
var child_33741 = cljs.core.first(seq__33038_33735__$1);
if(cljs.core.truth_(child_33741)){
node.appendChild(child_33741);


var G__33742 = cljs.core.next(seq__33038_33735__$1);
var G__33743 = null;
var G__33744 = (0);
var G__33745 = (0);
seq__33038_33721 = G__33742;
chunk__33040_33722 = G__33743;
count__33041_33723 = G__33744;
i__33042_33724 = G__33745;
continue;
} else {
var G__33749 = cljs.core.next(seq__33038_33735__$1);
var G__33750 = null;
var G__33751 = (0);
var G__33752 = (0);
seq__33038_33721 = G__33749;
chunk__33040_33722 = G__33750;
count__33041_33723 = G__33751;
i__33042_33724 = G__33752;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33720);
}
}


var G__33753 = seq__33011_33712;
var G__33754 = chunk__33013_33713;
var G__33755 = count__33014_33714;
var G__33756 = (i__33015_33715 + (1));
seq__33011_33712 = G__33753;
chunk__33013_33713 = G__33754;
count__33014_33714 = G__33755;
i__33015_33715 = G__33756;
continue;
} else {
var G__33757 = seq__33011_33712;
var G__33758 = chunk__33013_33713;
var G__33759 = count__33014_33714;
var G__33760 = (i__33015_33715 + (1));
seq__33011_33712 = G__33757;
chunk__33013_33713 = G__33758;
count__33014_33714 = G__33759;
i__33015_33715 = G__33760;
continue;
}
} else {
var temp__5804__auto___33761 = cljs.core.seq(seq__33011_33712);
if(temp__5804__auto___33761){
var seq__33011_33762__$1 = temp__5804__auto___33761;
if(cljs.core.chunked_seq_QMARK_(seq__33011_33762__$1)){
var c__5568__auto___33763 = cljs.core.chunk_first(seq__33011_33762__$1);
var G__33764 = cljs.core.chunk_rest(seq__33011_33762__$1);
var G__33765 = c__5568__auto___33763;
var G__33766 = cljs.core.count(c__5568__auto___33763);
var G__33767 = (0);
seq__33011_33712 = G__33764;
chunk__33013_33713 = G__33765;
count__33014_33714 = G__33766;
i__33015_33715 = G__33767;
continue;
} else {
var child_struct_33768 = cljs.core.first(seq__33011_33762__$1);
if((!((child_struct_33768 == null)))){
if(typeof child_struct_33768 === 'string'){
var text_33769 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33769),child_struct_33768].join(''));
} else {
var children_33770 = shadow.dom.svg_node(child_struct_33768);
if(cljs.core.seq_QMARK_(children_33770)){
var seq__33055_33771 = cljs.core.seq(children_33770);
var chunk__33057_33772 = null;
var count__33058_33773 = (0);
var i__33059_33774 = (0);
while(true){
if((i__33059_33774 < count__33058_33773)){
var child_33775 = chunk__33057_33772.cljs$core$IIndexed$_nth$arity$2(null,i__33059_33774);
if(cljs.core.truth_(child_33775)){
node.appendChild(child_33775);


var G__33776 = seq__33055_33771;
var G__33777 = chunk__33057_33772;
var G__33778 = count__33058_33773;
var G__33779 = (i__33059_33774 + (1));
seq__33055_33771 = G__33776;
chunk__33057_33772 = G__33777;
count__33058_33773 = G__33778;
i__33059_33774 = G__33779;
continue;
} else {
var G__33780 = seq__33055_33771;
var G__33781 = chunk__33057_33772;
var G__33782 = count__33058_33773;
var G__33783 = (i__33059_33774 + (1));
seq__33055_33771 = G__33780;
chunk__33057_33772 = G__33781;
count__33058_33773 = G__33782;
i__33059_33774 = G__33783;
continue;
}
} else {
var temp__5804__auto___33784__$1 = cljs.core.seq(seq__33055_33771);
if(temp__5804__auto___33784__$1){
var seq__33055_33785__$1 = temp__5804__auto___33784__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33055_33785__$1)){
var c__5568__auto___33786 = cljs.core.chunk_first(seq__33055_33785__$1);
var G__33787 = cljs.core.chunk_rest(seq__33055_33785__$1);
var G__33788 = c__5568__auto___33786;
var G__33789 = cljs.core.count(c__5568__auto___33786);
var G__33790 = (0);
seq__33055_33771 = G__33787;
chunk__33057_33772 = G__33788;
count__33058_33773 = G__33789;
i__33059_33774 = G__33790;
continue;
} else {
var child_33791 = cljs.core.first(seq__33055_33785__$1);
if(cljs.core.truth_(child_33791)){
node.appendChild(child_33791);


var G__33792 = cljs.core.next(seq__33055_33785__$1);
var G__33793 = null;
var G__33794 = (0);
var G__33795 = (0);
seq__33055_33771 = G__33792;
chunk__33057_33772 = G__33793;
count__33058_33773 = G__33794;
i__33059_33774 = G__33795;
continue;
} else {
var G__33796 = cljs.core.next(seq__33055_33785__$1);
var G__33797 = null;
var G__33798 = (0);
var G__33799 = (0);
seq__33055_33771 = G__33796;
chunk__33057_33772 = G__33797;
count__33058_33773 = G__33798;
i__33059_33774 = G__33799;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33770);
}
}


var G__33800 = cljs.core.next(seq__33011_33762__$1);
var G__33801 = null;
var G__33802 = (0);
var G__33803 = (0);
seq__33011_33712 = G__33800;
chunk__33013_33713 = G__33801;
count__33014_33714 = G__33802;
i__33015_33715 = G__33803;
continue;
} else {
var G__33804 = cljs.core.next(seq__33011_33762__$1);
var G__33805 = null;
var G__33806 = (0);
var G__33807 = (0);
seq__33011_33712 = G__33804;
chunk__33013_33713 = G__33805;
count__33014_33714 = G__33806;
i__33015_33715 = G__33807;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33827 = arguments.length;
var i__5770__auto___33829 = (0);
while(true){
if((i__5770__auto___33829 < len__5769__auto___33827)){
args__5775__auto__.push((arguments[i__5770__auto___33829]));

var G__33830 = (i__5770__auto___33829 + (1));
i__5770__auto___33829 = G__33830;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33141){
var G__33142 = cljs.core.first(seq33141);
var seq33141__$1 = cljs.core.next(seq33141);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33142,seq33141__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33190 = arguments.length;
switch (G__33190) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__28292__auto___33839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_33224){
var state_val_33225 = (state_33224[(1)]);
if((state_val_33225 === (1))){
var state_33224__$1 = state_33224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33224__$1,(2),once_or_cleanup);
} else {
if((state_val_33225 === (2))){
var inst_33221 = (state_33224[(2)]);
var inst_33222 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33224__$1 = (function (){var statearr_33227 = state_33224;
(statearr_33227[(7)] = inst_33221);

return statearr_33227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33224__$1,inst_33222);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27812__auto__ = null;
var shadow$dom$state_machine__27812__auto____0 = (function (){
var statearr_33228 = [null,null,null,null,null,null,null,null];
(statearr_33228[(0)] = shadow$dom$state_machine__27812__auto__);

(statearr_33228[(1)] = (1));

return statearr_33228;
});
var shadow$dom$state_machine__27812__auto____1 = (function (state_33224){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_33224);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e33229){var ex__27815__auto__ = e33229;
var statearr_33231_33841 = state_33224;
(statearr_33231_33841[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_33224[(4)]))){
var statearr_33232_33842 = state_33224;
(statearr_33232_33842[(1)] = cljs.core.first((state_33224[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33843 = state_33224;
state_33224 = G__33843;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
shadow$dom$state_machine__27812__auto__ = function(state_33224){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27812__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27812__auto____1.call(this,state_33224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27812__auto____0;
shadow$dom$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27812__auto____1;
return shadow$dom$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_33233 = f__28293__auto__();
(statearr_33233[(6)] = c__28292__auto___33839);

return statearr_33233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
