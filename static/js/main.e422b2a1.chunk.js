(this["webpackJsonpip-tracker"]=this["webpackJsonpip-tracker"]||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),r=c.n(s),o=c(9),i=c.n(o),a=(c(21),c(12)),l=c.n(a),j=c(13),d=c(4),h=(c(23),c(14)),u=c(3);var b=function(e){var t=e.geoData,c=""===t;return Object(n.jsxs)("article",{className:"geo-ctn",children:[Object(n.jsxs)("div",{className:"geo-info",children:[Object(n.jsx)("p",{children:"ip address"}),Object(n.jsx)("h2",{children:c?Object(n.jsx)(u.Preloader,{use:u.ThreeDots,size:35,strokeWidth:6,strokeColor:"hsl(0, 0%, 75%)",duration:2e3}):t.ip})]}),Object(n.jsx)("div",{className:"line"}),Object(n.jsxs)("div",{className:"geo-info",children:[Object(n.jsx)("p",{children:"location"}),Object(n.jsx)("h2",{children:c?Object(n.jsx)(u.Preloader,{use:u.ThreeDots,size:35,strokeWidth:6,strokeColor:"hsl(0, 0%, 75%)",duration:2e3}):t.location.region+", "+t.location.country+" "+t.location.postalCode})]}),Object(n.jsx)("div",{className:"line"}),Object(n.jsxs)("div",{className:"geo-info",children:[Object(n.jsx)("p",{children:"timezone"}),Object(n.jsx)("h2",{children:c?Object(n.jsx)(u.Preloader,{use:u.ThreeDots,size:35,strokeWidth:6,strokeColor:"hsl(0, 0%, 75%)",duration:2e3}):"UTC"+t.location.timezone})]}),Object(n.jsx)("div",{className:"line"}),Object(n.jsxs)("div",{className:"geo-info",children:[Object(n.jsx)("p",{children:"isp"}),Object(n.jsx)("h2",{children:c?Object(n.jsx)(u.Preloader,{use:u.ThreeDots,size:35,strokeWidth:6,strokeColor:"hsl(0, 0%, 75%)",duration:2e3}):t.isp})]})]})},O=c(26),p=c(29),x=c(27),f=c(28);var v=function(e){var t=e.geoData,c=""===t;return Object(n.jsx)("div",{children:c?Object(n.jsx)("div",{id:"preloader",children:Object(n.jsx)(u.Preloader,{use:u.Oval,size:80,strokeWidth:6,strokeColor:"hsl(239, 39%, 53%)",duration:2e3})}):Object(n.jsxs)(O.a,{id:"mapid",center:[t.location.lat,t.location.lng],zoom:13,scrollWheelZoom:!1,children:[Object(n.jsx)(p.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(n.jsx)(x.a,{position:[t.location.lat-.013,t.location.lng],children:Object(n.jsxs)(f.a,{children:[t.location.city,".",Object(n.jsx)("br",{}),t.location.region,", ",t.location.country,"."]})})]})})};var g=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],r=t[1],o=Object(s.useState)(""),i=Object(d.a)(o,2),a=i[0],u=i[1],O=Object(s.useState)(1),p=Object(d.a)(O,2),x=p[0],f=p[1];Object(s.useEffect)((function(){g()}),[]),Object(s.useEffect)((function(){u("")}),[x]);var g=function(){var e="https://geo.ipify.org/api/v1?apiKey=at_Whhuh3fvtcFsA8tJqiS7w9SbR0lHv&ipAddress="+c,t=function(){var t=Object(j.a)(l.a.mark((function t(){var c,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return c=t.sent,t.next=5,c.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{t().then((function(e){return u(e)}))}catch(n){console.log(n)}};return Object(n.jsxs)("div",{children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"IP address tracker"}),Object(n.jsxs)("form",{className:"ip-form",children:[Object(n.jsx)("input",{className:"input",onChange:function(e){var t=e.target.value;r(t)},value:c,placeholder:"Enter new IP"}),Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),""!==c&&(g(),r(""),f(x+1))},className:"submit-btn",type:"submit",children:Object(n.jsx)(h.a,{className:"arrow-btn"})})]}),Object(n.jsx)(b,{geoData:a})]}),Object(n.jsx)("main",{children:Object(n.jsx)(v,{geoData:a})})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),r(e),o(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),m()}},[[24,1,2]]]);
//# sourceMappingURL=main.e422b2a1.chunk.js.map