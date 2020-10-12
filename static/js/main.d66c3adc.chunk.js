(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{15:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},207:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(70),o=a.n(c),u=a(5),s=a.n(u),i=a(10),l=a(71),d=a(72),p=a(81),m=a(80),f=a(225),v=a(229),h=a(226),b=a(227),E=a(30),g=a.n(E),y=a(31),x=a.n(y),C=a(15),_=a.n(C),j=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",null,n.a.createElement(f.a,{container:!0,spaceing:3,justify:"center"},n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.text,_.a.infected)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(b.a,{varient:"h5"},n.a.createElement(g.a,{start:0,end:a.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{varient:"body2"},"Number of active cases of Covid-19"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.text,_.a.recovered)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(b.a,{varient:"h5"},n.a.createElement(g.a,{start:0,end:r.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{varient:"body2"},"Number of recoveries from Covid-19"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.text,_.a.deaths)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(b.a,{varient:"h5"},n.a.createElement(g.a,{start:0,end:c.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{varient:"body2"},"Number of deaths caused by Covid-19"))))):"Loding..."},w=a(29),k=a(32),O=a.n(k),S="https://covid19.mathdro.id/api",D=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,n,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,O.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,u=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(43),U=a(77),A=a.n(U),L=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(r.useState)([]),d=Object(w.a)(l,2),p=d[0],m=d[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=p.length?n.a.createElement(B.Line,{data:{labels:p.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:p.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null,v=a?n.a.createElement(B.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{ledgend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return n.a.createElement("div",{className:A.a.container},u?v:f)},M=a(230),P=a(228),R=a(78),z=a.n(R),J=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(w.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),n.a.createElement(M.a,{className:z.a.formControl},n.a.createElement(P.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"United States"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)}))))},Q=a(44),q=a.n(Q),G=a(79),V=a.n(G),Y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return n.a.createElement("div",{className:q.a.container},n.a.createElement("img",{className:q.a.image,src:V.a}),n.a.createElement(j,{data:t}),n.a.createElement(J,{handleCountryChange:this.handleCountryChange}),n.a.createElement(L,{data:t,country:a}))}}]),a}(n.a.Component);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null)),document.getElementById("root"))},44:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},77:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},78:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},79:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},84:function(e,t,a){e.exports=a(207)}},[[84,1,2]]]);
//# sourceMappingURL=main.d66c3adc.chunk.js.map