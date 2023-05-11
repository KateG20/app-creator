goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28379 = (function (f,blockable,meta28380){
this.f = f;
this.blockable = blockable;
this.meta28380 = meta28380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28381,meta28380__$1){
var self__ = this;
var _28381__$1 = this;
return (new cljs.core.async.t_cljs$core$async28379(self__.f,self__.blockable,meta28380__$1));
}));

(cljs.core.async.t_cljs$core$async28379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28381){
var self__ = this;
var _28381__$1 = this;
return self__.meta28380;
}));

(cljs.core.async.t_cljs$core$async28379.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28379.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28380","meta28380",1806745270,null)], null);
}));

(cljs.core.async.t_cljs$core$async28379.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28379");

(cljs.core.async.t_cljs$core$async28379.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28379");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28379.
 */
cljs.core.async.__GT_t_cljs$core$async28379 = (function cljs$core$async$__GT_t_cljs$core$async28379(f,blockable,meta28380){
return (new cljs.core.async.t_cljs$core$async28379(f,blockable,meta28380));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28377 = arguments.length;
switch (G__28377) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async28379(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28399 = arguments.length;
switch (G__28399) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28414 = arguments.length;
switch (G__28414) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28428 = arguments.length;
switch (G__28428) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31825 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31825) : fn1.call(null,val_31825));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31825) : fn1.call(null,val_31825));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28436 = arguments.length;
switch (G__28436) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___31834 = n;
var x_31835 = (0);
while(true){
if((x_31835 < n__5636__auto___31834)){
(a[x_31835] = x_31835);

var G__31836 = (x_31835 + (1));
x_31835 = G__31836;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28453 = (function (flag,meta28454){
this.flag = flag;
this.meta28454 = meta28454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28455,meta28454__$1){
var self__ = this;
var _28455__$1 = this;
return (new cljs.core.async.t_cljs$core$async28453(self__.flag,meta28454__$1));
}));

(cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28455){
var self__ = this;
var _28455__$1 = this;
return self__.meta28454;
}));

(cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28454","meta28454",-2031298529,null)], null);
}));

(cljs.core.async.t_cljs$core$async28453.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28453");

(cljs.core.async.t_cljs$core$async28453.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28453");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28453.
 */
cljs.core.async.__GT_t_cljs$core$async28453 = (function cljs$core$async$__GT_t_cljs$core$async28453(flag,meta28454){
return (new cljs.core.async.t_cljs$core$async28453(flag,meta28454));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async28453(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28472 = (function (flag,cb,meta28473){
this.flag = flag;
this.cb = cb;
this.meta28473 = meta28473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28474,meta28473__$1){
var self__ = this;
var _28474__$1 = this;
return (new cljs.core.async.t_cljs$core$async28472(self__.flag,self__.cb,meta28473__$1));
}));

(cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28474){
var self__ = this;
var _28474__$1 = this;
return self__.meta28473;
}));

(cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28473","meta28473",58230856,null)], null);
}));

