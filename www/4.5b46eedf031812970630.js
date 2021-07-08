(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Vaw3:function(e,t,r){"use strict";r.d(t,"a",(function(){return We}));var n=r("HDdC"),o=r("LRne"),i=r("Cfvw"),a=r("lJxs"),s=r("pxpQ"),u=r("eIep"),c=r("fXoL"),l=r("spgP"),h=r("zIRd"),f=r("30Go"),p=r("qOnz"),d=r("/6Yf"),_="firebasestorage.googleapis.com",g=function(e){function t(r,n){var o=e.call(this,y(r),"Firebase Storage: "+n+" ("+y(r)+")")||this;return o.customData={serverResponse:null},Object.setPrototypeOf(o,t.prototype),o}return Object(f.c)(t,e),t.prototype.codeEquals=function(e){return y(e)===this.code},Object.defineProperty(t.prototype,"message",{get:function(){return this.customData.serverResponse?this.message+"\n"+this.customData.serverResponse:this.message},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e},enumerable:!1,configurable:!0}),t}(p.c),b="canceled",v="invalid-argument",m="unsupported-environment";function y(e){return"storage/"+e}function w(){return new g("unknown","An unknown error occurred, please check the error payload for server response.")}function R(){return new g(b,"User canceled the upload/download.")}function O(){return new g("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function k(e){return new g(v,e)}function T(){return new g("app-deleted","The Firebase app was deleted.")}function P(e){return new g("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(e,t){return new g("invalid-format","String does not match format '"+e+"': "+t)}function U(e){throw new g("internal-error","Internal error: "+e)}var S={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},j=function(){return function(e,t){this.data=e,this.contentType=t||null}}();function C(e,t){switch(e){case S.RAW:return new j(E(t));case S.BASE64:case S.BASE64URL:return new j(A(e,t));case S.DATA_URL:return new j((r=new I(t)).base64?A(S.BASE64,r.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(r){throw x(S.DATA_URL,"Malformed data URL.")}return E(t)}(r.rest),new I(t).contentType)}var r;throw w()}function E(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296==(64512&n))if(r<e.length-1&&56320==(64512&e.charCodeAt(r+1))){var o=n,i=e.charCodeAt(++r);t.push(240|(n=65536|(1023&o)<<10|1023&i)>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189);else 56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function A(e,t){switch(e){case S.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw x(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case S.BASE64URL:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(o||i)throw x(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(t)}catch(c){throw x(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var I=function(){return function(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw x(S.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r,n,o=t[1]||null;null!=o&&(this.base64=(r=o).length>=(n=";base64").length&&r.substring(r.length-n.length)===n,this.contentType=this.base64?o.substring(0,o.length-";base64".length):o),this.rest=e.substring(e.indexOf(",")+1)}}(),L="running",q="pausing",B="paused",M="success",N="canceling",z="canceled",D="error",F={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function H(e){switch(e){case L:case q:case N:return F.RUNNING;case B:return F.PAUSED;case M:return F.SUCCESS;case z:return F.CANCELED;case D:default:return F.ERROR}}var X=function(e){return e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT",e}({}),G=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=X.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=X.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=X.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw U("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw U("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw U("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw U("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)},e}(),W=function(){function e(){}return e.prototype.createXhrIo=function(){return new G},e}();function K(e){return"string"==typeof e||e instanceof String}function V(e){return J()&&e instanceof Blob}function J(){return"undefined"!=typeof Blob}function $(e,t,r,n){if(n<t)throw new g(v,"Invalid value for '"+e+"'. Expected "+t+" or greater.");if(n>r)throw new g(v,"Invalid value for '"+e+"'. Expected "+r+" or less.")}function Y(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Z(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Y();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(J())return new Blob(e);throw new g(m,"This browser doesn't seem to support creating Blobs")}var Q=function(){function e(e,t){var r=0,n="";V(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(V(this.data_)){var n=(i=t,a=r,(o=this.data_).webkitSlice?o.webkitSlice(i,a):o.mozSlice?o.mozSlice(i,a):o.slice?o.slice(i,a):null);return null===n?null:new e(n)}var o,i,a;return new e(new Uint8Array(this.data_.buffer,t,r-t),!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(J()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(Z.apply(null,n))}var o=t.map((function(e){return K(e)?C(S.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),ee=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(n){return new e(t,"")}if(""===r.path)return r;throw new g("invalid-default-bucket","Invalid default bucket '"+t+"'.")},e.makeFromUrl=function(t){var r=null,n="([A-Za-z0-9.\\-_]+)",o=new RegExp("^gs://"+n+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}for(var a=_.replace(/[.]/g,"\\."),s=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+a+"/v[A-Za-z0-9_]+/b/"+n+"/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp("^https?://(?:storage.googleapis.com|storage.cloud.google.com)/"+n+"/([^?#]*)","i"),indices:{bucket:1,path:2},postModify:i}],u=0;u<s.length;u++){var c=s[u],l=c.regex.exec(t);if(l){var h=l[c.indices.path];h||(h=""),r=new e(l[c.indices.bucket],h),c.postModify(r);break}}if(null==r)throw function(e){return new g("invalid-url","Invalid URL '"+e+"'.")}(t);return r},e}();function te(e){var t,r;try{t=JSON.parse(e)}catch(n){return null}return"object"!=typeof(r=t)||Array.isArray(r)?null:t}function re(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function ne(e){return"https://"+_+"/v0"+e}function oe(e){var t=encodeURIComponent,r="?";for(var n in e)e.hasOwnProperty(n)&&(r=r+(t(n)+"=")+t(e[n])+"&");return r.slice(0,-1)}function ie(e,t){return t}var ae=function(){return function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||ie}}(),se=null;function ue(){if(se)return se;var e=[];e.push(new ae("bucket")),e.push(new ae("generation")),e.push(new ae("metageneration")),e.push(new ae("name","fullPath",!0));var t=new ae("name");t.xform=function(e,t){return function(e){return!K(e)||e.length<2?e:re(e)}(t)},e.push(t);var r=new ae("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new ae("timeCreated")),e.push(new ae("updated")),e.push(new ae("md5Hash",null,!0)),e.push(new ae("cacheControl",null,!0)),e.push(new ae("contentDisposition",null,!0)),e.push(new ae("contentEncoding",null,!0)),e.push(new ae("contentLanguage",null,!0)),e.push(new ae("contentType",null,!0)),e.push(new ae("metadata","customMetadata",!0)),se=e}function ce(e,t,r){var n=te(t);return null===n?null:function(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var r=new ee(e.bucket,e.fullPath);return t.makeStorageReference(r)}})}(n,e),n}(e,n,r)}function le(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}var he=function(){return function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}();function fe(e){if(!e)throw w()}function pe(e,t){return function(r,n){var o=ce(e,n,t);return fe(null!==o),o}}function de(e){return function(t,r){var n;return(n=401===t.getStatus()?new g("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?new g("quota-exceeded","Quota for bucket '"+e.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===t.getStatus()?new g("unauthorized","User does not have permission to access '"+e.path+"'."):r).serverResponse=r.serverResponse,n}}function _e(e){var t=de(e);return function(r,n){var o=t(r,n);return 404===r.getStatus()&&(o=new g("object-not-found","Object '"+e.path+"' does not exist.")),o.serverResponse=n.serverResponse,o}}function ge(e,t,r){var n=ne(t.fullServerUrl()),o=e.maxOperationRetryTime,i=new he(n,"GET",pe(e,r),o);return i.errorHandler=_e(t),i}function be(e,t,r){var n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=function(e,t){return t&&t.type()||"application/octet-stream"}(0,t)),n}var ve=function(){return function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}}();function me(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(n){fe(!1)}return fe(!!r&&-1!==(t||["active"]).indexOf(r)),r}var ye=262144,we=function(){return function(e,t,r){if("function"==typeof e||null!=t||null!=r)this.next=e,this.error=t,this.complete=r;else{var n=e;this.next=n.next,this.error=n.error,this.complete=n.complete}}}(),Re=function(){return function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i}}();function Oe(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}var ke=function(){function e(e,t,r){var n=this;void 0===r&&(r=null),this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=ue(),this._resumable=this._shouldDoResumable(this._blob),this._state=L,this._errorHandler=function(e){n._request=void 0,n._chunkMultiplier=1,e.codeEquals(b)?(n._needToFetchStatus=!0,n.completeTransitions_()):(n._error=e,n._transition(D))},this._metadataErrorHandler=function(e){n._request=void 0,e.codeEquals(b)?n.completeTransitions_():(n._error=e,n._transition(D))},this._promise=new Promise((function(e,t){n._resolve=e,n._reject=t,n._start()})),this._promise.then(null,(function(){}))}return e.prototype._makeProgressCallback=function(){var e=this,t=this._transferred;return function(r){return e._updateProgress(t+r)}},e.prototype._shouldDoResumable=function(e){return e.size()>262144},e.prototype._start=function(){this._state===L&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())},e.prototype._resolveToken=function(e){var t=this;this._ref.storage.getAuthToken().then((function(r){switch(t._state){case L:e(r);break;case N:t._transition(z);break;case q:t._transition(B)}}))},e.prototype._createResumable=function(){var e=this;this._resolveToken((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=be(t,n,o),s={name:a.fullPath},u=ne(i),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=le(a,r),h=new he(u,"POST",(function(e){var t;me(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){fe(!1)}return fe(K(t)),t}),e.maxUploadRetryTime);return h.urlParams=s,h.headers=c,h.body=l,h.errorHandler=de(t),h}(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),n=e._ref.storage.makeRequest(r,t);e._request=n,n.getPromise().then((function(t){e._request=void 0,e._uploadUrl=t,e._needToFetchStatus=!1,e.completeTransitions_()}),e._errorHandler)}))},e.prototype._fetchStatus=function(){var e=this,t=this._uploadUrl;this._resolveToken((function(r){var n=function(e,t,r,n){var o=new he(r,"POST",(function(e){var t=me(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){fe(!1)}r||fe(!1);var o=Number(r);return fe(!isNaN(o)),new ve(o,n.size(),"final"===t)}),e.maxUploadRetryTime);return o.headers={"X-Goog-Upload-Command":"query"},o.errorHandler=de(t),o}(e._ref.storage,e._ref._location,t,e._blob),o=e._ref.storage.makeRequest(n,r);e._request=o,o.getPromise().then((function(t){t=t,e._request=void 0,e._updateProgress(t.current),e._needToFetchStatus=!1,t.finalized&&(e._needToFetchMetadata=!0),e.completeTransitions_()}),e._errorHandler)}))},e.prototype._continueUpload=function(){var e=this,t=ye*this._chunkMultiplier,r=new ve(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((function(o){var i;try{i=function(e,t,r,n,o,i,a,s){var u=new ve(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw new g("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var c=u.total-u.current,l=c;o>0&&(l=Math.min(l,o));var h=u.current,f={"X-Goog-Upload-Command":l===c?"upload, finalize":"upload","X-Goog-Upload-Offset":u.current},p=n.slice(h,h+l);if(null===p)throw O();var d=new he(r,"POST",(function(e,r){var o,a=me(e,["active","final"]),s=u.current+l,c=n.size();return o="final"===a?pe(t,i)(e,r):null,new ve(s,c,"final"===a,o)}),t.maxUploadRetryTime);return d.headers=f,d.body=p.uploadData(),d.progressCallback=s||null,d.errorHandler=de(e),d}(e._ref._location,e._ref.storage,n,e._blob,t,e._mappings,r,e._makeProgressCallback())}catch(s){return e._error=s,void e._transition(D)}var a=e._ref.storage.makeRequest(i,o);e._request=a,a.getPromise().then((function(t){e._increaseMultiplier(),e._request=void 0,e._updateProgress(t.current),t.finalized?(e._metadata=t.metadata,e._transition(M)):e.completeTransitions_()}),e._errorHandler)}))},e.prototype._increaseMultiplier=function(){ye*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)},e.prototype._fetchMetadata=function(){var e=this;this._resolveToken((function(t){var r=ge(e._ref.storage,e._ref._location,e._mappings),n=e._ref.storage.makeRequest(r,t);e._request=n,n.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._transition(M)}),e._metadataErrorHandler)}))},e.prototype._oneShotUpload=function(){var e=this;this._resolveToken((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=be(t,n,o),c=le(u,r),l=Q.getBlob("--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",n,"\r\n--"+s+"--");if(null===l)throw O();var h={name:u.fullPath},f=ne(i),p=e.maxUploadRetryTime,d=new he(f,"POST",pe(e,r),p);return d.urlParams=h,d.headers=a,d.body=l.uploadData(),d.errorHandler=de(t),d}(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),n=e._ref.storage.makeRequest(r,t);e._request=n,n.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._updateProgress(e._blob.size()),e._transition(M)}),e._errorHandler)}))},e.prototype._updateProgress=function(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()},e.prototype._transition=function(e){if(this._state!==e)switch(e){case N:case q:this._state=e,void 0!==this._request&&this._request.cancel();break;case L:var t=this._state===B;this._state=e,t&&(this._notifyObservers(),this._start());break;case B:this._state=e,this._notifyObservers();break;case z:this._error=R(),this._state=e,this._notifyObservers();break;case D:case M:this._state=e,this._notifyObservers()}},e.prototype.completeTransitions_=function(){switch(this._state){case q:this._transition(B);break;case N:this._transition(z);break;case L:this._start()}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=H(this._state);return new Re(this._transferred,this._blob.size(),e,this._metadata,this,this._ref)},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,r,n){var o=this,i=new we(t,r,n);return this._addObserver(i),function(){o._removeObserver(i)}},e.prototype.then=function(e,t){return this._promise.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype._addObserver=function(e){this._observers.push(e),this._notifyObserver(e)},e.prototype._removeObserver=function(e){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)},e.prototype._notifyObservers=function(){var e=this;this._finishPromise(),this._observers.slice().forEach((function(t){e._notifyObserver(t)}))},e.prototype._finishPromise=function(){if(void 0!==this._resolve){var e=!0;switch(H(this._state)){case F.SUCCESS:Oe(this._resolve.bind(null,this.snapshot))();break;case F.CANCELED:case F.ERROR:Oe(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}},e.prototype._notifyObserver=function(e){switch(H(this._state)){case F.RUNNING:case F.PAUSED:e.next&&Oe(e.next.bind(e,this.snapshot))();break;case F.SUCCESS:e.complete&&Oe(e.complete.bind(e))();break;case F.CANCELED:case F.ERROR:e.error&&Oe(e.error.bind(e,this._error))();break;default:e.error&&Oe(e.error.bind(e,this._error))()}},e.prototype.resume=function(){var e=this._state===B||this._state===q;return e&&this._transition(L),e},e.prototype.pause=function(){var e=this._state===L;return e&&this._transition(q),e},e.prototype.cancel=function(){var e=this._state===L||this._state===q;return e&&this._transition(N),e},e}(),Te=function(){function e(e,t){this._service=e,this._location=t instanceof ee?t:ee.makeFromUrl(t)}return e.prototype.toString=function(){return"gs://"+this._location.bucket+"/"+this._location.path},e.prototype.newRef=function(t,r){return new e(t,r)},Object.defineProperty(e.prototype,"root",{get:function(){var e=new ee(this._location.bucket,"");return this.newRef(this._service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return re(this._location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this._service},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;var r=new ee(this._location.bucket,t);return new e(this._service,r)},enumerable:!1,configurable:!0}),e.prototype._throwIfRoot=function(e){if(""===this._location.path)throw P(e)},e}();function Pe(e,t){return Object(f.b)(this,void 0,void 0,(function(){var r,n,o;return Object(f.d)(this,(function(i){switch(i.label){case 0:return null!=t&&"number"==typeof t.maxResults&&$("options.maxResults",1,1e3,t.maxResults),[4,e.storage.getAuthToken()];case 1:return r=i.sent(),o=function(e,t,r,n,o){var i={};i.prefix=t.isRoot?"":t.path+"/",r&&r.length>0&&(i.delimiter=r),n&&(i.pageToken=n),o&&(i.maxResults=o);var a=ne(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime,u=new he(a,"GET",function(e,t){return function(r,n){var o=function(e,t,r){var n=te(r);return null===n?null:function(e,t,r){var n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r.prefixes)for(var o=0,i=r.prefixes;o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e.makeStorageReference(new ee(t,a));n.prefixes.push(s)}if(r.items)for(var u=0,c=r.items;u<c.length;u++)s=e.makeStorageReference(new ee(t,c[u].name)),n.items.push(s);return n}(e,t,n)}(e,t,n);return fe(null!==o),o}}(e,t.bucket),s);return u.urlParams=i,u.errorHandler=de(t),u}(e.storage,e._location,"/",(n=t||{}).pageToken,n.maxResults),[2,e.storage.makeRequest(o,r).getPromise()]}}))}))}function xe(e,t){var r=function(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new ee(e._location.bucket,r);return new Te(e.storage,n)}var Ue=function(){function e(e,t,r){this._delegate=e,this.task=t,this.ref=r}return Object.defineProperty(e.prototype,"bytesTransferred",{get:function(){return this._delegate.bytesTransferred},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._delegate.state},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"totalBytes",{get:function(){return this._delegate.totalBytes},enumerable:!1,configurable:!0}),e}(),Se=function(){function e(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate),this._snapshot=new Ue(this._delegate.snapshot,this,this._ref)}return Object.defineProperty(e.prototype,"snapshot",{get:function(){return this._snapshot},enumerable:!1,configurable:!0}),e.prototype.then=function(e,t){var r=this;return this._delegate.then((function(t){if(e)return e(new Ue(t,r,r._ref))}),t)},e.prototype.on=function(e,t,r,n){var o=this,i=void 0;return t&&(i="function"==typeof t?function(e){return t(new Ue(e,o,o._ref))}:{next:t.next?function(e){return t.next(new Ue(e,o,o._ref))}:void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,r||void 0,n||void 0)},e}(),je=function(){function e(e,t){this._delegate=e,this._service=t}return Object.defineProperty(e.prototype,"prefixes",{get:function(){var e=this;return this._delegate.prefixes.map((function(t){return new Ce(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){var e=this;return this._delegate.items.map((function(t){return new Ce(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextPageToken",{get:function(){return this._delegate.nextPageToken||null},enumerable:!1,configurable:!0}),e}(),Ce=function(){function e(e,t){this._delegate=e,this.storage=t}return Object.defineProperty(e.prototype,"name",{get:function(){return this._delegate.name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._delegate.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._delegate.fullPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this._delegate.toString()},e.prototype.child=function(t){return new e(xe(this._delegate,t),this.storage)},Object.defineProperty(e.prototype,"root",{get:function(){return new e(this._delegate.root,this.storage)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._delegate.parent;return null==t?null:new e(t,this.storage)},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return this._throwIfRoot("put"),new Se(function(e,t,r){return void 0===r&&(r=null),e._throwIfRoot("uploadBytesResumable"),new ke(e,new Q(t),r)}(this._delegate,e,t),this)},e.prototype.putString=function(e,t,r){return void 0===t&&(t=S.RAW),this._throwIfRoot("putString"),new Se(function(e,t,r,n){void 0===r&&(r=S.RAW),e._throwIfRoot("putString");var o=C(r,t),i=Object(f.a)({},n);return null==i.contentType&&null!=o.contentType&&(i.contentType=o.contentType),new ke(e,new Q(o.data,!0),i)}(this._delegate,e,t,r),this)},e.prototype.listAll=function(){var e,t,r=this;return(e=this._delegate,t={prefixes:[],items:[]},function e(t,r,n){return Object(f.b)(this,void 0,void 0,(function(){var o,i,a;return Object(f.d)(this,(function(s){switch(s.label){case 0:return[4,Pe(t,{pageToken:n})];case 1:return o=s.sent(),(i=r.prefixes).push.apply(i,o.prefixes),(a=r.items).push.apply(a,o.items),null==o.nextPageToken?[3,3]:[4,e(t,r,o.nextPageToken)];case 2:s.sent(),s.label=3;case 3:return[2]}}))}))}(e,t).then((function(){return t}))).then((function(e){return new je(e,r.storage)}))},e.prototype.list=function(e){var t=this;return Pe(this._delegate,e).then((function(e){return new je(e,t.storage)}))},e.prototype.getMetadata=function(){return function(e){return Object(f.b)(this,void 0,void 0,(function(){var t,r;return Object(f.d)(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("getMetadata"),[4,e.storage.getAuthToken()];case 1:return t=n.sent(),r=ge(e.storage,e._location,ue()),[2,e.storage.makeRequest(r,t).getPromise()]}}))}))}(this._delegate)},e.prototype.updateMetadata=function(e){return function(e,t){return Object(f.b)(this,void 0,void 0,(function(){var r,n;return Object(f.d)(this,(function(o){switch(o.label){case 0:return e._throwIfRoot("updateMetadata"),[4,e.storage.getAuthToken()];case 1:return r=o.sent(),n=function(e,t,r,n){var o=ne(t.fullServerUrl()),i=le(r,n),a=e.maxOperationRetryTime,s=new he(o,"PATCH",pe(e,n),a);return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=i,s.errorHandler=_e(t),s}(e.storage,e._location,t,ue()),[2,e.storage.makeRequest(n,r).getPromise()]}}))}))}(this._delegate,e)},e.prototype.getDownloadURL=function(){return function(e){return Object(f.b)(this,void 0,void 0,(function(){var t,r;return Object(f.d)(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("getDownloadURL"),[4,e.storage.getAuthToken()];case 1:return t=n.sent(),r=function(e,t,r){var n=ne(t.fullServerUrl()),o=e.maxOperationRetryTime,i=new he(n,"GET",function(e,t){return function(r,n){var o=ce(e,n,t);return fe(null!==o),function(e,t){var r=te(t);if(null===r)return null;if(!K(r.downloadTokens))return null;var n=r.downloadTokens;if(0===n.length)return null;var o=encodeURIComponent;return n.split(",").map((function(t){var r=e.fullPath;return ne("/b/"+o(e.bucket)+"/o/"+o(r))+oe({alt:"media",token:t})}))[0]}(o,n)}}(e,r),o);return i.errorHandler=_e(t),i}(e.storage,e._location,ue()),[2,e.storage.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw new g("no-download-url","The given file does not have any download URLs.");return e}))]}}))}))}(this._delegate)},e.prototype.delete=function(){return this._throwIfRoot("delete"),function(e){return Object(f.b)(this,void 0,void 0,(function(){var t,r;return Object(f.d)(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("deleteObject"),[4,e.storage.getAuthToken()];case 1:return t=n.sent(),r=function(e,t){var r=ne(t.fullServerUrl()),n=new he(r,"DELETE",(function(e,t){}),e.maxOperationRetryTime);return n.successCodes=[200,204],n.errorHandler=_e(t),n}(e.storage,e._location),[2,e.storage.makeRequest(r,t).getPromise()]}}))}))}(this._delegate)},e.prototype._throwIfRoot=function(e){if(""===this._delegate._location.path)throw P(e)},e}(),Ee=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}(),Ae=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var h=this;this.pendingXhr_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){h.resolve_=e,h.reject_=t,h.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){var n,o=e.resolve_,i=e.reject_,a=r.xhr;if(r.wasSuccessCode)try{var s=e.callback_(a,a.getResponseText());void 0!==s?o(s):o()}catch(u){i(u)}else null!==a?((n=w()).serverResponse=a.getResponseText(),i(e.errorCallback_?e.errorCallback_(a,n):n)):i(n=r.canceled?e.appDelete_?T():R():new g("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}this.canceled_?t(0,new Ie(!1,null,!0)):this.backoffId_=function(t,r,n){var o=1,i=null,a=!1,s=0;function u(){return 2===s}var c=!1;function l(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];c||(c=!0,r.apply(null,e))}function h(t){i=setTimeout((function(){i=null,function(t,r){if(r)t(!1,new Ie(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null;var n=(r=r).getErrorCode()===X.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new Ie(a,r))}else{var s=r.getErrorCode()===X.ABORT;t(!1,new Ie(!1,null,s))}}))}function o(t){null!==e.progressCallback_&&e.progressCallback_(t.loaded,t.lengthComputable?t.total:-1)}}(p,u())}),t)}function p(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!c)if(e)l.call.apply(l,Object(f.g)([null,e],t));else{var n;u()||a?l.call.apply(l,Object(f.g)([null,e],t)):(o<64&&(o*=2),1===s?(s=2,n=0):n=1e3*(o+Math.random()),h(n))}}var d=!1;function _(e){d||(d=!0,c||(null!==i?(e||(s=2),clearTimeout(i),h(0)):e||(s=1)))}return h(0),setTimeout((function(){a=!0,_(!0)}),n),_}(0,t,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n},e}(),Ie=function(){return function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r}}();function Le(e){return/^[A-Za-z]+:\/\//.test(e)}function qe(e,t){if(t&&Le(t)){if(e instanceof Ne)return new Te(e,t);throw k("To use ref(service, url), the first argument must be a Storage instance.")}return function e(t,r){if(t instanceof Ne){var n=t;if(null==n._bucket)throw new g("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");var o=new Te(n,n._bucket);return null!=r?e(o,r):o}if(void 0!==r){if(r.includes(".."))throw k('`path` param cannot contain ".."');return xe(t,r)}return t}(e,t)}var Be,Me,Ne=function(){function e(e,t,r,n){var o,i;this.app=e,this._authProvider=t,this._pool=r,this._url=n,this._bucket=null,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=n?ee.makeFromBucketSpec(n):null==(i=null==(o=this.app.options)?void 0:o.storageBucket)?null:ee.makeFromBucketSpec(i)}return Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._maxUploadRetryTime},set:function(e){$("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._maxOperationRetryTime},set:function(e){$("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e},enumerable:!1,configurable:!0}),e.prototype.getAuthToken=function(){return Object(f.b)(this,void 0,void 0,(function(){var e,t;return Object(f.d)(this,(function(r){switch(r.label){case 0:return(e=this._authProvider.getImmediate({optional:!0}))?[4,e.getToken()]:[3,2];case 1:if(null!==(t=r.sent()))return[2,t.accessToken];r.label=2;case 2:return[2,null]}}))}))},e.prototype._delete=function(){return this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear(),Promise.resolve()},e.prototype.makeStorageReference=function(e){return new Te(this,e)},e.prototype.makeRequest=function(e,t){var r=this;if(this._deleted)return new Ee(T());var n=function(e,t,r,n){var o=oe(e.urlParams),i=e.url+o,a=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(a,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(a,r),function(e){e["X-Firebase-Storage-Version"]="webjs/"+(void 0!==h.a?h.a.SDK_VERSION:"AppManager")}(a),new Ae(i,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}(e,this._appId,t,this._pool);return this._requests.add(n),n.getPromise().then((function(){return r._requests.delete(n)}),(function(){return r._requests.delete(n)})),n},e}(),ze=function(){function e(e,t){var r=this;this.app=e,this._delegate=t,this.INTERNAL={delete:function(){return r._delegate._delete()}}}return Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._delegate.maxOperationRetryTime},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._delegate.maxUploadRetryTime},enumerable:!1,configurable:!0}),e.prototype.ref=function(e){if(Le(e))throw k("ref() expected a child path but got a URL, use refFromURL instead.");return new Ce(qe(this._delegate,e),this)},e.prototype.refFromURL=function(e){if(!Le(e))throw k("refFromURL() expected a full URL but got a child path, use ref() instead.");try{ee.makeFromUrl(e)}catch(t){throw k("refFromUrl() expected a valid full URL but got an invalid one.")}return new Ce(qe(this._delegate,e),this)},e.prototype.setMaxUploadRetryTime=function(e){this._delegate.maxUploadRetryTime=e},e.prototype.setMaxOperationRetryTime=function(e){this._delegate.maxOperationRetryTime=e},e}();function De(e){const t=function(e){return new n.a(t=>{const r=e=>t.next(e);return e.on("state_changed",r,n=>{r(e.snapshot),(e=>{t.error(e)})(n)},()=>{r(e.snapshot),t.complete()}),()=>e.cancel()})}(e);return{task:e,then:e.then.bind(e),catch:e.catch.bind(e),pause:e.pause.bind(e),cancel:e.cancel.bind(e),resume:e.resume.bind(e),snapshotChanges:()=>t,percentageChanges:()=>t.pipe(Object(a.a)(e=>e.bytesTransferred/e.totalBytes*100))}}function Fe(e,t,r){return{getDownloadURL:()=>Object(o.a)(void 0).pipe(Object(s.b)(t.outsideAngular),Object(u.a)(()=>e.getDownloadURL()),r),getMetadata:()=>Object(o.a)(void 0).pipe(Object(s.b)(t.outsideAngular),Object(u.a)(()=>e.getMetadata()),r),delete:()=>Object(i.a)(e.delete()),child:n=>Fe(e.child(n),t,r),updateMetadata:t=>Object(i.a)(e.updateMetadata(t)),put:(t,r)=>De(e.put(t,r)),putString:(t,r,n)=>De(e.putString(t,r,n)),listAll:()=>Object(i.a)(e.listAll())}}Me={TaskState:F,TaskEvent:{STATE_CHANGED:"state_changed"},StringFormat:S,Storage:Ne,Reference:Ce},(Be=h.a).INTERNAL.registerComponent(new d.a("storage",(function(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new ze(r,new Ne(r,n,new W,t))}),"PUBLIC").setServiceProps(Me).setMultipleInstances(!0)),Be.registerVersion("@firebase/storage","0.4.2"),r("ofXK");const He=new c.q("angularfire2.storageBucket"),Xe=new c.q("angularfire2.storage.maxUploadRetryTime"),Ge=new c.q("angularfire2.storage.maxOperationRetryTime");let We=(()=>{class e{constructor(e,t,r,n,o,i,a){this.schedulers=new l.e(o),this.keepUnstableUntilFirst=Object(l.i)(this.schedulers);const s=Object(l.h)(e,o,t);this.storage=Object(l.g)(`${s.name}.storage.${r}`,"AngularFireStorage",s,()=>{const e=o.runOutsideAngular(()=>s.storage(r||void 0));return i&&e.setMaxUploadRetryTime(i),a&&e.setMaxOperationRetryTime(a),e},[i,a])}ref(e){return Fe(this.storage.ref(e),this.schedulers,this.keepUnstableUntilFirst)}refFromURL(e){return Fe(this.storage.refFromURL(e),this.schedulers,this.keepUnstableUntilFirst)}upload(e,t,r){return Fe(this.storage.ref(e),this.schedulers,this.keepUnstableUntilFirst).put(t,r)}}return e.\u0275fac=function(t){return new(t||e)(c.Pb(l.c),c.Pb(l.b,8),c.Pb(He,8),c.Pb(c.B),c.Pb(c.z),c.Pb(Xe,8),c.Pb(Ge,8))},e.\u0275prov=Object(c.Eb)({factory:function(){return new e(Object(c.Pb)(l.c),Object(c.Pb)(l.b,8),Object(c.Pb)(He,8),Object(c.Pb)(c.B),Object(c.Pb)(c.z),Object(c.Pb)(Xe,8),Object(c.Pb)(Ge,8))},token:e,providedIn:"any"}),e})()}}]);