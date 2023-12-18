/*! For license information please see elFinderSupportBrowserFS.js.LICENSE.txt */
(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";t=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),c=new S(n||[]);return i(a,"_invoke",{value:_(e,r,c)}),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=l;var d={};function p(){}function v(){}function y(){}var m={};f(m,c,(function(){return this}));var w=Object.getPrototypeOf,g=w&&w(w(F([])));g&&g!==n&&o.call(g,c)&&(m=g);var x=y.prototype=p.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function k(t,r){function n(i,a,c,s){var u=h(t[i],t,a);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==e(l)&&o.call(l,"__await")?r.resolve(l.__await).then((function(e){n("next",e,c,s)}),(function(e){n("throw",e,c,s)})):r.resolve(l).then((function(e){f.value=e,c(f)}),(function(e){return n("throw",e,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(e,t){function o(){return new r((function(r,o){n(e,t,r,o)}))}return a=a?a.then(o,o):o()}})}function _(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function L(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function F(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:W}}function W(){return{value:void 0,done:!0}}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=f(y,u,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,f(e,u,"GeneratorFunction")),e.prototype=Object.create(x),e},r.awrap=function(e){return{__await:e}},b(k.prototype),f(k.prototype,s,(function(){return this})),r.AsyncIterator=k,r.async=function(e,t,n,o,i){void 0===i&&(i=Promise);var a=new k(l(e,t,n,o),i);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(x),f(x,u,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=F,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:F(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},r}function r(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,s,"next",e)}function s(e){r(a,o,i,c,s,"throw",e)}c(void 0)}))}}var o=location.pathname;if(o.endsWith(".html")){var i=o.split("/");o=i.slice(0,i.length-1).join("/")+"/"}function a(e){return new Promise((function(t){return setTimeout(t,e)}))}window.initializeServiceWorker=n(t().mark((function e(){var r,n,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=30;break}if((r=navigator.serviceWorker.controller)&&r.scriptURL.endsWith("/service-worker.js")){e.next=27;break}return navigator.serviceWorker.oncontrollerchange=function(){this.controller.onstatechange=function(){"activated"===this.state&&console.log("Service worker successfully activated.")}},e.next=6,navigator.serviceWorker.register("/service-worker.js");case 6:return n=e.sent,console.log("Service worker successfully registered, scope is:",n.scope),e.next=10,navigator.serviceWorker.ready;case 10:if(navigator.serviceWorker.controller){e.next=13;break}throw window.location.reload(),new Error("Reload the page to allow the service worker to intercept requests.");case 13:o=!1;case 14:if(o){e.next=25;break}return e.next=17,fetch("/fs/connector");case 17:if(200!==e.sent.status){e.next=21;break}return o=!0,e.abrupt("break",25);case 21:return e.next=23,a(500);case 23:e.next=14;break;case 25:e.next=28;break;case 27:console.log("Service worker was activated.");case 28:e.next=31;break;case 30:console.log("Service workers are not supported.");case 31:case"end":return e.stop()}}),e)}))),window.setupImJoyApp=function(){var e=window.define;window.define=void 0,loadImJoyBasicApp({version:"0.13.70",process_url_query:!0,show_window_title:!1,show_progress_bar:!0,show_empty_window:!0,menu_style:{position:"absolute",right:0,top:"2px"},window_style:{width:"100%",height:"100%"},imjoy_api:{}}).then(function(){var e=n(t().mark((function e(r){var o,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(e){return new Promise(function(){var r=n(t().mark((function r(n,o){var i,a,c;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return i=t.sent,t.next=5,i.blob();case 5:a=t.sent,(c=new FileReader).onload=function(){n(this.result)},c.onerror=o,c.readAsDataURL(a);case 10:case"end":return t.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}())},o=r.imjoy.api,e.next=4,o.registerService({type:"#file-loader",name:"ITK/VTK Viewer",check:function(e){return n(t().mark((function r(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.mime.startsWith("image/tiff")){t.next=2;break}return t.abrupt("return",!0);case 2:case"end":return t.stop()}}),r)})))()},load:function(e){return n(t().mark((function r(){var n,i;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,i=e.window_id,console.log("https://kitware.github.io/itk-vtk-viewer/app/?fileToLoad="+n),t.next=4,o.createWindow({src:"https://kitware.github.io/itk-vtk-viewer/app/?fileToLoad="+n,window_id:i});case 4:case"end":return t.stop()}}),r)})))()}});case 4:return e.next=6,o.registerService({type:"#file-loader",name:"Kaibu",icon:"https://kaibu.org/static/img/kaibu-icon.svg",check:function(e){return n(t().mark((function r(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.mime.startsWith("image/")&&"directory"!==e.mime){t.next=2;break}return t.abrupt("return",!0);case 2:case"end":return t.stop()}}),r)})))()},load:function(e){return n(t().mark((function r(){var a,c,s,u,f,l,h;return t().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=e.source,c=e.type,s=e.window_id,"file"!==c){r.next=14;break}return r.next=4,i(a.url);case 4:return u=r.sent,r.next=7,o.createWindow({src:"https://kaibu.org/",window_id:s,w:10,h:10});case 7:return f=r.sent,r.next=10,f.view_image(u,{name:a.name});case 10:return r.next=12,f.add_shapes([],{name:"annotation"});case 12:r.next=24;break;case 14:if("directory"!==c){r.next=24;break}return r.next=17,o.createWindow({src:"https://kaibu.org/",window_id:s,w:10,h:10});case 17:return l=r.sent,a=a.filter((function(e){return e.mime.startsWith("image/")})),h=a.map((function(e){return{title:e.name,data:e,isLeaf:!0}})),r.next=22,l.add_widget({_rintf:!0,type:"tree",name:"Files",node_dbclick_callback:function(){var e=n(t().mark((function e(r){var n,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.clear_layers();case 2:return n=r.data,e.next=5,i(n.url);case 5:return o=e.sent,e.next=8,l.view_image(o,{name:n.name});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),nodes:h});case 22:return r.next=24,l.add_shapes([],{name:"annotation"});case 24:case"end":return r.stop()}}),r)})))()}});case 6:return e.next=8,o.registerService({type:"#content-provider",name:"MyData",get:function(e){return{name:"My Folder",path:"/user",type:"directory",created:"2021-01-23T18:25:43.511Z",last_modified:"2021-01-23T18:25:43.511Z",mimetype:null,format:"json",content:[{name:"My SubFolder",path:"/user/me",type:"directory",created:"2021-01-23T18:25:43.511Z",last_modified:"2021-01-23T18:25:43.511Z",mimetype:null}]}},save:function(e,t){},delete_file:function(e){},rename_file:function(e,t){},file_exists:function(e){},dir_exists:function(e){},is_hidden:function(e){}});case 8:window.imjoy=r.imjoy;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){window.define=e}))},window.elFinderSupportBrowserFs=function(e){"use strict";this.parseFiles=function(e,t,r){var n=$.Deferred();return r.done((function(r){if(r[0].length){if(r[4]&&r[4].length)return void e.request({data:{cmd:"mkdir",target:t,dirs:r[4]},notify:{type:"mkdir",cnt:r[4].length},preventFail:!0}).fail((function(e){"errCmdParams"===(e=e||["errUnknown"])[0]||n.reject(e)})).done((function(e){var n=!1;e.hashes||(e.hashes={}),r[1]=$.map(r[1],(function(o,i){return r[0][i]._relativePath=o.replace(/^\//,""),""===(o=o.replace(/\/[^\/]*$/,""))?t:e.hashes[o]?e.hashes[o]:(n=!0,r[0][i]._remove=!0,null)})),n&&(r[0]=$.grep(r[0],(function(e){return!e._remove})))})).always((function(e){n.resolve(r)}));r[1]=$.map(r[1],(function(){return t})),n.resolve(r)}else n.reject(["errUploadNoFiles"])})).fail((function(){n.reject()})),n},this.upload=function(e){var t=this.fm,r=$.Deferred(),n=e.target||t.cwd().hash,o=e.input?e.input.files:t.uploads.checkFile(e,t,n);function i(e){elfinder_api.upload(e).then((function(e){t.uploads.xhrUploading=!1,e&&(t.currentReqCmd="upload",e.warning&&console.warn(e.warning),t.updateCache(e),e.removed&&e.removed.length&&t.remove(e),e.added&&e.added.length&&t.add(e),e.changed&&e.changed.length&&t.change(e),t.trigger("upload",e,!1),t.trigger("uploaddone"),e.toasts&&Array.isArray(e.toasts)&&$.each(e.toasts,(function(){this.msg&&t.toast(this)})),e.sync&&t.sync(),e.debug&&(t.responseDebug(e),fm.debug("backend-debug",e))),r.resolve(e)})).catch((function(e){console.error(e),r.reject(e)}))}return e.progress=function(e){t.notify({type:"upload",cnt:0,progress:e,size:0})},o.done?this.parseFiles(t,n,o).done((function(e){i({files:e[0],targets:e[1],renames:e[2],hashes:e[3]})})):i({targets:o.map((function(){return n})),files:o}),r},this.init=function(e){this.fm=e,this.fm.options.url="".concat(o).concat("/fs/connector")},this.send=function(e){var t=$.Deferred();t.abort=function(){};var r=function(e){e=new URLSearchParams(e);for(var t={},r=0,n=Array.from(e.entries());r<n.length;r++){var o=n[r];t[o[0]]?Array.isArray(t[o[0]])?t[o[0]].push(o[1]):t[o[0]]=[t[o[0]],o[1]]:o[0].endsWith("[]")?t[o[0]]=[o[1]]:t[o[0]]=o[1]}return t}(e.url.split("?")[1]);r&&Object.assign(e.data,r);var n=$.ajax(e).fail((function(e){t.reject(e)})).done((function(e){t.resolve(e)}));return t.abort=function(){n&&"pending"==n.state()&&(n.quiet=!0,n.abort())},t}}})();
//# sourceMappingURL=elFinderSupportBrowserFS.js.map