(cljs.core.async.t_cljs$core$async28472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28472");

(cljs.core.async.t_cljs$core$async28472.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28472.
 */
cljs.core.async.__GT_t_cljs$core$async28472 = (function cljs$core$async$__GT_t_cljs$core$async28472(flag,cb,meta28473){
return (new cljs.core.async.t_cljs$core$async28472(flag,cb,meta28473));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async28472(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28503_SHARP_){
var G__28519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28503_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28519) : fret.call(null,G__28519));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28504_SHARP_){
var G__28521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28504_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28521) : fret.call(null,G__28521));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31849 = (i + (1));
i = G__31849;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31850 = arguments.length;
var i__5770__auto___31851 = (0);
while(true){
if((i__5770__auto___31851 < len__5769__auto___31850)){
args__5775__auto__.push((arguments[i__5770__auto___31851]));

var G__31852 = (i__5770__auto___31851 + (1));
i__5770__auto___31851 = G__31852;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28530){
var map__28531 = p__28530;
var map__28531__$1 = cljs.core.__destructure_map(map__28531);
var opts = map__28531__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28526){
var G__28527 = cljs.core.first(seq28526);
var seq28526__$1 = cljs.core.next(seq28526);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28527,seq28526__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28547 = arguments.length;
switch (G__28547) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28292__auto___31854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_28598){
var state_val_28603 = (state_28598[(1)]);
if((state_val_28603 === (7))){
var inst_28590 = (state_28598[(2)]);
var state_28598__$1 = state_28598;
var statearr_28612_31856 = state_28598__$1;
(statearr_28612_31856[(2)] = inst_28590);

(statearr_28612_31856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (1))){
var state_28598__$1 = state_28598;
var statearr_28613_31857 = state_28598__$1;
(statearr_28613_31857[(2)] = null);

(statearr_28613_31857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (4))){
var inst_28569 = (state_28598[(7)]);
var inst_28569__$1 = (state_28598[(2)]);
var inst_28570 = (inst_28569__$1 == null);
var state_28598__$1 = (function (){var statearr_28616 = state_28598;
(statearr_28616[(7)] = inst_28569__$1);

return statearr_28616;
})();
if(cljs.core.truth_(inst_28570)){
var statearr_28618_31858 = state_28598__$1;
(statearr_28618_31858[(1)] = (5));

} else {
var statearr_28619_31859 = state_28598__$1;
(statearr_28619_31859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (13))){
var state_28598__$1 = state_28598;
var statearr_28623_31860 = state_28598__$1;
(statearr_28623_31860[(2)] = null);

(statearr_28623_31860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (6))){
var inst_28569 = (state_28598[(7)]);
var state_28598__$1 = state_28598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28598__$1,(11),to,inst_28569);
} else {
if((state_val_28603 === (3))){
var inst_28592 = (state_28598[(2)]);
var state_28598__$1 = state_28598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28598__$1,inst_28592);
} else {
if((state_val_28603 === (12))){
var state_28598__$1 = state_28598;
var statearr_28629_31861 = state_28598__$1;
(statearr_28629_31861[(2)] = null);

(statearr_28629_31861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (2))){
var state_28598__$1 = state_28598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28598__$1,(4),from);
} else {
if((state_val_28603 === (11))){
var inst_28581 = (state_28598[(2)]);
var state_28598__$1 = state_28598;
if(cljs.core.truth_(inst_28581)){
var statearr_28635_31863 = state_28598__$1;
(statearr_28635_31863[(1)] = (12));

} else {
var statearr_28641_31870 = state_28598__$1;
(statearr_28641_31870[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (9))){
var state_28598__$1 = state_28598;
var statearr_28650_31872 = state_28598__$1;
(statearr_28650_31872[(2)] = null);

(statearr_28650_31872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (5))){
var state_28598__$1 = state_28598;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28657_31873 = state_28598__$1;
(statearr_28657_31873[(1)] = (8));

} else {
var statearr_28658_31874 = state_28598__$1;
(statearr_28658_31874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (14))){
var inst_28588 = (state_28598[(2)]);
var state_28598__$1 = state_28598;
var statearr_28660_31875 = state_28598__$1;
(statearr_28660_31875[(2)] = inst_28588);

(statearr_28660_31875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (10))){
var inst_28578 = (state_28598[(2)]);
var state_28598__$1 = state_28598;
var statearr_28661_31881 = state_28598__$1;
(statearr_28661_31881[(2)] = inst_28578);

(statearr_28661_31881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (8))){
var inst_28575 = cljs.core.async.close_BANG_(to);
var state_28598__$1 = state_28598;
var statearr_28663_31882 = state_28598__$1;
(statearr_28663_31882[(2)] = inst_28575);

(statearr_28663_31882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27812__auto__ = null;
var cljs$core$async$state_machine__27812__auto____0 = (function (){
var statearr_28669 = [null,null,null,null,null,null,null,null];
(statearr_28669[(0)] = cljs$core$async$state_machine__27812__auto__);

(statearr_28669[(1)] = (1));

return statearr_28669;
});
var cljs$core$async$state_machine__27812__auto____1 = (function (state_28598){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_28598);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e28675){var ex__27815__auto__ = e28675;
var statearr_28680_31883 = state_28598;
(statearr_28680_31883[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_28598[(4)]))){
var statearr_28685_31920 = state_28598;
(statearr_28685_31920[(1)] = cljs.core.first((state_28598[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31922 = state_28598;
state_28598 = G__31922;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$state_machine__27812__auto__ = function(state_28598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27812__auto____1.call(this,state_28598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27812__auto____0;
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27812__auto____1;
return cljs$core$async$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_28694 = f__28293__auto__();
(statearr_28694[(6)] = c__28292__auto___31854);

return statearr_28694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__28729){
var vec__28734 = p__28729;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28734,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28734,(1),null);
var job = vec__28734;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28292__auto___31932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_28754){
var state_val_28755 = (state_28754[(1)]);
if((state_val_28755 === (1))){
var state_28754__$1 = state_28754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28754__$1,(2),res,v);
} else {
if((state_val_28755 === (2))){
var inst_28751 = (state_28754[(2)]);
var inst_28752 = cljs.core.async.close_BANG_(res);
var state_28754__$1 = (function (){var statearr_28756 = state_28754;
(statearr_28756[(7)] = inst_28751);

return statearr_28756;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28754__$1,inst_28752);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0 = (function (){
var statearr_28757 = [null,null,null,null,null,null,null,null];
(statearr_28757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__);

(statearr_28757[(1)] = (1));

return statearr_28757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1 = (function (state_28754){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_28754);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e28758){var ex__27815__auto__ = e28758;
var statearr_28759_31937 = state_28754;
(statearr_28759_31937[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_28754[(4)]))){
var statearr_28765_31938 = state_28754;
(statearr_28765_31938[(1)] = cljs.core.first((state_28754[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31939 = state_28754;
state_28754 = G__31939;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__ = function(state_28754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1.call(this,state_28754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_28794 = f__28293__auto__();
(statearr_28794[(6)] = c__28292__auto___31932);

return statearr_28794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28808){
var vec__28809 = p__28808;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28809,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28809,(1),null);
var job = vec__28809;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___31942 = n;
var __31943 = (0);
while(true){
if((__31943 < n__5636__auto___31942)){
var G__28815_31944 = type;
var G__28815_31945__$1 = (((G__28815_31944 instanceof cljs.core.Keyword))?G__28815_31944.fqn:null);
switch (G__28815_31945__$1) {
case "compute":
var c__28292__auto___31947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31943,c__28292__auto___31947,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async){
return (function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = ((function (__31943,c__28292__auto___31947,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async){
return (function (state_28841){
var state_val_28842 = (state_28841[(1)]);
if((state_val_28842 === (1))){
var state_28841__$1 = state_28841;
var statearr_28845_31948 = state_28841__$1;
(statearr_28845_31948[(2)] = null);

(statearr_28845_31948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (2))){
var state_28841__$1 = state_28841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28841__$1,(4),jobs);
} else {
if((state_val_28842 === (3))){
var inst_28839 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28841__$1,inst_28839);
} else {
if((state_val_28842 === (4))){
var inst_28831 = (state_28841[(2)]);
var inst_28832 = process__$1(inst_28831);
var state_28841__$1 = state_28841;
if(cljs.core.truth_(inst_28832)){
var statearr_28847_31949 = state_28841__$1;
(statearr_28847_31949[(1)] = (5));

} else {
var statearr_28848_31950 = state_28841__$1;
(statearr_28848_31950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (5))){
var state_28841__$1 = state_28841;
var statearr_28849_31951 = state_28841__$1;
(statearr_28849_31951[(2)] = null);

(statearr_28849_31951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (6))){
var state_28841__$1 = state_28841;
var statearr_28853_31952 = state_28841__$1;
(statearr_28853_31952[(2)] = null);

(statearr_28853_31952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (7))){
var inst_28837 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
var statearr_28854_31953 = state_28841__$1;
(statearr_28854_31953[(2)] = inst_28837);

(statearr_28854_31953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31943,c__28292__auto___31947,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async))
;
return ((function (__31943,switch__27811__auto__,c__28292__auto___31947,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0 = (function (){
var statearr_28855 = [null,null,null,null,null,null,null];
(statearr_28855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__);

(statearr_28855[(1)] = (1));

return statearr_28855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1 = (function (state_28841){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_28841);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e28857){var ex__27815__auto__ = e28857;
var statearr_28858_31956 = state_28841;
(statearr_28858_31956[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_28841[(4)]))){
var statearr_28860_31957 = state_28841;
(statearr_28860_31957[(1)] = cljs.core.first((state_28841[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31958 = state_28841;
state_28841 = G__31958;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__ = function(state_28841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1.call(this,state_28841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__;
})()
;})(__31943,switch__27811__auto__,c__28292__auto___31947,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async))
})();
var state__28294__auto__ = (function (){var statearr_28861 = f__28293__auto__();
(statearr_28861[(6)] = c__28292__auto___31947);

return statearr_28861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
});})(__31943,c__28292__auto___31947,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async))
);


break;
case "async":
var c__28292__auto___31959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31943,c__28292__auto___31959,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async){
return (function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = ((function (__31943,c__28292__auto___31959,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async){
return (function (state_28874){
var state_val_28875 = (state_28874[(1)]);
if((state_val_28875 === (1))){
var state_28874__$1 = state_28874;
var statearr_28876_31960 = state_28874__$1;
(statearr_28876_31960[(2)] = null);

(statearr_28876_31960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (2))){
var state_28874__$1 = state_28874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28874__$1,(4),jobs);
} else {
if((state_val_28875 === (3))){
var inst_28872 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28874__$1,inst_28872);
} else {
if((state_val_28875 === (4))){
var inst_28864 = (state_28874[(2)]);
var inst_28865 = async(inst_28864);
var state_28874__$1 = state_28874;
if(cljs.core.truth_(inst_28865)){
var statearr_28877_31961 = state_28874__$1;
(statearr_28877_31961[(1)] = (5));

} else {
var statearr_28878_31962 = state_28874__$1;
(statearr_28878_31962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (5))){
var state_28874__$1 = state_28874;
var statearr_28879_31963 = state_28874__$1;
(statearr_28879_31963[(2)] = null);

(statearr_28879_31963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (6))){
var state_28874__$1 = state_28874;
var statearr_28880_31965 = state_28874__$1;
(statearr_28880_31965[(2)] = null);

(statearr_28880_31965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (7))){
var inst_28870 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
var statearr_28881_31967 = state_28874__$1;
(statearr_28881_31967[(2)] = inst_28870);

(statearr_28881_31967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31943,c__28292__auto___31959,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async))
;
return ((function (__31943,switch__27811__auto__,c__28292__auto___31959,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0 = (function (){
var statearr_28883 = [null,null,null,null,null,null,null];
(statearr_28883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__);

(statearr_28883[(1)] = (1));

return statearr_28883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1 = (function (state_28874){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_28874);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e28884){var ex__27815__auto__ = e28884;
var statearr_28885_31969 = state_28874;
(statearr_28885_31969[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_28874[(4)]))){
var statearr_28886_31970 = state_28874;
(statearr_28886_31970[(1)] = cljs.core.first((state_28874[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31971 = state_28874;
state_28874 = G__31971;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__ = function(state_28874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1.call(this,state_28874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__;
})()
;})(__31943,switch__27811__auto__,c__28292__auto___31959,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async))
})();
var state__28294__auto__ = (function (){var statearr_28888 = f__28293__auto__();
(statearr_28888[(6)] = c__28292__auto___31959);

return statearr_28888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
});})(__31943,c__28292__auto___31959,G__28815_31944,G__28815_31945__$1,n__5636__auto___31942,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28815_31945__$1)].join('')));

}

var G__31972 = (__31943 + (1));
__31943 = G__31972;
continue;
} else {
}
break;
}

var c__28292__auto___31973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_28915){
var state_val_28916 = (state_28915[(1)]);
if((state_val_28916 === (7))){
var inst_28911 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
var statearr_28917_31974 = state_28915__$1;
(statearr_28917_31974[(2)] = inst_28911);

(statearr_28917_31974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (1))){
var state_28915__$1 = state_28915;
var statearr_28918_31975 = state_28915__$1;
(statearr_28918_31975[(2)] = null);

(statearr_28918_31975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (4))){
var inst_28893 = (state_28915[(7)]);
var inst_28893__$1 = (state_28915[(2)]);
var inst_28894 = (inst_28893__$1 == null);
var state_28915__$1 = (function (){var statearr_28919 = state_28915;
(statearr_28919[(7)] = inst_28893__$1);

return statearr_28919;
})();
if(cljs.core.truth_(inst_28894)){
var statearr_28920_31976 = state_28915__$1;
(statearr_28920_31976[(1)] = (5));

} else {
var statearr_28921_31977 = state_28915__$1;
(statearr_28921_31977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (6))){
var inst_28898 = (state_28915[(8)]);
var inst_28893 = (state_28915[(7)]);
var inst_28898__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28902 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28903 = [inst_28893,inst_28898__$1];
var inst_28904 = (new cljs.core.PersistentVector(null,2,(5),inst_28902,inst_28903,null));
var state_28915__$1 = (function (){var statearr_28922 = state_28915;
(statearr_28922[(8)] = inst_28898__$1);

return statearr_28922;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28915__$1,(8),jobs,inst_28904);
} else {
if((state_val_28916 === (3))){
var inst_28913 = (state_28915[(2)]);
var state_28915__$1 = state_28915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28915__$1,inst_28913);
} else {
if((state_val_28916 === (2))){
var state_28915__$1 = state_28915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28915__$1,(4),from);
} else {
if((state_val_28916 === (9))){
var inst_28908 = (state_28915[(2)]);
var state_28915__$1 = (function (){var statearr_28923 = state_28915;
(statearr_28923[(9)] = inst_28908);

return statearr_28923;
})();
var statearr_28925_31978 = state_28915__$1;
(statearr_28925_31978[(2)] = null);

(statearr_28925_31978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (5))){
var inst_28896 = cljs.core.async.close_BANG_(jobs);
var state_28915__$1 = state_28915;
var statearr_28926_31980 = state_28915__$1;
(statearr_28926_31980[(2)] = inst_28896);

(statearr_28926_31980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28916 === (8))){
var inst_28898 = (state_28915[(8)]);
var inst_28906 = (state_28915[(2)]);
var state_28915__$1 = (function (){var statearr_28927 = state_28915;
(statearr_28927[(10)] = inst_28906);

return statearr_28927;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28915__$1,(9),results,inst_28898);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0 = (function (){
var statearr_28928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__);

(statearr_28928[(1)] = (1));

return statearr_28928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1 = (function (state_28915){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_28915);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e28929){var ex__27815__auto__ = e28929;
var statearr_28930_31982 = state_28915;
(statearr_28930_31982[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_28915[(4)]))){
var statearr_28931_31983 = state_28915;
(statearr_28931_31983[(1)] = cljs.core.first((state_28915[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31984 = state_28915;
state_28915 = G__31984;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__ = function(state_28915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1.call(this,state_28915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_28937 = f__28293__auto__();
(statearr_28937[(6)] = c__28292__auto___31973);

return statearr_28937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


var c__28292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_28976){
var state_val_28977 = (state_28976[(1)]);
if((state_val_28977 === (7))){
var inst_28972 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
var statearr_28978_31985 = state_28976__$1;
(statearr_28978_31985[(2)] = inst_28972);

(statearr_28978_31985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (20))){
var state_28976__$1 = state_28976;
var statearr_28979_31986 = state_28976__$1;
(statearr_28979_31986[(2)] = null);

(statearr_28979_31986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (1))){
var state_28976__$1 = state_28976;
var statearr_28980_31987 = state_28976__$1;
(statearr_28980_31987[(2)] = null);

(statearr_28980_31987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (4))){
var inst_28940 = (state_28976[(7)]);
var inst_28940__$1 = (state_28976[(2)]);
var inst_28941 = (inst_28940__$1 == null);
var state_28976__$1 = (function (){var statearr_28981 = state_28976;
(statearr_28981[(7)] = inst_28940__$1);

return statearr_28981;
})();
if(cljs.core.truth_(inst_28941)){
var statearr_28982_31991 = state_28976__$1;
(statearr_28982_31991[(1)] = (5));

} else {
var statearr_28983_31992 = state_28976__$1;
(statearr_28983_31992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (15))){
var inst_28953 = (state_28976[(8)]);
var state_28976__$1 = state_28976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28976__$1,(18),to,inst_28953);
} else {
if((state_val_28977 === (21))){
var inst_28967 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
var statearr_28986_31994 = state_28976__$1;
(statearr_28986_31994[(2)] = inst_28967);

(statearr_28986_31994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (13))){
var inst_28969 = (state_28976[(2)]);
var state_28976__$1 = (function (){var statearr_28987 = state_28976;
(statearr_28987[(9)] = inst_28969);

return statearr_28987;
})();
var statearr_28988_31995 = state_28976__$1;
(statearr_28988_31995[(2)] = null);

(statearr_28988_31995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (6))){
var inst_28940 = (state_28976[(7)]);
var state_28976__$1 = state_28976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28976__$1,(11),inst_28940);
} else {
if((state_val_28977 === (17))){
var inst_28961 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
if(cljs.core.truth_(inst_28961)){
var statearr_28989_31996 = state_28976__$1;
(statearr_28989_31996[(1)] = (19));

} else {
var statearr_28990_31997 = state_28976__$1;
(statearr_28990_31997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (3))){
var inst_28974 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28976__$1,inst_28974);
} else {
if((state_val_28977 === (12))){
var inst_28950 = (state_28976[(10)]);
var state_28976__$1 = state_28976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28976__$1,(14),inst_28950);
} else {
if((state_val_28977 === (2))){
var state_28976__$1 = state_28976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28976__$1,(4),results);
} else {
if((state_val_28977 === (19))){
var state_28976__$1 = state_28976;
var statearr_28991_32002 = state_28976__$1;
(statearr_28991_32002[(2)] = null);

(statearr_28991_32002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (11))){
var inst_28950 = (state_28976[(2)]);
var state_28976__$1 = (function (){var statearr_28992 = state_28976;
(statearr_28992[(10)] = inst_28950);

return statearr_28992;
})();
var statearr_28993_32003 = state_28976__$1;
(statearr_28993_32003[(2)] = null);

(statearr_28993_32003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (9))){
var state_28976__$1 = state_28976;
var statearr_28994_32004 = state_28976__$1;
(statearr_28994_32004[(2)] = null);

(statearr_28994_32004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (5))){
var state_28976__$1 = state_28976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28995_32005 = state_28976__$1;
(statearr_28995_32005[(1)] = (8));

} else {
var statearr_28996_32006 = state_28976__$1;
(statearr_28996_32006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (14))){
var inst_28955 = (state_28976[(11)]);
var inst_28953 = (state_28976[(8)]);
var inst_28953__$1 = (state_28976[(2)]);
var inst_28954 = (inst_28953__$1 == null);
var inst_28955__$1 = cljs.core.not(inst_28954);
var state_28976__$1 = (function (){var statearr_28997 = state_28976;
(statearr_28997[(11)] = inst_28955__$1);

(statearr_28997[(8)] = inst_28953__$1);

return statearr_28997;
})();
if(inst_28955__$1){
var statearr_28998_32007 = state_28976__$1;
(statearr_28998_32007[(1)] = (15));

} else {
var statearr_28999_32008 = state_28976__$1;
(statearr_28999_32008[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (16))){
var inst_28955 = (state_28976[(11)]);
var state_28976__$1 = state_28976;
var statearr_29001_32009 = state_28976__$1;
(statearr_29001_32009[(2)] = inst_28955);

(statearr_29001_32009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (10))){
var inst_28947 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
var statearr_29002_32010 = state_28976__$1;
(statearr_29002_32010[(2)] = inst_28947);

(statearr_29002_32010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (18))){
var inst_28958 = (state_28976[(2)]);
var state_28976__$1 = state_28976;
var statearr_29003_32011 = state_28976__$1;
(statearr_29003_32011[(2)] = inst_28958);

(statearr_29003_32011[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28977 === (8))){
var inst_28944 = cljs.core.async.close_BANG_(to);
var state_28976__$1 = state_28976;
var statearr_29004_32016 = state_28976__$1;
(statearr_29004_32016[(2)] = inst_28944);

(statearr_29004_32016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0 = (function (){
var statearr_29005 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__);

(statearr_29005[(1)] = (1));

return statearr_29005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1 = (function (state_28976){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_28976);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e29008){var ex__27815__auto__ = e29008;
var statearr_29009_32017 = state_28976;
(statearr_29009_32017[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_28976[(4)]))){
var statearr_29010_32021 = state_28976;
(statearr_29010_32021[(1)] = cljs.core.first((state_28976[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32028 = state_28976;
state_28976 = G__32028;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__ = function(state_28976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1.call(this,state_28976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27812__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_29012 = f__28293__auto__();
(statearr_29012[(6)] = c__28292__auto__);

return statearr_29012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));

return c__28292__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29014 = arguments.length;
switch (G__29014) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29018 = arguments.length;
switch (G__29018) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29023 = arguments.length;
switch (G__29023) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28292__auto___32067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_29054){
var state_val_29055 = (state_29054[(1)]);
if((state_val_29055 === (7))){
var inst_29050 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29056_32068 = state_29054__$1;
(statearr_29056_32068[(2)] = inst_29050);

(statearr_29056_32068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (1))){
var state_29054__$1 = state_29054;
var statearr_29057_32069 = state_29054__$1;
(statearr_29057_32069[(2)] = null);

(statearr_29057_32069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (4))){
var inst_29031 = (state_29054[(7)]);
var inst_29031__$1 = (state_29054[(2)]);
var inst_29032 = (inst_29031__$1 == null);
var state_29054__$1 = (function (){var statearr_29058 = state_29054;
(statearr_29058[(7)] = inst_29031__$1);

return statearr_29058;
})();
if(cljs.core.truth_(inst_29032)){
var statearr_29062_32071 = state_29054__$1;
(statearr_29062_32071[(1)] = (5));

} else {
var statearr_29065_32072 = state_29054__$1;
(statearr_29065_32072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (13))){
var state_29054__$1 = state_29054;
var statearr_29067_32077 = state_29054__$1;
(statearr_29067_32077[(2)] = null);

(statearr_29067_32077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (6))){
var inst_29031 = (state_29054[(7)]);
var inst_29037 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29031) : p.call(null,inst_29031));
var state_29054__$1 = state_29054;
if(cljs.core.truth_(inst_29037)){
var statearr_29069_32084 = state_29054__$1;
(statearr_29069_32084[(1)] = (9));

} else {
var statearr_29070_32085 = state_29054__$1;
(statearr_29070_32085[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (3))){
var inst_29052 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29054__$1,inst_29052);
} else {
if((state_val_29055 === (12))){
var state_29054__$1 = state_29054;
var statearr_29075_32086 = state_29054__$1;
(statearr_29075_32086[(2)] = null);

(statearr_29075_32086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (2))){
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29054__$1,(4),ch);
} else {
if((state_val_29055 === (11))){
var inst_29031 = (state_29054[(7)]);
var inst_29041 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29054__$1,(8),inst_29041,inst_29031);
} else {
if((state_val_29055 === (9))){
var state_29054__$1 = state_29054;
var statearr_29079_32087 = state_29054__$1;
(statearr_29079_32087[(2)] = tc);

(statearr_29079_32087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (5))){
var inst_29034 = cljs.core.async.close_BANG_(tc);
var inst_29035 = cljs.core.async.close_BANG_(fc);
var state_29054__$1 = (function (){var statearr_29080 = state_29054;
(statearr_29080[(8)] = inst_29034);

return statearr_29080;
})();
var statearr_29083_32089 = state_29054__$1;
(statearr_29083_32089[(2)] = inst_29035);

(statearr_29083_32089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (14))){
var inst_29048 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
var statearr_29086_32090 = state_29054__$1;
(statearr_29086_32090[(2)] = inst_29048);

(statearr_29086_32090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (10))){
var state_29054__$1 = state_29054;
var statearr_29087_32091 = state_29054__$1;
(statearr_29087_32091[(2)] = fc);

(statearr_29087_32091[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29055 === (8))){
var inst_29043 = (state_29054[(2)]);
var state_29054__$1 = state_29054;
if(cljs.core.truth_(inst_29043)){
var statearr_29089_32093 = state_29054__$1;
(statearr_29089_32093[(1)] = (12));

} else {
var statearr_29091_32094 = state_29054__$1;
(statearr_29091_32094[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27812__auto__ = null;
var cljs$core$async$state_machine__27812__auto____0 = (function (){
var statearr_29098 = [null,null,null,null,null,null,null,null,null];
(statearr_29098[(0)] = cljs$core$async$state_machine__27812__auto__);

(statearr_29098[(1)] = (1));

return statearr_29098;
});
var cljs$core$async$state_machine__27812__auto____1 = (function (state_29054){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_29054);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e29100){var ex__27815__auto__ = e29100;
var statearr_29102_32095 = state_29054;
(statearr_29102_32095[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_29054[(4)]))){
var statearr_29105_32096 = state_29054;
(statearr_29105_32096[(1)] = cljs.core.first((state_29054[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32097 = state_29054;
state_29054 = G__32097;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$state_machine__27812__auto__ = function(state_29054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27812__auto____1.call(this,state_29054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27812__auto____0;
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27812__auto____1;
return cljs$core$async$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_29110 = f__28293__auto__();
(statearr_29110[(6)] = c__28292__auto___32067);

return statearr_29110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_29146){
var state_val_29147 = (state_29146[(1)]);
if((state_val_29147 === (7))){
var inst_29141 = (state_29146[(2)]);
var state_29146__$1 = state_29146;
var statearr_29157_32098 = state_29146__$1;
(statearr_29157_32098[(2)] = inst_29141);

(statearr_29157_32098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (1))){
var inst_29119 = init;
var inst_29120 = inst_29119;
var state_29146__$1 = (function (){var statearr_29165 = state_29146;
(statearr_29165[(7)] = inst_29120);

return statearr_29165;
})();
var statearr_29167_32099 = state_29146__$1;
(statearr_29167_32099[(2)] = null);

(statearr_29167_32099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (4))){
var inst_29123 = (state_29146[(8)]);
var inst_29123__$1 = (state_29146[(2)]);
var inst_29124 = (inst_29123__$1 == null);
var state_29146__$1 = (function (){var statearr_29172 = state_29146;
(statearr_29172[(8)] = inst_29123__$1);

return statearr_29172;
})();
if(cljs.core.truth_(inst_29124)){
var statearr_29174_32101 = state_29146__$1;
(statearr_29174_32101[(1)] = (5));

} else {
var statearr_29175_32102 = state_29146__$1;
(statearr_29175_32102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (6))){
var inst_29123 = (state_29146[(8)]);
var inst_29127 = (state_29146[(9)]);
var inst_29120 = (state_29146[(7)]);
var inst_29127__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29120,inst_29123) : f.call(null,inst_29120,inst_29123));
var inst_29132 = cljs.core.reduced_QMARK_(inst_29127__$1);
var state_29146__$1 = (function (){var statearr_29176 = state_29146;
(statearr_29176[(9)] = inst_29127__$1);

return statearr_29176;
})();
if(inst_29132){
var statearr_29181_32104 = state_29146__$1;
(statearr_29181_32104[(1)] = (8));

} else {
var statearr_29182_32105 = state_29146__$1;
(statearr_29182_32105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (3))){
var inst_29143 = (state_29146[(2)]);
var state_29146__$1 = state_29146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29146__$1,inst_29143);
} else {
if((state_val_29147 === (2))){
var state_29146__$1 = state_29146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29146__$1,(4),ch);
} else {
if((state_val_29147 === (9))){
var inst_29127 = (state_29146[(9)]);
var inst_29120 = inst_29127;
var state_29146__$1 = (function (){var statearr_29194 = state_29146;
(statearr_29194[(7)] = inst_29120);

return statearr_29194;
})();
var statearr_29195_32106 = state_29146__$1;
(statearr_29195_32106[(2)] = null);

(statearr_29195_32106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (5))){
var inst_29120 = (state_29146[(7)]);
var state_29146__$1 = state_29146;
var statearr_29196_32107 = state_29146__$1;
(statearr_29196_32107[(2)] = inst_29120);

(statearr_29196_32107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (10))){
var inst_29139 = (state_29146[(2)]);
var state_29146__$1 = state_29146;
var statearr_29199_32108 = state_29146__$1;
(statearr_29199_32108[(2)] = inst_29139);

(statearr_29199_32108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29147 === (8))){
var inst_29127 = (state_29146[(9)]);
var inst_29135 = cljs.core.deref(inst_29127);
var state_29146__$1 = state_29146;
var statearr_29202_32109 = state_29146__$1;
(statearr_29202_32109[(2)] = inst_29135);

(statearr_29202_32109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27812__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27812__auto____0 = (function (){
var statearr_29207 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29207[(0)] = cljs$core$async$reduce_$_state_machine__27812__auto__);

(statearr_29207[(1)] = (1));

return statearr_29207;
});
var cljs$core$async$reduce_$_state_machine__27812__auto____1 = (function (state_29146){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_29146);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e29209){var ex__27815__auto__ = e29209;
var statearr_29210_32110 = state_29146;
(statearr_29210_32110[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_29146[(4)]))){
var statearr_29211_32111 = state_29146;
(statearr_29211_32111[(1)] = cljs.core.first((state_29146[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32112 = state_29146;
state_29146 = G__32112;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27812__auto__ = function(state_29146){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27812__auto____1.call(this,state_29146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27812__auto____0;
cljs$core$async$reduce_$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27812__auto____1;
return cljs$core$async$reduce_$_state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_29216 = f__28293__auto__();
(statearr_29216[(6)] = c__28292__auto__);

return statearr_29216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));

return c__28292__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_29247){
var state_val_29248 = (state_29247[(1)]);
if((state_val_29248 === (1))){
var inst_29240 = cljs.core.async.reduce(f__$1,init,ch);
var state_29247__$1 = state_29247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29247__$1,(2),inst_29240);
} else {
if((state_val_29248 === (2))){
var inst_29242 = (state_29247[(2)]);
var inst_29245 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29242) : f__$1.call(null,inst_29242));
var state_29247__$1 = state_29247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29247__$1,inst_29245);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27812__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27812__auto____0 = (function (){
var statearr_29256 = [null,null,null,null,null,null,null];
(statearr_29256[(0)] = cljs$core$async$transduce_$_state_machine__27812__auto__);

(statearr_29256[(1)] = (1));

return statearr_29256;
});
var cljs$core$async$transduce_$_state_machine__27812__auto____1 = (function (state_29247){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_29247);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e29257){var ex__27815__auto__ = e29257;
var statearr_29258_32123 = state_29247;
(statearr_29258_32123[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_29247[(4)]))){
var statearr_29259_32124 = state_29247;
(statearr_29259_32124[(1)] = cljs.core.first((state_29247[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32125 = state_29247;
state_29247 = G__32125;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27812__auto__ = function(state_29247){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27812__auto____1.call(this,state_29247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27812__auto____0;
cljs$core$async$transduce_$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27812__auto____1;
return cljs$core$async$transduce_$_state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_29262 = f__28293__auto__();
(statearr_29262[(6)] = c__28292__auto__);

return statearr_29262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));

return c__28292__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__29278 = arguments.length;
switch (G__29278) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_29337){
var state_val_29338 = (state_29337[(1)]);
if((state_val_29338 === (7))){
var inst_29318 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29345_32133 = state_29337__$1;
(statearr_29345_32133[(2)] = inst_29318);

(statearr_29345_32133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (1))){
var inst_29295 = cljs.core.seq(coll);
var inst_29313 = inst_29295;
var state_29337__$1 = (function (){var statearr_29350 = state_29337;
(statearr_29350[(7)] = inst_29313);

return statearr_29350;
})();
var statearr_29351_32134 = state_29337__$1;
(statearr_29351_32134[(2)] = null);

(statearr_29351_32134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (4))){
var inst_29313 = (state_29337[(7)]);
var inst_29316 = cljs.core.first(inst_29313);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29337__$1,(7),ch,inst_29316);
} else {
if((state_val_29338 === (13))){
var inst_29330 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29352_32138 = state_29337__$1;
(statearr_29352_32138[(2)] = inst_29330);

(statearr_29352_32138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (6))){
var inst_29321 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
if(cljs.core.truth_(inst_29321)){
var statearr_29356_32139 = state_29337__$1;
(statearr_29356_32139[(1)] = (8));

} else {
var statearr_29357_32140 = state_29337__$1;
(statearr_29357_32140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (3))){
var inst_29334 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29337__$1,inst_29334);
} else {
if((state_val_29338 === (12))){
var state_29337__$1 = state_29337;
var statearr_29360_32141 = state_29337__$1;
(statearr_29360_32141[(2)] = null);

(statearr_29360_32141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (2))){
var inst_29313 = (state_29337[(7)]);
var state_29337__$1 = state_29337;
if(cljs.core.truth_(inst_29313)){
var statearr_29362_32142 = state_29337__$1;
(statearr_29362_32142[(1)] = (4));

} else {
var statearr_29366_32143 = state_29337__$1;
(statearr_29366_32143[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (11))){
var inst_29327 = cljs.core.async.close_BANG_(ch);
var state_29337__$1 = state_29337;
var statearr_29367_32149 = state_29337__$1;
(statearr_29367_32149[(2)] = inst_29327);

(statearr_29367_32149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (9))){
var state_29337__$1 = state_29337;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29371_32151 = state_29337__$1;
(statearr_29371_32151[(1)] = (11));

} else {
var statearr_29373_32152 = state_29337__$1;
(statearr_29373_32152[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (5))){
var inst_29313 = (state_29337[(7)]);
var state_29337__$1 = state_29337;
var statearr_29375_32156 = state_29337__$1;
(statearr_29375_32156[(2)] = inst_29313);

(statearr_29375_32156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (10))){
var inst_29332 = (state_29337[(2)]);
var state_29337__$1 = state_29337;
var statearr_29376_32157 = state_29337__$1;
(statearr_29376_32157[(2)] = inst_29332);

(statearr_29376_32157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29338 === (8))){
var inst_29313 = (state_29337[(7)]);
var inst_29323 = cljs.core.next(inst_29313);
var inst_29313__$1 = inst_29323;
var state_29337__$1 = (function (){var statearr_29377 = state_29337;
(statearr_29377[(7)] = inst_29313__$1);

return statearr_29377;
})();
var statearr_29378_32158 = state_29337__$1;
(statearr_29378_32158[(2)] = null);

(statearr_29378_32158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27812__auto__ = null;
var cljs$core$async$state_machine__27812__auto____0 = (function (){
var statearr_29381 = [null,null,null,null,null,null,null,null];
(statearr_29381[(0)] = cljs$core$async$state_machine__27812__auto__);

(statearr_29381[(1)] = (1));

return statearr_29381;
});
var cljs$core$async$state_machine__27812__auto____1 = (function (state_29337){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_29337);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e29382){var ex__27815__auto__ = e29382;
var statearr_29383_32160 = state_29337;
(statearr_29383_32160[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_29337[(4)]))){
var statearr_29385_32161 = state_29337;
(statearr_29385_32161[(1)] = cljs.core.first((state_29337[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32165 = state_29337;
state_29337 = G__32165;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$state_machine__27812__auto__ = function(state_29337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27812__auto____1.call(this,state_29337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27812__auto____0;
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27812__auto____1;
return cljs$core$async$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_29387 = f__28293__auto__();
(statearr_29387[(6)] = c__28292__auto__);

return statearr_29387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));

return c__28292__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29392 = arguments.length;
switch (G__29392) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32170 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32170(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32180 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32180(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32184 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32184(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32188 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32188(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29487 = (function (ch,cs,meta29488){
this.ch = ch;
this.cs = cs;
this.meta29488 = meta29488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29489,meta29488__$1){
var self__ = this;
var _29489__$1 = this;
return (new cljs.core.async.t_cljs$core$async29487(self__.ch,self__.cs,meta29488__$1));
}));

(cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29489){
var self__ = this;
var _29489__$1 = this;
return self__.meta29488;
}));

(cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29488","meta29488",1009571309,null)], null);
}));

(cljs.core.async.t_cljs$core$async29487.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29487");

(cljs.core.async.t_cljs$core$async29487.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29487");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29487.
 */
cljs.core.async.__GT_t_cljs$core$async29487 = (function cljs$core$async$__GT_t_cljs$core$async29487(ch,cs,meta29488){
return (new cljs.core.async.t_cljs$core$async29487(ch,cs,meta29488));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async29487(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28292__auto___32197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_29677){
var state_val_29678 = (state_29677[(1)]);
if((state_val_29678 === (7))){
var inst_29671 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29683_32198 = state_29677__$1;
(statearr_29683_32198[(2)] = inst_29671);

(statearr_29683_32198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (20))){
var inst_29572 = (state_29677[(7)]);
var inst_29584 = cljs.core.first(inst_29572);
var inst_29585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29584,(0),null);
var inst_29586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29584,(1),null);
var state_29677__$1 = (function (){var statearr_29684 = state_29677;
(statearr_29684[(8)] = inst_29585);

return statearr_29684;
})();
if(cljs.core.truth_(inst_29586)){
var statearr_29686_32199 = state_29677__$1;
(statearr_29686_32199[(1)] = (22));

} else {
var statearr_29687_32200 = state_29677__$1;
(statearr_29687_32200[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (27))){
var inst_29614 = (state_29677[(9)]);
var inst_29616 = (state_29677[(10)]);
var inst_29540 = (state_29677[(11)]);
var inst_29621 = (state_29677[(12)]);
var inst_29621__$1 = cljs.core._nth(inst_29614,inst_29616);
var inst_29622 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29621__$1,inst_29540,done);
var state_29677__$1 = (function (){var statearr_29689 = state_29677;
(statearr_29689[(12)] = inst_29621__$1);

return statearr_29689;
})();
if(cljs.core.truth_(inst_29622)){
var statearr_29690_32201 = state_29677__$1;
(statearr_29690_32201[(1)] = (30));

} else {
var statearr_29691_32202 = state_29677__$1;
(statearr_29691_32202[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (1))){
var state_29677__$1 = state_29677;
var statearr_29697_32203 = state_29677__$1;
(statearr_29697_32203[(2)] = null);

(statearr_29697_32203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (24))){
var inst_29572 = (state_29677[(7)]);
var inst_29591 = (state_29677[(2)]);
var inst_29592 = cljs.core.next(inst_29572);
var inst_29549 = inst_29592;
var inst_29550 = null;
var inst_29551 = (0);
var inst_29552 = (0);
var state_29677__$1 = (function (){var statearr_29703 = state_29677;
(statearr_29703[(13)] = inst_29550);

(statearr_29703[(14)] = inst_29549);

(statearr_29703[(15)] = inst_29552);

(statearr_29703[(16)] = inst_29591);

(statearr_29703[(17)] = inst_29551);

return statearr_29703;
})();
var statearr_29704_32204 = state_29677__$1;
(statearr_29704_32204[(2)] = null);

(statearr_29704_32204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (39))){
var state_29677__$1 = state_29677;
var statearr_29709_32205 = state_29677__$1;
(statearr_29709_32205[(2)] = null);

(statearr_29709_32205[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (4))){
var inst_29540 = (state_29677[(11)]);
var inst_29540__$1 = (state_29677[(2)]);
var inst_29541 = (inst_29540__$1 == null);
var state_29677__$1 = (function (){var statearr_29710 = state_29677;
(statearr_29710[(11)] = inst_29540__$1);

return statearr_29710;
})();
if(cljs.core.truth_(inst_29541)){
var statearr_29711_32206 = state_29677__$1;
(statearr_29711_32206[(1)] = (5));

} else {
var statearr_29712_32207 = state_29677__$1;
(statearr_29712_32207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (15))){
var inst_29550 = (state_29677[(13)]);
var inst_29549 = (state_29677[(14)]);
var inst_29552 = (state_29677[(15)]);
var inst_29551 = (state_29677[(17)]);
var inst_29568 = (state_29677[(2)]);
var inst_29569 = (inst_29552 + (1));
var tmp29705 = inst_29550;
var tmp29706 = inst_29549;
var tmp29707 = inst_29551;
var inst_29549__$1 = tmp29706;
var inst_29550__$1 = tmp29705;
var inst_29551__$1 = tmp29707;
var inst_29552__$1 = inst_29569;
var state_29677__$1 = (function (){var statearr_29713 = state_29677;
(statearr_29713[(13)] = inst_29550__$1);

(statearr_29713[(14)] = inst_29549__$1);

(statearr_29713[(15)] = inst_29552__$1);

(statearr_29713[(18)] = inst_29568);

(statearr_29713[(17)] = inst_29551__$1);

return statearr_29713;
})();
var statearr_29715_32208 = state_29677__$1;
(statearr_29715_32208[(2)] = null);

(statearr_29715_32208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (21))){
var inst_29595 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29720_32209 = state_29677__$1;
(statearr_29720_32209[(2)] = inst_29595);

(statearr_29720_32209[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (31))){
var inst_29621 = (state_29677[(12)]);
var inst_29625 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29621);
var state_29677__$1 = state_29677;
var statearr_29723_32210 = state_29677__$1;
(statearr_29723_32210[(2)] = inst_29625);

(statearr_29723_32210[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (32))){
var inst_29615 = (state_29677[(19)]);
var inst_29614 = (state_29677[(9)]);
var inst_29613 = (state_29677[(20)]);
var inst_29616 = (state_29677[(10)]);
var inst_29627 = (state_29677[(2)]);
var inst_29628 = (inst_29616 + (1));
var tmp29717 = inst_29615;
var tmp29718 = inst_29614;
var tmp29719 = inst_29613;
var inst_29613__$1 = tmp29719;
var inst_29614__$1 = tmp29718;
var inst_29615__$1 = tmp29717;
var inst_29616__$1 = inst_29628;
var state_29677__$1 = (function (){var statearr_29724 = state_29677;
(statearr_29724[(19)] = inst_29615__$1);

(statearr_29724[(9)] = inst_29614__$1);

(statearr_29724[(20)] = inst_29613__$1);

(statearr_29724[(21)] = inst_29627);

(statearr_29724[(10)] = inst_29616__$1);

return statearr_29724;
})();
var statearr_29725_32213 = state_29677__$1;
(statearr_29725_32213[(2)] = null);

(statearr_29725_32213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (40))){
var inst_29644 = (state_29677[(22)]);
var inst_29648 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29644);
var state_29677__$1 = state_29677;
var statearr_29726_32214 = state_29677__$1;
(statearr_29726_32214[(2)] = inst_29648);

(statearr_29726_32214[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (33))){
var inst_29633 = (state_29677[(23)]);
var inst_29637 = cljs.core.chunked_seq_QMARK_(inst_29633);
var state_29677__$1 = state_29677;
if(inst_29637){
var statearr_29727_32215 = state_29677__$1;
(statearr_29727_32215[(1)] = (36));

} else {
var statearr_29728_32216 = state_29677__$1;
(statearr_29728_32216[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (13))){
var inst_29562 = (state_29677[(24)]);
var inst_29565 = cljs.core.async.close_BANG_(inst_29562);
var state_29677__$1 = state_29677;
var statearr_29734_32217 = state_29677__$1;
(statearr_29734_32217[(2)] = inst_29565);

(statearr_29734_32217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (22))){
var inst_29585 = (state_29677[(8)]);
var inst_29588 = cljs.core.async.close_BANG_(inst_29585);
var state_29677__$1 = state_29677;
var statearr_29736_32219 = state_29677__$1;
(statearr_29736_32219[(2)] = inst_29588);

(statearr_29736_32219[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (36))){
var inst_29633 = (state_29677[(23)]);
var inst_29639 = cljs.core.chunk_first(inst_29633);
var inst_29640 = cljs.core.chunk_rest(inst_29633);
var inst_29641 = cljs.core.count(inst_29639);
var inst_29613 = inst_29640;
var inst_29614 = inst_29639;
var inst_29615 = inst_29641;
var inst_29616 = (0);
var state_29677__$1 = (function (){var statearr_29738 = state_29677;
(statearr_29738[(19)] = inst_29615);

(statearr_29738[(9)] = inst_29614);

(statearr_29738[(20)] = inst_29613);

(statearr_29738[(10)] = inst_29616);

return statearr_29738;
})();
var statearr_29740_32220 = state_29677__$1;
(statearr_29740_32220[(2)] = null);

(statearr_29740_32220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (41))){
var inst_29633 = (state_29677[(23)]);
var inst_29650 = (state_29677[(2)]);
var inst_29651 = cljs.core.next(inst_29633);
var inst_29613 = inst_29651;
var inst_29614 = null;
var inst_29615 = (0);
var inst_29616 = (0);
var state_29677__$1 = (function (){var statearr_29745 = state_29677;
(statearr_29745[(19)] = inst_29615);

(statearr_29745[(9)] = inst_29614);

(statearr_29745[(20)] = inst_29613);

(statearr_29745[(25)] = inst_29650);

(statearr_29745[(10)] = inst_29616);

return statearr_29745;
})();
var statearr_29746_32224 = state_29677__$1;
(statearr_29746_32224[(2)] = null);

(statearr_29746_32224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (43))){
var state_29677__$1 = state_29677;
var statearr_29747_32228 = state_29677__$1;
(statearr_29747_32228[(2)] = null);

(statearr_29747_32228[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (29))){
var inst_29659 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29748_32229 = state_29677__$1;
(statearr_29748_32229[(2)] = inst_29659);

(statearr_29748_32229[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (44))){
var inst_29668 = (state_29677[(2)]);
var state_29677__$1 = (function (){var statearr_29749 = state_29677;
(statearr_29749[(26)] = inst_29668);

return statearr_29749;
})();
var statearr_29750_32231 = state_29677__$1;
(statearr_29750_32231[(2)] = null);

(statearr_29750_32231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (6))){
var inst_29605 = (state_29677[(27)]);
var inst_29604 = cljs.core.deref(cs);
var inst_29605__$1 = cljs.core.keys(inst_29604);
var inst_29606 = cljs.core.count(inst_29605__$1);
var inst_29607 = cljs.core.reset_BANG_(dctr,inst_29606);
var inst_29612 = cljs.core.seq(inst_29605__$1);
var inst_29613 = inst_29612;
var inst_29614 = null;
var inst_29615 = (0);
var inst_29616 = (0);
var state_29677__$1 = (function (){var statearr_29752 = state_29677;
(statearr_29752[(19)] = inst_29615);

(statearr_29752[(9)] = inst_29614);

(statearr_29752[(20)] = inst_29613);

(statearr_29752[(27)] = inst_29605__$1);

(statearr_29752[(10)] = inst_29616);

(statearr_29752[(28)] = inst_29607);

return statearr_29752;
})();
var statearr_29753_32235 = state_29677__$1;
(statearr_29753_32235[(2)] = null);

(statearr_29753_32235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (28))){
var inst_29613 = (state_29677[(20)]);
var inst_29633 = (state_29677[(23)]);
var inst_29633__$1 = cljs.core.seq(inst_29613);
var state_29677__$1 = (function (){var statearr_29754 = state_29677;
(statearr_29754[(23)] = inst_29633__$1);

return statearr_29754;
})();
if(inst_29633__$1){
var statearr_29755_32253 = state_29677__$1;
(statearr_29755_32253[(1)] = (33));

} else {
var statearr_29756_32254 = state_29677__$1;
(statearr_29756_32254[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (25))){
var inst_29615 = (state_29677[(19)]);
var inst_29616 = (state_29677[(10)]);
var inst_29618 = (inst_29616 < inst_29615);
var inst_29619 = inst_29618;
var state_29677__$1 = state_29677;
if(cljs.core.truth_(inst_29619)){
var statearr_29758_32257 = state_29677__$1;
(statearr_29758_32257[(1)] = (27));

} else {
var statearr_29759_32315 = state_29677__$1;
(statearr_29759_32315[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (34))){
var state_29677__$1 = state_29677;
var statearr_29764_32316 = state_29677__$1;
(statearr_29764_32316[(2)] = null);

(statearr_29764_32316[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (17))){
var state_29677__$1 = state_29677;
var statearr_29765_32322 = state_29677__$1;
(statearr_29765_32322[(2)] = null);

(statearr_29765_32322[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (3))){
var inst_29673 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29677__$1,inst_29673);
} else {
if((state_val_29678 === (12))){
var inst_29600 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29769_32326 = state_29677__$1;
(statearr_29769_32326[(2)] = inst_29600);

(statearr_29769_32326[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (2))){
var state_29677__$1 = state_29677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29677__$1,(4),ch);
} else {
if((state_val_29678 === (23))){
var state_29677__$1 = state_29677;
var statearr_29773_32327 = state_29677__$1;
(statearr_29773_32327[(2)] = null);

(statearr_29773_32327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (35))){
var inst_29657 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29775_32329 = state_29677__$1;
(statearr_29775_32329[(2)] = inst_29657);

(statearr_29775_32329[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (19))){
var inst_29572 = (state_29677[(7)]);
var inst_29576 = cljs.core.chunk_first(inst_29572);
var inst_29577 = cljs.core.chunk_rest(inst_29572);
var inst_29578 = cljs.core.count(inst_29576);
var inst_29549 = inst_29577;
var inst_29550 = inst_29576;
var inst_29551 = inst_29578;
var inst_29552 = (0);
var state_29677__$1 = (function (){var statearr_29776 = state_29677;
(statearr_29776[(13)] = inst_29550);

(statearr_29776[(14)] = inst_29549);

(statearr_29776[(15)] = inst_29552);

(statearr_29776[(17)] = inst_29551);

return statearr_29776;
})();
var statearr_29777_32330 = state_29677__$1;
(statearr_29777_32330[(2)] = null);

(statearr_29777_32330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (11))){
var inst_29549 = (state_29677[(14)]);
var inst_29572 = (state_29677[(7)]);
var inst_29572__$1 = cljs.core.seq(inst_29549);
var state_29677__$1 = (function (){var statearr_29779 = state_29677;
(statearr_29779[(7)] = inst_29572__$1);

return statearr_29779;
})();
if(inst_29572__$1){
var statearr_29782_32332 = state_29677__$1;
(statearr_29782_32332[(1)] = (16));

} else {
var statearr_29784_32338 = state_29677__$1;
(statearr_29784_32338[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (9))){
var inst_29602 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29786_32339 = state_29677__$1;
(statearr_29786_32339[(2)] = inst_29602);

(statearr_29786_32339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (5))){
var inst_29547 = cljs.core.deref(cs);
var inst_29548 = cljs.core.seq(inst_29547);
var inst_29549 = inst_29548;
var inst_29550 = null;
var inst_29551 = (0);
var inst_29552 = (0);
var state_29677__$1 = (function (){var statearr_29793 = state_29677;
(statearr_29793[(13)] = inst_29550);

(statearr_29793[(14)] = inst_29549);

(statearr_29793[(15)] = inst_29552);

(statearr_29793[(17)] = inst_29551);

return statearr_29793;
})();
var statearr_29794_32340 = state_29677__$1;
(statearr_29794_32340[(2)] = null);

(statearr_29794_32340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (14))){
var state_29677__$1 = state_29677;
var statearr_29795_32341 = state_29677__$1;
(statearr_29795_32341[(2)] = null);

(statearr_29795_32341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (45))){
var inst_29665 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29796_32342 = state_29677__$1;
(statearr_29796_32342[(2)] = inst_29665);

(statearr_29796_32342[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (26))){
var inst_29605 = (state_29677[(27)]);
var inst_29661 = (state_29677[(2)]);
var inst_29662 = cljs.core.seq(inst_29605);
var state_29677__$1 = (function (){var statearr_29797 = state_29677;
(statearr_29797[(29)] = inst_29661);

return statearr_29797;
})();
if(inst_29662){
var statearr_29798_32343 = state_29677__$1;
(statearr_29798_32343[(1)] = (42));

} else {
var statearr_29799_32344 = state_29677__$1;
(statearr_29799_32344[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (16))){
var inst_29572 = (state_29677[(7)]);
var inst_29574 = cljs.core.chunked_seq_QMARK_(inst_29572);
var state_29677__$1 = state_29677;
if(inst_29574){
var statearr_29801_32345 = state_29677__$1;
(statearr_29801_32345[(1)] = (19));

} else {
var statearr_29802_32346 = state_29677__$1;
(statearr_29802_32346[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (38))){
var inst_29654 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29805_32347 = state_29677__$1;
(statearr_29805_32347[(2)] = inst_29654);

(statearr_29805_32347[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (30))){
var state_29677__$1 = state_29677;
var statearr_29810_32348 = state_29677__$1;
(statearr_29810_32348[(2)] = null);

(statearr_29810_32348[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (10))){
var inst_29550 = (state_29677[(13)]);
var inst_29552 = (state_29677[(15)]);
var inst_29561 = cljs.core._nth(inst_29550,inst_29552);
var inst_29562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29561,(0),null);
var inst_29563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29561,(1),null);
var state_29677__$1 = (function (){var statearr_29811 = state_29677;
(statearr_29811[(24)] = inst_29562);

return statearr_29811;
})();
if(cljs.core.truth_(inst_29563)){
var statearr_29813_32349 = state_29677__$1;
(statearr_29813_32349[(1)] = (13));

} else {
var statearr_29814_32350 = state_29677__$1;
(statearr_29814_32350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (18))){
var inst_29598 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29815_32351 = state_29677__$1;
(statearr_29815_32351[(2)] = inst_29598);

(statearr_29815_32351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (42))){
var state_29677__$1 = state_29677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29677__$1,(45),dchan);
} else {
if((state_val_29678 === (37))){
var inst_29644 = (state_29677[(22)]);
var inst_29633 = (state_29677[(23)]);
var inst_29540 = (state_29677[(11)]);
var inst_29644__$1 = cljs.core.first(inst_29633);
var inst_29645 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29644__$1,inst_29540,done);
var state_29677__$1 = (function (){var statearr_29831 = state_29677;
(statearr_29831[(22)] = inst_29644__$1);

return statearr_29831;
})();
if(cljs.core.truth_(inst_29645)){
var statearr_29833_32352 = state_29677__$1;
(statearr_29833_32352[(1)] = (39));

} else {
var statearr_29834_32353 = state_29677__$1;
(statearr_29834_32353[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (8))){
var inst_29552 = (state_29677[(15)]);
var inst_29551 = (state_29677[(17)]);
var inst_29554 = (inst_29552 < inst_29551);
var inst_29555 = inst_29554;
var state_29677__$1 = state_29677;
if(cljs.core.truth_(inst_29555)){
var statearr_29835_32354 = state_29677__$1;
(statearr_29835_32354[(1)] = (10));

} else {
var statearr_29836_32355 = state_29677__$1;
(statearr_29836_32355[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__27812__auto__ = null;
var cljs$core$async$mult_$_state_machine__27812__auto____0 = (function (){
var statearr_29837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29837[(0)] = cljs$core$async$mult_$_state_machine__27812__auto__);

(statearr_29837[(1)] = (1));

return statearr_29837;
});
var cljs$core$async$mult_$_state_machine__27812__auto____1 = (function (state_29677){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_29677);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e29841){var ex__27815__auto__ = e29841;
var statearr_29842_32361 = state_29677;
(statearr_29842_32361[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_29677[(4)]))){
var statearr_29843_32362 = state_29677;
(statearr_29843_32362[(1)] = cljs.core.first((state_29677[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32363 = state_29677;
state_29677 = G__32363;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27812__auto__ = function(state_29677){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27812__auto____1.call(this,state_29677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27812__auto____0;
cljs$core$async$mult_$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27812__auto____1;
return cljs$core$async$mult_$_state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_29845 = f__28293__auto__();
(statearr_29845[(6)] = c__28292__auto___32197);

return statearr_29845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29856 = arguments.length;
switch (G__29856) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32377 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32377(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32384 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32384(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32391 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32391(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32399 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32399(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32400 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32400(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32403 = arguments.length;
var i__5770__auto___32404 = (0);
while(true){
if((i__5770__auto___32404 < len__5769__auto___32403)){
args__5775__auto__.push((arguments[i__5770__auto___32404]));

var G__32405 = (i__5770__auto___32404 + (1));
i__5770__auto___32404 = G__32405;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29900){
var map__29901 = p__29900;
var map__29901__$1 = cljs.core.__destructure_map(map__29901);
var opts = map__29901__$1;
var statearr_29902_32408 = state;
(statearr_29902_32408[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_29907_32422 = state;
(statearr_29907_32422[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_29908_32425 = state;
(statearr_29908_32425[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29894){
var G__29895 = cljs.core.first(seq29894);
var seq29894__$1 = cljs.core.next(seq29894);
var G__29896 = cljs.core.first(seq29894__$1);
var seq29894__$2 = cljs.core.next(seq29894__$1);
var G__29897 = cljs.core.first(seq29894__$2);
var seq29894__$3 = cljs.core.next(seq29894__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29895,G__29896,G__29897,seq29894__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29911 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29912){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29912 = meta29912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29913,meta29912__$1){
var self__ = this;
var _29913__$1 = this;
return (new cljs.core.async.t_cljs$core$async29911(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29912__$1));
}));

(cljs.core.async.t_cljs$core$async29911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29913){
var self__ = this;
var _29913__$1 = this;
return self__.meta29912;
}));

(cljs.core.async.t_cljs$core$async29911.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29911.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29911.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29911.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29911.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29911.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29911.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29911.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29912","meta29912",771040171,null)], null);
}));

(cljs.core.async.t_cljs$core$async29911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29911");

(cljs.core.async.t_cljs$core$async29911.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29911.
 */
cljs.core.async.__GT_t_cljs$core$async29911 = (function cljs$core$async$__GT_t_cljs$core$async29911(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29912){
return (new cljs.core.async.t_cljs$core$async29911(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29912));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async29911(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__28292__auto___32438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_30013){
var state_val_30014 = (state_30013[(1)]);
if((state_val_30014 === (7))){
var inst_29958 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
if(cljs.core.truth_(inst_29958)){
var statearr_30022_32439 = state_30013__$1;
(statearr_30022_32439[(1)] = (8));

} else {
var statearr_30025_32441 = state_30013__$1;
(statearr_30025_32441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (20))){
var inst_29951 = (state_30013[(7)]);
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30013__$1,(23),out,inst_29951);
} else {
if((state_val_30014 === (1))){
var inst_29934 = calc_state();
var inst_29935 = cljs.core.__destructure_map(inst_29934);
var inst_29936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29935,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29935,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29935,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29939 = inst_29934;
var state_30013__$1 = (function (){var statearr_30041 = state_30013;
(statearr_30041[(8)] = inst_29939);

(statearr_30041[(9)] = inst_29938);

(statearr_30041[(10)] = inst_29937);

(statearr_30041[(11)] = inst_29936);

return statearr_30041;
})();
var statearr_30045_32443 = state_30013__$1;
(statearr_30045_32443[(2)] = null);

(statearr_30045_32443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (24))){
var inst_29942 = (state_30013[(12)]);
var inst_29939 = inst_29942;
var state_30013__$1 = (function (){var statearr_30049 = state_30013;
(statearr_30049[(8)] = inst_29939);

return statearr_30049;
})();
var statearr_30050_32447 = state_30013__$1;
(statearr_30050_32447[(2)] = null);

(statearr_30050_32447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (4))){
var inst_29953 = (state_30013[(13)]);
var inst_29951 = (state_30013[(7)]);
var inst_29950 = (state_30013[(2)]);
var inst_29951__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29950,(0),null);
var inst_29952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29950,(1),null);
var inst_29953__$1 = (inst_29951__$1 == null);
var state_30013__$1 = (function (){var statearr_30052 = state_30013;
(statearr_30052[(13)] = inst_29953__$1);

(statearr_30052[(7)] = inst_29951__$1);

(statearr_30052[(14)] = inst_29952);

return statearr_30052;
})();
if(cljs.core.truth_(inst_29953__$1)){
var statearr_30053_32454 = state_30013__$1;
(statearr_30053_32454[(1)] = (5));

} else {
var statearr_30054_32455 = state_30013__$1;
(statearr_30054_32455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (15))){
var inst_29981 = (state_30013[(15)]);
var inst_29943 = (state_30013[(16)]);
var inst_29981__$1 = cljs.core.empty_QMARK_(inst_29943);
var state_30013__$1 = (function (){var statearr_30056 = state_30013;
(statearr_30056[(15)] = inst_29981__$1);

return statearr_30056;
})();
if(inst_29981__$1){
var statearr_30058_32456 = state_30013__$1;
(statearr_30058_32456[(1)] = (17));

} else {
var statearr_30061_32457 = state_30013__$1;
(statearr_30061_32457[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (21))){
var inst_29942 = (state_30013[(12)]);
var inst_29939 = inst_29942;
var state_30013__$1 = (function (){var statearr_30063 = state_30013;
(statearr_30063[(8)] = inst_29939);

return statearr_30063;
})();
var statearr_30064_32461 = state_30013__$1;
(statearr_30064_32461[(2)] = null);

(statearr_30064_32461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (13))){
var inst_29969 = (state_30013[(2)]);
var inst_29970 = calc_state();
var inst_29939 = inst_29970;
var state_30013__$1 = (function (){var statearr_30068 = state_30013;
(statearr_30068[(8)] = inst_29939);

(statearr_30068[(17)] = inst_29969);

return statearr_30068;
})();
var statearr_30070_32462 = state_30013__$1;
(statearr_30070_32462[(2)] = null);

(statearr_30070_32462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (22))){
var inst_30007 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30074_32463 = state_30013__$1;
(statearr_30074_32463[(2)] = inst_30007);

(statearr_30074_32463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (6))){
var inst_29952 = (state_30013[(14)]);
var inst_29956 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29952,change);
var state_30013__$1 = state_30013;
var statearr_30076_32464 = state_30013__$1;
(statearr_30076_32464[(2)] = inst_29956);

(statearr_30076_32464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (25))){
var state_30013__$1 = state_30013;
var statearr_30084_32466 = state_30013__$1;
(statearr_30084_32466[(2)] = null);

(statearr_30084_32466[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (17))){
var inst_29944 = (state_30013[(18)]);
var inst_29952 = (state_30013[(14)]);
var inst_29987 = (inst_29944.cljs$core$IFn$_invoke$arity$1 ? inst_29944.cljs$core$IFn$_invoke$arity$1(inst_29952) : inst_29944.call(null,inst_29952));
var inst_29988 = cljs.core.not(inst_29987);
var state_30013__$1 = state_30013;
var statearr_30086_32470 = state_30013__$1;
(statearr_30086_32470[(2)] = inst_29988);

(statearr_30086_32470[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (3))){
var inst_30011 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30013__$1,inst_30011);
} else {
if((state_val_30014 === (12))){
var state_30013__$1 = state_30013;
var statearr_30087_32471 = state_30013__$1;
(statearr_30087_32471[(2)] = null);

(statearr_30087_32471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (2))){
var inst_29939 = (state_30013[(8)]);
var inst_29942 = (state_30013[(12)]);
var inst_29942__$1 = cljs.core.__destructure_map(inst_29939);
var inst_29943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29942__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29942__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29942__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30013__$1 = (function (){var statearr_30103 = state_30013;
(statearr_30103[(18)] = inst_29944);

(statearr_30103[(12)] = inst_29942__$1);

(statearr_30103[(16)] = inst_29943);

return statearr_30103;
})();
return cljs.core.async.ioc_alts_BANG_(state_30013__$1,(4),inst_29945);
} else {
if((state_val_30014 === (23))){
var inst_29997 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
if(cljs.core.truth_(inst_29997)){
var statearr_30113_32473 = state_30013__$1;
(statearr_30113_32473[(1)] = (24));

} else {
var statearr_30116_32474 = state_30013__$1;
(statearr_30116_32474[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (19))){
var inst_29991 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30117_32476 = state_30013__$1;
(statearr_30117_32476[(2)] = inst_29991);

(statearr_30117_32476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (11))){
var inst_29952 = (state_30013[(14)]);
var inst_29966 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29952);
var state_30013__$1 = state_30013;
var statearr_30121_32477 = state_30013__$1;
(statearr_30121_32477[(2)] = inst_29966);

(statearr_30121_32477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (9))){
var inst_29943 = (state_30013[(16)]);
var inst_29977 = (state_30013[(19)]);
var inst_29952 = (state_30013[(14)]);
var inst_29977__$1 = (inst_29943.cljs$core$IFn$_invoke$arity$1 ? inst_29943.cljs$core$IFn$_invoke$arity$1(inst_29952) : inst_29943.call(null,inst_29952));
var state_30013__$1 = (function (){var statearr_30123 = state_30013;
(statearr_30123[(19)] = inst_29977__$1);

return statearr_30123;
})();
if(cljs.core.truth_(inst_29977__$1)){
var statearr_30124_32482 = state_30013__$1;
(statearr_30124_32482[(1)] = (14));

} else {
var statearr_30129_32483 = state_30013__$1;
(statearr_30129_32483[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (5))){
var inst_29953 = (state_30013[(13)]);
var state_30013__$1 = state_30013;
var statearr_30130_32484 = state_30013__$1;
(statearr_30130_32484[(2)] = inst_29953);

(statearr_30130_32484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (14))){
var inst_29977 = (state_30013[(19)]);
var state_30013__$1 = state_30013;
var statearr_30135_32491 = state_30013__$1;
(statearr_30135_32491[(2)] = inst_29977);

(statearr_30135_32491[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (26))){
var inst_30003 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30137_32492 = state_30013__$1;
(statearr_30137_32492[(2)] = inst_30003);

(statearr_30137_32492[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (16))){
var inst_29993 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
if(cljs.core.truth_(inst_29993)){
var statearr_30140_32493 = state_30013__$1;
(statearr_30140_32493[(1)] = (20));

} else {
var statearr_30141_32494 = state_30013__$1;
(statearr_30141_32494[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (10))){
var inst_30009 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30153_32495 = state_30013__$1;
(statearr_30153_32495[(2)] = inst_30009);

(statearr_30153_32495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (18))){
var inst_29981 = (state_30013[(15)]);
var state_30013__$1 = state_30013;
var statearr_30160_32496 = state_30013__$1;
(statearr_30160_32496[(2)] = inst_29981);

(statearr_30160_32496[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (8))){
var inst_29951 = (state_30013[(7)]);
var inst_29964 = (inst_29951 == null);
var state_30013__$1 = state_30013;
if(cljs.core.truth_(inst_29964)){
var statearr_30170_32497 = state_30013__$1;
(statearr_30170_32497[(1)] = (11));

} else {
var statearr_30173_32498 = state_30013__$1;
(statearr_30173_32498[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__27812__auto__ = null;
var cljs$core$async$mix_$_state_machine__27812__auto____0 = (function (){
var statearr_30188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30188[(0)] = cljs$core$async$mix_$_state_machine__27812__auto__);

(statearr_30188[(1)] = (1));

return statearr_30188;
});
var cljs$core$async$mix_$_state_machine__27812__auto____1 = (function (state_30013){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_30013);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e30191){var ex__27815__auto__ = e30191;
var statearr_30193_32499 = state_30013;
(statearr_30193_32499[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_30013[(4)]))){
var statearr_30194_32500 = state_30013;
(statearr_30194_32500[(1)] = cljs.core.first((state_30013[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32501 = state_30013;
state_30013 = G__32501;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27812__auto__ = function(state_30013){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27812__auto____1.call(this,state_30013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27812__auto____0;
cljs$core$async$mix_$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27812__auto____1;
return cljs$core$async$mix_$_state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_30197 = f__28293__auto__();
(statearr_30197[(6)] = c__28292__auto___32438);

return statearr_30197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32505 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32505(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32510 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32510(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32511 = (function() {
var G__32512 = null;
var G__32512__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32512__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32512 = function(p,v){
switch(arguments.length){
case 1:
return G__32512__1.call(this,p);
case 2:
return G__32512__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32512.cljs$core$IFn$_invoke$arity$1 = G__32512__1;
G__32512.cljs$core$IFn$_invoke$arity$2 = G__32512__2;
return G__32512;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30263 = arguments.length;
switch (G__30263) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32511(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32511(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30318 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30319){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30319 = meta30319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30320,meta30319__$1){
var self__ = this;
var _30320__$1 = this;
return (new cljs.core.async.t_cljs$core$async30318(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30319__$1));
}));

(cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30320){
var self__ = this;
var _30320__$1 = this;
return self__.meta30319;
}));

(cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30319","meta30319",682251172,null)], null);
}));

(cljs.core.async.t_cljs$core$async30318.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30318");

(cljs.core.async.t_cljs$core$async30318.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30318");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30318.
 */
cljs.core.async.__GT_t_cljs$core$async30318 = (function cljs$core$async$__GT_t_cljs$core$async30318(ch,topic_fn,buf_fn,mults,ensure_mult,meta30319){
return (new cljs.core.async.t_cljs$core$async30318(ch,topic_fn,buf_fn,mults,ensure_mult,meta30319));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30306 = arguments.length;
switch (G__30306) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30300_SHARP_){
if(cljs.core.truth_((p1__30300_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30300_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30300_SHARP_.call(null,topic)))){
return p1__30300_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30300_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async30318(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__28292__auto___32569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_30429){
var state_val_30430 = (state_30429[(1)]);
if((state_val_30430 === (7))){
var inst_30425 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30431_32570 = state_30429__$1;
(statearr_30431_32570[(2)] = inst_30425);

(statearr_30431_32570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (20))){
var state_30429__$1 = state_30429;
var statearr_30433_32571 = state_30429__$1;
(statearr_30433_32571[(2)] = null);

(statearr_30433_32571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (1))){
var state_30429__$1 = state_30429;
var statearr_30438_32577 = state_30429__$1;
(statearr_30438_32577[(2)] = null);

(statearr_30438_32577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (24))){
var inst_30407 = (state_30429[(7)]);
var inst_30417 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30407);
var state_30429__$1 = state_30429;
var statearr_30462_32578 = state_30429__$1;
(statearr_30462_32578[(2)] = inst_30417);

(statearr_30462_32578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (4))){
var inst_30356 = (state_30429[(8)]);
var inst_30356__$1 = (state_30429[(2)]);
var inst_30357 = (inst_30356__$1 == null);
var state_30429__$1 = (function (){var statearr_30466 = state_30429;
(statearr_30466[(8)] = inst_30356__$1);

return statearr_30466;
})();
if(cljs.core.truth_(inst_30357)){
var statearr_30467_32586 = state_30429__$1;
(statearr_30467_32586[(1)] = (5));

} else {
var statearr_30468_32587 = state_30429__$1;
(statearr_30468_32587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (15))){
var inst_30400 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30488_32588 = state_30429__$1;
(statearr_30488_32588[(2)] = inst_30400);

(statearr_30488_32588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (21))){
var inst_30422 = (state_30429[(2)]);
var state_30429__$1 = (function (){var statearr_30489 = state_30429;
(statearr_30489[(9)] = inst_30422);

return statearr_30489;
})();
var statearr_30490_32590 = state_30429__$1;
(statearr_30490_32590[(2)] = null);

(statearr_30490_32590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (13))){
var inst_30382 = (state_30429[(10)]);
var inst_30384 = cljs.core.chunked_seq_QMARK_(inst_30382);
var state_30429__$1 = state_30429;
if(inst_30384){
var statearr_30491_32595 = state_30429__$1;
(statearr_30491_32595[(1)] = (16));

} else {
var statearr_30492_32596 = state_30429__$1;
(statearr_30492_32596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (22))){
var inst_30413 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
if(cljs.core.truth_(inst_30413)){
var statearr_30493_32597 = state_30429__$1;
(statearr_30493_32597[(1)] = (23));

} else {
var statearr_30494_32598 = state_30429__$1;
(statearr_30494_32598[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (6))){
var inst_30409 = (state_30429[(11)]);
var inst_30407 = (state_30429[(7)]);
var inst_30356 = (state_30429[(8)]);
var inst_30407__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30356) : topic_fn.call(null,inst_30356));
var inst_30408 = cljs.core.deref(mults);
var inst_30409__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30408,inst_30407__$1);
var state_30429__$1 = (function (){var statearr_30495 = state_30429;
(statearr_30495[(11)] = inst_30409__$1);

(statearr_30495[(7)] = inst_30407__$1);

return statearr_30495;
})();
if(cljs.core.truth_(inst_30409__$1)){
var statearr_30496_32599 = state_30429__$1;
(statearr_30496_32599[(1)] = (19));

} else {
var statearr_30497_32600 = state_30429__$1;
(statearr_30497_32600[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (25))){
var inst_30419 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30499_32601 = state_30429__$1;
(statearr_30499_32601[(2)] = inst_30419);

(statearr_30499_32601[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (17))){
var inst_30382 = (state_30429[(10)]);
var inst_30391 = cljs.core.first(inst_30382);
var inst_30392 = cljs.core.async.muxch_STAR_(inst_30391);
var inst_30393 = cljs.core.async.close_BANG_(inst_30392);
var inst_30394 = cljs.core.next(inst_30382);
var inst_30366 = inst_30394;
var inst_30367 = null;
var inst_30368 = (0);
var inst_30369 = (0);
var state_30429__$1 = (function (){var statearr_30504 = state_30429;
(statearr_30504[(12)] = inst_30368);

(statearr_30504[(13)] = inst_30393);

(statearr_30504[(14)] = inst_30369);

(statearr_30504[(15)] = inst_30367);

(statearr_30504[(16)] = inst_30366);

return statearr_30504;
})();
var statearr_30505_32602 = state_30429__$1;
(statearr_30505_32602[(2)] = null);

(statearr_30505_32602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (3))){
var inst_30427 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30429__$1,inst_30427);
} else {
if((state_val_30430 === (12))){
var inst_30402 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30506_32607 = state_30429__$1;
(statearr_30506_32607[(2)] = inst_30402);

(statearr_30506_32607[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (2))){
var state_30429__$1 = state_30429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30429__$1,(4),ch);
} else {
if((state_val_30430 === (23))){
var state_30429__$1 = state_30429;
var statearr_30507_32608 = state_30429__$1;
(statearr_30507_32608[(2)] = null);

(statearr_30507_32608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (19))){
var inst_30409 = (state_30429[(11)]);
var inst_30356 = (state_30429[(8)]);
var inst_30411 = cljs.core.async.muxch_STAR_(inst_30409);
var state_30429__$1 = state_30429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30429__$1,(22),inst_30411,inst_30356);
} else {
if((state_val_30430 === (11))){
var inst_30382 = (state_30429[(10)]);
var inst_30366 = (state_30429[(16)]);
var inst_30382__$1 = cljs.core.seq(inst_30366);
var state_30429__$1 = (function (){var statearr_30516 = state_30429;
(statearr_30516[(10)] = inst_30382__$1);

return statearr_30516;
})();
if(inst_30382__$1){
var statearr_30519_32615 = state_30429__$1;
(statearr_30519_32615[(1)] = (13));

} else {
var statearr_30520_32616 = state_30429__$1;
(statearr_30520_32616[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (9))){
var inst_30404 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30522_32618 = state_30429__$1;
(statearr_30522_32618[(2)] = inst_30404);

(statearr_30522_32618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (5))){
var inst_30363 = cljs.core.deref(mults);
var inst_30364 = cljs.core.vals(inst_30363);
var inst_30365 = cljs.core.seq(inst_30364);
var inst_30366 = inst_30365;
var inst_30367 = null;
var inst_30368 = (0);
var inst_30369 = (0);
var state_30429__$1 = (function (){var statearr_30529 = state_30429;
(statearr_30529[(12)] = inst_30368);

(statearr_30529[(14)] = inst_30369);

(statearr_30529[(15)] = inst_30367);

(statearr_30529[(16)] = inst_30366);

return statearr_30529;
})();
var statearr_30534_32619 = state_30429__$1;
(statearr_30534_32619[(2)] = null);

(statearr_30534_32619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (14))){
var state_30429__$1 = state_30429;
var statearr_30546_32620 = state_30429__$1;
(statearr_30546_32620[(2)] = null);

(statearr_30546_32620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (16))){
var inst_30382 = (state_30429[(10)]);
var inst_30386 = cljs.core.chunk_first(inst_30382);
var inst_30387 = cljs.core.chunk_rest(inst_30382);
var inst_30388 = cljs.core.count(inst_30386);
var inst_30366 = inst_30387;
var inst_30367 = inst_30386;
var inst_30368 = inst_30388;
var inst_30369 = (0);
var state_30429__$1 = (function (){var statearr_30547 = state_30429;
(statearr_30547[(12)] = inst_30368);

(statearr_30547[(14)] = inst_30369);

(statearr_30547[(15)] = inst_30367);

(statearr_30547[(16)] = inst_30366);

return statearr_30547;
})();
var statearr_30548_32625 = state_30429__$1;
(statearr_30548_32625[(2)] = null);

(statearr_30548_32625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (10))){
var inst_30368 = (state_30429[(12)]);
var inst_30369 = (state_30429[(14)]);
var inst_30367 = (state_30429[(15)]);
var inst_30366 = (state_30429[(16)]);
var inst_30374 = cljs.core._nth(inst_30367,inst_30369);
var inst_30375 = cljs.core.async.muxch_STAR_(inst_30374);
var inst_30376 = cljs.core.async.close_BANG_(inst_30375);
var inst_30377 = (inst_30369 + (1));
var tmp30539 = inst_30368;
var tmp30540 = inst_30367;
var tmp30541 = inst_30366;
var inst_30366__$1 = tmp30541;
var inst_30367__$1 = tmp30540;
var inst_30368__$1 = tmp30539;
var inst_30369__$1 = inst_30377;
var state_30429__$1 = (function (){var statearr_30549 = state_30429;
(statearr_30549[(12)] = inst_30368__$1);

(statearr_30549[(17)] = inst_30376);

(statearr_30549[(14)] = inst_30369__$1);

(statearr_30549[(15)] = inst_30367__$1);

(statearr_30549[(16)] = inst_30366__$1);

return statearr_30549;
})();
var statearr_30553_32629 = state_30429__$1;
(statearr_30553_32629[(2)] = null);

(statearr_30553_32629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (18))){
var inst_30397 = (state_30429[(2)]);
var state_30429__$1 = state_30429;
var statearr_30554_32633 = state_30429__$1;
(statearr_30554_32633[(2)] = inst_30397);

(statearr_30554_32633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30430 === (8))){
var inst_30368 = (state_30429[(12)]);
var inst_30369 = (state_30429[(14)]);
var inst_30371 = (inst_30369 < inst_30368);
var inst_30372 = inst_30371;
var state_30429__$1 = state_30429;
if(cljs.core.truth_(inst_30372)){
var statearr_30555_32634 = state_30429__$1;
(statearr_30555_32634[(1)] = (10));

} else {
var statearr_30556_32638 = state_30429__$1;
(statearr_30556_32638[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27812__auto__ = null;
var cljs$core$async$state_machine__27812__auto____0 = (function (){
var statearr_30557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30557[(0)] = cljs$core$async$state_machine__27812__auto__);

(statearr_30557[(1)] = (1));

return statearr_30557;
});
var cljs$core$async$state_machine__27812__auto____1 = (function (state_30429){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_30429);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e30564){var ex__27815__auto__ = e30564;
var statearr_30565_32639 = state_30429;
(statearr_30565_32639[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_30429[(4)]))){
var statearr_30566_32640 = state_30429;
(statearr_30566_32640[(1)] = cljs.core.first((state_30429[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32641 = state_30429;
state_30429 = G__32641;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$state_machine__27812__auto__ = function(state_30429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27812__auto____1.call(this,state_30429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27812__auto____0;
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27812__auto____1;
return cljs$core$async$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_30567 = f__28293__auto__();
(statearr_30567[(6)] = c__28292__auto___32569);

return statearr_30567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30580 = arguments.length;
switch (G__30580) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30593 = arguments.length;
switch (G__30593) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30603 = arguments.length;
switch (G__30603) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__28292__auto___32652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_30682){
var state_val_30683 = (state_30682[(1)]);
if((state_val_30683 === (7))){
var state_30682__$1 = state_30682;
var statearr_30687_32654 = state_30682__$1;
(statearr_30687_32654[(2)] = null);

(statearr_30687_32654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (1))){
var state_30682__$1 = state_30682;
var statearr_30709_32655 = state_30682__$1;
(statearr_30709_32655[(2)] = null);

(statearr_30709_32655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (4))){
var inst_30607 = (state_30682[(7)]);
var inst_30606 = (state_30682[(8)]);
var inst_30609 = (inst_30607 < inst_30606);
var state_30682__$1 = state_30682;
if(cljs.core.truth_(inst_30609)){
var statearr_30743_32656 = state_30682__$1;
(statearr_30743_32656[(1)] = (6));

} else {
var statearr_30751_32657 = state_30682__$1;
(statearr_30751_32657[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (15))){
var inst_30668 = (state_30682[(9)]);
var inst_30673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30668);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30682__$1,(17),out,inst_30673);
} else {
if((state_val_30683 === (13))){
var inst_30668 = (state_30682[(9)]);
var inst_30668__$1 = (state_30682[(2)]);
var inst_30669 = cljs.core.some(cljs.core.nil_QMARK_,inst_30668__$1);
var state_30682__$1 = (function (){var statearr_30761 = state_30682;
(statearr_30761[(9)] = inst_30668__$1);

return statearr_30761;
})();
if(cljs.core.truth_(inst_30669)){
var statearr_30762_32658 = state_30682__$1;
(statearr_30762_32658[(1)] = (14));

} else {
var statearr_30763_32659 = state_30682__$1;
(statearr_30763_32659[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (6))){
var state_30682__$1 = state_30682;
var statearr_30764_32660 = state_30682__$1;
(statearr_30764_32660[(2)] = null);

(statearr_30764_32660[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (17))){
var inst_30675 = (state_30682[(2)]);
var state_30682__$1 = (function (){var statearr_30766 = state_30682;
(statearr_30766[(10)] = inst_30675);

return statearr_30766;
})();
var statearr_30767_32661 = state_30682__$1;
(statearr_30767_32661[(2)] = null);

(statearr_30767_32661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (3))){
var inst_30680 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30682__$1,inst_30680);
} else {
if((state_val_30683 === (12))){
var _ = (function (){var statearr_30769 = state_30682;
(statearr_30769[(4)] = cljs.core.rest((state_30682[(4)])));

return statearr_30769;
})();
var state_30682__$1 = state_30682;
var ex30765 = (state_30682__$1[(2)]);
var statearr_30771_32662 = state_30682__$1;
(statearr_30771_32662[(5)] = ex30765);


if((ex30765 instanceof Object)){
var statearr_30772_32663 = state_30682__$1;
(statearr_30772_32663[(1)] = (11));

(statearr_30772_32663[(5)] = null);

} else {
throw ex30765;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (2))){
var inst_30605 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30606 = cnt;
var inst_30607 = (0);
var state_30682__$1 = (function (){var statearr_30777 = state_30682;
(statearr_30777[(11)] = inst_30605);

(statearr_30777[(7)] = inst_30607);

(statearr_30777[(8)] = inst_30606);

return statearr_30777;
})();
var statearr_30778_32664 = state_30682__$1;
(statearr_30778_32664[(2)] = null);

(statearr_30778_32664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (11))){
var inst_30645 = (state_30682[(2)]);
var inst_30646 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30682__$1 = (function (){var statearr_30779 = state_30682;
(statearr_30779[(12)] = inst_30645);

return statearr_30779;
})();
var statearr_30780_32669 = state_30682__$1;
(statearr_30780_32669[(2)] = inst_30646);

(statearr_30780_32669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (9))){
var inst_30607 = (state_30682[(7)]);
var _ = (function (){var statearr_30781 = state_30682;
(statearr_30781[(4)] = cljs.core.cons((12),(state_30682[(4)])));

return statearr_30781;
})();
var inst_30654 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30607) : chs__$1.call(null,inst_30607));
var inst_30655 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30607) : done.call(null,inst_30607));
var inst_30656 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30654,inst_30655);
var ___$1 = (function (){var statearr_30783 = state_30682;
(statearr_30783[(4)] = cljs.core.rest((state_30682[(4)])));

return statearr_30783;
})();
var state_30682__$1 = state_30682;
var statearr_30785_32671 = state_30682__$1;
(statearr_30785_32671[(2)] = inst_30656);

(statearr_30785_32671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (5))){
var inst_30666 = (state_30682[(2)]);
var state_30682__$1 = (function (){var statearr_30786 = state_30682;
(statearr_30786[(13)] = inst_30666);

return statearr_30786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30682__$1,(13),dchan);
} else {
if((state_val_30683 === (14))){
var inst_30671 = cljs.core.async.close_BANG_(out);
var state_30682__$1 = state_30682;
var statearr_30788_32672 = state_30682__$1;
(statearr_30788_32672[(2)] = inst_30671);

(statearr_30788_32672[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (16))){
var inst_30678 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
var statearr_30789_32673 = state_30682__$1;
(statearr_30789_32673[(2)] = inst_30678);

(statearr_30789_32673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (10))){
var inst_30607 = (state_30682[(7)]);
var inst_30659 = (state_30682[(2)]);
var inst_30660 = (inst_30607 + (1));
var inst_30607__$1 = inst_30660;
var state_30682__$1 = (function (){var statearr_30790 = state_30682;
(statearr_30790[(14)] = inst_30659);

(statearr_30790[(7)] = inst_30607__$1);

return statearr_30790;
})();
var statearr_30791_32674 = state_30682__$1;
(statearr_30791_32674[(2)] = null);

(statearr_30791_32674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (8))){
var inst_30664 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
var statearr_30792_32675 = state_30682__$1;
(statearr_30792_32675[(2)] = inst_30664);

(statearr_30792_32675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27812__auto__ = null;
var cljs$core$async$state_machine__27812__auto____0 = (function (){
var statearr_30793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30793[(0)] = cljs$core$async$state_machine__27812__auto__);

(statearr_30793[(1)] = (1));

return statearr_30793;
});
var cljs$core$async$state_machine__27812__auto____1 = (function (state_30682){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_30682);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e30794){var ex__27815__auto__ = e30794;
var statearr_30795_32677 = state_30682;
(statearr_30795_32677[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_30682[(4)]))){
var statearr_30796_32678 = state_30682;
(statearr_30796_32678[(1)] = cljs.core.first((state_30682[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32679 = state_30682;
state_30682 = G__32679;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$state_machine__27812__auto__ = function(state_30682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27812__auto____1.call(this,state_30682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27812__auto____0;
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27812__auto____1;
return cljs$core$async$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_30800 = f__28293__auto__();
(statearr_30800[(6)] = c__28292__auto___32652);

return statearr_30800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30808 = arguments.length;
switch (G__30808) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28292__auto___32689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_30866){
var state_val_30867 = (state_30866[(1)]);
if((state_val_30867 === (7))){
var inst_30837 = (state_30866[(7)]);
var inst_30838 = (state_30866[(8)]);
var inst_30837__$1 = (state_30866[(2)]);
var inst_30838__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30837__$1,(0),null);
var inst_30839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30837__$1,(1),null);
var inst_30843 = (inst_30838__$1 == null);
var state_30866__$1 = (function (){var statearr_30872 = state_30866;
(statearr_30872[(7)] = inst_30837__$1);

(statearr_30872[(8)] = inst_30838__$1);

(statearr_30872[(9)] = inst_30839);

return statearr_30872;
})();
if(cljs.core.truth_(inst_30843)){
var statearr_30876_32691 = state_30866__$1;
(statearr_30876_32691[(1)] = (8));

} else {
var statearr_30877_32692 = state_30866__$1;
(statearr_30877_32692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (1))){
var inst_30826 = cljs.core.vec(chs);
var inst_30827 = inst_30826;
var state_30866__$1 = (function (){var statearr_30879 = state_30866;
(statearr_30879[(10)] = inst_30827);

return statearr_30879;
})();
var statearr_30902_32693 = state_30866__$1;
(statearr_30902_32693[(2)] = null);

(statearr_30902_32693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (4))){
var inst_30827 = (state_30866[(10)]);
var state_30866__$1 = state_30866;
return cljs.core.async.ioc_alts_BANG_(state_30866__$1,(7),inst_30827);
} else {
if((state_val_30867 === (6))){
var inst_30858 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30903_32694 = state_30866__$1;
(statearr_30903_32694[(2)] = inst_30858);

(statearr_30903_32694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (3))){
var inst_30860 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30866__$1,inst_30860);
} else {
if((state_val_30867 === (2))){
var inst_30827 = (state_30866[(10)]);
var inst_30829 = cljs.core.count(inst_30827);
var inst_30830 = (inst_30829 > (0));
var state_30866__$1 = state_30866;
if(cljs.core.truth_(inst_30830)){
var statearr_30905_32699 = state_30866__$1;
(statearr_30905_32699[(1)] = (4));

} else {
var statearr_30906_32700 = state_30866__$1;
(statearr_30906_32700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (11))){
var inst_30827 = (state_30866[(10)]);
var inst_30851 = (state_30866[(2)]);
var tmp30904 = inst_30827;
var inst_30827__$1 = tmp30904;
var state_30866__$1 = (function (){var statearr_30908 = state_30866;
(statearr_30908[(10)] = inst_30827__$1);

(statearr_30908[(11)] = inst_30851);

return statearr_30908;
})();
var statearr_30909_32701 = state_30866__$1;
(statearr_30909_32701[(2)] = null);

(statearr_30909_32701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (9))){
var inst_30838 = (state_30866[(8)]);
var state_30866__$1 = state_30866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30866__$1,(11),out,inst_30838);
} else {
if((state_val_30867 === (5))){
var inst_30856 = cljs.core.async.close_BANG_(out);
var state_30866__$1 = state_30866;
var statearr_30914_32703 = state_30866__$1;
(statearr_30914_32703[(2)] = inst_30856);

(statearr_30914_32703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (10))){
var inst_30854 = (state_30866[(2)]);
var state_30866__$1 = state_30866;
var statearr_30915_32704 = state_30866__$1;
(statearr_30915_32704[(2)] = inst_30854);

(statearr_30915_32704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30867 === (8))){
var inst_30837 = (state_30866[(7)]);
var inst_30838 = (state_30866[(8)]);
var inst_30827 = (state_30866[(10)]);
var inst_30839 = (state_30866[(9)]);
var inst_30846 = (function (){var cs = inst_30827;
var vec__30833 = inst_30837;
var v = inst_30838;
var c = inst_30839;
return (function (p1__30802_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30802_SHARP_);
});
})();
var inst_30847 = cljs.core.filterv(inst_30846,inst_30827);
var inst_30827__$1 = inst_30847;
var state_30866__$1 = (function (){var statearr_30916 = state_30866;
(statearr_30916[(10)] = inst_30827__$1);

return statearr_30916;
})();
var statearr_30917_32705 = state_30866__$1;
(statearr_30917_32705[(2)] = null);

(statearr_30917_32705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27812__auto__ = null;
var cljs$core$async$state_machine__27812__auto____0 = (function (){
var statearr_30918 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30918[(0)] = cljs$core$async$state_machine__27812__auto__);

(statearr_30918[(1)] = (1));

return statearr_30918;
});
var cljs$core$async$state_machine__27812__auto____1 = (function (state_30866){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_30866);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e30919){var ex__27815__auto__ = e30919;
var statearr_30920_32709 = state_30866;
(statearr_30920_32709[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_30866[(4)]))){
var statearr_30921_32710 = state_30866;
(statearr_30921_32710[(1)] = cljs.core.first((state_30866[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32711 = state_30866;
state_30866 = G__32711;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$state_machine__27812__auto__ = function(state_30866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27812__auto____1.call(this,state_30866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27812__auto____0;
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27812__auto____1;
return cljs$core$async$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_30922 = f__28293__auto__();
(statearr_30922[(6)] = c__28292__auto___32689);

return statearr_30922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30924 = arguments.length;
switch (G__30924) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28292__auto___32713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_30948){
var state_val_30949 = (state_30948[(1)]);
if((state_val_30949 === (7))){
var inst_30930 = (state_30948[(7)]);
var inst_30930__$1 = (state_30948[(2)]);
var inst_30931 = (inst_30930__$1 == null);
var inst_30932 = cljs.core.not(inst_30931);
var state_30948__$1 = (function (){var statearr_30950 = state_30948;
(statearr_30950[(7)] = inst_30930__$1);

return statearr_30950;
})();
if(inst_30932){
var statearr_30951_32715 = state_30948__$1;
(statearr_30951_32715[(1)] = (8));

} else {
var statearr_31040_32716 = state_30948__$1;
(statearr_31040_32716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (1))){
var inst_30925 = (0);
var state_30948__$1 = (function (){var statearr_31047 = state_30948;
(statearr_31047[(8)] = inst_30925);

return statearr_31047;
})();
var statearr_31052_32717 = state_30948__$1;
(statearr_31052_32717[(2)] = null);

(statearr_31052_32717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (4))){
var state_30948__$1 = state_30948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30948__$1,(7),ch);
} else {
if((state_val_30949 === (6))){
var inst_30943 = (state_30948[(2)]);
var state_30948__$1 = state_30948;
var statearr_31063_32718 = state_30948__$1;
(statearr_31063_32718[(2)] = inst_30943);

(statearr_31063_32718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (3))){
var inst_30945 = (state_30948[(2)]);
var inst_30946 = cljs.core.async.close_BANG_(out);
var state_30948__$1 = (function (){var statearr_31064 = state_30948;
(statearr_31064[(9)] = inst_30945);

return statearr_31064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30948__$1,inst_30946);
} else {
if((state_val_30949 === (2))){
var inst_30925 = (state_30948[(8)]);
var inst_30927 = (inst_30925 < n);
var state_30948__$1 = state_30948;
if(cljs.core.truth_(inst_30927)){
var statearr_31066_32719 = state_30948__$1;
(statearr_31066_32719[(1)] = (4));

} else {
var statearr_31069_32720 = state_30948__$1;
(statearr_31069_32720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (11))){
var inst_30925 = (state_30948[(8)]);
var inst_30935 = (state_30948[(2)]);
var inst_30936 = (inst_30925 + (1));
var inst_30925__$1 = inst_30936;
var state_30948__$1 = (function (){var statearr_31074 = state_30948;
(statearr_31074[(8)] = inst_30925__$1);

(statearr_31074[(10)] = inst_30935);

return statearr_31074;
})();
var statearr_31075_32728 = state_30948__$1;
(statearr_31075_32728[(2)] = null);

(statearr_31075_32728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (9))){
var state_30948__$1 = state_30948;
var statearr_31077_32729 = state_30948__$1;
(statearr_31077_32729[(2)] = null);

(statearr_31077_32729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (5))){
var state_30948__$1 = state_30948;
var statearr_31079_32731 = state_30948__$1;
(statearr_31079_32731[(2)] = null);

(statearr_31079_32731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (10))){
var inst_30940 = (state_30948[(2)]);
var state_30948__$1 = state_30948;
var statearr_31081_32732 = state_30948__$1;
(statearr_31081_32732[(2)] = inst_30940);

(statearr_31081_32732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30949 === (8))){
var inst_30930 = (state_30948[(7)]);
var state_30948__$1 = state_30948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30948__$1,(11),out,inst_30930);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27812__auto__ = null;
var cljs$core$async$state_machine__27812__auto____0 = (function (){
var statearr_31085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31085[(0)] = cljs$core$async$state_machine__27812__auto__);

(statearr_31085[(1)] = (1));

return statearr_31085;
});
var cljs$core$async$state_machine__27812__auto____1 = (function (state_30948){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_30948);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e31086){var ex__27815__auto__ = e31086;
var statearr_31087_32733 = state_30948;
(statearr_31087_32733[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_30948[(4)]))){
var statearr_31088_32734 = state_30948;
(statearr_31088_32734[(1)] = cljs.core.first((state_30948[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32735 = state_30948;
state_30948 = G__32735;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$state_machine__27812__auto__ = function(state_30948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27812__auto____1.call(this,state_30948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27812__auto____0;
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27812__auto____1;
return cljs$core$async$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_31092 = f__28293__auto__();
(statearr_31092[(6)] = c__28292__auto___32713);

return statearr_31092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31106 = (function (f,ch,meta31098,_,fn1,meta31107){
this.f = f;
this.ch = ch;
this.meta31098 = meta31098;
this._ = _;
this.fn1 = fn1;
this.meta31107 = meta31107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31108,meta31107__$1){
var self__ = this;
var _31108__$1 = this;
return (new cljs.core.async.t_cljs$core$async31106(self__.f,self__.ch,self__.meta31098,self__._,self__.fn1,meta31107__$1));
}));

(cljs.core.async.t_cljs$core$async31106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31108){
var self__ = this;
var _31108__$1 = this;
return self__.meta31107;
}));

(cljs.core.async.t_cljs$core$async31106.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31106.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31095_SHARP_){
var G__31109 = (((p1__31095_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31095_SHARP_) : self__.f.call(null,p1__31095_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31109) : f1.call(null,G__31109));
});
}));

(cljs.core.async.t_cljs$core$async31106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31098","meta31098",-913671294,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31097","cljs.core.async/t_cljs$core$async31097",873966081,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31107","meta31107",1099155934,null)], null);
}));

(cljs.core.async.t_cljs$core$async31106.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31106");

(cljs.core.async.t_cljs$core$async31106.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31106");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31106.
 */
cljs.core.async.__GT_t_cljs$core$async31106 = (function cljs$core$async$__GT_t_cljs$core$async31106(f,ch,meta31098,_,fn1,meta31107){
return (new cljs.core.async.t_cljs$core$async31106(f,ch,meta31098,_,fn1,meta31107));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31097 = (function (f,ch,meta31098){
this.f = f;
this.ch = ch;
this.meta31098 = meta31098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31099,meta31098__$1){
var self__ = this;
var _31099__$1 = this;
return (new cljs.core.async.t_cljs$core$async31097(self__.f,self__.ch,meta31098__$1));
}));

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31099){
var self__ = this;
var _31099__$1 = this;
return self__.meta31098;
}));

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async31106(self__.f,self__.ch,self__.meta31098,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31119 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31119) : self__.f.call(null,G__31119));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31098","meta31098",-913671294,null)], null);
}));

(cljs.core.async.t_cljs$core$async31097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31097");

(cljs.core.async.t_cljs$core$async31097.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31097.
 */
cljs.core.async.__GT_t_cljs$core$async31097 = (function cljs$core$async$__GT_t_cljs$core$async31097(f,ch,meta31098){
return (new cljs.core.async.t_cljs$core$async31097(f,ch,meta31098));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async31097(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31123 = (function (f,ch,meta31124){
this.f = f;
this.ch = ch;
this.meta31124 = meta31124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31125,meta31124__$1){
var self__ = this;
var _31125__$1 = this;
return (new cljs.core.async.t_cljs$core$async31123(self__.f,self__.ch,meta31124__$1));
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31125){
var self__ = this;
var _31125__$1 = this;
return self__.meta31124;
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31124","meta31124",1711314130,null)], null);
}));

(cljs.core.async.t_cljs$core$async31123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31123");

(cljs.core.async.t_cljs$core$async31123.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31123.
 */
cljs.core.async.__GT_t_cljs$core$async31123 = (function cljs$core$async$__GT_t_cljs$core$async31123(f,ch,meta31124){
return (new cljs.core.async.t_cljs$core$async31123(f,ch,meta31124));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async31123(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31138 = (function (p,ch,meta31139){
this.p = p;
this.ch = ch;
this.meta31139 = meta31139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31140,meta31139__$1){
var self__ = this;
var _31140__$1 = this;
return (new cljs.core.async.t_cljs$core$async31138(self__.p,self__.ch,meta31139__$1));
}));

(cljs.core.async.t_cljs$core$async31138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31140){
var self__ = this;
var _31140__$1 = this;
return self__.meta31139;
}));

(cljs.core.async.t_cljs$core$async31138.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31138.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31138.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31138.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31139","meta31139",-1685156594,null)], null);
}));

(cljs.core.async.t_cljs$core$async31138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31138");

(cljs.core.async.t_cljs$core$async31138.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31138.
 */
cljs.core.async.__GT_t_cljs$core$async31138 = (function cljs$core$async$__GT_t_cljs$core$async31138(p,ch,meta31139){
return (new cljs.core.async.t_cljs$core$async31138(p,ch,meta31139));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async31138(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31156 = arguments.length;
switch (G__31156) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28292__auto___32750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_31196){
var state_val_31197 = (state_31196[(1)]);
if((state_val_31197 === (7))){
var inst_31192 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
var statearr_31198_32751 = state_31196__$1;
(statearr_31198_32751[(2)] = inst_31192);

(statearr_31198_32751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (1))){
var state_31196__$1 = state_31196;
var statearr_31202_32752 = state_31196__$1;
(statearr_31202_32752[(2)] = null);

(statearr_31202_32752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (4))){
var inst_31172 = (state_31196[(7)]);
var inst_31172__$1 = (state_31196[(2)]);
var inst_31173 = (inst_31172__$1 == null);
var state_31196__$1 = (function (){var statearr_31210 = state_31196;
(statearr_31210[(7)] = inst_31172__$1);

return statearr_31210;
})();
if(cljs.core.truth_(inst_31173)){
var statearr_31211_32761 = state_31196__$1;
(statearr_31211_32761[(1)] = (5));

} else {
var statearr_31212_32762 = state_31196__$1;
(statearr_31212_32762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (6))){
var inst_31172 = (state_31196[(7)]);
var inst_31183 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31172) : p.call(null,inst_31172));
var state_31196__$1 = state_31196;
if(cljs.core.truth_(inst_31183)){
var statearr_31216_32769 = state_31196__$1;
(statearr_31216_32769[(1)] = (8));

} else {
var statearr_31217_32770 = state_31196__$1;
(statearr_31217_32770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (3))){
var inst_31194 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31196__$1,inst_31194);
} else {
if((state_val_31197 === (2))){
var state_31196__$1 = state_31196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31196__$1,(4),ch);
} else {
if((state_val_31197 === (11))){
var inst_31186 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
var statearr_31221_32775 = state_31196__$1;
(statearr_31221_32775[(2)] = inst_31186);

(statearr_31221_32775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (9))){
var state_31196__$1 = state_31196;
var statearr_31222_32780 = state_31196__$1;
(statearr_31222_32780[(2)] = null);

(statearr_31222_32780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (5))){
var inst_31175 = cljs.core.async.close_BANG_(out);
var state_31196__$1 = state_31196;
var statearr_31227_32781 = state_31196__$1;
(statearr_31227_32781[(2)] = inst_31175);

(statearr_31227_32781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (10))){
var inst_31189 = (state_31196[(2)]);
var state_31196__$1 = (function (){var statearr_31228 = state_31196;
(statearr_31228[(8)] = inst_31189);

return statearr_31228;
})();
var statearr_31229_32782 = state_31196__$1;
(statearr_31229_32782[(2)] = null);

(statearr_31229_32782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (8))){
var inst_31172 = (state_31196[(7)]);
var state_31196__$1 = state_31196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31196__$1,(11),out,inst_31172);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27812__auto__ = null;
var cljs$core$async$state_machine__27812__auto____0 = (function (){
var statearr_31233 = [null,null,null,null,null,null,null,null,null];
(statearr_31233[(0)] = cljs$core$async$state_machine__27812__auto__);

(statearr_31233[(1)] = (1));

return statearr_31233;
});
var cljs$core$async$state_machine__27812__auto____1 = (function (state_31196){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_31196);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e31234){var ex__27815__auto__ = e31234;
var statearr_31235_32783 = state_31196;
(statearr_31235_32783[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_31196[(4)]))){
var statearr_31236_32784 = state_31196;
(statearr_31236_32784[(1)] = cljs.core.first((state_31196[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32788 = state_31196;
state_31196 = G__32788;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$state_machine__27812__auto__ = function(state_31196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27812__auto____1.call(this,state_31196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27812__auto____0;
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27812__auto____1;
return cljs$core$async$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_31237 = f__28293__auto__();
(statearr_31237[(6)] = c__28292__auto___32750);

return statearr_31237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31255 = arguments.length;
switch (G__31255) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28292__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_31328){
var state_val_31329 = (state_31328[(1)]);
if((state_val_31329 === (7))){
var inst_31324 = (state_31328[(2)]);
var state_31328__$1 = state_31328;
var statearr_31332_32797 = state_31328__$1;
(statearr_31332_32797[(2)] = inst_31324);

(statearr_31332_32797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (20))){
var inst_31288 = (state_31328[(7)]);
var inst_31305 = (state_31328[(2)]);
var inst_31306 = cljs.core.next(inst_31288);
var inst_31274 = inst_31306;
var inst_31275 = null;
var inst_31276 = (0);
var inst_31277 = (0);
var state_31328__$1 = (function (){var statearr_31333 = state_31328;
(statearr_31333[(8)] = inst_31277);

(statearr_31333[(9)] = inst_31274);

(statearr_31333[(10)] = inst_31276);

(statearr_31333[(11)] = inst_31305);

(statearr_31333[(12)] = inst_31275);

return statearr_31333;
})();
var statearr_31334_32799 = state_31328__$1;
(statearr_31334_32799[(2)] = null);

(statearr_31334_32799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (1))){
var state_31328__$1 = state_31328;
var statearr_31335_32801 = state_31328__$1;
(statearr_31335_32801[(2)] = null);

(statearr_31335_32801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (4))){
var inst_31263 = (state_31328[(13)]);
var inst_31263__$1 = (state_31328[(2)]);
var inst_31264 = (inst_31263__$1 == null);
var state_31328__$1 = (function (){var statearr_31339 = state_31328;
(statearr_31339[(13)] = inst_31263__$1);

return statearr_31339;
})();
if(cljs.core.truth_(inst_31264)){
var statearr_31341_32802 = state_31328__$1;
(statearr_31341_32802[(1)] = (5));

} else {
var statearr_31342_32803 = state_31328__$1;
(statearr_31342_32803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (15))){
var state_31328__$1 = state_31328;
var statearr_31350_32804 = state_31328__$1;
(statearr_31350_32804[(2)] = null);

(statearr_31350_32804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (21))){
var state_31328__$1 = state_31328;
var statearr_31351_32805 = state_31328__$1;
(statearr_31351_32805[(2)] = null);

(statearr_31351_32805[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (13))){
var inst_31277 = (state_31328[(8)]);
var inst_31274 = (state_31328[(9)]);
var inst_31276 = (state_31328[(10)]);
var inst_31275 = (state_31328[(12)]);
var inst_31284 = (state_31328[(2)]);
var inst_31285 = (inst_31277 + (1));
var tmp31344 = inst_31274;
var tmp31345 = inst_31276;
var tmp31346 = inst_31275;
var inst_31274__$1 = tmp31344;
var inst_31275__$1 = tmp31346;
var inst_31276__$1 = tmp31345;
var inst_31277__$1 = inst_31285;
var state_31328__$1 = (function (){var statearr_31352 = state_31328;
(statearr_31352[(8)] = inst_31277__$1);

(statearr_31352[(9)] = inst_31274__$1);

(statearr_31352[(10)] = inst_31276__$1);

(statearr_31352[(14)] = inst_31284);

(statearr_31352[(12)] = inst_31275__$1);

return statearr_31352;
})();
var statearr_31353_32807 = state_31328__$1;
(statearr_31353_32807[(2)] = null);

(statearr_31353_32807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (22))){
var state_31328__$1 = state_31328;
var statearr_31354_32808 = state_31328__$1;
(statearr_31354_32808[(2)] = null);

(statearr_31354_32808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (6))){
var inst_31263 = (state_31328[(13)]);
var inst_31272 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31263) : f.call(null,inst_31263));
var inst_31273 = cljs.core.seq(inst_31272);
var inst_31274 = inst_31273;
var inst_31275 = null;
var inst_31276 = (0);
var inst_31277 = (0);
var state_31328__$1 = (function (){var statearr_31355 = state_31328;
(statearr_31355[(8)] = inst_31277);

(statearr_31355[(9)] = inst_31274);

(statearr_31355[(10)] = inst_31276);

(statearr_31355[(12)] = inst_31275);

return statearr_31355;
})();
var statearr_31359_32812 = state_31328__$1;
(statearr_31359_32812[(2)] = null);

(statearr_31359_32812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (17))){
var inst_31288 = (state_31328[(7)]);
var inst_31298 = cljs.core.chunk_first(inst_31288);
var inst_31299 = cljs.core.chunk_rest(inst_31288);
var inst_31300 = cljs.core.count(inst_31298);
var inst_31274 = inst_31299;
var inst_31275 = inst_31298;
var inst_31276 = inst_31300;
var inst_31277 = (0);
var state_31328__$1 = (function (){var statearr_31360 = state_31328;
(statearr_31360[(8)] = inst_31277);

(statearr_31360[(9)] = inst_31274);

(statearr_31360[(10)] = inst_31276);

(statearr_31360[(12)] = inst_31275);

return statearr_31360;
})();
var statearr_31362_32813 = state_31328__$1;
(statearr_31362_32813[(2)] = null);

(statearr_31362_32813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (3))){
var inst_31326 = (state_31328[(2)]);
var state_31328__$1 = state_31328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31328__$1,inst_31326);
} else {
if((state_val_31329 === (12))){
var inst_31314 = (state_31328[(2)]);
var state_31328__$1 = state_31328;
var statearr_31363_32814 = state_31328__$1;
(statearr_31363_32814[(2)] = inst_31314);

(statearr_31363_32814[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (2))){
var state_31328__$1 = state_31328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31328__$1,(4),in$);
} else {
if((state_val_31329 === (23))){
var inst_31322 = (state_31328[(2)]);
var state_31328__$1 = state_31328;
var statearr_31364_32815 = state_31328__$1;
(statearr_31364_32815[(2)] = inst_31322);

(statearr_31364_32815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (19))){
var inst_31309 = (state_31328[(2)]);
var state_31328__$1 = state_31328;
var statearr_31368_32816 = state_31328__$1;
(statearr_31368_32816[(2)] = inst_31309);

(statearr_31368_32816[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (11))){
var inst_31288 = (state_31328[(7)]);
var inst_31274 = (state_31328[(9)]);
var inst_31288__$1 = cljs.core.seq(inst_31274);
var state_31328__$1 = (function (){var statearr_31373 = state_31328;
(statearr_31373[(7)] = inst_31288__$1);

return statearr_31373;
})();
if(inst_31288__$1){
var statearr_31375_32817 = state_31328__$1;
(statearr_31375_32817[(1)] = (14));

} else {
var statearr_31377_32818 = state_31328__$1;
(statearr_31377_32818[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (9))){
var inst_31316 = (state_31328[(2)]);
var inst_31317 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31328__$1 = (function (){var statearr_31379 = state_31328;
(statearr_31379[(15)] = inst_31316);

return statearr_31379;
})();
if(cljs.core.truth_(inst_31317)){
var statearr_31380_32828 = state_31328__$1;
(statearr_31380_32828[(1)] = (21));

} else {
var statearr_31382_32829 = state_31328__$1;
(statearr_31382_32829[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (5))){
var inst_31266 = cljs.core.async.close_BANG_(out);
var state_31328__$1 = state_31328;
var statearr_31383_32830 = state_31328__$1;
(statearr_31383_32830[(2)] = inst_31266);

(statearr_31383_32830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (14))){
var inst_31288 = (state_31328[(7)]);
var inst_31296 = cljs.core.chunked_seq_QMARK_(inst_31288);
var state_31328__$1 = state_31328;
if(inst_31296){
var statearr_31384_32831 = state_31328__$1;
(statearr_31384_32831[(1)] = (17));

} else {
var statearr_31385_32832 = state_31328__$1;
(statearr_31385_32832[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (16))){
var inst_31312 = (state_31328[(2)]);
var state_31328__$1 = state_31328;
var statearr_31386_32833 = state_31328__$1;
(statearr_31386_32833[(2)] = inst_31312);

(statearr_31386_32833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (10))){
var inst_31277 = (state_31328[(8)]);
var inst_31275 = (state_31328[(12)]);
var inst_31282 = cljs.core._nth(inst_31275,inst_31277);
var state_31328__$1 = state_31328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31328__$1,(13),out,inst_31282);
} else {
if((state_val_31329 === (18))){
var inst_31288 = (state_31328[(7)]);
var inst_31303 = cljs.core.first(inst_31288);
var state_31328__$1 = state_31328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31328__$1,(20),out,inst_31303);
} else {
if((state_val_31329 === (8))){
var inst_31277 = (state_31328[(8)]);
var inst_31276 = (state_31328[(10)]);
var inst_31279 = (inst_31277 < inst_31276);
var inst_31280 = inst_31279;
var state_31328__$1 = state_31328;
if(cljs.core.truth_(inst_31280)){
var statearr_31398_32838 = state_31328__$1;
(statearr_31398_32838[(1)] = (10));

} else {
var statearr_31399_32839 = state_31328__$1;
(statearr_31399_32839[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27812__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27812__auto____0 = (function (){
var statearr_31402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31402[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27812__auto__);

(statearr_31402[(1)] = (1));

return statearr_31402;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27812__auto____1 = (function (state_31328){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_31328);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e31403){var ex__27815__auto__ = e31403;
var statearr_31404_32840 = state_31328;
(statearr_31404_32840[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_31328[(4)]))){
var statearr_31405_32841 = state_31328;
(statearr_31405_32841[(1)] = cljs.core.first((state_31328[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32842 = state_31328;
state_31328 = G__32842;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27812__auto__ = function(state_31328){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27812__auto____1.call(this,state_31328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27812__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27812__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_31423 = f__28293__auto__();
(statearr_31423[(6)] = c__28292__auto__);

return statearr_31423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));

return c__28292__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31434 = arguments.length;
switch (G__31434) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31440 = arguments.length;
switch (G__31440) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31448 = arguments.length;
switch (G__31448) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28292__auto___32846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_31473){
var state_val_31474 = (state_31473[(1)]);
if((state_val_31474 === (7))){
var inst_31468 = (state_31473[(2)]);
var state_31473__$1 = state_31473;
var statearr_31486_32851 = state_31473__$1;
(statearr_31486_32851[(2)] = inst_31468);

(statearr_31486_32851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31474 === (1))){
var inst_31450 = null;
var state_31473__$1 = (function (){var statearr_31490 = state_31473;
(statearr_31490[(7)] = inst_31450);

return statearr_31490;
})();
var statearr_31491_32852 = state_31473__$1;
(statearr_31491_32852[(2)] = null);

(statearr_31491_32852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31474 === (4))){
var inst_31453 = (state_31473[(8)]);
var inst_31453__$1 = (state_31473[(2)]);
var inst_31454 = (inst_31453__$1 == null);
var inst_31455 = cljs.core.not(inst_31454);
var state_31473__$1 = (function (){var statearr_31495 = state_31473;
(statearr_31495[(8)] = inst_31453__$1);

return statearr_31495;
})();
if(inst_31455){
var statearr_31498_32854 = state_31473__$1;
(statearr_31498_32854[(1)] = (5));

} else {
var statearr_31499_32855 = state_31473__$1;
(statearr_31499_32855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31474 === (6))){
var state_31473__$1 = state_31473;
var statearr_31500_32856 = state_31473__$1;
(statearr_31500_32856[(2)] = null);

(statearr_31500_32856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31474 === (3))){
var inst_31470 = (state_31473[(2)]);
var inst_31471 = cljs.core.async.close_BANG_(out);
var state_31473__$1 = (function (){var statearr_31501 = state_31473;
(statearr_31501[(9)] = inst_31470);

return statearr_31501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31473__$1,inst_31471);
} else {
if((state_val_31474 === (2))){
var state_31473__$1 = state_31473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31473__$1,(4),ch);
} else {
if((state_val_31474 === (11))){
var inst_31453 = (state_31473[(8)]);
var inst_31462 = (state_31473[(2)]);
var inst_31450 = inst_31453;
var state_31473__$1 = (function (){var statearr_31505 = state_31473;
(statearr_31505[(7)] = inst_31450);

(statearr_31505[(10)] = inst_31462);

return statearr_31505;
})();
var statearr_31507_32860 = state_31473__$1;
(statearr_31507_32860[(2)] = null);

(statearr_31507_32860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31474 === (9))){
var inst_31453 = (state_31473[(8)]);
var state_31473__$1 = state_31473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31473__$1,(11),out,inst_31453);
} else {
if((state_val_31474 === (5))){
var inst_31450 = (state_31473[(7)]);
var inst_31453 = (state_31473[(8)]);
var inst_31457 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31453,inst_31450);
var state_31473__$1 = state_31473;
if(inst_31457){
var statearr_31509_32861 = state_31473__$1;
(statearr_31509_32861[(1)] = (8));

} else {
var statearr_31510_32862 = state_31473__$1;
(statearr_31510_32862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31474 === (10))){
var inst_31465 = (state_31473[(2)]);
var state_31473__$1 = state_31473;
var statearr_31511_32863 = state_31473__$1;
(statearr_31511_32863[(2)] = inst_31465);

(statearr_31511_32863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31474 === (8))){
var inst_31450 = (state_31473[(7)]);
var tmp31508 = inst_31450;
var inst_31450__$1 = tmp31508;
var state_31473__$1 = (function (){var statearr_31512 = state_31473;
(statearr_31512[(7)] = inst_31450__$1);

return statearr_31512;
})();
var statearr_31513_32864 = state_31473__$1;
(statearr_31513_32864[(2)] = null);

(statearr_31513_32864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27812__auto__ = null;
var cljs$core$async$state_machine__27812__auto____0 = (function (){
var statearr_31514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31514[(0)] = cljs$core$async$state_machine__27812__auto__);

(statearr_31514[(1)] = (1));

return statearr_31514;
});
var cljs$core$async$state_machine__27812__auto____1 = (function (state_31473){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_31473);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e31515){var ex__27815__auto__ = e31515;
var statearr_31516_32874 = state_31473;
(statearr_31516_32874[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_31473[(4)]))){
var statearr_31517_32875 = state_31473;
(statearr_31517_32875[(1)] = cljs.core.first((state_31473[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32877 = state_31473;
state_31473 = G__32877;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$state_machine__27812__auto__ = function(state_31473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27812__auto____1.call(this,state_31473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27812__auto____0;
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27812__auto____1;
return cljs$core$async$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_31518 = f__28293__auto__();
(statearr_31518[(6)] = c__28292__auto___32846);

return statearr_31518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31520 = arguments.length;
switch (G__31520) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28292__auto___32883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_31564){
var state_val_31565 = (state_31564[(1)]);
if((state_val_31565 === (7))){
var inst_31560 = (state_31564[(2)]);
var state_31564__$1 = state_31564;
var statearr_31566_32884 = state_31564__$1;
(statearr_31566_32884[(2)] = inst_31560);

(statearr_31566_32884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (1))){
var inst_31521 = (new Array(n));
var inst_31522 = inst_31521;
var inst_31523 = (0);
var state_31564__$1 = (function (){var statearr_31567 = state_31564;
(statearr_31567[(7)] = inst_31523);

(statearr_31567[(8)] = inst_31522);

return statearr_31567;
})();
var statearr_31568_32885 = state_31564__$1;
(statearr_31568_32885[(2)] = null);

(statearr_31568_32885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (4))){
var inst_31526 = (state_31564[(9)]);
var inst_31526__$1 = (state_31564[(2)]);
var inst_31533 = (inst_31526__$1 == null);
var inst_31534 = cljs.core.not(inst_31533);
var state_31564__$1 = (function (){var statearr_31569 = state_31564;
(statearr_31569[(9)] = inst_31526__$1);

return statearr_31569;
})();
if(inst_31534){
var statearr_31570_32886 = state_31564__$1;
(statearr_31570_32886[(1)] = (5));

} else {
var statearr_31571_32887 = state_31564__$1;
(statearr_31571_32887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (15))){
var inst_31554 = (state_31564[(2)]);
var state_31564__$1 = state_31564;
var statearr_31581_32888 = state_31564__$1;
(statearr_31581_32888[(2)] = inst_31554);

(statearr_31581_32888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (13))){
var state_31564__$1 = state_31564;
var statearr_31582_32889 = state_31564__$1;
(statearr_31582_32889[(2)] = null);

(statearr_31582_32889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (6))){
var inst_31523 = (state_31564[(7)]);
var inst_31550 = (inst_31523 > (0));
var state_31564__$1 = state_31564;
if(cljs.core.truth_(inst_31550)){
var statearr_31583_32893 = state_31564__$1;
(statearr_31583_32893[(1)] = (12));

} else {
var statearr_31584_32894 = state_31564__$1;
(statearr_31584_32894[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (3))){
var inst_31562 = (state_31564[(2)]);
var state_31564__$1 = state_31564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31564__$1,inst_31562);
} else {
if((state_val_31565 === (12))){
var inst_31522 = (state_31564[(8)]);
var inst_31552 = cljs.core.vec(inst_31522);
var state_31564__$1 = state_31564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31564__$1,(15),out,inst_31552);
} else {
if((state_val_31565 === (2))){
var state_31564__$1 = state_31564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31564__$1,(4),ch);
} else {
if((state_val_31565 === (11))){
var inst_31544 = (state_31564[(2)]);
var inst_31545 = (new Array(n));
var inst_31522 = inst_31545;
var inst_31523 = (0);
var state_31564__$1 = (function (){var statearr_31585 = state_31564;
(statearr_31585[(7)] = inst_31523);

(statearr_31585[(8)] = inst_31522);

(statearr_31585[(10)] = inst_31544);

return statearr_31585;
})();
var statearr_31586_32903 = state_31564__$1;
(statearr_31586_32903[(2)] = null);

(statearr_31586_32903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (9))){
var inst_31522 = (state_31564[(8)]);
var inst_31542 = cljs.core.vec(inst_31522);
var state_31564__$1 = state_31564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31564__$1,(11),out,inst_31542);
} else {
if((state_val_31565 === (5))){
var inst_31523 = (state_31564[(7)]);
var inst_31522 = (state_31564[(8)]);
var inst_31526 = (state_31564[(9)]);
var inst_31537 = (state_31564[(11)]);
var inst_31536 = (inst_31522[inst_31523] = inst_31526);
var inst_31537__$1 = (inst_31523 + (1));
var inst_31538 = (inst_31537__$1 < n);
var state_31564__$1 = (function (){var statearr_31588 = state_31564;
(statearr_31588[(12)] = inst_31536);

(statearr_31588[(11)] = inst_31537__$1);

return statearr_31588;
})();
if(cljs.core.truth_(inst_31538)){
var statearr_31592_32913 = state_31564__$1;
(statearr_31592_32913[(1)] = (8));

} else {
var statearr_31593_32914 = state_31564__$1;
(statearr_31593_32914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (14))){
var inst_31557 = (state_31564[(2)]);
var inst_31558 = cljs.core.async.close_BANG_(out);
var state_31564__$1 = (function (){var statearr_31595 = state_31564;
(statearr_31595[(13)] = inst_31557);

return statearr_31595;
})();
var statearr_31596_32916 = state_31564__$1;
(statearr_31596_32916[(2)] = inst_31558);

(statearr_31596_32916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (10))){
var inst_31548 = (state_31564[(2)]);
var state_31564__$1 = state_31564;
var statearr_31597_32917 = state_31564__$1;
(statearr_31597_32917[(2)] = inst_31548);

(statearr_31597_32917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31565 === (8))){
var inst_31522 = (state_31564[(8)]);
var inst_31537 = (state_31564[(11)]);
var tmp31594 = inst_31522;
var inst_31522__$1 = tmp31594;
var inst_31523 = inst_31537;
var state_31564__$1 = (function (){var statearr_31601 = state_31564;
(statearr_31601[(7)] = inst_31523);

(statearr_31601[(8)] = inst_31522__$1);

return statearr_31601;
})();
var statearr_31602_32919 = state_31564__$1;
(statearr_31602_32919[(2)] = null);

(statearr_31602_32919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27812__auto__ = null;
var cljs$core$async$state_machine__27812__auto____0 = (function (){
var statearr_31606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31606[(0)] = cljs$core$async$state_machine__27812__auto__);

(statearr_31606[(1)] = (1));

return statearr_31606;
});
var cljs$core$async$state_machine__27812__auto____1 = (function (state_31564){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_31564);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e31610){var ex__27815__auto__ = e31610;
var statearr_31611_32920 = state_31564;
(statearr_31611_32920[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_31564[(4)]))){
var statearr_31612_32921 = state_31564;
(statearr_31612_32921[(1)] = cljs.core.first((state_31564[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32922 = state_31564;
state_31564 = G__32922;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$state_machine__27812__auto__ = function(state_31564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27812__auto____1.call(this,state_31564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27812__auto____0;
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27812__auto____1;
return cljs$core$async$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_31613 = f__28293__auto__();
(statearr_31613[(6)] = c__28292__auto___32883);

return statearr_31613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31625 = arguments.length;
switch (G__31625) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28292__auto___32924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28293__auto__ = (function (){var switch__27811__auto__ = (function (state_31670){
var state_val_31671 = (state_31670[(1)]);
if((state_val_31671 === (7))){
var inst_31666 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31672_32929 = state_31670__$1;
(statearr_31672_32929[(2)] = inst_31666);

(statearr_31672_32929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (1))){
var inst_31626 = [];
var inst_31627 = inst_31626;
var inst_31628 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31670__$1 = (function (){var statearr_31673 = state_31670;
(statearr_31673[(7)] = inst_31628);

(statearr_31673[(8)] = inst_31627);

return statearr_31673;
})();
var statearr_31674_32930 = state_31670__$1;
(statearr_31674_32930[(2)] = null);

(statearr_31674_32930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (4))){
var inst_31631 = (state_31670[(9)]);
var inst_31631__$1 = (state_31670[(2)]);
var inst_31632 = (inst_31631__$1 == null);
var inst_31633 = cljs.core.not(inst_31632);
var state_31670__$1 = (function (){var statearr_31675 = state_31670;
(statearr_31675[(9)] = inst_31631__$1);

return statearr_31675;
})();
if(inst_31633){
var statearr_31676_32931 = state_31670__$1;
(statearr_31676_32931[(1)] = (5));

} else {
var statearr_31697_32932 = state_31670__$1;
(statearr_31697_32932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (15))){
var inst_31627 = (state_31670[(8)]);
var inst_31658 = cljs.core.vec(inst_31627);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31670__$1,(18),out,inst_31658);
} else {
if((state_val_31671 === (13))){
var inst_31653 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31712_32933 = state_31670__$1;
(statearr_31712_32933[(2)] = inst_31653);

(statearr_31712_32933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (6))){
var inst_31627 = (state_31670[(8)]);
var inst_31655 = inst_31627.length;
var inst_31656 = (inst_31655 > (0));
var state_31670__$1 = state_31670;
if(cljs.core.truth_(inst_31656)){
var statearr_31719_32934 = state_31670__$1;
(statearr_31719_32934[(1)] = (15));

} else {
var statearr_31720_32935 = state_31670__$1;
(statearr_31720_32935[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (17))){
var inst_31663 = (state_31670[(2)]);
var inst_31664 = cljs.core.async.close_BANG_(out);
var state_31670__$1 = (function (){var statearr_31721 = state_31670;
(statearr_31721[(10)] = inst_31663);

return statearr_31721;
})();
var statearr_31722_32936 = state_31670__$1;
(statearr_31722_32936[(2)] = inst_31664);

(statearr_31722_32936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (3))){
var inst_31668 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31670__$1,inst_31668);
} else {
if((state_val_31671 === (12))){
var inst_31627 = (state_31670[(8)]);
var inst_31646 = cljs.core.vec(inst_31627);
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31670__$1,(14),out,inst_31646);
} else {
if((state_val_31671 === (2))){
var state_31670__$1 = state_31670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31670__$1,(4),ch);
} else {
if((state_val_31671 === (11))){
var inst_31631 = (state_31670[(9)]);
var inst_31635 = (state_31670[(11)]);
var inst_31627 = (state_31670[(8)]);
var inst_31643 = inst_31627.push(inst_31631);
var tmp31732 = inst_31627;
var inst_31627__$1 = tmp31732;
var inst_31628 = inst_31635;
var state_31670__$1 = (function (){var statearr_31736 = state_31670;
(statearr_31736[(7)] = inst_31628);

(statearr_31736[(8)] = inst_31627__$1);

(statearr_31736[(12)] = inst_31643);

return statearr_31736;
})();
var statearr_31737_32937 = state_31670__$1;
(statearr_31737_32937[(2)] = null);

(statearr_31737_32937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (9))){
var inst_31628 = (state_31670[(7)]);
var inst_31639 = cljs.core.keyword_identical_QMARK_(inst_31628,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_31670__$1 = state_31670;
var statearr_31741_32938 = state_31670__$1;
(statearr_31741_32938[(2)] = inst_31639);

(statearr_31741_32938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (5))){
var inst_31631 = (state_31670[(9)]);
var inst_31636 = (state_31670[(13)]);
var inst_31635 = (state_31670[(11)]);
var inst_31628 = (state_31670[(7)]);
var inst_31635__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31631) : f.call(null,inst_31631));
var inst_31636__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31635__$1,inst_31628);
var state_31670__$1 = (function (){var statearr_31742 = state_31670;
(statearr_31742[(13)] = inst_31636__$1);

(statearr_31742[(11)] = inst_31635__$1);

return statearr_31742;
})();
if(inst_31636__$1){
var statearr_31743_32943 = state_31670__$1;
(statearr_31743_32943[(1)] = (8));

} else {
var statearr_31744_32944 = state_31670__$1;
(statearr_31744_32944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (14))){
var inst_31631 = (state_31670[(9)]);
var inst_31635 = (state_31670[(11)]);
var inst_31648 = (state_31670[(2)]);
var inst_31649 = [];
var inst_31650 = inst_31649.push(inst_31631);
var inst_31627 = inst_31649;
var inst_31628 = inst_31635;
var state_31670__$1 = (function (){var statearr_31745 = state_31670;
(statearr_31745[(14)] = inst_31650);

(statearr_31745[(7)] = inst_31628);

(statearr_31745[(15)] = inst_31648);

(statearr_31745[(8)] = inst_31627);

return statearr_31745;
})();
var statearr_31746_32947 = state_31670__$1;
(statearr_31746_32947[(2)] = null);

(statearr_31746_32947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (16))){
var state_31670__$1 = state_31670;
var statearr_31747_32949 = state_31670__$1;
(statearr_31747_32949[(2)] = null);

(statearr_31747_32949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (10))){
var inst_31641 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
if(cljs.core.truth_(inst_31641)){
var statearr_31748_32955 = state_31670__$1;
(statearr_31748_32955[(1)] = (11));

} else {
var statearr_31749_32956 = state_31670__$1;
(statearr_31749_32956[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (18))){
var inst_31660 = (state_31670[(2)]);
var state_31670__$1 = state_31670;
var statearr_31750_32957 = state_31670__$1;
(statearr_31750_32957[(2)] = inst_31660);

(statearr_31750_32957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31671 === (8))){
var inst_31636 = (state_31670[(13)]);
var state_31670__$1 = state_31670;
var statearr_31751_32958 = state_31670__$1;
(statearr_31751_32958[(2)] = inst_31636);

(statearr_31751_32958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27812__auto__ = null;
var cljs$core$async$state_machine__27812__auto____0 = (function (){
var statearr_31755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31755[(0)] = cljs$core$async$state_machine__27812__auto__);

(statearr_31755[(1)] = (1));

return statearr_31755;
});
var cljs$core$async$state_machine__27812__auto____1 = (function (state_31670){
while(true){
var ret_value__27813__auto__ = (function (){try{while(true){
var result__27814__auto__ = switch__27811__auto__(state_31670);
if(cljs.core.keyword_identical_QMARK_(result__27814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27814__auto__;
}
break;
}
}catch (e31756){var ex__27815__auto__ = e31756;
var statearr_31760_32959 = state_31670;
(statearr_31760_32959[(2)] = ex__27815__auto__);


if(cljs.core.seq((state_31670[(4)]))){
var statearr_31761_32960 = state_31670;
(statearr_31761_32960[(1)] = cljs.core.first((state_31670[(4)])));

} else {
throw ex__27815__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32961 = state_31670;
state_31670 = G__32961;
continue;
} else {
return ret_value__27813__auto__;
}
break;
}
});
cljs$core$async$state_machine__27812__auto__ = function(state_31670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27812__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27812__auto____1.call(this,state_31670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27812__auto____0;
cljs$core$async$state_machine__27812__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27812__auto____1;
return cljs$core$async$state_machine__27812__auto__;
})()
})();
var state__28294__auto__ = (function (){var statearr_31765 = f__28293__auto__();
(statearr_31765[(6)] = c__28292__auto___32924);

return statearr_31765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28294__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
