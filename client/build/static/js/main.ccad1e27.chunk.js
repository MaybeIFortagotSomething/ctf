(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),i=n(40),o=n.n(i),s=(n(49),n(50),n(9)),l=n(7),u=n(16),b=n.n(u),j=n(17),d=n(18),h=n(20),m=n(19),p=(n(69),n.p+"static/media/logo.8d853f42.png"),g=(n(26),n(84)),O=n(85),f=n(86),x=n(87),y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).changeColor=function(e){return function(){a.setState({active:e})}},a.state={color_inactive:"#777a82",color_active:"#007bff",active:0},a}return Object(d.a)(n,[{key:"render",value:function(){var e={color:this.state.color_active},t={color:this.state.color_inactive};return Object(a.jsxs)("div",{className:"Header",children:[Object(a.jsx)(s.b,{to:"/",children:Object(a.jsx)("img",{src:p,className:"App-logo",alt:"logo"})}),Object(a.jsxs)("div",{className:"Header-Right",children:[Object(a.jsx)(s.b,{style:0===this.state.active?e:t,onClick:this.changeColor(0),to:"/",children:Object(a.jsx)(g.a,{size:32})}),Object(a.jsx)(s.b,{style:1===this.state.active?e:t,onClick:this.changeColor(1),to:"/Scoreboard",children:Object(a.jsx)(O.a,{size:32})}),Object(a.jsx)(s.b,{style:2===this.state.active?e:t,onClick:this.changeColor(2),to:"/Challenges",children:Object(a.jsx)(f.a,{size:32})}),Object(a.jsx)(s.b,{style:3===this.state.active?e:t,onClick:this.changeColor(3),to:"/Profil",children:Object(a.jsx)(x.a,{size:32})})]})]})}}]),n}(r.Component),v=(r.Component,function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Home"})})}}]),n}(r.Component)),w=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={clients:new Array,clientName:""},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Scoreboard"})})}}]),n}(r.Component),E=n(13);n(75);function C(e){var t=Object(r.useState)(!1),n=Object(E.a)(t,2),c=n[0],i=n[1];return Object(a.jsxs)("div",{id:e.id,className:"Challenge",onClick:function(){document.getElementById(e.id).className=c?"Challenge":"ChallengeOpenned",i(!c)},children:[Object(a.jsx)("h3",{children:"challenge"}),Object(a.jsx)("a",{href:"Challenges",style:{display:c?"":"none"},children:"link"}),Object(a.jsx)("p",{children:"test"})]})}n(76);function k(){return Object(a.jsxs)("div",{className:"Challenges",children:[Object(a.jsx)("h3",{children:"Boot2Root:"}),Object(a.jsx)(C,{id:"1"}),Object(a.jsx)(C,{id:"2"}),Object(a.jsx)(C,{id:"3"}),Object(a.jsx)("h3",{children:"Cryto:"}),Object(a.jsx)(C,{id:"4"}),Object(a.jsx)(C,{id:"5"}),Object(a.jsx)(C,{id:"6"}),Object(a.jsx)(C,{id:"7"}),Object(a.jsx)("h3",{children:"Craking:"}),Object(a.jsx)(C,{id:"8"}),Object(a.jsx)(C,{id:"9"}),Object(a.jsx)(C,{id:"10"})]})}var S=n(15),N=n.n(S),T=n(21),I=n(22);Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_SERVER;function L(e,t){return b.a.post("/api/login",{email:e,password:t},{"Content-Type":"application/json"}).then((function(e){if(200===e.status)return e.data;throw new Error(e.error)}))}function P(){return R.apply(this,arguments)}function R(){return(R=Object(T.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("token")),e.next=3,b.a.get("/api/auth",{headers:{Authorization:"Bearer "+t}}).then((function(e){return e.data})).catch((function(e){401!==e.status||console.log("unauthorized")}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=r.createElement("g",{transform:"rotate(0 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"}))),F=r.createElement("g",{transform:"rotate(30 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"}))),B=r.createElement("g",{transform:"rotate(60 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"}))),D=r.createElement("g",{transform:"rotate(90 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"}))),H=r.createElement("g",{transform:"rotate(120 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"}))),G=r.createElement("g",{transform:"rotate(150 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"}))),J=r.createElement("g",{transform:"rotate(180 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"}))),U=r.createElement("g",{transform:"rotate(210 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"}))),W=r.createElement("g",{transform:"rotate(240 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"}))),K=r.createElement("g",{transform:"rotate(270 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"}))),M=r.createElement("g",{transform:"rotate(300 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"}))),V=r.createElement("g",{transform:"rotate(330 50 50)"},r.createElement("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#b2b2b2"},r.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})));function Y(e,t){var n=e.title,a=e.titleId,c=z(e,["title","titleId"]);return r.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,A,F,B,D,H,G,J,U,W,K,M,V)}var X=r.forwardRef(Y);n.p,n(78);function q(){var e=Object(r.useState)({name:"",email:"",password:"",admin:!1,activated:!0}),t=Object(E.a)(e,2),n=t[0],c=(t[1],Object(r.useState)(!1)),i=Object(E.a)(c,2),o=i[0],s=i[1],u=Object(l.g)();function b(){return(b=Object(T.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){function e(){return(e=Object(T.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,n.name=t.name,n.email=t.email,n.password=t.password,n.admin=t.admin,n.activated=t.activated,s(!0),console.log(n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log("mounted profil"),function(){e.apply(this,arguments)}(),function(){console.log("will unmount")}}),[n]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Profil"}),Object(a.jsx)("div",{id:"loader",style:{display:o?"none":"block"},children:Object(a.jsx)(X,{})}),Object(a.jsxs)("div",{id:"content",style:{display:o?"block":"none"},children:[Object(a.jsx)("h2",{children:n.name}),Object(a.jsx)("h2",{children:n.email}),Object(a.jsx)("h2",{children:n.admin})]}),Object(a.jsx)(I.a,{className:"btn",type:"submit",onClick:function(){localStorage.removeItem("token"),u.push("/"),window.location.reload()},children:"Deconnexion"}),Object(a.jsx)(I.a,{className:"btn",type:"submit",onClick:function(){return b.apply(this,arguments)},children:"getUser"})]})}var Q=n(8),Z=(n(79),n.p+"static/media/logo.1f04e18a.ico");function $(){var e=Object(r.useState)(""),t=Object(E.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),o=Object(E.a)(i,2),s=o[0],u=o[1],b=Object(l.g)();var j=function(){var e=Object(T.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,L(n,s);case 4:"Wrong email or password"===(a=e.sent)||(localStorage.setItem("token",JSON.stringify(a.token)),b.push("/")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),alert("Error logging in please try again");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"Login",children:[Object(a.jsx)("img",{src:Z,alt:"logo",className:"logo-img"}),Object(a.jsxs)(Q.a,{onSubmit:j,children:[Object(a.jsxs)(Q.a.Group,{size:"lg",controlId:"email",children:[Object(a.jsx)(Q.a.Label,{children:"Email"}),Object(a.jsx)(Q.a.Control,{autoFocus:!0,type:"email",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(a.jsxs)(Q.a.Group,{size:"lg",controlId:"password",children:[Object(a.jsx)(Q.a.Label,{children:"Password"}),Object(a.jsx)(Q.a.Control,{type:"password",value:s,onChange:function(e){return u(e.target.value)}})]}),Object(a.jsx)(I.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&s.length>0),children:"Login"}),Object(a.jsx)("a",{href:"/Register",children:"Register"})]})]})}var ee=n(23),te=n(42),ne=function(e){var t=e.component,n=Object(te.a)(e,["component"]),r=function(){var e=JSON.parse(localStorage.getItem("token"));return null!==e&&""!==e&&b.a.get("/api/auth",{headers:{Authorization:"Bearer "+e}}).then((function(e,t){return 200===e.status})).catch((function(e){if(401===e.response.status)return console.log("unauthorized"),!1}))}();return Object(a.jsx)(l.b,Object(ee.a)(Object(ee.a)({},n),{},{render:function(e){return r?Object(a.jsx)(t,Object(ee.a)({},e)):Object(a.jsx)(l.a,{to:{pathname:"/Login",state:{from:e.location}}})}}))};function ae(){return Object(a.jsx)("div",{children:Object(a.jsxs)(s.a,{children:[Object(a.jsx)(y,{}),Object(a.jsx)(l.b,{exact:!0,path:"/",component:v}),Object(a.jsx)(l.b,{exact:!0,path:"/News",component:v}),Object(a.jsx)(l.b,{path:"/Challenges",component:k}),Object(a.jsx)(l.b,{path:"/Scoreboard",component:w}),Object(a.jsx)(l.b,{path:"/Profil",component:q})]})})}n(81);function re(){var e=Object(r.useState)(""),t=Object(E.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),o=Object(E.a)(i,2),s=o[0],l=o[1],u=Object(r.useState)(""),j=Object(E.a)(u,2),d=j[0],h=j[1];return Object(a.jsxs)("div",{className:"Login",children:[Object(a.jsx)("img",{src:Z,alt:"logo",className:"logo-img"}),Object(a.jsxs)(Q.a,{onSubmit:function(e){e.preventDefault();var t={name:n,email:s,password:d};console.log(t),b.a.post("/api/register",t).then((function(e){console.log(e.data)})).catch((function(e){console.error("Error")}))},children:[Object(a.jsxs)(Q.a.Group,{size:"lg",controlId:"email",children:[Object(a.jsx)(Q.a.Label,{children:"Username"}),Object(a.jsx)(Q.a.Control,{autoFocus:!0,value:n,onChange:function(e){return c(e.target.value)}})]}),Object(a.jsxs)(Q.a.Group,{size:"lg",controlId:"email",children:[Object(a.jsx)(Q.a.Label,{children:"Email"}),Object(a.jsx)(Q.a.Control,{autoFocus:!0,type:"email",value:s,onChange:function(e){return l(e.target.value)}})]}),Object(a.jsxs)(Q.a.Group,{size:"lg",controlId:"password",children:[Object(a.jsx)(Q.a.Label,{children:"Password"}),Object(a.jsx)(Q.a.Control,{type:"password",value:d,onChange:function(e){return h(e.target.value)}})]}),Object(a.jsx)(I.a,{block:!0,size:"lg",type:"submit",disabled:!(s.length>0&&d.length>0&&n.length>0),children:"Register"}),Object(a.jsx)("a",{href:"/Login",children:"Login"})]})]})}function ce(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(s.a,{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(ne,{exact:!0,path:"/",component:ae}),Object(a.jsx)(l.b,{exact:!0,path:"/Login",component:$}),Object(a.jsx)(l.b,{exact:!0,path:"/Register",component:re})]})})})}var ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},oe=(n.p,n.p,n.p+"static/media/wallpaper.cb407787.jpg");document.body.style.backgroundImage="url(".concat(oe,")"),document.body.style.color="#fefefe",document.body.style.overflowY="scroll",o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ce,{})}),document.getElementById("root")),ie()}},[[82,1,2]]]);
//# sourceMappingURL=main.ccad1e27.chunk.js.map