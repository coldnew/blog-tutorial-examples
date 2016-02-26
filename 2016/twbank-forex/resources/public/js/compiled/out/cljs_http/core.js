// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__11820){
var vec__11821 = p__11820;
var k = cljs.core.nth.call(null,vec__11821,(0),null);
var v = cljs.core.nth.call(null,vec__11821,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__11823 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__11823)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__11823)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__11823)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__11823)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__11823)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__11823)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__11824){
var map__11828 = p__11824;
var map__11828__$1 = ((((!((map__11828 == null)))?((((map__11828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11828):map__11828);
var request = map__11828__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__11828__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__11828__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__11828__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__6156__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__11830 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__11830,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__11830,response_type);

G__11830.setTimeoutInterval(timeout);

G__11830.setWithCredentials(send_credentials);

return G__11830;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__11831){
var map__11858 = p__11831;
var map__11858__$1 = ((((!((map__11858 == null)))?((((map__11858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11858):map__11858);
var request = map__11858__$1;
var request_method = cljs.core.get.call(null,map__11858__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__11858__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__11858__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__11858__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__11858__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__6156__auto__ = request_method;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__11858,map__11858__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__11858,map__11858__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__9044__auto___11884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___11884,channel,request_url,method,headers__$1,xhr__$1,map__11858,map__11858__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___11884,channel,request_url,method,headers__$1,xhr__$1,map__11858,map__11858__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_11870){
var state_val_11871 = (state_11870[(1)]);
if((state_val_11871 === (1))){
var state_11870__$1 = state_11870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11870__$1,(2),cancel);
} else {
if((state_val_11871 === (2))){
var inst_11861 = (state_11870[(2)]);
var inst_11862 = xhr__$1.isComplete();
var inst_11863 = cljs.core.not.call(null,inst_11862);
var state_11870__$1 = (function (){var statearr_11872 = state_11870;
(statearr_11872[(7)] = inst_11861);

return statearr_11872;
})();
if(inst_11863){
var statearr_11873_11885 = state_11870__$1;
(statearr_11873_11885[(1)] = (3));

} else {
var statearr_11874_11886 = state_11870__$1;
(statearr_11874_11886[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11871 === (3))){
var inst_11865 = xhr__$1.abort();
var state_11870__$1 = state_11870;
var statearr_11875_11887 = state_11870__$1;
(statearr_11875_11887[(2)] = inst_11865);

(statearr_11875_11887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11871 === (4))){
var state_11870__$1 = state_11870;
var statearr_11876_11888 = state_11870__$1;
(statearr_11876_11888[(2)] = null);

(statearr_11876_11888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11871 === (5))){
var inst_11868 = (state_11870[(2)]);
var state_11870__$1 = state_11870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11870__$1,inst_11868);
} else {
return null;
}
}
}
}
}
});})(c__9044__auto___11884,channel,request_url,method,headers__$1,xhr__$1,map__11858,map__11858__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__8932__auto__,c__9044__auto___11884,channel,request_url,method,headers__$1,xhr__$1,map__11858,map__11858__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__8933__auto__ = null;
var cljs_http$core$xhr_$_state_machine__8933__auto____0 = (function (){
var statearr_11880 = [null,null,null,null,null,null,null,null];
(statearr_11880[(0)] = cljs_http$core$xhr_$_state_machine__8933__auto__);

(statearr_11880[(1)] = (1));

return statearr_11880;
});
var cljs_http$core$xhr_$_state_machine__8933__auto____1 = (function (state_11870){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_11870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e11881){if((e11881 instanceof Object)){
var ex__8936__auto__ = e11881;
var statearr_11882_11889 = state_11870;
(statearr_11882_11889[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11890 = state_11870;
state_11870 = G__11890;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__8933__auto__ = function(state_11870){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__8933__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__8933__auto____1.call(this,state_11870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__8933__auto____0;
cljs_http$core$xhr_$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__8933__auto____1;
return cljs_http$core$xhr_$_state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___11884,channel,request_url,method,headers__$1,xhr__$1,map__11858,map__11858__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__9046__auto__ = (function (){var statearr_11883 = f__9045__auto__.call(null);
(statearr_11883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___11884);

return statearr_11883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___11884,channel,request_url,method,headers__$1,xhr__$1,map__11858,map__11858__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__11891){
var map__11908 = p__11891;
var map__11908__$1 = ((((!((map__11908 == null)))?((((map__11908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11908):map__11908);
var request = map__11908__$1;
var timeout = cljs.core.get.call(null,map__11908__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__11908__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__11908__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__11908__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_11924 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__11908,map__11908__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__11908,map__11908__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__11908,map__11908__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__11908,map__11908__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_11924], null));

if(cljs.core.truth_(cancel)){
var c__9044__auto___11925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9044__auto___11925,req_11924,channel,jsonp__$1,map__11908,map__11908__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__9045__auto__ = (function (){var switch__8932__auto__ = ((function (c__9044__auto___11925,req_11924,channel,jsonp__$1,map__11908,map__11908__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_11914){
var state_val_11915 = (state_11914[(1)]);
if((state_val_11915 === (1))){
var state_11914__$1 = state_11914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11914__$1,(2),cancel);
} else {
if((state_val_11915 === (2))){
var inst_11911 = (state_11914[(2)]);
var inst_11912 = jsonp__$1.cancel(req_11924);
var state_11914__$1 = (function (){var statearr_11916 = state_11914;
(statearr_11916[(7)] = inst_11911);

return statearr_11916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11914__$1,inst_11912);
} else {
return null;
}
}
});})(c__9044__auto___11925,req_11924,channel,jsonp__$1,map__11908,map__11908__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__8932__auto__,c__9044__auto___11925,req_11924,channel,jsonp__$1,map__11908,map__11908__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__8933__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__8933__auto____0 = (function (){
var statearr_11920 = [null,null,null,null,null,null,null,null];
(statearr_11920[(0)] = cljs_http$core$jsonp_$_state_machine__8933__auto__);

(statearr_11920[(1)] = (1));

return statearr_11920;
});
var cljs_http$core$jsonp_$_state_machine__8933__auto____1 = (function (state_11914){
while(true){
var ret_value__8934__auto__ = (function (){try{while(true){
var result__8935__auto__ = switch__8932__auto__.call(null,state_11914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8935__auto__;
}
break;
}
}catch (e11921){if((e11921 instanceof Object)){
var ex__8936__auto__ = e11921;
var statearr_11922_11926 = state_11914;
(statearr_11922_11926[(5)] = ex__8936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11927 = state_11914;
state_11914 = G__11927;
continue;
} else {
return ret_value__8934__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__8933__auto__ = function(state_11914){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__8933__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__8933__auto____1.call(this,state_11914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__8933__auto____0;
cljs_http$core$jsonp_$_state_machine__8933__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__8933__auto____1;
return cljs_http$core$jsonp_$_state_machine__8933__auto__;
})()
;})(switch__8932__auto__,c__9044__auto___11925,req_11924,channel,jsonp__$1,map__11908,map__11908__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__9046__auto__ = (function (){var statearr_11923 = f__9045__auto__.call(null);
(statearr_11923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9044__auto___11925);

return statearr_11923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9046__auto__);
});})(c__9044__auto___11925,req_11924,channel,jsonp__$1,map__11908,map__11908__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__11928){
var map__11931 = p__11928;
var map__11931__$1 = ((((!((map__11931 == null)))?((((map__11931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11931):map__11931);
var request__$1 = map__11931__$1;
var request_method = cljs.core.get.call(null,map__11931__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1456413333477