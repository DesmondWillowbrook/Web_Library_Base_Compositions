!function(e){function n(n){for(var t,o,u=n[0],i=n[1],c=0,_=[];c<u.length;c++)o=u[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&_.push(r[o][0]),r[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(s&&s(n);_.length;)_.shift()()}var t={},r={0:0};var o={};var u={2:function(){return{"./index_bg.js":{__wbindgen_object_drop_ref:function(e){return t[1].exports.G(e)},__wbg_getfile_5caef385c9ca7902:function(){return t[1].exports.g()},__wbg_new_fa241493e6bceadb:function(){return t[1].exports.o()},__wbg_readAsArrayBuffer_62615951fee630c2:function(e,n){return t[1].exports.t(e,n)},__wbg_new_59cb74e423758ede:function(){return t[1].exports.l()},__wbg_stack_558ba5917b466edd:function(e,n){return t[1].exports.z(e,n)},__wbg_error_4bb6c2a97407129a:function(e,n){return t[1].exports.e(e,n)},__wbindgen_string_new:function(e,n){return t[1].exports.H(e,n)},__wbg_name_261bf00db5e61b2b:function(e,n){return t[1].exports.k(e,n)},__wbg_lastModified_eb33a9378f096971:function(e){return t[1].exports.h(e)},__wbg_newwithu8arraysequenceandoptions_ce8d698cbf13340c:function(e,n,r,o){return t[1].exports.q(e,n,r,o)},__wbindgen_number_new:function(e){return t[1].exports.F(e)},__wbg_type_dd8446f01154667e:function(e,n){return t[1].exports.C(e,n)},__wbg_slice_e5133535ffa759ee:function(e,n,r){return t[1].exports.y(e,n,r)},__wbg_getRandomValues_57e4008f45f0e105:function(e,n){return t[1].exports.f(e,n)},__wbg_randomFillSync_d90848a552cbd666:function(e,n,r){return t[1].exports.s(e,n,r)},__wbg_static_accessor_MODULE_39947eb3fe77895f:function(){return t[1].exports.A()},__wbg_self_f865985e662246aa:function(){return t[1].exports.v()},__wbg_require_c59851dfa0dc7e78:function(e,n,r){return t[1].exports.u(e,n,r)},__wbg_crypto_bfb05100db79193b:function(e){return t[1].exports.d(e)},__wbg_msCrypto_f6dddc6ae048b7e2:function(e){return t[1].exports.j(e)},__wbindgen_is_undefined:function(e){return t[1].exports.D(e)},__wbg_of_a218d3c1c2599459:function(e){return t[1].exports.r(e)},__wbg_new_edbe38a4e21329dd:function(){return t[1].exports.n()},__wbg_buffer_9e184d6f785de5ed:function(e){return t[1].exports.c(e)},__wbg_new_e8101319e4cf95fc:function(e){return t[1].exports.m(e)},__wbg_set_e8ae7b27314e8b98:function(e,n,r){return t[1].exports.x(e,n,r)},__wbg_length_2d56cb37075fcfb1:function(e){return t[1].exports.i(e)},__wbg_newwithlength_a8d1dbcbe703a5c6:function(e){return t[1].exports.p(e)},__wbg_subarray_901ede8318da52a6:function(e,n,r){return t[1].exports.B(e,n,r)},__wbg_set_73349fc4814e0fc6:function(e,n,r){return t[1].exports.w(e,n,r)},__wbindgen_throw:function(e,n){return t[1].exports.I(e,n)},__wbindgen_memory:function(){return t[1].exports.E()}}}}};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=c);var _,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=function(e){return i.p+""+({}[e]||e)+".js"}(e);var s=new Error;_=function(n){f.onerror=f.onload=null,clearTimeout(a);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",s.name="ChunkLoadError",s.type=o,s.request=u,t[1](s)}r[e]=void 0}};var a=setTimeout((function(){_({type:"timeout",target:f})}),12e4);f.onerror=f.onload=_,document.head.appendChild(f)}return({1:[2]}[e]||[]).forEach((function(e){var t=o[e];if(t)n.push(t);else{var r,c=u[e](),_=fetch(i.p+""+{2:"708b4329eb2545e18fa5"}[e]+".module.wasm");if(c instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(_),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(_,c);else{r=_.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,c)}))}n.push(o[e]=r.then((function(n){return i.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/Web_Library_Base_Compositions/",i.oe=function(e){throw console.error(e),e},i.w={};var c=window.webpackJsonp=window.webpackJsonp||[],_=c.push.bind(c);c.push=n,c=c.slice();for(var f=0;f<c.length;f++)n(c[f]);var s=_;i(i.s=0)}([function(e,n,t){"use strict";function r(){return new Worker(t.p+"worker.worker.js")}t.r(n);t.e(1).then(t.bind(null,5)).then(e=>{function n(e){console.info(e);const n=new r;n.onmessage=function(e){let[n,t]=e.data,r=`Processed ${n} reads.\nJSON output:`;var o=document.createElement("li");o.appendChild(document.createTextNode(r));let u=document.createElement("pre");u.innerText=t,o.appendChild(u),document.getElementById("output-list").appendChild(o)},n.postMessage(e)}document.getElementById("file-selector").onchange=function(){const e=document.getElementById("file-selector");for(var t=0;t<e.files.length;t++){n(e.files[t])}},console.debug("Loaded event listener to input-form")})}]);