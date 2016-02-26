// Compiled by ClojureScript 1.7.228 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__7499_7503 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__7500_7504 = null;
var count__7501_7505 = (0);
var i__7502_7506 = (0);
while(true){
if((i__7502_7506 < count__7501_7505)){
var k_7507 = cljs.core._nth.call(null,chunk__7500_7504,i__7502_7506);
var v_7508 = (b[k_7507]);
(a[k_7507] = v_7508);

var G__7509 = seq__7499_7503;
var G__7510 = chunk__7500_7504;
var G__7511 = count__7501_7505;
var G__7512 = (i__7502_7506 + (1));
seq__7499_7503 = G__7509;
chunk__7500_7504 = G__7510;
count__7501_7505 = G__7511;
i__7502_7506 = G__7512;
continue;
} else {
var temp__4657__auto___7513 = cljs.core.seq.call(null,seq__7499_7503);
if(temp__4657__auto___7513){
var seq__7499_7514__$1 = temp__4657__auto___7513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7499_7514__$1)){
var c__6959__auto___7515 = cljs.core.chunk_first.call(null,seq__7499_7514__$1);
var G__7516 = cljs.core.chunk_rest.call(null,seq__7499_7514__$1);
var G__7517 = c__6959__auto___7515;
var G__7518 = cljs.core.count.call(null,c__6959__auto___7515);
var G__7519 = (0);
seq__7499_7503 = G__7516;
chunk__7500_7504 = G__7517;
count__7501_7505 = G__7518;
i__7502_7506 = G__7519;
continue;
} else {
var k_7520 = cljs.core.first.call(null,seq__7499_7514__$1);
var v_7521 = (b[k_7520]);
(a[k_7520] = v_7521);

var G__7522 = cljs.core.next.call(null,seq__7499_7514__$1);
var G__7523 = null;
var G__7524 = (0);
var G__7525 = (0);
seq__7499_7503 = G__7522;
chunk__7500_7504 = G__7523;
count__7501_7505 = G__7524;
i__7502_7506 = G__7525;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args7526 = [];
var len__7214__auto___7529 = arguments.length;
var i__7215__auto___7530 = (0);
while(true){
if((i__7215__auto___7530 < len__7214__auto___7529)){
args7526.push((arguments[i__7215__auto___7530]));

var G__7531 = (i__7215__auto___7530 + (1));
i__7215__auto___7530 = G__7531;
continue;
} else {
}
break;
}

var G__7528 = args7526.length;
switch (G__7528) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7526.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__7533 = (i + (2));
var G__7534 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__7533;
ret = G__7534;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7535_7539 = cljs.core.seq.call(null,v);
var chunk__7536_7540 = null;
var count__7537_7541 = (0);
var i__7538_7542 = (0);
while(true){
if((i__7538_7542 < count__7537_7541)){
var x_7543 = cljs.core._nth.call(null,chunk__7536_7540,i__7538_7542);
ret.push(x_7543);

var G__7544 = seq__7535_7539;
var G__7545 = chunk__7536_7540;
var G__7546 = count__7537_7541;
var G__7547 = (i__7538_7542 + (1));
seq__7535_7539 = G__7544;
chunk__7536_7540 = G__7545;
count__7537_7541 = G__7546;
i__7538_7542 = G__7547;
continue;
} else {
var temp__4657__auto___7548 = cljs.core.seq.call(null,seq__7535_7539);
if(temp__4657__auto___7548){
var seq__7535_7549__$1 = temp__4657__auto___7548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7535_7549__$1)){
var c__6959__auto___7550 = cljs.core.chunk_first.call(null,seq__7535_7549__$1);
var G__7551 = cljs.core.chunk_rest.call(null,seq__7535_7549__$1);
var G__7552 = c__6959__auto___7550;
var G__7553 = cljs.core.count.call(null,c__6959__auto___7550);
var G__7554 = (0);
seq__7535_7539 = G__7551;
chunk__7536_7540 = G__7552;
count__7537_7541 = G__7553;
i__7538_7542 = G__7554;
continue;
} else {
var x_7555 = cljs.core.first.call(null,seq__7535_7549__$1);
ret.push(x_7555);

var G__7556 = cljs.core.next.call(null,seq__7535_7549__$1);
var G__7557 = null;
var G__7558 = (0);
var G__7559 = (0);
seq__7535_7539 = G__7556;
chunk__7536_7540 = G__7557;
count__7537_7541 = G__7558;
i__7538_7542 = G__7559;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7560_7564 = cljs.core.seq.call(null,v);
var chunk__7561_7565 = null;
var count__7562_7566 = (0);
var i__7563_7567 = (0);
while(true){
if((i__7563_7567 < count__7562_7566)){
var x_7568 = cljs.core._nth.call(null,chunk__7561_7565,i__7563_7567);
ret.push(x_7568);

var G__7569 = seq__7560_7564;
var G__7570 = chunk__7561_7565;
var G__7571 = count__7562_7566;
var G__7572 = (i__7563_7567 + (1));
seq__7560_7564 = G__7569;
chunk__7561_7565 = G__7570;
count__7562_7566 = G__7571;
i__7563_7567 = G__7572;
continue;
} else {
var temp__4657__auto___7573 = cljs.core.seq.call(null,seq__7560_7564);
if(temp__4657__auto___7573){
var seq__7560_7574__$1 = temp__4657__auto___7573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7560_7574__$1)){
var c__6959__auto___7575 = cljs.core.chunk_first.call(null,seq__7560_7574__$1);
var G__7576 = cljs.core.chunk_rest.call(null,seq__7560_7574__$1);
var G__7577 = c__6959__auto___7575;
var G__7578 = cljs.core.count.call(null,c__6959__auto___7575);
var G__7579 = (0);
seq__7560_7564 = G__7576;
chunk__7561_7565 = G__7577;
count__7562_7566 = G__7578;
i__7563_7567 = G__7579;
continue;
} else {
var x_7580 = cljs.core.first.call(null,seq__7560_7574__$1);
ret.push(x_7580);

var G__7581 = cljs.core.next.call(null,seq__7560_7574__$1);
var G__7582 = null;
var G__7583 = (0);
var G__7584 = (0);
seq__7560_7564 = G__7581;
chunk__7561_7565 = G__7582;
count__7562_7566 = G__7583;
i__7563_7567 = G__7584;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7585_7589 = cljs.core.seq.call(null,v);
var chunk__7586_7590 = null;
var count__7587_7591 = (0);
var i__7588_7592 = (0);
while(true){
if((i__7588_7592 < count__7587_7591)){
var x_7593 = cljs.core._nth.call(null,chunk__7586_7590,i__7588_7592);
ret.push(x_7593);

var G__7594 = seq__7585_7589;
var G__7595 = chunk__7586_7590;
var G__7596 = count__7587_7591;
var G__7597 = (i__7588_7592 + (1));
seq__7585_7589 = G__7594;
chunk__7586_7590 = G__7595;
count__7587_7591 = G__7596;
i__7588_7592 = G__7597;
continue;
} else {
var temp__4657__auto___7598 = cljs.core.seq.call(null,seq__7585_7589);
if(temp__4657__auto___7598){
var seq__7585_7599__$1 = temp__4657__auto___7598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7585_7599__$1)){
var c__6959__auto___7600 = cljs.core.chunk_first.call(null,seq__7585_7599__$1);
var G__7601 = cljs.core.chunk_rest.call(null,seq__7585_7599__$1);
var G__7602 = c__6959__auto___7600;
var G__7603 = cljs.core.count.call(null,c__6959__auto___7600);
var G__7604 = (0);
seq__7585_7589 = G__7601;
chunk__7586_7590 = G__7602;
count__7587_7591 = G__7603;
i__7588_7592 = G__7604;
continue;
} else {
var x_7605 = cljs.core.first.call(null,seq__7585_7599__$1);
ret.push(x_7605);

var G__7606 = cljs.core.next.call(null,seq__7585_7599__$1);
var G__7607 = null;
var G__7608 = (0);
var G__7609 = (0);
seq__7585_7589 = G__7606;
chunk__7586_7590 = G__7607;
count__7587_7591 = G__7608;
i__7588_7592 = G__7609;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args7610 = [];
var len__7214__auto___7621 = arguments.length;
var i__7215__auto___7622 = (0);
while(true){
if((i__7215__auto___7622 < len__7214__auto___7621)){
args7610.push((arguments[i__7215__auto___7622]));

var G__7623 = (i__7215__auto___7622 + (1));
i__7215__auto___7622 = G__7623;
continue;
} else {
}
break;
}

var G__7612 = args7610.length;
switch (G__7612) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7610.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__7613 = obj;
G__7613.push(kfn.call(null,k),vfn.call(null,v));

return G__7613;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x7614 = cljs.core.clone.call(null,handlers);
x7614.forEach = ((function (x7614,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__7615 = cljs.core.seq.call(null,coll);
var chunk__7616 = null;
var count__7617 = (0);
var i__7618 = (0);
while(true){
if((i__7618 < count__7617)){
var vec__7619 = cljs.core._nth.call(null,chunk__7616,i__7618);
var k = cljs.core.nth.call(null,vec__7619,(0),null);
var v = cljs.core.nth.call(null,vec__7619,(1),null);
f.call(null,v,k);

var G__7625 = seq__7615;
var G__7626 = chunk__7616;
var G__7627 = count__7617;
var G__7628 = (i__7618 + (1));
seq__7615 = G__7625;
chunk__7616 = G__7626;
count__7617 = G__7627;
i__7618 = G__7628;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7615);
if(temp__4657__auto__){
var seq__7615__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7615__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__7615__$1);
var G__7629 = cljs.core.chunk_rest.call(null,seq__7615__$1);
var G__7630 = c__6959__auto__;
var G__7631 = cljs.core.count.call(null,c__6959__auto__);
var G__7632 = (0);
seq__7615 = G__7629;
chunk__7616 = G__7630;
count__7617 = G__7631;
i__7618 = G__7632;
continue;
} else {
var vec__7620 = cljs.core.first.call(null,seq__7615__$1);
var k = cljs.core.nth.call(null,vec__7620,(0),null);
var v = cljs.core.nth.call(null,vec__7620,(1),null);
f.call(null,v,k);

var G__7633 = cljs.core.next.call(null,seq__7615__$1);
var G__7634 = null;
var G__7635 = (0);
var G__7636 = (0);
seq__7615 = G__7633;
chunk__7616 = G__7634;
count__7617 = G__7635;
i__7618 = G__7636;
continue;
}
} else {
return null;
}
}
break;
}
});})(x7614,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x7614;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args7637 = [];
var len__7214__auto___7643 = arguments.length;
var i__7215__auto___7644 = (0);
while(true){
if((i__7215__auto___7644 < len__7214__auto___7643)){
args7637.push((arguments[i__7215__auto___7644]));

var G__7645 = (i__7215__auto___7644 + (1));
i__7215__auto___7644 = G__7645;
continue;
} else {
}
break;
}

var G__7639 = args7637.length;
switch (G__7639) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7637.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit7640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit7640 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta7641){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta7641 = meta7641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit7640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7642,meta7641__$1){
var self__ = this;
var _7642__$1 = this;
return (new cognitect.transit.t_cognitect$transit7640(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta7641__$1));
});

cognitect.transit.t_cognitect$transit7640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7642){
var self__ = this;
var _7642__$1 = this;
return self__.meta7641;
});

cognitect.transit.t_cognitect$transit7640.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit7640.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit7640.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit7640.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit7640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta7641","meta7641",-4664407,null)], null);
});

cognitect.transit.t_cognitect$transit7640.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit7640.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit7640";

cognitect.transit.t_cognitect$transit7640.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/t_cognitect$transit7640");
});

cognitect.transit.__GT_t_cognitect$transit7640 = (function cognitect$transit$__GT_t_cognitect$transit7640(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta7641){
return (new cognitect.transit.t_cognitect$transit7640(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta7641));
});

}

return (new cognitect.transit.t_cognitect$transit7640(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6156__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1456413328850