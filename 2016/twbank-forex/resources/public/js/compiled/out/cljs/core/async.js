// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9089 = [];
var len__7214__auto___9095 = arguments.length;
var i__7215__auto___9096 = (0);
while(true){
if((i__7215__auto___9096 < len__7214__auto___9095)){
args9089.push((arguments[i__7215__auto___9096]));

var G__9097 = (i__7215__auto___9096 + (1));
i__7215__auto___9096 = G__9097;
continue;
} else {
}
break;
}

var G__9091 = args9089.length;
switch (G__9091) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9089.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9092 = (function (f,blockable,meta9093){
this.f = f;
this.blockable = blockable;
this.meta9093 = meta9093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9094,meta9093__$1){
var self__ = this;
var _9094__$1 = this;
return (new cljs.core.async.t_cljs$core$async9092(self__.f,self__.blockable,meta9093__$1));
});

cljs.core.async.t_cljs$core$async9092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9094){
var self__ = this;
var _9094__$1 = this;
return self__.meta9093;
});

cljs.core.async.t_cljs$core$async9092.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9092.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9093","meta9093",672079768,null)], null);
});

cljs.core.async.t_cljs$core$async9092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9092";

cljs.core.async.t_cljs$core$async9092.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9092");
});

cljs.core.async.__GT_t_cljs$core$async9092 = (function cljs$core$async$__GT_t_cljs$core$async9092(f__$1,blockable__$1,meta9093){
return (new cljs.core.async.t_cljs$core$async9092(f__$1,blockable__$1,meta9093));
});

}

return (new cljs.core.async.t_cljs$core$async9092(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args9101 = [];
var len__7214__auto___9104 = arguments.length;
var i__7215__auto___9105 = (0);
while(true){
if((i__7215__auto___9105 < len__7214__auto___9104)){
args9101.push((arguments[i__7215__auto___9105]));

var G__9106 = (i__7215__auto___9105 + (1));
i__7215__auto___9105 = G__9106;
continue;
} else {
}
break;
}

var G__9103 = args9101.length;
switch (G__9103) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9101.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args9108 = [];
var len__7214__auto___9111 = arguments.length;
var i__7215__auto___9112 = (0);
while(true){
if((i__7215__auto___9112 < len__7214__auto___9111)){
args9108.push((arguments[i__7215__auto___9112]));

var G__9113 = (i__7215__auto___9112 + (1));
i__7215__auto___9112 = G__9113;
continue;
} else {
}
break;
}

var G__9110 = args9108.length;
switch (G__9110) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9108.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args9115 = [];
var len__7214__auto___9118 = arguments.length;
var i__7215__auto___9119 = (0);
while(true){
if((i__7215__auto___9119 < len__7214__auto___9118)){
args9115.push((arguments[i__7215__auto___9119]));

var G__9120 = (i__7215__auto___9119 + (1));
i__7215__auto___9119 = G__9120;
continue;
} else {
}
break;
}

var G__9117 = args9115.length;
switch (G__9117) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9115.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9122 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9122);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9122,ret){
return (function (){
return fn1.call(null,val_9122);
});})(val_9122,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9123 = [];
var len__7214__auto___9126 = arguments.length;
var i__7215__auto___9127 = (0);
while(true){
if((i__7215__auto___9127 < len__7214__auto___9126)){
args9123.push((arguments[i__7215__auto___9127]));

var G__9128 = (i__7215__auto___9127 + (1));
i__7215__auto___9127 = G__9128;
continue;
} else {
}
break;
}

var G__9125 = args9123.length;
switch (G__9125) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9123.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7059__auto___9130 = n;
var x_9131 = (0);
while(true){
if((x_9131 < n__7059__auto___9130)){
(a[x_9131] = (0));

var G__9132 = (x_9131 + (1));
x_9131 = G__9132;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9133 = (i + (1));
i = G__9133;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9137 = (function (alt_flag,flag,meta9138){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9138 = meta9138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9139,meta9138__$1){
var self__ = this;
var _9139__$1 = this;
return (new cljs.core.async.t_cljs$core$async9137(self__.alt_flag,self__.flag,meta9138__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9139){
var self__ = this;
var _9139__$1 = this;
return self__.meta9138;
});})(flag))
;

cljs.core.async.t_cljs$core$async9137.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9137.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9138","meta9138",1007387505,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9137";

cljs.core.async.t_cljs$core$async9137.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9137");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9137 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9137(alt_flag__$1,flag__$1,meta9138){
return (new cljs.core.async.t_cljs$core$async9137(alt_flag__$1,flag__$1,meta9138));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9137(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9143 = (function (alt_handler,flag,cb,meta9144){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9144 = meta9144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9145,meta9144__$1){
var self__ = this;
var _9145__$1 = this;
return (new cljs.core.async.t_cljs$core$async9143(self__.alt_handler,self__.flag,self__.cb,meta9144__$1));
});

cljs.core.async.t_cljs$core$async9143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9145){
var self__ = this;
var _9145__$1 = this;
return self__.meta9144;
});

cljs.core.async.t_cljs$core$async9143.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9144","meta9144",1500792398,null)], null);
});

cljs.core.async.t_cljs$core$async9143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9143";

cljs.core.async.t_cljs$core$async9143.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9143");
});

cljs.core.async.__GT_t_cljs$core$async9143 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9143(alt_handler__$1,flag__$1,cb__$1,meta9144){
return (new cljs.core.async.t_cljs$core$async9143(alt_handler__$1,flag__$1,cb__$1,meta9144));
});

}

