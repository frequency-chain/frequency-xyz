var Dn=Array.isArray,On=Array.from,Cn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,Nn=Object.prototype,bn=Array.prototype,Xt=Object.getPrototypeOf;const qn=()=>{};function Pn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,yt=4,Y=8,et=16,w=32,z=64,x=128,V=256,p=512,k=1024,b=2048,N=4096,j=8192,Qt=16384,wt=32768,Fn=65536,tn=1<<18,Tt=1<<19,vt=Symbol("$state"),Mn=Symbol("");function mt(t){return t===this.v}function nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!nn(t,this.v)}function rn(t){throw new Error("effect_in_teardown")}function en(){throw new Error("effect_in_unowned_derived")}function sn(t){throw new Error("effect_orphan")}function an(){throw new Error("effect_update_depth_exceeded")}function Ln(){throw new Error("hydration_failed")}function Hn(t){throw new Error("props_invalid_value")}function Yn(){throw new Error("state_descriptors_fixed")}function jn(){throw new Error("state_prototype_fixed")}function ln(){throw new Error("state_unsafe_local_read")}function un(){throw new Error("state_unsafe_mutation")}let J=!1;function Bn(){J=!0}function st(t){return{f:0,v:t,reactions:null,equals:mt,version:0}}function Un(t){return gt(st(t))}function on(t,n=!1){var e;const r=st(t);return n||(r.equals=At),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Vn(t,n=!1){return gt(on(t,n))}function gt(t){return o!==null&&o.f&m&&(y===null?An([t]):y.push(t)),t}function Gn(t,n){return at(t,Jt(()=>ft(t))),n}function at(t,n){return o!==null&&it()&&o.f&(m|et)&&(y===null||!y.includes(t))&&un(),fn(t,n)}function fn(t,n){return t.equals(n)||(t.v=n,t.version=Vt(),kt(t,k),it()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(E(u,k),W(u)):g===null?gn([t]):g.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&k||!e&&l===u||(E(l,n),i&(p|x)&&(i&m?kt(l,b):W(l)))}}const Kn=1,$n=2,Zn=16,zn=1,Jn=2,Wn=4,Xn=8,Qn=16,tr=1,nr=2,_n="[",cn="[!",vn="]",It={},rr=Symbol(),er="http://www.w3.org/2000/svg";function St(t){console.warn("hydration_mismatch")}let S=!1;function sr(t){S=t}let d;function M(t){if(t===null)throw St(),It;return d=t}function ar(){return M(R(d))}function lr(t){if(S){if(R(d)!==null)throw St(),It;d=t}}function ur(t=1){if(S){for(var n=t,r=d;n--;)r=R(r);d=r}}function or(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=R(n);n.remove(),n=e}}var pt,xt,Rt;function ir(){if(pt===void 0){pt=window;var t=Element.prototype,n=Node.prototype;xt=ct(n,"firstChild").get,Rt=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function Q(t){return xt.call(t)}function R(t){return Rt.call(t)}function fr(t,n){if(!S)return Q(t);var r=Q(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),M(e),e}return M(r),r}function _r(t,n){if(!S){var r=Q(t);return r instanceof Comment&&r.data===""?R(r):r}return d}function cr(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=R(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),M(a),a}return M(e),e}function vr(t){t.textContent=""}function pn(t){var n=m|k;u===null?n|=x:u.f|=Tt;const r={children:null,ctx:f,deps:null,equals:mt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&m){var e=o;(e.children??(e.children=[])).push(r)}return r}function pr(t){const n=pn(t);return n.equals=At,n}function Dt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?lt(e):P(e)}}}function Ot(t){var n,r=u;Z(t.parent);try{Dt(t),n=Gt(t)}finally{Z(r)}return n}function Ct(t){var n=Ot(t),r=(D||t.f&x)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Vt())}function lt(t){Dt(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){u===null&&o===null&&sn(),o!==null&&o.f&x&&en(),ot&&rn()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ht(!0),B(l),l.f|=Qt}catch(c){throw P(l),c}finally{ht(i)}}else n!==null&&W(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Tt)===0;if(!T&&!s&&e&&(a!==null&&hn(l,a),o!==null&&o.f&m)){var A=o;(A.children??(A.children=[])).push(l)}return l}function hr(t){const n=q(Y,null,!1);return E(n,p),n.teardown=t,n}function dr(t){Nt();var n=u!==null&&(u.f&w)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=bt(t);return e}}function Er(t){return Nt(),ut(t)}function yr(t){const n=q(z,t,!0);return()=>{P(n)}}function bt(t){return q(yt,t,!1)}function wr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ut(()=>{t(),!e.ran&&(e.ran=!0,at(r.l.r2,!0),Jt(n))})}function Tr(){var t=f;ut(()=>{if(ft(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),F(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function ut(t){return q(Y,t,!0)}function mr(t){return dn(t)}function dn(t,n=0){return q(Y|et|n,t,!0)}function Ar(t,n=!0){return q(Y|w,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=ot,e=o;dt(!0),$(null);try{n.call(null)}finally{dt(r),$(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)lt(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function En(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&tn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}Ft(t,n&&!r),Pt(t),H(t,0),E(t,j);var l=t.transitions;if(l!==null)for(const T of l)T.stop();qt(t);var i=t.parent;i!==null&&i.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gr(t,n){var r=[];Lt(t,r,!0),yn(r,()=>{P(t),n&&n()})}function yn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Lt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&wt)!==0||(e.f&w)!==0;Lt(e,n,a?r:!1),e=s}}}function kr(t){Ht(t,!0)}function Ht(t,n){if(t.f&N){F(t)&&B(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&wt)!==0||(r.f&w)!==0;Ht(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const wn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,tt=[],nt=[];function Yt(){G=!1;const t=tt.slice();tt=[],Et(t)}function jt(){K=!1;const t=nt.slice();nt=[],Et(t)}function Ir(t){G||(G=!0,queueMicrotask(Yt)),tt.push(t)}function Sr(t){K||(K=!0,wn(jt)),nt.push(t)}function Tn(){G&&Yt(),K&&jt()}const Bt=0,mn=1;let U=Bt,L=!1,O=!1,ot=!1;function ht(t){O=t}function dt(t){ot=t}let I=[],C=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let y=null;function An(t){y=t}let _=null,h=0,g=null;function gn(t){g=t}let Ut=0,D=!1,f=null;function Vt(){return++Ut}function it(){return!J||f!==null&&f.l===null}function F(t){var l,i;var n=t.f;if(n&k)return!0;if(n&b){var r=t.deps,e=(n&x)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(F(a)&&Ct(a),e&&u!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function kn(t,n,r){throw t}function Gt(t){var _t;var n=_,r=h,e=g,s=o,a=D,l=y,i=f,T=t.f;_=null,h=0,g=null,o=T&(w|z)?null:t,D=!O&&(T&x)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((_t=c[v]).reactions??(_t.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,g=e,o=s,D=a,y=l,f=i}}function In(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,b),n.f&(x|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)In(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=u;u=t;try{n&et?En(t):Ft(t),Pt(t),qt(t);var e=Gt(t);t.teardown=typeof e=="function"?e:null,t.version=Ut}catch(s){kn(s)}finally{u=r}}}function Kt(){C>1e3&&(C=0,an()),C++}function $t(t){var n=t.length;if(n!==0){Kt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Zt(s,a),Sn(a)}}finally{O=r}}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|N))&&F(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}}function xn(){if(L=!1,C>1001)return;const t=I;I=[],$t(t),L||(C=0)}function W(t){U===Bt&&(L||(L=!0,queueMicrotask(xn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|w)){if(!(r&p))return;n.f^=p}}I.push(n)}function Zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,l=a&&(s&p)!==0;if(!l&&!(s&N))if(s&Y){a?r.f^=p:F(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&yt&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Zt(i,n)}function zt(t){var n=U,r=I;try{Kt();const s=[];U=mn,I=s,L=!1,$t(r);var e=t==null?void 0:t();return Tn(),(I.length>0||s.length>0)&&zt(),C=0,e}finally{U=n,I=r}}async function xr(){await Promise.resolve(),zt()}function ft(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=Ot(t);return lt(t),e}if(o!==null){y!==null&&y.includes(t)&&ln();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&w)&&g.includes(t)&&(E(u,k),W(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,F(a)&&Ct(a)),t.v}function Jt(t){const n=o;try{return o=null,t()}finally{o=n}}const Rn=~(k|b|p);function E(t,n){t.f=t.f&Rn|n}function Rr(t,n=1){var r=+ft(t);return at(t,r+n),r}function Dr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(f.l={s:null,u:null,r1:[],r2:st(!1)})}function Or(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];Z(a.effect),$(a.reaction),bt(a.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{bn as $,Sr as A,Ir as B,Bn as C,cr as D,ur as E,ir as F,Q as G,_n as H,R as I,It as J,sr as K,Mn as L,M,d as N,vn as O,St as P,Ln as Q,vr as R,On as S,yr as T,X as U,Ar as V,u as W,J as X,Dn as Y,vt as Z,Nn as _,Tr as a,st as a0,Yn as a1,rr as a2,ct as a3,jn as a4,dn as a5,kr as a6,gr as a7,wt as a8,cn as a9,Gn as aA,Vn as aB,N as aC,fn as aD,Lt as aE,yn as aF,$n as aG,Kn as aH,Zn as aI,er as aJ,or as aa,Hn as ab,Fn as ac,Wn as ad,At as ae,Rr as af,w as ag,z as ah,Z as ai,zn as aj,Jn as ak,Xn as al,pr as am,Qn as an,$ as ao,o as ap,Cn as aq,tr as ar,nr as as,bt as at,zt as au,xr as av,_r as aw,Un as ax,mr as ay,P as az,Or as b,fr as c,ut as d,dr as e,f,Jt as g,S as h,it as i,Pn as j,Et as k,wr as l,ft as m,Cr as n,pn as o,Dr as p,qn as q,lr as r,nn as s,hr as t,Er as u,on as v,at as w,ar as x,Xt as y,Wt as z};
