(function(t){function a(a){for(var e,i,c=a[0],l=a[1],o=a[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);u&&u(a);while(f.length)f.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(e=!1)}e&&(r.splice(a--,1),t=c(c.s=s[0]))}return t}var e={},n={app:0},r=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a2c6ffc9"}[t]+".js"}function c(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var a=[],s=n[t];if(0!==s)if(s)a.push(s[2]);else{var e=new Promise((function(a,e){s=n[t]=[a,e]}));a.push(s[2]=e);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var o=new Error;r=function(a){l.onerror=l.onload=null,clearTimeout(d);var s=n[t];if(0!==s){if(s){var e=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+e+": "+r+")",o.name="ChunkLoadError",o.type=e,o.request=r,s[1](o)}n[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(a)},c.m=t,c.c=e,c.d=function(t,a,s){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)c.d(s,e,function(a){return t[a]}.bind(null,e));return s},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/covid-19/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var u=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},4678:function(t,a,s){var e={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var a=r(t);return s(a)}function r(t){if(!s.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}n.keys=function(){return Object.keys(e)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"layout-wrapper"}},[s("Navbar"),s("Sidebar"),s("div",{staticClass:"main-content"},[s("div",{staticClass:"page-content"},[s("div",{staticClass:"container-fluid"},[s("router-view")],1)])])],1)])},r=[],i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{attrs:{id:"page-topbar"}},[s("div",{staticClass:"navbar-header"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"navbar-brand-box"},[s("a",{staticClass:"logo logo-dark",attrs:{href:"index.html"}},[s("span",{staticClass:"logo-sm"},[s("img",{attrs:{src:"assets/images/logo.svg",alt:"",height:"22"}})]),s("span",{staticClass:"logo-lg"},[s("img",{attrs:{src:"assets/images/logo-dark.png",alt:"",height:"17"}})])]),s("a",{staticClass:"logo logo-light",attrs:{href:"index.html"}},[s("span",{staticClass:"logo-sm"},[s("img",{attrs:{src:"assets/images/logo-light.svg",alt:"",height:"22"}})]),s("span",{staticClass:"logo-lg"},[s("img",{attrs:{src:"assets/images/logo-light.png",alt:"",height:"19"}})])])]),s("button",{staticClass:"btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light",attrs:{type:"button","data-toggle":"collapse","data-target":"#topnav-menu-content"}},[s("i",{staticClass:"fa fa-fw fa-bars"})])]),s("div",{staticClass:"d-flex"},[s("div",{staticClass:"dropdown d-inline-block d-lg-none ml-2"},[s("button",{staticClass:"btn header-item noti-icon waves-effect",attrs:{type:"button",id:"page-header-search-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"mdi mdi-magnify"})]),s("div",{staticClass:"dropdown-menu dropdown-menu-lg dropdown-menu-right p-0",attrs:{"aria-labelledby":"page-header-search-dropdown"}},[s("form",{staticClass:"p-3"},[s("div",{staticClass:"form-group m-0"},[s("div",{staticClass:"input-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search ...","aria-label":"Recipient's username"}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[s("i",{staticClass:"mdi mdi-magnify"})])])])])])])])])])])}],l={name:"Navbar"},o=l,d=s("2877"),u=Object(d["a"])(o,i,c,!1,null,null,null),f=u.exports,m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"topnav"},[s("div",{staticClass:"container-fluid"},[s("nav",{staticClass:"navbar navbar-light navbar-expand-lg topnav-menu"},[s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"topnav-menu-content"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[s("i",{staticClass:"bx bx-home-circle mr-2"}),t._v("Dashboard ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/death"}},[s("i",{staticClass:"bx bx-shocked mr-2"}),t._v("Death Cases ")])],1)])])])])])},p=[],b={name:"Sidebar"},v=b,h=Object(d["a"])(v,m,p,!1,null,null,null),j=h.exports,g={name:"App",components:{Sidebar:j,Navbar:f}},C=g,y=Object(d["a"])(C,n,r,!1,null,null,null),_=y.exports,w=(s("d3b7"),s("8c4f")),x=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-md-12"},[s("ol",{staticClass:"breadcrumb m-0"},[s("label",[t._v("Select Country")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected_country,expression:"selected_country"}],staticClass:"form-control",on:{click:function(a){return t.getStatsByCountry(t.selected_country)},change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.selected_country=a.target.multiple?s:s[0]}}},t._l(t.countries,(function(a,e){return s("option",{key:e,domProps:{value:a}},[t._v(" "+t._s(e)+" ")])})),0)])]),null!==t.selected_country?s("div",{staticClass:"col-xl-12 mt-3",attrs:{"track-by":"id"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card mini-stats-wid bg-warning"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-body"},[s("h5",{staticClass:"text-white"},[t._v("Confirmed Cases")]),s("h4",{staticClass:"mb-0"},[t._v(t._s(t.results.confirmed.value))]),s("p",{staticClass:"text-white"},[t._v("Updated: "+t._s(t.moment(t.results.lastUpdate).startOf("day").fromNow()))])])])])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card mini-stats-wid bg-success"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-body"},[s("h5",{staticClass:"text-white"},[t._v("Recovered")]),s("h4",{staticClass:"mb-0"},[t._v(t._s(t.results.recovered.value))]),s("p",{staticClass:"text-white"},[t._v("Updated: "+t._s(t.moment(t.results.lastUpdate).startOf("day").fromNow()))])])])])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card mini-stats-wid bg-danger"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-body"},[s("h5",{staticClass:"text-white"},[t._v("Deaths")]),s("h4",{staticClass:"mb-0"},[t._v(t._s(t.results.deaths.value))]),s("p",{staticClass:"text-white"},[t._v("Updated: "+t._s(t.moment(t.results.lastUpdate).startOf("day").fromNow()))])])])])])])])]):t._e()])])},k=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-12"},[s("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[s("h4",{staticClass:"mb-0 font-size-18"},[t._v("Dashboard")])])])}],z=s("bc3a"),O=s.n(z),D={name:"Home",components:{},data:function(){return{countries:[],selected_country:null,results:[]}},methods:{getStatsByCountry:function(t){var a=this;if(null==t)return null;O.a.get("https://covid19.mathdro.id/api/countries/"+t).then((function(t){a.results=t.data.deaths}))}},mounted:function(){var t=this;O.a.get("https://covid19.mathdro.id/api/countries").then((function(a){t.countries=a.data.countries}))}},S=D,U=Object(d["a"])(S,x,k,!1,null,null,null),E=U.exports,N=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"death"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title mb-4"},[t._v("Total Death Cases")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("h3",{staticClass:"text-danger"},[t._v(t._s(t.death_cases.value))]),s("p",{staticClass:"text-muted"},[t._v(" Updated "),s("br"),s("span",{staticClass:"text-success mr-2"},[t._v(" "+t._s(t.moment(t.latest_update).startOf("day").fromNow())+" ")])])])])])]),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title mb-4"},[t._v("Death Stats By Country")]),s("label",[t._v("Select Country")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected_country,expression:"selected_country"}],staticClass:"form-control form-control-sm",on:{click:function(a){return t.getDeathByCountry(t.selected_country)},change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.selected_country=a.target.multiple?s:s[0]}}},t._l(t.countries,(function(a,e){return s("option",{key:e,domProps:{value:a}},[t._v(" "+t._s(e)+" ")])})),0),""!==t.results.deaths?s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 mt-3"},[s("h3",{staticClass:"text-danger"},[t._v(t._s(t.results.deaths))]),s("p",{staticClass:"text-muted"},[t._v(" Updated "),s("br"),s("span",{staticClass:"text-success mr-2"},[t._v(" "+t._s(t.moment(t.results.latest_update).startOf("day").fromNow())+" ")])])])]):t._e()])])]),s("div",{staticClass:"col-xl-8"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"clearfix"}),s("DeathMap")],1)])])]),t._m(1)])},M=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[s("h4",{staticClass:"mb-0 font-size-18"},[t._v("Death Cases")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 mt-3"})])}],P=(s("a9e3"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"death-map"},[s("l-map",{staticStyle:{height:"90vh"},attrs:{zoom:t.map_data.zoom,center:t.map_data.center}},[s("l-tile-layer",{attrs:{url:t.map_data.url,attribution:t.map_data.attribution}}),t._l(t.deaths,(function(a,e){return s("l-marker",{key:e,attrs:{"lat-lng":t.latLng(a.lat,a.long)}})}))],2)],1)}),$=[],L=s("e11e"),T=s.n(L),A={name:"DeathMap",components:{},data:function(){return{countries:[],deaths:[],total_deaths:"",map_data:{zoom:3,center:T.a.latLng(0,0),attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',url:"https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",marker:T.a.latLng(-34,20)}}},methods:{latLng:function(t,a){return T.a.latLng(t,a)}},mounted:function(){var t=this;O.a.get("https://covid19.mathdro.id/api/deaths").then((function(a){t.deaths=a.data})),O.a.get("https://covid19.mathdro.id/api").then((function(a){t.total_deaths=a.data.deaths.value}))}},B=A,I=Object(d["a"])(B,P,$,!1,null,null,null),q=I.exports,R={name:"Death",components:{DeathMap:q},data:function(){return{countries:[],results:{deaths:"",latest_update:Date},selected_country:"",death_cases:Number,latest_update:Date}},methods:{getDeathByCountry:function(t){var a=this;if(null==t)return null;O.a.get("https://covid19.mathdro.id/api/countries/"+t).then((function(t){a.results.deaths=t.data.deaths.value,a.results.latest_update=t.data.lastUpdate}))}},mounted:function(){var t=this;O.a.get("https://covid19.mathdro.id/api").then((function(a){t.death_cases=a.data.deaths,t.latest_update=a.data.lastUpdate})),O.a.get("https://covid19.mathdro.id/api/countries").then((function(a){t.countries=a.data.countries}))}},G=R,H=Object(d["a"])(G,N,M,!1,null,null,null),J=H.exports;e["a"].use(w["a"]);var F=[{path:"/",name:"Home",component:E},{path:"/death",name:"Death",component:J},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],Y=new w["a"]({routes:F}),K=Y,Q=s("cb43"),V=s("2699"),W=s("a40a"),X=s("4e2b"),Z=(s("6cc5"),s("c1df")),tt=s.n(Z);e["a"].prototype.moment=tt.a,e["a"].component("l-map",V["a"]),e["a"].component("l-tile-layer",W["a"]),e["a"].component("l-marker",X["a"]),delete L["Icon"].Default.prototype._getIconUrl,L["Icon"].Default.mergeOptions({iconRetinaUrl:s("29fa"),iconUrl:s("29fa"),shadowUrl:s("e2b9")}),e["a"].use(Q["default"]),e["a"].config.productionTip=!1,new e["a"]({router:K,render:function(t){return t(_)}}).$mount("#app")}});
//# sourceMappingURL=app.723235c8.js.map