import{m as B}from"./module-error-Ch16hYGc.js";import{b as V}from"./buffer-EBb79ogF.js";var x={},f={};let m=null;var v=function(){return m===null&&(m={textEncoder:new TextEncoder,textDecoder:new TextDecoder}),m},s={},w={};const h=B,L=new Set(["buffer","view","utf8"]);let U=class{constructor(r){if(this.encode=r.encode||this.encode,this.decode=r.decode||this.decode,this.name=r.name||this.name,this.format=r.format||this.format,typeof this.encode!="function")throw new TypeError("The 'encode' property must be a function");if(typeof this.decode!="function")throw new TypeError("The 'decode' property must be a function");if(this.encode=this.encode.bind(this),this.decode=this.decode.bind(this),typeof this.name!="string"||this.name==="")throw new TypeError("The 'name' property must be a string");if(typeof this.format!="string"||!L.has(this.format))throw new TypeError("The 'format' property must be one of 'buffer', 'view', 'utf8'");r.createViewTranscoder&&(this.createViewTranscoder=r.createViewTranscoder),r.createBufferTranscoder&&(this.createBufferTranscoder=r.createBufferTranscoder),r.createUTF8Transcoder&&(this.createUTF8Transcoder=r.createUTF8Transcoder)}get commonName(){return this.name.split("+")[0]}createBufferTranscoder(){throw new h(`Encoding '${this.name}' cannot be transcoded to 'buffer'`,{code:"LEVEL_ENCODING_NOT_SUPPORTED"})}createViewTranscoder(){throw new h(`Encoding '${this.name}' cannot be transcoded to 'view'`,{code:"LEVEL_ENCODING_NOT_SUPPORTED"})}createUTF8Transcoder(){throw new h(`Encoding '${this.name}' cannot be transcoded to 'utf8'`,{code:"LEVEL_ENCODING_NOT_SUPPORTED"})}};w.Encoding=U;const{Buffer:T}=V||{},{Encoding:b}=w,_=v;let y=class extends b{constructor(r){super({...r,format:"buffer"})}createViewTranscoder(){return new E({encode:this.encode,decode:r=>this.decode(T.from(r.buffer,r.byteOffset,r.byteLength)),name:`${this.name}+view`})}createBufferTranscoder(){return this}},E=class extends b{constructor(r){super({...r,format:"view"})}createBufferTranscoder(){return new y({encode:r=>{const t=this.encode(r);return T.from(t.buffer,t.byteOffset,t.byteLength)},decode:this.decode,name:`${this.name}+buffer`})}createViewTranscoder(){return this}},D=class extends b{constructor(r){super({...r,format:"utf8"})}createBufferTranscoder(){return new y({encode:r=>T.from(this.encode(r),"utf8"),decode:r=>this.decode(r.toString("utf8")),name:`${this.name}+buffer`})}createViewTranscoder(){const{textEncoder:r,textDecoder:t}=_();return new E({encode:o=>r.encode(this.encode(o)),decode:o=>this.decode(t.decode(o)),name:`${this.name}+view`})}createUTF8Transcoder(){return this}};s.BufferFormat=y;s.ViewFormat=E;s.UTF8Format=D;const{Buffer:n}=V||{Buffer:{isBuffer:()=>!1}},{textEncoder:$,textDecoder:g}=v(),{BufferFormat:i,ViewFormat:l,UTF8Format:O}=s,d=e=>e;f.utf8=new O({encode:function(e){return n.isBuffer(e)?e.toString("utf8"):ArrayBuffer.isView(e)?g.decode(e):String(e)},decode:d,name:"utf8",createViewTranscoder(){return new l({encode:function(e){return ArrayBuffer.isView(e)?e:$.encode(e)},decode:function(e){return g.decode(e)},name:`${this.name}+view`})},createBufferTranscoder(){return new i({encode:function(e){return n.isBuffer(e)?e:ArrayBuffer.isView(e)?n.from(e.buffer,e.byteOffset,e.byteLength):n.from(String(e),"utf8")},decode:function(e){return e.toString("utf8")},name:`${this.name}+buffer`})}});f.json=new O({encode:JSON.stringify,decode:JSON.parse,name:"json"});f.buffer=new i({encode:function(e){return n.isBuffer(e)?e:ArrayBuffer.isView(e)?n.from(e.buffer,e.byteOffset,e.byteLength):n.from(String(e),"utf8")},decode:d,name:"buffer",createViewTranscoder(){return new l({encode:function(e){return ArrayBuffer.isView(e)?e:n.from(String(e),"utf8")},decode:function(e){return n.from(e.buffer,e.byteOffset,e.byteLength)},name:`${this.name}+view`})}});f.view=new l({encode:function(e){return ArrayBuffer.isView(e)?e:$.encode(e)},decode:d,name:"view",createBufferTranscoder(){return new i({encode:function(e){return n.isBuffer(e)?e:ArrayBuffer.isView(e)?n.from(e.buffer,e.byteOffset,e.byteLength):n.from(String(e),"utf8")},decode:d,name:`${this.name}+buffer`})}});f.hex=new i({encode:function(e){return n.isBuffer(e)?e:n.from(String(e),"hex")},decode:function(e){return e.toString("hex")},name:"hex"});f.base64=new i({encode:function(e){return n.isBuffer(e)?e:n.from(String(e),"base64")},decode:function(e){return e.toString("base64")},name:"base64"});const F=B,a=f,{Encoding:p}=w,{BufferFormat:A,ViewFormat:P,UTF8Format:C}=s,c=Symbol("formats"),u=Symbol("encodings"),I=new Set(["buffer","view","utf8"]);class G{constructor(r){if(Array.isArray(r)){if(!r.every(t=>I.has(t)))throw new TypeError("Format must be one of 'buffer', 'view', 'utf8'")}else throw new TypeError("The first argument 'formats' must be an array");this[u]=new Map,this[c]=new Set(r);for(const t in a)try{this.encoding(t)}catch(o){if(o.code!=="LEVEL_ENCODING_NOT_SUPPORTED")throw o}}encodings(){return Array.from(new Set(this[u].values()))}encoding(r){let t=this[u].get(r);if(t===void 0){if(typeof r=="string"&&r!==""){if(t=M[r],!t)throw new F(`Encoding '${r}' is not found`,{code:"LEVEL_ENCODING_NOT_FOUND"})}else{if(typeof r!="object"||r===null)throw new TypeError("First argument 'encoding' must be a string or object");t=k(r)}const{name:o,format:S}=t;if(!this[c].has(S))if(this[c].has("view"))t=t.createViewTranscoder();else if(this[c].has("buffer"))t=t.createBufferTranscoder();else if(this[c].has("utf8"))t=t.createUTF8Transcoder();else throw new F(`Encoding '${o}' cannot be transcoded`,{code:"LEVEL_ENCODING_NOT_SUPPORTED"});for(const N of[r,o,t.name,t.commonName])this[u].set(N,t)}return t}}x.Transcoder=G;function k(e){if(e instanceof p)return e;const r="type"in e&&typeof e.type=="string"?e.type:void 0,t=e.name||r||`anonymous-${J++}`;switch(R(e)){case"view":return new P({...e,name:t});case"utf8":return new C({...e,name:t});case"buffer":return new A({...e,name:t});default:throw new TypeError("Format must be one of 'buffer', 'view', 'utf8'")}}function R(e){return"format"in e&&e.format!==void 0?e.format:"buffer"in e&&typeof e.buffer=="boolean"?e.buffer?"buffer":"utf8":"code"in e&&Number.isInteger(e.code)?"view":"buffer"}const j={binary:a.buffer,"utf-8":a.utf8},M={...a,...j};let J=0;export{x as l};
