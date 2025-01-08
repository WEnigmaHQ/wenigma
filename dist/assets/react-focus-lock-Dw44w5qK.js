import{r as a}from"./react-VWm1Us2J.js";import{_ as $,a as Le}from"./@babel-C_WqewBV.js";import{F as xe,a as Ie,m as V,f as z,b as ke,c as Re,d as we,e as Oe,g as We,h as $e,i as Be}from"./focus-lock-C3lLyJ0E.js";import{c as B,a as Ge}from"./use-sidecar-DbH-p37w.js";import{u as _e}from"./use-callback-ref-Dzb8UhFM.js";import{w as Te}from"./react-clientside-effect-HNziPaXB.js";var W={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},J=B({},function(r){var e=r.target,t=r.currentTarget;return{target:e,currentTarget:t}}),K=B(),He=B(),Me=Ge({async:!0,ssr:typeof document<"u"}),De=a.createContext(void 0),Ae=[],Q=a.forwardRef(function(e,t){var n,u=a.useState(),s=u[0],l=u[1],v=a.useRef(),h=a.useRef(!1),c=a.useRef(null),i=a.useState({}),F=i[1],k=e.children,m=e.disabled,o=m===void 0?!1:m,d=e.noFocusGuards,p=d===void 0?!1:d,L=e.persistentFocus,re=L===void 0?!1:L,T=e.crossFrame,ae=T===void 0?!0:T,H=e.autoFocus,ne=H===void 0?!0:H;e.allowTextSelection;var oe=e.group,ue=e.className,se=e.whiteList,ie=e.hasPositiveIndices,M=e.shards,R=M===void 0?Ae:M,D=e.as,ce=D===void 0?"div":D,A=e.lockProps,de=A===void 0?{}:A,fe=e.sideCar,U=e.returnFocus,x=U===void 0?!1:U,le=e.focusOptions,w=e.onActivation,O=e.onDeactivation,ve=a.useState({}),me=ve[0],pe=a.useCallback(function(f){var g=f.captureFocusRestore;if(!c.current){var E,b=(E=document)==null?void 0:E.activeElement;c.current=b,b!==document.body&&(c.current=g(b))}v.current&&w&&w(v.current),h.current=!0,F()},[w]),he=a.useCallback(function(){h.current=!1,O&&O(v.current),F()},[O]),Fe=a.useCallback(function(f){var g=c.current;if(g){var E=(typeof g=="function"?g():g)||document.body,b=typeof x=="function"?x(E):x;if(b){var N=typeof b=="object"?b:void 0;c.current=null,f?Promise.resolve().then(function(){return E.focus(N)}):E.focus(N)}}},[x]),be=a.useCallback(function(f){h.current&&J.useMedium(f)},[]),ge=K.useMedium,Ee=a.useCallback(function(f){v.current!==f&&(v.current=f,l(f))},[]),ye=$((n={},n[xe]=o&&"disabled",n[Ie]=oe,n),de),j=p!==!0,Ce=j&&p!=="tail",Pe=_e([t,Ee]),Se=a.useMemo(function(){return{observed:v,shards:R,enabled:!o,active:h.current}},[o,h.current,R,s]);return a.createElement(a.Fragment,null,j&&[a.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:o?-1:0,style:W}),ie?a.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:o?-1:1,style:W}):null],!o&&a.createElement(fe,{id:me,sideCar:Me,observed:s,disabled:o,persistentFocus:re,crossFrame:ae,autoFocus:ne,whiteList:se,shards:R,onActivation:pe,onDeactivation:he,returnFocus:Fe,focusOptions:le}),a.createElement(ce,$({ref:Pe},ye,{className:ue,onBlur:ge,onFocus:be}),a.createElement(De.Provider,{value:Se},k)),Ce&&a.createElement("div",{"data-focus-guard":!0,tabIndex:o?-1:0,style:W}))});Q.propTypes={};const X=Q;function G(r){setTimeout(r,1)}var Ue=function(e){return e&&"current"in e?e.current:e},je=function(){return document&&document.activeElement===document.body},Ne=function(){return je()||Be()},C=null,y=null,P=null,S=!1,qe=function(){return!0},Ve=function(e){return(C.whiteList||qe)(e)},ze=function(e,t){P={observerNode:e,portaledElement:t}},Je=function(e){return P&&P.portaledElement===e};function q(r,e,t,n){var u=null,s=r;do{var l=n[s];if(l.guard)l.node.dataset.focusAutoGuard&&(u=l);else if(l.lockItem){if(s!==r)return;u=null}else break}while((s+=t)!==e);u&&(u.node.tabIndex=0)}var Ke=function(e){return e?!!S:S==="meanwhile"},Qe=function r(e,t,n){return t&&(t.host===e&&(!t.activeElement||n.contains(t.activeElement))||t.parentNode&&r(e,t.parentNode,n))},Xe=function(e,t){return t.some(function(n){return Qe(e,n,n)})},I=function(){var e=!1;if(C){var t=C,n=t.observed,u=t.persistentFocus,s=t.autoFocus,l=t.shards,v=t.crossFrame,h=t.focusOptions,c=n||P&&P.portaledElement,i=document&&document.activeElement;if(c){var F=[c].concat(l.map(Ue).filter(Boolean));if((!i||Ve(i))&&(u||Ke(v)||!Ne()||!y&&s)&&(c&&!(z(F)||i&&Xe(i,F)||Je(i))&&(document&&!y&&i&&!s?(i.blur&&i.blur(),document.body.focus()):(e=V(F,y,{focusOptions:h}),P={})),S=!1,y=document&&document.activeElement),document&&i!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var k=document&&document.activeElement,m=$e(F),o=m.map(function(d){var p=d.node;return p}).indexOf(k);o>-1&&(m.filter(function(d){var p=d.guard,L=d.node;return p&&L.dataset.focusAutoGuard}).forEach(function(d){var p=d.node;return p.removeAttribute("tabIndex")}),q(o,m.length,1,m),q(o,-1,-1,m))}}}return e},Y=function(e){I()&&e&&(e.stopPropagation(),e.preventDefault())},_=function(){return G(I)},Ye=function(e){var t=e.target,n=e.currentTarget;n.contains(t)||ze(n,t)},Ze=function(){return null},Z=function(){S="just",G(function(){S="meanwhile"})},et=function(){document.addEventListener("focusin",Y),document.addEventListener("focusout",_),window.addEventListener("blur",Z)},tt=function(){document.removeEventListener("focusin",Y),document.removeEventListener("focusout",_),window.removeEventListener("blur",Z)};function rt(r){return r.filter(function(e){var t=e.disabled;return!t})}var ee={moveFocusInside:V,focusInside:z,focusNextElement:ke,focusPrevElement:Re,focusFirstElement:we,focusLastElement:Oe,captureFocusRestore:We};function at(r){var e=r.slice(-1)[0];e&&!C&&et();var t=C,n=t&&e&&e.id===t.id;C=e,t&&!n&&(t.onDeactivation(),r.filter(function(u){var s=u.id;return s===t.id}).length||t.returnFocus(!e)),e?(y=null,(!n||t.observed!==e.observed)&&e.onActivation(ee),I(),G(I)):(tt(),y=null)}J.assignSyncMedium(Ye);K.assignMedium(_);He.assignMedium(function(r){return r(ee)});const nt=Te(rt,at)(Ze);var ot=a.forwardRef(function(e,t){return a.createElement(X,$({sideCar:nt,ref:t},e))}),te=X.propTypes||{};te.sideCar;Le(te,["sideCar"]);ot.propTypes={};export{ot as F};