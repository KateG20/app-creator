goog.provide('cljs.nodejs');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_((function() { 
var G__50347__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__50347 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50348__i = 0, G__50348__a = new Array(arguments.length -  0);
while (G__50348__i < G__50348__a.length) {G__50348__a[G__50348__i] = arguments[G__50348__i + 0]; ++G__50348__i;}
  args = new cljs.core.IndexedSeq(G__50348__a,0,null);
} 
return G__50347__delegate.call(this,args);};
G__50347.cljs$lang$maxFixedArity = 0;
G__50347.cljs$lang$applyTo = (function (arglist__50349){
var args = cljs.core.seq(arglist__50349);
return G__50347__delegate(args);
});
G__50347.cljs$core$IFn$_invoke$arity$variadic = G__50347__delegate;
return G__50347;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__50350__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__50350 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50351__i = 0, G__50351__a = new Array(arguments.length -  0);
while (G__50351__i < G__50351__a.length) {G__50351__a[G__50351__i] = arguments[G__50351__i + 0]; ++G__50351__i;}
  args = new cljs.core.IndexedSeq(G__50351__a,0,null);
} 
return G__50350__delegate.call(this,args);};
G__50350.cljs$lang$maxFixedArity = 0;
G__50350.cljs$lang$applyTo = (function (arglist__50352){
var args = cljs.core.seq(arglist__50352);
return G__50350__delegate(args);
});
G__50350.cljs$core$IFn$_invoke$arity$variadic = G__50350__delegate;
return G__50350;
})()
);

return null;
});

//# sourceMappingURL=cljs.nodejs.js.map
