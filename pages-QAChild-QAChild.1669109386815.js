(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-QAChild-QAChild"],{3589:function(t,n,a){"use strict";a.r(n);var e=a("84f0"),i=a("81d9");for(var c in i)"default"!==c&&function(t){a.d(n,t,(function(){return i[t]}))}(c);a("bcc7");var o,d=a("f0c5"),r=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,"d019aec8",null,!1,e["a"],o);n["default"]=r.exports},"81d9":function(t,n,a){"use strict";a.r(n);var e=a("827e"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,(function(){return e[t]}))}(c);n["default"]=i.a},"827e":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{cont:""}},onLoad:function(t){this.cont=JSON.parse(t.item)},methods:{back:function(){uni.navigateBack({delta:1})}}};n.default=e},8362:function(t,n,a){var e=a("f02f");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("58bbccf8",e,!0,{sourceMap:!1,shadowMode:!1})},"84f0":function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"navigationBar"},[a("v-uni-view",{staticClass:"navigationBarImg"},[a("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.back.apply(void 0,arguments)}}},[t._v("返回")])],1)],1),a("v-uni-view",{staticClass:"contentMain"},[a("v-uni-text",{staticClass:"contentTitle"},[t._v(t._s(t.cont.title))]),a("v-uni-text",{staticClass:"content"},[t._v(t._s(t.cont.content))])],1)],1)},c=[]},bcc7:function(t,n,a){"use strict";var e=a("8362"),i=a.n(e);i.a},f02f:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,".navigationBar[data-v-d019aec8]{background:linear-gradient(90deg,#3ea0fe,#21d0fe)!important;padding:%?20?%;color:#fff;text-align:center;display:flex}.navigationBarImg[data-v-d019aec8]{width:40%;text-align:left;display:flex}.contentMain[data-v-d019aec8]{padding:%?40?%}.contentTitle[data-v-d019aec8]{display:inline-block;width:100%;text-align:center;font-size:%?50?%;font-weight:900;color:#666}.content[data-v-d019aec8]{display:inline-block;padding:%?20?% %?40?% %?20?%;font-size:%?28?%;color:#666}",""]),t.exports=n}}]);