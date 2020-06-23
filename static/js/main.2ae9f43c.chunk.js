(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{12:function(e,t,a){e.exports={container:"cards_container__2PVPY",card:"cards_card__1Dva2",dark:"cards_dark__3kOJf",infected:"cards_infected__1NSUE",active:"cards_active__259--",recovered:"cards_recovered__2lDwE",deaths:"cards_deaths__19LlB"}},211:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(77),o=a.n(c),l=(a(95),a(6)),u=a.n(l),i=a(10),s=a(11),d=a(49),m=a.n(d),f=a(229),p=a(233),v=a(230),b=a(231),h=a(12),g=a.n(h),E=a(26),y=a.n(E),x=a(27),O=a.n(x),_=function(e,t){var a=e.data,n=a.confirmed,c=a.deaths,o=a.recovered,l=a.lastUpdate;return n?r.a.createElement("div",{className:g.a.container},r.a.createElement(f.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(f.a,{item:!0,component:p.a,xs:12,md:2,className:O()(g.a.card,g.a.infected)},r.a.createElement(v.a,null,r.a.createElement(b.a,{color:"textPrimary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(l).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Active COVID-19 cases"))),r.a.createElement(f.a,{item:!0,component:p.a,xs:12,md:2,className:O()(g.a.card,g.a.active)},r.a.createElement(v.a,null,r.a.createElement(b.a,{color:"textPrimary",gutterBottom:!0},"Active"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value-o.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(l).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active COVID-19 cases"))),r.a.createElement(f.a,{item:!0,component:p.a,xs:12,md:2,className:O()(g.a.card,g.a.recovered)},r.a.createElement(v.a,null,r.a.createElement(b.a,{color:"textPrimary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:o.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(l).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recoverd COVID-19 cases"))),r.a.createElement(f.a,{item:!0,component:p.a,xs:12,md:2,className:O()(g.a.card,g.a.deaths)},r.a.createElement(v.a,null,r.a.createElement(b.a,{color:"textPrimary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(l).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Deaths due to COVID-19"))))):"loading...."},w=a(38),j=a.n(w),k="https://covid19.mathdro.id/api",D=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="",a="global"===t?"".concat(k):"".concat(k,"/countries/").concat(t),e.next=5,j.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,i=r.lastUpdate,console.log(c),e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:i});case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(51),I=a(82),F=a.n(I),N=(a(210),function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,l=e.country,d=Object(n.useState)([]),m=Object(s.a)(d,2),f=m[0],p=m[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=a?r.a.createElement(B.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0,255,0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"".concat(l)},scales:{yAxes:[{display:!1}]},plugins:{datalabels:{display:!0,color:"black",anchor:"end",align:"top"}}}}):null,b=f.length?r.a.createElement(B.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:F.a.container},"global"!==l?v:b)}),A=a(83),P=a.n(A),V=a(234),U=a(232),T=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(s.a)(a,2),o=c[0],l=c[1],d=Object(n.useState)("India"),m=Object(s.a)(d,2),f=m[0],p=m[1];return Object(n.useEffect)((function(){Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[l]),r.a.createElement(V.a,{styles:P.a.formControl},r.a.createElement(U.a,{value:f,onChange:function(e){t(e.target.value),p(e.target.value)}},r.a.createElement("option",{value:"global"},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},J=a(84),R=a.n(J),M=a(18),Q=a(37);function W(){var e=Object(Q.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n    transition: all 0.50s linear;\n  }\n  "]);return W=function(){return e},e}var z=Object(M.b)(W(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),G={body:"#FFF",text:"#FBFBFB",toggleBorder:"#FFF",background:"#363537"},H={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"};function L(){var e=Object(Q.a)(["\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  border-radius: 30px;\n  cursor: pointer;\n  font-size:0.8rem;\n  padding: 0.6rem;\n  }\n  "]);return L=function(){return e},e}var Y=M.c.button(L(),(function(e){return e.theme.background}),(function(e){return e.theme.toggleBorder}),(function(e){return e.theme.text})),$=function(e){e.theme;var t=e.toggleTheme;return r.a.createElement(Y,{onClick:t},"Switch Theme")},q=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("India"),l=Object(s.a)(o,2),d=l[0],f=l[1],p=function(){var e=Object(n.useState)("light"),t=Object(s.a)(e,2),a=t[0],r=t[1],c=function(e){window.localStorage.setItem("theme",e),r(e)};return Object(n.useEffect)((function(){var e=window.localStorage.getItem("theme");e&&r(e)}),[]),[a,function(){c("light"===a?"dark":"light")}]}(),v=Object(s.a)(p,2),b=v[0],h=v[1],g="light"===b?G:H;Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(d);case 2:t=e.sent,c(t),f(d);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d]);var E=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,D(t);case 3:a=e.sent,c(a),f(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(M.a,{theme:g},r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement("div",{className:m.a.container},r.a.createElement("img",{className:m.a.image,src:R.a,alt:"COVID-19"}),r.a.createElement(_,{data:a,country:d,theme:b}),r.a.createElement(T,{handleCountryChange:E}),r.a.createElement(N,{data:a,country:d}),r.a.createElement($,{theme:b,toggleTheme:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},82:function(e,t,a){e.exports={container:"charts_container__1PQp2"}},83:function(e,t,a){e.exports={formControl:"countrypicker_formControl__7uCU0"}},84:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},90:function(e,t,a){e.exports=a(211)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.2ae9f43c.chunk.js.map