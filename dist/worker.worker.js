!function(e){self.webpackChunk=function(n,r){for(var o in r)e[o]=r[o];for(;n.length;)t[n.pop()]=1};var n={},t={0:1},r={};var o={3:function(){return{"./index_bg.js":{__wbindgen_object_drop_ref:function(e){return n[2].exports.R(e)},__wbg_getfile_a0ce1a98b4607f0a:function(){return n[2].exports.g()},__wbg_new_59cb74e423758ede:function(){return n[2].exports.o()},__wbg_stack_558ba5917b466edd:function(e,t){return n[2].exports.F(e,t)},__wbg_error_4bb6c2a97407129a:function(e,t){return n[2].exports.e(e,t)},__wbindgen_string_new:function(e,t){return n[2].exports.S(e,t)},__wbg_type_f63d128933349ef6:function(e,t){return n[2].exports.H(e,t)},__wbg_slice_f7d78272f3d8b5b7:function(e,t,r){return n[2].exports.E(e,t,r)},__wbg_name_106fcc6131ecf5cc:function(e,t){return n[2].exports.n(e,t)},__wbg_lastModified_7878943143756a5d:function(e){return n[2].exports.j(e)},__wbg_newwithu8arraysequenceandoptions_162ea19e5f5bd43d:function(e,t,r,o){return n[2].exports.u(e,t,r,o)},__wbg_new_f05d57c4b9e4e457:function(){return n[2].exports.p()},__wbg_readAsArrayBuffer_5d37b5041c8133df:function(e,t){return n[2].exports.z(e,t)},__wbindgen_number_new:function(e){return n[2].exports.P(e)},__wbg_getRandomValues_98117e9a7e993920:function(e,t){return n[2].exports.f(e,t)},__wbg_randomFillSync_64cc7d048f228ca8:function(e,t,r){return n[2].exports.y(e,t,r)},__wbg_process_2f24d6544ea7b200:function(e){return n[2].exports.x(e)},__wbindgen_is_object:function(e){return n[2].exports.L(e)},__wbg_versions_6164651e75405d4a:function(e){return n[2].exports.I(e)},__wbg_node_4b517d861cbcb3bc:function(e){return n[2].exports.v(e)},__wbg_modulerequire_3440a4bcf44437db:function(e,t){return n[2].exports.l(e,t)},__wbg_crypto_98fc271021c7d2ad:function(e){return n[2].exports.d(e)},__wbg_msCrypto_a2cdb043d2bfe57f:function(e){return n[2].exports.m(e)},__wbg_newnoargs_68424965d85fcb08:function(e,t){return n[2].exports.s(e,t)},__wbg_new_ffb8fbe0ad5d4d2f:function(){return n[2].exports.r()},__wbg_of_9f1fb68396fa11bb:function(e){return n[2].exports.w(e)},__wbg_call_9698e9b9c4668ae0:function(e,t){return n[2].exports.c(e,t)},__wbg_self_3df7c33e222cd53b:function(){return n[2].exports.A()},__wbg_window_0f90182e6c405ff2:function(){return n[2].exports.J()},__wbg_globalThis_787cfd4f25a35141:function(){return n[2].exports.h()},__wbg_global_af2eb7b1369372ed:function(){return n[2].exports.i()},__wbindgen_is_undefined:function(e){return n[2].exports.N(e)},__wbg_buffer_eb2155f17856c20b:function(e){return n[2].exports.b(e)},__wbg_new_ff8b26f7b2d7e2fb:function(e){return n[2].exports.q(e)},__wbg_set_67cdd115b9cb141f:function(e,t,r){return n[2].exports.B(e,t,r)},__wbg_length_0b194abde938d0c6:function(e){return n[2].exports.k(e)},__wbg_newwithlength_a49b32b2030b93c3:function(e){return n[2].exports.t(e)},__wbg_subarray_1bb315d30e0c968c:function(e,t,r){return n[2].exports.G(e,t,r)},__wbg_slice_7e09f356524b7468:function(e,t,r){return n[2].exports.D(e,t,r)},__wbindgen_object_clone_ref:function(e){return n[2].exports.Q(e)},__wbg_set_c7fc8735d70ceb11:function(e,t,r){return n[2].exports.C(e,t,r)},__wbindgen_is_string:function(e){return n[2].exports.M(e)},__wbindgen_debug_string:function(e,t){return n[2].exports.K(e,t)},__wbindgen_throw:function(e,t){return n[2].exports.T(e,t)},__wbindgen_memory:function(){return n[2].exports.O()}}}}};function _(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,_),r.l=!0,r.exports}_.e=function(e){var n=[];return n.push(Promise.resolve().then((function(){t[e]||importScripts(_.p+""+({}[e]||e)+".worker.js")}))),({1:[3]}[e]||[]).forEach((function(e){var t=r[e];if(t)n.push(t);else{var u,i=o[e](),f=fetch(_.p+""+{3:"6beb8d59ab15f47cd8e9"}[e]+".module.wasm");if(i instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)u=Promise.all([WebAssembly.compileStreaming(f),i]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)u=WebAssembly.instantiateStreaming(f,i);else{u=f.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,i)}))}n.push(r[e]=u.then((function(n){return _.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},_.m=e,_.c=n,_.d=function(e,n,t){_.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,n){if(1&n&&(e=_(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(_.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)_.d(t,r,function(n){return e[n]}.bind(null,r));return t},_.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(n,"a",n),n},_.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},_.p="/",_.w={},_(_.s=0)}([function(e,n,t){onmessage=async function(e){const n=await t.e(1).then(t.bind(null,1));console.log("File received from main script");let r=e.data;console.debug(r),self.readFile=r;const o=new n.SampleArgs(BigInt(1e5),0,null,50);let _={};try{_.out=JSON.parse(n.run_json_exported(o,"application/x-gzip"==r.type))}catch(e){_.err="Process panic'ed"}postMessage(_)}}]);