(this["webpackJsonpcovid-project"]=this["webpackJsonpcovid-project"]||[]).push([[0],{166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(26),c=a.n(o),l=(a(65),a(5)),s=(a(66),a(6)),i=function(e){return{type:"CHANGE",payload:e}},u=(Object(s.b)(null,(function(e){return{change:function(t){e(i(t))}}}))((function(e){var t=Object(r.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(r.useState)("Filtros"),i=Object(l.a)(s,2),u=i[0],d=i[1],p=Object(r.useState)([{name:"Edad"},{name:"Genero"},{name:"Estado"},{name:"Localidad"}]),f=Object(l.a)(p,1)[0].map((function(t){return n.a.createElement("button",{className:"dropdown-item",onClick:function(){var a;a=t.name,d(a),e.change(["Filtro",a])},type:"button"},t.name)}));return n.a.createElement("div",{className:"dropdown",style:{paddingTop:"10px"}},n.a.createElement("button",{className:"btn btn-primary dropdown-toggle",type:"button",id:"dropdownMenu2",onClick:function(){return c(!o)},"data-toggle":"dropdown","aria-haspopup":"true",style:{width:"180px"},"aria-expanded":"false"},u),o?n.a.createElement("div",{className:"","aria-labelledby":"dropdownMenu",style:{marginLeft:"18px",width:"180px"}},f):null)})),a(1)),d=a.n(u),p=a(2),f=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#a6d5e3"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],m=(a(72),function(e){return n.a.createElement("div",{style:{justifyContent:"center",paddingTop:"30px"},className:"row"},n.a.createElement("div",{style:{marginLeft:"80px"},className:"col-md-2"},n.a.createElement("div",{className:"loader"})))}),b=a(15),v=a(3),y={Localidad:"Localidad",Filter:"Localidad"},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"CHANGE":switch(r[0]){case"Localidad":return Object(v.a)(Object(v.a)({},e),{},{Localidad:r[1]});case"Filtro":return console.log("ChangeFilter",r[1]),Object(v.a)(Object(v.a)({},e),{},{Filter:r[1]});default:return Object(v.a)(Object(v.a)({},e),{},{password:r[1]})}default:return e}},g={Polygons:[],Age:[],State:[],Location:[],Genre:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"CHANGE_DATA":switch(r[0]){case"Age":return Object(v.a)(Object(v.a)({},e),{},{Age:r[1]});case"Polygons":return Object(v.a)(Object(v.a)({},e),{},{Polygons:r[1]});case"Location":return console.log("location-redux"),Object(v.a)(Object(v.a)({},e),{},{Location:r[1]});case"Genre":return Object(v.a)(Object(v.a)({},e),{},{Genre:r[1]});case"State":return console.log("State-redux"),Object(v.a)(Object(v.a)({},e),{},{State:r[1]});default:return Object(v.a)(Object(v.a)({},e),{},{password:r[1]})}default:return e}},E=a(57),w=Object(b.c)({reducer_app:x,reducer_user:h}),j=Object(b.d)(w,Object(b.a)(E.a)),O=a(58),k=a.n(O),T="data/datacovid4.csv",F=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(T).then(function(){var e=Object(p.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return a=e.sent,r=M(a.result.records),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(d.a.mark((function e(t,a){var r,n,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t||"7/07/2020",n=a||"Locality",e.next=4,fetch(T).then(function(){var e=Object(p.a)(d.a.mark((function e(t){var a,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return a=e.sent,o=C(a.result.records,r,n),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),L=function(){var e=Object(p.a)(d.a.mark((function e(t,a){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(T).then(function(){var e=Object(p.a)(d.a.mark((function e(r){var n,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return n=e.sent,o=S(n.result.records,t,a),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(T).then(function(){var e=Object(p.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return a=e.sent,r=U(a.result.records),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e,t,a){var r={"Engativ\xe1":[0,0],"Usaqu\xe9n":[0,0],"Fontib\xf3n":[0,0],Kennedy:[0,0],Suba:[0,0],Chapinero:[0,0],"Ciudad Bol\xedvar":[0,0],"Barrios Unidos":[0,0],"La Candelaria":[0,0],"Rafael Uribe Uribe":[0,0],"Puente Aranda":[0,0],Usme:[0,0],Teusaquillo:[0,0],Tunjuelito:[0,0],Bosa:[0,0],"Fuera de Bogot\xe1":[0,0],"Santa Fe":[0,0],"Antonio Nari\xf1o":[0,0],"San Crist\xf3bal":[0,0],"Los M\xe1rtires":[0,0],"Sin Dato":[0,0]};e.map((function(e){var n=e["Fecha de diagnostico"].split("/"),o=t.split("/"),c=parseInt(n[1])<=parseInt(o[1]),l=a==e["Localidad de residencia"].toUpperCase()||"Localidad"===a;if(c&&l){var s=e["Localidad de residencia"];"F"===e.Sexo?r[s][0]+=1:r[s][1]+=1}}));for(var n=[],o=Object.keys(r),c=function(e){var t=0;o.map((function(a){return t+=r[a][e],null})),n.push(t)},l=0;l<2;l++)c(l);parseInt(n[0]),parseInt(n[1]);return n},S=function(e,t,a){var r={"Engativ\xe1":[0,0,0,0,0,0,0,0,0],"Usaqu\xe9n":[0,0,0,0,0,0,0,0,0],"Fontib\xf3n":[0,0,0,0,0,0,0,0,0],Kennedy:[0,0,0,0,0,0,0,0,0],Suba:[0,0,0,0,0,0,0,0,0],Chapinero:[0,0,0,0,0,0,0,0,0],"Ciudad Bol\xedvar":[0,0,0,0,0,0,0,0,0],"Barrios Unidos":[0,0,0,0,0,0,0,0,0],"La Candelaria":[0,0,0,0,0,0,0,0,0],"Rafael Uribe Uribe":[0,0,0,0,0,0,0,0,0],"Puente Aranda":[0,0,0,0,0,0,0,0,0],Usme:[0,0,0,0,0,0,0,0,0],Teusaquillo:[0,0,0,0,0,0,0,0,0],Tunjuelito:[0,0,0,0,0,0,0,0,0],Bosa:[0,0,0,0,0,0,0,0,0],"Fuera de Bogot\xe1":[0,0,0,0,0,0,0,0,0],"Santa Fe":[0,0,0,0,0,0,0,0,0],"Antonio Nari\xf1o":[0,0,0,0,0,0,0,0,0],"San Crist\xf3bal":[0,0,0,0,0,0,0,0,0],"Los M\xe1rtires":[0,0,0,0,0,0,0,0,0],"Sin Dato":[0,0,0,0,0,0,0,0,0]},n=[],o=[];e.map((function(e){var n=e["Fecha de diagnostico"].split("/"),o=t.split("/"),c=parseInt(n[1])<=parseInt(o[1]),l=D(a)==D(e["Localidad de residencia"].toUpperCase())||"Localidad"===a,s="Fallecido"===e.Estado;if(c&&l&&s){1;for(var i=e["Localidad de residencia"],u=parseInt(e.Edad),d=0;d<9;d++)10*d<=u&&u<=10*d+9&&(r[i][d]+=1)}return null}));for(var c=Object.keys(r),l=function(e){var t=0;c.map((function(a){return t+=r[a][e],null})),o.push(t)},s=0;s<9;s++)l(s);for(var i=0;i<9;i++)n.push("".concat(10*i,"-").concat(10*i+9));return{edades:o,rangos:n}},M=function(e){var t=[],a=[],r=[],n=0,o=[];e.map((function(e){var a=e["Localidad de residencia"];if(r.includes(a)){var o=r.indexOf(a);t[o]=t[o]+1,n+=1}else r.push(a),t.push(1),n+=1;return null})),console.log("localidades: ",r);for(var c=0;c<t.length;c++){var l=3*parseInt(100*t[c]/n*255/100);a[c]=l<=255?-l:255}return o[9]=a[0],o[18]=a[1],o[17]=a[2],o[16]=a[3],o[19]=a[4],o[10]=a[5],o[14]=a[6],o[4]=a[7],o[3]=a[8],o[2]=a[9],o[6]=a[10],o[13]=a[11],o[5]=a[12],o[1]=a[13],o[15]=a[14],o[8]=a[15],o[11]=a[16],o[0]=a[17],o[12]=a[18],o[7]=a[19],{numcasosloc:t,localidades:r,peligrosidad:o}};function D(e){var t={"\xe1":"a","\xe9":"e","\xed":"i","\xf3":"o","\xfa":"u","\xc1":"A","\xc9":"E","\xcd":"I","\xd3":"O","\xda":"U"};return e.split("").map((function(e){return t[e]||e})).join("").toString()}var I,U=function(e){var t=[],a=[];return e.map((function(e){var r=e["Localidad de residencia"];"fuera de bogota"===(r=D(r=r.toLowerCase()))&&(r="sumapaz");var n=e.Estado;if(t.includes(r)){var o=t.indexOf(r);a[o][n]+=1}else a.push({Recuperado:0,Fallecido:0,"Fallecido ":0,Grave:0,Moderado:0,Leve:0}),t.push(r);return null})),{localidades:t,Estados:a}},_=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/coordenadas.csv").then(function(){var e=Object(p.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return a=e.sent,r=R(a.features),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){var t=[];return e.map((function(e){var a={};a[0]=e.properties.LocNombre;var r=function(e){var t=[];return e.map((function(e){var a={};return a.lat=e[1],a.lng=e[0],t.push(a),null})),t}(e.geometry.coordinates[0][0]);return a[1]=r,t.push(a),null})),t},B=document.createElement("script"),J=Object(s.b)((function(e){return{App:e.reducer_app}}),(function(e){return{change:function(t){e(i(t))}}}))((function(e){var t=n.a.createRef(),a=Object(r.useState)(!1),o=Object(l.a)(a,2),c=o[0],s=o[1],i=Object(r.useState)(""),u=Object(l.a)(i,2),b=(u[0],u[1]),v=function(t){e.change(["Localidad",t]),b(t)},y=function(e,t){return n.a.createElement("div",{className:"row",style:{fontFamily:"Lora",width:"400px",height:"180px",textAlign:"center",fontSize:"20px"}},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h3",null," ",e," ")),n.a.createElement("div",{style:{textAlign:"center"},className:"col-md-8"},"Recuperado"),n.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#32a89d",borderRadius:"15px",color:"#ffffff"},className:"col-md-3"},t.Recuperado),n.a.createElement("div",{style:{textAlign:"center"},className:"col-md-8"},"Fallecido"),n.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#c72020",borderRadius:"15px",color:"#ffffff"},className:"col-md-3"},t.Fallecido),n.a.createElement("div",{style:{textAlign:"center"},className:"col-md-8"},"Grave"),n.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#f26863",borderRadius:"15px",color:"#ffffff"},className:"col-md-3"},t.Grave),n.a.createElement("div",{style:{textAlign:"center"},className:"col-md-8"},"Moderado"),n.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#c7bc20",borderRadius:"15px",color:"#ffffff"},className:"col-md-3"},t.Moderado),n.a.createElement("div",{style:{textAlign:"center"},className:"col-md-8"},"Leve"),n.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#6fcc43",borderRadius:"15px",color:"#ffffff"},className:"col-md-3"},t.Leve))};Object(r.useEffect)((function(e){B.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcpnxVkDPet7-hIIVQM0gBMzwfLqb2Jyk&callback=createGoogleMap",window.document.body.appendChild(B),setTimeout((function(){B.addEventListener("load",{googleMap:h(),marker:g({lat:4.638743,lng:-74.085238}),Polygon:x()})}),3e3)}),[c]);var h=function(){s(!0);var e=new window.google.maps.Map(t.current,{zoom:10,center:{lat:4.60971,lng:-74.08175},styles:f,disableDefaultUI:!0});return I=e,e},g=function(e){var t=window.google,a={url:"http://iconsetc.com/icons-watermarks/simple-purple/bfa/bfa_map-marker/bfa_map-marker_simple-purple_512x512.png",scaledSize:new t.maps.Size(50,50)};return new t.maps.Marker({position:e,map:I,icon:a})},x=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,setTimeout((function(){var e=t;console.log(e,"poligons");for(var a=j.getState().reducer_app.Location,r=[],n=0;n<e.length;n++){var o=a.peligrosidad;r.push(E(e[n][1],e[n][0],o[n]))}return r}),4e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(d.a.mark((function e(t,a,r){var n,o,c,l,s,i,u,p,f,m,b;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b=function(e){v(a);var t=k.a.renderToString(y(a,f));m.setContent(t),m.setPosition(e.latLng),m.open(I)},n=window.google,o=255+r,c=new n.maps.Polygon({paths:t,strokeColor:"#147ef7",strokeOpacity:.8,strokeWeight:2,fillColor:"rgb(255,"+o+",0)",fillOpacity:.5}),"candelaria"===(l=a.toLowerCase())&&(l="la candelaria"),e.next=8,A();case 8:return s=e.sent,i=s.localidades,u=s.Estados,p=i.indexOf(l),f=u[p],c.setMap(I),c.addListener("click",b),m=new window.google.maps.InfoWindow({content:""}),e.abrupt("return",c.setMap(I));case 17:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}();return n.a.createElement("div",{id:"google-map",ref:t,style:{width:"100%",height:"600px",borderRadius:"20px"}},n.a.createElement("div",{style:{paddingTop:"250px"}},n.a.createElement(m,{type:"map"})))})),G=a(9),z=a(10),P=a(12),q=a(11),W=a(14),H=function(e){Object(P.a)(a,e);var t=Object(q.a)(a);function a(e){var r;return Object(G.a)(this,a),(r=t.call(this,e)).getData=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(r.props.dateFilter,r.props.localidadFilter);case 2:return t=e.sent,a=r.state.chartData,e.next=6,a.datasets.map((function(e){return e.data=t,null}));case 6:r.setState({chartData:a}),r.setState({dataIsLoaded:!0});case 8:case"end":return e.stop()}}),e)}))),r.state={dataIsLoaded:!1,localidadFilter:r.props.localidadFilter,dateFilter:r.props.dateFilter,chartData:{title:"Distribuci\xf3n de casos por genero",type:"doughnut",labels:["Masculino","Femenino"],datasets:[{data:[0,0],backgroundColor:["#47AEE9","#F186B3"],hoverBackgroundColor:["#47AEE6","#F186B02"]}]}},r}return Object(z.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t,a){e.dateFilter==this.props.dateFilter&&e.localidadFilter==this.props.localidadFilter||(this.setState({dataIsLoaded:!1}),this.getData())}},{key:"render",value:function(){return n.a.createElement("div",{className:"row",style:{height:"0px",paddingTop:"20px"}},n.a.createElement("h5",null,this.state.chartData.title),this.state.dataIsLoaded?n.a.createElement(W.c,{data:this.state.chartData}):n.a.createElement(m,null),n.a.createElement("div",{className:"col-md-10"}))}}]),a}(n.a.Component),K=function(e){Object(P.a)(a,e);var t=Object(q.a)(a);function a(e){var r;return Object(G.a)(this,a),(r=t.call(this,e)).getData=Object(p.a)(d.a.mark((function e(){var t,a,n,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Math.floor(255*Math.random()),a=Math.floor(255*Math.random()),n=Math.floor(255*Math.random()),o=[],c=r.state.chartData,"localidad"!==r.props.type){e.next=14;break}return e.next=8,F();case 8:o=e.sent,c.title="",c.labels=o.localidades,c.datasets.map((function(e){return e.label="numero de personas",e.data=o.numcasosloc,e.backgroundColor="rgba(".concat(t,",").concat(a,",").concat(n,",0.6)"),null})),e.next=28;break;case 14:if("edad"!==r.props.type){e.next=23;break}return e.next=17,L(r.props.dateFilter,r.props.localidadFilter);case 17:o=e.sent,c.title="Distribuci\xf3n de fallecidos por edad",c.labels=o.rangos,c.datasets.map((function(e){return e.label="numero de personas",e.data=o.edades,e.backgroundColor="rgba(".concat(t,",").concat(a,",").concat(n,",0.6)"),null})),e.next=28;break;case 23:return e.next=25,A();case 25:o=e.sent,c.labels=o.rangos,c.datasets.map((function(e){return e.data=o.edades,e.backgroundColor="rgba(".concat(t,",").concat(a,",").concat(n,",0.6)"),null}));case 28:r.setState({chartData:c}),r.setState({dataIsLoaded:!0});case 30:case"end":return e.stop()}}),e)}))),r.state={dataIsLoaded:!1,data:[],Months:["January","February","March","April","May","June","July","August","September","October","November","December"],chartData:{title:"Distribuci\xf3n de casos por ",labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",borderWidth:1,data:[0,0,0,0,0,0,0],borderColor:"rbga(120,120,120,1)"}]}},r}return Object(z.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t,a){e.dateFilter==this.props.dateFilter&&e.localidadFilter==this.props.localidadFilter||(this.setState({dataIsLoaded:!1}),this.getData())}},{key:"render",value:function(){return n.a.createElement("div",{style:{height:"250px",paddingTop:"20px"}},n.a.createElement("h5",null,this.state.chartData.title),this.state.dataIsLoaded?n.a.createElement(W.a,{data:this.state.chartData,width:100,height:50,options:{maintainAspectRatio:!1}}):n.a.createElement(m,null))}}]),a}(n.a.Component),V=(n.a.Component,function(e){Object(P.a)(a,e);var t=Object(q.a)(a);function a(e){var r;return Object(G.a)(this,a),(r=t.call(this,e)).state={},r}return Object(z.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"row",style:{height:"250px",paddingTop:"20px"}},n.a.createElement("div",{className:"col-md-12"}," ",n.a.createElement("h2",null," Distribuci\xf3n de casos por localidad ")," "),n.a.createElement("div",{style:{paddingTop:"-10px"},className:"col-md-12"}," ",n.a.createElement(K,{type:"localidad"})),n.a.createElement("div",{style:{paddingTop:"40px"},className:"col-md-12"}," ",n.a.createElement("h1",null," ",this.props.localidadFilter," ")," "),n.a.createElement("div",{className:"col-md-6"}," ",n.a.createElement(K,{localidadFilter:this.props.localidadFilter,dateFilter:this.props.dateFilter,type:"edad"})),n.a.createElement("div",{className:"col-md-6"}," ",n.a.createElement(H,{localidadFilter:this.props.localidadFilter,dateFilter:this.props.dateFilter})," "))}}]),a}(r.Component)),Q=Object(s.b)((function(e){return{User:e.reducer_user}}),null)(V),$=(a(166),{Marzo:"03",Abril:"04",Mayo:"05",Junio:"06",Julio:"07"}),X=function(e){var t=e.handler,a=Object(r.useState)(123),o=Object(l.a)(a,2),c=o[0],s=o[1],i=Object(r.useState)("Junio"),u=Object(l.a)(i,2),d=u[0],p=u[1],f=Object(r.useState)("30/06/2020"),m=Object(l.a)(f,2),b=m[0],v=m[1],y=function(e,t){return e%31===0?e%31+1:e%31+"/"+$[t]+"/2020"};return n.a.createElement("div",{style:{paddingTop:"15px",paddingBottom:"15px",backgroundColor:"#4888f7",color:"#ffff",borderRadius:20}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-10"},n.a.createElement("input",{onChange:function(e){var a=e.target.value;a<=29&&p("Marzo"),c>29&&p("Abril"),a>61&&p("Mayo"),a>92&&p("Junio"),s(a),v(y(c,d)),t(b)},type:"range",value:c,min:"1",max:"123",className:"slider",list:"tickmarks"})),n.a.createElement("div",{className:"col-md-2"},n.a.createElement("div",{style:{paddingRight:"30px",fontSize:"22px"}},c%31===0?c%31+1:c%31))),n.a.createElement("div",{className:"row",style:{paddingTop:"10px"}},n.a.createElement("div",{className:"col-md-2"},"Marzo"),n.a.createElement("div",{className:"col-md-3"},"Abril"),n.a.createElement("div",{className:"col-md-3"},"Mayo"),n.a.createElement("div",{className:"col-md-2"},"Junio"),n.a.createElement("div",{className:"col-md-2",style:{paddingRight:"50px"}},d)))},Y=function(e){return{type:"CHANGE_DATA",payload:e}},Z=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:a=e.sent,t(Y(["State",a]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ee=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var a,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return a=e.sent,t(Y(["Location",a])),e.next=6,N();case 6:return r=e.sent,t(Y(["Genre",r])),e.next=10,L();case 10:n=e.sent,t(Y(["Age",n]));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},te=Object(s.b)((function(e){return{User:e.reducer_user,App:e.reducer_app}}),(function(e){return{use_all:function(){e(function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(ee()),t(Z());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=Object(r.useState)("7/07/2020"),a=Object(l.a)(t,2),o=a[0],c=a[1],s=e.User,i=Object(r.useState)(),u=Object(l.a)(i,1)[0];return Object(r.useEffect)((function(){setTimeout((function(){e.use_all()}),500)}),[u]),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{style:{paddingTop:"15px"}},n.a.createElement(J,null))),n.a.createElement("div",{className:"col-md-6",style:{paddingTop:"15px"}},n.a.createElement(Q,{localidadFilter:s.Localidad,dateFilter:o}))),n.a.createElement("div",{style:{paddingTop:"20px"},className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(X,{handler:function(e){return c(e)}})),n.a.createElement("div",{className:"col-md-6"}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n.a.createElement(s.a,{store:j},n.a.createElement(te,null));c.a.render(ae,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a(167)},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.0093545f.chunk.js.map