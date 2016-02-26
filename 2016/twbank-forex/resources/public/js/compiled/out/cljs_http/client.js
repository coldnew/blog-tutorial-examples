// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6144__auto__ = v;
if(cljs.core.truth_(and__6144__auto__)){
return (v > (0));
} else {
return and__6144__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__11936_SHARP_,p2__11935_SHARP_){
var vec__11938 = clojure.string.split.call(null,p2__11935_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__11938,(0),null);
var v = cljs.core.nth.call(null,vec__11938,(1),null);
return cljs.core.assoc.call(null,p1__11936_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__11939_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__11939_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__11940){
var vec__11942 = p__11940;
var k = cljs.core.nth.call(null,vec__11942,(0),null);
var v = cljs.core.nth.call(null,vec__11942,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__11943_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__11943_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6144__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__6144__auto__){
var and__6144__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__6144__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__11944_SHARP_){
return cljs_http.client.decode_body.call(null,p1__11944_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11949 = arguments.length;
var i__7215__auto___11950 = (0);
while(true){
if((i__7215__auto___11950 < len__7214__auto___11949)){
args__7221__auto__.push((arguments[i__7215__auto___11950]));

var G__11951 = (i__7215__auto___11950 + (1));
i__7215__auto___11950 = G__11951;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11947){
var vec__11948 = p__11947;
var default_headers = cljs.core.nth.call(null,vec__11948,(0),null);
return ((function (vec__11948,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6156__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__11948,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq11945){
var G__11946 = cljs.core.first.call(null,seq11945);
var seq11945__$1 = cljs.core.next.call(null,seq11945);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__11946,seq11945__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11956 = arguments.length;
var i__7215__auto___11957 = (0);
while(true){
if((i__7215__auto___11957 < len__7214__auto___11956)){
args__7221__auto__.push((arguments[i__7215__auto___11957]));

var G__11958 = (i__7215__auto___11957 + (1));
i__7215__auto___11957 = G__11958;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11954){
var vec__11955 = p__11954;
var accept = cljs.core.nth.call(null,vec__11955,(0),null);
return ((function (vec__11955,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6156__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__11955,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq11952){
var G__11953 = cljs.core.first.call(null,seq11952);
var seq11952__$1 = cljs.core.next.call(null,seq11952);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__11953,seq11952__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11963 = arguments.length;
var i__7215__auto___11964 = (0);
while(true){
if((i__7215__auto___11964 < len__7214__auto___11963)){
args__7221__auto__.push((arguments[i__7215__auto___11964]));

var G__11965 = (i__7215__auto___11964 + (1));
i__7215__auto___11964 = G__11965;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__11961){
var vec__11962 = p__11961;
var content_type = cljs.core.nth.call(null,vec__11962,(0),null);
return ((function (vec__11962,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6156__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__11962,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq11959){
var G__11960 = cljs.core.first.call(null,seq11959);
var seq11959__$1 = cljs.core.next.call(null,seq11959);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__11960,seq11959__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__11968 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__11968__$1 = ((((!((map__11968 == null)))?((((map__11968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11968):map__11968);
var encoding = cljs.core.get.call(null,map__11968__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__11968__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__11974 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__11974__$1 = ((((!((map__11974 == null)))?((((map__11974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11974):map__11974);
var decoding = cljs.core.get.call(null,map__11974__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__11974__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__11974,map__11974__$1,decoding,decoding_opts){
return (function (p1__11970_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__11970_SHARP_,decoding,decoding_opts);
});})(map__11974,map__11974__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__11974,map__11974__$1,decoding,decoding_opts,transit_decode){
return (function (p1__11971_SHARP_){
return cljs_http.client.decode_body.call(null,p1__11971_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__11974,map__11974__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__11976_SHARP_){
return cljs_http.client.decode_body.call(null,p1__11976_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__11980){
var map__11981 = p__11980;
var map__11981__$1 = ((((!((map__11981 == null)))?((((map__11981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11981):map__11981);
var req = map__11981__$1;
var query_params = cljs.core.get.call(null,map__11981__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__11986){
var map__11987 = p__11986;
var map__11987__$1 = ((((!((map__11987 == null)))?((((map__11987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11987):map__11987);
var request = map__11987__$1;
var form_params = cljs.core.get.call(null,map__11987__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__11987__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__11987__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__6144__auto__ = form_params;
if(cljs.core.truth_(and__6144__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6144__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__11995_12001 = cljs.core.seq.call(null,params);
var chunk__11996_12002 = null;
var count__11997_12003 = (0);
var i__11998_12004 = (0);
while(true){
if((i__11998_12004 < count__11997_12003)){
var vec__11999_12005 = cljs.core._nth.call(null,chunk__11996_12002,i__11998_12004);
var k_12006 = cljs.core.nth.call(null,vec__11999_12005,(0),null);
var v_12007 = cljs.core.nth.call(null,vec__11999_12005,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_12007)){
form_data.append(cljs.core.name.call(null,k_12006),cljs.core.first.call(null,v_12007),cljs.core.second.call(null,v_12007));
} else {
form_data.append(cljs.core.name.call(null,k_12006),v_12007);
}

var G__12008 = seq__11995_12001;
var G__12009 = chunk__11996_12002;
var G__12010 = count__11997_12003;
var G__12011 = (i__11998_12004 + (1));
seq__11995_12001 = G__12008;
chunk__11996_12002 = G__12009;
count__11997_12003 = G__12010;
i__11998_12004 = G__12011;
continue;
} else {
var temp__4657__auto___12012 = cljs.core.seq.call(null,seq__11995_12001);
if(temp__4657__auto___12012){
var seq__11995_12013__$1 = temp__4657__auto___12012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11995_12013__$1)){
var c__6959__auto___12014 = cljs.core.chunk_first.call(null,seq__11995_12013__$1);
var G__12015 = cljs.core.chunk_rest.call(null,seq__11995_12013__$1);
var G__12016 = c__6959__auto___12014;
var G__12017 = cljs.core.count.call(null,c__6959__auto___12014);
var G__12018 = (0);
seq__11995_12001 = G__12015;
chunk__11996_12002 = G__12016;
count__11997_12003 = G__12017;
i__11998_12004 = G__12018;
continue;
} else {
var vec__12000_12019 = cljs.core.first.call(null,seq__11995_12013__$1);
var k_12020 = cljs.core.nth.call(null,vec__12000_12019,(0),null);
var v_12021 = cljs.core.nth.call(null,vec__12000_12019,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_12021)){
form_data.append(cljs.core.name.call(null,k_12020),cljs.core.first.call(null,v_12021),cljs.core.second.call(null,v_12021));
} else {
form_data.append(cljs.core.name.call(null,k_12020),v_12021);
}

var G__12022 = cljs.core.next.call(null,seq__11995_12013__$1);
var G__12023 = null;
var G__12024 = (0);
var G__12025 = (0);
seq__11995_12001 = G__12022;
chunk__11996_12002 = G__12023;
count__11997_12003 = G__12024;
i__11998_12004 = G__12025;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__12029){
var map__12030 = p__12029;
var map__12030__$1 = ((((!((map__12030 == null)))?((((map__12030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12030):map__12030);
var request = map__12030__$1;
var multipart_params = cljs.core.get.call(null,map__12030__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__12030__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__6144__auto__ = multipart_params;
if(cljs.core.truth_(and__6144__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6144__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__12032_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__12032_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__12037){
var map__12038 = p__12037;
var map__12038__$1 = ((((!((map__12038 == null)))?((((map__12038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12038):map__12038);
var req = map__12038__$1;
var query_params = cljs.core.get.call(null,map__12038__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__12038,map__12038__$1,req,query_params){
return (function (p1__12033_SHARP_){
return cljs.core.merge.call(null,p1__12033_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__12038,map__12038__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12044 = arguments.length;
var i__7215__auto___12045 = (0);
while(true){
if((i__7215__auto___12045 < len__7214__auto___12044)){
args__7221__auto__.push((arguments[i__7215__auto___12045]));

var G__12046 = (i__7215__auto___12045 + (1));
i__7215__auto___12045 = G__12046;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12042){
var vec__12043 = p__12042;
var credentials = cljs.core.nth.call(null,vec__12043,(0),null);
return ((function (vec__12043,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6156__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__12043,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq12040){
var G__12041 = cljs.core.first.call(null,seq12040);
var seq12040__$1 = cljs.core.next.call(null,seq12040);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__12041,seq12040__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12051 = arguments.length;
var i__7215__auto___12052 = (0);
while(true){
if((i__7215__auto___12052 < len__7214__auto___12051)){
args__7221__auto__.push((arguments[i__7215__auto___12052]));

var G__12053 = (i__7215__auto___12052 + (1));
i__7215__auto___12052 = G__12053;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12049){
var vec__12050 = p__12049;
var req = cljs.core.nth.call(null,vec__12050,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq12047){
var G__12048 = cljs.core.first.call(null,seq12047);
var seq12047__$1 = cljs.core.next.call(null,seq12047);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__12048,seq12047__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12058 = arguments.length;
var i__7215__auto___12059 = (0);
while(true){
if((i__7215__auto___12059 < len__7214__auto___12058)){
args__7221__auto__.push((arguments[i__7215__auto___12059]));

var G__12060 = (i__7215__auto___12059 + (1));
i__7215__auto___12059 = G__12060;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12056){
var vec__12057 = p__12056;
var req = cljs.core.nth.call(null,vec__12057,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq12054){
var G__12055 = cljs.core.first.call(null,seq12054);
var seq12054__$1 = cljs.core.next.call(null,seq12054);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__12055,seq12054__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12065 = arguments.length;
var i__7215__auto___12066 = (0);
while(true){
if((i__7215__auto___12066 < len__7214__auto___12065)){
args__7221__auto__.push((arguments[i__7215__auto___12066]));

var G__12067 = (i__7215__auto___12066 + (1));
i__7215__auto___12066 = G__12067;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12063){
var vec__12064 = p__12063;
var req = cljs.core.nth.call(null,vec__12064,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq12061){
var G__12062 = cljs.core.first.call(null,seq12061);
var seq12061__$1 = cljs.core.next.call(null,seq12061);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__12062,seq12061__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12072 = arguments.length;
var i__7215__auto___12073 = (0);
while(true){
if((i__7215__auto___12073 < len__7214__auto___12072)){
args__7221__auto__.push((arguments[i__7215__auto___12073]));

var G__12074 = (i__7215__auto___12073 + (1));
i__7215__auto___12073 = G__12074;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12070){
var vec__12071 = p__12070;
var req = cljs.core.nth.call(null,vec__12071,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq12068){
var G__12069 = cljs.core.first.call(null,seq12068);
var seq12068__$1 = cljs.core.next.call(null,seq12068);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__12069,seq12068__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12079 = arguments.length;
var i__7215__auto___12080 = (0);
while(true){
if((i__7215__auto___12080 < len__7214__auto___12079)){
args__7221__auto__.push((arguments[i__7215__auto___12080]));

var G__12081 = (i__7215__auto___12080 + (1));
i__7215__auto___12080 = G__12081;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12077){
var vec__12078 = p__12077;
var req = cljs.core.nth.call(null,vec__12078,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq12075){
var G__12076 = cljs.core.first.call(null,seq12075);
var seq12075__$1 = cljs.core.next.call(null,seq12075);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__12076,seq12075__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12086 = arguments.length;
var i__7215__auto___12087 = (0);
while(true){
if((i__7215__auto___12087 < len__7214__auto___12086)){
args__7221__auto__.push((arguments[i__7215__auto___12087]));

var G__12088 = (i__7215__auto___12087 + (1));
i__7215__auto___12087 = G__12088;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12084){
var vec__12085 = p__12084;
var req = cljs.core.nth.call(null,vec__12085,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq12082){
var G__12083 = cljs.core.first.call(null,seq12082);
var seq12082__$1 = cljs.core.next.call(null,seq12082);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__12083,seq12082__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12093 = arguments.length;
var i__7215__auto___12094 = (0);
while(true){
if((i__7215__auto___12094 < len__7214__auto___12093)){
args__7221__auto__.push((arguments[i__7215__auto___12094]));

var G__12095 = (i__7215__auto___12094 + (1));
i__7215__auto___12094 = G__12095;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12091){
var vec__12092 = p__12091;
var req = cljs.core.nth.call(null,vec__12092,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq12089){
var G__12090 = cljs.core.first.call(null,seq12089);
var seq12089__$1 = cljs.core.next.call(null,seq12089);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__12090,seq12089__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12100 = arguments.length;
var i__7215__auto___12101 = (0);
while(true){
if((i__7215__auto___12101 < len__7214__auto___12100)){
args__7221__auto__.push((arguments[i__7215__auto___12101]));

var G__12102 = (i__7215__auto___12101 + (1));
i__7215__auto___12101 = G__12102;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12098){
var vec__12099 = p__12098;
var req = cljs.core.nth.call(null,vec__12099,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq12096){
var G__12097 = cljs.core.first.call(null,seq12096);
var seq12096__$1 = cljs.core.next.call(null,seq12096);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__12097,seq12096__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12107 = arguments.length;
var i__7215__auto___12108 = (0);
while(true){
if((i__7215__auto___12108 < len__7214__auto___12107)){
args__7221__auto__.push((arguments[i__7215__auto___12108]));

var G__12109 = (i__7215__auto___12108 + (1));
i__7215__auto___12108 = G__12109;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12105){
var vec__12106 = p__12105;
var req = cljs.core.nth.call(null,vec__12106,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq12103){
var G__12104 = cljs.core.first.call(null,seq12103);
var seq12103__$1 = cljs.core.next.call(null,seq12103);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__12104,seq12103__$1);
});

//# sourceMappingURL=client.js.map?rel=1456413333857