return (new cljs.core.async.t_cljs$core$async9143(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9146_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9146_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9147_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9147_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6156__auto__ = wport;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9148 = (i + (1));
i = G__9148;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6156__auto__ = ret;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6144__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6144__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__7221__auto__ = [];
var len__7214__auto___9154 = arguments.length;
var i__7215__auto___9155 = (0);
while(true){
if((i__7215__auto___9155 < len__7214__auto___9154)){
args__7221__auto__.push((arguments[i__7215__auto___9155]));

var G__9156 = (i__7215__auto___9155 + (1));
i__7215__auto___9155 = G__9156;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9151){
var map__9152 = p__9151;
var map__9152__$1 = ((((!((map__9152 == null)))?((((map__9152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9152):map__9152);
var opts = map__9152__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9149){
var G__9150 = cljs.core.first.call(null,seq9149);
var seq9149__$1 = cljs.core.next.call(null,seq9149);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9150,seq9149__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args9157 = [];
var len__7214__auto___9207 = arguments.length;
var i__7215__auto___9208 = (0);
while(true){
if((i__7215__auto___9208 < len__7214__auto___9207)){
args9157.push((arguments[i__7215__auto___9208]));

var G__9209 = (i__7215__auto___9208 + (1));
i__7215__auto___9208 = G__9209;
continue;
} else {
}
break;
}

var G__9159 = args9157.length;
switch (G__9159) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9157.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9044__auto___9211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___9211){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___9211){
return (function (state_9183){
var state_val_9184 = (state_9183[(1)]);
if((state_val_9184 === (7))){
var inst_9179 = (state_9183[(2)]);
var state_9183__$1 = state_9183;
var statearr_9185_9212 = state_9183__$1;
(statearr_9185_9212[(2)] = inst_9179);

(statearr_9185_9212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9184 === (1))){
var state_9183__$1 = state_9183;
var statearr_9186_9213 = state_9183__$1;
(statearr_9186_9213[(2)] = null);

(statearr_9186_9213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9184 === (4))){
var inst_9162 = (state_9183[(7)]);
var inst_9162__$1 = (state_9183[(2)]);
var inst_9163 = (inst_9162__$1 == null);
var state_9183__$1 = (function (){var statearr_9187 = state_9183;
(statearr_9187[(7)] = inst_9162__$1);

return statearr_9187;
})();
if(cljs.core.truth_(inst_9163)){
var statearr_9188_9214 = state_9183__$1;
(statearr_9188_9214[(1)] = (5));

} else {
var statearr_9189_9215 = state_9183__$1;
(statearr_9189_9215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9184 === (13))){
var state_9183__$1 = state_9183;
var statearr_9190_9216 = state_9183__$1;
(statearr_9190_9216[(2)] = null);

(statearr_9190_9216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9184 === (6))){
var inst_9162 = (state_9183[(7)]);
var state_9183__$1 = state_9183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9183__$1,(11),to,inst_9162);
} else {
if((state_val_9184 === (3))){
var inst_9181 = (state_9183[(2)]);
var state_9183__$1 = state_9183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9183__$1,inst_9181);
} else {
if((state_val_9184 === (12))){
var state_9183__$1 = state_9183;
var statearr_9191_9217 = state_9183__$1;
(statearr_9191_9217[(2)] = null);

(statearr_9191_9217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9184 === (2))){
var state_9183__$1 = state_9183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9183__$1,(4),from);
} else {
if((state_val_9184 === (11))){
var inst_9172 = (state_9183[(2)]);
var state_9183__$1 = state_9183;
if(cljs.core.truth_(inst_9172)){
var statearr_9192_9218 = state_9183__$1;
(statearr_9192_9218[(1)] = (12));

} else {
var statearr_9193_9219 = state_9183__$1;
(statearr_9193_9219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9184 === (9))){
var state_9183__$1 = state_9183;
var statearr_9194_9220 = state_9183__$1;
(statearr_9194_9220[(2)] = null);

(statearr_9194_9220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9184 === (5))){
var state_9183__$1 = state_9183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9195_9221 = state_9183__$1;
(statearr_9195_9221[(1)] = (8));

} else {
var statearr_9196_9222 = state_9183__$1;
(statearr_9196_9222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9184 === (14))){
var inst_9177 = (state_9183[(2)]);
var state_9183__$1 = state_9183;
var statearr_9197_9223 = state_9183__$1;
(statearr_9197_9223[(2)] = inst_9177);

(statearr_9197_9223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9184 === (10))){
var inst_9169 = (state_9183[(2)]);
var state_9183__$1 = state_9183;
var statearr_9198_9224 = state_9183__$1;
(statearr_9198_9224[(2)] = inst_9169);

(statearr_9198_9224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9184 === (8))){
var inst_9166 = cljs.core.async.close_BANG_.call(null,to);
var state_9183__$1 = state_9183;
var statearr_9199_9225 = state_9183__$1;
(statearr_9199_9225[(2)] = inst_9166);

(statearr_9199_9225[(1)] = (10));


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
});})(c__9044__auto___9211))
;
return ((function (switch__8932__auto__,c__9044__auto___9211){
return (function() {
var cljs$core$async$state_machine__8933__auto__ = null;
var cljs$core$async$state_machine__8933__auto____0 = (function (){
var statearr_9203 = [null,null,null,null,null,null,null,null];
(statearr_9203[(0)] = cljs$core$async$state_machine__8933__auto__);

(statearr_9203[(1)] = (1));

return statearr_9203;
});
var cljs$core$async$state_machine__8933__auto____1 = (function (state_9183){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_9183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e9204){if((e9204 instanceof Object)){
var ex__8936__auto__ = e9204;
var statearr_9205_9226 = state_9183;
(statearr_9205_9226[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9227 = state_9183;
state_9183 = G__9227;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$state_machine__8933__auto__ = function(state_9183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8933__auto____1.call(this,state_9183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8933__auto____0;
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8933__auto____1;
return cljs$core$async$state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___9211))
})();
var state__9046__auto__ = (function (){var statearr_9206 = f__9045__auto__.call(null);
(statearr_9206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___9211);

return statearr_9206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___9211))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9411){
var vec__9412 = p__9411;
var v = cljs.core.nth.call(null,vec__9412,(0),null);
var p = cljs.core.nth.call(null,vec__9412,(1),null);
var job = vec__9412;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9044__auto___9594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___9594,res,vec__9412,v,p,job,jobs,results){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___9594,res,vec__9412,v,p,job,jobs,results){
return (function (state_9417){
var state_val_9418 = (state_9417[(1)]);
if((state_val_9418 === (1))){
var state_9417__$1 = state_9417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9417__$1,(2),res,v);
} else {
if((state_val_9418 === (2))){
var inst_9414 = (state_9417[(2)]);
var inst_9415 = cljs.core.async.close_BANG_.call(null,res);
var state_9417__$1 = (function (){var statearr_9419 = state_9417;
(statearr_9419[(7)] = inst_9414);

return statearr_9419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9417__$1,inst_9415);
} else {
return null;
}
}
});})(c__9044__auto___9594,res,vec__9412,v,p,job,jobs,results))
;
return ((function (switch__8932__auto__,c__9044__auto___9594,res,vec__9412,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0 = (function (){
var statearr_9423 = [null,null,null,null,null,null,null,null];
(statearr_9423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__);

(statearr_9423[(1)] = (1));

return statearr_9423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1 = (function (state_9417){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_9417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e9424){if((e9424 instanceof Object)){
var ex__8936__auto__ = e9424;
var statearr_9425_9595 = state_9417;
(statearr_9425_9595[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9596 = state_9417;
state_9417 = G__9596;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__ = function(state_9417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1.call(this,state_9417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___9594,res,vec__9412,v,p,job,jobs,results))
})();
var state__9046__auto__ = (function (){var statearr_9426 = f__9045__auto__.call(null);
(statearr_9426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___9594);

return statearr_9426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___9594,res,vec__9412,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9427){
var vec__9428 = p__9427;
var v = cljs.core.nth.call(null,vec__9428,(0),null);
var p = cljs.core.nth.call(null,vec__9428,(1),null);
var job = vec__9428;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7059__auto___9597 = n;
var __9598 = (0);
while(true){
if((__9598 < n__7059__auto___9597)){
var G__9429_9599 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9429_9599) {
case "compute":
var c__9044__auto___9601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9598,c__9044__auto___9601,G__9429_9599,n__7059__auto___9597,jobs,results,process,async){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (__9598,c__9044__auto___9601,G__9429_9599,n__7059__auto___9597,jobs,results,process,async){
return (function (state_9442){
var state_val_9443 = (state_9442[(1)]);
if((state_val_9443 === (1))){
var state_9442__$1 = state_9442;
var statearr_9444_9602 = state_9442__$1;
(statearr_9444_9602[(2)] = null);

(statearr_9444_9602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9443 === (2))){
var state_9442__$1 = state_9442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9442__$1,(4),jobs);
} else {
if((state_val_9443 === (3))){
var inst_9440 = (state_9442[(2)]);
var state_9442__$1 = state_9442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9442__$1,inst_9440);
} else {
if((state_val_9443 === (4))){
var inst_9432 = (state_9442[(2)]);
var inst_9433 = process.call(null,inst_9432);
var state_9442__$1 = state_9442;
if(cljs.core.truth_(inst_9433)){
var statearr_9445_9603 = state_9442__$1;
(statearr_9445_9603[(1)] = (5));

} else {
var statearr_9446_9604 = state_9442__$1;
(statearr_9446_9604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9443 === (5))){
var state_9442__$1 = state_9442;
var statearr_9447_9605 = state_9442__$1;
(statearr_9447_9605[(2)] = null);

(statearr_9447_9605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9443 === (6))){
var state_9442__$1 = state_9442;
var statearr_9448_9606 = state_9442__$1;
(statearr_9448_9606[(2)] = null);

(statearr_9448_9606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9443 === (7))){
var inst_9438 = (state_9442[(2)]);
var state_9442__$1 = state_9442;
var statearr_9449_9607 = state_9442__$1;
(statearr_9449_9607[(2)] = inst_9438);

(statearr_9449_9607[(1)] = (3));


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
});})(__9598,c__9044__auto___9601,G__9429_9599,n__7059__auto___9597,jobs,results,process,async))
;
return ((function (__9598,switch__8932__auto__,c__9044__auto___9601,G__9429_9599,n__7059__auto___9597,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0 = (function (){
var statearr_9453 = [null,null,null,null,null,null,null];
(statearr_9453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__);

(statearr_9453[(1)] = (1));

return statearr_9453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1 = (function (state_9442){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_9442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e9454){if((e9454 instanceof Object)){
var ex__8936__auto__ = e9454;
var statearr_9455_9608 = state_9442;
(statearr_9455_9608[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9609 = state_9442;
state_9442 = G__9609;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__ = function(state_9442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1.call(this,state_9442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__;
})()
;})(__9598,switch__8932__auto__,c__9044__auto___9601,G__9429_9599,n__7059__auto___9597,jobs,results,process,async))
})();
var state__9046__auto__ = (function (){var statearr_9456 = f__9045__auto__.call(null);
(statearr_9456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___9601);

return statearr_9456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(__9598,c__9044__auto___9601,G__9429_9599,n__7059__auto___9597,jobs,results,process,async))
);


break;
case "async":
var c__9044__auto___9610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9598,c__9044__auto___9610,G__9429_9599,n__7059__auto___9597,jobs,results,process,async){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (__9598,c__9044__auto___9610,G__9429_9599,n__7059__auto___9597,jobs,results,process,async){
return (function (state_9469){
var state_val_9470 = (state_9469[(1)]);
if((state_val_9470 === (1))){
var state_9469__$1 = state_9469;
var statearr_9471_9611 = state_9469__$1;
(statearr_9471_9611[(2)] = null);

(statearr_9471_9611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (2))){
var state_9469__$1 = state_9469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9469__$1,(4),jobs);
} else {
if((state_val_9470 === (3))){
var inst_9467 = (state_9469[(2)]);
var state_9469__$1 = state_9469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9469__$1,inst_9467);
} else {
if((state_val_9470 === (4))){
var inst_9459 = (state_9469[(2)]);
var inst_9460 = async.call(null,inst_9459);
var state_9469__$1 = state_9469;
if(cljs.core.truth_(inst_9460)){
var statearr_9472_9612 = state_9469__$1;
(statearr_9472_9612[(1)] = (5));

} else {
var statearr_9473_9613 = state_9469__$1;
(statearr_9473_9613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (5))){
var state_9469__$1 = state_9469;
var statearr_9474_9614 = state_9469__$1;
(statearr_9474_9614[(2)] = null);

(statearr_9474_9614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (6))){
var state_9469__$1 = state_9469;
var statearr_9475_9615 = state_9469__$1;
(statearr_9475_9615[(2)] = null);

(statearr_9475_9615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9470 === (7))){
var inst_9465 = (state_9469[(2)]);
var state_9469__$1 = state_9469;
var statearr_9476_9616 = state_9469__$1;
(statearr_9476_9616[(2)] = inst_9465);

(statearr_9476_9616[(1)] = (3));


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
});})(__9598,c__9044__auto___9610,G__9429_9599,n__7059__auto___9597,jobs,results,process,async))
;
return ((function (__9598,switch__8932__auto__,c__9044__auto___9610,G__9429_9599,n__7059__auto___9597,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0 = (function (){
var statearr_9480 = [null,null,null,null,null,null,null];
(statearr_9480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__);

(statearr_9480[(1)] = (1));

return statearr_9480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1 = (function (state_9469){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_9469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e9481){if((e9481 instanceof Object)){
var ex__8936__auto__ = e9481;
var statearr_9482_9617 = state_9469;
(statearr_9482_9617[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9618 = state_9469;
state_9469 = G__9618;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__ = function(state_9469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1.call(this,state_9469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__;
})()
;})(__9598,switch__8932__auto__,c__9044__auto___9610,G__9429_9599,n__7059__auto___9597,jobs,results,process,async))
})();
var state__9046__auto__ = (function (){var statearr_9483 = f__9045__auto__.call(null);
(statearr_9483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___9610);

return statearr_9483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(__9598,c__9044__auto___9610,G__9429_9599,n__7059__auto___9597,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9619 = (__9598 + (1));
__9598 = G__9619;
continue;
} else {
}
break;
}

var c__9044__auto___9620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___9620,jobs,results,process,async){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___9620,jobs,results,process,async){
return (function (state_9505){
var state_val_9506 = (state_9505[(1)]);
if((state_val_9506 === (1))){
var state_9505__$1 = state_9505;
var statearr_9507_9621 = state_9505__$1;
(statearr_9507_9621[(2)] = null);

(statearr_9507_9621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9506 === (2))){
var state_9505__$1 = state_9505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9505__$1,(4),from);
} else {
if((state_val_9506 === (3))){
var inst_9503 = (state_9505[(2)]);
var state_9505__$1 = state_9505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9505__$1,inst_9503);
} else {
if((state_val_9506 === (4))){
var inst_9486 = (state_9505[(7)]);
var inst_9486__$1 = (state_9505[(2)]);
var inst_9487 = (inst_9486__$1 == null);
var state_9505__$1 = (function (){var statearr_9508 = state_9505;
(statearr_9508[(7)] = inst_9486__$1);

return statearr_9508;
})();
if(cljs.core.truth_(inst_9487)){
var statearr_9509_9622 = state_9505__$1;
(statearr_9509_9622[(1)] = (5));

} else {
var statearr_9510_9623 = state_9505__$1;
(statearr_9510_9623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9506 === (5))){
var inst_9489 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9505__$1 = state_9505;
var statearr_9511_9624 = state_9505__$1;
(statearr_9511_9624[(2)] = inst_9489);

(statearr_9511_9624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9506 === (6))){
var inst_9486 = (state_9505[(7)]);
var inst_9491 = (state_9505[(8)]);
var inst_9491__$1 = cljs.core.async.chan.call(null,(1));
var inst_9492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9493 = [inst_9486,inst_9491__$1];
var inst_9494 = (new cljs.core.PersistentVector(null,2,(5),inst_9492,inst_9493,null));
var state_9505__$1 = (function (){var statearr_9512 = state_9505;
(statearr_9512[(8)] = inst_9491__$1);

return statearr_9512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9505__$1,(8),jobs,inst_9494);
} else {
if((state_val_9506 === (7))){
var inst_9501 = (state_9505[(2)]);
var state_9505__$1 = state_9505;
var statearr_9513_9625 = state_9505__$1;
(statearr_9513_9625[(2)] = inst_9501);

(statearr_9513_9625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9506 === (8))){
var inst_9491 = (state_9505[(8)]);
var inst_9496 = (state_9505[(2)]);
var state_9505__$1 = (function (){var statearr_9514 = state_9505;
(statearr_9514[(9)] = inst_9496);

return statearr_9514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9505__$1,(9),results,inst_9491);
} else {
if((state_val_9506 === (9))){
var inst_9498 = (state_9505[(2)]);
var state_9505__$1 = (function (){var statearr_9515 = state_9505;
(statearr_9515[(10)] = inst_9498);

return statearr_9515;
})();
var statearr_9516_9626 = state_9505__$1;
(statearr_9516_9626[(2)] = null);

(statearr_9516_9626[(1)] = (2));


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
});})(c__9044__auto___9620,jobs,results,process,async))
;
return ((function (switch__8932__auto__,c__9044__auto___9620,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0 = (function (){
var statearr_9520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__);

(statearr_9520[(1)] = (1));

return statearr_9520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1 = (function (state_9505){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_9505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e9521){if((e9521 instanceof Object)){
var ex__8936__auto__ = e9521;
var statearr_9522_9627 = state_9505;
(statearr_9522_9627[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9628 = state_9505;
state_9505 = G__9628;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__ = function(state_9505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1.call(this,state_9505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___9620,jobs,results,process,async))
})();
var state__9046__auto__ = (function (){var statearr_9523 = f__9045__auto__.call(null);
(statearr_9523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___9620);

return statearr_9523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___9620,jobs,results,process,async))
);


var c__9044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto__,jobs,results,process,async){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto__,jobs,results,process,async){
return (function (state_9561){
var state_val_9562 = (state_9561[(1)]);
if((state_val_9562 === (7))){
var inst_9557 = (state_9561[(2)]);
var state_9561__$1 = state_9561;
var statearr_9563_9629 = state_9561__$1;
(statearr_9563_9629[(2)] = inst_9557);

(statearr_9563_9629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (20))){
var state_9561__$1 = state_9561;
var statearr_9564_9630 = state_9561__$1;
(statearr_9564_9630[(2)] = null);

(statearr_9564_9630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (1))){
var state_9561__$1 = state_9561;
var statearr_9565_9631 = state_9561__$1;
(statearr_9565_9631[(2)] = null);

(statearr_9565_9631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (4))){
var inst_9526 = (state_9561[(7)]);
var inst_9526__$1 = (state_9561[(2)]);
var inst_9527 = (inst_9526__$1 == null);
var state_9561__$1 = (function (){var statearr_9566 = state_9561;
(statearr_9566[(7)] = inst_9526__$1);

return statearr_9566;
})();
if(cljs.core.truth_(inst_9527)){
var statearr_9567_9632 = state_9561__$1;
(statearr_9567_9632[(1)] = (5));

} else {
var statearr_9568_9633 = state_9561__$1;
(statearr_9568_9633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (15))){
var inst_9539 = (state_9561[(8)]);
var state_9561__$1 = state_9561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9561__$1,(18),to,inst_9539);
} else {
if((state_val_9562 === (21))){
var inst_9552 = (state_9561[(2)]);
var state_9561__$1 = state_9561;
var statearr_9569_9634 = state_9561__$1;
(statearr_9569_9634[(2)] = inst_9552);

(statearr_9569_9634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (13))){
var inst_9554 = (state_9561[(2)]);
var state_9561__$1 = (function (){var statearr_9570 = state_9561;
(statearr_9570[(9)] = inst_9554);

return statearr_9570;
})();
var statearr_9571_9635 = state_9561__$1;
(statearr_9571_9635[(2)] = null);

(statearr_9571_9635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (6))){
var inst_9526 = (state_9561[(7)]);
var state_9561__$1 = state_9561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9561__$1,(11),inst_9526);
} else {
if((state_val_9562 === (17))){
var inst_9547 = (state_9561[(2)]);
var state_9561__$1 = state_9561;
if(cljs.core.truth_(inst_9547)){
var statearr_9572_9636 = state_9561__$1;
(statearr_9572_9636[(1)] = (19));

} else {
var statearr_9573_9637 = state_9561__$1;
(statearr_9573_9637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (3))){
var inst_9559 = (state_9561[(2)]);
var state_9561__$1 = state_9561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9561__$1,inst_9559);
} else {
if((state_val_9562 === (12))){
var inst_9536 = (state_9561[(10)]);
var state_9561__$1 = state_9561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9561__$1,(14),inst_9536);
} else {
if((state_val_9562 === (2))){
var state_9561__$1 = state_9561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9561__$1,(4),results);
} else {
if((state_val_9562 === (19))){
var state_9561__$1 = state_9561;
var statearr_9574_9638 = state_9561__$1;
(statearr_9574_9638[(2)] = null);

(statearr_9574_9638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (11))){
var inst_9536 = (state_9561[(2)]);
var state_9561__$1 = (function (){var statearr_9575 = state_9561;
(statearr_9575[(10)] = inst_9536);

return statearr_9575;
})();
var statearr_9576_9639 = state_9561__$1;
(statearr_9576_9639[(2)] = null);

(statearr_9576_9639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (9))){
var state_9561__$1 = state_9561;
var statearr_9577_9640 = state_9561__$1;
(statearr_9577_9640[(2)] = null);

(statearr_9577_9640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (5))){
var state_9561__$1 = state_9561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9578_9641 = state_9561__$1;
(statearr_9578_9641[(1)] = (8));

} else {
var statearr_9579_9642 = state_9561__$1;
(statearr_9579_9642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (14))){
var inst_9539 = (state_9561[(8)]);
var inst_9541 = (state_9561[(11)]);
var inst_9539__$1 = (state_9561[(2)]);
var inst_9540 = (inst_9539__$1 == null);
var inst_9541__$1 = cljs.core.not.call(null,inst_9540);
var state_9561__$1 = (function (){var statearr_9580 = state_9561;
(statearr_9580[(8)] = inst_9539__$1);

(statearr_9580[(11)] = inst_9541__$1);

return statearr_9580;
})();
if(inst_9541__$1){
var statearr_9581_9643 = state_9561__$1;
(statearr_9581_9643[(1)] = (15));

} else {
var statearr_9582_9644 = state_9561__$1;
(statearr_9582_9644[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (16))){
var inst_9541 = (state_9561[(11)]);
var state_9561__$1 = state_9561;
var statearr_9583_9645 = state_9561__$1;
(statearr_9583_9645[(2)] = inst_9541);

(statearr_9583_9645[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (10))){
var inst_9533 = (state_9561[(2)]);
var state_9561__$1 = state_9561;
var statearr_9584_9646 = state_9561__$1;
(statearr_9584_9646[(2)] = inst_9533);

(statearr_9584_9646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (18))){
var inst_9544 = (state_9561[(2)]);
var state_9561__$1 = state_9561;
var statearr_9585_9647 = state_9561__$1;
(statearr_9585_9647[(2)] = inst_9544);

(statearr_9585_9647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9562 === (8))){
var inst_9530 = cljs.core.async.close_BANG_.call(null,to);
var state_9561__$1 = state_9561;
var statearr_9586_9648 = state_9561__$1;
(statearr_9586_9648[(2)] = inst_9530);

(statearr_9586_9648[(1)] = (10));


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
});})(c__9044__auto__,jobs,results,process,async))
;
return ((function (switch__8932__auto__,c__9044__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0 = (function (){
var statearr_9590 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__);

(statearr_9590[(1)] = (1));

return statearr_9590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1 = (function (state_9561){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_9561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e9591){if((e9591 instanceof Object)){
var ex__8936__auto__ = e9591;
var statearr_9592_9649 = state_9561;
(statearr_9592_9649[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9650 = state_9561;
state_9561 = G__9650;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__ = function(state_9561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1.call(this,state_9561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8933__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto__,jobs,results,process,async))
})();
var state__9046__auto__ = (function (){var statearr_9593 = f__9045__auto__.call(null);
(statearr_9593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto__);

return statearr_9593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto__,jobs,results,process,async))
);

return c__9044__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9651 = [];
var len__7214__auto___9654 = arguments.length;
var i__7215__auto___9655 = (0);
while(true){
if((i__7215__auto___9655 < len__7214__auto___9654)){
args9651.push((arguments[i__7215__auto___9655]));

var G__9656 = (i__7215__auto___9655 + (1));
i__7215__auto___9655 = G__9656;
continue;
} else {
}
break;
}

var G__9653 = args9651.length;
switch (G__9653) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9651.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args9658 = [];
var len__7214__auto___9661 = arguments.length;
var i__7215__auto___9662 = (0);
while(true){
if((i__7215__auto___9662 < len__7214__auto___9661)){
args9658.push((arguments[i__7215__auto___9662]));

var G__9663 = (i__7215__auto___9662 + (1));
i__7215__auto___9662 = G__9663;
continue;
} else {
}
break;
}

var G__9660 = args9658.length;
switch (G__9660) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9658.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args9665 = [];
var len__7214__auto___9718 = arguments.length;
var i__7215__auto___9719 = (0);
while(true){
if((i__7215__auto___9719 < len__7214__auto___9718)){
args9665.push((arguments[i__7215__auto___9719]));

var G__9720 = (i__7215__auto___9719 + (1));
i__7215__auto___9719 = G__9720;
continue;
} else {
}
break;
}

var G__9667 = args9665.length;
switch (G__9667) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9665.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9044__auto___9722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___9722,tc,fc){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___9722,tc,fc){
return (function (state_9693){
var state_val_9694 = (state_9693[(1)]);
if((state_val_9694 === (7))){
var inst_9689 = (state_9693[(2)]);
var state_9693__$1 = state_9693;
var statearr_9695_9723 = state_9693__$1;
(statearr_9695_9723[(2)] = inst_9689);

(statearr_9695_9723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (1))){
var state_9693__$1 = state_9693;
var statearr_9696_9724 = state_9693__$1;
(statearr_9696_9724[(2)] = null);

(statearr_9696_9724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (4))){
var inst_9670 = (state_9693[(7)]);
var inst_9670__$1 = (state_9693[(2)]);
var inst_9671 = (inst_9670__$1 == null);
var state_9693__$1 = (function (){var statearr_9697 = state_9693;
(statearr_9697[(7)] = inst_9670__$1);

return statearr_9697;
})();
if(cljs.core.truth_(inst_9671)){
var statearr_9698_9725 = state_9693__$1;
(statearr_9698_9725[(1)] = (5));

} else {
var statearr_9699_9726 = state_9693__$1;
(statearr_9699_9726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (13))){
var state_9693__$1 = state_9693;
var statearr_9700_9727 = state_9693__$1;
(statearr_9700_9727[(2)] = null);

(statearr_9700_9727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (6))){
var inst_9670 = (state_9693[(7)]);
var inst_9676 = p.call(null,inst_9670);
var state_9693__$1 = state_9693;
if(cljs.core.truth_(inst_9676)){
var statearr_9701_9728 = state_9693__$1;
(statearr_9701_9728[(1)] = (9));

} else {
var statearr_9702_9729 = state_9693__$1;
(statearr_9702_9729[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (3))){
var inst_9691 = (state_9693[(2)]);
var state_9693__$1 = state_9693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9693__$1,inst_9691);
} else {
if((state_val_9694 === (12))){
var state_9693__$1 = state_9693;
var statearr_9703_9730 = state_9693__$1;
(statearr_9703_9730[(2)] = null);

(statearr_9703_9730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (2))){
var state_9693__$1 = state_9693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9693__$1,(4),ch);
} else {
if((state_val_9694 === (11))){
var inst_9670 = (state_9693[(7)]);
var inst_9680 = (state_9693[(2)]);
var state_9693__$1 = state_9693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9693__$1,(8),inst_9680,inst_9670);
} else {
if((state_val_9694 === (9))){
var state_9693__$1 = state_9693;
var statearr_9704_9731 = state_9693__$1;
(statearr_9704_9731[(2)] = tc);

(statearr_9704_9731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (5))){
var inst_9673 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9674 = cljs.core.async.close_BANG_.call(null,fc);
var state_9693__$1 = (function (){var statearr_9705 = state_9693;
(statearr_9705[(8)] = inst_9673);

return statearr_9705;
})();
var statearr_9706_9732 = state_9693__$1;
(statearr_9706_9732[(2)] = inst_9674);

(statearr_9706_9732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (14))){
var inst_9687 = (state_9693[(2)]);
var state_9693__$1 = state_9693;
var statearr_9707_9733 = state_9693__$1;
(statearr_9707_9733[(2)] = inst_9687);

(statearr_9707_9733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (10))){
var state_9693__$1 = state_9693;
var statearr_9708_9734 = state_9693__$1;
(statearr_9708_9734[(2)] = fc);

(statearr_9708_9734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9694 === (8))){
var inst_9682 = (state_9693[(2)]);
var state_9693__$1 = state_9693;
if(cljs.core.truth_(inst_9682)){
var statearr_9709_9735 = state_9693__$1;
(statearr_9709_9735[(1)] = (12));

} else {
var statearr_9710_9736 = state_9693__$1;
(statearr_9710_9736[(1)] = (13));

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
});})(c__9044__auto___9722,tc,fc))
;
return ((function (switch__8932__auto__,c__9044__auto___9722,tc,fc){
return (function() {
var cljs$core$async$state_machine__8933__auto__ = null;
var cljs$core$async$state_machine__8933__auto____0 = (function (){
var statearr_9714 = [null,null,null,null,null,null,null,null,null];
(statearr_9714[(0)] = cljs$core$async$state_machine__8933__auto__);

(statearr_9714[(1)] = (1));

return statearr_9714;
});
var cljs$core$async$state_machine__8933__auto____1 = (function (state_9693){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_9693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e9715){if((e9715 instanceof Object)){
var ex__8936__auto__ = e9715;
var statearr_9716_9737 = state_9693;
(statearr_9716_9737[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9738 = state_9693;
state_9693 = G__9738;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$state_machine__8933__auto__ = function(state_9693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8933__auto____1.call(this,state_9693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8933__auto____0;
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8933__auto____1;
return cljs$core$async$state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___9722,tc,fc))
})();
var state__9046__auto__ = (function (){var statearr_9717 = f__9045__auto__.call(null);
(statearr_9717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___9722);

return statearr_9717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___9722,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__9044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto__){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto__){
return (function (state_9802){
var state_val_9803 = (state_9802[(1)]);
if((state_val_9803 === (7))){
var inst_9798 = (state_9802[(2)]);
var state_9802__$1 = state_9802;
var statearr_9804_9825 = state_9802__$1;
(statearr_9804_9825[(2)] = inst_9798);

(statearr_9804_9825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9803 === (1))){
var inst_9782 = init;
var state_9802__$1 = (function (){var statearr_9805 = state_9802;
(statearr_9805[(7)] = inst_9782);

return statearr_9805;
})();
var statearr_9806_9826 = state_9802__$1;
(statearr_9806_9826[(2)] = null);

(statearr_9806_9826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9803 === (4))){
var inst_9785 = (state_9802[(8)]);
var inst_9785__$1 = (state_9802[(2)]);
var inst_9786 = (inst_9785__$1 == null);
var state_9802__$1 = (function (){var statearr_9807 = state_9802;
(statearr_9807[(8)] = inst_9785__$1);

return statearr_9807;
})();
if(cljs.core.truth_(inst_9786)){
var statearr_9808_9827 = state_9802__$1;
(statearr_9808_9827[(1)] = (5));

} else {
var statearr_9809_9828 = state_9802__$1;
(statearr_9809_9828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9803 === (6))){
var inst_9789 = (state_9802[(9)]);
var inst_9782 = (state_9802[(7)]);
var inst_9785 = (state_9802[(8)]);
var inst_9789__$1 = f.call(null,inst_9782,inst_9785);
var inst_9790 = cljs.core.reduced_QMARK_.call(null,inst_9789__$1);
var state_9802__$1 = (function (){var statearr_9810 = state_9802;
(statearr_9810[(9)] = inst_9789__$1);

return statearr_9810;
})();
if(inst_9790){
var statearr_9811_9829 = state_9802__$1;
(statearr_9811_9829[(1)] = (8));

} else {
var statearr_9812_9830 = state_9802__$1;
(statearr_9812_9830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9803 === (3))){
var inst_9800 = (state_9802[(2)]);
var state_9802__$1 = state_9802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9802__$1,inst_9800);
} else {
if((state_val_9803 === (2))){
var state_9802__$1 = state_9802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9802__$1,(4),ch);
} else {
if((state_val_9803 === (9))){
var inst_9789 = (state_9802[(9)]);
var inst_9782 = inst_9789;
var state_9802__$1 = (function (){var statearr_9813 = state_9802;
(statearr_9813[(7)] = inst_9782);

return statearr_9813;
})();
var statearr_9814_9831 = state_9802__$1;
(statearr_9814_9831[(2)] = null);

(statearr_9814_9831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9803 === (5))){
var inst_9782 = (state_9802[(7)]);
var state_9802__$1 = state_9802;
var statearr_9815_9832 = state_9802__$1;
(statearr_9815_9832[(2)] = inst_9782);

(statearr_9815_9832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9803 === (10))){
var inst_9796 = (state_9802[(2)]);
var state_9802__$1 = state_9802;
var statearr_9816_9833 = state_9802__$1;
(statearr_9816_9833[(2)] = inst_9796);

(statearr_9816_9833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9803 === (8))){
var inst_9789 = (state_9802[(9)]);
var inst_9792 = cljs.core.deref.call(null,inst_9789);
var state_9802__$1 = state_9802;
var statearr_9817_9834 = state_9802__$1;
(statearr_9817_9834[(2)] = inst_9792);

(statearr_9817_9834[(1)] = (10));


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
});})(c__9044__auto__))
;
return ((function (switch__8932__auto__,c__9044__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8933__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8933__auto____0 = (function (){
var statearr_9821 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9821[(0)] = cljs$core$async$reduce_$_state_machine__8933__auto__);

(statearr_9821[(1)] = (1));

return statearr_9821;
});
var cljs$core$async$reduce_$_state_machine__8933__auto____1 = (function (state_9802){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_9802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e9822){if((e9822 instanceof Object)){
var ex__8936__auto__ = e9822;
var statearr_9823_9835 = state_9802;
(statearr_9823_9835[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9836 = state_9802;
state_9802 = G__9836;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8933__auto__ = function(state_9802){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8933__auto____1.call(this,state_9802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8933__auto____0;
cljs$core$async$reduce_$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8933__auto____1;
return cljs$core$async$reduce_$_state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto__))
})();
var state__9046__auto__ = (function (){var statearr_9824 = f__9045__auto__.call(null);
(statearr_9824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto__);

return statearr_9824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto__))
);

return c__9044__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args9837 = [];
var len__7214__auto___9889 = arguments.length;
var i__7215__auto___9890 = (0);
while(true){
if((i__7215__auto___9890 < len__7214__auto___9889)){
args9837.push((arguments[i__7215__auto___9890]));

var G__9891 = (i__7215__auto___9890 + (1));
i__7215__auto___9890 = G__9891;
continue;
} else {
}
break;
}

var G__9839 = args9837.length;
switch (G__9839) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9837.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto__){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto__){
return (function (state_9864){
var state_val_9865 = (state_9864[(1)]);
if((state_val_9865 === (7))){
var inst_9846 = (state_9864[(2)]);
var state_9864__$1 = state_9864;
var statearr_9866_9893 = state_9864__$1;
(statearr_9866_9893[(2)] = inst_9846);

(statearr_9866_9893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9865 === (1))){
var inst_9840 = cljs.core.seq.call(null,coll);
var inst_9841 = inst_9840;
var state_9864__$1 = (function (){var statearr_9867 = state_9864;
(statearr_9867[(7)] = inst_9841);

return statearr_9867;
})();
var statearr_9868_9894 = state_9864__$1;
(statearr_9868_9894[(2)] = null);

(statearr_9868_9894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9865 === (4))){
var inst_9841 = (state_9864[(7)]);
var inst_9844 = cljs.core.first.call(null,inst_9841);
var state_9864__$1 = state_9864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9864__$1,(7),ch,inst_9844);
} else {
if((state_val_9865 === (13))){
var inst_9858 = (state_9864[(2)]);
var state_9864__$1 = state_9864;
var statearr_9869_9895 = state_9864__$1;
(statearr_9869_9895[(2)] = inst_9858);

(statearr_9869_9895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9865 === (6))){
var inst_9849 = (state_9864[(2)]);
var state_9864__$1 = state_9864;
if(cljs.core.truth_(inst_9849)){
var statearr_9870_9896 = state_9864__$1;
(statearr_9870_9896[(1)] = (8));

} else {
var statearr_9871_9897 = state_9864__$1;
(statearr_9871_9897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9865 === (3))){
var inst_9862 = (state_9864[(2)]);
var state_9864__$1 = state_9864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9864__$1,inst_9862);
} else {
if((state_val_9865 === (12))){
var state_9864__$1 = state_9864;
var statearr_9872_9898 = state_9864__$1;
(statearr_9872_9898[(2)] = null);

(statearr_9872_9898[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9865 === (2))){
var inst_9841 = (state_9864[(7)]);
var state_9864__$1 = state_9864;
if(cljs.core.truth_(inst_9841)){
var statearr_9873_9899 = state_9864__$1;
(statearr_9873_9899[(1)] = (4));

} else {
var statearr_9874_9900 = state_9864__$1;
(statearr_9874_9900[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9865 === (11))){
var inst_9855 = cljs.core.async.close_BANG_.call(null,ch);
var state_9864__$1 = state_9864;
var statearr_9875_9901 = state_9864__$1;
(statearr_9875_9901[(2)] = inst_9855);

(statearr_9875_9901[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9865 === (9))){
var state_9864__$1 = state_9864;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9876_9902 = state_9864__$1;
(statearr_9876_9902[(1)] = (11));

} else {
var statearr_9877_9903 = state_9864__$1;
(statearr_9877_9903[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9865 === (5))){
var inst_9841 = (state_9864[(7)]);
var state_9864__$1 = state_9864;
var statearr_9878_9904 = state_9864__$1;
(statearr_9878_9904[(2)] = inst_9841);

(statearr_9878_9904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9865 === (10))){
var inst_9860 = (state_9864[(2)]);
var state_9864__$1 = state_9864;
var statearr_9879_9905 = state_9864__$1;
(statearr_9879_9905[(2)] = inst_9860);

(statearr_9879_9905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9865 === (8))){
var inst_9841 = (state_9864[(7)]);
var inst_9851 = cljs.core.next.call(null,inst_9841);
var inst_9841__$1 = inst_9851;
var state_9864__$1 = (function (){var statearr_9880 = state_9864;
(statearr_9880[(7)] = inst_9841__$1);

return statearr_9880;
})();
var statearr_9881_9906 = state_9864__$1;
(statearr_9881_9906[(2)] = null);

(statearr_9881_9906[(1)] = (2));


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
});})(c__9044__auto__))
;
return ((function (switch__8932__auto__,c__9044__auto__){
return (function() {
var cljs$core$async$state_machine__8933__auto__ = null;
var cljs$core$async$state_machine__8933__auto____0 = (function (){
var statearr_9885 = [null,null,null,null,null,null,null,null];
(statearr_9885[(0)] = cljs$core$async$state_machine__8933__auto__);

(statearr_9885[(1)] = (1));

return statearr_9885;
});
var cljs$core$async$state_machine__8933__auto____1 = (function (state_9864){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_9864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e9886){if((e9886 instanceof Object)){
var ex__8936__auto__ = e9886;
var statearr_9887_9907 = state_9864;
(statearr_9887_9907[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9908 = state_9864;
state_9864 = G__9908;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$state_machine__8933__auto__ = function(state_9864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8933__auto____1.call(this,state_9864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8933__auto____0;
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8933__auto____1;
return cljs$core$async$state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto__))
})();
var state__9046__auto__ = (function (){var statearr_9888 = f__9045__auto__.call(null);
(statearr_9888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto__);

return statearr_9888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto__))
);

return c__9044__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6811__auto__ = (((_ == null))?null:_);
var m__6812__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,_);
} else {
var m__6812__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10130 = (function (mult,ch,cs,meta10131){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10131 = meta10131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10132,meta10131__$1){
var self__ = this;
var _10132__$1 = this;
return (new cljs.core.async.t_cljs$core$async10130(self__.mult,self__.ch,self__.cs,meta10131__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10132){
var self__ = this;
var _10132__$1 = this;
return self__.meta10131;
});})(cs))
;

cljs.core.async.t_cljs$core$async10130.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10130.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10130.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10130.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10130.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10130.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10131","meta10131",-920606940,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10130";

cljs.core.async.t_cljs$core$async10130.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10130");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10130 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10130(mult__$1,ch__$1,cs__$1,meta10131){
return (new cljs.core.async.t_cljs$core$async10130(mult__$1,ch__$1,cs__$1,meta10131));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10130(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9044__auto___10351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___10351,cs,m,dchan,dctr,done){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___10351,cs,m,dchan,dctr,done){
return (function (state_10263){
var state_val_10264 = (state_10263[(1)]);
if((state_val_10264 === (7))){
var inst_10259 = (state_10263[(2)]);
var state_10263__$1 = state_10263;
var statearr_10265_10352 = state_10263__$1;
(statearr_10265_10352[(2)] = inst_10259);

(statearr_10265_10352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (20))){
var inst_10164 = (state_10263[(7)]);
var inst_10174 = cljs.core.first.call(null,inst_10164);
var inst_10175 = cljs.core.nth.call(null,inst_10174,(0),null);
var inst_10176 = cljs.core.nth.call(null,inst_10174,(1),null);
var state_10263__$1 = (function (){var statearr_10266 = state_10263;
(statearr_10266[(8)] = inst_10175);

return statearr_10266;
})();
if(cljs.core.truth_(inst_10176)){
var statearr_10267_10353 = state_10263__$1;
(statearr_10267_10353[(1)] = (22));

} else {
var statearr_10268_10354 = state_10263__$1;
(statearr_10268_10354[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (27))){
var inst_10135 = (state_10263[(9)]);
var inst_10204 = (state_10263[(10)]);
var inst_10211 = (state_10263[(11)]);
var inst_10206 = (state_10263[(12)]);
var inst_10211__$1 = cljs.core._nth.call(null,inst_10204,inst_10206);
var inst_10212 = cljs.core.async.put_BANG_.call(null,inst_10211__$1,inst_10135,done);
var state_10263__$1 = (function (){var statearr_10269 = state_10263;
(statearr_10269[(11)] = inst_10211__$1);

return statearr_10269;
})();
if(cljs.core.truth_(inst_10212)){
var statearr_10270_10355 = state_10263__$1;
(statearr_10270_10355[(1)] = (30));

} else {
var statearr_10271_10356 = state_10263__$1;
(statearr_10271_10356[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (1))){
var state_10263__$1 = state_10263;
var statearr_10272_10357 = state_10263__$1;
(statearr_10272_10357[(2)] = null);

(statearr_10272_10357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (24))){
var inst_10164 = (state_10263[(7)]);
var inst_10181 = (state_10263[(2)]);
var inst_10182 = cljs.core.next.call(null,inst_10164);
var inst_10144 = inst_10182;
var inst_10145 = null;
var inst_10146 = (0);
var inst_10147 = (0);
var state_10263__$1 = (function (){var statearr_10273 = state_10263;
(statearr_10273[(13)] = inst_10145);

(statearr_10273[(14)] = inst_10146);

(statearr_10273[(15)] = inst_10147);

(statearr_10273[(16)] = inst_10181);

(statearr_10273[(17)] = inst_10144);

return statearr_10273;
})();
var statearr_10274_10358 = state_10263__$1;
(statearr_10274_10358[(2)] = null);

(statearr_10274_10358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (39))){
var state_10263__$1 = state_10263;
var statearr_10278_10359 = state_10263__$1;
(statearr_10278_10359[(2)] = null);

(statearr_10278_10359[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (4))){
var inst_10135 = (state_10263[(9)]);
var inst_10135__$1 = (state_10263[(2)]);
var inst_10136 = (inst_10135__$1 == null);
var state_10263__$1 = (function (){var statearr_10279 = state_10263;
(statearr_10279[(9)] = inst_10135__$1);

return statearr_10279;
})();
if(cljs.core.truth_(inst_10136)){
var statearr_10280_10360 = state_10263__$1;
(statearr_10280_10360[(1)] = (5));

} else {
var statearr_10281_10361 = state_10263__$1;
(statearr_10281_10361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (15))){
var inst_10145 = (state_10263[(13)]);
var inst_10146 = (state_10263[(14)]);
var inst_10147 = (state_10263[(15)]);
var inst_10144 = (state_10263[(17)]);
var inst_10160 = (state_10263[(2)]);
var inst_10161 = (inst_10147 + (1));
var tmp10275 = inst_10145;
var tmp10276 = inst_10146;
var tmp10277 = inst_10144;
var inst_10144__$1 = tmp10277;
var inst_10145__$1 = tmp10275;
var inst_10146__$1 = tmp10276;
var inst_10147__$1 = inst_10161;
var state_10263__$1 = (function (){var statearr_10282 = state_10263;
(statearr_10282[(13)] = inst_10145__$1);

(statearr_10282[(14)] = inst_10146__$1);

(statearr_10282[(15)] = inst_10147__$1);

(statearr_10282[(17)] = inst_10144__$1);

(statearr_10282[(18)] = inst_10160);

return statearr_10282;
})();
var statearr_10283_10362 = state_10263__$1;
(statearr_10283_10362[(2)] = null);

(statearr_10283_10362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (21))){
var inst_10185 = (state_10263[(2)]);
var state_10263__$1 = state_10263;
var statearr_10287_10363 = state_10263__$1;
(statearr_10287_10363[(2)] = inst_10185);

(statearr_10287_10363[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (31))){
var inst_10211 = (state_10263[(11)]);
var inst_10215 = done.call(null,null);
var inst_10216 = cljs.core.async.untap_STAR_.call(null,m,inst_10211);
var state_10263__$1 = (function (){var statearr_10288 = state_10263;
(statearr_10288[(19)] = inst_10215);

return statearr_10288;
})();
var statearr_10289_10364 = state_10263__$1;
(statearr_10289_10364[(2)] = inst_10216);

(statearr_10289_10364[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (32))){
var inst_10205 = (state_10263[(20)]);
var inst_10204 = (state_10263[(10)]);
var inst_10203 = (state_10263[(21)]);
var inst_10206 = (state_10263[(12)]);
var inst_10218 = (state_10263[(2)]);
var inst_10219 = (inst_10206 + (1));
var tmp10284 = inst_10205;
var tmp10285 = inst_10204;
var tmp10286 = inst_10203;
var inst_10203__$1 = tmp10286;
var inst_10204__$1 = tmp10285;
var inst_10205__$1 = tmp10284;
var inst_10206__$1 = inst_10219;
var state_10263__$1 = (function (){var statearr_10290 = state_10263;
(statearr_10290[(22)] = inst_10218);

(statearr_10290[(20)] = inst_10205__$1);

(statearr_10290[(10)] = inst_10204__$1);

(statearr_10290[(21)] = inst_10203__$1);

(statearr_10290[(12)] = inst_10206__$1);

return statearr_10290;
})();
var statearr_10291_10365 = state_10263__$1;
(statearr_10291_10365[(2)] = null);

(statearr_10291_10365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (40))){
var inst_10231 = (state_10263[(23)]);
var inst_10235 = done.call(null,null);
var inst_10236 = cljs.core.async.untap_STAR_.call(null,m,inst_10231);
var state_10263__$1 = (function (){var statearr_10292 = state_10263;
(statearr_10292[(24)] = inst_10235);

return statearr_10292;
})();
var statearr_10293_10366 = state_10263__$1;
(statearr_10293_10366[(2)] = inst_10236);

(statearr_10293_10366[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (33))){
var inst_10222 = (state_10263[(25)]);
var inst_10224 = cljs.core.chunked_seq_QMARK_.call(null,inst_10222);
var state_10263__$1 = state_10263;
if(inst_10224){
var statearr_10294_10367 = state_10263__$1;
(statearr_10294_10367[(1)] = (36));

} else {
var statearr_10295_10368 = state_10263__$1;
(statearr_10295_10368[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (13))){
var inst_10154 = (state_10263[(26)]);
var inst_10157 = cljs.core.async.close_BANG_.call(null,inst_10154);
var state_10263__$1 = state_10263;
var statearr_10296_10369 = state_10263__$1;
(statearr_10296_10369[(2)] = inst_10157);

(statearr_10296_10369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (22))){
var inst_10175 = (state_10263[(8)]);
var inst_10178 = cljs.core.async.close_BANG_.call(null,inst_10175);
var state_10263__$1 = state_10263;
var statearr_10297_10370 = state_10263__$1;
(statearr_10297_10370[(2)] = inst_10178);

(statearr_10297_10370[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (36))){
var inst_10222 = (state_10263[(25)]);
var inst_10226 = cljs.core.chunk_first.call(null,inst_10222);
var inst_10227 = cljs.core.chunk_rest.call(null,inst_10222);
var inst_10228 = cljs.core.count.call(null,inst_10226);
var inst_10203 = inst_10227;
var inst_10204 = inst_10226;
var inst_10205 = inst_10228;
var inst_10206 = (0);
var state_10263__$1 = (function (){var statearr_10298 = state_10263;
(statearr_10298[(20)] = inst_10205);

(statearr_10298[(10)] = inst_10204);

(statearr_10298[(21)] = inst_10203);

(statearr_10298[(12)] = inst_10206);

return statearr_10298;
})();
var statearr_10299_10371 = state_10263__$1;
(statearr_10299_10371[(2)] = null);

(statearr_10299_10371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (41))){
var inst_10222 = (state_10263[(25)]);
var inst_10238 = (state_10263[(2)]);
var inst_10239 = cljs.core.next.call(null,inst_10222);
var inst_10203 = inst_10239;
var inst_10204 = null;
var inst_10205 = (0);
var inst_10206 = (0);
var state_10263__$1 = (function (){var statearr_10300 = state_10263;
(statearr_10300[(27)] = inst_10238);

(statearr_10300[(20)] = inst_10205);

(statearr_10300[(10)] = inst_10204);

(statearr_10300[(21)] = inst_10203);

(statearr_10300[(12)] = inst_10206);

return statearr_10300;
})();
var statearr_10301_10372 = state_10263__$1;
(statearr_10301_10372[(2)] = null);

(statearr_10301_10372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (43))){
var state_10263__$1 = state_10263;
var statearr_10302_10373 = state_10263__$1;
(statearr_10302_10373[(2)] = null);

(statearr_10302_10373[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (29))){
var inst_10247 = (state_10263[(2)]);
var state_10263__$1 = state_10263;
var statearr_10303_10374 = state_10263__$1;
(statearr_10303_10374[(2)] = inst_10247);

(statearr_10303_10374[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (44))){
var inst_10256 = (state_10263[(2)]);
var state_10263__$1 = (function (){var statearr_10304 = state_10263;
(statearr_10304[(28)] = inst_10256);

return statearr_10304;
})();
var statearr_10305_10375 = state_10263__$1;
(statearr_10305_10375[(2)] = null);

(statearr_10305_10375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (6))){
var inst_10195 = (state_10263[(29)]);
var inst_10194 = cljs.core.deref.call(null,cs);
var inst_10195__$1 = cljs.core.keys.call(null,inst_10194);
var inst_10196 = cljs.core.count.call(null,inst_10195__$1);
var inst_10197 = cljs.core.reset_BANG_.call(null,dctr,inst_10196);
var inst_10202 = cljs.core.seq.call(null,inst_10195__$1);
var inst_10203 = inst_10202;
var inst_10204 = null;
var inst_10205 = (0);
var inst_10206 = (0);
var state_10263__$1 = (function (){var statearr_10306 = state_10263;
(statearr_10306[(30)] = inst_10197);

(statearr_10306[(20)] = inst_10205);

(statearr_10306[(10)] = inst_10204);

(statearr_10306[(21)] = inst_10203);

(statearr_10306[(29)] = inst_10195__$1);

(statearr_10306[(12)] = inst_10206);

return statearr_10306;
})();
var statearr_10307_10376 = state_10263__$1;
(statearr_10307_10376[(2)] = null);

(statearr_10307_10376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (28))){
var inst_10222 = (state_10263[(25)]);
var inst_10203 = (state_10263[(21)]);
var inst_10222__$1 = cljs.core.seq.call(null,inst_10203);
var state_10263__$1 = (function (){var statearr_10308 = state_10263;
(statearr_10308[(25)] = inst_10222__$1);

return statearr_10308;
})();
if(inst_10222__$1){
var statearr_10309_10377 = state_10263__$1;
(statearr_10309_10377[(1)] = (33));

} else {
var statearr_10310_10378 = state_10263__$1;
(statearr_10310_10378[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (25))){
var inst_10205 = (state_10263[(20)]);
var inst_10206 = (state_10263[(12)]);
var inst_10208 = (inst_10206 < inst_10205);
var inst_10209 = inst_10208;
var state_10263__$1 = state_10263;
if(cljs.core.truth_(inst_10209)){
var statearr_10311_10379 = state_10263__$1;
(statearr_10311_10379[(1)] = (27));

} else {
var statearr_10312_10380 = state_10263__$1;
(statearr_10312_10380[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (34))){
var state_10263__$1 = state_10263;
var statearr_10313_10381 = state_10263__$1;
(statearr_10313_10381[(2)] = null);

(statearr_10313_10381[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (17))){
var state_10263__$1 = state_10263;
var statearr_10314_10382 = state_10263__$1;
(statearr_10314_10382[(2)] = null);

(statearr_10314_10382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (3))){
var inst_10261 = (state_10263[(2)]);
var state_10263__$1 = state_10263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10263__$1,inst_10261);
} else {
if((state_val_10264 === (12))){
var inst_10190 = (state_10263[(2)]);
var state_10263__$1 = state_10263;
var statearr_10315_10383 = state_10263__$1;
(statearr_10315_10383[(2)] = inst_10190);

(statearr_10315_10383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (2))){
var state_10263__$1 = state_10263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10263__$1,(4),ch);
} else {
if((state_val_10264 === (23))){
var state_10263__$1 = state_10263;
var statearr_10316_10384 = state_10263__$1;
(statearr_10316_10384[(2)] = null);

(statearr_10316_10384[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (35))){
var inst_10245 = (state_10263[(2)]);
var state_10263__$1 = state_10263;
var statearr_10317_10385 = state_10263__$1;
(statearr_10317_10385[(2)] = inst_10245);

(statearr_10317_10385[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (19))){
var inst_10164 = (state_10263[(7)]);
var inst_10168 = cljs.core.chunk_first.call(null,inst_10164);
var inst_10169 = cljs.core.chunk_rest.call(null,inst_10164);
var inst_10170 = cljs.core.count.call(null,inst_10168);
var inst_10144 = inst_10169;
var inst_10145 = inst_10168;
var inst_10146 = inst_10170;
var inst_10147 = (0);
var state_10263__$1 = (function (){var statearr_10318 = state_10263;
(statearr_10318[(13)] = inst_10145);

(statearr_10318[(14)] = inst_10146);

(statearr_10318[(15)] = inst_10147);

(statearr_10318[(17)] = inst_10144);

return statearr_10318;
})();
var statearr_10319_10386 = state_10263__$1;
(statearr_10319_10386[(2)] = null);

(statearr_10319_10386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (11))){
var inst_10164 = (state_10263[(7)]);
var inst_10144 = (state_10263[(17)]);
var inst_10164__$1 = cljs.core.seq.call(null,inst_10144);
var state_10263__$1 = (function (){var statearr_10320 = state_10263;
(statearr_10320[(7)] = inst_10164__$1);

return statearr_10320;
})();
if(inst_10164__$1){
var statearr_10321_10387 = state_10263__$1;
(statearr_10321_10387[(1)] = (16));

} else {
var statearr_10322_10388 = state_10263__$1;
(statearr_10322_10388[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (9))){
var inst_10192 = (state_10263[(2)]);
var state_10263__$1 = state_10263;
var statearr_10323_10389 = state_10263__$1;
(statearr_10323_10389[(2)] = inst_10192);

(statearr_10323_10389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (5))){
var inst_10142 = cljs.core.deref.call(null,cs);
var inst_10143 = cljs.core.seq.call(null,inst_10142);
var inst_10144 = inst_10143;
var inst_10145 = null;
var inst_10146 = (0);
var inst_10147 = (0);
var state_10263__$1 = (function (){var statearr_10324 = state_10263;
(statearr_10324[(13)] = inst_10145);

(statearr_10324[(14)] = inst_10146);

(statearr_10324[(15)] = inst_10147);

(statearr_10324[(17)] = inst_10144);

return statearr_10324;
})();
var statearr_10325_10390 = state_10263__$1;
(statearr_10325_10390[(2)] = null);

(statearr_10325_10390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (14))){
var state_10263__$1 = state_10263;
var statearr_10326_10391 = state_10263__$1;
(statearr_10326_10391[(2)] = null);

(statearr_10326_10391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (45))){
var inst_10253 = (state_10263[(2)]);
var state_10263__$1 = state_10263;
var statearr_10327_10392 = state_10263__$1;
(statearr_10327_10392[(2)] = inst_10253);

(statearr_10327_10392[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (26))){
var inst_10195 = (state_10263[(29)]);
var inst_10249 = (state_10263[(2)]);
var inst_10250 = cljs.core.seq.call(null,inst_10195);
var state_10263__$1 = (function (){var statearr_10328 = state_10263;
(statearr_10328[(31)] = inst_10249);

return statearr_10328;
})();
if(inst_10250){
var statearr_10329_10393 = state_10263__$1;
(statearr_10329_10393[(1)] = (42));

} else {
var statearr_10330_10394 = state_10263__$1;
(statearr_10330_10394[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (16))){
var inst_10164 = (state_10263[(7)]);
var inst_10166 = cljs.core.chunked_seq_QMARK_.call(null,inst_10164);
var state_10263__$1 = state_10263;
if(inst_10166){
var statearr_10331_10395 = state_10263__$1;
(statearr_10331_10395[(1)] = (19));

} else {
var statearr_10332_10396 = state_10263__$1;
(statearr_10332_10396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (38))){
var inst_10242 = (state_10263[(2)]);
var state_10263__$1 = state_10263;
var statearr_10333_10397 = state_10263__$1;
(statearr_10333_10397[(2)] = inst_10242);

(statearr_10333_10397[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (30))){
var state_10263__$1 = state_10263;
var statearr_10334_10398 = state_10263__$1;
(statearr_10334_10398[(2)] = null);

(statearr_10334_10398[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (10))){
var inst_10145 = (state_10263[(13)]);
var inst_10147 = (state_10263[(15)]);
var inst_10153 = cljs.core._nth.call(null,inst_10145,inst_10147);
var inst_10154 = cljs.core.nth.call(null,inst_10153,(0),null);
var inst_10155 = cljs.core.nth.call(null,inst_10153,(1),null);
var state_10263__$1 = (function (){var statearr_10335 = state_10263;
(statearr_10335[(26)] = inst_10154);

return statearr_10335;
})();
if(cljs.core.truth_(inst_10155)){
var statearr_10336_10399 = state_10263__$1;
(statearr_10336_10399[(1)] = (13));

} else {
var statearr_10337_10400 = state_10263__$1;
(statearr_10337_10400[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (18))){
var inst_10188 = (state_10263[(2)]);
var state_10263__$1 = state_10263;
var statearr_10338_10401 = state_10263__$1;
(statearr_10338_10401[(2)] = inst_10188);

(statearr_10338_10401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (42))){
var state_10263__$1 = state_10263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10263__$1,(45),dchan);
} else {
if((state_val_10264 === (37))){
var inst_10222 = (state_10263[(25)]);
var inst_10135 = (state_10263[(9)]);
var inst_10231 = (state_10263[(23)]);
var inst_10231__$1 = cljs.core.first.call(null,inst_10222);
var inst_10232 = cljs.core.async.put_BANG_.call(null,inst_10231__$1,inst_10135,done);
var state_10263__$1 = (function (){var statearr_10339 = state_10263;
(statearr_10339[(23)] = inst_10231__$1);

return statearr_10339;
})();
if(cljs.core.truth_(inst_10232)){
var statearr_10340_10402 = state_10263__$1;
(statearr_10340_10402[(1)] = (39));

} else {
var statearr_10341_10403 = state_10263__$1;
(statearr_10341_10403[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10264 === (8))){
var inst_10146 = (state_10263[(14)]);
var inst_10147 = (state_10263[(15)]);
var inst_10149 = (inst_10147 < inst_10146);
var inst_10150 = inst_10149;
var state_10263__$1 = state_10263;
if(cljs.core.truth_(inst_10150)){
var statearr_10342_10404 = state_10263__$1;
(statearr_10342_10404[(1)] = (10));

} else {
var statearr_10343_10405 = state_10263__$1;
(statearr_10343_10405[(1)] = (11));

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
});})(c__9044__auto___10351,cs,m,dchan,dctr,done))
;
return ((function (switch__8932__auto__,c__9044__auto___10351,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8933__auto__ = null;
var cljs$core$async$mult_$_state_machine__8933__auto____0 = (function (){
var statearr_10347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10347[(0)] = cljs$core$async$mult_$_state_machine__8933__auto__);

(statearr_10347[(1)] = (1));

return statearr_10347;
});
var cljs$core$async$mult_$_state_machine__8933__auto____1 = (function (state_10263){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_10263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e10348){if((e10348 instanceof Object)){
var ex__8936__auto__ = e10348;
var statearr_10349_10406 = state_10263;
(statearr_10349_10406[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10407 = state_10263;
state_10263 = G__10407;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8933__auto__ = function(state_10263){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8933__auto____1.call(this,state_10263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8933__auto____0;
cljs$core$async$mult_$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8933__auto____1;
return cljs$core$async$mult_$_state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___10351,cs,m,dchan,dctr,done))
})();
var state__9046__auto__ = (function (){var statearr_10350 = f__9045__auto__.call(null);
(statearr_10350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___10351);

return statearr_10350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___10351,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10408 = [];
var len__7214__auto___10411 = arguments.length;
var i__7215__auto___10412 = (0);
while(true){
if((i__7215__auto___10412 < len__7214__auto___10411)){
args10408.push((arguments[i__7215__auto___10412]));

var G__10413 = (i__7215__auto___10412 + (1));
i__7215__auto___10412 = G__10413;
continue;
} else {
}
break;
}

var G__10410 = args10408.length;
switch (G__10410) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10408.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,state_map);
} else {
var m__6812__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,mode);
} else {
var m__6812__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___10425 = arguments.length;
var i__7215__auto___10426 = (0);
while(true){
if((i__7215__auto___10426 < len__7214__auto___10425)){
args__7221__auto__.push((arguments[i__7215__auto___10426]));

var G__10427 = (i__7215__auto___10426 + (1));
i__7215__auto___10426 = G__10427;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10419){
var map__10420 = p__10419;
var map__10420__$1 = ((((!((map__10420 == null)))?((((map__10420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10420):map__10420);
var opts = map__10420__$1;
var statearr_10422_10428 = state;
(statearr_10422_10428[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10420,map__10420__$1,opts){
return (function (val){
var statearr_10423_10429 = state;
(statearr_10423_10429[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10420,map__10420__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10424_10430 = state;
(statearr_10424_10430[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10415){
var G__10416 = cljs.core.first.call(null,seq10415);
var seq10415__$1 = cljs.core.next.call(null,seq10415);
var G__10417 = cljs.core.first.call(null,seq10415__$1);
var seq10415__$2 = cljs.core.next.call(null,seq10415__$1);
var G__10418 = cljs.core.first.call(null,seq10415__$2);
var seq10415__$3 = cljs.core.next.call(null,seq10415__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10416,G__10417,G__10418,seq10415__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10594 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10595){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10595 = meta10595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10596,meta10595__$1){
var self__ = this;
var _10596__$1 = this;
return (new cljs.core.async.t_cljs$core$async10594(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10595__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10596){
var self__ = this;
var _10596__$1 = this;
return self__.meta10595;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10594.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10594.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10594.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10594.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10594.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10594.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10594.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10594.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10595","meta10595",-1928847236,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10594";

cljs.core.async.t_cljs$core$async10594.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10594");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10594 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10594(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10595){
return (new cljs.core.async.t_cljs$core$async10594(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10595));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10594(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9044__auto___10757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___10757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___10757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10694){
var state_val_10695 = (state_10694[(1)]);
if((state_val_10695 === (7))){
var inst_10612 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
var statearr_10696_10758 = state_10694__$1;
(statearr_10696_10758[(2)] = inst_10612);

(statearr_10696_10758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (20))){
var inst_10624 = (state_10694[(7)]);
var state_10694__$1 = state_10694;
var statearr_10697_10759 = state_10694__$1;
(statearr_10697_10759[(2)] = inst_10624);

(statearr_10697_10759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (27))){
var state_10694__$1 = state_10694;
var statearr_10698_10760 = state_10694__$1;
(statearr_10698_10760[(2)] = null);

(statearr_10698_10760[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (1))){
var inst_10600 = (state_10694[(8)]);
var inst_10600__$1 = calc_state.call(null);
var inst_10602 = (inst_10600__$1 == null);
var inst_10603 = cljs.core.not.call(null,inst_10602);
var state_10694__$1 = (function (){var statearr_10699 = state_10694;
(statearr_10699[(8)] = inst_10600__$1);

return statearr_10699;
})();
if(inst_10603){
var statearr_10700_10761 = state_10694__$1;
(statearr_10700_10761[(1)] = (2));

} else {
var statearr_10701_10762 = state_10694__$1;
(statearr_10701_10762[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (24))){
var inst_10668 = (state_10694[(9)]);
var inst_10654 = (state_10694[(10)]);
var inst_10647 = (state_10694[(11)]);
var inst_10668__$1 = inst_10647.call(null,inst_10654);
var state_10694__$1 = (function (){var statearr_10702 = state_10694;
(statearr_10702[(9)] = inst_10668__$1);

return statearr_10702;
})();
if(cljs.core.truth_(inst_10668__$1)){
var statearr_10703_10763 = state_10694__$1;
(statearr_10703_10763[(1)] = (29));

} else {
var statearr_10704_10764 = state_10694__$1;
(statearr_10704_10764[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (4))){
var inst_10615 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
if(cljs.core.truth_(inst_10615)){
var statearr_10705_10765 = state_10694__$1;
(statearr_10705_10765[(1)] = (8));

} else {
var statearr_10706_10766 = state_10694__$1;
(statearr_10706_10766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (15))){
var inst_10641 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
if(cljs.core.truth_(inst_10641)){
var statearr_10707_10767 = state_10694__$1;
(statearr_10707_10767[(1)] = (19));

} else {
var statearr_10708_10768 = state_10694__$1;
(statearr_10708_10768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (21))){
var inst_10646 = (state_10694[(12)]);
var inst_10646__$1 = (state_10694[(2)]);
var inst_10647 = cljs.core.get.call(null,inst_10646__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10648 = cljs.core.get.call(null,inst_10646__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10649 = cljs.core.get.call(null,inst_10646__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10694__$1 = (function (){var statearr_10709 = state_10694;
(statearr_10709[(12)] = inst_10646__$1);

(statearr_10709[(13)] = inst_10648);

(statearr_10709[(11)] = inst_10647);

return statearr_10709;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10694__$1,(22),inst_10649);
} else {
if((state_val_10695 === (31))){
var inst_10676 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
if(cljs.core.truth_(inst_10676)){
var statearr_10710_10769 = state_10694__$1;
(statearr_10710_10769[(1)] = (32));

} else {
var statearr_10711_10770 = state_10694__$1;
(statearr_10711_10770[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (32))){
var inst_10653 = (state_10694[(14)]);
var state_10694__$1 = state_10694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10694__$1,(35),out,inst_10653);
} else {
if((state_val_10695 === (33))){
var inst_10646 = (state_10694[(12)]);
var inst_10624 = inst_10646;
var state_10694__$1 = (function (){var statearr_10712 = state_10694;
(statearr_10712[(7)] = inst_10624);

return statearr_10712;
})();
var statearr_10713_10771 = state_10694__$1;
(statearr_10713_10771[(2)] = null);

(statearr_10713_10771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (13))){
var inst_10624 = (state_10694[(7)]);
var inst_10631 = inst_10624.cljs$lang$protocol_mask$partition0$;
var inst_10632 = (inst_10631 & (64));
var inst_10633 = inst_10624.cljs$core$ISeq$;
var inst_10634 = (inst_10632) || (inst_10633);
var state_10694__$1 = state_10694;
if(cljs.core.truth_(inst_10634)){
var statearr_10714_10772 = state_10694__$1;
(statearr_10714_10772[(1)] = (16));

} else {
var statearr_10715_10773 = state_10694__$1;
(statearr_10715_10773[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (22))){
var inst_10653 = (state_10694[(14)]);
var inst_10654 = (state_10694[(10)]);
var inst_10652 = (state_10694[(2)]);
var inst_10653__$1 = cljs.core.nth.call(null,inst_10652,(0),null);
var inst_10654__$1 = cljs.core.nth.call(null,inst_10652,(1),null);
var inst_10655 = (inst_10653__$1 == null);
var inst_10656 = cljs.core._EQ_.call(null,inst_10654__$1,change);
var inst_10657 = (inst_10655) || (inst_10656);
var state_10694__$1 = (function (){var statearr_10716 = state_10694;
(statearr_10716[(14)] = inst_10653__$1);

(statearr_10716[(10)] = inst_10654__$1);

return statearr_10716;
})();
if(cljs.core.truth_(inst_10657)){
var statearr_10717_10774 = state_10694__$1;
(statearr_10717_10774[(1)] = (23));

} else {
var statearr_10718_10775 = state_10694__$1;
(statearr_10718_10775[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (36))){
var inst_10646 = (state_10694[(12)]);
var inst_10624 = inst_10646;
var state_10694__$1 = (function (){var statearr_10719 = state_10694;
(statearr_10719[(7)] = inst_10624);

return statearr_10719;
})();
var statearr_10720_10776 = state_10694__$1;
(statearr_10720_10776[(2)] = null);

(statearr_10720_10776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (29))){
var inst_10668 = (state_10694[(9)]);
var state_10694__$1 = state_10694;
var statearr_10721_10777 = state_10694__$1;
(statearr_10721_10777[(2)] = inst_10668);

(statearr_10721_10777[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (6))){
var state_10694__$1 = state_10694;
var statearr_10722_10778 = state_10694__$1;
(statearr_10722_10778[(2)] = false);

(statearr_10722_10778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (28))){
var inst_10664 = (state_10694[(2)]);
var inst_10665 = calc_state.call(null);
var inst_10624 = inst_10665;
var state_10694__$1 = (function (){var statearr_10723 = state_10694;
(statearr_10723[(15)] = inst_10664);

(statearr_10723[(7)] = inst_10624);

return statearr_10723;
})();
var statearr_10724_10779 = state_10694__$1;
(statearr_10724_10779[(2)] = null);

(statearr_10724_10779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (25))){
var inst_10690 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
var statearr_10725_10780 = state_10694__$1;
(statearr_10725_10780[(2)] = inst_10690);

(statearr_10725_10780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (34))){
var inst_10688 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
var statearr_10726_10781 = state_10694__$1;
(statearr_10726_10781[(2)] = inst_10688);

(statearr_10726_10781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (17))){
var state_10694__$1 = state_10694;
var statearr_10727_10782 = state_10694__$1;
(statearr_10727_10782[(2)] = false);

(statearr_10727_10782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (3))){
var state_10694__$1 = state_10694;
var statearr_10728_10783 = state_10694__$1;
(statearr_10728_10783[(2)] = false);

(statearr_10728_10783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (12))){
var inst_10692 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10694__$1,inst_10692);
} else {
if((state_val_10695 === (2))){
var inst_10600 = (state_10694[(8)]);
var inst_10605 = inst_10600.cljs$lang$protocol_mask$partition0$;
var inst_10606 = (inst_10605 & (64));
var inst_10607 = inst_10600.cljs$core$ISeq$;
var inst_10608 = (inst_10606) || (inst_10607);
var state_10694__$1 = state_10694;
if(cljs.core.truth_(inst_10608)){
var statearr_10729_10784 = state_10694__$1;
(statearr_10729_10784[(1)] = (5));

} else {
var statearr_10730_10785 = state_10694__$1;
(statearr_10730_10785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (23))){
var inst_10653 = (state_10694[(14)]);
var inst_10659 = (inst_10653 == null);
var state_10694__$1 = state_10694;
if(cljs.core.truth_(inst_10659)){
var statearr_10731_10786 = state_10694__$1;
(statearr_10731_10786[(1)] = (26));

} else {
var statearr_10732_10787 = state_10694__$1;
(statearr_10732_10787[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (35))){
var inst_10679 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
if(cljs.core.truth_(inst_10679)){
var statearr_10733_10788 = state_10694__$1;
(statearr_10733_10788[(1)] = (36));

} else {
var statearr_10734_10789 = state_10694__$1;
(statearr_10734_10789[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (19))){
var inst_10624 = (state_10694[(7)]);
var inst_10643 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10624);
var state_10694__$1 = state_10694;
var statearr_10735_10790 = state_10694__$1;
(statearr_10735_10790[(2)] = inst_10643);

(statearr_10735_10790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (11))){
var inst_10624 = (state_10694[(7)]);
var inst_10628 = (inst_10624 == null);
var inst_10629 = cljs.core.not.call(null,inst_10628);
var state_10694__$1 = state_10694;
if(inst_10629){
var statearr_10736_10791 = state_10694__$1;
(statearr_10736_10791[(1)] = (13));

} else {
var statearr_10737_10792 = state_10694__$1;
(statearr_10737_10792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (9))){
var inst_10600 = (state_10694[(8)]);
var state_10694__$1 = state_10694;
var statearr_10738_10793 = state_10694__$1;
(statearr_10738_10793[(2)] = inst_10600);

(statearr_10738_10793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (5))){
var state_10694__$1 = state_10694;
var statearr_10739_10794 = state_10694__$1;
(statearr_10739_10794[(2)] = true);

(statearr_10739_10794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (14))){
var state_10694__$1 = state_10694;
var statearr_10740_10795 = state_10694__$1;
(statearr_10740_10795[(2)] = false);

(statearr_10740_10795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (26))){
var inst_10654 = (state_10694[(10)]);
var inst_10661 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10654);
var state_10694__$1 = state_10694;
var statearr_10741_10796 = state_10694__$1;
(statearr_10741_10796[(2)] = inst_10661);

(statearr_10741_10796[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (16))){
var state_10694__$1 = state_10694;
var statearr_10742_10797 = state_10694__$1;
(statearr_10742_10797[(2)] = true);

(statearr_10742_10797[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (38))){
var inst_10684 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
var statearr_10743_10798 = state_10694__$1;
(statearr_10743_10798[(2)] = inst_10684);

(statearr_10743_10798[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (30))){
var inst_10654 = (state_10694[(10)]);
var inst_10648 = (state_10694[(13)]);
var inst_10647 = (state_10694[(11)]);
var inst_10671 = cljs.core.empty_QMARK_.call(null,inst_10647);
var inst_10672 = inst_10648.call(null,inst_10654);
var inst_10673 = cljs.core.not.call(null,inst_10672);
var inst_10674 = (inst_10671) && (inst_10673);
var state_10694__$1 = state_10694;
var statearr_10744_10799 = state_10694__$1;
(statearr_10744_10799[(2)] = inst_10674);

(statearr_10744_10799[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (10))){
var inst_10600 = (state_10694[(8)]);
var inst_10620 = (state_10694[(2)]);
var inst_10621 = cljs.core.get.call(null,inst_10620,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10622 = cljs.core.get.call(null,inst_10620,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10623 = cljs.core.get.call(null,inst_10620,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10624 = inst_10600;
var state_10694__$1 = (function (){var statearr_10745 = state_10694;
(statearr_10745[(16)] = inst_10621);

(statearr_10745[(17)] = inst_10623);

(statearr_10745[(7)] = inst_10624);

(statearr_10745[(18)] = inst_10622);

return statearr_10745;
})();
var statearr_10746_10800 = state_10694__$1;
(statearr_10746_10800[(2)] = null);

(statearr_10746_10800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (18))){
var inst_10638 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
var statearr_10747_10801 = state_10694__$1;
(statearr_10747_10801[(2)] = inst_10638);

(statearr_10747_10801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (37))){
var state_10694__$1 = state_10694;
var statearr_10748_10802 = state_10694__$1;
(statearr_10748_10802[(2)] = null);

(statearr_10748_10802[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10695 === (8))){
var inst_10600 = (state_10694[(8)]);
var inst_10617 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10600);
var state_10694__$1 = state_10694;
var statearr_10749_10803 = state_10694__$1;
(statearr_10749_10803[(2)] = inst_10617);

(statearr_10749_10803[(1)] = (10));


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
});})(c__9044__auto___10757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8932__auto__,c__9044__auto___10757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8933__auto__ = null;
var cljs$core$async$mix_$_state_machine__8933__auto____0 = (function (){
var statearr_10753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10753[(0)] = cljs$core$async$mix_$_state_machine__8933__auto__);

(statearr_10753[(1)] = (1));

return statearr_10753;
});
var cljs$core$async$mix_$_state_machine__8933__auto____1 = (function (state_10694){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_10694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e10754){if((e10754 instanceof Object)){
var ex__8936__auto__ = e10754;
var statearr_10755_10804 = state_10694;
(statearr_10755_10804[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10805 = state_10694;
state_10694 = G__10805;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8933__auto__ = function(state_10694){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8933__auto____1.call(this,state_10694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8933__auto____0;
cljs$core$async$mix_$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8933__auto____1;
return cljs$core$async$mix_$_state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___10757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9046__auto__ = (function (){var statearr_10756 = f__9045__auto__.call(null);
(statearr_10756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___10757);

return statearr_10756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___10757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args10806 = [];
var len__7214__auto___10809 = arguments.length;
var i__7215__auto___10810 = (0);
while(true){
if((i__7215__auto___10810 < len__7214__auto___10809)){
args10806.push((arguments[i__7215__auto___10810]));

var G__10811 = (i__7215__auto___10810 + (1));
i__7215__auto___10810 = G__10811;
continue;
} else {
}
break;
}

var G__10808 = args10806.length;
switch (G__10808) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10806.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args10814 = [];
var len__7214__auto___10939 = arguments.length;
var i__7215__auto___10940 = (0);
while(true){
if((i__7215__auto___10940 < len__7214__auto___10939)){
args10814.push((arguments[i__7215__auto___10940]));

var G__10941 = (i__7215__auto___10940 + (1));
i__7215__auto___10940 = G__10941;
continue;
} else {
}
break;
}

var G__10816 = args10814.length;
switch (G__10816) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10814.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6156__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6156__auto__,mults){
return (function (p1__10813_SHARP_){
if(cljs.core.truth_(p1__10813_SHARP_.call(null,topic))){
return p1__10813_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10813_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10817 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10818){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10818 = meta10818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10819,meta10818__$1){
var self__ = this;
var _10819__$1 = this;
return (new cljs.core.async.t_cljs$core$async10817(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10818__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10819){
var self__ = this;
var _10819__$1 = this;
return self__.meta10818;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10817.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10818","meta10818",467161092,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10817";

cljs.core.async.t_cljs$core$async10817.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10817");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10817 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10817(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10818){
return (new cljs.core.async.t_cljs$core$async10817(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10818));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10817(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9044__auto___10943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___10943,mults,ensure_mult,p){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___10943,mults,ensure_mult,p){
return (function (state_10891){
var state_val_10892 = (state_10891[(1)]);
if((state_val_10892 === (7))){
var inst_10887 = (state_10891[(2)]);
var state_10891__$1 = state_10891;
var statearr_10893_10944 = state_10891__$1;
(statearr_10893_10944[(2)] = inst_10887);

(statearr_10893_10944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (20))){
var state_10891__$1 = state_10891;
var statearr_10894_10945 = state_10891__$1;
(statearr_10894_10945[(2)] = null);

(statearr_10894_10945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (1))){
var state_10891__$1 = state_10891;
var statearr_10895_10946 = state_10891__$1;
(statearr_10895_10946[(2)] = null);

(statearr_10895_10946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (24))){
var inst_10870 = (state_10891[(7)]);
var inst_10879 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10870);
var state_10891__$1 = state_10891;
var statearr_10896_10947 = state_10891__$1;
(statearr_10896_10947[(2)] = inst_10879);

(statearr_10896_10947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (4))){
var inst_10822 = (state_10891[(8)]);
var inst_10822__$1 = (state_10891[(2)]);
var inst_10823 = (inst_10822__$1 == null);
var state_10891__$1 = (function (){var statearr_10897 = state_10891;
(statearr_10897[(8)] = inst_10822__$1);

return statearr_10897;
})();
if(cljs.core.truth_(inst_10823)){
var statearr_10898_10948 = state_10891__$1;
(statearr_10898_10948[(1)] = (5));

} else {
var statearr_10899_10949 = state_10891__$1;
(statearr_10899_10949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (15))){
var inst_10864 = (state_10891[(2)]);
var state_10891__$1 = state_10891;
var statearr_10900_10950 = state_10891__$1;
(statearr_10900_10950[(2)] = inst_10864);

(statearr_10900_10950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (21))){
var inst_10884 = (state_10891[(2)]);
var state_10891__$1 = (function (){var statearr_10901 = state_10891;
(statearr_10901[(9)] = inst_10884);

return statearr_10901;
})();
var statearr_10902_10951 = state_10891__$1;
(statearr_10902_10951[(2)] = null);

(statearr_10902_10951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (13))){
var inst_10846 = (state_10891[(10)]);
var inst_10848 = cljs.core.chunked_seq_QMARK_.call(null,inst_10846);
var state_10891__$1 = state_10891;
if(inst_10848){
var statearr_10903_10952 = state_10891__$1;
(statearr_10903_10952[(1)] = (16));

} else {
var statearr_10904_10953 = state_10891__$1;
(statearr_10904_10953[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (22))){
var inst_10876 = (state_10891[(2)]);
var state_10891__$1 = state_10891;
if(cljs.core.truth_(inst_10876)){
var statearr_10905_10954 = state_10891__$1;
(statearr_10905_10954[(1)] = (23));

} else {
var statearr_10906_10955 = state_10891__$1;
(statearr_10906_10955[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (6))){
var inst_10872 = (state_10891[(11)]);
var inst_10822 = (state_10891[(8)]);
var inst_10870 = (state_10891[(7)]);
var inst_10870__$1 = topic_fn.call(null,inst_10822);
var inst_10871 = cljs.core.deref.call(null,mults);
var inst_10872__$1 = cljs.core.get.call(null,inst_10871,inst_10870__$1);
var state_10891__$1 = (function (){var statearr_10907 = state_10891;
(statearr_10907[(11)] = inst_10872__$1);

(statearr_10907[(7)] = inst_10870__$1);

return statearr_10907;
})();
if(cljs.core.truth_(inst_10872__$1)){
var statearr_10908_10956 = state_10891__$1;
(statearr_10908_10956[(1)] = (19));

} else {
var statearr_10909_10957 = state_10891__$1;
(statearr_10909_10957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (25))){
var inst_10881 = (state_10891[(2)]);
var state_10891__$1 = state_10891;
var statearr_10910_10958 = state_10891__$1;
(statearr_10910_10958[(2)] = inst_10881);

(statearr_10910_10958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (17))){
var inst_10846 = (state_10891[(10)]);
var inst_10855 = cljs.core.first.call(null,inst_10846);
var inst_10856 = cljs.core.async.muxch_STAR_.call(null,inst_10855);
var inst_10857 = cljs.core.async.close_BANG_.call(null,inst_10856);
var inst_10858 = cljs.core.next.call(null,inst_10846);
var inst_10832 = inst_10858;
var inst_10833 = null;
var inst_10834 = (0);
var inst_10835 = (0);
var state_10891__$1 = (function (){var statearr_10911 = state_10891;
(statearr_10911[(12)] = inst_10857);

(statearr_10911[(13)] = inst_10835);

(statearr_10911[(14)] = inst_10834);

(statearr_10911[(15)] = inst_10832);

(statearr_10911[(16)] = inst_10833);

return statearr_10911;
})();
var statearr_10912_10959 = state_10891__$1;
(statearr_10912_10959[(2)] = null);

(statearr_10912_10959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (3))){
var inst_10889 = (state_10891[(2)]);
var state_10891__$1 = state_10891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10891__$1,inst_10889);
} else {
if((state_val_10892 === (12))){
var inst_10866 = (state_10891[(2)]);
var state_10891__$1 = state_10891;
var statearr_10913_10960 = state_10891__$1;
(statearr_10913_10960[(2)] = inst_10866);

(statearr_10913_10960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (2))){
var state_10891__$1 = state_10891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10891__$1,(4),ch);
} else {
if((state_val_10892 === (23))){
var state_10891__$1 = state_10891;
var statearr_10914_10961 = state_10891__$1;
(statearr_10914_10961[(2)] = null);

(statearr_10914_10961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (19))){
var inst_10872 = (state_10891[(11)]);
var inst_10822 = (state_10891[(8)]);
var inst_10874 = cljs.core.async.muxch_STAR_.call(null,inst_10872);
var state_10891__$1 = state_10891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10891__$1,(22),inst_10874,inst_10822);
} else {
if((state_val_10892 === (11))){
var inst_10846 = (state_10891[(10)]);
var inst_10832 = (state_10891[(15)]);
var inst_10846__$1 = cljs.core.seq.call(null,inst_10832);
var state_10891__$1 = (function (){var statearr_10915 = state_10891;
(statearr_10915[(10)] = inst_10846__$1);

return statearr_10915;
})();
if(inst_10846__$1){
var statearr_10916_10962 = state_10891__$1;
(statearr_10916_10962[(1)] = (13));

} else {
var statearr_10917_10963 = state_10891__$1;
(statearr_10917_10963[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (9))){
var inst_10868 = (state_10891[(2)]);
var state_10891__$1 = state_10891;
var statearr_10918_10964 = state_10891__$1;
(statearr_10918_10964[(2)] = inst_10868);

(statearr_10918_10964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (5))){
var inst_10829 = cljs.core.deref.call(null,mults);
var inst_10830 = cljs.core.vals.call(null,inst_10829);
var inst_10831 = cljs.core.seq.call(null,inst_10830);
var inst_10832 = inst_10831;
var inst_10833 = null;
var inst_10834 = (0);
var inst_10835 = (0);
var state_10891__$1 = (function (){var statearr_10919 = state_10891;
(statearr_10919[(13)] = inst_10835);

(statearr_10919[(14)] = inst_10834);

(statearr_10919[(15)] = inst_10832);

(statearr_10919[(16)] = inst_10833);

return statearr_10919;
})();
var statearr_10920_10965 = state_10891__$1;
(statearr_10920_10965[(2)] = null);

(statearr_10920_10965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (14))){
var state_10891__$1 = state_10891;
var statearr_10924_10966 = state_10891__$1;
(statearr_10924_10966[(2)] = null);

(statearr_10924_10966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (16))){
var inst_10846 = (state_10891[(10)]);
var inst_10850 = cljs.core.chunk_first.call(null,inst_10846);
var inst_10851 = cljs.core.chunk_rest.call(null,inst_10846);
var inst_10852 = cljs.core.count.call(null,inst_10850);
var inst_10832 = inst_10851;
var inst_10833 = inst_10850;
var inst_10834 = inst_10852;
var inst_10835 = (0);
var state_10891__$1 = (function (){var statearr_10925 = state_10891;
(statearr_10925[(13)] = inst_10835);

(statearr_10925[(14)] = inst_10834);

(statearr_10925[(15)] = inst_10832);

(statearr_10925[(16)] = inst_10833);

return statearr_10925;
})();
var statearr_10926_10967 = state_10891__$1;
(statearr_10926_10967[(2)] = null);

(statearr_10926_10967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (10))){
var inst_10835 = (state_10891[(13)]);
var inst_10834 = (state_10891[(14)]);
var inst_10832 = (state_10891[(15)]);
var inst_10833 = (state_10891[(16)]);
var inst_10840 = cljs.core._nth.call(null,inst_10833,inst_10835);
var inst_10841 = cljs.core.async.muxch_STAR_.call(null,inst_10840);
var inst_10842 = cljs.core.async.close_BANG_.call(null,inst_10841);
var inst_10843 = (inst_10835 + (1));
var tmp10921 = inst_10834;
var tmp10922 = inst_10832;
var tmp10923 = inst_10833;
var inst_10832__$1 = tmp10922;
var inst_10833__$1 = tmp10923;
var inst_10834__$1 = tmp10921;
var inst_10835__$1 = inst_10843;
var state_10891__$1 = (function (){var statearr_10927 = state_10891;
(statearr_10927[(17)] = inst_10842);

(statearr_10927[(13)] = inst_10835__$1);

(statearr_10927[(14)] = inst_10834__$1);

(statearr_10927[(15)] = inst_10832__$1);

(statearr_10927[(16)] = inst_10833__$1);

return statearr_10927;
})();
var statearr_10928_10968 = state_10891__$1;
(statearr_10928_10968[(2)] = null);

(statearr_10928_10968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (18))){
var inst_10861 = (state_10891[(2)]);
var state_10891__$1 = state_10891;
var statearr_10929_10969 = state_10891__$1;
(statearr_10929_10969[(2)] = inst_10861);

(statearr_10929_10969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10892 === (8))){
var inst_10835 = (state_10891[(13)]);
var inst_10834 = (state_10891[(14)]);
var inst_10837 = (inst_10835 < inst_10834);
var inst_10838 = inst_10837;
var state_10891__$1 = state_10891;
if(cljs.core.truth_(inst_10838)){
var statearr_10930_10970 = state_10891__$1;
(statearr_10930_10970[(1)] = (10));

} else {
var statearr_10931_10971 = state_10891__$1;
(statearr_10931_10971[(1)] = (11));

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
});})(c__9044__auto___10943,mults,ensure_mult,p))
;
return ((function (switch__8932__auto__,c__9044__auto___10943,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8933__auto__ = null;
var cljs$core$async$state_machine__8933__auto____0 = (function (){
var statearr_10935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10935[(0)] = cljs$core$async$state_machine__8933__auto__);

(statearr_10935[(1)] = (1));

return statearr_10935;
});
var cljs$core$async$state_machine__8933__auto____1 = (function (state_10891){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_10891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e10936){if((e10936 instanceof Object)){
var ex__8936__auto__ = e10936;
var statearr_10937_10972 = state_10891;
(statearr_10937_10972[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10973 = state_10891;
state_10891 = G__10973;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$state_machine__8933__auto__ = function(state_10891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8933__auto____1.call(this,state_10891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8933__auto____0;
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8933__auto____1;
return cljs$core$async$state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___10943,mults,ensure_mult,p))
})();
var state__9046__auto__ = (function (){var statearr_10938 = f__9045__auto__.call(null);
(statearr_10938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___10943);

return statearr_10938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___10943,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args10974 = [];
var len__7214__auto___10977 = arguments.length;
var i__7215__auto___10978 = (0);
while(true){
if((i__7215__auto___10978 < len__7214__auto___10977)){
args10974.push((arguments[i__7215__auto___10978]));

var G__10979 = (i__7215__auto___10978 + (1));
i__7215__auto___10978 = G__10979;
continue;
} else {
}
break;
}

var G__10976 = args10974.length;
switch (G__10976) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10974.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args10981 = [];
var len__7214__auto___10984 = arguments.length;
var i__7215__auto___10985 = (0);
while(true){
if((i__7215__auto___10985 < len__7214__auto___10984)){
args10981.push((arguments[i__7215__auto___10985]));

var G__10986 = (i__7215__auto___10985 + (1));
i__7215__auto___10985 = G__10986;
continue;
} else {
}
break;
}

var G__10983 = args10981.length;
switch (G__10983) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10981.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args10988 = [];
var len__7214__auto___11059 = arguments.length;
var i__7215__auto___11060 = (0);
while(true){
if((i__7215__auto___11060 < len__7214__auto___11059)){
args10988.push((arguments[i__7215__auto___11060]));

var G__11061 = (i__7215__auto___11060 + (1));
i__7215__auto___11060 = G__11061;
continue;
} else {
}
break;
}

var G__10990 = args10988.length;
switch (G__10990) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10988.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__9044__auto___11063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___11063,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___11063,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11029){
var state_val_11030 = (state_11029[(1)]);
if((state_val_11030 === (7))){
var state_11029__$1 = state_11029;
var statearr_11031_11064 = state_11029__$1;
(statearr_11031_11064[(2)] = null);

(statearr_11031_11064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (1))){
var state_11029__$1 = state_11029;
var statearr_11032_11065 = state_11029__$1;
(statearr_11032_11065[(2)] = null);

(statearr_11032_11065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (4))){
var inst_10993 = (state_11029[(7)]);
var inst_10995 = (inst_10993 < cnt);
var state_11029__$1 = state_11029;
if(cljs.core.truth_(inst_10995)){
var statearr_11033_11066 = state_11029__$1;
(statearr_11033_11066[(1)] = (6));

} else {
var statearr_11034_11067 = state_11029__$1;
(statearr_11034_11067[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (15))){
var inst_11025 = (state_11029[(2)]);
var state_11029__$1 = state_11029;
var statearr_11035_11068 = state_11029__$1;
(statearr_11035_11068[(2)] = inst_11025);

(statearr_11035_11068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (13))){
var inst_11018 = cljs.core.async.close_BANG_.call(null,out);
var state_11029__$1 = state_11029;
var statearr_11036_11069 = state_11029__$1;
(statearr_11036_11069[(2)] = inst_11018);

(statearr_11036_11069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (6))){
var state_11029__$1 = state_11029;
var statearr_11037_11070 = state_11029__$1;
(statearr_11037_11070[(2)] = null);

(statearr_11037_11070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (3))){
var inst_11027 = (state_11029[(2)]);
var state_11029__$1 = state_11029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11029__$1,inst_11027);
} else {
if((state_val_11030 === (12))){
var inst_11015 = (state_11029[(8)]);
var inst_11015__$1 = (state_11029[(2)]);
var inst_11016 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11015__$1);
var state_11029__$1 = (function (){var statearr_11038 = state_11029;
(statearr_11038[(8)] = inst_11015__$1);

return statearr_11038;
})();
if(cljs.core.truth_(inst_11016)){
var statearr_11039_11071 = state_11029__$1;
(statearr_11039_11071[(1)] = (13));

} else {
var statearr_11040_11072 = state_11029__$1;
(statearr_11040_11072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (2))){
var inst_10992 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10993 = (0);
var state_11029__$1 = (function (){var statearr_11041 = state_11029;
(statearr_11041[(7)] = inst_10993);

(statearr_11041[(9)] = inst_10992);

return statearr_11041;
})();
var statearr_11042_11073 = state_11029__$1;
(statearr_11042_11073[(2)] = null);

(statearr_11042_11073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (11))){
var inst_10993 = (state_11029[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11029,(10),Object,null,(9));
var inst_11002 = chs__$1.call(null,inst_10993);
var inst_11003 = done.call(null,inst_10993);
var inst_11004 = cljs.core.async.take_BANG_.call(null,inst_11002,inst_11003);
var state_11029__$1 = state_11029;
var statearr_11043_11074 = state_11029__$1;
(statearr_11043_11074[(2)] = inst_11004);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11029__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (9))){
var inst_10993 = (state_11029[(7)]);
var inst_11006 = (state_11029[(2)]);
var inst_11007 = (inst_10993 + (1));
var inst_10993__$1 = inst_11007;
var state_11029__$1 = (function (){var statearr_11044 = state_11029;
(statearr_11044[(7)] = inst_10993__$1);

(statearr_11044[(10)] = inst_11006);

return statearr_11044;
})();
var statearr_11045_11075 = state_11029__$1;
(statearr_11045_11075[(2)] = null);

(statearr_11045_11075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (5))){
var inst_11013 = (state_11029[(2)]);
var state_11029__$1 = (function (){var statearr_11046 = state_11029;
(statearr_11046[(11)] = inst_11013);

return statearr_11046;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11029__$1,(12),dchan);
} else {
if((state_val_11030 === (14))){
var inst_11015 = (state_11029[(8)]);
var inst_11020 = cljs.core.apply.call(null,f,inst_11015);
var state_11029__$1 = state_11029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11029__$1,(16),out,inst_11020);
} else {
if((state_val_11030 === (16))){
var inst_11022 = (state_11029[(2)]);
var state_11029__$1 = (function (){var statearr_11047 = state_11029;
(statearr_11047[(12)] = inst_11022);

return statearr_11047;
})();
var statearr_11048_11076 = state_11029__$1;
(statearr_11048_11076[(2)] = null);

(statearr_11048_11076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (10))){
var inst_10997 = (state_11029[(2)]);
var inst_10998 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11029__$1 = (function (){var statearr_11049 = state_11029;
(statearr_11049[(13)] = inst_10997);

return statearr_11049;
})();
var statearr_11050_11077 = state_11029__$1;
(statearr_11050_11077[(2)] = inst_10998);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11029__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11030 === (8))){
var inst_11011 = (state_11029[(2)]);
var state_11029__$1 = state_11029;
var statearr_11051_11078 = state_11029__$1;
(statearr_11051_11078[(2)] = inst_11011);

(statearr_11051_11078[(1)] = (5));


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
});})(c__9044__auto___11063,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8932__auto__,c__9044__auto___11063,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8933__auto__ = null;
var cljs$core$async$state_machine__8933__auto____0 = (function (){
var statearr_11055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11055[(0)] = cljs$core$async$state_machine__8933__auto__);

(statearr_11055[(1)] = (1));

return statearr_11055;
});
var cljs$core$async$state_machine__8933__auto____1 = (function (state_11029){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_11029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e11056){if((e11056 instanceof Object)){
var ex__8936__auto__ = e11056;
var statearr_11057_11079 = state_11029;
(statearr_11057_11079[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11080 = state_11029;
state_11029 = G__11080;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$state_machine__8933__auto__ = function(state_11029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8933__auto____1.call(this,state_11029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8933__auto____0;
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8933__auto____1;
return cljs$core$async$state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___11063,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9046__auto__ = (function (){var statearr_11058 = f__9045__auto__.call(null);
(statearr_11058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___11063);

return statearr_11058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___11063,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args11082 = [];
var len__7214__auto___11138 = arguments.length;
var i__7215__auto___11139 = (0);
while(true){
if((i__7215__auto___11139 < len__7214__auto___11138)){
args11082.push((arguments[i__7215__auto___11139]));

var G__11140 = (i__7215__auto___11139 + (1));
i__7215__auto___11139 = G__11140;
continue;
} else {
}
break;
}

var G__11084 = args11082.length;
switch (G__11084) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11082.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9044__auto___11142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___11142,out){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___11142,out){
return (function (state_11114){
var state_val_11115 = (state_11114[(1)]);
if((state_val_11115 === (7))){
var inst_11094 = (state_11114[(7)]);
var inst_11093 = (state_11114[(8)]);
var inst_11093__$1 = (state_11114[(2)]);
var inst_11094__$1 = cljs.core.nth.call(null,inst_11093__$1,(0),null);
var inst_11095 = cljs.core.nth.call(null,inst_11093__$1,(1),null);
var inst_11096 = (inst_11094__$1 == null);
var state_11114__$1 = (function (){var statearr_11116 = state_11114;
(statearr_11116[(7)] = inst_11094__$1);

(statearr_11116[(9)] = inst_11095);

(statearr_11116[(8)] = inst_11093__$1);

return statearr_11116;
})();
if(cljs.core.truth_(inst_11096)){
var statearr_11117_11143 = state_11114__$1;
(statearr_11117_11143[(1)] = (8));

} else {
var statearr_11118_11144 = state_11114__$1;
(statearr_11118_11144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11115 === (1))){
var inst_11085 = cljs.core.vec.call(null,chs);
var inst_11086 = inst_11085;
var state_11114__$1 = (function (){var statearr_11119 = state_11114;
(statearr_11119[(10)] = inst_11086);

return statearr_11119;
})();
var statearr_11120_11145 = state_11114__$1;
(statearr_11120_11145[(2)] = null);

(statearr_11120_11145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11115 === (4))){
var inst_11086 = (state_11114[(10)]);
var state_11114__$1 = state_11114;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11114__$1,(7),inst_11086);
} else {
if((state_val_11115 === (6))){
var inst_11110 = (state_11114[(2)]);
var state_11114__$1 = state_11114;
var statearr_11121_11146 = state_11114__$1;
(statearr_11121_11146[(2)] = inst_11110);

(statearr_11121_11146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11115 === (3))){
var inst_11112 = (state_11114[(2)]);
var state_11114__$1 = state_11114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11114__$1,inst_11112);
} else {
if((state_val_11115 === (2))){
var inst_11086 = (state_11114[(10)]);
var inst_11088 = cljs.core.count.call(null,inst_11086);
var inst_11089 = (inst_11088 > (0));
var state_11114__$1 = state_11114;
if(cljs.core.truth_(inst_11089)){
var statearr_11123_11147 = state_11114__$1;
(statearr_11123_11147[(1)] = (4));

} else {
var statearr_11124_11148 = state_11114__$1;
(statearr_11124_11148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11115 === (11))){
var inst_11086 = (state_11114[(10)]);
var inst_11103 = (state_11114[(2)]);
var tmp11122 = inst_11086;
var inst_11086__$1 = tmp11122;
var state_11114__$1 = (function (){var statearr_11125 = state_11114;
(statearr_11125[(10)] = inst_11086__$1);

(statearr_11125[(11)] = inst_11103);

return statearr_11125;
})();
var statearr_11126_11149 = state_11114__$1;
(statearr_11126_11149[(2)] = null);

(statearr_11126_11149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11115 === (9))){
var inst_11094 = (state_11114[(7)]);
var state_11114__$1 = state_11114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11114__$1,(11),out,inst_11094);
} else {
if((state_val_11115 === (5))){
var inst_11108 = cljs.core.async.close_BANG_.call(null,out);
var state_11114__$1 = state_11114;
var statearr_11127_11150 = state_11114__$1;
(statearr_11127_11150[(2)] = inst_11108);

(statearr_11127_11150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11115 === (10))){
var inst_11106 = (state_11114[(2)]);
var state_11114__$1 = state_11114;
var statearr_11128_11151 = state_11114__$1;
(statearr_11128_11151[(2)] = inst_11106);

(statearr_11128_11151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11115 === (8))){
var inst_11094 = (state_11114[(7)]);
var inst_11086 = (state_11114[(10)]);
var inst_11095 = (state_11114[(9)]);
var inst_11093 = (state_11114[(8)]);
var inst_11098 = (function (){var cs = inst_11086;
var vec__11091 = inst_11093;
var v = inst_11094;
var c = inst_11095;
return ((function (cs,vec__11091,v,c,inst_11094,inst_11086,inst_11095,inst_11093,state_val_11115,c__9044__auto___11142,out){
return (function (p1__11081_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11081_SHARP_);
});
;})(cs,vec__11091,v,c,inst_11094,inst_11086,inst_11095,inst_11093,state_val_11115,c__9044__auto___11142,out))
})();
var inst_11099 = cljs.core.filterv.call(null,inst_11098,inst_11086);
var inst_11086__$1 = inst_11099;
var state_11114__$1 = (function (){var statearr_11129 = state_11114;
(statearr_11129[(10)] = inst_11086__$1);

return statearr_11129;
})();
var statearr_11130_11152 = state_11114__$1;
(statearr_11130_11152[(2)] = null);

(statearr_11130_11152[(1)] = (2));


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
});})(c__9044__auto___11142,out))
;
return ((function (switch__8932__auto__,c__9044__auto___11142,out){
return (function() {
var cljs$core$async$state_machine__8933__auto__ = null;
var cljs$core$async$state_machine__8933__auto____0 = (function (){
var statearr_11134 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11134[(0)] = cljs$core$async$state_machine__8933__auto__);

(statearr_11134[(1)] = (1));

return statearr_11134;
});
var cljs$core$async$state_machine__8933__auto____1 = (function (state_11114){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_11114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e11135){if((e11135 instanceof Object)){
var ex__8936__auto__ = e11135;
var statearr_11136_11153 = state_11114;
(statearr_11136_11153[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11154 = state_11114;
state_11114 = G__11154;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$state_machine__8933__auto__ = function(state_11114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8933__auto____1.call(this,state_11114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8933__auto____0;
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8933__auto____1;
return cljs$core$async$state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___11142,out))
})();
var state__9046__auto__ = (function (){var statearr_11137 = f__9045__auto__.call(null);
(statearr_11137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___11142);

return statearr_11137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___11142,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11155 = [];
var len__7214__auto___11204 = arguments.length;
var i__7215__auto___11205 = (0);
while(true){
if((i__7215__auto___11205 < len__7214__auto___11204)){
args11155.push((arguments[i__7215__auto___11205]));

var G__11206 = (i__7215__auto___11205 + (1));
i__7215__auto___11205 = G__11206;
continue;
} else {
}
break;
}

var G__11157 = args11155.length;
switch (G__11157) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11155.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9044__auto___11208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___11208,out){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___11208,out){
return (function (state_11181){
var state_val_11182 = (state_11181[(1)]);
if((state_val_11182 === (7))){
var inst_11163 = (state_11181[(7)]);
var inst_11163__$1 = (state_11181[(2)]);
var inst_11164 = (inst_11163__$1 == null);
var inst_11165 = cljs.core.not.call(null,inst_11164);
var state_11181__$1 = (function (){var statearr_11183 = state_11181;
(statearr_11183[(7)] = inst_11163__$1);

return statearr_11183;
})();
if(inst_11165){
var statearr_11184_11209 = state_11181__$1;
(statearr_11184_11209[(1)] = (8));

} else {
var statearr_11185_11210 = state_11181__$1;
(statearr_11185_11210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11182 === (1))){
var inst_11158 = (0);
var state_11181__$1 = (function (){var statearr_11186 = state_11181;
(statearr_11186[(8)] = inst_11158);

return statearr_11186;
})();
var statearr_11187_11211 = state_11181__$1;
(statearr_11187_11211[(2)] = null);

(statearr_11187_11211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11182 === (4))){
var state_11181__$1 = state_11181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11181__$1,(7),ch);
} else {
if((state_val_11182 === (6))){
var inst_11176 = (state_11181[(2)]);
var state_11181__$1 = state_11181;
var statearr_11188_11212 = state_11181__$1;
(statearr_11188_11212[(2)] = inst_11176);

(statearr_11188_11212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11182 === (3))){
var inst_11178 = (state_11181[(2)]);
var inst_11179 = cljs.core.async.close_BANG_.call(null,out);
var state_11181__$1 = (function (){var statearr_11189 = state_11181;
(statearr_11189[(9)] = inst_11178);

return statearr_11189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11181__$1,inst_11179);
} else {
if((state_val_11182 === (2))){
var inst_11158 = (state_11181[(8)]);
var inst_11160 = (inst_11158 < n);
var state_11181__$1 = state_11181;
if(cljs.core.truth_(inst_11160)){
var statearr_11190_11213 = state_11181__$1;
(statearr_11190_11213[(1)] = (4));

} else {
var statearr_11191_11214 = state_11181__$1;
(statearr_11191_11214[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11182 === (11))){
var inst_11158 = (state_11181[(8)]);
var inst_11168 = (state_11181[(2)]);
var inst_11169 = (inst_11158 + (1));
var inst_11158__$1 = inst_11169;
var state_11181__$1 = (function (){var statearr_11192 = state_11181;
(statearr_11192[(8)] = inst_11158__$1);

(statearr_11192[(10)] = inst_11168);

return statearr_11192;
})();
var statearr_11193_11215 = state_11181__$1;
(statearr_11193_11215[(2)] = null);

(statearr_11193_11215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11182 === (9))){
var state_11181__$1 = state_11181;
var statearr_11194_11216 = state_11181__$1;
(statearr_11194_11216[(2)] = null);

(statearr_11194_11216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11182 === (5))){
var state_11181__$1 = state_11181;
var statearr_11195_11217 = state_11181__$1;
(statearr_11195_11217[(2)] = null);

(statearr_11195_11217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11182 === (10))){
var inst_11173 = (state_11181[(2)]);
var state_11181__$1 = state_11181;
var statearr_11196_11218 = state_11181__$1;
(statearr_11196_11218[(2)] = inst_11173);

(statearr_11196_11218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11182 === (8))){
var inst_11163 = (state_11181[(7)]);
var state_11181__$1 = state_11181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11181__$1,(11),out,inst_11163);
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
});})(c__9044__auto___11208,out))
;
return ((function (switch__8932__auto__,c__9044__auto___11208,out){
return (function() {
var cljs$core$async$state_machine__8933__auto__ = null;
var cljs$core$async$state_machine__8933__auto____0 = (function (){
var statearr_11200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11200[(0)] = cljs$core$async$state_machine__8933__auto__);

(statearr_11200[(1)] = (1));

return statearr_11200;
});
var cljs$core$async$state_machine__8933__auto____1 = (function (state_11181){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_11181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e11201){if((e11201 instanceof Object)){
var ex__8936__auto__ = e11201;
var statearr_11202_11219 = state_11181;
(statearr_11202_11219[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11220 = state_11181;
state_11181 = G__11220;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$state_machine__8933__auto__ = function(state_11181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8933__auto____1.call(this,state_11181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8933__auto____0;
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8933__auto____1;
return cljs$core$async$state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___11208,out))
})();
var state__9046__auto__ = (function (){var statearr_11203 = f__9045__auto__.call(null);
(statearr_11203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___11208);

return statearr_11203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___11208,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11228 = (function (map_LT_,f,ch,meta11229){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11229 = meta11229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11230,meta11229__$1){
var self__ = this;
var _11230__$1 = this;
return (new cljs.core.async.t_cljs$core$async11228(self__.map_LT_,self__.f,self__.ch,meta11229__$1));
});

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11230){
var self__ = this;
var _11230__$1 = this;
return self__.meta11229;
});

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11231 = (function (map_LT_,f,ch,meta11229,_,fn1,meta11232){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11229 = meta11229;
this._ = _;
this.fn1 = fn1;
this.meta11232 = meta11232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11233,meta11232__$1){
var self__ = this;
var _11233__$1 = this;
return (new cljs.core.async.t_cljs$core$async11231(self__.map_LT_,self__.f,self__.ch,self__.meta11229,self__._,self__.fn1,meta11232__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11233){
var self__ = this;
var _11233__$1 = this;
return self__.meta11232;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11231.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11231.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11221_SHARP_){
return f1.call(null,(((p1__11221_SHARP_ == null))?null:self__.f.call(null,p1__11221_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11231.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11229","meta11229",824010649,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11228","cljs.core.async/t_cljs$core$async11228",1999382634,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11232","meta11232",-1579091547,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11231";

cljs.core.async.t_cljs$core$async11231.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11231");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11231 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11231(map_LT___$1,f__$1,ch__$1,meta11229__$1,___$2,fn1__$1,meta11232){
return (new cljs.core.async.t_cljs$core$async11231(map_LT___$1,f__$1,ch__$1,meta11229__$1,___$2,fn1__$1,meta11232));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11231(self__.map_LT_,self__.f,self__.ch,self__.meta11229,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6144__auto__ = ret;
if(cljs.core.truth_(and__6144__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11229","meta11229",824010649,null)], null);
});

cljs.core.async.t_cljs$core$async11228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11228";

cljs.core.async.t_cljs$core$async11228.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11228");
});

cljs.core.async.__GT_t_cljs$core$async11228 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11228(map_LT___$1,f__$1,ch__$1,meta11229){
return (new cljs.core.async.t_cljs$core$async11228(map_LT___$1,f__$1,ch__$1,meta11229));
});

}

return (new cljs.core.async.t_cljs$core$async11228(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11237 = (function (map_GT_,f,ch,meta11238){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11238 = meta11238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11239,meta11238__$1){
var self__ = this;
var _11239__$1 = this;
return (new cljs.core.async.t_cljs$core$async11237(self__.map_GT_,self__.f,self__.ch,meta11238__$1));
});

cljs.core.async.t_cljs$core$async11237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11239){
var self__ = this;
var _11239__$1 = this;
return self__.meta11238;
});

cljs.core.async.t_cljs$core$async11237.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11237.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11237.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11238","meta11238",-849272491,null)], null);
});

cljs.core.async.t_cljs$core$async11237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11237";

cljs.core.async.t_cljs$core$async11237.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11237");
});

cljs.core.async.__GT_t_cljs$core$async11237 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11237(map_GT___$1,f__$1,ch__$1,meta11238){
return (new cljs.core.async.t_cljs$core$async11237(map_GT___$1,f__$1,ch__$1,meta11238));
});

}

return (new cljs.core.async.t_cljs$core$async11237(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11243 = (function (filter_GT_,p,ch,meta11244){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11244 = meta11244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11245,meta11244__$1){
var self__ = this;
var _11245__$1 = this;
return (new cljs.core.async.t_cljs$core$async11243(self__.filter_GT_,self__.p,self__.ch,meta11244__$1));
});

cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11245){
var self__ = this;
var _11245__$1 = this;
return self__.meta11244;
});

cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11244","meta11244",-1169081007,null)], null);
});

cljs.core.async.t_cljs$core$async11243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11243";

cljs.core.async.t_cljs$core$async11243.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11243");
});

cljs.core.async.__GT_t_cljs$core$async11243 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11243(filter_GT___$1,p__$1,ch__$1,meta11244){
return (new cljs.core.async.t_cljs$core$async11243(filter_GT___$1,p__$1,ch__$1,meta11244));
});

}

return (new cljs.core.async.t_cljs$core$async11243(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args11246 = [];
var len__7214__auto___11290 = arguments.length;
var i__7215__auto___11291 = (0);
while(true){
if((i__7215__auto___11291 < len__7214__auto___11290)){
args11246.push((arguments[i__7215__auto___11291]));

var G__11292 = (i__7215__auto___11291 + (1));
i__7215__auto___11291 = G__11292;
continue;
} else {
}
break;
}

var G__11248 = args11246.length;
switch (G__11248) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11246.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9044__auto___11294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___11294,out){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___11294,out){
return (function (state_11269){
var state_val_11270 = (state_11269[(1)]);
if((state_val_11270 === (7))){
var inst_11265 = (state_11269[(2)]);
var state_11269__$1 = state_11269;
var statearr_11271_11295 = state_11269__$1;
(statearr_11271_11295[(2)] = inst_11265);

(statearr_11271_11295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11270 === (1))){
var state_11269__$1 = state_11269;
var statearr_11272_11296 = state_11269__$1;
(statearr_11272_11296[(2)] = null);

(statearr_11272_11296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11270 === (4))){
var inst_11251 = (state_11269[(7)]);
var inst_11251__$1 = (state_11269[(2)]);
var inst_11252 = (inst_11251__$1 == null);
var state_11269__$1 = (function (){var statearr_11273 = state_11269;
(statearr_11273[(7)] = inst_11251__$1);

return statearr_11273;
})();
if(cljs.core.truth_(inst_11252)){
var statearr_11274_11297 = state_11269__$1;
(statearr_11274_11297[(1)] = (5));

} else {
var statearr_11275_11298 = state_11269__$1;
(statearr_11275_11298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11270 === (6))){
var inst_11251 = (state_11269[(7)]);
var inst_11256 = p.call(null,inst_11251);
var state_11269__$1 = state_11269;
if(cljs.core.truth_(inst_11256)){
var statearr_11276_11299 = state_11269__$1;
(statearr_11276_11299[(1)] = (8));

} else {
var statearr_11277_11300 = state_11269__$1;
(statearr_11277_11300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11270 === (3))){
var inst_11267 = (state_11269[(2)]);
var state_11269__$1 = state_11269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11269__$1,inst_11267);
} else {
if((state_val_11270 === (2))){
var state_11269__$1 = state_11269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11269__$1,(4),ch);
} else {
if((state_val_11270 === (11))){
var inst_11259 = (state_11269[(2)]);
var state_11269__$1 = state_11269;
var statearr_11278_11301 = state_11269__$1;
(statearr_11278_11301[(2)] = inst_11259);

(statearr_11278_11301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11270 === (9))){
var state_11269__$1 = state_11269;
var statearr_11279_11302 = state_11269__$1;
(statearr_11279_11302[(2)] = null);

(statearr_11279_11302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11270 === (5))){
var inst_11254 = cljs.core.async.close_BANG_.call(null,out);
var state_11269__$1 = state_11269;
var statearr_11280_11303 = state_11269__$1;
(statearr_11280_11303[(2)] = inst_11254);

(statearr_11280_11303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11270 === (10))){
var inst_11262 = (state_11269[(2)]);
var state_11269__$1 = (function (){var statearr_11281 = state_11269;
(statearr_11281[(8)] = inst_11262);

return statearr_11281;
})();
var statearr_11282_11304 = state_11269__$1;
(statearr_11282_11304[(2)] = null);

(statearr_11282_11304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11270 === (8))){
var inst_11251 = (state_11269[(7)]);
var state_11269__$1 = state_11269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11269__$1,(11),out,inst_11251);
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
});})(c__9044__auto___11294,out))
;
return ((function (switch__8932__auto__,c__9044__auto___11294,out){
return (function() {
var cljs$core$async$state_machine__8933__auto__ = null;
var cljs$core$async$state_machine__8933__auto____0 = (function (){
var statearr_11286 = [null,null,null,null,null,null,null,null,null];
(statearr_11286[(0)] = cljs$core$async$state_machine__8933__auto__);

(statearr_11286[(1)] = (1));

return statearr_11286;
});
var cljs$core$async$state_machine__8933__auto____1 = (function (state_11269){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_11269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e11287){if((e11287 instanceof Object)){
var ex__8936__auto__ = e11287;
var statearr_11288_11305 = state_11269;
(statearr_11288_11305[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11306 = state_11269;
state_11269 = G__11306;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$state_machine__8933__auto__ = function(state_11269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8933__auto____1.call(this,state_11269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8933__auto____0;
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8933__auto____1;
return cljs$core$async$state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___11294,out))
})();
var state__9046__auto__ = (function (){var statearr_11289 = f__9045__auto__.call(null);
(statearr_11289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___11294);

return statearr_11289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___11294,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11307 = [];
var len__7214__auto___11310 = arguments.length;
var i__7215__auto___11311 = (0);
while(true){
if((i__7215__auto___11311 < len__7214__auto___11310)){
args11307.push((arguments[i__7215__auto___11311]));

var G__11312 = (i__7215__auto___11311 + (1));
i__7215__auto___11311 = G__11312;
continue;
} else {
}
break;
}

var G__11309 = args11307.length;
switch (G__11309) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11307.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__9044__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto__){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto__){
return (function (state_11479){
var state_val_11480 = (state_11479[(1)]);
if((state_val_11480 === (7))){
var inst_11475 = (state_11479[(2)]);
var state_11479__$1 = state_11479;
var statearr_11481_11522 = state_11479__$1;
(statearr_11481_11522[(2)] = inst_11475);

(statearr_11481_11522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (20))){
var inst_11445 = (state_11479[(7)]);
var inst_11456 = (state_11479[(2)]);
var inst_11457 = cljs.core.next.call(null,inst_11445);
var inst_11431 = inst_11457;
var inst_11432 = null;
var inst_11433 = (0);
var inst_11434 = (0);
var state_11479__$1 = (function (){var statearr_11482 = state_11479;
(statearr_11482[(8)] = inst_11432);

(statearr_11482[(9)] = inst_11431);

(statearr_11482[(10)] = inst_11434);

(statearr_11482[(11)] = inst_11433);

(statearr_11482[(12)] = inst_11456);

return statearr_11482;
})();
var statearr_11483_11523 = state_11479__$1;
(statearr_11483_11523[(2)] = null);

(statearr_11483_11523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (1))){
var state_11479__$1 = state_11479;
var statearr_11484_11524 = state_11479__$1;
(statearr_11484_11524[(2)] = null);

(statearr_11484_11524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (4))){
var inst_11420 = (state_11479[(13)]);
var inst_11420__$1 = (state_11479[(2)]);
var inst_11421 = (inst_11420__$1 == null);
var state_11479__$1 = (function (){var statearr_11485 = state_11479;
(statearr_11485[(13)] = inst_11420__$1);

return statearr_11485;
})();
if(cljs.core.truth_(inst_11421)){
var statearr_11486_11525 = state_11479__$1;
(statearr_11486_11525[(1)] = (5));

} else {
var statearr_11487_11526 = state_11479__$1;
(statearr_11487_11526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (15))){
var state_11479__$1 = state_11479;
var statearr_11491_11527 = state_11479__$1;
(statearr_11491_11527[(2)] = null);

(statearr_11491_11527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (21))){
var state_11479__$1 = state_11479;
var statearr_11492_11528 = state_11479__$1;
(statearr_11492_11528[(2)] = null);

(statearr_11492_11528[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (13))){
var inst_11432 = (state_11479[(8)]);
var inst_11431 = (state_11479[(9)]);
var inst_11434 = (state_11479[(10)]);
var inst_11433 = (state_11479[(11)]);
var inst_11441 = (state_11479[(2)]);
var inst_11442 = (inst_11434 + (1));
var tmp11488 = inst_11432;
var tmp11489 = inst_11431;
var tmp11490 = inst_11433;
var inst_11431__$1 = tmp11489;
var inst_11432__$1 = tmp11488;
var inst_11433__$1 = tmp11490;
var inst_11434__$1 = inst_11442;
var state_11479__$1 = (function (){var statearr_11493 = state_11479;
(statearr_11493[(8)] = inst_11432__$1);

(statearr_11493[(9)] = inst_11431__$1);

(statearr_11493[(10)] = inst_11434__$1);

(statearr_11493[(14)] = inst_11441);

(statearr_11493[(11)] = inst_11433__$1);

return statearr_11493;
})();
var statearr_11494_11529 = state_11479__$1;
(statearr_11494_11529[(2)] = null);

(statearr_11494_11529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (22))){
var state_11479__$1 = state_11479;
var statearr_11495_11530 = state_11479__$1;
(statearr_11495_11530[(2)] = null);

(statearr_11495_11530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (6))){
var inst_11420 = (state_11479[(13)]);
var inst_11429 = f.call(null,inst_11420);
var inst_11430 = cljs.core.seq.call(null,inst_11429);
var inst_11431 = inst_11430;
var inst_11432 = null;
var inst_11433 = (0);
var inst_11434 = (0);
var state_11479__$1 = (function (){var statearr_11496 = state_11479;
(statearr_11496[(8)] = inst_11432);

(statearr_11496[(9)] = inst_11431);

(statearr_11496[(10)] = inst_11434);

(statearr_11496[(11)] = inst_11433);

return statearr_11496;
})();
var statearr_11497_11531 = state_11479__$1;
(statearr_11497_11531[(2)] = null);

(statearr_11497_11531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (17))){
var inst_11445 = (state_11479[(7)]);
var inst_11449 = cljs.core.chunk_first.call(null,inst_11445);
var inst_11450 = cljs.core.chunk_rest.call(null,inst_11445);
var inst_11451 = cljs.core.count.call(null,inst_11449);
var inst_11431 = inst_11450;
var inst_11432 = inst_11449;
var inst_11433 = inst_11451;
var inst_11434 = (0);
var state_11479__$1 = (function (){var statearr_11498 = state_11479;
(statearr_11498[(8)] = inst_11432);

(statearr_11498[(9)] = inst_11431);

(statearr_11498[(10)] = inst_11434);

(statearr_11498[(11)] = inst_11433);

return statearr_11498;
})();
var statearr_11499_11532 = state_11479__$1;
(statearr_11499_11532[(2)] = null);

(statearr_11499_11532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (3))){
var inst_11477 = (state_11479[(2)]);
var state_11479__$1 = state_11479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11479__$1,inst_11477);
} else {
if((state_val_11480 === (12))){
var inst_11465 = (state_11479[(2)]);
var state_11479__$1 = state_11479;
var statearr_11500_11533 = state_11479__$1;
(statearr_11500_11533[(2)] = inst_11465);

(statearr_11500_11533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (2))){
var state_11479__$1 = state_11479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11479__$1,(4),in$);
} else {
if((state_val_11480 === (23))){
var inst_11473 = (state_11479[(2)]);
var state_11479__$1 = state_11479;
var statearr_11501_11534 = state_11479__$1;
(statearr_11501_11534[(2)] = inst_11473);

(statearr_11501_11534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (19))){
var inst_11460 = (state_11479[(2)]);
var state_11479__$1 = state_11479;
var statearr_11502_11535 = state_11479__$1;
(statearr_11502_11535[(2)] = inst_11460);

(statearr_11502_11535[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (11))){
var inst_11431 = (state_11479[(9)]);
var inst_11445 = (state_11479[(7)]);
var inst_11445__$1 = cljs.core.seq.call(null,inst_11431);
var state_11479__$1 = (function (){var statearr_11503 = state_11479;
(statearr_11503[(7)] = inst_11445__$1);

return statearr_11503;
})();
if(inst_11445__$1){
var statearr_11504_11536 = state_11479__$1;
(statearr_11504_11536[(1)] = (14));

} else {
var statearr_11505_11537 = state_11479__$1;
(statearr_11505_11537[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (9))){
var inst_11467 = (state_11479[(2)]);
var inst_11468 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11479__$1 = (function (){var statearr_11506 = state_11479;
(statearr_11506[(15)] = inst_11467);

return statearr_11506;
})();
if(cljs.core.truth_(inst_11468)){
var statearr_11507_11538 = state_11479__$1;
(statearr_11507_11538[(1)] = (21));

} else {
var statearr_11508_11539 = state_11479__$1;
(statearr_11508_11539[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (5))){
var inst_11423 = cljs.core.async.close_BANG_.call(null,out);
var state_11479__$1 = state_11479;
var statearr_11509_11540 = state_11479__$1;
(statearr_11509_11540[(2)] = inst_11423);

(statearr_11509_11540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (14))){
var inst_11445 = (state_11479[(7)]);
var inst_11447 = cljs.core.chunked_seq_QMARK_.call(null,inst_11445);
var state_11479__$1 = state_11479;
if(inst_11447){
var statearr_11510_11541 = state_11479__$1;
(statearr_11510_11541[(1)] = (17));

} else {
var statearr_11511_11542 = state_11479__$1;
(statearr_11511_11542[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (16))){
var inst_11463 = (state_11479[(2)]);
var state_11479__$1 = state_11479;
var statearr_11512_11543 = state_11479__$1;
(statearr_11512_11543[(2)] = inst_11463);

(statearr_11512_11543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11480 === (10))){
var inst_11432 = (state_11479[(8)]);
var inst_11434 = (state_11479[(10)]);
var inst_11439 = cljs.core._nth.call(null,inst_11432,inst_11434);
var state_11479__$1 = state_11479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11479__$1,(13),out,inst_11439);
} else {
if((state_val_11480 === (18))){
var inst_11445 = (state_11479[(7)]);
var inst_11454 = cljs.core.first.call(null,inst_11445);
var state_11479__$1 = state_11479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11479__$1,(20),out,inst_11454);
} else {
if((state_val_11480 === (8))){
var inst_11434 = (state_11479[(10)]);
var inst_11433 = (state_11479[(11)]);
var inst_11436 = (inst_11434 < inst_11433);
var inst_11437 = inst_11436;
var state_11479__$1 = state_11479;
if(cljs.core.truth_(inst_11437)){
var statearr_11513_11544 = state_11479__$1;
(statearr_11513_11544[(1)] = (10));

} else {
var statearr_11514_11545 = state_11479__$1;
(statearr_11514_11545[(1)] = (11));

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
});})(c__9044__auto__))
;
return ((function (switch__8932__auto__,c__9044__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8933__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8933__auto____0 = (function (){
var statearr_11518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11518[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8933__auto__);

(statearr_11518[(1)] = (1));

return statearr_11518;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8933__auto____1 = (function (state_11479){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_11479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e11519){if((e11519 instanceof Object)){
var ex__8936__auto__ = e11519;
var statearr_11520_11546 = state_11479;
(statearr_11520_11546[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11547 = state_11479;
state_11479 = G__11547;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8933__auto__ = function(state_11479){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8933__auto____1.call(this,state_11479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8933__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8933__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto__))
})();
var state__9046__auto__ = (function (){var statearr_11521 = f__9045__auto__.call(null);
(statearr_11521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto__);

return statearr_11521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto__))
);

return c__9044__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11548 = [];
var len__7214__auto___11551 = arguments.length;
var i__7215__auto___11552 = (0);
while(true){
if((i__7215__auto___11552 < len__7214__auto___11551)){
args11548.push((arguments[i__7215__auto___11552]));

var G__11553 = (i__7215__auto___11552 + (1));
i__7215__auto___11552 = G__11553;
continue;
} else {
}
break;
}

var G__11550 = args11548.length;
switch (G__11550) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11548.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11555 = [];
var len__7214__auto___11558 = arguments.length;
var i__7215__auto___11559 = (0);
while(true){
if((i__7215__auto___11559 < len__7214__auto___11558)){
args11555.push((arguments[i__7215__auto___11559]));

var G__11560 = (i__7215__auto___11559 + (1));
i__7215__auto___11559 = G__11560;
continue;
} else {
}
break;
}

var G__11557 = args11555.length;
switch (G__11557) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11555.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11562 = [];
var len__7214__auto___11613 = arguments.length;
var i__7215__auto___11614 = (0);
while(true){
if((i__7215__auto___11614 < len__7214__auto___11613)){
args11562.push((arguments[i__7215__auto___11614]));

var G__11615 = (i__7215__auto___11614 + (1));
i__7215__auto___11614 = G__11615;
continue;
} else {
}
break;
}

var G__11564 = args11562.length;
switch (G__11564) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11562.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9044__auto___11617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___11617,out){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___11617,out){
return (function (state_11588){
var state_val_11589 = (state_11588[(1)]);
if((state_val_11589 === (7))){
var inst_11583 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
var statearr_11590_11618 = state_11588__$1;
(statearr_11590_11618[(2)] = inst_11583);

(statearr_11590_11618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (1))){
var inst_11565 = null;
var state_11588__$1 = (function (){var statearr_11591 = state_11588;
(statearr_11591[(7)] = inst_11565);

return statearr_11591;
})();
var statearr_11592_11619 = state_11588__$1;
(statearr_11592_11619[(2)] = null);

(statearr_11592_11619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (4))){
var inst_11568 = (state_11588[(8)]);
var inst_11568__$1 = (state_11588[(2)]);
var inst_11569 = (inst_11568__$1 == null);
var inst_11570 = cljs.core.not.call(null,inst_11569);
var state_11588__$1 = (function (){var statearr_11593 = state_11588;
(statearr_11593[(8)] = inst_11568__$1);

return statearr_11593;
})();
if(inst_11570){
var statearr_11594_11620 = state_11588__$1;
(statearr_11594_11620[(1)] = (5));

} else {
var statearr_11595_11621 = state_11588__$1;
(statearr_11595_11621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (6))){
var state_11588__$1 = state_11588;
var statearr_11596_11622 = state_11588__$1;
(statearr_11596_11622[(2)] = null);

(statearr_11596_11622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (3))){
var inst_11585 = (state_11588[(2)]);
var inst_11586 = cljs.core.async.close_BANG_.call(null,out);
var state_11588__$1 = (function (){var statearr_11597 = state_11588;
(statearr_11597[(9)] = inst_11585);

return statearr_11597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11588__$1,inst_11586);
} else {
if((state_val_11589 === (2))){
var state_11588__$1 = state_11588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11588__$1,(4),ch);
} else {
if((state_val_11589 === (11))){
var inst_11568 = (state_11588[(8)]);
var inst_11577 = (state_11588[(2)]);
var inst_11565 = inst_11568;
var state_11588__$1 = (function (){var statearr_11598 = state_11588;
(statearr_11598[(10)] = inst_11577);

(statearr_11598[(7)] = inst_11565);

return statearr_11598;
})();
var statearr_11599_11623 = state_11588__$1;
(statearr_11599_11623[(2)] = null);

(statearr_11599_11623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (9))){
var inst_11568 = (state_11588[(8)]);
var state_11588__$1 = state_11588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11588__$1,(11),out,inst_11568);
} else {
if((state_val_11589 === (5))){
var inst_11568 = (state_11588[(8)]);
var inst_11565 = (state_11588[(7)]);
var inst_11572 = cljs.core._EQ_.call(null,inst_11568,inst_11565);
var state_11588__$1 = state_11588;
if(inst_11572){
var statearr_11601_11624 = state_11588__$1;
(statearr_11601_11624[(1)] = (8));

} else {
var statearr_11602_11625 = state_11588__$1;
(statearr_11602_11625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (10))){
var inst_11580 = (state_11588[(2)]);
var state_11588__$1 = state_11588;
var statearr_11603_11626 = state_11588__$1;
(statearr_11603_11626[(2)] = inst_11580);

(statearr_11603_11626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11589 === (8))){
var inst_11565 = (state_11588[(7)]);
var tmp11600 = inst_11565;
var inst_11565__$1 = tmp11600;
var state_11588__$1 = (function (){var statearr_11604 = state_11588;
(statearr_11604[(7)] = inst_11565__$1);

return statearr_11604;
})();
var statearr_11605_11627 = state_11588__$1;
(statearr_11605_11627[(2)] = null);

(statearr_11605_11627[(1)] = (2));


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
});})(c__9044__auto___11617,out))
;
return ((function (switch__8932__auto__,c__9044__auto___11617,out){
return (function() {
var cljs$core$async$state_machine__8933__auto__ = null;
var cljs$core$async$state_machine__8933__auto____0 = (function (){
var statearr_11609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11609[(0)] = cljs$core$async$state_machine__8933__auto__);

(statearr_11609[(1)] = (1));

return statearr_11609;
});
var cljs$core$async$state_machine__8933__auto____1 = (function (state_11588){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_11588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e11610){if((e11610 instanceof Object)){
var ex__8936__auto__ = e11610;
var statearr_11611_11628 = state_11588;
(statearr_11611_11628[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11629 = state_11588;
state_11588 = G__11629;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$state_machine__8933__auto__ = function(state_11588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8933__auto____1.call(this,state_11588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8933__auto____0;
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8933__auto____1;
return cljs$core$async$state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___11617,out))
})();
var state__9046__auto__ = (function (){var statearr_11612 = f__9045__auto__.call(null);
(statearr_11612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___11617);

return statearr_11612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___11617,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11630 = [];
var len__7214__auto___11700 = arguments.length;
var i__7215__auto___11701 = (0);
while(true){
if((i__7215__auto___11701 < len__7214__auto___11700)){
args11630.push((arguments[i__7215__auto___11701]));

var G__11702 = (i__7215__auto___11701 + (1));
i__7215__auto___11701 = G__11702;
continue;
} else {
}
break;
}

var G__11632 = args11630.length;
switch (G__11632) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11630.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9044__auto___11704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___11704,out){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___11704,out){
return (function (state_11670){
var state_val_11671 = (state_11670[(1)]);
if((state_val_11671 === (7))){
var inst_11666 = (state_11670[(2)]);
var state_11670__$1 = state_11670;
var statearr_11672_11705 = state_11670__$1;
(statearr_11672_11705[(2)] = inst_11666);

(statearr_11672_11705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (1))){
var inst_11633 = (new Array(n));
var inst_11634 = inst_11633;
var inst_11635 = (0);
var state_11670__$1 = (function (){var statearr_11673 = state_11670;
(statearr_11673[(7)] = inst_11635);

(statearr_11673[(8)] = inst_11634);

return statearr_11673;
})();
var statearr_11674_11706 = state_11670__$1;
(statearr_11674_11706[(2)] = null);

(statearr_11674_11706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (4))){
var inst_11638 = (state_11670[(9)]);
var inst_11638__$1 = (state_11670[(2)]);
var inst_11639 = (inst_11638__$1 == null);
var inst_11640 = cljs.core.not.call(null,inst_11639);
var state_11670__$1 = (function (){var statearr_11675 = state_11670;
(statearr_11675[(9)] = inst_11638__$1);

return statearr_11675;
})();
if(inst_11640){
var statearr_11676_11707 = state_11670__$1;
(statearr_11676_11707[(1)] = (5));

} else {
var statearr_11677_11708 = state_11670__$1;
(statearr_11677_11708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (15))){
var inst_11660 = (state_11670[(2)]);
var state_11670__$1 = state_11670;
var statearr_11678_11709 = state_11670__$1;
(statearr_11678_11709[(2)] = inst_11660);

(statearr_11678_11709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (13))){
var state_11670__$1 = state_11670;
var statearr_11679_11710 = state_11670__$1;
(statearr_11679_11710[(2)] = null);

(statearr_11679_11710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (6))){
var inst_11635 = (state_11670[(7)]);
var inst_11656 = (inst_11635 > (0));
var state_11670__$1 = state_11670;
if(cljs.core.truth_(inst_11656)){
var statearr_11680_11711 = state_11670__$1;
(statearr_11680_11711[(1)] = (12));

} else {
var statearr_11681_11712 = state_11670__$1;
(statearr_11681_11712[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (3))){
var inst_11668 = (state_11670[(2)]);
var state_11670__$1 = state_11670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11670__$1,inst_11668);
} else {
if((state_val_11671 === (12))){
var inst_11634 = (state_11670[(8)]);
var inst_11658 = cljs.core.vec.call(null,inst_11634);
var state_11670__$1 = state_11670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11670__$1,(15),out,inst_11658);
} else {
if((state_val_11671 === (2))){
var state_11670__$1 = state_11670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11670__$1,(4),ch);
} else {
if((state_val_11671 === (11))){
var inst_11650 = (state_11670[(2)]);
var inst_11651 = (new Array(n));
var inst_11634 = inst_11651;
var inst_11635 = (0);
var state_11670__$1 = (function (){var statearr_11682 = state_11670;
(statearr_11682[(7)] = inst_11635);

(statearr_11682[(8)] = inst_11634);

(statearr_11682[(10)] = inst_11650);

return statearr_11682;
})();
var statearr_11683_11713 = state_11670__$1;
(statearr_11683_11713[(2)] = null);

(statearr_11683_11713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (9))){
var inst_11634 = (state_11670[(8)]);
var inst_11648 = cljs.core.vec.call(null,inst_11634);
var state_11670__$1 = state_11670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11670__$1,(11),out,inst_11648);
} else {
if((state_val_11671 === (5))){
var inst_11643 = (state_11670[(11)]);
var inst_11635 = (state_11670[(7)]);
var inst_11634 = (state_11670[(8)]);
var inst_11638 = (state_11670[(9)]);
var inst_11642 = (inst_11634[inst_11635] = inst_11638);
var inst_11643__$1 = (inst_11635 + (1));
var inst_11644 = (inst_11643__$1 < n);
var state_11670__$1 = (function (){var statearr_11684 = state_11670;
(statearr_11684[(11)] = inst_11643__$1);

(statearr_11684[(12)] = inst_11642);

return statearr_11684;
})();
if(cljs.core.truth_(inst_11644)){
var statearr_11685_11714 = state_11670__$1;
(statearr_11685_11714[(1)] = (8));

} else {
var statearr_11686_11715 = state_11670__$1;
(statearr_11686_11715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (14))){
var inst_11663 = (state_11670[(2)]);
var inst_11664 = cljs.core.async.close_BANG_.call(null,out);
var state_11670__$1 = (function (){var statearr_11688 = state_11670;
(statearr_11688[(13)] = inst_11663);

return statearr_11688;
})();
var statearr_11689_11716 = state_11670__$1;
(statearr_11689_11716[(2)] = inst_11664);

(statearr_11689_11716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (10))){
var inst_11654 = (state_11670[(2)]);
var state_11670__$1 = state_11670;
var statearr_11690_11717 = state_11670__$1;
(statearr_11690_11717[(2)] = inst_11654);

(statearr_11690_11717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (8))){
var inst_11643 = (state_11670[(11)]);
var inst_11634 = (state_11670[(8)]);
var tmp11687 = inst_11634;
var inst_11634__$1 = tmp11687;
var inst_11635 = inst_11643;
var state_11670__$1 = (function (){var statearr_11691 = state_11670;
(statearr_11691[(7)] = inst_11635);

(statearr_11691[(8)] = inst_11634__$1);

return statearr_11691;
})();
var statearr_11692_11718 = state_11670__$1;
(statearr_11692_11718[(2)] = null);

(statearr_11692_11718[(1)] = (2));


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
});})(c__9044__auto___11704,out))
;
return ((function (switch__8932__auto__,c__9044__auto___11704,out){
return (function() {
var cljs$core$async$state_machine__8933__auto__ = null;
var cljs$core$async$state_machine__8933__auto____0 = (function (){
var statearr_11696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11696[(0)] = cljs$core$async$state_machine__8933__auto__);

(statearr_11696[(1)] = (1));

return statearr_11696;
});
var cljs$core$async$state_machine__8933__auto____1 = (function (state_11670){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_11670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e11697){if((e11697 instanceof Object)){
var ex__8936__auto__ = e11697;
var statearr_11698_11719 = state_11670;
(statearr_11698_11719[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11720 = state_11670;
state_11670 = G__11720;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$state_machine__8933__auto__ = function(state_11670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8933__auto____1.call(this,state_11670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8933__auto____0;
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8933__auto____1;
return cljs$core$async$state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___11704,out))
})();
var state__9046__auto__ = (function (){var statearr_11699 = f__9045__auto__.call(null);
(statearr_11699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___11704);

return statearr_11699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___11704,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11721 = [];
var len__7214__auto___11795 = arguments.length;
var i__7215__auto___11796 = (0);
while(true){
if((i__7215__auto___11796 < len__7214__auto___11795)){
args11721.push((arguments[i__7215__auto___11796]));

var G__11797 = (i__7215__auto___11796 + (1));
i__7215__auto___11796 = G__11797;
continue;
} else {
}
break;
}

var G__11723 = args11721.length;
switch (G__11723) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11721.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9044__auto___11799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___11799,out){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___11799,out){
return (function (state_11765){
var state_val_11766 = (state_11765[(1)]);
if((state_val_11766 === (7))){
var inst_11761 = (state_11765[(2)]);
var state_11765__$1 = state_11765;
var statearr_11767_11800 = state_11765__$1;
(statearr_11767_11800[(2)] = inst_11761);

(statearr_11767_11800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (1))){
var inst_11724 = [];
var inst_11725 = inst_11724;
var inst_11726 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11765__$1 = (function (){var statearr_11768 = state_11765;
(statearr_11768[(7)] = inst_11725);

(statearr_11768[(8)] = inst_11726);

return statearr_11768;
})();
var statearr_11769_11801 = state_11765__$1;
(statearr_11769_11801[(2)] = null);

(statearr_11769_11801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (4))){
var inst_11729 = (state_11765[(9)]);
var inst_11729__$1 = (state_11765[(2)]);
var inst_11730 = (inst_11729__$1 == null);
var inst_11731 = cljs.core.not.call(null,inst_11730);
var state_11765__$1 = (function (){var statearr_11770 = state_11765;
(statearr_11770[(9)] = inst_11729__$1);

return statearr_11770;
})();
if(inst_11731){
var statearr_11771_11802 = state_11765__$1;
(statearr_11771_11802[(1)] = (5));

} else {
var statearr_11772_11803 = state_11765__$1;
(statearr_11772_11803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (15))){
var inst_11755 = (state_11765[(2)]);
var state_11765__$1 = state_11765;
var statearr_11773_11804 = state_11765__$1;
(statearr_11773_11804[(2)] = inst_11755);

(statearr_11773_11804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (13))){
var state_11765__$1 = state_11765;
var statearr_11774_11805 = state_11765__$1;
(statearr_11774_11805[(2)] = null);

(statearr_11774_11805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (6))){
var inst_11725 = (state_11765[(7)]);
var inst_11750 = inst_11725.length;
var inst_11751 = (inst_11750 > (0));
var state_11765__$1 = state_11765;
if(cljs.core.truth_(inst_11751)){
var statearr_11775_11806 = state_11765__$1;
(statearr_11775_11806[(1)] = (12));

} else {
var statearr_11776_11807 = state_11765__$1;
(statearr_11776_11807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (3))){
var inst_11763 = (state_11765[(2)]);
var state_11765__$1 = state_11765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11765__$1,inst_11763);
} else {
if((state_val_11766 === (12))){
var inst_11725 = (state_11765[(7)]);
var inst_11753 = cljs.core.vec.call(null,inst_11725);
var state_11765__$1 = state_11765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11765__$1,(15),out,inst_11753);
} else {
if((state_val_11766 === (2))){
var state_11765__$1 = state_11765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11765__$1,(4),ch);
} else {
if((state_val_11766 === (11))){
var inst_11729 = (state_11765[(9)]);
var inst_11733 = (state_11765[(10)]);
var inst_11743 = (state_11765[(2)]);
var inst_11744 = [];
var inst_11745 = inst_11744.push(inst_11729);
var inst_11725 = inst_11744;
var inst_11726 = inst_11733;
var state_11765__$1 = (function (){var statearr_11777 = state_11765;
(statearr_11777[(7)] = inst_11725);

(statearr_11777[(8)] = inst_11726);

(statearr_11777[(11)] = inst_11743);

(statearr_11777[(12)] = inst_11745);

return statearr_11777;
})();
var statearr_11778_11808 = state_11765__$1;
(statearr_11778_11808[(2)] = null);

(statearr_11778_11808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (9))){
var inst_11725 = (state_11765[(7)]);
var inst_11741 = cljs.core.vec.call(null,inst_11725);
var state_11765__$1 = state_11765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11765__$1,(11),out,inst_11741);
} else {
if((state_val_11766 === (5))){
var inst_11729 = (state_11765[(9)]);
var inst_11726 = (state_11765[(8)]);
var inst_11733 = (state_11765[(10)]);
var inst_11733__$1 = f.call(null,inst_11729);
var inst_11734 = cljs.core._EQ_.call(null,inst_11733__$1,inst_11726);
var inst_11735 = cljs.core.keyword_identical_QMARK_.call(null,inst_11726,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11736 = (inst_11734) || (inst_11735);
var state_11765__$1 = (function (){var statearr_11779 = state_11765;
(statearr_11779[(10)] = inst_11733__$1);

return statearr_11779;
})();
if(cljs.core.truth_(inst_11736)){
var statearr_11780_11809 = state_11765__$1;
(statearr_11780_11809[(1)] = (8));

} else {
var statearr_11781_11810 = state_11765__$1;
(statearr_11781_11810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (14))){
var inst_11758 = (state_11765[(2)]);
var inst_11759 = cljs.core.async.close_BANG_.call(null,out);
var state_11765__$1 = (function (){var statearr_11783 = state_11765;
(statearr_11783[(13)] = inst_11758);

return statearr_11783;
})();
var statearr_11784_11811 = state_11765__$1;
(statearr_11784_11811[(2)] = inst_11759);

(statearr_11784_11811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (10))){
var inst_11748 = (state_11765[(2)]);
var state_11765__$1 = state_11765;
var statearr_11785_11812 = state_11765__$1;
(statearr_11785_11812[(2)] = inst_11748);

(statearr_11785_11812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11766 === (8))){
var inst_11725 = (state_11765[(7)]);
var inst_11729 = (state_11765[(9)]);
var inst_11733 = (state_11765[(10)]);
var inst_11738 = inst_11725.push(inst_11729);
var tmp11782 = inst_11725;
var inst_11725__$1 = tmp11782;
var inst_11726 = inst_11733;
var state_11765__$1 = (function (){var statearr_11786 = state_11765;
(statearr_11786[(14)] = inst_11738);

(statearr_11786[(7)] = inst_11725__$1);

(statearr_11786[(8)] = inst_11726);

return statearr_11786;
})();
var statearr_11787_11813 = state_11765__$1;
(statearr_11787_11813[(2)] = null);

(statearr_11787_11813[(1)] = (2));


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
});})(c__9044__auto___11799,out))
;
return ((function (switch__8932__auto__,c__9044__auto___11799,out){
return (function() {
var cljs$core$async$state_machine__8933__auto__ = null;
var cljs$core$async$state_machine__8933__auto____0 = (function (){
var statearr_11791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11791[(0)] = cljs$core$async$state_machine__8933__auto__);

(statearr_11791[(1)] = (1));

return statearr_11791;
});
var cljs$core$async$state_machine__8933__auto____1 = (function (state_11765){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_11765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e11792){if((e11792 instanceof Object)){
var ex__8936__auto__ = e11792;
var statearr_11793_11814 = state_11765;
(statearr_11793_11814[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11815 = state_11765;
state_11765 = G__11815;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs$core$async$state_machine__8933__auto__ = function(state_11765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8933__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8933__auto____1.call(this,state_11765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8933__auto____0;
cljs$core$async$state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8933__auto____1;
return cljs$core$async$state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___11799,out))
})();
var state__9046__auto__ = (function (){var statearr_11794 = f__9045__auto__.call(null);
(statearr_11794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___11799);

return statearr_11794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___11799,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1456413332979