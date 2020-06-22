(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{14:function(e,t,a){e.exports={container:"cards_container__2PVPY",card:"cards_card__1Dva2",infected:"cards_infected__1NSUE",recovered:"cards_recovered__2lDwE",deaths:"cards_deaths__19LlB"}},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(77),o=a.n(c),u=(a(95),a(6)),i=a.n(u),l=a(10),s=a(11),d=a(49),m=a.n(d),f=a(228),p=a(232),v=a(229),h=a(230),b=a(14),g=a.n(b),E=a(36),x=a.n(E),y=a(37),w=a.n(y),O=function(e){var t=e.data,a=t.confirmed,n=t.deaths,c=t.recovered,o=t.lastUpdate;return a?r.a.createElement("div",{className:g.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:p.a,xs:12,md:3,className:w()(g.a.card,g.a.infected)},r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Number of Active COVID-19 cases"))),r.a.createElement(f.a,{item:!0,component:p.a,xs:12,md:3,className:w()(g.a.card,g.a.recovered)},r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Number of recoverd COVID-19 cases"))),r.a.createElement(f.a,{item:!0,component:p.a,xs:12,md:3,className:w()(g.a.card,g.a.deaths)},r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Deaths due to COVID-19"))))):"loading...."},j=a(38),_=a.n(j),k="https://covid19.mathdro.id/api",S=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r,c,o,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="",a="global"===t?"".concat(k):"".concat(k,"/countries/").concat(t),e.next=5,_.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,console.log(c),e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(51),B=a(82),F=a.n(B),N=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,d=Object(n.useState)([]),m=Object(s.a)(d,2),f=m[0],p=m[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=a?r.a.createElement(I.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0,255,0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"".concat(u)}}}):null,h=f.length?r.a.createElement(I.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:F.a.container},"global"!==u?v:h)},A=a(83),U=a.n(A),V=a(233),P=a(231),T=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(s.a)(a,2),o=c[0],u=c[1],d=Object(n.useState)("India"),m=Object(s.a)(d,2),f=m[0],p=m[1];return Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[u]),r.a.createElement(V.a,{styles:U.a.formControl},r.a.createElement(P.a,{value:f,onChange:function(e){t(e.target.value),p(e.target.value)}},r.a.createElement("option",{value:"global"},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},R=a(84),J=a.n(R),M=a(17),Q=a(35);function W(){var e=Object(Q.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n    transition: all 0.50s linear;\n  }\n  "]);return W=function(){return e},e}var z=Object(M.b)(W(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),G={body:"#FFF",text:"#FBFBFB",toggleBorder:"#FFF",background:"#363537"},H={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"};function L(){var e=Object(Q.a)(["\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  border-radius: 30px;\n  cursor: pointer;\n  font-size:0.8rem;\n  padding: 0.6rem;\n  }\n  "]);return L=function(){return e},e}var Y=M.c.button(L(),(function(e){return e.theme.background}),(function(e){return e.theme.toggleBorder}),(function(e){return e.theme.text})),$=function(e){e.theme;var t=e.toggleTheme;return r.a.createElement(Y,{onClick:t},"Switch Theme")},q=void 0,K=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),d=u[0],f=u[1],p=function(){var e=Object(n.useState)("light"),t=Object(s.a)(e,2),a=t[0],r=t[1],c=function(e){window.localStorage.setItem("theme",e),r(e)};return Object(n.useEffect)((function(){var e=window.localStorage.getItem("theme");e&&r(e)}),[]),[a,function(){c("light"===a?"dark":"light")}]}(),v=Object(s.a)(p,2),h=v[0],b=v[1],g="light"===h?G:H;Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"India",e.next=3,S("India");case 3:t=e.sent,c(t),f(d);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var E=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,S(t);case 3:a=e.sent,q.setState({data:a,country:t});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(M.a,{theme:g},r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement("div",{className:m.a.container},r.a.createElement("img",{className:m.a.image,src:J.a,alt:"COVID-19"}),r.a.createElement(O,{data:a,country:d}),r.a.createElement(T,{handleCountryChange:E}),r.a.createElement(N,{data:a,country:d}),r.a.createElement($,{theme:h,toggleTheme:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},82:function(e,t,a){e.exports={container:"charts_container__1PQp2"}},83:function(e,t,a){e.exports={formControl:"countrypicker_formControl__7uCU0"}},84:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},90:function(e,t,a){e.exports=a(210)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.cff40762.chunk.js.map