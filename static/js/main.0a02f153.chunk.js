(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{117:function(e,t,a){e.exports={container:"charts_container__1PQp2"}},119:function(e,t,a){e.exports={formControl:"countrypicker_formControl__7uCU0"}},131:function(e,t,a){e.exports=a(253)},136:function(e,t,a){},22:function(e,t,a){e.exports={container:"cards_container__2PVPY",card:"cards_card__1Dva2",infected:"cards_infected__1NSUE",active:"cards_active__259--",recovered:"cards_recovered__2lDwE",deaths:"cards_deaths__19LlB"}},253:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=(a(136),a(12)),i=a(40),s=a.n(i),u=a(286),m=a(289),d=a(290),p=a(291),f=a(128),v=a(22),E=a.n(v),h=a(44),b=a.n(h),g=a(45),y=a.n(g),_=function(e){var t=e.data,a=t.confirmed,n=t.deaths,c=t.recovered,o=t.lastUpdate,i=e.country,s=r.a.useState(!1),v=Object(l.a)(s,2),h=v[0],g=v[1],_=r.a.useState(),w=Object(l.a)(_,2),x=w[0],k=w[1],j=function(){g(!0),k({confirmed:a,deaths:n,recovered:c}),console.log(a)};return a?r.a.createElement("div",{className:E.a.container},r.a.createElement(u.a,{container:!0,spacing:0,justify:"center"},r.a.createElement(u.a,{item:!0,component:m.a,xs:5,md:2,className:y()(E.a.card,E.a.infected)},r.a.createElement(m.a,{onClick:function(){return j()}},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textPrimary",gutterBottom:!0},"Infected"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(b.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(f.a,{color:"textSecondary"},new Date(o).toDateString()))))),r.a.createElement(u.a,{item:!0,component:m.a,xs:5,md:2,className:y()(E.a.card,E.a.active)},r.a.createElement(m.a,{onClick:function(){return j()}},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textPrimary",gutterBottom:!0},"Active"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(b.a,{start:0,end:a.value-c.value,duration:2.5,separator:","})),r.a.createElement(f.a,{color:"textSecondary"},new Date(o).toDateString()))))),r.a.createElement(u.a,{item:!0,component:m.a,xs:5,md:2,className:y()(E.a.card,E.a.recovered)},r.a.createElement(m.a,{onClick:function(){return j()}},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textPrimary",gutterBottom:!0},"Recovered"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(b.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(f.a,{color:"textSecondary"},new Date(o).toDateString()))))),r.a.createElement(u.a,{item:!0,component:m.a,xs:5,md:2,className:y()(E.a.card,E.a.deaths)},r.a.createElement(m.a,{onClick:function(){return j()}},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textPrimary",gutterBottom:!0},"Deaths"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(b.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(f.a,{color:"textSecondary"},new Date(o).toDateString())))))),"India"===i&&h?r.a.createElement(ye,{open:h,handleClose:function(){g(!1)},data:x}):null):"loading...."},w=a(8),x=a.n(w),k=a(16),j=a(46),O=a.n(j),C="https://covid19.mathdro.id/api",S=function(){var e=Object(k.a)(x.a.mark((function e(t){var a,n,r,c,o,l,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="",a="global"===t?"".concat(C):"".concat(C,"/countries/").concat(t),e.next=5,O.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(k.a)(x.a.mark((function e(){var t,a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(C,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(k.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(C,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(k.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://cors-anywhere.herokuapp.com/https://covid-news-server.herokuapp.com/news");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(77),B=a(117),P=a.n(B),U=(a(250),a(118)),L=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,i=e.country,s=Object(n.useState)([]),u=Object(l.a)(s,2),m=u[0],d=u[1],p=Object(U.a)();Object(n.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(I.a,{data:{labels:["Infected","Active","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(255, 196, 0, 0.842)","rgba(0,255,0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,a.value-c.value,c.value,o.value]}],fontColor:"light"===p.palette.type?"black":"white"},options:{legend:{display:!1},title:{display:!0,text:"".concat(i),fontColor:"light"===p.palette.type?"black":"white"},scales:{yAxes:[{display:!1}],xAxes:[{gridLines:{display:!1},barPercentage:.5}]},plugins:{datalabels:{display:!0,color:"light"===p.palette.type?"black":"white",anchor:"end",align:"top"}}}}):null,v=m.length?r.a.createElement(I.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.recovered})),label:"REcovered",borderColor:"rgba(0,255,0, 0.5)",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]},options:{legend:{display:!1},title:{display:!0,text:"".concat(i),fontColor:"light"===p.palette.type?"black":"white"},scales:{yAxes:[{display:!1}],xAxes:[{display:!1,gridLines:{display:!1}}]},plugins:{datalabels:{display:!1}}}}):null;return r.a.createElement("div",{className:P.a.container},"global"!==i?f:v)},G=a(119),R=a.n(G),T=a(308),W=a(307),J=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)("India"),u=Object(l.a)(s,2),m=u[0],d=u[1];return Object(n.useEffect)((function(){Object(k.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[i]),r.a.createElement(T.a,{styles:R.a.formControl},r.a.createElement(W.a,{value:m,onChange:function(e){t(e.target.value),d(e.target.value)}}," //used the setState method here to persist the new selection",r.a.createElement("option",{value:"global"},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},M=a(292),Q=a(61),V=a.n(Q),z=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){Object(k.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement("div",{className:V.a.container},r.a.createElement(u.a,{container:!0,spacing:0,justify:"center"},r.a.createElement(u.a,{item:!0,xs:12,md:9},r.a.createElement(f.a,{variant:"h4",align:"center",gutterBottom:!0},"Headlines")),a.map((function(e,t){return r.a.createElement(u.a,{item:!0,key:t,component:m.a,xs:12,md:3,className:V.a.card},r.a.createElement(m.a,{onClick:function(){return function(e){window.open(e,"_blank")}(e.url)}},r.a.createElement(d.a,null,r.a.createElement(M.a,{className:V.a.media,image:e.urlToImage}),r.a.createElement(p.a,null,r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:!0},e.title)))))}))))},H=a(62),Y=a.n(H),$=a(293),q=a(294),F=a(120),K=a.n(F),X=a(121),Z=a.n(X),ee=a(9);function te(){var e=r.a.useState(window.location.hash.substr(2)?"news":"count"),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(ee.e)();return r.a.createElement("div",null,r.a.createElement("div",{className:Y.a.phantom}),r.a.createElement("div",{className:Y.a.footer},r.a.createElement($.a,{value:a,onChange:function(e,t){n(t)},className:Y.a.root},r.a.createElement(q.a,{label:"Count",value:"count",onClick:function(){return c.push("/")},icon:r.a.createElement(K.a,null)}),r.a.createElement(q.a,{label:"News",value:"news",onClick:function(){return c.push("/news")},icon:r.a.createElement(Z.a,null)}))))}var ae=a(295),ne=a(296),re=a(297),ce=a(80),oe=a.n(ce),le=a(298),ie=a(122),se=a.n(ie),ue=a(123),me=a.n(ue),de=Object(ae.a)((function(e){return{app:{backgroundColor:"black"},title:{flexGrow:1}}}));function pe(e){var t=e.toggleDarkTheme,a=de(),n=Object(U.a)();return r.a.createElement("div",{className:oe.a.root},r.a.createElement(ne.a,{position:"static",className:oe.a.app},r.a.createElement(re.a,null,r.a.createElement(f.a,{variant:"h6",className:a.title},"COVID-19"),r.a.createElement(le.a,{edge:"end",className:a.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return t()}},"light"===n.palette.type?r.a.createElement(se.a,null):r.a.createElement(me.a,null)))))}var fe=a(303),ve=a(306),Ee=a(302),he=a(300),be=a(301),ge=a(299);function ye(e){var t=e.open,a=e.handleClose,n=e.data,c=n.confirmed,o=n.recovered,l=n.deaths;return console.log(c),r.a.createElement("div",null,r.a.createElement(ve.a,{open:t,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(ge.a,{id:"alert-dialog-title"},"India Stats"),r.a.createElement(he.a,null,t?r.a.createElement(be.a,{id:"alert-dialog-description"},"Recovery% is ",o.value/c.value*100,"%. Death% is ",l.value/c.value*100,"%."):r.a.createElement(be.a,{id:"alert-dialog-description"},"No Stats Available.")),r.a.createElement(Ee.a,null,r.a.createElement(fe.a,{onClick:a,color:"primary"},"Close"))))}var _e=a(124),we=a(304),xe=a(305),ke=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("India"),i=Object(l.a)(o,2),u=i[0],m=i[1];Object(n.useEffect)((function(){(function(){var e=Object(k.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(u);case 2:t=e.sent,c(t),m(u);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]);var d=function(){var e=Object(k.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,S(t);case 3:a=e.sent,c(a),m(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:s.a.home},r.a.createElement(_,{data:a,country:u}),r.a.createElement(J,{handleCountryChange:d}),r.a.createElement(L,{data:a,country:u}))},je=function(){return r.a.createElement("div",null,r.a.createElement(ee.a,{exact:!0,path:"/"},r.a.createElement(ke,null)),r.a.createElement(ee.a,{path:"/news"},r.a.createElement(z,null)))},Oe=a(54),Ce=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({palette:{type:"light"}}),i=Object(l.a)(o,2),u=i[0],m=i[1],d=Object(_e.a)(u);return r.a.createElement(we.a,{theme:d},r.a.createElement(xe.a,null),r.a.createElement(pe,{toggleDarkTheme:function(){var e="light"===u.palette.type?"dark":"light";m({palette:{type:e}}),c(!0!==a)}}),r.a.createElement("div",{className:s.a.container},r.a.createElement(Oe.a,null,r.a.createElement("div",{className:s.a.content},r.a.createElement(je,null)),r.a.createElement(te,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1",content:"App_content__3La4L",home:"App_home__2G-fr"}},61:function(e,t,a){e.exports={container:"news_container__3UPWy",card:"news_card__bG0P6",media:"news_media__1Snmg"}},62:function(e,t,a){e.exports={root:"navigation_root__Bt1om",footer:"navigation_footer__38Etz",phantom:"navigation_phantom__pwn06"}},80:function(e,t,a){e.exports={root:"appbar_root__1AICe"}}},[[131,1,2]]]);
//# sourceMappingURL=main.0a02f153.chunk.js.map