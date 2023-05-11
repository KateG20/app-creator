goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__37635 = e.target.readyState;
var fexpr__37634 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__37634.cljs$core$IFn$_invoke$arity$1 ? fexpr__37634.cljs$core$IFn$_invoke$arity$1(G__37635) : fexpr__37634.call(null,G__37635));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
ajax.xml_http_request.goog$module$goog$object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__37644,handler){
var map__37645 = p__37644;
var map__37645__$1 = cljs.core.__destructure_map(map__37645);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37645__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37645__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37645__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37645__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37645__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37645__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37645__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__37642_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__37642_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___37670 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___37670)){
var response_type_37671 = temp__5804__auto___37670;
(this$__$1.responseType = cljs.core.name(response_type_37671));
} else {
}

var seq__37648_37672 = cljs.core.seq(headers);
var chunk__37649_37673 = null;
var count__37650_37674 = (0);
var i__37651_37675 = (0);
while(true){
if((i__37651_37675 < count__37650_37674)){
var vec__37660_37676 = chunk__37649_37673.cljs$core$IIndexed$_nth$arity$2(null,i__37651_37675);
var k_37677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37660_37676,(0),null);
var v_37678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37660_37676,(1),null);
this$__$1.setRequestHeader(k_37677,v_37678);


var G__37679 = seq__37648_37672;
var G__37680 = chunk__37649_37673;
var G__37681 = count__37650_37674;
var G__37682 = (i__37651_37675 + (1));
seq__37648_37672 = G__37679;
chunk__37649_37673 = G__37680;
count__37650_37674 = G__37681;
i__37651_37675 = G__37682;
continue;
} else {
var temp__5804__auto___37683 = cljs.core.seq(seq__37648_37672);
if(temp__5804__auto___37683){
var seq__37648_37684__$1 = temp__5804__auto___37683;
if(cljs.core.chunked_seq_QMARK_(seq__37648_37684__$1)){
var c__5568__auto___37685 = cljs.core.chunk_first(seq__37648_37684__$1);
var G__37686 = cljs.core.chunk_rest(seq__37648_37684__$1);
var G__37687 = c__5568__auto___37685;
var G__37688 = cljs.core.count(c__5568__auto___37685);
var G__37689 = (0);
seq__37648_37672 = G__37686;
chunk__37649_37673 = G__37687;
count__37650_37674 = G__37688;
i__37651_37675 = G__37689;
continue;
} else {
var vec__37664_37690 = cljs.core.first(seq__37648_37684__$1);
var k_37691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37664_37690,(0),null);
var v_37692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37664_37690,(1),null);
this$__$1.setRequestHeader(k_37691,v_37692);


var G__37693 = cljs.core.next(seq__37648_37684__$1);
var G__37694 = null;
var G__37695 = (0);
var G__37696 = (0);
seq__37648_37672 = G__37693;
chunk__37649_37673 = G__37694;
count__37650_37674 = G__37695;
i__37651_37675 = G__37696;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
