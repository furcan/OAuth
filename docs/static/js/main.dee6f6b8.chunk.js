(this.webpackJsonpoauth=this.webpackJsonpoauth||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),i=n(8),s=n.n(i),a=n(7),o=n(1),u=n.n(o),l=n(3),h=n(6),g=n(4),d=null,_=function(e){var t=e.clientId,n=e.uxMode,r=e.redirectUrl;return new Promise((function(e,c){var i="OAuthGoogleScriptElement";if(window.document.getElementById(i))d?e(!0):c(!1);else{var s='<script id="'.concat(i,'" src="https://apis.google.com/js/api:client.js"><\/script>'),a=window.document.createRange();a.selectNode(window.document.head);var o=a.createContextualFragment(s);window.document.head.appendChild(o);var u=window.document.getElementById(i);u?u.onload=function(){window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:t,cookie_policy:"single_host_origin",fetch_basic_profile:!0,scope:"profile email",ux_mode:n||"popup",redirect_uri:r}),d=window.gapi.auth2.getAuthInstance(),e(!0)}))}:c(!1)}}))},m=function(){return null!==d&&d.isSignedIn.get()},b=function(){if(d){var e=d.currentUser.get().getAuthResponse(),t=d.currentUser.get().getBasicProfile();return{authResponse:e,basicProfile:{id:t.getId(),name:t.getName(),given_name:t.getGivenName(),family_name:t.getFamilyName(),image_url:t.getImageUrl(),email:t.getEmail()}}}return null},p=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.clientId,r=t.uxMode,c=t.redirectUrl,m()){e.next=20;break}return e.prev=2,e.next=5,_({clientId:n,uxMode:r,redirectUrl:c});case 5:if(!e.sent||!d){e.next=12;break}return e.next=9,d.signIn();case 9:return e.abrupt("return",b());case 12:throw Error();case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(2),e.abrupt("return",null);case 18:e.next=22;break;case 20:if(!d){e.next=22;break}return e.abrupt("return",b());case 22:return e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m()||!d){e.next=15;break}return e.prev=1,e.next=4,d.signOut();case 4:if(void 0!==e.sent){e.next=9;break}return e.abrupt("return",!0);case 9:throw Error();case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),w=function e(){Object(g.a)(this,e)};w.Google=function(){return function e(){Object(g.a)(this,e),this.isSignedIn=m,this.signInAsync=p,this.signOutAsync=j}}();var x="998329239587-roe4rd0tdif2j6ia7r1qjgugf4mut1vg.apps.googleusercontent.com",v="popup",f=function e(){Object(g.a)(this,e),this.signInWithGoogleAsync=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new w.Google).signOutAsync();case 3:return t={clientId:x,uxMode:v,redirectUrl:"/OAuth"},e.next=6,(new w.Google).signInAsync(t);case 6:if(!((n=e.sent)instanceof Object)){e.next=13;break}return window.localStorage.setItem("dummy_user_name",n.basicProfile.name),window.localStorage.setItem("dummy_user_avatar",n.basicProfile.image_url),e.abrupt("return",!0);case 13:throw Error();case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),this.signOutAsync=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new w.Google).signOutAsync();case 3:return e.next=5,new Promise((function(e){return setTimeout((function(){return e(!0)}),500)})).then((function(){return window.localStorage.setItem("dummy_user_name",""),window.localStorage.setItem("dummy_user_avatar",""),!0}));case 5:return t=e.sent,e.abrupt("return",t);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))},A=(n(14),n(0));var O=function(){var e=Object(r.useMemo)((function(){return{isLoading:!1,isError:!1,isSuccess:!1}}),[]),t=Object(r.useState)(e),n=Object(h.a)(t,2),c=n[0],i=n[1],s=Object(r.useMemo)((function(){return{isAuthenticated:!1,name:"",avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF29vbVWvwgwAAABdJREFUeJxjYBgFo2AUjIJRMApGAb0BAAeAAAE5TYQiAAAAAElFTkSuQmCC"}}),[]),o=Object(r.useState)(s),g=Object(h.a)(o,2),d=g[0],_=g[1];Object(r.useEffect)((function(){if(c.isSuccess){var e=window.localStorage.getItem("dummy_user_name")||"",t=window.localStorage.getItem("dummy_user_avatar")||"";_({isAuthenticated:e.length>0&&t.length>0,name:e,avatar:t||s.avatar})}}),[c,_,s]);var m=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i({isLoading:!0,isError:!1,isSuccess:!1}),e.next=4,(new f).signInWithGoogleAsync();case 4:if(!e.sent){e.next=9;break}i({isLoading:!1,isError:!1,isSuccess:!0}),e.next=10;break;case 9:throw Error();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),i({isLoading:!1,isError:!0,isSuccess:!1});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i({isLoading:!0,isError:!1,isSuccess:!1}),e.next=4,(new f).signOutAsync();case 4:if(!e.sent){e.next=9;break}i({isLoading:!1,isError:!1,isSuccess:!0}),e.next=10;break;case 9:throw Error();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),i({isLoading:!1,isError:!0,isSuccess:!1});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),p=function(){i(Object(a.a)(Object(a.a)({},c),{},{isError:!0}))},j=d.isAuthenticated?d.name:c.isError?"Upss...":"Sign In",w=d.isAuthenticated?"Welcome.":c.isError?"Something went wrong.... Please try again.":c.isLoading?"Please wait...":"You can sign in using one of the services below.";return Object(A.jsx)("div",{className:"home",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"home__content",children:Object(A.jsxs)("div",{className:"home__signin",children:[Object(A.jsxs)("div",{className:"home__signin__banner ".concat(d.isAuthenticated?"state--authenticated":""),children:[Object(A.jsx)("img",{className:"home__signin__banner__img",src:"".concat("/OAuth","/content/images/signin.png"),width:"640",height:"420",alt:"OAuth"}),Object(A.jsx)("img",{className:"home__signin__banner__avatar",width:"100",height:"100",alt:d.name,src:d.avatar})]}),Object(A.jsx)("h1",{className:"home__signin__title",children:j}),Object(A.jsx)("p",{className:"home__signin__description",children:w}),Object(A.jsxs)("div",{className:"home__signin__content ".concat(c.isLoading?"state--loading":""),children:[Object(A.jsx)("div",{className:"home__signin__content__loading",children:Object(A.jsx)("p",{className:"home__signin__content__loading__message",children:"Please wait..."})}),d.isAuthenticated?Object(A.jsxs)("button",{className:"home__signin__content__button button--google",type:"button",onClick:b,children:[Object(A.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 16 16",className:"home__signin__content__button__icon icon--signout",height:"20",width:"20",xmlns:"http://www.w3.org/2000/svg",children:Object(A.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.02 3.77v1.56l1-.99V2.5l-.5-.5h-9l-.5.5v.486L2 3v10.29l.36.46 5 1.72L8 15v-1h3.52l.5-.5v-1.81l-1-1V13H8V4.71l-.33-.46L4.036 3h6.984v.77zM7 14.28l-4-1.34V3.72l4 1.34v9.22zm6.52-5.8H8.55v-1h4.93l-1.6-1.6.71-.7 2.47 2.46v.71l-2.49 2.48-.7-.7 1.65-1.65z"})}),Object(A.jsx)("span",{children:"Sign Out"})]}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("button",{className:"home__signin__content__button button--google",type:"button",onClick:m,children:[Object(A.jsx)("svg",{className:"home__signin__content__button__icon icon--google",width:"22",height:"22",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(A.jsxs)("g",{children:[Object(A.jsx)("path",{fill:"#FBBB00",d:"M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\tc0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z"}),Object(A.jsx)("path",{fill:"#518EF8",d:"M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\tc-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\tc29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"}),Object(A.jsx)("path",{fill:"#28B446",d:"M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\tc-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"}),Object(A.jsx)("path",{fill:"#F14336",d:"M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z"})]})}),Object(A.jsx)("span",{children:"Sign in with Google"})]}),Object(A.jsxs)("button",{className:"home__signin__content__button button--facebook",type:"button",onClick:p,children:[Object(A.jsx)("svg",{className:"home__signin__content__button__icon icon--facebook",fill:"#4267B2",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(A.jsx)("g",{children:Object(A.jsx)("path",{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})})}),Object(A.jsx)("span",{children:"Sign in with Facebook"})]}),Object(A.jsxs)("button",{className:"home__signin__content__button button--apple",type:"button",onClick:p,disabled:!0,children:[Object(A.jsx)("svg",{className:"home__signin__content__button__icon icon--apple",fill:"#000000",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Object(A.jsx)("g",{children:Object(A.jsx)("path",{d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"})})}),Object(A.jsx)("span",{children:"Sign in with Apple"})]})]})]}),Object(A.jsx)("div",{className:"home__signin__footer",children:Object(A.jsx)("p",{className:"home__signin__footer__text",children:"Copyright ".concat((new Date).getFullYear()," OAuth. All rights reserved.")})})]})})})})};n(16);s.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(O,{})}),document.getElementById("OAuth"))}},[[17,1,2]]]);
//# sourceMappingURL=main.dee6f6b8.chunk.js.map