!function(e){self.webpackChunk=function(n,r){for(var o in r)e[o]=r[o];for(;n.length;)t[n.pop()]=1};var n={},t={0:1},r={};var o={3:function(){return{"./index_bg.js":{__wbindgen_object_drop_ref:function(e){return n[2].exports.G(e)},__wbg_getfile_5caef385c9ca7902:function(){return n[2].exports.g()},__wbg_new_fa241493e6bceadb:function(){return n[2].exports.o()},__wbg_readAsArrayBuffer_62615951fee630c2:function(e,t){return n[2].exports.t(e,t)},__wbg_new_59cb74e423758ede:function(){return n[2].exports.l()},__wbg_stack_558ba5917b466edd:function(e,t){return n[2].exports.z(e,t)},__wbg_error_4bb6c2a97407129a:function(e,t){return n[2].exports.e(e,t)},__wbindgen_string_new:function(e,t){return n[2].exports.H(e,t)},__wbg_name_261bf00db5e61b2b:function(e,t){return n[2].exports.k(e,t)},__wbg_lastModified_eb33a9378f096971:function(e){return n[2].exports.h(e)},__wbg_newwithu8arraysequenceandoptions_ce8d698cbf13340c:function(e,t,r,o){return n[2].exports.q(e,t,r,o)},__wbindgen_number_new:function(e){return n[2].exports.F(e)},__wbg_type_dd8446f01154667e:function(e,t){return n[2].exports.C(e,t)},__wbg_slice_e5133535ffa759ee:function(e,t,r){return n[2].exports.y(e,t,r)},__wbg_getRandomValues_57e4008f45f0e105:function(e,t){return n[2].exports.f(e,t)},__wbg_randomFillSync_d90848a552cbd666:function(e,t,r){return n[2].exports.s(e,t,r)},__wbg_static_accessor_MODULE_39947eb3fe77895f:function(){return n[2].exports.A()},__wbg_self_f865985e662246aa:function(){return n[2].exports.v()},__wbg_require_c59851dfa0dc7e78:function(e,t,r){return n[2].exports.u(e,t,r)},__wbg_crypto_bfb05100db79193b:function(e){return n[2].exports.d(e)},__wbg_msCrypto_f6dddc6ae048b7e2:function(e){return n[2].exports.j(e)},__wbindgen_is_undefined:function(e){return n[2].exports.D(e)},__wbg_of_a218d3c1c2599459:function(e){return n[2].exports.r(e)},__wbg_new_edbe38a4e21329dd:function(){return n[2].exports.n()},__wbg_buffer_9e184d6f785de5ed:function(e){return n[2].exports.c(e)},__wbg_new_e8101319e4cf95fc:function(e){return n[2].exports.m(e)},__wbg_set_e8ae7b27314e8b98:function(e,t,r){return n[2].exports.x(e,t,r)},__wbg_length_2d56cb37075fcfb1:function(e){return n[2].exports.i(e)},__wbg_newwithlength_a8d1dbcbe703a5c6:function(e){return n[2].exports.p(e)},__wbg_subarray_901ede8318da52a6:function(e,t,r){return n[2].exports.B(e,t,r)},__wbg_set_73349fc4814e0fc6:function(e,t,r){return n[2].exports.w(e,t,r)},__wbindgen_throw:function(e,t){return n[2].exports.I(e,t)},__wbindgen_memory:function(){return n[2].exports.E()}}}}};function _(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,_),r.l=!0,r.exports}_.e=function(e){var n=[];return n.push(Promise.resolve().then((function(){t[e]||importScripts(_.p+""+({}[e]||e)+".worker.js")}))),({1:[3]}[e]||[]).forEach((function(e){var t=r[e];if(t)n.push(t);else{var u,i=o[e](),f=fetch(_.p+""+{3:"ebe8fd8aaa8726ba23af"}[e]+".module.wasm");if(i instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)u=Promise.all([WebAssembly.compileStreaming(f),i]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)u=WebAssembly.instantiateStreaming(f,i);else{u=f.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,i)}))}n.push(r[e]=u.then((function(n){return _.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},_.m=e,_.c=n,_.d=function(e,n,t){_.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,n){if(1&n&&(e=_(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(_.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)_.d(t,r,function(n){return e[n]}.bind(null,r));return t},_.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(n,"a",n),n},_.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},_.p="/Web_Library_Base_Compositions/",_.w={},_(_.s=0)}([function(e,n,t){onmessage=async function(e){const n=await t.e(1).then(t.bind(null,1));console.log("File received from main script");let r=e.data;console.debug(r),self.readFile=r;const o=new n.SampleArgs(BigInt(100),0,null,50);let _=n.run_json_exported(o);console.log("Posting message back to main script"),postMessage([_.get_processed_num(),_.get_output()])}}]);