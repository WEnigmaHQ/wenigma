import{r as d,R as f}from"./react-VWm1Us2J.js";var A=function(e,n){return A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,t){i.__proto__=t}||function(i,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])},A(e,n)},N,m=function(){return m=Object.assign||function(e){for(var n,i=1,t=arguments.length;i<t;i++)for(var r in n=arguments[i])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},m.apply(this,arguments)};function y(e,n){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(i[t[r]]=e[t[r]])}return i}function h(e,n,i,t){return new(i||(i=Promise))(function(r,s){function a(u){try{c(t.next(u))}catch(o){s(o)}}function l(u){try{c(t.throw(u))}catch(o){s(o)}}function c(u){var o;u.done?r(u.value):(o=u.value,o instanceof i?o:new i(function(v){v(o)})).then(a,l)}c((t=t.apply(e,n||[])).next())})}function p(e,n){var i,t,r,s,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(c){return function(u){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(a=0)),a;)try{if(i=1,t&&(r=2&o[0]?t.return:o[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,o[1])).done)return r;switch(t=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,t=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!((r=r.length>0&&r[r.length-1])||o[0]!==6&&o[0]!==2)){a=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(o[0]===6&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(v){o=[6,v],t=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([c,u])}}}function k(e,n,i){if(i||arguments.length===2)for(var t,r=0,s=n.length;r<s;r++)!t&&r in n||(t||(t=Array.prototype.slice.call(n,0,r)),t[r]=n[r]);return e.concat(t||Array.prototype.slice.call(n))}(function(e){e.CONNECTED="connected",e.AUTHORIZATION_EXPIRED="authorization_expired",e.NOT_AUTHORIZED="not_authorized",e.UNKNOWN="unknown"})(N||(N={}));var I,z,D=N,q=function(e){function n(i,t,r){var s=e.call(this,i)||this;return s.code=t,s.type=r,s}return function(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=i}A(i,t),i.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}(n,e),n}(Error);(function(e){e.GET="get",e.POST="post",e.DELETE="delete"})(I||(I={})),function(e){e.UI="ui",e.API="api",e.LOGIN="login",e.LOGOUT="logout",e.GET_LOGIN_STATUS="getLoginStatus",e.GET_AUTH_RESPONSE="getAuthResponse"}(z||(z={}));var O,M={domain:"connect.facebook.net",version:"v15.0",cookie:!1,status:!1,xfbml:!1,language:"en_US",frictionlessRequests:!1,debug:!1,chatSupport:!1,autoLogAppEvents:!0,lazy:!1},H=function(){function e(n){if(!n.appId)throw new Error("You need to set appId");this.options=m(m({},M),n),this.options.lazy||this.init()}return e.prototype.getAppId=function(){return this.options.appId},e.prototype.getFB=function(){return window.FB},e.prototype.init=function(){return h(this,void 0,void 0,function(){var n=this;return p(this,function(i){return this.loadingPromise||(this.loadingPromise=new Promise(function(t){var r=n.options,s=r.domain,a=r.language,l=r.debug,c=r.chatSupport,u=y(r,["domain","language","debug","chatSupport"]);if(window.fbAsyncInit=function(){window.FB.init({appId:u.appId,version:u.version,cookie:u.cookie,status:u.status,xfbml:u.xfbml,frictionlessRequests:u.frictionlessRequests}),t(n)},window.document.getElementById("facebook-jssdk"))return t(n);var o=window.document.createElement("script");o.id="facebook-jssdk",o.async=!0,o.defer=!0,o.crossOrigin="anonymous",o.src="https://".concat(s,"/").concat(a,"/sdk").concat(c?"/xfbml.customerchat":"").concat(l?"/debug":"",".js"),window.document.body.appendChild(o)})),[2,this.loadingPromise]})})},e.prototype.process=function(n,i,t){return i===void 0&&(i=[]),t===void 0&&(t=[]),h(this,void 0,void 0,function(){var r;return p(this,function(s){switch(s.label){case 0:return[4,this.init()];case 1:return s.sent(),r=this.getFB(),[2,new Promise(function(a,l){r[n].apply(r,k(k(k([],i,!1),[function(c){if(c)if(c&&"error"in c){var u=c.error,o=u.code,v=u.type,w=u.message;l(new q(w,o,v))}else a(c);else{if(n===z.UI)return;l(new Error("Response is undefined"))}}],!1),t,!1))})]}})})},e.prototype.ui=function(n){return h(this,void 0,void 0,function(){return p(this,function(i){return[2,this.process(z.UI,[n])]})})},e.prototype.api=function(n,i,t){return i===void 0&&(i=I.GET),t===void 0&&(t={}),h(this,void 0,void 0,function(){return p(this,function(r){return[2,this.process(z.API,[n,i,t])]})})},e.prototype.login=function(n){return h(this,void 0,void 0,function(){var i,t,r,s,a,l,c;return p(this,function(u){return i=n.scope,t=n.authType,r=t===void 0?[]:t,s=n.returnScopes,a=n.rerequest,l=n.reauthorize,c={scope:i},s&&(c.return_scopes=!0),a&&r.push("rerequest"),l&&r.push("reauthenticate"),r.length&&(c.auth_type=r.join(",")),[2,this.process(z.LOGIN,[],[c])]})})},e.prototype.logout=function(){return h(this,void 0,void 0,function(){return p(this,function(n){return[2,this.process(z.LOGOUT)]})})},e.prototype.getLoginStatus=function(){return h(this,void 0,void 0,function(){return p(this,function(n){return[2,this.process(z.GET_LOGIN_STATUS)]})})},e.prototype.getAuthResponse=function(){return h(this,void 0,void 0,function(){return p(this,function(n){return[2,this.process(z.GET_AUTH_RESPONSE)]})})},e.prototype.getTokenDetail=function(n){return h(this,void 0,void 0,function(){var i;return p(this,function(t){switch(t.label){case 0:return(n==null?void 0:n.status)===D.CONNECTED?[2,n.authResponse]:[4,this.getLoginStatus()];case 1:if((i=t.sent()).status===D.CONNECTED)return[2,i.authResponse];throw new Error("Token is undefined")}})})},e.prototype.getProfile=function(n){return h(this,void 0,void 0,function(){return p(this,function(i){return[2,this.api("/me",I.GET,n)]})})},e.prototype.getTokenDetailWithProfile=function(n,i){return h(this,void 0,void 0,function(){var t;return p(this,function(r){switch(r.label){case 0:return[4,this.getTokenDetail(i)];case 1:return t=r.sent(),[4,this.getProfile(n)];case 2:return[2,{profile:r.sent(),tokenDetail:t}]}})})},e.prototype.getToken=function(){return h(this,void 0,void 0,function(){return p(this,function(n){switch(n.label){case 0:return[4,this.getTokenDetail()];case 1:return[2,n.sent().accessToken]}})})},e.prototype.getUserId=function(){return h(this,void 0,void 0,function(){return p(this,function(n){switch(n.label){case 0:return[4,this.getTokenDetail()];case 1:return[2,n.sent().userID]}})})},e.prototype.sendInvite=function(n,i){return h(this,void 0,void 0,function(){return p(this,function(t){return[2,this.ui(m({to:n,method:"apprequests"},i))]})})},e.prototype.postAction=function(n,i,t,r,s){return s===void 0&&(s=!1),h(this,void 0,void 0,function(){var a;return p(this,function(l){return a="/me/".concat(n,":").concat(i,"?").concat(t,"=").concat(encodeURIComponent(r)),s===!0&&(a+="&no_feed_story=true"),[2,this.api(a,I.POST)]})})},e.prototype.getPermissions=function(){return h(this,void 0,void 0,function(){return p(this,function(n){switch(n.label){case 0:return[4,this.api("/me/permissions")];case 1:return[2,n.sent().data]}})})},e.prototype.hasPermissions=function(n){return h(this,void 0,void 0,function(){var i;return p(this,function(t){switch(t.label){case 0:return[4,this.getPermissions()];case 1:return i=t.sent(),[2,n.filter(function(r){return!!i.find(function(s){var a=s.permission;return s.status==="granted"&&a===r})}).length===n.length]}})})},e.prototype.subscribe=function(n,i){return h(this,void 0,void 0,function(){var t=this;return p(this,function(r){switch(r.label){case 0:return[4,this.init()];case 1:return r.sent(),this.getFB().Event.subscribe(n,i),[2,function(){return t.unsubscribe(n,i)}]}})})},e.prototype.unsubscribe=function(n,i){return h(this,void 0,void 0,function(){return p(this,function(t){switch(t.label){case 0:return[4,this.init()];case 1:return t.sent(),this.getFB().Event.unsubscribe(n,i),[2]}})})},e.prototype.parse=function(n){return h(this,void 0,void 0,function(){return p(this,function(i){switch(i.label){case 0:return[4,this.init()];case 1:return i.sent(),n===void 0?this.getFB().XFBML.parse():this.getFB().XFBML.parse(n),[2]}})})},e.prototype.getRequests=function(){return h(this,void 0,void 0,function(){return p(this,function(n){return[2,this.api("/me/apprequests")]})})},e.prototype.removeRequest=function(n){return h(this,void 0,void 0,function(){return p(this,function(i){return[2,this.api(n,I.DELETE)]})})},e.prototype.setAutoGrow=function(){return h(this,void 0,void 0,function(){return p(this,function(n){switch(n.label){case 0:return[4,this.init()];case 1:return n.sent(),this.getFB().Canvas.setAutoGrow(),[2]}})})},e.prototype.paySimple=function(n,i){return i===void 0&&(i=1),h(this,void 0,void 0,function(){return p(this,function(t){return[2,this.ui({method:"pay",action:"purchaseitem",product:n,quantity:i})]})})},e.prototype.pay=function(n,i){return h(this,void 0,void 0,function(){return p(this,function(t){return[2,this.ui(m({method:"pay",action:"purchaseitem",product:n},i))]})})},e}(),B=d.createContext(void 0);function J(e){var n=e.children,i=y(e,["children"]),t=d.useState(!0),r=t[0],s=t[1],a=d.useState(!1),l=a[0],c=a[1],u=d.useState(),o=u[0],v=u[1];function w(){return h(this,void 0,void 0,function(){var b;return p(this,function(g){switch(g.label){case 0:return g.trys.push([0,2,3,4]),O?[2,O.init()]:(c(!1),s(!0),[4,(O=new H(i)).init()]);case 1:return g.sent(),c(!0),[3,4];case 2:return b=g.sent(),v(b),[3,4];case 3:return s(!1),[7];case 4:return[2,O]}})})}d.useEffect(function(){i.lazy||w()},[]);var _={isLoading:r,error:o,init:w,api:l?O:void 0,parse:function(b){return h(this,void 0,void 0,function(){var g;return p(this,function(T){switch(T.label){case 0:return[4,w()];case 1:return(g=T.sent())?[4,g.parse(b)]:[3,3];case 2:T.sent(),T.label=3;case 3:return[2]}})})}};return f.createElement(B.Provider,{value:_},n)}function j(e){e===void 0&&(e={});var n=e.lazy,i=n!==void 0&&n,t=d.useContext(B);if(!t)throw new Error("useFacebook must be used within a FacebookProvider");return d.useEffect(function(){i||t.init()},[i]),t}var W=d.memo(d.forwardRef(function(e,n){var i=e.inline,t=e.children,r=y(e,["inline","children"]),s=i?"span":"div";return f.createElement(s,m({},r,{ref:n}),t)})),E=d.memo(function(e){var n=e.children,i=e.inline,t=y(e,["children","inline"]),r=j().parse,s=d.useState(null),a=s[0],l=s[1],c=d.useCallback(function(u){l(u)},[]);return d.useEffect(function(){a&&r(a)},[a]),f.createElement(W,m({inline:i},t,{ref:c}),n)}),X=!(typeof window>"u"||!window.document||!window.document.createElement);function S(){return X?window.location.href:"https://www.facebook.com"}d.memo(d.forwardRef(function(e,n){var i=e.href,t=i===void 0?S():i,r=e.layout,s=e.colorScheme,a=e.action,l=e.showFaces,c=e.share,u=e.children,o=e.width,v=e.size,w=e.kidDirectedSite,_=e.referral,b=e.lazy,g=y(e,["href","layout","colorScheme","action","showFaces","share","children","width","size","kidDirectedSite","referral","lazy"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-like","data-ref":_,"data-href":t,"data-layout":r,"data-colorscheme":s,"data-action":a,"data-show-faces":l,"data-share":c,"data-width":o,"data-size":v,"data-lazy":b,"data-kid-directed-site":w},g,{ref:n}),u))}));var V=d.memo(d.forwardRef(function(e,n){var i=e.style,t=e.href,r=t===void 0?S():t,s=e.tabs,a=e.hideCover,l=e.width,c=e.height,u=e.showFacepile,o=e.hideCTA,v=e.smallHeader,w=e.adaptContainerWidth,_=e.children,b=e.lazy,g=y(e,["style","href","tabs","hideCover","width","height","showFacepile","hideCTA","smallHeader","adaptContainerWidth","children","lazy"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-page",style:i,"data-tabs":s,"data-hide-cover":a,"data-show-facepile":u,"data-hide-cta":o,"data-href":r,"data-small-header":v,"data-adapt-container-width":w,"data-height":c,"data-width":l,"data-lazy":b},g,{ref:n}),_))}));function K(){var e=j(),n=e.api,i=e.isLoading,t=d.useState(void 0),r=t[0],s=t[1],a=d.useState(!1),l=a[0],c=a[1],u=d.useState(),o=u[0],v=u[1];return{login:function(w,_){return h(this,void 0,void 0,function(){var b,g;return p(this,function(T){switch(T.label){case 0:if(T.trys.push([0,2,3,4]),!n)throw new Error("Facebook API is not initialized");return c(!0),[4,n.login(w)];case 1:if((b=T.sent()).status!==D.CONNECTED)throw new Error("Unauthorized user");return v(b),_==null||_(b),[2,b];case 2:throw g=T.sent(),s(g),g;case 3:return c(!1),[7];case 4:return[2]}})})},error:r,isLoading:i||l,status:o==null?void 0:o.status}}function Y(e){var n=e.children,i=e.asChild,t=i===void 0?"button":i;e.disabled;var r=e.scope,s=e.returnScopes,a=e.authType,l=e.rerequest,c=e.reauthorize,u=e.onError,o=e.onSuccess,v=y(e,["children","asChild","disabled","scope","returnScopes","authType","rerequest","reauthorize","onError","onSuccess"]),w=K(),_=w.isLoading,b=w.login;return f.createElement(t,m({onClick:function(){return h(this,void 0,void 0,function(){var g,T;return p(this,function(R){switch(R.label){case 0:return R.trys.push([0,2,,3]),_?[2]:[4,b({scope:r,returnScopes:s,authType:a,rerequest:l,reauthorize:c})];case 1:return g=R.sent(),o==null||o(g),[3,3];case 2:return T=R.sent(),u==null||u(T),[3,3];case 3:return[2]}})})},disabled:_},v),n)}d.memo(d.forwardRef(function(e,n){var i=e.href,t=e.width,r=e.showText,s=e.lazy,a=e.children,l=y(e,["href","width","showText","lazy","children"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-post","data-href":i,"data-width":t,"data-lazy":s,"data-show-text":r},l,{ref:n}),a))}));d.memo(d.forwardRef(function(e,n){var i=e.href,t=e.width,r=e.showText,s=e.allowFullScreen,a=e.autoPlay,l=e.lazy,c=e.showCaptions,u=e.children,o=y(e,["href","width","showText","allowFullScreen","autoPlay","lazy","showCaptions","children"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-video","data-href":i,"data-width":t,"data-show-text":r,"data-show-captions":c,"data-autoplay":a,"data-lazy":l,"data-allowfullscreen":s},o,{ref:n}),u))}));d.memo(d.forwardRef(function(e,n){var i=e.colorScheme,t=e.href,r=t===void 0?S():t,s=e.numPosts,a=e.orderBy,l=e.width,c=e.children,u=e.mobile,o=e.lazy,v=y(e,["colorScheme","href","numPosts","orderBy","width","children","mobile","lazy"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-comments","data-colorscheme":i,"data-numposts":s,"data-href":r,"data-order-by":a,"data-width":l,"data-skin":i,"data-mobile":u,"data-lazy":o},v,{ref:n}),c))}));d.memo(d.forwardRef(function(e,n){var i=e.href,t=i===void 0?S():i,r=e.children,s=y(e,["href","children"]);return f.createElement(E,{inline:!0},f.createElement("span",m({className:"fb-comments-count","data-href":t},s,{ref:n}),r))}));d.memo(d.forwardRef(function(e,n){var i=e.style,t=e.href,r=t===void 0?S():t,s=e.width,a=e.lazy,l=e.showSocialContext,c=e.showMetaData,u=e.children,o=e.skin,v=y(e,["style","href","width","lazy","showSocialContext","showMetaData","children","skin"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-group",style:i,"data-href":r,"data-width":s,"data-show-social-context":l,"data-show-metadata":c,"data-skin":o,"data-lazy":a},v,{ref:n}),u))}));d.memo(d.forwardRef(function(e,n){var i=e.style,t=e.uri,r=t===void 0?S():t,s=e.lazy,a=e.children,l=y(e,["style","uri","lazy","children"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-save",style:i,"data-uri":r,"data-lazy":s},l,{ref:n}),a))}));d.memo(d.forwardRef(function(e,n){var i=e.style,t=e.href,r=t===void 0?S():t,s=e.lazy,a=e.layout,l=e.size,c=e.children,u=y(e,["style","href","lazy","layout","size","children"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-share-button",style:i,"data-href":r,"data-lazy":s,"data-size":l,"data-layout":a},u,{ref:n}),c))}));d.memo(d.forwardRef(function(e,n){var i=e.children,t=e.pageId,r=e.themeColor,s=e.loggedInGreeting,a=e.loggedOutGreeting,l=e.dataRef,c=e.greetingDialogDisplay,u=e.greetingDialogDelay,o=e.minimized,v=y(e,["children","pageId","themeColor","loggedInGreeting","loggedOutGreeting","dataRef","greetingDialogDisplay","greetingDialogDelay","minimized"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-customerchat",page_id:t,theme_color:r,logged_in_greeting:s,logged_out_greeting:a,greeting_dialog_display:c,greeting_dialog_delay:u,"data-ref":l,minimized:o},v,{ref:n}),i))}));d.memo(d.forwardRef(function(e,n){var i=e.color,t=e.messengerAppId,r=e.pageId,s=e.children,a=e.size,l=e.dataRef,c=y(e,["color","messengerAppId","pageId","children","size","dataRef"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-messengermessageus",messenger_app_id:t,page_id:r,"data-color":i,"data-size":a,"data-ref":l},c,{ref:n}),s))}));d.memo(d.forwardRef(function(e,n){var i=e.origin,t=e.prechecked,r=e.allowLogin,s=e.userRef,a=e.messengerAppId,l=e.pageId,c=e.children,u=e.size,o=e.centerAlign,v=e.skin,w=y(e,["origin","prechecked","allowLogin","userRef","messengerAppId","pageId","children","size","centerAlign","skin"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-messenger-checkbox",messenger_app_id:a,page_id:l,size:u,origin:i,user_ref:s,prechecked:t,allow_login:r,skin:v,center_align:o},w,{ref:n}),c))}));var C;d.memo(d.forwardRef(function(e,n){var i=e.color,t=e.messengerAppId,r=e.pageId,s=e.children,a=e.dataRef,l=e.size,c=e.enforceLogin,u=e.ctaText,o=y(e,["color","messengerAppId","pageId","children","dataRef","size","enforceLogin","ctaText"]);return f.createElement(E,null,f.createElement("div",m({className:"fb-send-to-messenger",messenger_app_id:t,page_id:r,"data-color":i,"data-size":l,"data-ref":a,enforce_login:c,cta_text:u},o,{ref:n}),s))}));(function(e){e.SMALL="small",e.LARGE="large"})(C||(C={}));var L;(function(e){e.STANDARD="standard",e.BUTTON_COUNT="button_count",e.BUTTON="button",e.BOX_COUNT="box_count"})(L||(L={}));var P;(function(e){e.LIGHT="light",e.DARK="dark"})(P||(P={}));var x;(function(e){e.LIKE="like",e.RECOMMEND="recommend"})(x||(x={}));var G;(function(e){e.SOCIAL="social",e.REVERSE_TIME="reverse_time",e.TIME="time"})(G||(G={}));var U;(function(e){e.SMALL="small",e.MEDIUM="medium",e.STANDARD="standard",e.LARGE="large",e.XLARGE="xlarge"})(U||(U={}));var F;(function(e){e.BLUE="blue",e.WHITE="white"})(F||(F={}));export{Y as D,V as N,J as _};