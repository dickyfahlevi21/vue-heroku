(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"057f":function(t,e,n){var r=n("fc6a"),a=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return a(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?i(t):a(r(t))}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"746f":function(t,e,n){var r=n("428f"),a=n("5135"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||s(e,t,{value:o.f(t)})}},"7f04":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("Login")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-xs mx-auto mt-12"},[n("h1",{staticClass:"font-light text-3xl text-center mb-6"},[t._v("Task Vue X Heroku")]),n("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.loginForm()}}},[n("h2",{staticClass:"font-bold text-xl text-center mb-8"},[t._v("Login")]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[t._v("Nama Pengguna")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[t._v("Kata Sandi")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full",attrs:{type:"submit"}},[t._v(" Masuk ")]),n("div",{staticClass:"mt-2"},[n("p",{staticClass:"inline-block"},[t._v("Belum punya akun?")]),n("router-link",{staticClass:"text-blue-500 ml-2 font-bold",attrs:{to:"/register"}},[t._v("Daftar")])],1)]),n("p",{staticClass:"text-center text-gray-500 text-xs"},[t._v(" ©2020 Task Vue X Heroku. All rights reserved. ")])])},s=[],i=n("5530"),u=n("2f62"),l={name:"Login",data:function(){return{username:"dickyfahlevi21",password:"123456789"}},methods:Object(i["a"])({loginForm:function(){var t={username:this.username,password:this.password};this.LogIn(t)}},Object(u["b"])(["LogIn"])),computed:Object(i["a"])({},Object(u["c"])(["userData","token"]))},c=l,f=n("2877"),d=Object(f["a"])(c,o,s,!1,null,"338e43a0",null),p=d.exports,m={components:{Login:p}},b=m,g=Object(f["a"])(b,r,a,!1,null,null,null);e["default"]=g.exports},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var s=r(e);s in t?a.f(t,s,o(0,n)):t[s]=n}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("d066"),s=n("c430"),i=n("83ab"),u=n("4930"),l=n("fdbf"),c=n("d039"),f=n("5135"),d=n("e8b5"),p=n("861d"),m=n("825a"),b=n("7b0b"),g=n("fc6a"),v=n("c04e"),h=n("5c6c"),w=n("7c73"),y=n("df75"),x=n("241c"),O=n("057f"),_=n("7418"),C=n("06cf"),j=n("9bf2"),P=n("d1e7"),k=n("9112"),S=n("6eeb"),N=n("5692"),D=n("f772"),E=n("d012"),L=n("90e3"),F=n("b622"),T=n("e538"),A=n("746f"),H=n("d44e"),J=n("69f3"),R=n("b727").forEach,$=D("hidden"),I="Symbol",V="prototype",X=F("toPrimitive"),B=J.set,K=J.getterFor(I),M=Object[V],Q=a.Symbol,W=o("JSON","stringify"),q=C.f,z=j.f,G=O.f,U=P.f,Y=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),nt=N("wks"),rt=a.QObject,at=!rt||!rt[V]||!rt[V].findChild,ot=i&&c((function(){return 7!=w(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=q(M,e);r&&delete M[e],z(t,e,n),r&&t!==M&&z(M,e,r)}:z,st=function(t,e){var n=Y[t]=w(Q[V]);return B(n,{type:I,tag:t,description:e}),i||(n.description=e),n},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ut=function(t,e,n){t===M&&ut(Z,e,n),m(t);var r=v(e,!0);return m(n),f(Y,r)?(n.enumerable?(f(t,$)&&t[$][r]&&(t[$][r]=!1),n=w(n,{enumerable:h(0,!1)})):(f(t,$)||z(t,$,h(1,{})),t[$][r]=!0),ot(t,r,n)):z(t,r,n)},lt=function(t,e){m(t);var n=g(e),r=y(n).concat(mt(n));return R(r,(function(e){i&&!ft.call(n,e)||ut(t,e,n[e])})),t},ct=function(t,e){return void 0===e?w(t):lt(w(t),e)},ft=function(t){var e=v(t,!0),n=U.call(this,e);return!(this===M&&f(Y,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(Y,e)||f(this,$)&&this[$][e])||n)},dt=function(t,e){var n=g(t),r=v(e,!0);if(n!==M||!f(Y,r)||f(Z,r)){var a=q(n,r);return!a||!f(Y,r)||f(n,$)&&n[$][r]||(a.enumerable=!0),a}},pt=function(t){var e=G(g(t)),n=[];return R(e,(function(t){f(Y,t)||f(E,t)||n.push(t)})),n},mt=function(t){var e=t===M,n=G(e?Z:g(t)),r=[];return R(n,(function(t){!f(Y,t)||e&&!f(M,t)||r.push(Y[t])})),r};if(u||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),n=function(t){this===M&&n.call(Z,t),f(this,$)&&f(this[$],e)&&(this[$][e]=!1),ot(this,e,h(1,t))};return i&&at&&ot(M,e,{configurable:!0,set:n}),st(e,t)},S(Q[V],"toString",(function(){return K(this).tag})),S(Q,"withoutSetter",(function(t){return st(L(t),t)})),P.f=ft,j.f=ut,C.f=dt,x.f=O.f=pt,_.f=mt,T.f=function(t){return st(F(t),t)},i&&(z(Q[V],"description",{configurable:!0,get:function(){return K(this).description}}),s||S(M,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:Q}),R(y(nt),(function(t){A(t)})),r({target:I,stat:!0,forced:!u},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=Q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!i},{create:ct,defineProperty:ut,defineProperties:lt,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),r({target:"Object",stat:!0,forced:c((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(b(t))}}),W){var bt=!u||c((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));r({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,n){var r,a=[t],o=1;while(arguments.length>o)a.push(arguments[o++]);if(r=e,(p(e)||void 0!==t)&&!it(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),a[1]=e,W.apply(null,a)}})}Q[V][X]||k(Q[V],X,Q[V].valueOf),H(Q,I),E[$]=!0},aa9f:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Register")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-xs mx-auto mt-10"},[n("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.registerForm(e)}}},[n("h2",{staticClass:"font-bold text-xl text-center mb-8"},[t._v("Register")]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[t._v(" Nama Pengguna ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[t._v(" Kata Sandi ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[t._v(" Nama Lengkap ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.full_name,expression:"full_name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"text"},domProps:{value:t.full_name},on:{input:function(e){e.target.composing||(t.full_name=e.target.value)}}})]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[t._v(" Nomor Handphone ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone_number,expression:"phone_number"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"text"},domProps:{value:t.phone_number},on:{input:function(e){e.target.composing||(t.phone_number=e.target.value)}}})]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[t._v(" Email ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4",attrs:{type:"submit"}},[t._v(" Daftar ")]),n("router-link",{staticClass:"w-full text-center mx-auto font-bold text-blue-500",attrs:{to:"/login"}},[n("p",[t._v("Batal")])])],1),n("p",{staticClass:"text-center text-gray-500 text-xs"},[t._v(" ©2020 Task Vue X Heroku. All rights reserved. ")])])},s=[],i=n("5530"),u=n("2f62"),l={name:"Register",data:function(){return{full_name:"",username:"",password:"",email:"",phone_number:""}},methods:Object(i["a"])({registerForm:function(){var t={full_name:this.full_name,username:this.username,password:this.password,email:this.email,phone_number:this.phone_number};return this.registerAction(t),!1}},Object(u["b"])(["registerAction"]))},c=l,f=n("2877"),d=Object(f["a"])(c,o,s,!1,null,"446e8a05",null),p=d.exports,m={components:{Register:p}},b=m,g=Object(f["a"])(b,r,a,!1,null,null,null);e["default"]=g.exports},b64b:function(t,e,n){var r=n("23e7"),a=n("7b0b"),o=n("df75"),s=n("d039"),i=s((function(){o(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(t){return o(a(t))}})},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),o=n("56ef"),s=n("fc6a"),i=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),a=i.f,l=o(r),c={},f=0;while(l.length>f)n=a(r,e=l[f++]),void 0!==n&&u(c,e,n);return c}})},e439:function(t,e,n){var r=n("23e7"),a=n("d039"),o=n("fc6a"),s=n("06cf").f,i=n("83ab"),u=a((function(){s(1)})),l=!i||u;r({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=register.a2294577.js.map