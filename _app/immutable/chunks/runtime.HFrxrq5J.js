var gn=Array.isArray,Dn=Array.from,On=Object.defineProperty,it=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Nn=Object.prototype,Cn=Array.prototype,Zt=Object.getPrototypeOf;function bn(t){return typeof t=="function"}const qn=()=>{};function Fn(t){return t()}function pt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ht=4,Y=8,rt=16,w=32,z=64,S=128,V=256,p=512,I=1024,b=2048,C=4096,j=8192,zt=16384,dt=32768,Pn=65536,Jt=1<<18,Et=1<<19,ft=Symbol("$state"),Ln=Symbol("");function yt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("effect_in_teardown")}function Qt(){throw new Error("effect_in_unowned_derived")}function tn(t){throw new Error("effect_orphan")}function nn(){throw new Error("effect_update_depth_exceeded")}function Mn(){throw new Error("hydration_failed")}function Hn(t){throw new Error("props_invalid_value")}function Yn(){throw new Error("state_descriptors_fixed")}function jn(){throw new Error("state_prototype_fixed")}function rn(){throw new Error("state_unsafe_local_read")}function en(){throw new Error("state_unsafe_mutation")}function et(t){return{f:0,v:t,reactions:null,equals:yt,version:0}}function Bn(t){return Tt(et(t))}function sn(t,n=!1){var e;const r=et(t);return n||(r.equals=wt),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Un(t,n=!1){return Tt(sn(t,n))}function Tt(t){return o!==null&&o.f&m&&(y===null?wn([t]):y.push(t)),t}function an(t,n){return o!==null&&ut()&&o.f&(m|rt)&&(y===null||!y.includes(t))&&en(),ln(t,n)}function ln(t,n){return t.equals(n)||(t.v=n,t.version=jt(),mt(t,I),ut()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(E(u,I),J(u)):k===null?Tn([t]):k.push(t))),n}function mt(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&I||!e&&l===u||(E(l,n),i&(p|S)&&(i&m?mt(l,b):J(l)))}}const Vn=1,Gn=2,Kn=16,$n=1,Zn=2,zn=4,Jn=8,Wn=16,Xn=4,Qn=1,tr=2,un="[",on="[!",fn="]",At={},nr=Symbol();function kt(t){console.warn("hydration_mismatch")}let x=!1;function rr(t){x=t}let d;function L(t){if(t===null)throw kt(),At;return d=t}function er(){return L(g(d))}function sr(t){if(x){if(g(d)!==null)throw kt(),At;d=t}}function ar(t=1){if(x){for(var n=t,r=d;n--;)r=g(r);d=r}}function lr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=g(n);n.remove(),n=e}}var _t,It,Rt;function ur(){if(_t===void 0){_t=window;var t=Element.prototype,n=Node.prototype;It=it(n,"firstChild").get,Rt=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function W(t=""){return document.createTextNode(t)}function X(t){return It.call(t)}function g(t){return Rt.call(t)}function or(t,n){if(!x)return X(t);var r=X(d);if(r===null)r=d.appendChild(W());else if(n&&r.nodeType!==3){var e=W();return r==null||r.before(e),L(e),e}return L(r),r}function ir(t,n){if(!x){var r=X(t);return r instanceof Comment&&r.data===""?g(r):r}return d}function fr(t,n=1,r=!1){let e=x?d:t;for(;n--;)e=g(e);if(!x)return e;var s=e.nodeType;if(r&&s!==3){var a=W();return e==null||e.before(a),L(a),a}return L(e),e}function _r(t){t.textContent=""}function _n(t){var n=m|I;u===null?n|=S:u.f|=Et;const r={children:null,ctx:f,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&m){var e=o;(e.children??(e.children=[])).push(r)}return r}function cr(t){const n=_n(t);return n.equals=wt,n}function xt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?st(e):F(e)}}}function St(t){var n,r=u;Z(t.parent);try{xt(t),n=Bt(t)}finally{Z(r)}return n}function gt(t){var n=St(t),r=(D||t.f&S)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=jt())}function st(t){xt(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Dt(t){u===null&&o===null&&tn(),o!==null&&o.f&S&&Qt(),lt&&Xt()}function cn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ct(!0),B(l),l.f|=zt}catch(c){throw F(l),c}finally{ct(i)}}else n!==null&&J(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Et)===0;if(!T&&!s&&e&&(a!==null&&cn(l,a),o!==null&&o.f&m)){var A=o;(A.children??(A.children=[])).push(l)}return l}function vr(t){const n=q(Y,null,!1);return E(n,p),n.teardown=t,n}function pr(t){Dt();var n=u!==null&&(u.f&w)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ot(t);return e}}function hr(t){return Dt(),at(t)}function dr(t){const n=q(z,t,!0);return()=>{F(n)}}function Ot(t){return q(ht,t,!1)}function Er(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=at(()=>{t(),!e.ran&&(e.ran=!0,an(r.l.r2,!0),xn(n))})}function yr(){var t=f;at(()=>{if(Rn(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),P(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function at(t){return q(Y,t,!0)}function wr(t){return vn(t)}function vn(t,n=0){return q(Y|rt|n,t,!0)}function Tr(t,n=!0){return q(Y|w,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=lt,e=o;vt(!0),$(null);try{n.call(null)}finally{vt(r),$(e)}}}function Ct(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)st(n[r])}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function pn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Jt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:g(e);e.remove(),e=a}r=!0}Ct(t),bt(t,n&&!r),H(t,0),E(t,j);var l=t.transitions;if(l!==null)for(const T of l)T.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function mr(t,n){var r=[];Ft(t,r,!0),hn(r,()=>{F(t),n&&n()})}function hn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&dt)!==0||(e.f&w)!==0;Ft(e,n,a?r:!1),e=s}}}function Ar(t){Pt(t,!0)}function Pt(t,n){if(t.f&C){t.f^=C,P(t)&&B(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&w)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const dn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,Q=[],tt=[];function Lt(){G=!1;const t=Q.slice();Q=[],pt(t)}function Mt(){K=!1;const t=tt.slice();tt=[],pt(t)}function kr(t){G||(G=!0,queueMicrotask(Lt)),Q.push(t)}function Ir(t){K||(K=!0,dn(Mt)),tt.push(t)}function En(){G&&Lt(),K&&Mt()}const Ht=0,yn=1;let U=Ht,M=!1,O=!1,lt=!1;function ct(t){O=t}function vt(t){lt=t}let R=[],N=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let y=null;function wn(t){y=t}let _=null,h=0,k=null;function Tn(t){k=t}let Yt=0,D=!1,f=null;function jt(){return++Yt}function ut(){return f!==null&&f.l===null}function P(t){var l,i;var n=t.f;if(n&I)return!0;if(n&b){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(P(a)&&gt(a),e&&u!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function mn(t,n,r){throw t}function Bt(t){var ot;var n=_,r=h,e=k,s=o,a=D,l=y,i=f,T=t.f;_=null,h=0,k=null,o=T&(w|z)?null:t,D=!O&&(T&S)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,k=e,o=s,D=a,y=l,f=i}}function An(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,b),n.f&(S|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)An(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=u;u=t;try{Ct(t),n&rt?pn(t):bt(t),Nt(t);var e=Bt(t);t.teardown=typeof e=="function"?e:null,t.version=Yt}catch(s){mn(s)}finally{u=r}}}function Ut(){N>1e3&&(N=0,nn()),N++}function Vt(t){var n=t.length;if(n!==0){Ut();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Gt(s,a),kn(a)}}finally{O=r}}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&P(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}}function In(){if(M=!1,N>1001)return;const t=R;R=[],Vt(t),M||(N=0)}function J(t){U===Ht&&(M||(M=!0,queueMicrotask(In)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|w)){if(!(r&p))return;n.f^=p}}R.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&Y){a?r.f^=p:P(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&ht&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Gt(i,n)}function Kt(t){var n=U,r=R;try{Ut();const s=[];U=yn,R=s,M=!1,Vt(r);var e=t==null?void 0:t();return En(),(R.length>0||s.length>0)&&Kt(),N=0,e}finally{U=n,R=r}}async function Rr(){await Promise.resolve(),Kt()}function Rn(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=St(t);return st(t),e}if(o!==null){y!==null&&y.includes(t)&&rn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),k!==null&&u!==null&&u.f&p&&!(u.f&w)&&k.includes(t)&&(E(u,I),J(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,P(a)&&gt(a)),t.v}function xn(t){const n=o;try{return o=null,t()}finally{o=n}}const Sn=~(I|b|p);function E(t,n){t.f=t.f&Sn|n}function xr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:et(!1)})}function Sr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];Z(a.effect),$(a.reaction),Ot(a.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function gr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ft in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ft in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{it as $,an as A,Zt as B,$t as C,Ir as D,X as E,W as F,tr as G,d as H,L as I,u as J,vn as K,Ln as L,dt as M,Tr as N,mr as O,Kt as P,On as Q,Rr as R,ft as S,Qn as T,ir as U,Bn as V,Nn as W,Cn as X,et as Y,Yn as Z,nr as _,yr as a,jn as a0,gn as a1,$ as a2,Z as a3,o as a4,Jt as a5,un as a6,g as a7,rr as a8,ur as a9,Xn as aA,ut as aB,C as aC,ln as aD,Vn as aE,Kn as aF,Gn as aG,Ft as aH,hn as aI,F as aJ,Wt as aK,At as aa,fn as ab,kt as ac,Mn as ad,_r as ae,Dn as af,dr as ag,Ar as ah,on as ai,lr as aj,Hn as ak,Pn as al,zn as am,wt as an,w as ao,z as ap,$n as aq,Zn as ar,Jn as as,cr as at,j as au,Wn as av,Un as aw,rt as ax,zt as ay,bn as az,Sr as b,or as c,at as d,Ot as e,er as f,hr as g,x as h,pr as i,f as j,Fn as k,Er as l,pt as m,ar as n,Rn as o,xr as p,kr as q,sr as r,fr as s,wr as t,xn as u,gr as v,_n as w,qn as x,vr as y,sn as z};