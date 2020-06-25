(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{100:function(e,t,a){},14:function(e,t,a){e.exports={container:"cards_container__2PVPY",card:"cards_card__1Dva2",infected:"cards_infected__1NSUE",active:"cards_active__259--",recovered:"cards_recovered__2lDwE",deaths:"cards_deaths__19LlB"}},217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=(a(100),a(6)),l=a.n(s),i=a(9),u=a(11),m=a(55),d=a.n(m),p=a(239),f=a(247),v=a(241),h=a(242),b=a(14),g=a.n(b),E=a(31),y=a.n(E),x=a(32),w=a.n(x),O=function(e,t){var a=e.data,n=a.confirmed,c=a.deaths,o=a.recovered,s=a.lastUpdate;return n?r.a.createElement("div",{className:g.a.container},r.a.createElement(p.a,{container:!0,spacing:0,justify:"center"},r.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:w()(g.a.card,g.a.infected)},r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"textPrimary",gutterBottom:!0},"Infected"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Number of Active COVID-19 cases"))),r.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:w()(g.a.card,g.a.active)},r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"textPrimary",gutterBottom:!0},"Active"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:n.value-o.value,duration:2.5,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Number of active COVID-19 cases"))),r.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:w()(g.a.card,g.a.recovered)},r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"textPrimary",gutterBottom:!0},"Recovered"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:o.value,duration:2.5,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Number of recoverd COVID-19 cases"))),r.a.createElement(p.a,{item:!0,component:f.a,xs:12,md:2,className:w()(g.a.card,g.a.deaths)},r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"textPrimary",gutterBottom:!0},"Deaths"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(s).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Deaths due to COVID-19"))))):"loading...."},_=a(33),j=a.n(_),k="https://covid19.mathdro.id/api",C=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r,c,o,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="",a="global"===t?"".concat(k):"".concat(k,"/countries/").concat(t),e.next=5,j.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://cors-anywhere.herokuapp.com/https://covid-news-server.herokuapp.com/news");case 3:return t=e.sent,a=t.data,console.log(a),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=a(56),P=a(89),B=a.n(P),U=(a(216),function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,m=Object(n.useState)([]),d=Object(u.a)(m,2),p=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=a?r.a.createElement(I.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0,255,0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"".concat(s)},scales:{yAxes:[{display:!1}]},plugins:{datalabels:{display:!0,color:"grey",anchor:"end",align:"top"}}}}):null,h=p.length?r.a.createElement(I.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:B.a.container},"global"!==s?v:h)}),V=a(90),A=a.n(V),R=a(248),W=a(246),$=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],s=c[1],m=Object(n.useState)("India"),d=Object(u.a)(m,2),p=d[0],f=d[1];return Object(n.useEffect)((function(){Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[s]),r.a.createElement(R.a,{styles:A.a.formControl},r.a.createElement(W.a,{value:p,onChange:function(e){t(e.target.value),f(e.target.value)}},r.a.createElement("option",{value:"global"},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},G=a(57),J=a.n(G),L=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement("div",{className:J.a.container},"i",r.a.createElement(p.a,{container:!0,spacing:0,justify:"center"},a.map((function(e,t){return r.a.createElement(p.a,{item:!0,key:t,component:f.a,md:9,className:J.a.card},r.a.createElement(v.a,null,r.a.createElement(h.a,{variant:"h6",gutterBottom:!0},e.title),r.a.createElement(h.a,{color:"textPrimary"},e.description)))}))))},M=a(91),Q=a.n(M),X=a(92),Y=a(243),q=a(244),z=a(5),F=a(245),H=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),s=Object(u.a)(o,2),m=s[0],f=s[1],v=Object(n.useState)("India"),b=Object(u.a)(v,2),g=b[0],E=b[1],y=Object(n.useState)({palette:{type:"light"}}),x=Object(u.a)(y,2),w=x[0],_=x[1],j=Object(X.a)(w);Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(g);case 2:t=e.sent,f(t),E(g);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g]);var k=function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,C(t);case 3:a=e.sent,f(a),E(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=Object(z.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(F.a);return r.a.createElement(Y.a,{theme:j},r.a.createElement(q.a,null),r.a.createElement("div",{className:d.a.container},r.a.createElement("img",{className:d.a.image,src:Q.a,alt:"COVID-19"}),r.a.createElement(h.a,{component:"div"},r.a.createElement(p.a,{component:"label",container:!0,alignItems:"center",spacing:1},r.a.createElement(p.a,{item:!0},"Light"),r.a.createElement(p.a,{item:!0},r.a.createElement(D,{checked:a,onChange:function(){var e="light"===w.palette.type?"dark":"light";_({palette:{type:e}}),c(!0!==a)}})),r.a.createElement(p.a,{item:!0},"Dark"))),r.a.createElement(O,{data:m,country:g,theme:w}),r.a.createElement($,{handleCountryChange:k}),r.a.createElement(U,{data:m,country:g}),r.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},57:function(e,t,a){e.exports={container:"news_container__3UPWy",card:"news_card__bG0P6"}},89:function(e,t,a){e.exports={container:"charts_container__1PQp2"}},90:function(e,t,a){e.exports={formControl:"countrypicker_formControl__7uCU0"}},91:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},95:function(e,t,a){e.exports=a(217)}},[[95,1,2]]]);
//# sourceMappingURL=main.8bdf8241.chunk.js.map