(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _o(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ye={},Hn=[],bt=()=>{},ff=()=>!1,$i=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yo=t=>t.startsWith("onUpdate:"),Fe=Object.assign,vo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},df=Object.prototype.hasOwnProperty,ge=(t,e)=>df.call(t,e),ne=Array.isArray,Vn=t=>Wi(t)==="[object Map]",Ec=t=>Wi(t)==="[object Set]",re=t=>typeof t=="function",Ae=t=>typeof t=="string",ln=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",wc=t=>(we(t)||re(t))&&re(t.then)&&re(t.catch),Ic=Object.prototype.toString,Wi=t=>Ic.call(t),pf=t=>Wi(t).slice(8,-1),bc=t=>Wi(t)==="[object Object]",Eo=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tr=_o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ki=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gf=/-(\w)/g,ot=Ki(t=>t.replace(gf,(e,n)=>n?n.toUpperCase():"")),mf=/\B([A-Z])/g,cn=Ki(t=>t.replace(mf,"-$1").toLowerCase()),Gi=Ki(t=>t.charAt(0).toUpperCase()+t.slice(1)),Is=Ki(t=>t?`on${Gi(t)}`:""),rn=(t,e)=>!Object.is(t,e),yi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Tc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ks=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $a;const zi=()=>$a||($a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wo(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ae(r)?Ef(r):wo(r);if(s)for(const o in s)e[o]=s[o]}return e}else if(Ae(t)||we(t))return t}const _f=/;(?![^(]*\))/g,yf=/:([^]+)/,vf=/\/\*[^]*?\*\//g;function Ef(t){const e={};return t.replace(vf,"").split(_f).forEach(n=>{if(n){const r=n.split(yf);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zt(t){let e="";if(Ae(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=Zt(t[n]);r&&(e+=r+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",If=_o(wf);function Sc(t){return!!t||t===""}const Ac=t=>!!(t&&t.__v_isRef===!0),In=t=>Ae(t)?t:t==null?"":ne(t)||we(t)&&(t.toString===Ic||!re(t.toString))?Ac(t)?In(t.value):JSON.stringify(t,Rc,2):String(t),Rc=(t,e)=>Ac(e)?Rc(t,e.value):Vn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],o)=>(n[bs(r,o)+" =>"]=s,n),{})}:Ec(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bs(n))}:ln(e)?bs(e):we(e)&&!ne(e)&&!bc(e)?String(e):e,bs=(t,e="")=>{var n;return ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class bf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ye,!e&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ye;try{return Ye=this,e()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Tf(){return Ye}let ve;const Ts=new WeakSet;class Cc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&Ye.active&&Ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ts.has(this)&&(Ts.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Oc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wa(this),kc(this);const e=ve,n=pt;ve=this,pt=!0;try{return this.fn()}finally{Nc(this),ve=e,pt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)To(e);this.deps=this.depsTail=void 0,Wa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ts.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gs(this)&&this.run()}get dirty(){return Gs(this)}}let Pc=0,Sr,Ar;function Oc(t,e=!1){if(t.flags|=8,e){t.next=Ar,Ar=t;return}t.next=Sr,Sr=t}function Io(){Pc++}function bo(){if(--Pc>0)return;if(Ar){let e=Ar;for(Ar=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Sr;){let e=Sr;for(Sr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function kc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Nc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),To(r),Sf(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Gs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Dc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Dc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xr))return;t.globalVersion=xr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Gs(t)){t.flags&=-3;return}const n=ve,r=pt;ve=t,pt=!0;try{kc(t);const s=t.fn(t._value);(e.version===0||rn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ve=n,pt=r,Nc(t),t.flags&=-3}}function To(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)To(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Sf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let pt=!0;const Lc=[];function un(){Lc.push(pt),pt=!1}function hn(){const t=Lc.pop();pt=t===void 0?!0:t}function Wa(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ve;ve=void 0;try{e()}finally{ve=n}}}let xr=0;class Af{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class So{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ve||!pt||ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ve)n=this.activeLink=new Af(ve,this),ve.deps?(n.prevDep=ve.depsTail,ve.depsTail.nextDep=n,ve.depsTail=n):ve.deps=ve.depsTail=n,xc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ve.depsTail,n.nextDep=void 0,ve.depsTail.nextDep=n,ve.depsTail=n,ve.deps===n&&(ve.deps=r)}return n}trigger(e){this.version++,xr++,this.notify(e)}notify(e){Io();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bo()}}}function xc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)xc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zs=new WeakMap,Tn=Symbol(""),qs=Symbol(""),Mr=Symbol("");function Le(t,e,n){if(pt&&ve){let r=zs.get(t);r||zs.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new So),s.map=r,s.key=n),s.track()}}function kt(t,e,n,r,s,o){const a=zs.get(t);if(!a){xr++;return}const c=h=>{h&&h.trigger()};if(Io(),e==="clear")a.forEach(c);else{const h=ne(t),d=h&&Eo(n);if(h&&n==="length"){const p=Number(r);a.forEach((_,T)=>{(T==="length"||T===Mr||!ln(T)&&T>=p)&&c(_)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),d&&c(a.get(Mr)),e){case"add":h?d&&c(a.get("length")):(c(a.get(Tn)),Vn(t)&&c(a.get(qs)));break;case"delete":h||(c(a.get(Tn)),Vn(t)&&c(a.get(qs)));break;case"set":Vn(t)&&c(a.get(Tn));break}}bo()}function Mn(t){const e=pe(t);return e===t?e:(Le(e,"iterate",Mr),st(t)?e:e.map(xe))}function qi(t){return Le(t=pe(t),"iterate",Mr),t}const Rf={__proto__:null,[Symbol.iterator](){return Ss(this,Symbol.iterator,xe)},concat(...t){return Mn(this).concat(...t.map(e=>ne(e)?Mn(e):e))},entries(){return Ss(this,"entries",t=>(t[1]=xe(t[1]),t))},every(t,e){return Ct(this,"every",t,e,void 0,arguments)},filter(t,e){return Ct(this,"filter",t,e,n=>n.map(xe),arguments)},find(t,e){return Ct(this,"find",t,e,xe,arguments)},findIndex(t,e){return Ct(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ct(this,"findLast",t,e,xe,arguments)},findLastIndex(t,e){return Ct(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ct(this,"forEach",t,e,void 0,arguments)},includes(...t){return As(this,"includes",t)},indexOf(...t){return As(this,"indexOf",t)},join(t){return Mn(this).join(t)},lastIndexOf(...t){return As(this,"lastIndexOf",t)},map(t,e){return Ct(this,"map",t,e,void 0,arguments)},pop(){return mr(this,"pop")},push(...t){return mr(this,"push",t)},reduce(t,...e){return Ka(this,"reduce",t,e)},reduceRight(t,...e){return Ka(this,"reduceRight",t,e)},shift(){return mr(this,"shift")},some(t,e){return Ct(this,"some",t,e,void 0,arguments)},splice(...t){return mr(this,"splice",t)},toReversed(){return Mn(this).toReversed()},toSorted(t){return Mn(this).toSorted(t)},toSpliced(...t){return Mn(this).toSpliced(...t)},unshift(...t){return mr(this,"unshift",t)},values(){return Ss(this,"values",xe)}};function Ss(t,e,n){const r=qi(t),s=r[e]();return r!==t&&!st(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const Cf=Array.prototype;function Ct(t,e,n,r,s,o){const a=qi(t),c=a!==t&&!st(t),h=a[e];if(h!==Cf[e]){const _=h.apply(t,o);return c?xe(_):_}let d=n;a!==t&&(c?d=function(_,T){return n.call(this,xe(_),T,t)}:n.length>2&&(d=function(_,T){return n.call(this,_,T,t)}));const p=h.call(a,d,r);return c&&s?s(p):p}function Ka(t,e,n,r){const s=qi(t);let o=n;return s!==t&&(st(t)?n.length>3&&(o=function(a,c,h){return n.call(this,a,c,h,t)}):o=function(a,c,h){return n.call(this,a,xe(c),h,t)}),s[e](o,...r)}function As(t,e,n){const r=pe(t);Le(r,"iterate",Mr);const s=r[e](...n);return(s===-1||s===!1)&&Co(n[0])?(n[0]=pe(n[0]),r[e](...n)):s}function mr(t,e,n=[]){un(),Io();const r=pe(t)[e].apply(t,n);return bo(),hn(),r}const Pf=_o("__proto__,__v_isRef,__isVue"),Mc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ln));function Of(t){ln(t)||(t=String(t));const e=pe(this);return Le(e,"has",t),e.hasOwnProperty(t)}class Uc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?Hf:Vc:o?Hc:jc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ne(e);if(!s){let h;if(a&&(h=Rf[n]))return h;if(n==="hasOwnProperty")return Of}const c=Reflect.get(e,n,Ue(e)?e:r);return(ln(n)?Mc.has(n):Pf(n))||(s||Le(e,"get",n),o)?c:Ue(c)?a&&Eo(n)?c:c.value:we(c)?s?$c(c):Ji(c):c}}class Fc extends Uc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let o=e[n];if(!this._isShallow){const h=Sn(o);if(!st(r)&&!Sn(r)&&(o=pe(o),r=pe(r)),!ne(e)&&Ue(o)&&!Ue(r))return h?!1:(o.value=r,!0)}const a=ne(e)&&Eo(n)?Number(n)<e.length:ge(e,n),c=Reflect.set(e,n,r,Ue(e)?e:s);return e===pe(s)&&(a?rn(r,o)&&kt(e,"set",n,r):kt(e,"add",n,r)),c}deleteProperty(e,n){const r=ge(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&kt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ln(n)||!Mc.has(n))&&Le(e,"has",n),r}ownKeys(e){return Le(e,"iterate",ne(e)?"length":Tn),Reflect.ownKeys(e)}}class kf extends Uc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Nf=new Fc,Df=new kf,Lf=new Fc(!0);const Js=t=>t,di=t=>Reflect.getPrototypeOf(t);function xf(t,e,n){return function(...r){const s=this.__v_raw,o=pe(s),a=Vn(o),c=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,d=s[t](...r),p=n?Js:e?Xs:xe;return!e&&Le(o,"iterate",h?qs:Tn),{next(){const{value:_,done:T}=d.next();return T?{value:_,done:T}:{value:c?[p(_[0]),p(_[1])]:p(_),done:T}},[Symbol.iterator](){return this}}}}function pi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Mf(t,e){const n={get(s){const o=this.__v_raw,a=pe(o),c=pe(s);t||(rn(s,c)&&Le(a,"get",s),Le(a,"get",c));const{has:h}=di(a),d=e?Js:t?Xs:xe;if(h.call(a,s))return d(o.get(s));if(h.call(a,c))return d(o.get(c));o!==a&&o.get(s)},get size(){const s=this.__v_raw;return!t&&Le(pe(s),"iterate",Tn),Reflect.get(s,"size",s)},has(s){const o=this.__v_raw,a=pe(o),c=pe(s);return t||(rn(s,c)&&Le(a,"has",s),Le(a,"has",c)),s===c?o.has(s):o.has(s)||o.has(c)},forEach(s,o){const a=this,c=a.__v_raw,h=pe(c),d=e?Js:t?Xs:xe;return!t&&Le(h,"iterate",Tn),c.forEach((p,_)=>s.call(o,d(p),d(_),a))}};return Fe(n,t?{add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear")}:{add(s){!e&&!st(s)&&!Sn(s)&&(s=pe(s));const o=pe(this);return di(o).has.call(o,s)||(o.add(s),kt(o,"add",s,s)),this},set(s,o){!e&&!st(o)&&!Sn(o)&&(o=pe(o));const a=pe(this),{has:c,get:h}=di(a);let d=c.call(a,s);d||(s=pe(s),d=c.call(a,s));const p=h.call(a,s);return a.set(s,o),d?rn(o,p)&&kt(a,"set",s,o):kt(a,"add",s,o),this},delete(s){const o=pe(this),{has:a,get:c}=di(o);let h=a.call(o,s);h||(s=pe(s),h=a.call(o,s)),c&&c.call(o,s);const d=o.delete(s);return h&&kt(o,"delete",s,void 0),d},clear(){const s=pe(this),o=s.size!==0,a=s.clear();return o&&kt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=xf(s,t,e)}),n}function Ao(t,e){const n=Mf(t,e);return(r,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,o)}const Uf={get:Ao(!1,!1)},Ff={get:Ao(!1,!0)},jf={get:Ao(!0,!1)};const jc=new WeakMap,Hc=new WeakMap,Vc=new WeakMap,Hf=new WeakMap;function Vf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bf(t){return t.__v_skip||!Object.isExtensible(t)?0:Vf(pf(t))}function Ji(t){return Sn(t)?t:Ro(t,!1,Nf,Uf,jc)}function Bc(t){return Ro(t,!1,Lf,Ff,Hc)}function $c(t){return Ro(t,!0,Df,jf,Vc)}function Ro(t,e,n,r,s){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=s.get(t);if(o)return o;const a=Bf(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function Bn(t){return Sn(t)?Bn(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function st(t){return!!(t&&t.__v_isShallow)}function Co(t){return t?!!t.__v_raw:!1}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function $f(t){return!ge(t,"__v_skip")&&Object.isExtensible(t)&&Tc(t,"__v_skip",!0),t}const xe=t=>we(t)?Ji(t):t,Xs=t=>we(t)?$c(t):t;function Ue(t){return t?t.__v_isRef===!0:!1}function Wf(t){return Wc(t,!1)}function Kf(t){return Wc(t,!0)}function Wc(t,e){return Ue(t)?t:new Gf(t,e)}class Gf{constructor(e,n){this.dep=new So,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:pe(e),this._value=n?e:xe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||st(e)||Sn(e);e=r?e:pe(e),rn(e,n)&&(this._rawValue=e,this._value=r?e:xe(e),this.dep.trigger())}}function $n(t){return Ue(t)?t.value:t}const zf={get:(t,e,n)=>e==="__v_raw"?t:$n(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Kc(t){return Bn(t)?t:new Proxy(t,zf)}class qf{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new So(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return Oc(this,!0),!0}get value(){const e=this.dep.track();return Dc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jf(t,e,n=!1){let r,s;return re(t)?r=t:(r=t.get,s=t.set),new qf(r,s,n)}const gi={},Ri=new WeakMap;let En;function Xf(t,e=!1,n=En){if(n){let r=Ri.get(n);r||Ri.set(n,r=[]),r.push(t)}}function Yf(t,e,n=ye){const{immediate:r,deep:s,once:o,scheduler:a,augmentJob:c,call:h}=n,d=W=>s?W:st(W)||s===!1||s===0?Nt(W,1):Nt(W);let p,_,T,C,L=!1,U=!1;if(Ue(t)?(_=()=>t.value,L=st(t)):Bn(t)?(_=()=>d(t),L=!0):ne(t)?(U=!0,L=t.some(W=>Bn(W)||st(W)),_=()=>t.map(W=>{if(Ue(W))return W.value;if(Bn(W))return d(W);if(re(W))return h?h(W,2):W()})):re(t)?e?_=h?()=>h(t,2):t:_=()=>{if(T){un();try{T()}finally{hn()}}const W=En;En=p;try{return h?h(t,3,[C]):t(C)}finally{En=W}}:_=bt,e&&s){const W=_,oe=s===!0?1/0:s;_=()=>Nt(W(),oe)}const z=Tf(),J=()=>{p.stop(),z&&z.active&&vo(z.effects,p)};if(o&&e){const W=e;e=(...oe)=>{W(...oe),J()}}let $=U?new Array(t.length).fill(gi):gi;const G=W=>{if(!(!(p.flags&1)||!p.dirty&&!W))if(e){const oe=p.run();if(s||L||(U?oe.some((ue,w)=>rn(ue,$[w])):rn(oe,$))){T&&T();const ue=En;En=p;try{const w=[oe,$===gi?void 0:U&&$[0]===gi?[]:$,C];h?h(e,3,w):e(...w),$=oe}finally{En=ue}}}else p.run()};return c&&c(G),p=new Cc(_),p.scheduler=a?()=>a(G,!1):G,C=W=>Xf(W,!1,p),T=p.onStop=()=>{const W=Ri.get(p);if(W){if(h)h(W,4);else for(const oe of W)oe();Ri.delete(p)}},e?r?G(!0):$=p.run():a?a(G.bind(null,!0),!0):p.run(),J.pause=p.pause.bind(p),J.resume=p.resume.bind(p),J.stop=J,J}function Nt(t,e=1/0,n){if(e<=0||!we(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ue(t))Nt(t.value,e,n);else if(ne(t))for(let r=0;r<t.length;r++)Nt(t[r],e,n);else if(Ec(t)||Vn(t))t.forEach(r=>{Nt(r,e,n)});else if(bc(t)){for(const r in t)Nt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Nt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kr(t,e,n,r){try{return r?t(...r):t()}catch(s){Xi(s,e,n)}}function St(t,e,n,r){if(re(t)){const s=Kr(t,e,n,r);return s&&wc(s)&&s.catch(o=>{Xi(o,e,n)}),s}if(ne(t)){const s=[];for(let o=0;o<t.length;o++)s.push(St(t[o],e,n,r));return s}}function Xi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ye;if(e){let c=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p){for(let _=0;_<p.length;_++)if(p[_](t,h,d)===!1)return}c=c.parent}if(o){un(),Kr(o,null,10,[t,h,d]),hn();return}}Qf(t,n,s,r,a)}function Qf(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const $e=[];let vt=-1;const Wn=[];let Xt=null,Un=0;const Gc=Promise.resolve();let Ci=null;function zc(t){const e=Ci||Gc;return t?e.then(this?t.bind(this):t):e}function Zf(t){let e=vt+1,n=$e.length;for(;e<n;){const r=e+n>>>1,s=$e[r],o=Ur(s);o<t||o===t&&s.flags&2?e=r+1:n=r}return e}function Po(t){if(!(t.flags&1)){const e=Ur(t),n=$e[$e.length-1];!n||!(t.flags&2)&&e>=Ur(n)?$e.push(t):$e.splice(Zf(e),0,t),t.flags|=1,qc()}}function qc(){Ci||(Ci=Gc.then(Xc))}function ed(t){ne(t)?Wn.push(...t):Xt&&t.id===-1?Xt.splice(Un+1,0,t):t.flags&1||(Wn.push(t),t.flags|=1),qc()}function Ga(t,e,n=vt+1){for(;n<$e.length;n++){const r=$e[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;$e.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Jc(t){if(Wn.length){const e=[...new Set(Wn)].sort((n,r)=>Ur(n)-Ur(r));if(Wn.length=0,Xt){Xt.push(...e);return}for(Xt=e,Un=0;Un<Xt.length;Un++){const n=Xt[Un];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xt=null,Un=0}}const Ur=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Xc(t){try{for(vt=0;vt<$e.length;vt++){const e=$e[vt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Kr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vt<$e.length;vt++){const e=$e[vt];e&&(e.flags&=-2)}vt=-1,$e.length=0,Jc(),Ci=null,($e.length||Wn.length)&&Xc()}}let Qe=null,Yc=null;function Pi(t){const e=Qe;return Qe=t,Yc=t&&t.type.__scopeId||null,e}function td(t,e=Qe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&rl(-1);const o=Pi(e);let a;try{a=t(...s)}finally{Pi(o),r._d&&rl(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function vr(t,e){if(Qe===null)return t;const n=es(Qe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,h=ye]=e[s];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&Nt(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:c,modifiers:h}))}return t}function yn(t,e,n,r){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let h=c.dir[r];h&&(un(),St(h,n,8,[t.el,c,t,e]),hn())}}const nd=Symbol("_vte"),rd=t=>t.__isTeleport;function Oo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Oo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Qc(t,e){return re(t)?Fe({name:t.name},e,{setup:t}):t}function Zc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Oi(t,e,n,r,s=!1){if(ne(t)){t.forEach((L,U)=>Oi(L,e&&(ne(e)?e[U]:e),n,r,s));return}if(Rr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Oi(t,e,n,r.component.subTree);return}const o=r.shapeFlag&4?es(r.component):r.el,a=s?null:o,{i:c,r:h}=t,d=e&&e.r,p=c.refs===ye?c.refs={}:c.refs,_=c.setupState,T=pe(_),C=_===ye?()=>!1:L=>ge(T,L);if(d!=null&&d!==h&&(Ae(d)?(p[d]=null,C(d)&&(_[d]=null)):Ue(d)&&(d.value=null)),re(h))Kr(h,c,12,[a,p]);else{const L=Ae(h),U=Ue(h);if(L||U){const z=()=>{if(t.f){const J=L?C(h)?_[h]:p[h]:h.value;s?ne(J)&&vo(J,o):ne(J)?J.includes(o)||J.push(o):L?(p[h]=[o],C(h)&&(_[h]=p[h])):(h.value=[o],t.k&&(p[t.k]=h.value))}else L?(p[h]=a,C(h)&&(_[h]=a)):U&&(h.value=a,t.k&&(p[t.k]=a))};a?(z.id=-1,Xe(z,n)):z()}}}zi().requestIdleCallback;zi().cancelIdleCallback;const Rr=t=>!!t.type.__asyncLoader,eu=t=>t.type.__isKeepAlive;function id(t,e){tu(t,"a",e)}function sd(t,e){tu(t,"da",e)}function tu(t,e,n=Me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Yi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)eu(s.parent.vnode)&&od(r,e,n,s),s=s.parent}}function od(t,e,n,r){const s=Yi(e,t,r,!0);nu(()=>{vo(r[e],s)},n)}function Yi(t,e,n=Me,r=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{un();const c=Gr(n),h=St(e,n,t,a);return c(),hn(),h});return r?s.unshift(o):s.push(o),o}}const Vt=t=>(e,n=Me)=>{(!jr||t==="sp")&&Yi(t,(...r)=>e(...r),n)},ad=Vt("bm"),ld=Vt("m"),cd=Vt("bu"),ud=Vt("u"),hd=Vt("bum"),nu=Vt("um"),fd=Vt("sp"),dd=Vt("rtg"),pd=Vt("rtc");function gd(t,e=Me){Yi("ec",t,e)}const md="components";function za(t,e){return yd(md,t,!0,e)||t}const _d=Symbol.for("v-ndc");function yd(t,e,n=!0,r=!1){const s=Qe||Me;if(s){const o=s.type;{const c=ap(o,!1);if(c&&(c===e||c===ot(e)||c===Gi(ot(e))))return o}const a=qa(s[t]||o[t],e)||qa(s.appContext[t],e);return!a&&r?o:a}}function qa(t,e){return t&&(t[e]||t[ot(e)]||t[Gi(ot(e))])}function vd(t,e,n,r){let s;const o=n,a=ne(t);if(a||Ae(t)){const c=a&&Bn(t);let h=!1;c&&(h=!st(t),t=qi(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(h?xe(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,o)}else if(we(t))if(t[Symbol.iterator])s=Array.from(t,(c,h)=>e(c,h,void 0,o));else{const c=Object.keys(t);s=new Array(c.length);for(let h=0,d=c.length;h<d;h++){const p=c[h];s[h]=e(t[p],p,h,o)}}else s=[];return s}const Ys=t=>t?bu(t)?es(t):Ys(t.parent):null,Cr=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ys(t.parent),$root:t=>Ys(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>iu(t),$forceUpdate:t=>t.f||(t.f=()=>{Po(t.update)}),$nextTick:t=>t.n||(t.n=zc.bind(t.proxy)),$watch:t=>Hd.bind(t)}),Rs=(t,e)=>t!==ye&&!t.__isScriptSetup&&ge(t,e),Ed={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:c,appContext:h}=t;let d;if(e[0]!=="$"){const C=a[e];if(C!==void 0)switch(C){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(Rs(r,e))return a[e]=1,r[e];if(s!==ye&&ge(s,e))return a[e]=2,s[e];if((d=t.propsOptions[0])&&ge(d,e))return a[e]=3,o[e];if(n!==ye&&ge(n,e))return a[e]=4,n[e];Qs&&(a[e]=0)}}const p=Cr[e];let _,T;if(p)return e==="$attrs"&&Le(t.attrs,"get",""),p(t);if((_=c.__cssModules)&&(_=_[e]))return _;if(n!==ye&&ge(n,e))return a[e]=4,n[e];if(T=h.config.globalProperties,ge(T,e))return T[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Rs(s,e)?(s[e]=n,!0):r!==ye&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==ye&&ge(t,a)||Rs(e,a)||(c=o[0])&&ge(c,a)||ge(r,a)||ge(Cr,a)||ge(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ja(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qs=!0;function wd(t){const e=iu(t),n=t.proxy,r=t.ctx;Qs=!1,e.beforeCreate&&Xa(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:c,provide:h,inject:d,created:p,beforeMount:_,mounted:T,beforeUpdate:C,updated:L,activated:U,deactivated:z,beforeDestroy:J,beforeUnmount:$,destroyed:G,unmounted:W,render:oe,renderTracked:ue,renderTriggered:w,errorCaptured:m,serverPrefetch:E,expose:I,inheritAttrs:b,components:A,directives:v,filters:je}=e;if(d&&Id(d,r,null),a)for(const ae in a){const se=a[ae];re(se)&&(r[ae]=se.bind(n))}if(s){const ae=s.call(n,n);we(ae)&&(t.data=Ji(ae))}if(Qs=!0,o)for(const ae in o){const se=o[ae],Je=re(se)?se.bind(n,n):re(se.get)?se.get.bind(n,n):bt,lt=!re(se)&&re(se.set)?se.set.bind(n):bt,tt=ut({get:Je,set:lt});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Ie=>tt.value=Ie})}if(c)for(const ae in c)ru(c[ae],r,n,ae);if(h){const ae=re(h)?h.call(n):h;Reflect.ownKeys(ae).forEach(se=>{vi(se,ae[se])})}p&&Xa(p,t,"c");function Se(ae,se){ne(se)?se.forEach(Je=>ae(Je.bind(n))):se&&ae(se.bind(n))}if(Se(ad,_),Se(ld,T),Se(cd,C),Se(ud,L),Se(id,U),Se(sd,z),Se(gd,m),Se(pd,ue),Se(dd,w),Se(hd,$),Se(nu,W),Se(fd,E),ne(I))if(I.length){const ae=t.exposed||(t.exposed={});I.forEach(se=>{Object.defineProperty(ae,se,{get:()=>n[se],set:Je=>n[se]=Je})})}else t.exposed||(t.exposed={});oe&&t.render===bt&&(t.render=oe),b!=null&&(t.inheritAttrs=b),A&&(t.components=A),v&&(t.directives=v),E&&Zc(t)}function Id(t,e,n=bt){ne(t)&&(t=Zs(t));for(const r in t){const s=t[r];let o;we(s)?"default"in s?o=Ut(s.from||r,s.default,!0):o=Ut(s.from||r):o=Ut(s),Ue(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Xa(t,e,n){St(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ru(t,e,n,r){let s=r.includes(".")?yu(n,r):()=>n[r];if(Ae(t)){const o=e[t];re(o)&&Ei(s,o)}else if(re(t))Ei(s,t.bind(n));else if(we(t))if(ne(t))t.forEach(o=>ru(o,e,n,r));else{const o=re(t.handler)?t.handler.bind(n):e[t.handler];re(o)&&Ei(s,o,t)}}function iu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let h;return c?h=c:!s.length&&!n&&!r?h=e:(h={},s.length&&s.forEach(d=>ki(h,d,a,!0)),ki(h,e,a)),we(e)&&o.set(e,h),h}function ki(t,e,n,r=!1){const{mixins:s,extends:o}=e;o&&ki(t,o,n,!0),s&&s.forEach(a=>ki(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=bd[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const bd={data:Ya,props:Qa,emits:Qa,methods:Er,computed:Er,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:Er,directives:Er,watch:Sd,provide:Ya,inject:Td};function Ya(t,e){return e?t?function(){return Fe(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function Td(t,e){return Er(Zs(t),Zs(e))}function Zs(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Er(t,e){return t?Fe(Object.create(null),t,e):e}function Qa(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:Fe(Object.create(null),Ja(t),Ja(e??{})):e}function Sd(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const r in e)n[r]=Ve(t[r],e[r]);return n}function su(){return{app:null,config:{isNativeTag:ff,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ad=0;function Rd(t,e){return function(r,s=null){re(r)||(r=Fe({},r)),s!=null&&!we(s)&&(s=null);const o=su(),a=new WeakSet,c=[];let h=!1;const d=o.app={_uid:Ad++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:cp,get config(){return o.config},set config(p){},use(p,..._){return a.has(p)||(p&&re(p.install)?(a.add(p),p.install(d,..._)):re(p)&&(a.add(p),p(d,..._))),d},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),d},component(p,_){return _?(o.components[p]=_,d):o.components[p]},directive(p,_){return _?(o.directives[p]=_,d):o.directives[p]},mount(p,_,T){if(!h){const C=d._ceVNode||We(r,s);return C.appContext=o,T===!0?T="svg":T===!1&&(T=void 0),t(C,p,T),h=!0,d._container=p,p.__vue_app__=d,es(C.component)}},onUnmount(p){c.push(p)},unmount(){h&&(St(c,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(p,_){return o.provides[p]=_,d},runWithContext(p){const _=Kn;Kn=d;try{return p()}finally{Kn=_}}};return d}}let Kn=null;function vi(t,e){if(Me){let n=Me.provides;const r=Me.parent&&Me.parent.provides;r===n&&(n=Me.provides=Object.create(r)),n[t]=e}}function Ut(t,e,n=!1){const r=Me||Qe;if(r||Kn){const s=Kn?Kn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r&&r.proxy):e}}const ou={},au=()=>Object.create(ou),lu=t=>Object.getPrototypeOf(t)===ou;function Cd(t,e,n,r=!1){const s={},o=au();t.propsDefaults=Object.create(null),cu(t,e,s,o);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Bc(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Pd(t,e,n,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,c=pe(s),[h]=t.propsOptions;let d=!1;if((r||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let _=0;_<p.length;_++){let T=p[_];if(Qi(t.emitsOptions,T))continue;const C=e[T];if(h)if(ge(o,T))C!==o[T]&&(o[T]=C,d=!0);else{const L=ot(T);s[L]=eo(h,c,L,C,t,!1)}else C!==o[T]&&(o[T]=C,d=!0)}}}else{cu(t,e,s,o)&&(d=!0);let p;for(const _ in c)(!e||!ge(e,_)&&((p=cn(_))===_||!ge(e,p)))&&(h?n&&(n[_]!==void 0||n[p]!==void 0)&&(s[_]=eo(h,c,_,void 0,t,!0)):delete s[_]);if(o!==c)for(const _ in o)(!e||!ge(e,_))&&(delete o[_],d=!0)}d&&kt(t.attrs,"set","")}function cu(t,e,n,r){const[s,o]=t.propsOptions;let a=!1,c;if(e)for(let h in e){if(Tr(h))continue;const d=e[h];let p;s&&ge(s,p=ot(h))?!o||!o.includes(p)?n[p]=d:(c||(c={}))[p]=d:Qi(t.emitsOptions,h)||(!(h in r)||d!==r[h])&&(r[h]=d,a=!0)}if(o){const h=pe(n),d=c||ye;for(let p=0;p<o.length;p++){const _=o[p];n[_]=eo(s,h,_,d[_],t,!ge(d,_))}}return a}function eo(t,e,n,r,s,o){const a=t[n];if(a!=null){const c=ge(a,"default");if(c&&r===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&re(h)){const{propsDefaults:d}=s;if(n in d)r=d[n];else{const p=Gr(s);r=d[n]=h.call(null,e),p()}}else r=h;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!c?r=!1:a[1]&&(r===""||r===cn(n))&&(r=!0))}return r}const Od=new WeakMap;function uu(t,e,n=!1){const r=n?Od:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let h=!1;if(!re(t)){const p=_=>{h=!0;const[T,C]=uu(_,e,!0);Fe(a,T),C&&c.push(...C)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!h)return we(t)&&r.set(t,Hn),Hn;if(ne(o))for(let p=0;p<o.length;p++){const _=ot(o[p]);Za(_)&&(a[_]=ye)}else if(o)for(const p in o){const _=ot(p);if(Za(_)){const T=o[p],C=a[_]=ne(T)||re(T)?{type:T}:Fe({},T),L=C.type;let U=!1,z=!0;if(ne(L))for(let J=0;J<L.length;++J){const $=L[J],G=re($)&&$.name;if(G==="Boolean"){U=!0;break}else G==="String"&&(z=!1)}else U=re(L)&&L.name==="Boolean";C[0]=U,C[1]=z,(U||ge(C,"default"))&&c.push(_)}}const d=[a,c];return we(t)&&r.set(t,d),d}function Za(t){return t[0]!=="$"&&!Tr(t)}const hu=t=>t[0]==="_"||t==="$stable",ko=t=>ne(t)?t.map(wt):[wt(t)],kd=(t,e,n)=>{if(e._n)return e;const r=td((...s)=>ko(e(...s)),n);return r._c=!1,r},fu=(t,e,n)=>{const r=t._ctx;for(const s in t){if(hu(s))continue;const o=t[s];if(re(o))e[s]=kd(s,o,r);else if(o!=null){const a=ko(o);e[s]=()=>a}}},du=(t,e)=>{const n=ko(e);t.slots.default=()=>n},pu=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Nd=(t,e,n)=>{const r=t.slots=au();if(t.vnode.shapeFlag&32){const s=e._;s?(pu(r,e,n),n&&Tc(r,"_",s,!0)):fu(e,r)}else e&&du(t,e)},Dd=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=ye;if(r.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:pu(s,e,n):(o=!e.$stable,fu(e,s)),a=e}else e&&(du(t,e),a={default:1});if(o)for(const c in s)!hu(c)&&a[c]==null&&delete s[c]},Xe=zd;function Ld(t){return xd(t)}function xd(t,e){const n=zi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:c,createComment:h,setText:d,setElementText:p,parentNode:_,nextSibling:T,setScopeId:C=bt,insertStaticContent:L}=t,U=(g,y,S,k=null,D=null,N=null,H=void 0,F=null,M=!!y.dynamicChildren)=>{if(g===y)return;g&&!_r(g,y)&&(k=O(g),Ie(g,D,N,!0),g=null),y.patchFlag===-2&&(M=!1,y.dynamicChildren=null);const{type:x,ref:Y,shapeFlag:B}=y;switch(x){case Zi:z(g,y,S,k);break;case An:J(g,y,S,k);break;case Ps:g==null&&$(y,S,k,H);break;case Et:A(g,y,S,k,D,N,H,F,M);break;default:B&1?oe(g,y,S,k,D,N,H,F,M):B&6?v(g,y,S,k,D,N,H,F,M):(B&64||B&128)&&x.process(g,y,S,k,D,N,H,F,M,q)}Y!=null&&D&&Oi(Y,g&&g.ref,N,y||g,!y)},z=(g,y,S,k)=>{if(g==null)r(y.el=c(y.children),S,k);else{const D=y.el=g.el;y.children!==g.children&&d(D,y.children)}},J=(g,y,S,k)=>{g==null?r(y.el=h(y.children||""),S,k):y.el=g.el},$=(g,y,S,k)=>{[g.el,g.anchor]=L(g.children,y,S,k,g.el,g.anchor)},G=({el:g,anchor:y},S,k)=>{let D;for(;g&&g!==y;)D=T(g),r(g,S,k),g=D;r(y,S,k)},W=({el:g,anchor:y})=>{let S;for(;g&&g!==y;)S=T(g),s(g),g=S;s(y)},oe=(g,y,S,k,D,N,H,F,M)=>{y.type==="svg"?H="svg":y.type==="math"&&(H="mathml"),g==null?ue(y,S,k,D,N,H,F,M):E(g,y,D,N,H,F,M)},ue=(g,y,S,k,D,N,H,F)=>{let M,x;const{props:Y,shapeFlag:B,transition:X,dirs:Z}=g;if(M=g.el=a(g.type,N,Y&&Y.is,Y),B&8?p(M,g.children):B&16&&m(g.children,M,null,k,D,Cs(g,N),H,F),Z&&yn(g,null,k,"created"),w(M,g,g.scopeId,H,k),Y){for(const ie in Y)ie!=="value"&&!Tr(ie)&&o(M,ie,null,Y[ie],N,k);"value"in Y&&o(M,"value",null,Y.value,N),(x=Y.onVnodeBeforeMount)&&yt(x,k,g)}Z&&yn(g,null,k,"beforeMount");const Q=Md(D,X);Q&&X.beforeEnter(M),r(M,y,S),((x=Y&&Y.onVnodeMounted)||Q||Z)&&Xe(()=>{x&&yt(x,k,g),Q&&X.enter(M),Z&&yn(g,null,k,"mounted")},D)},w=(g,y,S,k,D)=>{if(S&&C(g,S),k)for(let N=0;N<k.length;N++)C(g,k[N]);if(D){let N=D.subTree;if(y===N||Eu(N.type)&&(N.ssContent===y||N.ssFallback===y)){const H=D.vnode;w(g,H,H.scopeId,H.slotScopeIds,D.parent)}}},m=(g,y,S,k,D,N,H,F,M=0)=>{for(let x=M;x<g.length;x++){const Y=g[x]=F?Yt(g[x]):wt(g[x]);U(null,Y,y,S,k,D,N,H,F)}},E=(g,y,S,k,D,N,H)=>{const F=y.el=g.el;let{patchFlag:M,dynamicChildren:x,dirs:Y}=y;M|=g.patchFlag&16;const B=g.props||ye,X=y.props||ye;let Z;if(S&&vn(S,!1),(Z=X.onVnodeBeforeUpdate)&&yt(Z,S,y,g),Y&&yn(y,g,S,"beforeUpdate"),S&&vn(S,!0),(B.innerHTML&&X.innerHTML==null||B.textContent&&X.textContent==null)&&p(F,""),x?I(g.dynamicChildren,x,F,S,k,Cs(y,D),N):H||se(g,y,F,null,S,k,Cs(y,D),N,!1),M>0){if(M&16)b(F,B,X,S,D);else if(M&2&&B.class!==X.class&&o(F,"class",null,X.class,D),M&4&&o(F,"style",B.style,X.style,D),M&8){const Q=y.dynamicProps;for(let ie=0;ie<Q.length;ie++){const le=Q[ie],Oe=B[le],Re=X[le];(Re!==Oe||le==="value")&&o(F,le,Oe,Re,D,S)}}M&1&&g.children!==y.children&&p(F,y.children)}else!H&&x==null&&b(F,B,X,S,D);((Z=X.onVnodeUpdated)||Y)&&Xe(()=>{Z&&yt(Z,S,y,g),Y&&yn(y,g,S,"updated")},k)},I=(g,y,S,k,D,N,H)=>{for(let F=0;F<y.length;F++){const M=g[F],x=y[F],Y=M.el&&(M.type===Et||!_r(M,x)||M.shapeFlag&70)?_(M.el):S;U(M,x,Y,null,k,D,N,H,!0)}},b=(g,y,S,k,D)=>{if(y!==S){if(y!==ye)for(const N in y)!Tr(N)&&!(N in S)&&o(g,N,y[N],null,D,k);for(const N in S){if(Tr(N))continue;const H=S[N],F=y[N];H!==F&&N!=="value"&&o(g,N,F,H,D,k)}"value"in S&&o(g,"value",y.value,S.value,D)}},A=(g,y,S,k,D,N,H,F,M)=>{const x=y.el=g?g.el:c(""),Y=y.anchor=g?g.anchor:c("");let{patchFlag:B,dynamicChildren:X,slotScopeIds:Z}=y;Z&&(F=F?F.concat(Z):Z),g==null?(r(x,S,k),r(Y,S,k),m(y.children||[],S,Y,D,N,H,F,M)):B>0&&B&64&&X&&g.dynamicChildren?(I(g.dynamicChildren,X,S,D,N,H,F),(y.key!=null||D&&y===D.subTree)&&gu(g,y,!0)):se(g,y,S,Y,D,N,H,F,M)},v=(g,y,S,k,D,N,H,F,M)=>{y.slotScopeIds=F,g==null?y.shapeFlag&512?D.ctx.activate(y,S,k,H,M):je(y,S,k,D,N,H,M):et(g,y,M)},je=(g,y,S,k,D,N,H)=>{const F=g.component=np(g,k,D);if(eu(g)&&(F.ctx.renderer=q),rp(F,!1,H),F.asyncDep){if(D&&D.registerDep(F,Se,H),!g.el){const M=F.subTree=We(An);J(null,M,y,S)}}else Se(F,g,y,S,D,N,H)},et=(g,y,S)=>{const k=y.component=g.component;if(Kd(g,y,S))if(k.asyncDep&&!k.asyncResolved){ae(k,y,S);return}else k.next=y,k.update();else y.el=g.el,k.vnode=y},Se=(g,y,S,k,D,N,H)=>{const F=()=>{if(g.isMounted){let{next:B,bu:X,u:Z,parent:Q,vnode:ie}=g;{const ke=mu(g);if(ke){B&&(B.el=ie.el,ae(g,B,H)),ke.asyncDep.then(()=>{g.isUnmounted||F()});return}}let le=B,Oe;vn(g,!1),B?(B.el=ie.el,ae(g,B,H)):B=ie,X&&yi(X),(Oe=B.props&&B.props.onVnodeBeforeUpdate)&&yt(Oe,Q,B,ie),vn(g,!0);const Re=tl(g),nt=g.subTree;g.subTree=Re,U(nt,Re,_(nt.el),O(nt),g,D,N),B.el=Re.el,le===null&&Gd(g,Re.el),Z&&Xe(Z,D),(Oe=B.props&&B.props.onVnodeUpdated)&&Xe(()=>yt(Oe,Q,B,ie),D)}else{let B;const{el:X,props:Z}=y,{bm:Q,m:ie,parent:le,root:Oe,type:Re}=g,nt=Rr(y);vn(g,!1),Q&&yi(Q),!nt&&(B=Z&&Z.onVnodeBeforeMount)&&yt(B,le,y),vn(g,!0);{Oe.ce&&Oe.ce._injectChildStyle(Re);const ke=g.subTree=tl(g);U(null,ke,S,k,g,D,N),y.el=ke.el}if(ie&&Xe(ie,D),!nt&&(B=Z&&Z.onVnodeMounted)){const ke=y;Xe(()=>yt(B,le,ke),D)}(y.shapeFlag&256||le&&Rr(le.vnode)&&le.vnode.shapeFlag&256)&&g.a&&Xe(g.a,D),g.isMounted=!0,y=S=k=null}};g.scope.on();const M=g.effect=new Cc(F);g.scope.off();const x=g.update=M.run.bind(M),Y=g.job=M.runIfDirty.bind(M);Y.i=g,Y.id=g.uid,M.scheduler=()=>Po(Y),vn(g,!0),x()},ae=(g,y,S)=>{y.component=g;const k=g.vnode.props;g.vnode=y,g.next=null,Pd(g,y.props,k,S),Dd(g,y.children,S),un(),Ga(g),hn()},se=(g,y,S,k,D,N,H,F,M=!1)=>{const x=g&&g.children,Y=g?g.shapeFlag:0,B=y.children,{patchFlag:X,shapeFlag:Z}=y;if(X>0){if(X&128){lt(x,B,S,k,D,N,H,F,M);return}else if(X&256){Je(x,B,S,k,D,N,H,F,M);return}}Z&8?(Y&16&&Ge(x,D,N),B!==x&&p(S,B)):Y&16?Z&16?lt(x,B,S,k,D,N,H,F,M):Ge(x,D,N,!0):(Y&8&&p(S,""),Z&16&&m(B,S,k,D,N,H,F,M))},Je=(g,y,S,k,D,N,H,F,M)=>{g=g||Hn,y=y||Hn;const x=g.length,Y=y.length,B=Math.min(x,Y);let X;for(X=0;X<B;X++){const Z=y[X]=M?Yt(y[X]):wt(y[X]);U(g[X],Z,S,null,D,N,H,F,M)}x>Y?Ge(g,D,N,!0,!1,B):m(y,S,k,D,N,H,F,M,B)},lt=(g,y,S,k,D,N,H,F,M)=>{let x=0;const Y=y.length;let B=g.length-1,X=Y-1;for(;x<=B&&x<=X;){const Z=g[x],Q=y[x]=M?Yt(y[x]):wt(y[x]);if(_r(Z,Q))U(Z,Q,S,null,D,N,H,F,M);else break;x++}for(;x<=B&&x<=X;){const Z=g[B],Q=y[X]=M?Yt(y[X]):wt(y[X]);if(_r(Z,Q))U(Z,Q,S,null,D,N,H,F,M);else break;B--,X--}if(x>B){if(x<=X){const Z=X+1,Q=Z<Y?y[Z].el:k;for(;x<=X;)U(null,y[x]=M?Yt(y[x]):wt(y[x]),S,Q,D,N,H,F,M),x++}}else if(x>X)for(;x<=B;)Ie(g[x],D,N,!0),x++;else{const Z=x,Q=x,ie=new Map;for(x=Q;x<=X;x++){const Ce=y[x]=M?Yt(y[x]):wt(y[x]);Ce.key!=null&&ie.set(Ce.key,x)}let le,Oe=0;const Re=X-Q+1;let nt=!1,ke=0;const Wt=new Array(Re);for(x=0;x<Re;x++)Wt[x]=0;for(x=Z;x<=B;x++){const Ce=g[x];if(Oe>=Re){Ie(Ce,D,N,!0);continue}let rt;if(Ce.key!=null)rt=ie.get(Ce.key);else for(le=Q;le<=X;le++)if(Wt[le-Q]===0&&_r(Ce,y[le])){rt=le;break}rt===void 0?Ie(Ce,D,N,!0):(Wt[rt-Q]=x+1,rt>=ke?ke=rt:nt=!0,U(Ce,y[rt],S,null,D,N,H,F,M),Oe++)}const rr=nt?Ud(Wt):Hn;for(le=rr.length-1,x=Re-1;x>=0;x--){const Ce=Q+x,rt=y[Ce],ei=Ce+1<Y?y[Ce+1].el:k;Wt[x]===0?U(null,rt,S,ei,D,N,H,F,M):nt&&(le<0||x!==rr[le]?tt(rt,S,ei,2):le--)}}},tt=(g,y,S,k,D=null)=>{const{el:N,type:H,transition:F,children:M,shapeFlag:x}=g;if(x&6){tt(g.component.subTree,y,S,k);return}if(x&128){g.suspense.move(y,S,k);return}if(x&64){H.move(g,y,S,q);return}if(H===Et){r(N,y,S);for(let B=0;B<M.length;B++)tt(M[B],y,S,k);r(g.anchor,y,S);return}if(H===Ps){G(g,y,S);return}if(k!==2&&x&1&&F)if(k===0)F.beforeEnter(N),r(N,y,S),Xe(()=>F.enter(N),D);else{const{leave:B,delayLeave:X,afterLeave:Z}=F,Q=()=>r(N,y,S),ie=()=>{B(N,()=>{Q(),Z&&Z()})};X?X(N,Q,ie):ie()}else r(N,y,S)},Ie=(g,y,S,k=!1,D=!1)=>{const{type:N,props:H,ref:F,children:M,dynamicChildren:x,shapeFlag:Y,patchFlag:B,dirs:X,cacheIndex:Z}=g;if(B===-2&&(D=!1),F!=null&&Oi(F,null,S,g,!0),Z!=null&&(y.renderCache[Z]=void 0),Y&256){y.ctx.deactivate(g);return}const Q=Y&1&&X,ie=!Rr(g);let le;if(ie&&(le=H&&H.onVnodeBeforeUnmount)&&yt(le,y,g),Y&6)_t(g.component,S,k);else{if(Y&128){g.suspense.unmount(S,k);return}Q&&yn(g,null,y,"beforeUnmount"),Y&64?g.type.remove(g,y,S,q,k):x&&!x.hasOnce&&(N!==Et||B>0&&B&64)?Ge(x,y,S,!1,!0):(N===Et&&B&384||!D&&Y&16)&&Ge(M,y,S),k&&be(g)}(ie&&(le=H&&H.onVnodeUnmounted)||Q)&&Xe(()=>{le&&yt(le,y,g),Q&&yn(g,null,y,"unmounted")},S)},be=g=>{const{type:y,el:S,anchor:k,transition:D}=g;if(y===Et){$t(S,k);return}if(y===Ps){W(g);return}const N=()=>{s(S),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:H,delayLeave:F}=D,M=()=>H(S,N);F?F(g.el,N,M):M()}else N()},$t=(g,y)=>{let S;for(;g!==y;)S=T(g),s(g),g=S;s(y)},_t=(g,y,S)=>{const{bum:k,scope:D,job:N,subTree:H,um:F,m:M,a:x}=g;el(M),el(x),k&&yi(k),D.stop(),N&&(N.flags|=8,Ie(H,g,y,S)),F&&Xe(F,y),Xe(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Ge=(g,y,S,k=!1,D=!1,N=0)=>{for(let H=N;H<g.length;H++)Ie(g[H],y,S,k,D)},O=g=>{if(g.shapeFlag&6)return O(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const y=T(g.anchor||g.el),S=y&&y[nd];return S?T(S):y};let K=!1;const V=(g,y,S)=>{g==null?y._vnode&&Ie(y._vnode,null,null,!0):U(y._vnode||null,g,y,null,null,null,S),y._vnode=g,K||(K=!0,Ga(),Jc(),K=!1)},q={p:U,um:Ie,m:tt,r:be,mt:je,mc:m,pc:se,pbc:I,n:O,o:t};return{render:V,hydrate:void 0,createApp:Rd(V)}}function Cs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Md(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gu(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let o=0;o<r.length;o++){const a=r[o];let c=s[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[o]=Yt(s[o]),c.el=a.el),!n&&c.patchFlag!==-2&&gu(a,c)),c.type===Zi&&(c.el=a.el)}}function Ud(t){const e=t.slice(),n=[0];let r,s,o,a,c;const h=t.length;for(r=0;r<h;r++){const d=t[r];if(d!==0){if(s=n[n.length-1],t[s]<d){e[r]=s,n.push(r);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,t[n[c]]<d?o=c+1:a=c;d<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function mu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mu(e)}function el(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Fd=Symbol.for("v-scx"),jd=()=>Ut(Fd);function Ei(t,e,n){return _u(t,e,n)}function _u(t,e,n=ye){const{immediate:r,deep:s,flush:o,once:a}=n,c=Fe({},n),h=e&&r||!e&&o!=="post";let d;if(jr){if(o==="sync"){const C=jd();d=C.__watcherHandles||(C.__watcherHandles=[])}else if(!h){const C=()=>{};return C.stop=bt,C.resume=bt,C.pause=bt,C}}const p=Me;c.call=(C,L,U)=>St(C,p,L,U);let _=!1;o==="post"?c.scheduler=C=>{Xe(C,p&&p.suspense)}:o!=="sync"&&(_=!0,c.scheduler=(C,L)=>{L?C():Po(C)}),c.augmentJob=C=>{e&&(C.flags|=4),_&&(C.flags|=2,p&&(C.id=p.uid,C.i=p))};const T=Yf(t,e,c);return jr&&(d?d.push(T):h&&T()),T}function Hd(t,e,n){const r=this.proxy,s=Ae(t)?t.includes(".")?yu(r,t):()=>r[t]:t.bind(r,r);let o;re(e)?o=e:(o=e.handler,n=e);const a=Gr(this),c=_u(s,o.bind(r),n);return a(),c}function yu(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Vd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ot(e)}Modifiers`]||t[`${cn(e)}Modifiers`];function Bd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ye;let s=n;const o=e.startsWith("update:"),a=o&&Vd(r,e.slice(7));a&&(a.trim&&(s=n.map(p=>Ae(p)?p.trim():p)),a.number&&(s=n.map(Ks)));let c,h=r[c=Is(e)]||r[c=Is(ot(e))];!h&&o&&(h=r[c=Is(cn(e))]),h&&St(h,t,6,s);const d=r[c+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,St(d,t,6,s)}}function vu(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const o=t.emits;let a={},c=!1;if(!re(t)){const h=d=>{const p=vu(d,e,!0);p&&(c=!0,Fe(a,p))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!c?(we(t)&&r.set(t,null),null):(ne(o)?o.forEach(h=>a[h]=null):Fe(a,o),we(t)&&r.set(t,a),a)}function Qi(t,e){return!t||!$i(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,cn(e))||ge(t,e))}function tl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:a,attrs:c,emit:h,render:d,renderCache:p,props:_,data:T,setupState:C,ctx:L,inheritAttrs:U}=t,z=Pi(t);let J,$;try{if(n.shapeFlag&4){const W=s||r,oe=W;J=wt(d.call(oe,W,p,_,C,T,L)),$=c}else{const W=e;J=wt(W.length>1?W(_,{attrs:c,slots:a,emit:h}):W(_,null)),$=e.props?c:$d(c)}}catch(W){Pr.length=0,Xi(W,t,1),J=We(An)}let G=J;if($&&U!==!1){const W=Object.keys($),{shapeFlag:oe}=G;W.length&&oe&7&&(o&&W.some(yo)&&($=Wd($,o)),G=Jn(G,$,!1,!0))}return n.dirs&&(G=Jn(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&Oo(G,n.transition),J=G,Pi(z),J}const $d=t=>{let e;for(const n in t)(n==="class"||n==="style"||$i(n))&&((e||(e={}))[n]=t[n]);return e},Wd=(t,e)=>{const n={};for(const r in t)(!yo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Kd(t,e,n){const{props:r,children:s,component:o}=t,{props:a,children:c,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return r?nl(r,a,d):!!a;if(h&8){const p=e.dynamicProps;for(let _=0;_<p.length;_++){const T=p[_];if(a[T]!==r[T]&&!Qi(d,T))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?nl(r,a,d):!0:!!a;return!1}function nl(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(e[o]!==t[o]&&!Qi(n,o))return!0}return!1}function Gd({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Eu=t=>t.__isSuspense;function zd(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):ed(t)}const Et=Symbol.for("v-fgt"),Zi=Symbol.for("v-txt"),An=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),Pr=[];let Ze=null;function ht(t=!1){Pr.push(Ze=t?null:[])}function qd(){Pr.pop(),Ze=Pr[Pr.length-1]||null}let Fr=1;function rl(t,e=!1){Fr+=t,t<0&&Ze&&e&&(Ze.hasOnce=!0)}function wu(t){return t.dynamicChildren=Fr>0?Ze||Hn:null,qd(),Fr>0&&Ze&&Ze.push(t),t}function It(t,e,n,r,s,o){return wu(te(t,e,n,r,s,o,!0))}function Jd(t,e,n,r,s){return wu(We(t,e,n,r,s,!0))}function Ni(t){return t?t.__v_isVNode===!0:!1}function _r(t,e){return t.type===e.type&&t.key===e.key}const Iu=({key:t})=>t??null,wi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ae(t)||Ue(t)||re(t)?{i:Qe,r:t,k:e,f:!!n}:t:null);function te(t,e=null,n=null,r=0,s=null,o=t===Et?0:1,a=!1,c=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Iu(e),ref:e&&wi(e),scopeId:Yc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qe};return c?(No(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=Ae(n)?8:16),Fr>0&&!a&&Ze&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&Ze.push(h),h}const We=Xd;function Xd(t,e=null,n=null,r=0,s=null,o=!1){if((!t||t===_d)&&(t=An),Ni(t)){const c=Jn(t,e,!0);return n&&No(c,n),Fr>0&&!o&&Ze&&(c.shapeFlag&6?Ze[Ze.indexOf(t)]=c:Ze.push(c)),c.patchFlag=-2,c}if(lp(t)&&(t=t.__vccOpts),e){e=Yd(e);let{class:c,style:h}=e;c&&!Ae(c)&&(e.class=Zt(c)),we(h)&&(Co(h)&&!ne(h)&&(h=Fe({},h)),e.style=wo(h))}const a=Ae(t)?1:Eu(t)?128:rd(t)?64:we(t)?4:re(t)?2:0;return te(t,e,n,r,s,a,o,!0)}function Yd(t){return t?Co(t)||lu(t)?Fe({},t):t:null}function Jn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:h}=t,d=e?Zd(s||{},e):s,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Iu(d),ref:e&&e.ref?n&&o?ne(o)?o.concat(wi(e)):[o,wi(e)]:wi(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jn(t.ssContent),ssFallback:t.ssFallback&&Jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&r&&Oo(p,h.clone(p)),p}function Qd(t=" ",e=0){return We(Zi,null,t,e)}function Os(t="",e=!1){return e?(ht(),Jd(An,null,t)):We(An,null,t)}function wt(t){return t==null||typeof t=="boolean"?We(An):ne(t)?We(Et,null,t.slice()):Ni(t)?Yt(t):We(Zi,null,String(t))}function Yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jn(t)}function No(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),No(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!lu(e)?e._ctx=Qe:s===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),r&64?(n=16,e=[Qd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zt([e.class,r.class]));else if(s==="style")e.style=wo([e.style,r.style]);else if($i(s)){const o=e[s],a=r[s];a&&o!==a&&!(ne(o)&&o.includes(a))&&(e[s]=o?[].concat(o,a):a)}else s!==""&&(e[s]=r[s])}return e}function yt(t,e,n,r=null){St(t,e,7,[n,r])}const ep=su();let tp=0;function np(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ep,o={uid:tp++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uu(r,s),emitsOptions:vu(r,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:r.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Bd.bind(null,o),t.ce&&t.ce(o),o}let Me=null,Di,to;{const t=zi(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};Di=e("__VUE_INSTANCE_SETTERS__",n=>Me=n),to=e("__VUE_SSR_SETTERS__",n=>jr=n)}const Gr=t=>{const e=Me;return Di(t),t.scope.on(),()=>{t.scope.off(),Di(e)}},il=()=>{Me&&Me.scope.off(),Di(null)};function bu(t){return t.vnode.shapeFlag&4}let jr=!1;function rp(t,e=!1,n=!1){e&&to(e);const{props:r,children:s}=t.vnode,o=bu(t);Cd(t,r,o,e),Nd(t,s,n);const a=o?ip(t,e):void 0;return e&&to(!1),a}function ip(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ed);const{setup:r}=n;if(r){un();const s=t.setupContext=r.length>1?op(t):null,o=Gr(t),a=Kr(r,t,0,[t.props,s]),c=wc(a);if(hn(),o(),(c||t.sp)&&!Rr(t)&&Zc(t),c){if(a.then(il,il),e)return a.then(h=>{sl(t,h)}).catch(h=>{Xi(h,t,0)});t.asyncDep=a}else sl(t,a)}else Tu(t)}function sl(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=Kc(e)),Tu(t)}function Tu(t,e,n){const r=t.type;t.render||(t.render=r.render||bt);{const s=Gr(t);un();try{wd(t)}finally{hn(),s()}}}const sp={get(t,e){return Le(t,"get",""),t[e]}};function op(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sp),slots:t.slots,emit:t.emit,expose:e}}function es(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Kc($f(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cr)return Cr[n](t)},has(e,n){return n in e||n in Cr}})):t.proxy}function ap(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function lp(t){return re(t)&&"__vccOpts"in t}const ut=(t,e)=>Jf(t,e,jr);function Su(t,e,n){const r=arguments.length;return r===2?we(e)&&!ne(e)?Ni(e)?We(t,null,[e]):We(t,e):We(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ni(n)&&(n=[n]),We(t,e,n))}const cp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let no;const ol=typeof window<"u"&&window.trustedTypes;if(ol)try{no=ol.createPolicy("vue",{createHTML:t=>t})}catch{}const Au=no?t=>no.createHTML(t):t=>t,up="http://www.w3.org/2000/svg",hp="http://www.w3.org/1998/Math/MathML",Ot=typeof document<"u"?document:null,al=Ot&&Ot.createElement("template"),fp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ot.createElementNS(up,t):e==="mathml"?Ot.createElementNS(hp,t):n?Ot.createElement(t,{is:n}):Ot.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,o){const a=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{al.innerHTML=Au(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=al.content;if(r==="svg"||r==="mathml"){const h=c.firstChild;for(;h.firstChild;)c.appendChild(h.firstChild);c.removeChild(h)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dp=Symbol("_vtc");function pp(t,e,n){const r=t[dp];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ll=Symbol("_vod"),gp=Symbol("_vsh"),mp=Symbol(""),_p=/(^|;)\s*display\s*:/;function yp(t,e,n){const r=t.style,s=Ae(n);let o=!1;if(n&&!s){if(e)if(Ae(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Ii(r,c,"")}else for(const a in e)n[a]==null&&Ii(r,a,"");for(const a in n)a==="display"&&(o=!0),Ii(r,a,n[a])}else if(s){if(e!==n){const a=r[mp];a&&(n+=";"+a),r.cssText=n,o=_p.test(n)}}else e&&t.removeAttribute("style");ll in t&&(t[ll]=o?r.display:"",t[gp]&&(r.display="none"))}const cl=/\s*!important$/;function Ii(t,e,n){if(ne(n))n.forEach(r=>Ii(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=vp(t,e);cl.test(n)?t.setProperty(cn(r),n.replace(cl,""),"important"):t[r]=n}}const ul=["Webkit","Moz","ms"],ks={};function vp(t,e){const n=ks[e];if(n)return n;let r=ot(e);if(r!=="filter"&&r in t)return ks[e]=r;r=Gi(r);for(let s=0;s<ul.length;s++){const o=ul[s]+r;if(o in t)return ks[e]=o}return e}const hl="http://www.w3.org/1999/xlink";function fl(t,e,n,r,s,o=If(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(hl,e.slice(6,e.length)):t.setAttributeNS(hl,e,n):n==null||o&&!Sc(n)?t.removeAttribute(e):t.setAttribute(e,o?"":ln(n)?String(n):n)}function dl(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Au(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?t.type==="checkbox"?"on":"":String(n);(c!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Sc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Fn(t,e,n,r){t.addEventListener(e,n,r)}function Ep(t,e,n,r){t.removeEventListener(e,n,r)}const pl=Symbol("_vei");function wp(t,e,n,r,s=null){const o=t[pl]||(t[pl]={}),a=o[e];if(r&&a)a.value=r;else{const[c,h]=Ip(e);if(r){const d=o[e]=Sp(r,s);Fn(t,c,d,h)}else a&&(Ep(t,c,a,h),o[e]=void 0)}}const gl=/(?:Once|Passive|Capture)$/;function Ip(t){let e;if(gl.test(t)){e={};let r;for(;r=t.match(gl);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cn(t.slice(2)),e]}let Ns=0;const bp=Promise.resolve(),Tp=()=>Ns||(bp.then(()=>Ns=0),Ns=Date.now());function Sp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;St(Ap(r,n.value),e,5,[r])};return n.value=t,n.attached=Tp(),n}function Ap(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ml=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Rp=(t,e,n,r,s,o)=>{const a=s==="svg";e==="class"?pp(t,r,a):e==="style"?yp(t,n,r):$i(e)?yo(e)||wp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cp(t,e,r,a))?(dl(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fl(t,e,r,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ae(r))?dl(t,ot(e),r,o,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fl(t,e,r,a))};function Cp(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ml(e)&&re(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ml(e)&&Ae(n)?!1:e in t}const _l=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>yi(e,n):e};function Pp(t){t.target.composing=!0}function yl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ds=Symbol("_assign"),wr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ds]=_l(s);const o=r||s.props&&s.props.type==="number";Fn(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),o&&(c=Ks(c)),t[Ds](c)}),n&&Fn(t,"change",()=>{t.value=t.value.trim()}),e||(Fn(t,"compositionstart",Pp),Fn(t,"compositionend",yl),Fn(t,"change",yl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[Ds]=_l(a),t.composing)return;const c=(o||t.type==="number")&&!/^0\d/.test(t.value)?Ks(t.value):t.value,h=e??"";c!==h&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===h)||(t.value=h))}},Op=["ctrl","shift","alt","meta"],kp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Op.some(n=>t[`${n}Key`]&&!e.includes(n))},ro=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...o)=>{for(let a=0;a<e.length;a++){const c=kp[e[a]];if(c&&c(s,e))return}return t(s,...o)})},Np={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Dp=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const o=cn(s.key);if(e.some(a=>a===o||Np[a]===o))return t(s)})},Lp=Fe({patchProp:Rp},fp);let vl;function xp(){return vl||(vl=Ld(Lp))}const Mp=(...t)=>{const e=xp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Fp(r);if(!s)return;const o=e._component;!re(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Up(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Up(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fp(t){return Ae(t)?document.querySelector(t):t}var El={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],c=t[n++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Cu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,c=a?t[s+1]:0,h=s+2<t.length,d=h?t[s+2]:0,p=o>>2,_=(o&3)<<4|c>>4;let T=(c&15)<<2|d>>6,C=d&63;h||(C=64,a||(T=64)),r.push(n[p],n[_],n[T],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ru(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const _=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||c==null||d==null||_==null)throw new Hp;const T=o<<2|c>>4;if(r.push(T),d!==64){const C=c<<4&240|d>>2;if(r.push(C),_!==64){const L=d<<6&192|_;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vp=function(t){const e=Ru(t);return Cu.encodeByteArray(e,!0)},Li=function(t){return Vp(t).replace(/\./g,"")},Pu=function(t){try{return Cu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=()=>Bp().__FIREBASE_DEFAULTS__,Wp=()=>{if(typeof process>"u"||typeof El>"u")return;const t=El.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pu(t[1]);return e&&JSON.parse(e)},Do=()=>{try{return $p()||Wp()||Kp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ou=t=>{var e,n;return(n=(e=Do())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gp=t=>{const e=Ou(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ku=()=>{var t;return(t=Do())===null||t===void 0?void 0:t.config},Nu=t=>{var e;return(e=Do())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Li(JSON.stringify(n)),Li(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function Xp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zp(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eg(){try{return typeof indexedDB=="object"}catch{return!1}}function tg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ng,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zr.prototype.create)}}class zr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?rg(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Bt(s,c,r)}}function rg(t,e){return t.replace(ig,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ig=/\{\$([^}]+)}/g;function sg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],a=e[s];if(wl(o)&&wl(a)){if(!xi(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ir(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function br(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function og(t,e){const n=new ag(t,e);return n.subscribe.bind(n)}class ag{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ls),s.error===void 0&&(s.error=Ls),s.complete===void 0&&(s.complete=Ls);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ls(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){return t&&t._delegate?t._delegate:t}class Rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hg(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ug(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ug(t){return t===wn?void 0:t}function hg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const dg={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},pg=me.INFO,gg={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},mg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lo{constructor(e){this.name=e,this._logLevel=pg,this._logHandler=mg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const _g=(t,e)=>e.some(n=>t instanceof n);let Il,bl;function yg(){return Il||(Il=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vg(){return bl||(bl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Du=new WeakMap,io=new WeakMap,Lu=new WeakMap,xs=new WeakMap,xo=new WeakMap;function Eg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(sn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Du.set(n,t)}).catch(()=>{}),xo.set(e,t),e}function wg(t){if(io.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});io.set(t,e)}let so={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return io.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ig(t){so=t(so)}function bg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ms(this),e,...n);return Lu.set(r,e.sort?e.sort():[e]),sn(r)}:vg().includes(t)?function(...e){return t.apply(Ms(this),e),sn(Du.get(this))}:function(...e){return sn(t.apply(Ms(this),e))}}function Tg(t){return typeof t=="function"?bg(t):(t instanceof IDBTransaction&&wg(t),_g(t,yg())?new Proxy(t,so):t)}function sn(t){if(t instanceof IDBRequest)return Eg(t);if(xs.has(t))return xs.get(t);const e=Tg(t);return e!==t&&(xs.set(t,e),xo.set(e,t)),e}const Ms=t=>xo.get(t);function Sg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=sn(a);return r&&a.addEventListener("upgradeneeded",h=>{r(sn(a.result),h.oldVersion,h.newVersion,sn(a.transaction),h)}),n&&a.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Ag=["get","getKey","getAll","getAllKeys","count"],Rg=["put","add","delete","clear"],Us=new Map;function Tl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Us.get(e))return Us.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Rg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ag.includes(n)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),s&&h.done]))[0]};return Us.set(e,o),o}Ig(t=>({...t,get:(e,n,r)=>Tl(e,n)||t.get(e,n,r),has:(e,n)=>!!Tl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oo="@firebase/app",Sl="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Lo("@firebase/app"),Og="@firebase/app-compat",kg="@firebase/analytics-compat",Ng="@firebase/analytics",Dg="@firebase/app-check-compat",Lg="@firebase/app-check",xg="@firebase/auth",Mg="@firebase/auth-compat",Ug="@firebase/database",Fg="@firebase/data-connect",jg="@firebase/database-compat",Hg="@firebase/functions",Vg="@firebase/functions-compat",Bg="@firebase/installations",$g="@firebase/installations-compat",Wg="@firebase/messaging",Kg="@firebase/messaging-compat",Gg="@firebase/performance",zg="@firebase/performance-compat",qg="@firebase/remote-config",Jg="@firebase/remote-config-compat",Xg="@firebase/storage",Yg="@firebase/storage-compat",Qg="@firebase/firestore",Zg="@firebase/vertexai",em="@firebase/firestore-compat",tm="firebase",nm="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="[DEFAULT]",rm={[oo]:"fire-core",[Og]:"fire-core-compat",[Ng]:"fire-analytics",[kg]:"fire-analytics-compat",[Lg]:"fire-app-check",[Dg]:"fire-app-check-compat",[xg]:"fire-auth",[Mg]:"fire-auth-compat",[Ug]:"fire-rtdb",[Fg]:"fire-data-connect",[jg]:"fire-rtdb-compat",[Hg]:"fire-fn",[Vg]:"fire-fn-compat",[Bg]:"fire-iid",[$g]:"fire-iid-compat",[Wg]:"fire-fcm",[Kg]:"fire-fcm-compat",[Gg]:"fire-perf",[zg]:"fire-perf-compat",[qg]:"fire-rc",[Jg]:"fire-rc-compat",[Xg]:"fire-gcs",[Yg]:"fire-gcs-compat",[Qg]:"fire-fst",[em]:"fire-fst-compat",[Zg]:"fire-vertex","fire-js":"fire-js",[tm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Map,im=new Map,lo=new Map;function Al(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(lo.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;lo.set(e,t);for(const n of Mi.values())Al(n,t);for(const n of im.values())Al(n,t);return!0}function Mo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ft(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new zr("app","Firebase",sm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=nm;function xu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ao,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(n||(n=ku()),!n)throw on.create("no-options");const o=Mi.get(s);if(o){if(xi(n,o.options)&&xi(r,o.config))return o;throw on.create("duplicate-app",{appName:s})}const a=new fg(s);for(const h of lo.values())a.addComponent(h);const c=new om(n,r,a);return Mi.set(s,c),c}function Mu(t=ao){const e=Mi.get(t);if(!e&&t===ao&&ku())return xu();if(!e)throw on.create("no-app",{appName:t});return e}function an(t,e,n){var r;let s=(r=rm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(c.join(" "));return}Xn(new Rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="firebase-heartbeat-database",lm=1,Hr="firebase-heartbeat-store";let Fs=null;function Uu(){return Fs||(Fs=Sg(am,lm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hr)}catch(n){console.warn(n)}}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),Fs}async function cm(t){try{const n=(await Uu()).transaction(Hr),r=await n.objectStore(Hr).get(Fu(t));return await n.done,r}catch(e){if(e instanceof Bt)jt.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(n.message)}}}async function Rl(t,e){try{const r=(await Uu()).transaction(Hr,"readwrite");await r.objectStore(Hr).put(e,Fu(t)),await r.done}catch(n){if(n instanceof Bt)jt.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(r.message)}}}function Fu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=1024,hm=30*24*60*60*1e3;class fm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Cl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=hm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cl(),{heartbeatsToSend:r,unsentEntries:s}=dm(this._heartbeatsCache.heartbeats),o=Li(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return jt.warn(n),""}}}function Cl(){return new Date().toISOString().substring(0,10)}function dm(t,e=um){const n=[];let r=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Pl(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pl(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eg()?tg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pl(t){return Li(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t){Xn(new Rn("platform-logger",e=>new Cg(e),"PRIVATE")),Xn(new Rn("heartbeat",e=>new fm(e),"PRIVATE")),an(oo,Sl,t),an(oo,Sl,"esm2017"),an("fire-js","")}gm("");var mm="firebase",_m="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(mm,_m,"app");function Uo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ju(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ym=ju,Hu=new zr("auth","Firebase",ju());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Lo("@firebase/auth");function vm(t,...e){Ui.logLevel<=me.WARN&&Ui.warn(`Auth (${tr}): ${t}`,...e)}function bi(t,...e){Ui.logLevel<=me.ERROR&&Ui.error(`Auth (${tr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,...e){throw jo(t,...e)}function gt(t,...e){return jo(t,...e)}function Fo(t,e,n){const r=Object.assign(Object.assign({},ym()),{[e]:n});return new zr("auth","Firebase",r).create(e,{appName:t.name})}function Ft(t){return Fo(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Em(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&at(t,"argument-error"),Fo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hu.create(t,...e)}function ee(t,e,...n){if(!t)throw jo(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bi(e),new Error(e)}function Ht(t,e){t||Lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wm(){return Ol()==="http:"||Ol()==="https:"}function Ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wm()||Yp()||"connection"in navigator)?navigator.onLine:!0}function bm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=Jp()||Qp()}get(){return Im()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Jr(3e4,6e4);function fn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dn(t,e,n,r,s={}){return Bu(t,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=qr(Object.assign({key:t.config.apiKey},a)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:h},o);return Xp()||(d.referrerPolicy="no-referrer"),Vu.fetch()($u(t,t.config.apiHost,n,c),d)})}async function Bu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Tm),e);try{const s=new Rm(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw mi(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[h,d]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(t,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw mi(t,"email-already-in-use",a);if(h==="USER_DISABLED")throw mi(t,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Fo(t,p,d);at(t,p)}}catch(s){if(s instanceof Bt)throw s;at(t,"network-request-failed",{message:String(s)})}}async function Xr(t,e,n,r,s={}){const o=await dn(t,e,n,r,s);return"mfaPendingCredential"in o&&at(t,"multi-factor-auth-required",{_serverResponse:o}),o}function $u(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ho(t.config,s):`${t.config.apiScheme}://${s}`}function Am(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Rm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),Sm.get())})}}function mi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gt(t,e,r);return s.customData._tokenResponse=n,s}function kl(t){return t!==void 0&&t.enterprise!==void 0}class Cm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Am(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pm(t,e){return dn(t,"GET","/v2/recaptchaConfig",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Om(t,e){return dn(t,"POST","/v1/accounts:delete",e)}async function Wu(t,e){return dn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function km(t,e=!1){const n=On(t),r=await n.getIdToken(e),s=Vo(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Or(js(s.auth_time)),issuedAtTime:Or(js(s.iat)),expirationTime:Or(js(s.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function js(t){return Number(t)*1e3}function Vo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pu(n);return s?JSON.parse(s):(bi("Failed to decode base64 JWT payload"),null)}catch(s){return bi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nl(t){const e=Vo(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&Nm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Nm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Or(this.lastLoginAt),this.creationTime=Or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Vr(t,Wu(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Ku(o.providerUserInfo):[],c=xm(t.providerData,a),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(c!=null&&c.length),p=h?d:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new uo(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,_)}async function Lm(t){const e=On(t);await Fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ku(t){return t.map(e=>{var{providerId:n}=e,r=Uo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(t,e){const n=await Bu(t,{},async()=>{const r=qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=$u(t,s,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Vu.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Um(t,e){return dn(t,"POST","/v2/accounts:revokeToken",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Nl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await Mm(e,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,a=new Gn;return r&&(ee(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(ee(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gn,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,o=Uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new uo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return km(this,e)}reload(){return Lm(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(Ft(this.auth));const e=await this.getIdToken();return await Vr(this,Om(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,o,a,c,h,d,p;const _=(r=n.displayName)!==null&&r!==void 0?r:void 0,T=(s=n.email)!==null&&s!==void 0?s:void 0,C=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,L=(a=n.photoURL)!==null&&a!==void 0?a:void 0,U=(c=n.tenantId)!==null&&c!==void 0?c:void 0,z=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,J=(d=n.createdAt)!==null&&d!==void 0?d:void 0,$=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:G,emailVerified:W,isAnonymous:oe,providerData:ue,stsTokenManager:w}=n;ee(G&&w,e,"internal-error");const m=Gn.fromJSON(this.name,w);ee(typeof G=="string",e,"internal-error"),qt(_,e.name),qt(T,e.name),ee(typeof W=="boolean",e,"internal-error"),ee(typeof oe=="boolean",e,"internal-error"),qt(C,e.name),qt(L,e.name),qt(U,e.name),qt(z,e.name),qt(J,e.name),qt($,e.name);const E=new xt({uid:G,auth:e,email:T,emailVerified:W,displayName:_,isAnonymous:oe,photoURL:L,phoneNumber:C,tenantId:U,stsTokenManager:m,createdAt:J,lastLoginAt:$});return ue&&Array.isArray(ue)&&(E.providerData=ue.map(I=>Object.assign({},I))),z&&(E._redirectEventId=z),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gn;s.updateFromServerResponse(n);const o=new xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fi(o),o}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Ku(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new Gn;c.updateFromIdToken(r);const h=new xt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new uo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map;function Mt(t){Ht(t instanceof Function,"Expected a class definition");let e=Dl.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gu.type="NONE";const Ll=Gu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e,n){return`firebase:${t}:${e}:${n}`}class zn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Ti(this.userKey,s.apiKey,o),this.fullPersistenceKey=Ti("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zn(Mt(Ll),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||Mt(Ll);const a=Ti(r,e.config.apiKey,e.name);let c=null;for(const d of n)try{const p=await d._get(a);if(p){const _=xt._fromJSON(e,p);d!==o&&(c=_),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new zn(o,e,r):(o=h[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new zn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qu(e))return"Blackberry";if(Zu(e))return"Webos";if(qu(e))return"Safari";if((e.includes("chrome/")||Ju(e))&&!e.includes("edge/"))return"Chrome";if(Yu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zu(t=Ke()){return/firefox\//i.test(t)}function qu(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ju(t=Ke()){return/crios\//i.test(t)}function Xu(t=Ke()){return/iemobile/i.test(t)}function Yu(t=Ke()){return/android/i.test(t)}function Qu(t=Ke()){return/blackberry/i.test(t)}function Zu(t=Ke()){return/webos/i.test(t)}function Bo(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fm(t=Ke()){var e;return Bo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jm(){return Zp()&&document.documentMode===10}function eh(t=Ke()){return Bo(t)||Yu(t)||Zu(t)||Qu(t)||/windows phone/i.test(t)||Xu(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t,e=[]){let n;switch(t){case"Browser":n=xl(Ke());break;case"Worker":n=`${xl(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${tr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,c)=>{try{const h=e(o);a(h)}catch(h){c(h)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(t,e={}){return dn(t,"GET","/v2/passwordPolicy",fn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=6;class $m{constructor(e){var n,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Bm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,o,a,c;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(c=h.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),h}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ml(this),this.idTokenSubscription=new Ml(this),this.beforeStateQueue=new Hm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wu(this,{idToken:e}),r=await xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ft(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===c)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(Ft(this));const n=e?On(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(Ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(Ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vm(this),n=new $m(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Um(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(n);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pn(t){return On(t)}class Ml{constructor(e){this.auth=e,this.observer=null,this.addObserver=og(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Km(t){ts=t}function nh(t){return ts.loadJS(t)}function Gm(){return ts.recaptchaEnterpriseScript}function zm(){return ts.gapiScript}function qm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Jm{constructor(){this.enterprise=new Xm}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Xm{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ym="recaptcha-enterprise",rh="NO_RECAPTCHA";class Qm{constructor(e){this.type=Ym,this.auth=pn(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{Pm(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Cm(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{c(h)})})}function s(o,a,c){const h=window.grecaptcha;kl(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(rh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Jm().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(c=>{if(!n&&kl(window.grecaptcha))s(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Gm();h.length!==0&&(h+=c),nh(h).then(()=>{s(c,o,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Ul(t,e,n,r=!1,s=!1){const o=new Qm(t);let a;if(s)a=rh;else try{a=await o.verify(n)}catch{a=await o.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ho(t,e,n,r,s){var o;if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ul(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ul(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t,e){const n=Mo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(xi(o,e??{}))return s;at(s,"already-initialized")}return n.initialize({options:e})}function e_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function t_(t,e,n){const r=pn(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=ih(e),{host:a,port:c}=n_(e),h=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),r_()}function ih(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function n_(t){const e=ih(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Fl(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Fl(a)}}}function Fl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function r_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}async function i_(t,e){return dn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(t,e){return Xr(t,"POST","/v1/accounts:signInWithPassword",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(t,e){return Xr(t,"POST","/v1/accounts:signInWithEmailLink",fn(t,e))}async function a_(t,e){return Xr(t,"POST","/v1/accounts:signInWithEmailLink",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends $o{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Br(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Br(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ho(e,n,"signInWithPassword",s_);case"emailLink":return o_(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ho(e,r,"signUpPassword",i_);case"emailLink":return a_(e,{idToken:n,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(t,e){return Xr(t,"POST","/v1/accounts:signInWithIdp",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="http://localhost";class Cn extends $o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):at("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,o=Uo(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Cn(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qn(e,n)}buildRequest(){const e={requestUri:l_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function u_(t){const e=Ir(br(t)).link,n=e?Ir(br(e)).deep_link_id:null,r=Ir(br(t)).deep_link_id;return(r?Ir(br(r)).link:null)||r||n||e||t}class Wo{constructor(e){var n,r,s,o,a,c;const h=Ir(br(e)),d=(n=h.apiKey)!==null&&n!==void 0?n:null,p=(r=h.oobCode)!==null&&r!==void 0?r:null,_=c_((s=h.mode)!==null&&s!==void 0?s:null);ee(d&&p&&_,"argument-error"),this.apiKey=d,this.operation=_,this.code=p,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=h.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=u_(e);try{return new Wo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.providerId=nr.PROVIDER_ID}static credential(e,n){return Br._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wo.parseLink(n);return ee(r,"argument-error"),Br._fromEmailAndCode(e,r.code,r.tenantId)}}nr.PROVIDER_ID="password";nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Ko{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Yr{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Yr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dt.credential(n,r)}catch{return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com";Dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Yr{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Yr{constructor(){super("twitter.com")}static credential(e,n){return Cn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(t,e){return Xr(t,"POST","/v1/accounts:signUp",fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const o=await xt._fromIdTokenResponse(e,r,s),a=jl(r);return new Pn({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jl(r);return new Pn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Bt{constructor(e,n,r,s){var o;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ji.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ji(e,n,r,s)}}function sh(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ji._fromErrorAndOperation(t,o,e,r):o})}async function f_(t,e,n=!1){const r=await Vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(t,e,n=!1){const{auth:r}=t;if(ft(r.app))return Promise.reject(Ft(r));const s="reauthenticate";try{const o=await Vr(t,sh(r,s,e,t),n);ee(o.idToken,r,"internal-error");const a=Vo(o.idToken);ee(a,r,"internal-error");const{sub:c}=a;return ee(t.uid===c,r,"user-mismatch"),Pn._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&at(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(t,e,n=!1){if(ft(t.app))return Promise.reject(Ft(t));const r="signIn",s=await sh(t,r,e),o=await Pn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}async function p_(t,e){return oh(pn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ah(t){const e=pn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function g_(t,e,n){if(ft(t.app))return Promise.reject(Ft(t));const r=pn(t),a=await ho(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",h_).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&ah(t),h}),c=await Pn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function m_(t,e,n){return ft(t.app)?Promise.reject(Ft(t)):p_(On(t),nr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ah(t),r})}function __(t,e,n,r){return On(t).onIdTokenChanged(e,n,r)}function y_(t,e,n){return On(t).beforeAuthStateChanged(e,n)}const Hi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hi,"1"),this.storage.removeItem(Hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=1e3,E_=10;class ch extends lh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,h)=>{this.notifyListeners(a,h)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);jm()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,E_):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},v_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ch.type="LOCAL";const w_=ch;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends lh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uh.type="SESSION";const hh=uh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ns(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(n.origin,o)),h=await I_(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ns.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,h)=>{const d=Go("",20);s.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const T=_;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(T.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function T_(t){Tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function S_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function A_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function R_(){return fh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="firebaseLocalStorageDb",C_=1,Vi="firebaseLocalStorage",ph="fbase_key";class Qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rs(t,e){return t.transaction([Vi],e?"readwrite":"readonly").objectStore(Vi)}function P_(){const t=indexedDB.deleteDatabase(dh);return new Qr(t).toPromise()}function fo(){const t=indexedDB.open(dh,C_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vi,{keyPath:ph})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vi)?e(r):(r.close(),await P_(),e(await fo()))})})}async function Hl(t,e,n){const r=rs(t,!0).put({[ph]:e,value:n});return new Qr(r).toPromise()}async function O_(t,e){const n=rs(t,!1).get(e),r=await new Qr(n).toPromise();return r===void 0?null:r.value}function Vl(t,e){const n=rs(t,!0).delete(e);return new Qr(n).toPromise()}const k_=800,N_=3;class gh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>N_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ns._getInstance(R_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await S_(),!this.activeServiceWorker)return;this.sender=new b_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||A_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fo();return await Hl(e,Hi,"1"),await Vl(e,Hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>O_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=rs(s,!1).getAll();return new Qr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),k_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gh.type="LOCAL";const D_=gh;new Jr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e){return e?Mt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends $o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function L_(t){return oh(t.auth,new zo(t),t.bypassAuthState)}function x_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),d_(n,new zo(t),t.bypassAuthState)}async function M_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),f_(n,new zo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return L_;case"linkViaPopup":case"linkViaRedirect":return M_;case"reauthViaPopup":case"reauthViaRedirect":return x_;default:at(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Jr(2e3,1e4);async function F_(t,e,n){if(ft(t.app))return Promise.reject(gt(t,"operation-not-supported-in-this-environment"));const r=pn(t);Em(t,e,Ko);const s=mh(r,n);return new bn(r,"signInViaPopup",e,s).executeNotNull()}class bn extends _h{constructor(e,n,r,s,o){super(e,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=Go();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U_.get())};e()}}bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="pendingRedirect",Si=new Map;class H_ extends _h{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Si.get(this.auth._key());if(!e){try{const r=await V_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Si.set(this.auth._key(),e)}return this.bypassAuthState||Si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V_(t,e){const n=W_(e),r=$_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function B_(t,e){Si.set(t._key(),e)}function $_(t){return Mt(t._redirectPersistence)}function W_(t){return Ti(j_,t.config.apiKey,t.name)}async function K_(t,e,n=!1){if(ft(t.app))return Promise.reject(Ft(t));const r=pn(t),s=mh(r,e),a=await new H_(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=10*60*1e3;class z_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!q_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bl(e))}saveEventToCache(e){this.cachedEventUids.add(Bl(e)),this.lastProcessedEventTime=Date.now()}}function Bl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function q_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(t,e={}){return dn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y_=/^https?/;async function Q_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await J_(t);for(const n of e)try{if(Z_(n))return}catch{}at(t,"unauthorized-domain")}function Z_(t){const e=co(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Y_.test(n))return!1;if(X_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Jr(3e4,6e4);function $l(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ty(t){return new Promise((e,n)=>{var r,s,o;function a(){$l(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$l(),n(gt(t,"network-request-failed"))},timeout:ey.get()})}if(!((s=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Tt().gapi)===null||o===void 0)&&o.load)a();else{const c=qm("iframefcb");return Tt()[c]=()=>{gapi.load?a():n(gt(t,"network-request-failed"))},nh(`${zm()}?onload=${c}`).catch(h=>n(h))}}).catch(e=>{throw Ai=null,e})}let Ai=null;function ny(t){return Ai=Ai||ty(t),Ai}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=new Jr(5e3,15e3),iy="__/auth/iframe",sy="emulator/auth/iframe",oy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ay=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ly(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ho(e,sy):`https://${t.config.authDomain}/${iy}`,r={apiKey:e.apiKey,appName:t.name,v:tr},s=ay.get(t.config.apiHost);s&&(r.eid=s);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${qr(r).slice(1)}`}async function cy(t){const e=await ny(t),n=Tt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:ly(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oy,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=gt(t,"network-request-failed"),c=Tt().setTimeout(()=>{o(a)},ry.get());function h(){Tt().clearTimeout(c),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hy=500,fy=600,dy="_blank",py="http://localhost";class Wl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gy(t,e,n,r=hy,s=fy){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h=Object.assign(Object.assign({},uy),{width:r.toString(),height:s.toString(),top:o,left:a}),d=Ke().toLowerCase();n&&(c=Ju(d)?dy:n),zu(d)&&(e=e||py,h.scrollbars="yes");const p=Object.entries(h).reduce((T,[C,L])=>`${T}${C}=${L},`,"");if(Fm(d)&&c!=="_self")return my(e||"",c),new Wl(null);const _=window.open(e||"",c,p);ee(_,t,"popup-blocked");try{_.focus()}catch{}return new Wl(_)}function my(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="__/auth/handler",yy="emulator/auth/handler",vy=encodeURIComponent("fac");async function Kl(t,e,n,r,s,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:tr,eventId:s};if(e instanceof Ko){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",sg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,_]of Object.entries({}))a[p]=_}if(e instanceof Yr){const p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const h=await t._getAppCheckToken(),d=h?`#${vy}=${encodeURIComponent(h)}`:"";return`${Ey(t)}?${qr(c).slice(1)}${d}`}function Ey({config:t}){return t.emulator?Ho(t,yy):`https://${t.authDomain}/${_y}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="webStorageSupport";class wy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hh,this._completeRedirectFn=K_,this._overrideRedirectResult=B_}async _openPopup(e,n,r,s){var o;Ht((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Kl(e,n,r,co(),s);return gy(e,a,Go())}async _openRedirect(e,n,r,s){await this._originValidation(e);const o=await Kl(e,n,r,co(),s);return T_(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(Ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cy(e),r=new z_(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hs,{type:Hs},s=>{var o;const a=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Hs];a!==void 0&&n(!!a),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Q_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eh()||qu()||Bo()}}const Iy=wy;var Gl="@firebase/auth",zl="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sy(t){Xn(new Rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:th(t)},d=new Wm(r,s,o,h);return e_(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new Rn("auth-internal",e=>{const n=pn(e.getProvider("auth").getImmediate());return(r=>new by(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Gl,zl,Ty(t)),an(Gl,zl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=5*60,Ry=Nu("authIdTokenMaxAge")||Ay;let ql=null;const Cy=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ry)return;const s=n==null?void 0:n.token;ql!==s&&(ql=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Py(t=Mu()){const e=Mo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Zm(t,{popupRedirectResolver:Iy,persistence:[D_,w_,hh]}),r=Nu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Cy(o.toString());y_(n,a,()=>a(n.currentUser)),__(n,c=>a(c))}}const s=Ou("auth");return s&&t_(n,`http://${s}`),n}function Oy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Km({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const o=gt("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",Oy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sy("Browser");var Jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function E(){}E.prototype=m.prototype,w.D=m.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(I,b,A){for(var v=Array(arguments.length-2),je=2;je<arguments.length;je++)v[je-2]=arguments[je];return m.prototype[b].apply(I,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,E){E||(E=0);var I=Array(16);if(typeof m=="string")for(var b=0;16>b;++b)I[b]=m.charCodeAt(E++)|m.charCodeAt(E++)<<8|m.charCodeAt(E++)<<16|m.charCodeAt(E++)<<24;else for(b=0;16>b;++b)I[b]=m[E++]|m[E++]<<8|m[E++]<<16|m[E++]<<24;m=w.g[0],E=w.g[1],b=w.g[2];var A=w.g[3],v=m+(A^E&(b^A))+I[0]+3614090360&4294967295;m=E+(v<<7&4294967295|v>>>25),v=A+(b^m&(E^b))+I[1]+3905402710&4294967295,A=m+(v<<12&4294967295|v>>>20),v=b+(E^A&(m^E))+I[2]+606105819&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(m^b&(A^m))+I[3]+3250441966&4294967295,E=b+(v<<22&4294967295|v>>>10),v=m+(A^E&(b^A))+I[4]+4118548399&4294967295,m=E+(v<<7&4294967295|v>>>25),v=A+(b^m&(E^b))+I[5]+1200080426&4294967295,A=m+(v<<12&4294967295|v>>>20),v=b+(E^A&(m^E))+I[6]+2821735955&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(m^b&(A^m))+I[7]+4249261313&4294967295,E=b+(v<<22&4294967295|v>>>10),v=m+(A^E&(b^A))+I[8]+1770035416&4294967295,m=E+(v<<7&4294967295|v>>>25),v=A+(b^m&(E^b))+I[9]+2336552879&4294967295,A=m+(v<<12&4294967295|v>>>20),v=b+(E^A&(m^E))+I[10]+4294925233&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(m^b&(A^m))+I[11]+2304563134&4294967295,E=b+(v<<22&4294967295|v>>>10),v=m+(A^E&(b^A))+I[12]+1804603682&4294967295,m=E+(v<<7&4294967295|v>>>25),v=A+(b^m&(E^b))+I[13]+4254626195&4294967295,A=m+(v<<12&4294967295|v>>>20),v=b+(E^A&(m^E))+I[14]+2792965006&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(m^b&(A^m))+I[15]+1236535329&4294967295,E=b+(v<<22&4294967295|v>>>10),v=m+(b^A&(E^b))+I[1]+4129170786&4294967295,m=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(m^E))+I[6]+3225465664&4294967295,A=m+(v<<9&4294967295|v>>>23),v=b+(m^E&(A^m))+I[11]+643717713&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^m&(b^A))+I[0]+3921069994&4294967295,E=b+(v<<20&4294967295|v>>>12),v=m+(b^A&(E^b))+I[5]+3593408605&4294967295,m=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(m^E))+I[10]+38016083&4294967295,A=m+(v<<9&4294967295|v>>>23),v=b+(m^E&(A^m))+I[15]+3634488961&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^m&(b^A))+I[4]+3889429448&4294967295,E=b+(v<<20&4294967295|v>>>12),v=m+(b^A&(E^b))+I[9]+568446438&4294967295,m=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(m^E))+I[14]+3275163606&4294967295,A=m+(v<<9&4294967295|v>>>23),v=b+(m^E&(A^m))+I[3]+4107603335&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^m&(b^A))+I[8]+1163531501&4294967295,E=b+(v<<20&4294967295|v>>>12),v=m+(b^A&(E^b))+I[13]+2850285829&4294967295,m=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(m^E))+I[2]+4243563512&4294967295,A=m+(v<<9&4294967295|v>>>23),v=b+(m^E&(A^m))+I[7]+1735328473&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^m&(b^A))+I[12]+2368359562&4294967295,E=b+(v<<20&4294967295|v>>>12),v=m+(E^b^A)+I[5]+4294588738&4294967295,m=E+(v<<4&4294967295|v>>>28),v=A+(m^E^b)+I[8]+2272392833&4294967295,A=m+(v<<11&4294967295|v>>>21),v=b+(A^m^E)+I[11]+1839030562&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^m)+I[14]+4259657740&4294967295,E=b+(v<<23&4294967295|v>>>9),v=m+(E^b^A)+I[1]+2763975236&4294967295,m=E+(v<<4&4294967295|v>>>28),v=A+(m^E^b)+I[4]+1272893353&4294967295,A=m+(v<<11&4294967295|v>>>21),v=b+(A^m^E)+I[7]+4139469664&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^m)+I[10]+3200236656&4294967295,E=b+(v<<23&4294967295|v>>>9),v=m+(E^b^A)+I[13]+681279174&4294967295,m=E+(v<<4&4294967295|v>>>28),v=A+(m^E^b)+I[0]+3936430074&4294967295,A=m+(v<<11&4294967295|v>>>21),v=b+(A^m^E)+I[3]+3572445317&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^m)+I[6]+76029189&4294967295,E=b+(v<<23&4294967295|v>>>9),v=m+(E^b^A)+I[9]+3654602809&4294967295,m=E+(v<<4&4294967295|v>>>28),v=A+(m^E^b)+I[12]+3873151461&4294967295,A=m+(v<<11&4294967295|v>>>21),v=b+(A^m^E)+I[15]+530742520&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^m)+I[2]+3299628645&4294967295,E=b+(v<<23&4294967295|v>>>9),v=m+(b^(E|~A))+I[0]+4096336452&4294967295,m=E+(v<<6&4294967295|v>>>26),v=A+(E^(m|~b))+I[7]+1126891415&4294967295,A=m+(v<<10&4294967295|v>>>22),v=b+(m^(A|~E))+I[14]+2878612391&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~m))+I[5]+4237533241&4294967295,E=b+(v<<21&4294967295|v>>>11),v=m+(b^(E|~A))+I[12]+1700485571&4294967295,m=E+(v<<6&4294967295|v>>>26),v=A+(E^(m|~b))+I[3]+2399980690&4294967295,A=m+(v<<10&4294967295|v>>>22),v=b+(m^(A|~E))+I[10]+4293915773&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~m))+I[1]+2240044497&4294967295,E=b+(v<<21&4294967295|v>>>11),v=m+(b^(E|~A))+I[8]+1873313359&4294967295,m=E+(v<<6&4294967295|v>>>26),v=A+(E^(m|~b))+I[15]+4264355552&4294967295,A=m+(v<<10&4294967295|v>>>22),v=b+(m^(A|~E))+I[6]+2734768916&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~m))+I[13]+1309151649&4294967295,E=b+(v<<21&4294967295|v>>>11),v=m+(b^(E|~A))+I[4]+4149444226&4294967295,m=E+(v<<6&4294967295|v>>>26),v=A+(E^(m|~b))+I[11]+3174756917&4294967295,A=m+(v<<10&4294967295|v>>>22),v=b+(m^(A|~E))+I[2]+718787259&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~m))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var E=m-this.blockSize,I=this.B,b=this.h,A=0;A<m;){if(b==0)for(;A<=E;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<m;)if(I[b++]=w.charCodeAt(A++),b==this.blockSize){s(this,I),b=0;break}}else for(;A<m;)if(I[b++]=w[A++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var E=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=E&255,E/=256;for(this.u(w),w=Array(16),m=E=0;4>m;++m)for(var I=0;32>I;I+=8)w[E++]=this.g[m]>>>I&255;return w};function o(w,m){var E=c;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=m(w)}function a(w,m){this.h=m;for(var E=[],I=!0,b=w.length-1;0<=b;b--){var A=w[b]|0;I&&A==m||(E[b]=A,I=!1)}this.g=E}var c={};function h(w){return-128<=w&&128>w?o(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return _;if(0>w)return z(d(-w));for(var m=[],E=1,I=0;w>=E;I++)m[I]=w/E|0,E*=4294967296;return new a(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return z(p(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(m,8)),I=_,b=0;b<w.length;b+=8){var A=Math.min(8,w.length-b),v=parseInt(w.substring(b,b+A),m);8>A?(A=d(Math.pow(m,A)),I=I.j(A).add(d(v))):(I=I.j(E),I=I.add(d(v)))}return I}var _=h(0),T=h(1),C=h(16777216);t=a.prototype,t.m=function(){if(U(this))return-z(this).m();for(var w=0,m=1,E=0;E<this.g.length;E++){var I=this.i(E);w+=(0<=I?I:4294967296+I)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(L(this))return"0";if(U(this))return"-"+z(this).toString(w);for(var m=d(Math.pow(w,6)),E=this,I="";;){var b=W(E,m).g;E=J(E,b.j(m));var A=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=b,L(E))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function L(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function U(w){return w.h==-1}t.l=function(w){return w=J(this,w),U(w)?-1:L(w)?0:1};function z(w){for(var m=w.g.length,E=[],I=0;I<m;I++)E[I]=~w.g[I];return new a(E,~w.h).add(T)}t.abs=function(){return U(this)?z(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],I=0,b=0;b<=m;b++){var A=I+(this.i(b)&65535)+(w.i(b)&65535),v=(A>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);I=v>>>16,A&=65535,v&=65535,E[b]=v<<16|A}return new a(E,E[E.length-1]&-2147483648?-1:0)};function J(w,m){return w.add(z(m))}t.j=function(w){if(L(this)||L(w))return _;if(U(this))return U(w)?z(this).j(z(w)):z(z(this).j(w));if(U(w))return z(this.j(z(w)));if(0>this.l(C)&&0>w.l(C))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,E=[],I=0;I<2*m;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<w.g.length;b++){var A=this.i(I)>>>16,v=this.i(I)&65535,je=w.i(b)>>>16,et=w.i(b)&65535;E[2*I+2*b]+=v*et,$(E,2*I+2*b),E[2*I+2*b+1]+=A*et,$(E,2*I+2*b+1),E[2*I+2*b+1]+=v*je,$(E,2*I+2*b+1),E[2*I+2*b+2]+=A*je,$(E,2*I+2*b+2)}for(I=0;I<m;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=m;I<2*m;I++)E[I]=0;return new a(E,0)};function $(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function G(w,m){this.g=w,this.h=m}function W(w,m){if(L(m))throw Error("division by zero");if(L(w))return new G(_,_);if(U(w))return m=W(z(w),m),new G(z(m.g),z(m.h));if(U(m))return m=W(w,z(m)),new G(z(m.g),m.h);if(30<w.g.length){if(U(w)||U(m))throw Error("slowDivide_ only works with positive integers.");for(var E=T,I=m;0>=I.l(w);)E=oe(E),I=oe(I);var b=ue(E,1),A=ue(I,1);for(I=ue(I,2),E=ue(E,2);!L(I);){var v=A.add(I);0>=v.l(w)&&(b=b.add(E),A=v),I=ue(I,1),E=ue(E,1)}return m=J(w,b.j(m)),new G(b,m)}for(b=_;0<=w.l(m);){for(E=Math.max(1,Math.floor(w.m()/m.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=d(E),v=A.j(m);U(v)||0<v.l(w);)E-=I,A=d(E),v=A.j(m);L(A)&&(A=T),b=b.add(A),w=J(w,v)}return new G(b,w)}t.A=function(w){return W(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)&w.i(I);return new a(E,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)|w.i(I);return new a(E,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),E=[],I=0;I<m;I++)E[I]=this.i(I)^w.i(I);return new a(E,this.h^w.h)};function oe(w){for(var m=w.g.length+1,E=[],I=0;I<m;I++)E[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(E,w.h)}function ue(w,m){var E=m>>5;m%=32;for(var I=w.g.length-E,b=[],A=0;A<I;A++)b[A]=0<m?w.i(A+E)>>>m|w.i(A+E+1)<<32-m:w.i(A+E);return new a(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,vh=a}).apply(typeof Jl<"u"?Jl:typeof self<"u"?self:typeof window<"u"?window:{});var _i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof _i=="object"&&_i];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=n(this);function s(i,l){if(l)e:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var R=i[f];if(!(R in u))break e;u=u[R]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,R={next:function(){if(!f&&u<i.length){var P=u++;return{value:l(P,i[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function p(i,l,u){return i.call.apply(i.bind,arguments)}function _(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,f),i.apply(l,R)}}return function(){return i.apply(l,arguments)}}function T(i,l,u){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:_,T.apply(null,arguments)}function C(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function L(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,R,P){for(var j=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)j[_e-2]=arguments[_e];return l.prototype[R].apply(f,j)}}function U(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function z(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const R=i.length||0,P=f.length||0;i.length=R+P;for(let j=0;j<P;j++)i[R+j]=f[j]}else i.push(f)}}class J{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function $(i){return/^[\s\xa0]*$/.test(i)}function G(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function W(i){return W[" "](i),i}W[" "]=function(){};var oe=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ue(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function w(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function m(i){const l={};for(const u in i)l[u]=i[u];return l}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(i,l){let u,f;for(let R=1;R<arguments.length;R++){f=arguments[R];for(u in f)i[u]=f[u];for(let P=0;P<E.length;P++)u=E[P],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function b(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function A(i){c.setTimeout(()=>{throw i},0)}function v(){var i=Je;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class je{constructor(){this.h=this.g=null}add(l,u){const f=et.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var et=new J(()=>new Se,i=>i.reset());class Se{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,se=!1,Je=new je,lt=()=>{const i=c.Promise.resolve(void 0);ae=()=>{i.then(tt)}};var tt=()=>{for(var i;i=v();){try{i.h.call(i.g)}catch(u){A(u)}var l=et;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}se=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var $t=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function _t(i,l){if(be.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(oe){e:{try{W(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Ge[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&_t.aa.h.call(this)}}L(_t,be);var Ge={2:"touch",3:"pen",4:"mouse"};_t.prototype.h=function(){_t.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),K=0;function V(i,l,u,f,R){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=R,this.key=++K,this.da=this.fa=!1}function q(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function he(i){this.src=i,this.g={},this.h=0}he.prototype.add=function(i,l,u,f,R){var P=i.toString();i=this.g[P],i||(i=this.g[P]=[],this.h++);var j=y(i,l,f,R);return-1<j?(l=i[j],u||(l.fa=!1)):(l=new V(l,this.src,P,!!f,R),l.fa=u,i.push(l)),l};function g(i,l){var u=l.type;if(u in i.g){var f=i.g[u],R=Array.prototype.indexOf.call(f,l,void 0),P;(P=0<=R)&&Array.prototype.splice.call(f,R,1),P&&(q(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function y(i,l,u,f){for(var R=0;R<i.length;++R){var P=i[R];if(!P.da&&P.listener==l&&P.capture==!!u&&P.ha==f)return R}return-1}var S="closure_lm_"+(1e6*Math.random()|0),k={};function D(i,l,u,f,R){if(Array.isArray(l)){for(var P=0;P<l.length;P++)D(i,l[P],u,f,R);return null}return u=Z(u),i&&i[O]?i.K(l,u,d(f)?!!f.capture:!1,R):N(i,l,u,!1,f,R)}function N(i,l,u,f,R,P){if(!l)throw Error("Invalid event type");var j=d(R)?!!R.capture:!!R,_e=B(i);if(_e||(i[S]=_e=new he(i)),u=_e.add(l,u,f,j,P),u.proxy)return u;if(f=H(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)$t||(R=j),R===void 0&&(R=!1),i.addEventListener(l.toString(),f,R);else if(i.attachEvent)i.attachEvent(x(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function H(){function i(u){return l.call(i.src,i.listener,u)}const l=Y;return i}function F(i,l,u,f,R){if(Array.isArray(l))for(var P=0;P<l.length;P++)F(i,l[P],u,f,R);else f=d(f)?!!f.capture:!!f,u=Z(u),i&&i[O]?(i=i.i,l=String(l).toString(),l in i.g&&(P=i.g[l],u=y(P,u,f,R),-1<u&&(q(P[u]),Array.prototype.splice.call(P,u,1),P.length==0&&(delete i.g[l],i.h--)))):i&&(i=B(i))&&(l=i.g[l.toString()],i=-1,l&&(i=y(l,u,f,R)),(u=-1<i?l[i]:null)&&M(u))}function M(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[O])g(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(x(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=B(l))?(g(u,i),u.h==0&&(u.src=null,l[S]=null)):q(i)}}}function x(i){return i in k?k[i]:k[i]="on"+i}function Y(i,l){if(i.da)i=!0;else{l=new _t(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&M(i),i=u.call(f,l)}return i}function B(i){return i=i[S],i instanceof he?i:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(i){return typeof i=="function"?i:(i[X]||(i[X]=function(l){return i.handleEvent(l)}),i[X])}function Q(){Ie.call(this),this.i=new he(this),this.M=this,this.F=null}L(Q,Ie),Q.prototype[O]=!0,Q.prototype.removeEventListener=function(i,l,u,f){F(this,i,l,u,f)};function ie(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new be(l,i);else if(l instanceof be)l.target=l.target||i;else{var R=l;l=new be(f,i),I(l,R)}if(R=!0,u)for(var P=u.length-1;0<=P;P--){var j=l.g=u[P];R=le(j,f,!0,l)&&R}if(j=l.g=i,R=le(j,f,!0,l)&&R,R=le(j,f,!1,l)&&R,u)for(P=0;P<u.length;P++)j=l.g=u[P],R=le(j,f,!1,l)&&R}Q.prototype.N=function(){if(Q.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)q(u[f]);delete i.g[l],i.h--}}this.F=null},Q.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},Q.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function le(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,P=0;P<l.length;++P){var j=l[P];if(j&&!j.da&&j.capture==u){var _e=j.listener,Pe=j.ha||j.src;j.fa&&g(i.i,j),R=_e.call(Pe,f)!==!1&&R}}return R&&!f.defaultPrevented}function Oe(i,l,u){if(typeof i=="function")u&&(i=T(i,u));else if(i&&typeof i.handleEvent=="function")i=T(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function Re(i){i.g=Oe(()=>{i.g=null,i.i&&(i.i=!1,Re(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class nt extends Ie{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Re(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(i){Ie.call(this),this.h=i,this.g={}}L(ke,Ie);var Wt=[];function rr(i){ue(i.g,function(l,u){this.g.hasOwnProperty(u)&&M(l)},i),i.g={}}ke.prototype.N=function(){ke.aa.N.call(this),rr(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ce=c.JSON.stringify,rt=c.JSON.parse,ei=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function ss(){}ss.prototype.h=null;function ea(i){return i.h||(i.h=i.i())}function Hh(){}var ir={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function os(){be.call(this,"d")}L(os,be);function as(){be.call(this,"c")}L(as,be);var kn={},ta=null;function ls(){return ta=ta||new Q}kn.La="serverreachability";function na(i){be.call(this,kn.La,i)}L(na,be);function sr(i){const l=ls();ie(l,new na(l))}kn.STAT_EVENT="statevent";function ra(i,l){be.call(this,kn.STAT_EVENT,i),this.stat=l}L(ra,be);function He(i){const l=ls();ie(l,new ra(l,i))}kn.Ma="timingevent";function ia(i,l){be.call(this,kn.Ma,i),this.size=l}L(ia,be);function or(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function ar(){this.g=!0}ar.prototype.xa=function(){this.g=!1};function Vh(i,l,u,f,R,P){i.info(function(){if(i.g)if(P)for(var j="",_e=P.split("&"),Pe=0;Pe<_e.length;Pe++){var fe=_e[Pe].split("=");if(1<fe.length){var Ne=fe[0];fe=fe[1];var De=Ne.split("_");j=2<=De.length&&De[1]=="type"?j+(Ne+"="+fe+"&"):j+(Ne+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+f+") [attempt "+R+"]: "+l+`
`+u+`
`+j})}function Bh(i,l,u,f,R,P,j){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+R+"]: "+l+`
`+u+`
`+P+" "+j})}function Nn(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Wh(i,u)+(f?" "+f:"")})}function $h(i,l){i.info(function(){return"TIMEOUT: "+l})}ar.prototype.info=function(){};function Wh(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var R=f[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Ce(u)}catch{return l}}var cs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},us;function ti(){}L(ti,ss),ti.prototype.g=function(){return new XMLHttpRequest},ti.prototype.i=function(){return{}},us=new ti;function Kt(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new ke(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sa}function sa(){this.i=null,this.g="",this.h=!1}var oa={},hs={};function fs(i,l,u){i.L=1,i.v=si(At(l)),i.m=u,i.P=!0,aa(i,null)}function aa(i,l){i.F=Date.now(),ni(i),i.A=At(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),wa(u.i,"t",f),i.C=0,u=i.j.J,i.h=new sa,i.g=ja(i.j,u?l:null,!i.m),0<i.O&&(i.M=new nt(T(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var R="readystatechange";Array.isArray(R)||(R&&(Wt[0]=R.toString()),R=Wt);for(var P=0;P<R.length;P++){var j=D(u,R[P],f||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),sr(),Vh(i.i,i.u,i.A,i.l,i.R,i.m)}Kt.prototype.ca=function(i){i=i.target;const l=this.M;l&&Rt(i)==3?l.j():this.Y(i)},Kt.prototype.Y=function(i){try{if(i==this.g)e:{const De=Rt(this.g);var l=this.g.Ba();const xn=this.g.Z();if(!(3>De)&&(De!=3||this.g&&(this.h.h||this.g.oa()||Ca(this.g)))){this.J||De!=4||l==7||(l==8||0>=xn?sr(3):sr(2)),ds(this);var u=this.g.Z();this.X=u;t:if(la(this)){var f=Ca(this.g);i="";var R=f.length,P=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),lr(this);var j="";break t}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(P&&l==R-1)});f.length=0,this.h.g+=i,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=u==200,Bh(this.i,this.u,this.A,this.l,this.R,De,u),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,Pe=this.g;if((_e=Pe.g?Pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(_e)){var fe=_e;break t}}fe=null}if(u=fe)Nn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ps(this,u);else{this.o=!1,this.s=3,He(12),gn(this),lr(this);break e}}if(this.P){u=!0;let ct;for(;!this.J&&this.C<j.length;)if(ct=Gh(this,j),ct==hs){De==4&&(this.s=4,He(14),u=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==oa){this.s=4,He(15),Nn(this.i,this.l,j,"[Invalid Chunk]"),u=!1;break}else Nn(this.i,this.l,ct,null),ps(this,ct);if(la(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),De!=4||j.length!=0||this.h.h||(this.s=1,He(16),u=!1),this.o=this.o&&u,!u)Nn(this.i,this.l,j,"[Invalid Chunked Response]"),gn(this),lr(this);else if(0<j.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Es(Ne),Ne.M=!0,He(11))}}else Nn(this.i,this.l,j,null),ps(this,j);De==4&&gn(this),this.o&&!this.J&&(De==4?xa(this.j,this):(this.o=!1,ni(this)))}else uf(this.g),u==400&&0<j.indexOf("Unknown SID")?(this.s=3,He(12)):(this.s=0,He(13)),gn(this),lr(this)}}}catch{}finally{}};function la(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Gh(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?hs:(u=Number(l.substring(u,f)),isNaN(u)?oa:(f+=1,f+u>l.length?hs:(l=l.slice(f,f+u),i.C=f+u,l)))}Kt.prototype.cancel=function(){this.J=!0,gn(this)};function ni(i){i.S=Date.now()+i.I,ca(i,i.I)}function ca(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=or(T(i.ba,i),l)}function ds(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Kt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?($h(this.i,this.A),this.L!=2&&(sr(),He(17)),gn(this),this.s=2,lr(this)):ca(this,this.S-i)};function lr(i){i.j.G==0||i.J||xa(i.j,i)}function gn(i){ds(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,rr(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function ps(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||gs(u.h,i))){if(!i.K&&gs(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var R=f;if(R[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)hi(u),ci(u);else break e;vs(u),He(18)}}else u.za=R[1],0<u.za-u.T&&37500>R[2]&&u.F&&u.v==0&&!u.C&&(u.C=or(T(u.Za,u),6e3));if(1>=fa(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else _n(u,11)}else if((i.K||u.g==i)&&hi(u),!$(l))for(R=u.Da.g.parse(l),l=0;l<R.length;l++){let fe=R[l];if(u.T=fe[0],fe=fe[1],u.G==2)if(fe[0]=="c"){u.K=fe[1],u.ia=fe[2];const Ne=fe[3];Ne!=null&&(u.la=Ne,u.j.info("VER="+u.la));const De=fe[4];De!=null&&(u.Aa=De,u.j.info("SVER="+u.Aa));const xn=fe[5];xn!=null&&typeof xn=="number"&&0<xn&&(f=1.5*xn,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const ct=i.g;if(ct){const fi=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fi){var P=f.h;P.g||fi.indexOf("spdy")==-1&&fi.indexOf("quic")==-1&&fi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ms(P,P.h),P.h=null))}if(f.D){const ws=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;ws&&(f.ya=ws,Ee(f.I,f.D,ws))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var j=i;if(f.qa=Fa(f,f.J?f.ia:null,f.W),j.K){da(f.h,j);var _e=j,Pe=f.L;Pe&&(_e.I=Pe),_e.B&&(ds(_e),ni(_e)),f.g=j}else Da(f);0<u.i.length&&ui(u)}else fe[0]!="stop"&&fe[0]!="close"||_n(u,7);else u.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?_n(u,7):ys(u):fe[0]!="noop"&&u.l&&u.l.ta(fe),u.v=0)}}sr(4)}catch{}}var zh=class{constructor(i,l){this.g=i,this.map=l}};function ua(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ha(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function fa(i){return i.h?1:i.g?i.g.size:0}function gs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ms(i,l){i.g?i.g.add(l):i.h=l}function da(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}ua.prototype.cancel=function(){if(this.i=pa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function pa(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return U(i.i)}function qh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function Jh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function ga(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=Jh(i),f=qh(i),R=f.length,P=0;P<R;P++)l.call(void 0,f[P],u&&u[P],i)}var ma=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xh(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),R=null;if(0<=f){var P=i[u].substring(0,f);R=i[u].substring(f+1)}else P=i[u];l(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function mn(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof mn){this.h=i.h,ri(this,i.j),this.o=i.o,this.g=i.g,ii(this,i.s),this.l=i.l;var l=i.i,u=new hr;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),_a(this,u),this.m=i.m}else i&&(l=String(i).match(ma))?(this.h=!1,ri(this,l[1]||"",!0),this.o=cr(l[2]||""),this.g=cr(l[3]||"",!0),ii(this,l[4]),this.l=cr(l[5]||"",!0),_a(this,l[6]||"",!0),this.m=cr(l[7]||"")):(this.h=!1,this.i=new hr(null,this.h))}mn.prototype.toString=function(){var i=[],l=this.j;l&&i.push(ur(l,ya,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(ur(l,ya,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(ur(u,u.charAt(0)=="/"?Zh:Qh,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",ur(u,tf)),i.join("")};function At(i){return new mn(i)}function ri(i,l,u){i.j=u?cr(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function ii(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function _a(i,l,u){l instanceof hr?(i.i=l,nf(i.i,i.h)):(u||(l=ur(l,ef)),i.i=new hr(l,i.h))}function Ee(i,l,u){i.i.set(l,u)}function si(i){return Ee(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function cr(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function ur(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,Yh),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Yh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ya=/[#\/\?@]/g,Qh=/[#\?:]/g,Zh=/[#\?]/g,ef=/[#\?@]/g,tf=/#/g;function hr(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Gt(i){i.g||(i.g=new Map,i.h=0,i.i&&Xh(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}t=hr.prototype,t.add=function(i,l){Gt(this),this.i=null,i=Dn(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function va(i,l){Gt(i),l=Dn(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Ea(i,l){return Gt(i),l=Dn(i,l),i.g.has(l)}t.forEach=function(i,l){Gt(this),this.g.forEach(function(u,f){u.forEach(function(R){i.call(l,R,f,this)},this)},this)},t.na=function(){Gt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const R=i[f];for(let P=0;P<R.length;P++)u.push(l[f])}return u},t.V=function(i){Gt(this);let l=[];if(typeof i=="string")Ea(this,i)&&(l=l.concat(this.g.get(Dn(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},t.set=function(i,l){return Gt(this),this.i=null,i=Dn(this,i),Ea(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},t.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function wa(i,l,u){va(i,l),0<u.length&&(i.i=null,i.g.set(Dn(i,l),U(u)),i.h+=u.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const P=encodeURIComponent(String(f)),j=this.V(f);for(f=0;f<j.length;f++){var R=P;j[f]!==""&&(R+="="+encodeURIComponent(String(j[f]))),i.push(R)}}return this.i=i.join("&")};function Dn(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function nf(i,l){l&&!i.j&&(Gt(i),i.i=null,i.g.forEach(function(u,f){var R=f.toLowerCase();f!=R&&(va(this,f),wa(this,R,u))},i)),i.j=l}function rf(i,l){const u=new ar;if(c.Image){const f=new Image;f.onload=C(zt,u,"TestLoadImage: loaded",!0,l,f),f.onerror=C(zt,u,"TestLoadImage: error",!1,l,f),f.onabort=C(zt,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=C(zt,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function sf(i,l){const u=new ar,f=new AbortController,R=setTimeout(()=>{f.abort(),zt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(P=>{clearTimeout(R),P.ok?zt(u,"TestPingServer: ok",!0,l):zt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),zt(u,"TestPingServer: error",!1,l)})}function zt(i,l,u,f,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),f(u)}catch{}}function of(){this.g=new ei}function af(i,l,u){const f=u||"";try{ga(i,function(R,P){let j=R;d(R)&&(j=Ce(R)),l.push(f+P+"="+encodeURIComponent(j))})}catch(R){throw l.push(f+"type="+encodeURIComponent("_badmap")),R}}function oi(i){this.l=i.Ub||null,this.j=i.eb||!1}L(oi,ss),oi.prototype.g=function(){return new ai(this.l,this.j)},oi.prototype.i=function(i){return function(){return i}}({});function ai(i,l){Q.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(ai,Q),t=ai.prototype,t.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,dr(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fr(this)),this.readyState=0},t.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,dr(this)),this.g&&(this.readyState=3,dr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ia(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ia(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}t.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?fr(this):dr(this),this.readyState==3&&Ia(this)}},t.Ra=function(i){this.g&&(this.response=this.responseText=i,fr(this))},t.Qa=function(i){this.g&&(this.response=i,fr(this))},t.ga=function(){this.g&&fr(this)};function fr(i){i.readyState=4,i.l=null,i.j=null,i.v=null,dr(i)}t.setRequestHeader=function(i,l){this.u.append(i,l)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function dr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ba(i){let l="";return ue(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function _s(i,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=ba(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):Ee(i,l,u))}function Te(i){Q.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Te,Q);var lf=/^https?$/i,cf=["POST","PUT"];t=Te.prototype,t.Ha=function(i){this.J=i},t.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():us.g(),this.v=this.o?ea(this.o):ea(us),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(P){Ta(this,P);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var R in f)u.set(R,f[R]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())u.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(P=>P.toLowerCase()=="content-type"),R=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(cf,l,void 0))||f||R||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of u)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ra(this),this.u=!0,this.g.send(i),this.u=!1}catch(P){Ta(this,P)}};function Ta(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Sa(i),li(i)}function Sa(i){i.A||(i.A=!0,ie(i,"complete"),ie(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,ie(this,"complete"),ie(this,"abort"),li(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),li(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Aa(this):this.bb())},t.bb=function(){Aa(this)};function Aa(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Rt(i)!=4||i.Z()!=2)){if(i.u&&Rt(i)==4)Oe(i.Ea,0,i);else if(ie(i,"readystatechange"),Rt(i)==4){i.h=!1;try{const j=i.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=j===0){var R=String(i.D).match(ma)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),f=!lf.test(R?R.toLowerCase():"")}u=f}if(u)ie(i,"complete"),ie(i,"success");else{i.m=6;try{var P=2<Rt(i)?i.g.statusText:""}catch{P=""}i.l=P+" ["+i.Z()+"]",Sa(i)}}finally{li(i)}}}}function li(i,l){if(i.g){Ra(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||ie(i,"ready");try{u.onreadystatechange=f}catch{}}}function Ra(i){i.I&&(c.clearTimeout(i.I),i.I=null)}t.isActive=function(){return!!this.g};function Rt(i){return i.g?i.g.readyState:0}t.Z=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),rt(l)}};function Ca(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function uf(i){const l={};i=(i.g&&2<=Rt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if($(i[f]))continue;var u=b(i[f]);const R=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const P=l[R]||[];l[R]=P,P.push(u)}w(l,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pr(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function Pa(i){this.Aa=0,this.i=[],this.j=new ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pr("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pr("baseRetryDelayMs",5e3,i),this.cb=pr("retryDelaySeedMs",1e4,i),this.Wa=pr("forwardChannelMaxRetries",2,i),this.wa=pr("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ua(i&&i.concurrentRequestLimit),this.Da=new of,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Pa.prototype,t.la=8,t.G=1,t.connect=function(i,l,u,f){He(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Fa(this,null,this.W),ui(this)};function ys(i){if(Oa(i),i.G==3){var l=i.U++,u=At(i.I);if(Ee(u,"SID",i.K),Ee(u,"RID",l),Ee(u,"TYPE","terminate"),gr(i,u),l=new Kt(i,i.j,l),l.L=2,l.v=si(At(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=ja(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ni(l)}Ua(i)}function ci(i){i.g&&(Es(i),i.g.cancel(),i.g=null)}function Oa(i){ci(i),i.u&&(c.clearTimeout(i.u),i.u=null),hi(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function ui(i){if(!ha(i.h)&&!i.s){i.s=!0;var l=i.Ga;ae||lt(),se||(ae(),se=!0),Je.add(l,i),i.B=0}}function hf(i,l){return fa(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=or(T(i.Ga,i,l),Ma(i,i.B)),i.B++,!0)}t.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const R=new Kt(this,this.j,i);let P=this.o;if(this.S&&(P?(P=m(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Na(this,R,l),u=At(this.I),Ee(u,"RID",i),Ee(u,"CVER",22),this.D&&Ee(u,"X-HTTP-Session-Id",this.D),gr(this,u),P&&(this.O?l="headers="+encodeURIComponent(String(ba(P)))+"&"+l:this.m&&_s(u,this.m,P)),ms(this.h,R),this.Ua&&Ee(u,"TYPE","init"),this.P?(Ee(u,"$req",l),Ee(u,"SID","null"),R.T=!0,fs(R,u,null)):fs(R,u,l),this.G=2}}else this.G==3&&(i?ka(this,i):this.i.length==0||ha(this.h)||ka(this))};function ka(i,l){var u;l?u=l.l:u=i.U++;const f=At(i.I);Ee(f,"SID",i.K),Ee(f,"RID",u),Ee(f,"AID",i.T),gr(i,f),i.m&&i.o&&_s(f,i.m,i.o),u=new Kt(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Na(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ms(i.h,u),fs(u,f,l)}function gr(i,l){i.H&&ue(i.H,function(u,f){Ee(l,f,u)}),i.l&&ga({},function(u,f){Ee(l,f,u)})}function Na(i,l,u){u=Math.min(i.i.length,u);var f=i.l?T(i.l.Na,i.l,i):null;e:{var R=i.i;let P=-1;for(;;){const j=["count="+u];P==-1?0<u?(P=R[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let _e=!0;for(let Pe=0;Pe<u;Pe++){let fe=R[Pe].g;const Ne=R[Pe].map;if(fe-=P,0>fe)P=Math.max(0,R[Pe].g-100),_e=!1;else try{af(Ne,j,"req"+fe+"_")}catch{f&&f(Ne)}}if(_e){f=j.join("&");break e}}}return i=i.i.splice(0,u),l.D=i,f}function Da(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;ae||lt(),se||(ae(),se=!0),Je.add(l,i),i.v=0}}function vs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=or(T(i.Fa,i),Ma(i,i.v)),i.v++,!0)}t.Fa=function(){if(this.u=null,La(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=or(T(this.ab,this),i)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,He(10),ci(this),La(this))};function Es(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function La(i){i.g=new Kt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=At(i.qa);Ee(l,"RID","rpc"),Ee(l,"SID",i.K),Ee(l,"AID",i.T),Ee(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&Ee(l,"TO",i.ja),Ee(l,"TYPE","xmlhttp"),gr(i,l),i.m&&i.o&&_s(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=si(At(l)),u.m=null,u.P=!0,aa(u,i)}t.Za=function(){this.C!=null&&(this.C=null,ci(this),vs(this),He(19))};function hi(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function xa(i,l){var u=null;if(i.g==l){hi(i),Es(i),i.g=null;var f=2}else if(gs(i.h,l))u=l.D,da(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var R=i.B;f=ls(),ie(f,new ia(f,u)),ui(i)}else Da(i);else if(R=l.s,R==3||R==0&&0<l.X||!(f==1&&hf(i,l)||f==2&&vs(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),R){case 1:_n(i,5);break;case 4:_n(i,10);break;case 3:_n(i,6);break;default:_n(i,2)}}}function Ma(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function _n(i,l){if(i.j.info("Error code "+l),l==2){var u=T(i.fb,i),f=i.Xa;const R=!f;f=new mn(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ri(f,"https"),si(f),R?rf(f.toString(),u):sf(f.toString(),u)}else He(2);i.G=0,i.l&&i.l.sa(l),Ua(i),Oa(i)}t.fb=function(i){i?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function Ua(i){if(i.G=0,i.ka=[],i.l){const l=pa(i.h);(l.length!=0||i.i.length!=0)&&(z(i.ka,l),z(i.ka,i.i),i.h.i.length=0,U(i.i),i.i.length=0),i.l.ra()}}function Fa(i,l,u){var f=u instanceof mn?At(u):new mn(u);if(f.g!="")l&&(f.g=l+"."+f.g),ii(f,f.s);else{var R=c.location;f=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var P=new mn(null);f&&ri(P,f),l&&(P.g=l),R&&ii(P,R),u&&(P.l=u),f=P}return u=i.D,l=i.ya,u&&l&&Ee(f,u,l),Ee(f,"VER",i.la),gr(i,f),f}function ja(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new Te(new oi({eb:u})):new Te(i.pa),l.Ha(i.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ha(){}t=Ha.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function it(i,l){Q.call(this),this.g=new Pa(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!$(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!$(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Ln(this)}L(it,Q),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){ys(this.g)},it.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=Ce(i),i=u);l.i.push(new zh(l.Ya++,i)),l.G==3&&ui(l)},it.prototype.N=function(){this.g.l=null,delete this.j,ys(this.g),delete this.g,it.aa.N.call(this)};function Va(i){os.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}L(Va,os);function Ba(){as.call(this),this.status=1}L(Ba,as);function Ln(i){this.g=i}L(Ln,Ha),Ln.prototype.ua=function(){ie(this.g,"a")},Ln.prototype.ta=function(i){ie(this.g,new Va(i))},Ln.prototype.sa=function(i){ie(this.g,new Ba)},Ln.prototype.ra=function(){ie(this.g,"b")},it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,cs.NO_ERROR=0,cs.TIMEOUT=8,cs.HTTP_ERROR=6,Kh.COMPLETE="complete",Hh.EventType=ir,ir.OPEN="a",ir.CLOSE="b",ir.ERROR="c",ir.MESSAGE="d",Q.prototype.listen=Q.prototype.K,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha}).apply(typeof _i<"u"?_i:typeof self<"u"?self:typeof window<"u"?window:{});const Xl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Lo("@firebase/firestore");function dt(t,...e){if(Yn.logLevel<=me.DEBUG){const n=e.map(qo);Yn.debug(`Firestore (${Zr}): ${t}`,...n)}}function Eh(t,...e){if(Yn.logLevel<=me.ERROR){const n=e.map(qo);Yn.error(`Firestore (${Zr}): ${t}`,...n)}}function ky(t,...e){if(Yn.logLevel<=me.WARN){const n=e.map(qo);Yn.warn(`Firestore (${Zr}): ${t}`,...n)}}function qo(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t="Unexpected state"){const e=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: `+t;throw Eh(e),new Error(e)}function kr(t,e){t||Jo()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class qe extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ny{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class Dy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ly{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){kr(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Nr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{dt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(dt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Nr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(dt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(kr(typeof r.accessToken=="string"),new wh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return kr(e===null||typeof e=="string"),new Be(e)}}class xy{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class My{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xy(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){kr(this.o===void 0);const r=o=>{o.error!=null&&dt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,dt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{dt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):dt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(kr(typeof n.token=="string"),this.R=n.token,new Uy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function jy(t){return t.name==="IndexedDbTransactionError"}class Bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yl,ce;(ce=Yl||(Yl={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new vh([4294967295,4294967295],0);function Vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n,r=1e3,s=1.5,o=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&dt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,o){const a=Date.now()+r,c=new Xo(e,n,a,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new qe(ze.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ql,Zl;(Zl=Ql||(Ql={})).na="default",Zl.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Map;function By(t,e,n,r){if(e===!0&&r===!0)throw new qe(ze.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $y(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Jo()}function Wy(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new qe(ze.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$y(t);throw new qe(ze.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new qe(ze.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new qe(ze.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}By("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new qe(ze.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new qe(ze.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new qe(ze.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ih{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new qe(ze.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new qe(ze.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ny;switch(r.type){case"firstParty":return new My(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new qe(ze.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ec.get(n);r&&(dt("ComponentProvider","Removing Datastore"),ec.delete(n),r.terminate())}(this),Promise.resolve()}}function Ky(t,e,n,r={}){var s;const o=(t=Wy(t,Ih))._getSettings(),a=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ky("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Be.MOCK_USER;else{c=qp(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new qe(ze.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Be(d)}t._authCredentials=new Dy(new wh(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Hy(this,"async_queue_retry"),this.fu=()=>{const r=Vs();r&&dt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Vs();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const n=Vs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const n=new Nr;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!jy(e))throw e;dt("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Eh("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Xo.createAndSchedule(this,e,n,r,o=>this.Su(o));return this.Eu.push(s),s}pu(){this.Au&&Jo()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.Eu)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.Eu.indexOf(e);this.Eu.splice(n,1)}}class Gy extends Ih{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new nc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nc(e),this._firestoreClient=void 0,await e}}}function zy(t,e){const n=typeof t=="object"?t:Mu(),r=typeof t=="string"?t:"(default)",s=Mo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Gp("firestore");o&&Ky(s,...o)}return s}(function(e,n=!0){(function(s){Zr=s})(tr),Xn(new Rn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Gy(new Ly(r.getProvider("auth-internal")),new Fy(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new qe(ze.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bi(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),an(Xl,"4.7.6",e),an(Xl,"4.7.6","esm2017")})();const qy={apiKey:"AIzaSyCbGrA-0Bx2Y5w6eiMeqDeDW5Q8W4rt-ws",authDomain:"recordatorios-f8c0e.firebaseapp.com",projectId:"recordatorios-f8c0e",storageBucket:"recordatorios-f8c0e.appspot.com",messagingSenderId:"646311992116",appId:"1:646311992116:web:xxxxxxx"},bh=xu(qy),Qn=Py(bh);zy(bh);const Jy=async(t,e)=>{try{return(await m_(Qn,t,e)).user}catch(n){throw new Error(n.message)}},Xy=async(t,e)=>{try{return(await g_(Qn,t,e)).user}catch(n){throw new Error(n.message)}},Yy=async()=>{const t=new Dt;try{return(await F_(Qn,t)).user}catch(e){throw new Error(e.message)}},Yo=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Qy={data(){return{email:"",password:"",errorMessage:null,isLoginFormVisible:!1,isRegisterFormVisible:!1}},methods:{async login(){try{await Jy(this.email,this.password),this.$router.push("/home")}catch(t){this.errorMessage="Error al iniciar sesión, por favor verifica tus credenciales.",console.error("Error de login con email: ",t)}},async loginWithGoogle(){try{await Yy(),this.$router.push("/notes")}catch(t){this.errorMessage="Hubo un problema al iniciar sesión con Google.",console.error("Error de login con Google: ",t)}},async register(){try{await Xy(this.email,this.password),this.$router.push("/home")}catch(t){this.errorMessage="Error al registrar la cuenta, por favor verifica los datos.",console.error("Error de registro: ",t)}},showLoginForm(){this.isLoginFormVisible=!0,this.isRegisterFormVisible=!1},showRegisterForm(){this.isRegisterFormVisible=!0,this.isLoginFormVisible=!1},closeForm(){this.isLoginFormVisible=!1,this.isRegisterFormVisible=!1}}},Zy={class:"landing-page"},ev={class:"buttons"},tv={key:0,class:"form-container"},nv={key:1,class:"form-container"},rv={key:2,class:"error-message"};function iv(t,e,n,r,s,o){return ht(),It("div",Zy,[e[15]||(e[15]=te("h1",null,"Bienvenido al Gestor de Recordatorios",-1)),e[16]||(e[16]=te("p",{class:"subheader"},"Organiza tus tareas de manera eficiente",-1)),te("div",ev,[te("button",{onClick:e[0]||(e[0]=(...a)=>o.loginWithGoogle&&o.loginWithGoogle(...a)),class:"google-btn"},"Iniciar sesión con Google"),te("button",{onClick:e[1]||(e[1]=(...a)=>o.showLoginForm&&o.showLoginForm(...a)),class:"login-btn"},"Iniciar sesión con correo electrónico"),te("button",{onClick:e[2]||(e[2]=(...a)=>o.showRegisterForm&&o.showRegisterForm(...a)),class:"register-btn"},"Registrar cuenta")]),s.isLoginFormVisible?(ht(),It("div",tv,[e[12]||(e[12]=te("h2",null,"Iniciar sesión",-1)),te("form",{onSubmit:e[5]||(e[5]=ro((...a)=>o.login&&o.login(...a),["prevent"]))},[vr(te("input",{type:"email","onUpdate:modelValue":e[3]||(e[3]=a=>s.email=a),placeholder:"Correo electrónico",required:""},null,512),[[wr,s.email]]),vr(te("input",{type:"password","onUpdate:modelValue":e[4]||(e[4]=a=>s.password=a),placeholder:"Contraseña",required:""},null,512),[[wr,s.password]]),e[11]||(e[11]=te("button",{type:"submit"},"Iniciar sesión",-1))],32),te("button",{onClick:e[6]||(e[6]=(...a)=>o.closeForm&&o.closeForm(...a)),class:"close-btn"},"Cerrar")])):Os("",!0),s.isRegisterFormVisible?(ht(),It("div",nv,[e[14]||(e[14]=te("h2",null,"Registrar cuenta",-1)),te("form",{onSubmit:e[9]||(e[9]=ro((...a)=>o.register&&o.register(...a),["prevent"]))},[vr(te("input",{type:"email","onUpdate:modelValue":e[7]||(e[7]=a=>s.email=a),placeholder:"Correo electrónico",required:""},null,512),[[wr,s.email]]),vr(te("input",{type:"password","onUpdate:modelValue":e[8]||(e[8]=a=>s.password=a),placeholder:"Contraseña",required:""},null,512),[[wr,s.password]]),e[13]||(e[13]=te("button",{type:"submit"},"Registrar cuenta",-1))],32),te("button",{onClick:e[10]||(e[10]=(...a)=>o.closeForm&&o.closeForm(...a)),class:"close-btn"},"Cerrar")])):Os("",!0),s.errorMessage?(ht(),It("div",rv,[te("p",null,In(s.errorMessage),1)])):Os("",!0)])}const Th=Yo(Qy,[["render",iv],["__scopeId","data-v-21cf6a66"]]),sv={name:"NotesPage",data(){return{newNoteText:"",notes:[],currentUser:null,animationIndex:null}},computed:{pendingTasksCount(){return this.notes.filter(t=>!t.completed).length},totalTasksCount(){return this.notes.length},sortedNotes(){return[...this.notes].sort((t,e)=>{const n={High:3,Normal:2,Low:1};return n[e.priority]-n[t.priority]})}},created(){try{const t=JSON.parse(localStorage.getItem("notes"))||[];this.notes=t}catch(t){console.error("Error al cargar las notas desde LocalStorage:",t),this.notes=[]}},methods:{addNote(){if(this.newNoteText.trim()==="")return;const t={id:Date.now(),text:this.newNoteText,priority:"Normal",completed:!1,createdAt:new Date().toLocaleString()};this.notes.push(t),this.saveNotes(),this.newNoteText="",this.animationIndex=this.notes.length-1},changePriority(t,e){t.priority=e,this.saveNotes()},toggleStatus(t){t.completed=!t.completed,this.saveNotes()},deleteNote(t){this.notes=this.notes.filter(e=>e.id!==t),this.saveNotes()},clearCompleted(){this.notes=this.notes.filter(t=>!t.completed),this.saveNotes()},saveNotes(){try{localStorage.setItem("notes",JSON.stringify(this.notes))}catch(t){console.error("Error al guardar las notas en LocalStorage:",t)}},removeAnimation(t){t===this.animationIndex&&(this.animationIndex=null)}}},ov={class:"notes-page"},av={class:"new-note"},lv={class:"task-stats"},cv={class:"notes-list"},uv=["onAnimationend"],hv={class:"note-content"},fv=["onClick"],dv={class:"note-text"},pv={class:"created-at"},gv={class:"priority-buttons"},mv=["onClick"],_v=["onClick"],yv=["onClick"],vv=["onClick"],Ev={class:"clear-completed"};function wv(t,e,n,r,s,o){return ht(),It("div",ov,[te("div",av,[vr(te("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.newNoteText=a),onKeydown:e[1]||(e[1]=Dp((...a)=>o.addNote&&o.addNote(...a),["enter"])),placeholder:"Escribe una nueva nota"},null,544),[[wr,s.newNoteText]])]),te("div",lv,[te("p",null,In(o.pendingTasksCount)+" tareas pendientes de "+In(o.totalTasksCount)+" tareas",1)]),te("div",cv,[(ht(!0),It(Et,null,vd(o.sortedNotes,(a,c)=>(ht(),It("div",{key:a.id,class:Zt(["note",{completed:a.completed}]),onAnimationend:h=>o.removeAnimation(c)},[te("div",hv,[te("div",{class:Zt(["status-circle",{completed:a.completed}]),onClick:h=>o.toggleStatus(a)},null,10,fv),te("div",dv,[te("p",null,In(a.text),1),te("span",pv,In(a.createdAt),1)]),te("div",gv,[te("button",{onClick:h=>o.changePriority(a,"Low"),class:Zt({active:a.priority==="Low"})},"Low",10,mv),te("button",{onClick:h=>o.changePriority(a,"Normal"),class:Zt({active:a.priority==="Normal"})},"Normal",10,_v),te("button",{onClick:h=>o.changePriority(a,"High"),class:Zt({active:a.priority==="High"})},"High",10,yv)]),te("button",{class:"delete-button",onClick:h=>o.deleteNote(a.id)},"Eliminar",8,vv)])],42,uv))),128))]),te("div",Ev,[te("a",{href:"#",onClick:e[2]||(e[2]=ro((...a)=>o.clearCompleted&&o.clearCompleted(...a),["prevent"]))},"Borrar tareas completadas")])])}const Sh=Yo(sv,[["render",wv],["__scopeId","data-v-b4288d26"]]),Iv={name:"App",components:{LandingPage:Th,NotesPage:Sh},data(){return{user:null}},methods:{logout(){Qn.signOut().then(()=>{this.user=null,this.$router?this.$router.push("/"):console.error("El router no está disponible")}).catch(t=>{console.error("Error al cerrar sesión: ",t)})}},mounted(){Qn.onAuthStateChanged(t=>{t?(this.user={name:t.displayName||"Usuario",email:t.email},this.$router?this.$router.push("/home"):console.error("El router no está disponible")):(this.user=null,this.$router?this.$router.push("/"):console.error("El router no está disponible")),console.log("Usuario autenticado:",t)},t=>{console.error("Error al comprobar el estado de autenticación: ",t)})}},bv={id:"app"},Tv={key:0},Sv={key:1},Av={class:"user-info"};function Rv(t,e,n,r,s,o){const a=za("LandingPage"),c=za("NotesPage");return ht(),It("div",bv,[s.user?(ht(),It("div",Sv,[te("header",null,[te("nav",null,[e[1]||(e[1]=te("div",{class:"logo"},[te("h1",null,"Gestor de Recordatorios")],-1)),te("div",Av,[te("p",null,"Hola, "+In(s.user.name),1),te("button",{onClick:e[0]||(e[0]=(...h)=>o.logout&&o.logout(...h)),class:"logout-button"},"Cerrar sesión")])])]),e[2]||(e[2]=te("p",{class:"subheader"},"Organiza tus tareas de manera eficiente",-1)),te("main",null,[We(c)])])):(ht(),It("div",Tv,[We(a)]))])}const Cv=Yo(Iv,[["render",Rv],["__scopeId","data-v-3fa94269"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jn=typeof document<"u";function Ah(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ah(t.default)}const de=Object.assign;function Bs(t,e){const n={};for(const r in e){const s=e[r];n[r]=mt(s)?s.map(t):t(s)}return n}const Dr=()=>{},mt=Array.isArray,Rh=/#/g,Ov=/&/g,kv=/\//g,Nv=/=/g,Dv=/\?/g,Ch=/\+/g,Lv=/%5B/g,xv=/%5D/g,Ph=/%5E/g,Mv=/%60/g,Oh=/%7B/g,Uv=/%7C/g,kh=/%7D/g,Fv=/%20/g;function Qo(t){return encodeURI(""+t).replace(Uv,"|").replace(Lv,"[").replace(xv,"]")}function jv(t){return Qo(t).replace(Oh,"{").replace(kh,"}").replace(Ph,"^")}function po(t){return Qo(t).replace(Ch,"%2B").replace(Fv,"+").replace(Rh,"%23").replace(Ov,"%26").replace(Mv,"`").replace(Oh,"{").replace(kh,"}").replace(Ph,"^")}function Hv(t){return po(t).replace(Nv,"%3D")}function Vv(t){return Qo(t).replace(Rh,"%23").replace(Dv,"%3F")}function Bv(t){return t==null?"":Vv(t).replace(kv,"%2F")}function $r(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const $v=/\/$/,Wv=t=>t.replace($v,"");function $s(t,e,n="/"){let r,s={},o="",a="";const c=e.indexOf("#");let h=e.indexOf("?");return c<h&&c>=0&&(h=-1),h>-1&&(r=e.slice(0,h),o=e.slice(h+1,c>-1?c:e.length),s=t(o)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=qv(r??e,n),{fullPath:r+(o&&"?")+o+a,path:r,query:s,hash:$r(a)}}function Kv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Gv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zn(e.matched[r],n.matched[s])&&Nh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Nh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zv(t[n],e[n]))return!1;return!0}function zv(t,e){return mt(t)?ic(t,e):mt(e)?ic(e,t):t===e}function ic(t,e){return mt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a).join("/")}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Wr;(function(t){t.pop="pop",t.push="push"})(Wr||(Wr={}));var Lr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Lr||(Lr={}));function Jv(t){if(!t)if(jn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wv(t)}const Xv=/^[^#]+#/;function Yv(t,e){return t.replace(Xv,"#")+e}function Qv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const is=()=>({left:window.scrollX,top:window.scrollY});function Zv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Qv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sc(t,e){return(history.state?history.state.position-e:-1)+t}const go=new Map;function eE(t,e){go.set(t,e)}function tE(t){const e=go.get(t);return go.delete(t),e}let nE=()=>location.protocol+"//"+location.host;function Dh(t,e){const{pathname:n,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){let c=s.includes(t.slice(o))?t.slice(o).length:1,h=s.slice(c);return h[0]!=="/"&&(h="/"+h),rc(h,"")}return rc(n,t)+r+s}function rE(t,e,n,r){let s=[],o=[],a=null;const c=({state:T})=>{const C=Dh(t,location),L=n.value,U=e.value;let z=0;if(T){if(n.value=C,e.value=T,a&&a===L){a=null;return}z=U?T.position-U.position:0}else r(C);s.forEach(J=>{J(n.value,L,{delta:z,type:Wr.pop,direction:z?z>0?Lr.forward:Lr.back:Lr.unknown})})};function h(){a=n.value}function d(T){s.push(T);const C=()=>{const L=s.indexOf(T);L>-1&&s.splice(L,1)};return o.push(C),C}function p(){const{history:T}=window;T.state&&T.replaceState(de({},T.state,{scroll:is()}),"")}function _(){for(const T of o)T();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:h,listen:d,destroy:_}}function oc(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?is():null}}function iE(t){const{history:e,location:n}=window,r={value:Dh(t,n)},s={value:e.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(h,d,p){const _=t.indexOf("#"),T=_>-1?(n.host&&document.querySelector("base")?t:t.slice(_))+h:nE()+t+h;try{e[p?"replaceState":"pushState"](d,"",T),s.value=d}catch(C){console.error(C),n[p?"replace":"assign"](T)}}function a(h,d){const p=de({},e.state,oc(s.value.back,h,s.value.forward,!0),d,{position:s.value.position});o(h,p,!0),r.value=h}function c(h,d){const p=de({},s.value,e.state,{forward:h,scroll:is()});o(p.current,p,!0);const _=de({},oc(r.value,h,null),{position:p.position+1},d);o(h,_,!1),r.value=h}return{location:r,state:s,push:c,replace:a}}function sE(t){t=Jv(t);const e=iE(t),n=rE(t,e.state,e.location,e.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=de({location:"",base:t,go:r,createHref:Yv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function oE(t){return typeof t=="string"||t&&typeof t=="object"}function Lh(t){return typeof t=="string"||typeof t=="symbol"}const xh=Symbol("");var ac;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ac||(ac={}));function er(t,e){return de(new Error,{type:t,[xh]:!0},e)}function Pt(t,e){return t instanceof Error&&xh in t&&(e==null||!!(t.type&e))}const lc="[^/]+?",aE={sensitive:!1,strict:!1,start:!0,end:!0},lE=/[.+*?^${}()[\]/\\]/g;function cE(t,e){const n=de({},aE,e),r=[];let s=n.start?"^":"";const o=[];for(const d of t){const p=d.length?[]:[90];n.strict&&!d.length&&(s+="/");for(let _=0;_<d.length;_++){const T=d[_];let C=40+(n.sensitive?.25:0);if(T.type===0)_||(s+="/"),s+=T.value.replace(lE,"\\$&"),C+=40;else if(T.type===1){const{value:L,repeatable:U,optional:z,regexp:J}=T;o.push({name:L,repeatable:U,optional:z});const $=J||lc;if($!==lc){C+=10;try{new RegExp(`(${$})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${L}" (${$}): `+W.message)}}let G=U?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;_||(G=z&&d.length<2?`(?:/${G})`:"/"+G),z&&(G+="?"),s+=G,C+=20,z&&(C+=-8),U&&(C+=-20),$===".*"&&(C+=-50)}p.push(C)}r.push(p)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(d){const p=d.match(a),_={};if(!p)return null;for(let T=1;T<p.length;T++){const C=p[T]||"",L=o[T-1];_[L.name]=C&&L.repeatable?C.split("/"):C}return _}function h(d){let p="",_=!1;for(const T of t){(!_||!p.endsWith("/"))&&(p+="/"),_=!1;for(const C of T)if(C.type===0)p+=C.value;else if(C.type===1){const{value:L,repeatable:U,optional:z}=C,J=L in d?d[L]:"";if(mt(J)&&!U)throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);const $=mt(J)?J.join("/"):J;if(!$)if(z)T.length<2&&(p.endsWith("/")?p=p.slice(0,-1):_=!0);else throw new Error(`Missing required param "${L}"`);p+=$}}return p||"/"}return{re:a,score:r,keys:o,parse:c,stringify:h}}function uE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Mh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const o=uE(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(cc(r))return 1;if(cc(s))return-1}return s.length-r.length}function cc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hE={type:0,value:""},fE=/[a-zA-Z0-9_]/;function dE(t){if(!t)return[[]];if(t==="/")return[[hE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(C){throw new Error(`ERR (${n})/"${d}": ${C}`)}let n=0,r=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let c=0,h,d="",p="";function _(){d&&(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(h==="*"||h==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:p,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):e("Invalid state to consume buffer"),d="")}function T(){d+=h}for(;c<t.length;){if(h=t[c++],h==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:h==="/"?(d&&_(),a()):h===":"?(_(),n=1):T();break;case 4:T(),n=r;break;case 1:h==="("?n=2:fE.test(h)?T():(_(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&c--);break;case 2:h===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+h:n=3:p+=h;break;case 3:_(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&c--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),_(),a(),s}function pE(t,e,n){const r=cE(dE(t.path),n),s=de(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function gE(t,e){const n=[],r=new Map;e=dc({strict:!1,end:!0,sensitive:!1},e);function s(_){return r.get(_)}function o(_,T,C){const L=!C,U=hc(_);U.aliasOf=C&&C.record;const z=dc(e,_),J=[U];if("alias"in _){const W=typeof _.alias=="string"?[_.alias]:_.alias;for(const oe of W)J.push(hc(de({},U,{components:C?C.record.components:U.components,path:oe,aliasOf:C?C.record:U})))}let $,G;for(const W of J){const{path:oe}=W;if(T&&oe[0]!=="/"){const ue=T.record.path,w=ue[ue.length-1]==="/"?"":"/";W.path=T.record.path+(oe&&w+oe)}if($=pE(W,T,z),C?C.alias.push($):(G=G||$,G!==$&&G.alias.push($),L&&_.name&&!fc($)&&a(_.name)),Uh($)&&h($),U.children){const ue=U.children;for(let w=0;w<ue.length;w++)o(ue[w],$,C&&C.children[w])}C=C||$}return G?()=>{a(G)}:Dr}function a(_){if(Lh(_)){const T=r.get(_);T&&(r.delete(_),n.splice(n.indexOf(T),1),T.children.forEach(a),T.alias.forEach(a))}else{const T=n.indexOf(_);T>-1&&(n.splice(T,1),_.record.name&&r.delete(_.record.name),_.children.forEach(a),_.alias.forEach(a))}}function c(){return n}function h(_){const T=yE(_,n);n.splice(T,0,_),_.record.name&&!fc(_)&&r.set(_.record.name,_)}function d(_,T){let C,L={},U,z;if("name"in _&&_.name){if(C=r.get(_.name),!C)throw er(1,{location:_});z=C.record.name,L=de(uc(T.params,C.keys.filter(G=>!G.optional).concat(C.parent?C.parent.keys.filter(G=>G.optional):[]).map(G=>G.name)),_.params&&uc(_.params,C.keys.map(G=>G.name))),U=C.stringify(L)}else if(_.path!=null)U=_.path,C=n.find(G=>G.re.test(U)),C&&(L=C.parse(U),z=C.record.name);else{if(C=T.name?r.get(T.name):n.find(G=>G.re.test(T.path)),!C)throw er(1,{location:_,currentLocation:T});z=C.record.name,L=de({},T.params,_.params),U=C.stringify(L)}const J=[];let $=C;for(;$;)J.unshift($.record),$=$.parent;return{name:z,path:U,params:L,matched:J,meta:_E(J)}}t.forEach(_=>o(_));function p(){n.length=0,r.clear()}return{addRoute:o,resolve:d,removeRoute:a,clearRoutes:p,getRoutes:c,getRecordMatcher:s}}function uc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function hc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:mE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function mE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function fc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _E(t){return t.reduce((e,n)=>de(e,n.meta),{})}function dc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yE(t,e){let n=0,r=e.length;for(;n!==r;){const o=n+r>>1;Mh(t,e[o])<0?r=o:n=o+1}const s=vE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function vE(t){let e=t;for(;e=e.parent;)if(Uh(e)&&Mh(t,e)===0)return e}function Uh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function EE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(Ch," "),a=o.indexOf("="),c=$r(a<0?o:o.slice(0,a)),h=a<0?null:$r(o.slice(a+1));if(c in e){let d=e[c];mt(d)||(d=e[c]=[d]),d.push(h)}else e[c]=h}return e}function pc(t){let e="";for(let n in t){const r=t[n];if(n=Hv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(mt(r)?r.map(o=>o&&po(o)):[r&&po(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function wE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=mt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const IE=Symbol(""),gc=Symbol(""),Zo=Symbol(""),Fh=Symbol(""),mo=Symbol("");function yr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qt(t,e,n,r,s,o=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,h)=>{const d=T=>{T===!1?h(er(4,{from:n,to:e})):T instanceof Error?h(T):oE(T)?h(er(2,{from:e,to:T})):(a&&r.enterCallbacks[s]===a&&typeof T=="function"&&a.push(T),c())},p=o(()=>t.call(r&&r.instances[s],e,n,d));let _=Promise.resolve(p);t.length<3&&(_=_.then(d)),_.catch(T=>h(T))})}function Ws(t,e,n,r,s=o=>o()){const o=[];for(const a of t)for(const c in a.components){let h=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(Ah(h)){const p=(h.__vccOpts||h)[e];p&&o.push(Qt(p,n,r,a,c,s))}else{let d=h();o.push(()=>d.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const _=Pv(p)?p.default:p;a.mods[c]=p,a.components[c]=_;const C=(_.__vccOpts||_)[e];return C&&Qt(C,n,r,a,c,s)()}))}}return o}function mc(t){const e=Ut(Zo),n=Ut(Fh),r=ut(()=>{const h=$n(t.to);return e.resolve(h)}),s=ut(()=>{const{matched:h}=r.value,{length:d}=h,p=h[d-1],_=n.matched;if(!p||!_.length)return-1;const T=_.findIndex(Zn.bind(null,p));if(T>-1)return T;const C=_c(h[d-2]);return d>1&&_c(p)===C&&_[_.length-1].path!==C?_.findIndex(Zn.bind(null,h[d-2])):T}),o=ut(()=>s.value>-1&&RE(n.params,r.value.params)),a=ut(()=>s.value>-1&&s.value===n.matched.length-1&&Nh(n.params,r.value.params));function c(h={}){if(AE(h)){const d=e[$n(t.replace)?"replace":"push"]($n(t.to)).catch(Dr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:r,href:ut(()=>r.value.href),isActive:o,isExactActive:a,navigate:c}}function bE(t){return t.length===1?t[0]:t}const TE=Qc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mc,setup(t,{slots:e}){const n=Ji(mc(t)),{options:r}=Ut(Zo),s=ut(()=>({[yc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&bE(e.default(n));return t.custom?o:Su("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),SE=TE;function AE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function RE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!mt(s)||s.length!==r.length||r.some((o,a)=>o!==s[a]))return!1}return!0}function _c(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yc=(t,e,n)=>t??e??n,CE=Qc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ut(mo),s=ut(()=>t.route||r.value),o=Ut(gc,0),a=ut(()=>{let d=$n(o);const{matched:p}=s.value;let _;for(;(_=p[d])&&!_.components;)d++;return d}),c=ut(()=>s.value.matched[a.value]);vi(gc,ut(()=>a.value+1)),vi(IE,c),vi(mo,s);const h=Wf();return Ei(()=>[h.value,c.value,t.name],([d,p,_],[T,C,L])=>{p&&(p.instances[_]=d,C&&C!==p&&d&&d===T&&(p.leaveGuards.size||(p.leaveGuards=C.leaveGuards),p.updateGuards.size||(p.updateGuards=C.updateGuards))),d&&p&&(!C||!Zn(p,C)||!T)&&(p.enterCallbacks[_]||[]).forEach(U=>U(d))},{flush:"post"}),()=>{const d=s.value,p=t.name,_=c.value,T=_&&_.components[p];if(!T)return vc(n.default,{Component:T,route:d});const C=_.props[p],L=C?C===!0?d.params:typeof C=="function"?C(d):C:null,z=Su(T,de({},L,e,{onVnodeUnmounted:J=>{J.component.isUnmounted&&(_.instances[p]=null)},ref:h}));return vc(n.default,{Component:z,route:d})||z}}});function vc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const PE=CE;function OE(t){const e=gE(t.routes,t),n=t.parseQuery||EE,r=t.stringifyQuery||pc,s=t.history,o=yr(),a=yr(),c=yr(),h=Kf(Jt);let d=Jt;jn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Bs.bind(null,O=>""+O),_=Bs.bind(null,Bv),T=Bs.bind(null,$r);function C(O,K){let V,q;return Lh(O)?(V=e.getRecordMatcher(O),q=K):q=O,e.addRoute(q,V)}function L(O){const K=e.getRecordMatcher(O);K&&e.removeRoute(K)}function U(){return e.getRoutes().map(O=>O.record)}function z(O){return!!e.getRecordMatcher(O)}function J(O,K){if(K=de({},K||h.value),typeof O=="string"){const S=$s(n,O,K.path),k=e.resolve({path:S.path},K),D=s.createHref(S.fullPath);return de(S,k,{params:T(k.params),hash:$r(S.hash),redirectedFrom:void 0,href:D})}let V;if(O.path!=null)V=de({},O,{path:$s(n,O.path,K.path).path});else{const S=de({},O.params);for(const k in S)S[k]==null&&delete S[k];V=de({},O,{params:_(S)}),K.params=_(K.params)}const q=e.resolve(V,K),he=O.hash||"";q.params=p(T(q.params));const g=Kv(r,de({},O,{hash:jv(he),path:q.path})),y=s.createHref(g);return de({fullPath:g,hash:he,query:r===pc?wE(O.query):O.query||{}},q,{redirectedFrom:void 0,href:y})}function $(O){return typeof O=="string"?$s(n,O,h.value.path):de({},O)}function G(O,K){if(d!==O)return er(8,{from:K,to:O})}function W(O){return w(O)}function oe(O){return W(de($(O),{replace:!0}))}function ue(O){const K=O.matched[O.matched.length-1];if(K&&K.redirect){const{redirect:V}=K;let q=typeof V=="function"?V(O):V;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=$(q):{path:q},q.params={}),de({query:O.query,hash:O.hash,params:q.path!=null?{}:O.params},q)}}function w(O,K){const V=d=J(O),q=h.value,he=O.state,g=O.force,y=O.replace===!0,S=ue(V);if(S)return w(de($(S),{state:typeof S=="object"?de({},he,S.state):he,force:g,replace:y}),K||V);const k=V;k.redirectedFrom=K;let D;return!g&&Gv(r,q,V)&&(D=er(16,{to:k,from:q}),tt(q,q,!0,!1)),(D?Promise.resolve(D):I(k,q)).catch(N=>Pt(N)?Pt(N,2)?N:lt(N):se(N,k,q)).then(N=>{if(N){if(Pt(N,2))return w(de({replace:y},$(N.to),{state:typeof N.to=="object"?de({},he,N.to.state):he,force:g}),K||k)}else N=A(k,q,!0,y,he);return b(k,q,N),N})}function m(O,K){const V=G(O,K);return V?Promise.reject(V):Promise.resolve()}function E(O){const K=$t.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(O):O()}function I(O,K){let V;const[q,he,g]=kE(O,K);V=Ws(q.reverse(),"beforeRouteLeave",O,K);for(const S of q)S.leaveGuards.forEach(k=>{V.push(Qt(k,O,K))});const y=m.bind(null,O,K);return V.push(y),Ge(V).then(()=>{V=[];for(const S of o.list())V.push(Qt(S,O,K));return V.push(y),Ge(V)}).then(()=>{V=Ws(he,"beforeRouteUpdate",O,K);for(const S of he)S.updateGuards.forEach(k=>{V.push(Qt(k,O,K))});return V.push(y),Ge(V)}).then(()=>{V=[];for(const S of g)if(S.beforeEnter)if(mt(S.beforeEnter))for(const k of S.beforeEnter)V.push(Qt(k,O,K));else V.push(Qt(S.beforeEnter,O,K));return V.push(y),Ge(V)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),V=Ws(g,"beforeRouteEnter",O,K,E),V.push(y),Ge(V))).then(()=>{V=[];for(const S of a.list())V.push(Qt(S,O,K));return V.push(y),Ge(V)}).catch(S=>Pt(S,8)?S:Promise.reject(S))}function b(O,K,V){c.list().forEach(q=>E(()=>q(O,K,V)))}function A(O,K,V,q,he){const g=G(O,K);if(g)return g;const y=K===Jt,S=jn?history.state:{};V&&(q||y?s.replace(O.fullPath,de({scroll:y&&S&&S.scroll},he)):s.push(O.fullPath,he)),h.value=O,tt(O,K,V,y),lt()}let v;function je(){v||(v=s.listen((O,K,V)=>{if(!_t.listening)return;const q=J(O),he=ue(q);if(he){w(de(he,{replace:!0,force:!0}),q).catch(Dr);return}d=q;const g=h.value;jn&&eE(sc(g.fullPath,V.delta),is()),I(q,g).catch(y=>Pt(y,12)?y:Pt(y,2)?(w(de($(y.to),{force:!0}),q).then(S=>{Pt(S,20)&&!V.delta&&V.type===Wr.pop&&s.go(-1,!1)}).catch(Dr),Promise.reject()):(V.delta&&s.go(-V.delta,!1),se(y,q,g))).then(y=>{y=y||A(q,g,!1),y&&(V.delta&&!Pt(y,8)?s.go(-V.delta,!1):V.type===Wr.pop&&Pt(y,20)&&s.go(-1,!1)),b(q,g,y)}).catch(Dr)}))}let et=yr(),Se=yr(),ae;function se(O,K,V){lt(O);const q=Se.list();return q.length?q.forEach(he=>he(O,K,V)):console.error(O),Promise.reject(O)}function Je(){return ae&&h.value!==Jt?Promise.resolve():new Promise((O,K)=>{et.add([O,K])})}function lt(O){return ae||(ae=!O,je(),et.list().forEach(([K,V])=>O?V(O):K()),et.reset()),O}function tt(O,K,V,q){const{scrollBehavior:he}=t;if(!jn||!he)return Promise.resolve();const g=!V&&tE(sc(O.fullPath,0))||(q||!V)&&history.state&&history.state.scroll||null;return zc().then(()=>he(O,K,g)).then(y=>y&&Zv(y)).catch(y=>se(y,O,K))}const Ie=O=>s.go(O);let be;const $t=new Set,_t={currentRoute:h,listening:!0,addRoute:C,removeRoute:L,clearRoutes:e.clearRoutes,hasRoute:z,getRoutes:U,resolve:J,options:t,push:W,replace:oe,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:Se.add,isReady:Je,install(O){const K=this;O.component("RouterLink",SE),O.component("RouterView",PE),O.config.globalProperties.$router=K,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>$n(h)}),jn&&!be&&h.value===Jt&&(be=!0,W(s.location).catch(he=>{}));const V={};for(const he in Jt)Object.defineProperty(V,he,{get:()=>h.value[he],enumerable:!0});O.provide(Zo,K),O.provide(Fh,Bc(V)),O.provide(mo,h);const q=O.unmount;$t.add(O),O.unmount=function(){$t.delete(O),$t.size<1&&(d=Jt,v&&v(),v=null,h.value=Jt,be=!1,ae=!1),q()}}};function Ge(O){return O.reduce((K,V)=>K.then(()=>E(V)),Promise.resolve())}return _t}function kE(t,e){const n=[],r=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const c=e.matched[a];c&&(t.matched.find(d=>Zn(d,c))?r.push(c):n.push(c));const h=t.matched[a];h&&(e.matched.find(d=>Zn(d,h))||s.push(h))}return[n,r,s]}const NE=[{path:"/",component:Th},{path:"/home",component:Sh}],jh=OE({history:sE(),routes:NE});jh.beforeEach((t,e,n)=>{Qn.onAuthStateChanged(r=>{t.path==="/home"&&!r?n("/"):t.path==="/"&&r?n("/home"):n()})});Mp(Cv).use(jh).mount("#app");
