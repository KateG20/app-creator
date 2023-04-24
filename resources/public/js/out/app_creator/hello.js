// Compiled by ClojureScript 1.11.60 {:optimizations :whitespace}
goog.provide('app_creator.hello');
goog.require('cljs.core');
alert("Hello from ClojureScript!");
app_creator.hello.add_some_numbers = (function app_creator$hello$add_some_numbers(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2009 = arguments.length;
var i__5770__auto___2010 = (0);
while(true){
if((i__5770__auto___2010 < len__5769__auto___2009)){
args__5775__auto__.push((arguments[i__5770__auto___2010]));

var G__2011 = (i__5770__auto___2010 + (1));
i__5770__auto___2010 = G__2011;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return app_creator.hello.add_some_numbers.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(app_creator.hello.add_some_numbers.cljs$core$IFn$_invoke$arity$variadic = (function (numbers){
return cljs.core.apply.call(null,cljs.core._PLUS_,numbers);
}));

(app_creator.hello.add_some_numbers.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app_creator.hello.add_some_numbers.cljs$lang$applyTo = (function (seq2008){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2008));
}));

