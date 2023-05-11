goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__35071__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35072__i = 0, G__35072__a = new Array(arguments.length -  0);
while (G__35072__i < G__35072__a.length) {G__35072__a[G__35072__i] = arguments[G__35072__i + 0]; ++G__35072__i;}
  args = new cljs.core.IndexedSeq(G__35072__a,0,null);
} 
return G__35071__delegate.call(this,args);};
G__35071.cljs$lang$maxFixedArity = 0;
G__35071.cljs$lang$applyTo = (function (arglist__35073){
var args = cljs.core.seq(arglist__35073);
return G__35071__delegate(args);
});
G__35071.cljs$core$IFn$_invoke$arity$variadic = G__35071__delegate;
return G__35071;
})()
);

(o.error = (function() { 
var G__35075__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35076__i = 0, G__35076__a = new Array(arguments.length -  0);
while (G__35076__i < G__35076__a.length) {G__35076__a[G__35076__i] = arguments[G__35076__i + 0]; ++G__35076__i;}
  args = new cljs.core.IndexedSeq(G__35076__a,0,null);
} 
return G__35075__delegate.call(this,args);};
G__35075.cljs$lang$maxFixedArity = 0;
G__35075.cljs$lang$applyTo = (function (arglist__35078){
var args = cljs.core.seq(arglist__35078);
return G__35075__delegate(args);
});
G__35075.cljs$core$IFn$_invoke$arity$variadic = G__35075__delegate;
return G__35075;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
