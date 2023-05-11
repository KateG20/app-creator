goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33089){
var map__33090 = p__33089;
var map__33090__$1 = cljs.core.__destructure_map(map__33090);
var m = map__33090__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33090__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33093_33581 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33094_33582 = null;
var count__33095_33583 = (0);
var i__33096_33584 = (0);
while(true){
if((i__33096_33584 < count__33095_33583)){
var f_33586 = chunk__33094_33582.cljs$core$IIndexed$_nth$arity$2(null,i__33096_33584);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_33586], 0));


var G__33587 = seq__33093_33581;
var G__33588 = chunk__33094_33582;
var G__33589 = count__33095_33583;
var G__33590 = (i__33096_33584 + (1));
seq__33093_33581 = G__33587;
chunk__33094_33582 = G__33588;
count__33095_33583 = G__33589;
i__33096_33584 = G__33590;
continue;
} else {
var temp__5804__auto___33591 = cljs.core.seq(seq__33093_33581);
if(temp__5804__auto___33591){
var seq__33093_33592__$1 = temp__5804__auto___33591;
if(cljs.core.chunked_seq_QMARK_(seq__33093_33592__$1)){
var c__5568__auto___33593 = cljs.core.chunk_first(seq__33093_33592__$1);
var G__33594 = cljs.core.chunk_rest(seq__33093_33592__$1);
var G__33595 = c__5568__auto___33593;
var G__33596 = cljs.core.count(c__5568__auto___33593);
var G__33597 = (0);
seq__33093_33581 = G__33594;
chunk__33094_33582 = G__33595;
count__33095_33583 = G__33596;
i__33096_33584 = G__33597;
continue;
} else {
var f_33598 = cljs.core.first(seq__33093_33592__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_33598], 0));


var G__33599 = cljs.core.next(seq__33093_33592__$1);
var G__33600 = null;
var G__33601 = (0);
var G__33602 = (0);
seq__33093_33581 = G__33599;
chunk__33094_33582 = G__33600;
count__33095_33583 = G__33601;
i__33096_33584 = G__33602;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33605 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_33605], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_33605)))?cljs.core.second(arglists_33605):arglists_33605)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33097_33609 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33098_33610 = null;
var count__33099_33611 = (0);
var i__33100_33612 = (0);
while(true){
if((i__33100_33612 < count__33099_33611)){
var vec__33113_33613 = chunk__33098_33610.cljs$core$IIndexed$_nth$arity$2(null,i__33100_33612);
var name_33614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33113_33613,(0),null);
var map__33116_33615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33113_33613,(1),null);
var map__33116_33616__$1 = cljs.core.__destructure_map(map__33116_33615);
var doc_33617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33116_33616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33116_33616__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_33614], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_33618], 0));

if(cljs.core.truth_(doc_33617)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_33617], 0));
} else {
}


var G__33619 = seq__33097_33609;
var G__33620 = chunk__33098_33610;
var G__33621 = count__33099_33611;
var G__33622 = (i__33100_33612 + (1));
seq__33097_33609 = G__33619;
chunk__33098_33610 = G__33620;
count__33099_33611 = G__33621;
i__33100_33612 = G__33622;
continue;
} else {
var temp__5804__auto___33623 = cljs.core.seq(seq__33097_33609);
if(temp__5804__auto___33623){
var seq__33097_33624__$1 = temp__5804__auto___33623;
if(cljs.core.chunked_seq_QMARK_(seq__33097_33624__$1)){
var c__5568__auto___33625 = cljs.core.chunk_first(seq__33097_33624__$1);
var G__33626 = cljs.core.chunk_rest(seq__33097_33624__$1);
var G__33627 = c__5568__auto___33625;
var G__33628 = cljs.core.count(c__5568__auto___33625);
var G__33629 = (0);
seq__33097_33609 = G__33626;
chunk__33098_33610 = G__33627;
count__33099_33611 = G__33628;
i__33100_33612 = G__33629;
continue;
} else {
var vec__33137_33630 = cljs.core.first(seq__33097_33624__$1);
var name_33631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137_33630,(0),null);
var map__33140_33632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137_33630,(1),null);
var map__33140_33633__$1 = cljs.core.__destructure_map(map__33140_33632);
var doc_33634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140_33633__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33140_33633__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_33631], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_33635], 0));

if(cljs.core.truth_(doc_33634)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_33634], 0));
} else {
}


var G__33636 = cljs.core.next(seq__33097_33624__$1);
var G__33637 = null;
var G__33638 = (0);
var G__33639 = (0);
seq__33097_33609 = G__33636;
chunk__33098_33610 = G__33637;
count__33099_33611 = G__33638;
i__33100_33612 = G__33639;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__33157 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33158 = null;
var count__33159 = (0);
var i__33160 = (0);
while(true){
if((i__33160 < count__33159)){
var role = chunk__33158.cljs$core$IIndexed$_nth$arity$2(null,i__33160);
var temp__5804__auto___33644__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___33644__$1)){
var spec_33645 = temp__5804__auto___33644__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_33645)], 0));
} else {
}


var G__33646 = seq__33157;
var G__33647 = chunk__33158;
var G__33648 = count__33159;
var G__33649 = (i__33160 + (1));
seq__33157 = G__33646;
chunk__33158 = G__33647;
count__33159 = G__33648;
i__33160 = G__33649;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__33157);
if(temp__5804__auto____$1){
var seq__33157__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__33157__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33157__$1);
var G__33650 = cljs.core.chunk_rest(seq__33157__$1);
var G__33651 = c__5568__auto__;
var G__33652 = cljs.core.count(c__5568__auto__);
var G__33653 = (0);
seq__33157 = G__33650;
chunk__33158 = G__33651;
count__33159 = G__33652;
i__33160 = G__33653;
continue;
} else {
var role = cljs.core.first(seq__33157__$1);
var temp__5804__auto___33654__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___33654__$2)){
var spec_33655 = temp__5804__auto___33654__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_33655)], 0));
} else {
}


