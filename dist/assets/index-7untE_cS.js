import{r as l,j as e,R}from"./react-OZAIt_K0.js";import{c as k}from"./react-dom-BTYGsOOv.js";import{B as s,P as D,a as C,b as d,c as F,d as P,e as U,f as L,g as V,F as E,h as Y,I as G,i as T,j as Z,A as u,T as z,u as N,M as Q,k as J,l as W,m as X,n as O,o as q,p as K,S as _,L as a,q as $,r as g,s as w,t as b,v as S,w as y,x as v,y as B,z as h,C as H,D as p,H as ee,E as se,G as te,J as re,K as ie}from"./@chakra-ui-BigT0_Yl.js";import{d as oe,a as ne,b as Ae,c as ce,e as le,f as ae,g as he,h as pe,i as xe,j as de,k as ue,l as je,m as me}from"./@mui-_bq8HRZH.js";import"./@babel-C_WqewBV.js";import"./scheduler-CzFDRTuY.js";import"./lodash.mergewith-uk_sDCHt.js";import"./@emotion-C3hNW10u.js";import"./hoist-non-react-statics-DQogQWOa.js";import"./stylis-NkKAe6Bn.js";import"./color2k-BSHHkqKj.js";import"./framer-motion-L0_3JmP2.js";import"./react-focus-lock-9JD-Oqec.js";import"./focus-lock-C3lLyJ0E.js";import"./use-sidecar-ik20hIBo.js";import"./tslib-CDuPK5Eb.js";import"./use-callback-ref-Sz5h7H9v.js";import"./react-clientside-effect-BRhEXKx1.js";import"./react-remove-scroll-CFwXx-DJ.js";import"./react-remove-scroll-bar-D0VpJpOy.js";import"./react-style-singleton-D_5nF3mv.js";import"./get-nonce-C-Z93AgS.js";import"./aria-hidden-Cs2EGVrg.js";import"./@popperjs-BQBsAJpH.js";import"./react-fast-compare-C6kM_ueh.js";import"./clsx-B-dksMZM.js";import"./react-is-DcfIKM1A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function A(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=A(t);fetch(t.href,r)}})();function fe(){const[i,o]=l.useState(""),A="./login_cache/";async function c(t){console.log("input =",t.target.elments.help.value);const n=await new Login("${process.env.HUGGINGFACE_EMAIL}","${process.env.HUGGINGFACE_APIKEY}").login(A),m=await new ChatBot(n).chat(t.target.elments.help.value);o(await m.completeResponsePromise()),console.log(i),t.preventDefault()}return e.jsx(s,{sx:{position:"relative",top:"-7pc",left:"42pc"},children:e.jsxs(D,{children:[e.jsx(C,{children:e.jsxs(d,{children:[" ",e.jsx(oe,{})," "]})}),e.jsxs(F,{children:[e.jsx(P,{}),e.jsx(U,{}),e.jsx(L,{children:" Question "}),e.jsxs(V,{children:[e.jsx("form",{onSubmit:c,children:e.jsxs(E,{children:[e.jsx(Y,{children:" How can I help you? "}),e.jsx(G,{type:"text",id:"help"}),e.jsx(T,{children:" We'll like to serve you "}),e.jsx(d,{variant:"ghost",leftIcon:e.jsx(ne,{}),type:"submit",children:" Submit "})]})}),e.jsxs("span",{children:[" ",e.jsxs("strong",{children:[" ",i," "]})]})]})]})]})})}function ge(){const[i,o]=l.useState(null),[A,c]=l.useState(null),[t,r]=l.useState(1),[n,j]=l.useState(1),[m,Ze]=l.useState(1);window.speechSynthesis.onvoiceschanged=function(){const x=window.speechSynthesis.getVoices();console.log("voice == ",x),c(x[3])},l.useEffect(()=>{const x=window.speechSynthesis,f=new SpeechSynthesisUtterance("tapestry allure the magic");return o(f),()=>{x.cancel()}},[]);const M=x=>{const f=window.speechSynthesis;i.voice=A,i.pitch=t,i.volume=m,i.rate=n,console.log("utter = ",i),f.speak(i),x.preventDefault()};return e.jsxs(s,{boxSize:"lg",sx:{position:"relative",top:"5pc",left:"-3pc",width:"90"},children:[e.jsx(Z,{src:"https://element.io/blog/content/images/2021/08/Voice-Messages-blog.jpg"}),e.jsxs(s,{sx:{position:"relative",top:"-5pc"},children:[e.jsxs(d,{onClick:M,sx:{border:"none",borderRadius:"20",color:"green",colorScheme:"teal"},children:[" ",e.jsx(Ae,{})]}),e.jsx(s,{sx:{position:"relative",top:"-2pc",left:"10pc",color:"darkgreen"},children:"Tapestry Allure the magic"})]}),e.jsx(fe,{})]})}const I="/assets/homepage-mHRfBUfH.mp4";function we(){return e.jsx(s,{sx:{position:"relative",top:"2pc"},children:e.jsx(u,{maxW:"720px",maxH:"420px",ratio:1,children:e.jsx("iframe",{src:I,allowFullScreen:!0})})})}const be="data:image/jpeg;base64,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";function Se(){return e.jsx(s,{sx:{position:"relative",top:"-22.5pc",left:"-1pc",fontSize:"x-small",color:"white"},children:e.jsxs("p",{children:[e.jsxs("ul",{children:[e.jsx("li",{children:"Aesthetic Design"}),e.jsx("li",{children:"Voice control"}),e.jsx("li",{children:"Encrypted Network"})]}),e.jsx(s,{sx:{position:"relative",top:"6pc",left:"25pc",color:"darkslategrey",fontSize:"x-large"},children:e.jsx("h2",{children:"Unleash your magic."})}),e.jsx(s,{sx:{position:"relative",top:"6pc",left:"60pc"},children:e.jsx(u,{ratio:3/6,borderRadius:"full",children:e.jsx("iframe",{src:be})})})]})})}function ye(){return e.jsxs(s,{sx:{position:"relative",top:"-156pc",left:"55pc",width:"15pc"},children:[e.jsx("strong",{children:" Exclusive gift with shipment  "}),e.jsx(z,{children:" $500 "})]})}function Ee(){return e.jsxs(s,{sx:{position:"relative",top:"25pc",fontSize:"xx-large"},children:[e.jsx("a",{href:"https://github.com/WisdomEnigma/Roombot",alt:"roombot",target:"_black",children:" roomBot "}),e.jsx(we,{}),e.jsx(Se,{}),e.jsx(ye,{})]})}function ve(){const{isOpen:i,onOpen:o,onClose:A}=N(),r="https://gmail.us21.list-manage.com/subscribe/post?u=f3563ffe13448becd2b60312c&id=d87e9dba2c",n=j=>{j.prventDefault()};return e.jsxs(s,{sx:{position:"relative",top:"5pc"},children:[e.jsx(d,{onClick:o,colorScheme:"teal",variant:"ghost",leftIcon:e.jsx(ce,{}),children:" Subcriber "}),e.jsxs(Q,{isOpen:i,onClose:A,children:[e.jsx(J,{}),e.jsxs(W,{children:[e.jsxs(X,{children:[" ",e.jsx(le,{sx:{position:"relative",top:"0.3pc"}})," Newletters for members "]}),e.jsx(O,{variant:"ghost",onClick:A}),e.jsx(q,{children:e.jsx("form",{action:r,method:"post",onSubmit:n,children:e.jsx(E,{children:e.jsx(d,{variant:"ghost",colorScheme:"facebook",rightIcon:e.jsx(ae,{}),sx:{position:"relative",top:"2pc",left:"1pc"},type:"submit",children:" Subcribe Me "})})})}),e.jsx(K,{})]})]})]})}function Be(){return e.jsxs(s,{sx:{position:"relative",top:"2pc",left:"3pc"},children:[e.jsxs(_,{direction:["column","row"],sx:{color:"darkslategrey"},children:[e.jsxs(a,{href:"https://www.facebook.com/wisdomenigma",isExternal:!0,children:[" ",e.jsx(he,{})," "]}),e.jsxs(a,{href:"https://www.instagram.com/wisdomenigma",isExternal:!0,children:[" ",e.jsx(pe,{})," "]}),e.jsxs(a,{href:"https://www.linkedin.com/company/wisdom-enigma",isExternal:!0,children:[" ",e.jsx(xe,{})," "]}),e.jsxs(a,{href:"https://www.youtube.com/channel/UCziNXOl_swLu-SXWWmjFVNA",isExternal:!0,children:[" ",e.jsx(de,{})," "]}),e.jsxs(a,{href:"https://github.com/WisdomEnigma",isExternal:!0,children:[" ",e.jsx(ue,{})," "]}),e.jsx(a,{href:"https://whatsapp.com/channel/0029VaDMshaEawdwVNfg6H2H",isExternal:!0,children:e.jsx(je,{})})]}),e.jsx(s,{children:e.jsx(ve,{})})]})}function He(){return e.jsxs($,{sx:{position:"relative",top:"-120pc"},children:[e.jsxs(g,{children:[e.jsx(w,{children:" Followers "}),e.jsx(b,{children:" 4K "}),e.jsxs(S,{children:[e.jsx(y,{type:"increase"}),"23.36%"]})]}),e.jsxs(g,{children:[e.jsx(w,{children:" Leads "}),e.jsx(b,{children:" 200 "}),e.jsxs(S,{children:[e.jsx(y,{type:"increase"}),"9.05%"]})]}),e.jsxs(g,{children:[e.jsx(w,{children:" Brand's  "}),e.jsx(b,{children:" 100+ "}),e.jsxs(S,{children:[e.jsx(y,{type:"increase"}),"0.05%"]})]})]})}const Ie="/assets/bmc_qr-QfJRlGPw.png";function Me(){return e.jsx(s,{children:e.jsx(u,{maxW:1024,ratio:1,children:e.jsx("iframe",{src:Ie})})})}function Re(){return e.jsxs(s,{children:[e.jsx("iframe",{src:"https://giphy.com/embed/hX5wZ8zwTqeSeqSaT2",width:"280",height:"280",frameBorder:"0",class:"giphy-embed",allowFullScreen:!0}),e.jsx("p",{children:e.jsx("a",{href:"https://studio.buymeacoffee.com/posts",children:" Coffee with Members "})}),e.jsx("iframe",{src:"https://giphy.com/embed/DXg2wYitNXTKD7Xu8s",width:"280",height:"280",frameBorder:"0",class:"giphy-embed",allowFullScreen:!0}),e.jsx("p",{children:e.jsx("a",{href:"https://www.patreon.com/wisdomengima/shop",children:" Shop with Members "})})]})}function ke(){return e.jsxs(v,{variant:"soft-rounded",colorScheme:"green",sx:{position:"relative",top:"5pc",left:"5pc",width:"100pc",height:"50pc"},children:[e.jsxs(B,{children:[e.jsx(h,{children:" QRcode "}),e.jsx(h,{children:" GIF "})]}),e.jsxs(H,{children:[e.jsxs(p,{children:[e.jsx(Me,{}),e.jsx("p",{sx:{position:"relative",left:"-20pc",top:"-10pc"},children:" Connect people "})]}),e.jsxs(p,{children:[e.jsx("p",{children:" Affliate "}),e.jsx(Re,{})]})]})]})}function De(){return e.jsx("p",{children:"$  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"})}function Ce(){return e.jsx("p",{children:"$  cargo install cargo-make"})}function Fe(){return e.jsx("p",{children:"$ git clone https://github.com/WisdomEnigma/Roombot.git && cd roombot && cargo make roombot"})}function Pe(){return e.jsxs(s,{sx:{position:"relative",top:"5pc",color:"green"},children:[e.jsx("p",{children:"Download Rust on your machine"}),e.jsx(De,{}),e.jsxs(s,{sx:{position:"relative",top:"5pc",color:"blue"},children:["Download Cmake for (Rust)",e.jsx(Ce,{})]}),e.jsxs(s,{sx:{position:"relative",top:"7pc",color:"red"},children:["Congratulation",e.jsx(Fe,{})]})]})}const Ue="/assets/collection_search-BkitbWvh.mp4";function Le(){return e.jsx(s,{sx:{position:"relative",top:"2pc",left:"25pc",color:"darkslategrey"},children:e.jsxs("ul",{children:["Music Studio ",e.jsx("br",{}),"Secure Payment ",e.jsx("br",{}),"Digital Life"]})})}function Ve(){return e.jsx(s,{sx:{position:"relative",top:"5pc",left:"25pc",color:"darkslategrey",fontSize:"x-large"},children:e.jsxs("ul",{children:["Explore the Real Magic ",e.jsx("br",{}),"Every momemt (either virtually or in Reality) will be phenomenal, ",e.jsx("br",{}),"if you enjoy marvelous experience, seemless connection & connect through hearts"]})})}function Ye(){return e.jsxs(s,{sx:{position:"relative",top:"5pc",width:"50pc",height:"30pc",left:"-5pc"},children:[e.jsx(u,{maxW:"720px",maxH:"420px",ratio:1,children:e.jsx("iframe",{src:I,allowFullScreen:!0})}),e.jsxs(s,{sx:{position:"relative",top:"7pc",fontSize:"xx-large"},children:[e.jsx(a,{href:"https://github.com/WisdomEnigma/Roombot/releases",children:" V0.0.4 "}),e.jsx(Le,{})]}),e.jsxs(s,{sx:{position:"relative",top:"10pc",width:"50pc",height:"30pc",left:"-5pc"},children:[e.jsx(u,{maxW:"720px",maxH:"420px",ratio:1,children:e.jsx("iframe",{src:Ue,allowFullScreen:!0})}),e.jsx(Ve,{})]})]})}function Ge(){return e.jsxs(v,{children:[e.jsxs(B,{children:[e.jsxs(h,{children:[" ",e.jsx(ee,{})," "]}),e.jsxs(h,{children:[" ",e.jsx(se,{})," "]}),e.jsxs(h,{children:[" ",e.jsx(te,{})," "]}),e.jsxs(h,{children:[" ",e.jsx(me,{})," "]}),e.jsxs(h,{children:[" ",e.jsx(re,{})," "]})]}),e.jsxs(H,{children:[e.jsxs(p,{children:[e.jsx("p",{children:" Welcome to main page "}),e.jsx(ge,{}),e.jsx(Ee,{}),e.jsx(He,{})]}),e.jsxs(p,{children:[e.jsx("p",{children:" Explore our products "}),e.jsx(Ye,{})]}),e.jsxs(p,{children:[e.jsx("p",{children:" Try it on your machine "}),e.jsx(Pe,{})]}),e.jsxs(p,{children:[e.jsx("p",{children:"Shopify experience"}),e.jsx(ke,{})]}),e.jsxs(p,{children:[e.jsx("p",{children:" Any query "}),e.jsx(Be,{})]})]})]})}function Te(){return e.jsx(e.Fragment,{children:e.jsx(ie,{children:e.jsx(Ge,{})})})}k.createRoot(document.getElementById("root")).render(e.jsx(R.StrictMode,{children:e.jsx(Te,{})}));
