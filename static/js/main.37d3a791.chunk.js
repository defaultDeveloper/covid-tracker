(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{127:function(e,a,t){e.exports={container:"charts_container__3DmoD"}},129:function(e,a,t){e.exports={formControl:"countrypicker_formControl__2TtZ-"}},133:function(e,a,t){e.exports={root:"appbar_root__3iVLE"}},136:function(e,a,t){e.exports={container:"table_container__2U_y1"}},145:function(e,a,t){e.exports=t(272)},150:function(e,a,t){},21:function(e,a,t){e.exports={container:"cards_container__38iSX",card:"cards_card__18AMa",infected:"cards_infected__375bw",active:"cards_active__2X44a",recovered:"cards_recovered__z0e6q",deaths:"cards_deaths__1sgBN"}},272:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t.n(c),o=(t(150),t(10)),i=t(44),s=t.n(i),u=t(312),d=t(315),m=t(316),p=t(317),f=t(141),v=t(21),E=t.n(v),b=t(48),g=t.n(b),h=t(49),y=t.n(h),_=function(e){var a=e.data,t=a.confirmed,n=a.deaths,c=a.recovered,l=(a.lastUpdate,e.country),i=r.a.useState(!1),s=Object(o.a)(i,2),v=s[0],b=s[1],h=r.a.useState(),_=Object(o.a)(h,2),w=_[0],x=_[1],j=function(){"India"===l&&(b(!0),x({confirmed:t,deaths:n,recovered:c}))};return t?r.a.createElement("div",{className:E.a.container},r.a.createElement(u.a,{container:!0,spacing:0,justify:"center"},r.a.createElement(u.a,{item:!0,component:d.a,xs:5,md:2,className:y()(E.a.card,E.a.infected)},r.a.createElement(d.a,{onClick:function(){return j()}},r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textPrimary",gutterBottom:!0},"Confirmed"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:t.value,duration:2.5,separator:","})))))),r.a.createElement(u.a,{item:!0,component:d.a,xs:5,md:2,className:y()(E.a.card,E.a.active)},r.a.createElement(d.a,{onClick:function(){return j()}},r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textPrimary",gutterBottom:!0},"Active"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:t.value-c.value,duration:2.5,separator:","})))))),r.a.createElement(u.a,{item:!0,component:d.a,xs:5,md:2,className:y()(E.a.card,E.a.recovered)},r.a.createElement(d.a,{onClick:function(){return j()}},r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textPrimary",gutterBottom:!0},"Recovered"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:c.value,duration:2.5,separator:","})))))),r.a.createElement(u.a,{item:!0,component:d.a,xs:5,md:2,className:y()(E.a.card,E.a.deaths)},r.a.createElement(d.a,{onClick:function(){return j()}},r.a.createElement(m.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textPrimary",gutterBottom:!0},"Deaths"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:n.value,duration:2.5,separator:","}))))))),"India"===l&&v?r.a.createElement(we,{open:v,handleClose:function(){b(!1)},data:w}):null):"loading...."},w=t(7),x=t.n(w),j=t(14),O=t(39),k=t.n(O),C=t(91),N=C.trackerUrl,S=function(){var e=Object(j.a)(x.a.mark((function e(a){var t,n,r,c,l,o,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="",t="global"===a?"".concat(N):"".concat(N,"/countries/").concat(a),e.next=5,k.a.get(t);case 5:return n=e.sent,r=n.data,c=r.confirmed,l=r.recovered,o=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:l,deaths:o,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(a){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(x.a.mark((function e(){var a,t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(N,"/daily"));case 3:return a=e.sent,t=a.data,n=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(x.a.mark((function e(){var a,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(N,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(j.a)(x.a.mark((function e(){var a,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(C.newsUrl);case 3:return a=e.sent,t=a.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(x.a.mark((function e(){var a,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(N,"/countries/India/confirmed"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=t(92),U=t(127),R=t.n(U),L=(t(268),t(128)),T=function(e){var a=e.data,t=a.confirmed,c=a.recovered,l=a.deaths,i=e.country,s=Object(n.useState)([]),u=Object(o.a)(s,2),d=u[0],m=u[1],p=Object(L.a)();Object(n.useEffect)((function(){(function(){var e=Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=t?r.a.createElement(I.Bar,{data:{labels:["Infected","Active","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(255, 196, 0, 0.842)","rgba(0,255,0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.value,t.value-c.value,c.value,l.value]}],fontColor:"light"===p.palette.type?"black":"white"},options:{legend:{display:!1},title:{display:!0},scales:{yAxes:[{display:!1}],xAxes:[{display:!1,gridLines:{display:!1},barPercentage:.5}]},plugins:{datalabels:{display:!0,color:"light"===p.palette.type?"black":"white",anchor:"end",align:"top"}}}}):null,v=d.length?r.a.createElement(I.Line,{data:{labels:d.map((function(e){return e.date})),datasets:[{data:d.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:d.map((function(e){return e.recovered})),label:"Recovered",borderColor:"rgba(0,255,0, 0.5)",fill:!0},{data:d.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]},options:{legend:{display:!1},title:{display:!0,text:"".concat(i),fontColor:"light"===p.palette.type?"black":"white"},scales:{yAxes:[{display:!1}],xAxes:[{display:!1,gridLines:{display:!1}}]},plugins:{datalabels:{display:!1}}}}):null;return r.a.createElement("div",{className:R.a.container},"global"!==i?f:v)},M=t(129),X=t.n(M),q=t(318),z=t(340),H=function(e){var a=e.handleCountryChange,t=Object(n.useState)([]),c=Object(o.a)(t,2),l=c[0],i=c[1],s=Object(n.useState)("India"),u=Object(o.a)(s,2),d=u[0],m=u[1];return Object(n.useEffect)((function(){Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(q.a,{className:X.a.formControl},r.a.createElement(z.a,{value:d,onChange:function(e){a(e.target.value),m(e.target.value)}},r.a.createElement("option",{value:"global"},"Global"),l.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))))},J=t(319),Z=t(72),F=t.n(Z),G=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement("div",{className:F.a.container},r.a.createElement(u.a,{container:!0,spacing:0,justify:"center"},t.map((function(e,a){return r.a.createElement(u.a,{item:!0,key:a,component:d.a,xs:12,md:3,className:F.a.card},r.a.createElement(d.a,{onClick:function(){return function(e){window.open(e,"_blank")}(e.url)}},r.a.createElement(m.a,null,r.a.createElement(J.a,{className:F.a.media,image:e.urlToImage}),r.a.createElement(p.a,null,r.a.createElement(f.a,{variant:"subtitle1",gutterBottom:!0},e.title)))))}))))},K=t(73),V=t.n(K),W=t(320),Y=t(321),$=t(131),Q=t.n($),ee=t(132),ae=t.n(ee),te=t(11);function ne(){var e=r.a.useState(window.location.hash.substr(2)?"news":"count"),a=Object(o.a)(e,2),t=a[0],n=a[1],c=Object(te.e)();return r.a.createElement("div",null,r.a.createElement("div",{className:V.a.phantom}),r.a.createElement("div",{className:V.a.footer},r.a.createElement(W.a,{value:t,onChange:function(e,a){n(a)},showLabels:!0,className:V.a.root},r.a.createElement(Y.a,{label:"Count",value:"count",onClick:function(){return c.push("/")},icon:r.a.createElement(Q.a,null)}),r.a.createElement(Y.a,{label:"News",value:"news",onClick:function(){return c.push("/news")},icon:r.a.createElement(ae.a,null)}))))}var re=t(322),ce=t(323),le=t(324),oe=t(133),ie=t.n(oe),se=t(325),ue=t(134),de=t.n(ue),me=t(135),pe=t.n(me),fe=Object(re.a)((function(e){return{grid:{padding:0,margin:0},title:{flexGrow:1}}}));function ve(e){var a=e.toggleDarkTheme,t=fe(),n=Object(L.a)();return r.a.createElement("div",{className:ie.a.root},r.a.createElement(ce.a,{position:"static",color:"default"},r.a.createElement(le.a,null,r.a.createElement(u.a,{container:!0,spacing:0,justify:"center"},r.a.createElement(u.a,{item:!0,xs:5,md:9},r.a.createElement(f.a,{variant:"h6",align:"left",className:t.title},"COVID-19")),r.a.createElement(u.a,{item:!0,xs:7,md:9},r.a.createElement(f.a,{variant:"h6",align:"left",className:t.title},(new Date).toDateString().split(" ").slice(0,3).join(" ")))),r.a.createElement(se.a,{edge:"end",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return a()}},"light"===n.palette.type?r.a.createElement(de.a,null):r.a.createElement(pe.a,null)))))}var Ee=t(330),be=t(339),ge=t(329),he=t(327),ye=t(328),_e=t(326);function we(e){var a=e.open,t=e.handleClose,n=e.data,c=n.confirmed,l=n.recovered,o=n.deaths;return console.log(c),r.a.createElement("div",null,r.a.createElement(be.a,{open:a,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(_e.a,{id:"alert-dialog-title"},"India Stats"),r.a.createElement(he.a,null,a?r.a.createElement(ye.a,{id:"alert-dialog-description"},r.a.createElement(f.a,null,"Recovery% is ",Math.trunc(l.value/c.value*100),"%."),r.a.createElement(f.a,null,"Death% is ",Math.trunc(o.value/c.value*100),"%.")):r.a.createElement(ye.a,{id:"alert-dialog-description"},"No Stats Available.")),r.a.createElement(ge.a,null,r.a.createElement(Ee.a,{onClick:t,color:"primary"},"Close"))))}var xe=t(335),je=t(336),Oe=t(333),ke=t(334),Ce=t(331),Ne=t(332),Se=t(140),Ae=t(136),De=t.n(Ae),Be=t(341),Pe=Object(re.a)({tableCell:{paddingRight:4,paddingLeft:5},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}});function Ie(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var Ue=[{id:"state",numeric:!1,disablePadding:!0,label:"State"},{id:"confirmed",numeric:!0,disablePadding:!1,label:"C"},{id:"active",numeric:!0,disablePadding:!1,label:"A"},{id:"recovered",numeric:!0,disablePadding:!1,label:"R"},{id:"deaths",numeric:!0,disablePadding:!1,label:"D"}];function Re(e){var a=e.classes,t=e.order,n=e.orderBy,c=e.onRequestSort;return r.a.createElement(Ce.a,null,r.a.createElement(Ne.a,null,Ue.map((function(e){return r.a.createElement(Oe.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&t,className:a.tableCell},r.a.createElement(Be.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(l=e.id,function(e){c(e,l)})},e.label,n===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===t?"sorted descending":"sorted ascending"):null));var l}))))}function Le(){var e=Pe(),a=r.a.useState([]),t=Object(o.a)(a,2),n=t[0],c=t[1],l=r.a.useState("asc"),i=Object(o.a)(l,2),s=i[0],d=i[1],m=r.a.useState("confirmed"),p=Object(o.a)(m,2),f=p[0],v=p[1];return r.a.useEffect((function(){Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,P();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement("div",{className:De.a.container},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(ke.a,{component:Se.a},r.a.createElement(xe.a,{"aria-label":"simple table",size:"small"},r.a.createElement(Re,{classes:e,order:s,orderBy:f,onRequestSort:function(e,a){d(f===a&&"asc"===s?"desc":"asc"),v(a)}}),r.a.createElement(je.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(n,function(e,a){return"desc"===e?function(e,t){return Ie(e,t,a)}:function(e,t){return-Ie(e,t,a)}}(s,f)).map((function(a){return r.a.createElement(Ne.a,{key:a.provinceState},r.a.createElement(Oe.a,{align:"LEFT",className:e.tableCell},a.provinceState),r.a.createElement(Oe.a,{align:"right",style:{color:"#1875ff"},className:e.tableCell},a.confirmed),r.a.createElement(Oe.a,{align:"right",style:{color:"#d3a201"},className:e.tableCell},a.active),r.a.createElement(Oe.a,{align:"right",style:{color:"#00c400"},className:e.tableCell},a.recovered),r.a.createElement(Oe.a,{align:"right",style:{color:"#bd0000"},className:e.tableCell},a.deaths))})))))))}var Te=t(137),Me=t(337),Xe=t(338),qe=function(){var e=Object(n.useState)({}),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)("India"),i=Object(o.a)(l,2),u=i[0],d=i[1];Object(n.useEffect)((function(){(function(){var e=Object(j.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(u);case 2:a=e.sent,c(a),d(u);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]);var m=function(){var e=Object(j.a)(x.a.mark((function e(a){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,S(a);case 3:t=e.sent,c(t),d(a);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:s.a.home},r.a.createElement(H,{handleCountryChange:m}),r.a.createElement(_,{data:t,country:u}),r.a.createElement(T,{data:t,country:u}),"India"===u?r.a.createElement(Le,null):null)},ze=function(){return r.a.createElement("div",null,r.a.createElement(te.a,{exact:!0,path:"/"},r.a.createElement(qe,null)),r.a.createElement(te.a,{path:"/news"},r.a.createElement(G,null)))},He=t(64),Je=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)({palette:{type:"light"}}),i=Object(o.a)(l,2),u=i[0],d=i[1],m=Object(Te.a)(u);return r.a.createElement(Me.a,{theme:m},r.a.createElement(Xe.a,null),r.a.createElement(ve,{toggleDarkTheme:function(){var e="light"===u.palette.type?"dark":"light";d({palette:{type:e}}),c(!0!==t)}}),r.a.createElement("div",{className:s.a.container},r.a.createElement(He.a,null,r.a.createElement("div",{className:s.a.content},r.a.createElement(ze,null)),r.a.createElement(ne,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(271);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,a,t){e.exports={container:"App_container__1FKO5",image:"App_image__NxzKs",content:"App_content__2OZpU",home:"App_home__3uB_l"}},72:function(e,a,t){e.exports={container:"news_container__1kTAZ",card:"news_card__2-euk",media:"news_media__Ymr8l"}},73:function(e,a,t){e.exports={root:"navigation_root__2uXpa",footer:"navigation_footer__14NYP",phantom:"navigation_phantom__32HX3"}},91:function(e){e.exports=JSON.parse('{"newsUrl":"https://covid-news-server.herokuapp.com/news","trackerUrl":"https://covid19.mathdro.id/api"}')}},[[145,1,2]]]);
//# sourceMappingURL=main.37d3a791.chunk.js.map