var G__33657 = cljs.core.next(seq__33157__$1);
var G__33658 = null;
var G__33659 = (0);
var G__33660 = (0);
seq__33157 = G__33657;
chunk__33158 = G__33658;
count__33159 = G__33659;
i__33160 = G__33660;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__33664 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__33665 = cljs.core.ex_cause(t);
via = G__33664;
t = G__33665;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__33252 = datafied_throwable;
var map__33252__$1 = cljs.core.__destructure_map(map__33252);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33252__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33252__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33252__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__33253 = cljs.core.last(via);
var map__33253__$1 = cljs.core.__destructure_map(map__33253);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33253__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33253__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33253__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33254 = data;
var map__33254__$1 = cljs.core.__destructure_map(map__33254);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33254__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33254__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33254__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__33265 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__33265__$1 = cljs.core.__destructure_map(map__33265);
var top_data = map__33265__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33265__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__33297 = phase;
var G__33297__$1 = (((G__33297 instanceof cljs.core.Keyword))?G__33297.fqn:null);
switch (G__33297__$1) {
case "read-source":
var map__33306 = data;
var map__33306__$1 = cljs.core.__destructure_map(map__33306);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33306__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33306__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__33326 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__33326__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33326,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33326);
var G__33326__$2 = (cljs.core.truth_((function (){var fexpr__33328 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__33328.cljs$core$IFn$_invoke$arity$1 ? fexpr__33328.cljs$core$IFn$_invoke$arity$1(source) : fexpr__33328.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33326__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33326__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33326__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33326__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__33329 = top_data;
var G__33329__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33329,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33329);
var G__33329__$2 = (cljs.core.truth_((function (){var fexpr__33330 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__33330.cljs$core$IFn$_invoke$arity$1 ? fexpr__33330.cljs$core$IFn$_invoke$arity$1(source) : fexpr__33330.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33329__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33329__$1);
var G__33329__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33329__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33329__$2);
var G__33329__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33329__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33329__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33329__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33329__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__33331 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(3),null);
var G__33334 = top_data;
var G__33334__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33334,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__33334);
var G__33334__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33334__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__33334__$1);
var G__33334__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33334__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__33334__$2);
var G__33334__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33334__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33334__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33334__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33334__$4;
}

break;
case "execution":
var vec__33336 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33336,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33336,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33336,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33336,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__33247_SHARP_){
var or__5045__auto__ = (p1__33247_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__33339 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__33339.cljs$core$IFn$_invoke$arity$1 ? fexpr__33339.cljs$core$IFn$_invoke$arity$1(p1__33247_SHARP_) : fexpr__33339.call(null,p1__33247_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__33340 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__33340__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33340,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__33340);
var G__33340__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33340__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33340__$1);
var G__33340__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33340__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__33340__$2);
var G__33340__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33340__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__33340__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33340__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33340__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33297__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__33347){
var map__33348 = p__33347;
var map__33348__$1 = cljs.core.__destructure_map(map__33348);
var triage_data = map__33348__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33348__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33348__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33348__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33348__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33348__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33348__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33348__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__33352 = phase;
var G__33352__$1 = (((G__33352 instanceof cljs.core.Keyword))?G__33352.fqn:null);
switch (G__33352__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__33353 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__33354 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33355 = loc;
var G__33356 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33357_33812 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33358_33813 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33359_33814 = true;
var _STAR_print_fn_STAR__temp_val__33360_33815 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33359_33814);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33360_33815);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33345_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33345_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33358_33813);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33357_33812);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__33353,G__33354,G__33355,G__33356) : format.call(null,G__33353,G__33354,G__33355,G__33356));

break;
case "macroexpansion":
var G__33517 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__33518 = cause_type;
var G__33519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33520 = loc;
var G__33521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33517,G__33518,G__33519,G__33520,G__33521) : format.call(null,G__33517,G__33518,G__33519,G__33520,G__33521));

break;
case "compile-syntax-check":
var G__33522 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__33523 = cause_type;
var G__33524 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33525 = loc;
var G__33526 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33522,G__33523,G__33524,G__33525,G__33526) : format.call(null,G__33522,G__33523,G__33524,G__33525,G__33526));

break;
case "compilation":
var G__33527 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__33528 = cause_type;
var G__33529 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33530 = loc;
var G__33531 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33527,G__33528,G__33529,G__33530,G__33531) : format.call(null,G__33527,G__33528,G__33529,G__33530,G__33531));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__33533 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__33534 = symbol;
var G__33535 = loc;
var G__33536 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33537_33818 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33538_33819 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33539_33820 = true;
var _STAR_print_fn_STAR__temp_val__33540_33821 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33539_33820);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33540_33821);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33346_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33346_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33538_33819);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33537_33818);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__33533,G__33534,G__33535,G__33536) : format.call(null,G__33533,G__33534,G__33535,G__33536));
} else {
var G__33543 = "Execution error%s at %s(%s).\n%s\n";
var G__33544 = cause_type;
var G__33545 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33546 = loc;
var G__33547 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33543,G__33544,G__33545,G__33546,G__33547) : format.call(null,G__33543,G__33544,G__33545,G__33546,G__33547));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33352__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
