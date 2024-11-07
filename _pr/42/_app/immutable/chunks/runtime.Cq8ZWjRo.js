var Rn=Array.isArray,Dn=Array.from,On=Object.defineProperty,it=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Cn=Object.prototype,Nn=Array.prototype,Wt=Object.getPrototypeOf;const bn=()=>{};function qn(t){return t()}function pt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ht=4,Y=8,rt=16,w=32,z=64,I=128,V=256,p=512,S=1024,b=2048,N=4096,j=8192,Xt=16384,dt=32768,Pn=65536,Jt=1<<18,Et=1<<19,ft=Symbol("$state"),Fn=Symbol("");function yt(t){return t===this.v}function Qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!Qt(t,this.v)}function tn(t){throw new Error("effect_in_teardown")}function nn(){throw new Error("effect_in_unowned_derived")}function rn(t){throw new Error("effect_orphan")}function en(){throw new Error("effect_update_depth_exceeded")}function Mn(){throw new Error("hydration_failed")}function Ln(t){throw new Error("props_invalid_value")}function Hn(){throw new Error("state_descriptors_fixed")}function Yn(){throw new Error("state_prototype_fixed")}function sn(){throw new Error("state_unsafe_local_read")}function an(){throw new Error("state_unsafe_mutation")}function et(t){return{f:0,v:t,reactions:null,equals:yt,version:0}}function jn(t){return Tt(et(t))}function ln(t,n=!1){var e;const r=et(t);return n||(r.equals=wt),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Bn(t,n=!1){return Tt(ln(t,n))}function Tt(t){return o!==null&&o.f&m&&(y===null?Tn([t]):y.push(t)),t}function mt(t,n){return o!==null&&ut()&&o.f&(m|rt)&&(y===null||!y.includes(t))&&an(),un(t,n)}function un(t,n){return t.equals(n)||(t.v=n,t.version=Bt(),At(t,S),ut()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(E(u,S),W(u)):k===null?mn([t]):k.push(t))),n}function At(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&S||!e&&l===u||(E(l,n),i&(p|I)&&(i&m?At(l,b):W(l)))}}const Un=1,Vn=2,Gn=16,Kn=1,$n=2,Zn=4,zn=8,Wn=16,Xn=1,Jn=2,on="[",fn="[!",_n="]",kt={},Qn=Symbol(),tr="http://www.w3.org/2000/svg";function St(t){console.warn("hydration_mismatch")}let x=!1;function nr(t){x=t}let d;function M(t){if(t===null)throw St(),kt;return d=t}function rr(){return M(R(d))}function er(t){if(x){if(R(d)!==null)throw St(),kt;d=t}}function sr(t=1){if(x){for(var n=t,r=d;n--;)r=R(r);d=r}}function ar(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===_n){if(t===0)return n;t-=1}else(r===on||r===fn)&&(t+=1)}var e=R(n);n.remove(),n=e}}var _t,gt,xt;function lr(){if(_t===void 0){_t=window;var t=Element.prototype,n=Node.prototype;gt=it(n,"firstChild").get,xt=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return gt.call(t)}function R(t){return xt.call(t)}function ur(t,n){if(!x)return J(t);var r=J(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),M(e),e}return M(r),r}function or(t,n){if(!x){var r=J(t);return r instanceof Comment&&r.data===""?R(r):r}return d}function ir(t,n=1,r=!1){let e=x?d:t;for(;n--;)e=R(e);if(!x)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),M(a),a}return M(e),e}function fr(t){t.textContent=""}function cn(t){var n=m|S;u===null?n|=I:u.f|=Et;const r={children:null,ctx:f,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&m){var e=o;(e.children??(e.children=[])).push(r)}return r}function _r(t){const n=cn(t);return n.equals=wt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?st(e):P(e)}}}function Rt(t){var n,r=u;Z(t.parent);try{It(t),n=Ut(t)}finally{Z(r)}return n}function Dt(t){var n=Rt(t),r=(D||t.f&I)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Bt())}function st(t){It(t),H(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){u===null&&o===null&&rn(),o!==null&&o.f&I&&nn(),lt&&tn()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ct(!0),B(l),l.f|=Xt}catch(c){throw P(l),c}finally{ct(i)}}else n!==null&&W(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Et)===0;if(!T&&!s&&e&&(a!==null&&vn(l,a),o!==null&&o.f&m)){var A=o;(A.children??(A.children=[])).push(l)}return l}function cr(t){const n=q(Y,null,!1);return E(n,p),n.teardown=t,n}function vr(t){Ot();var n=u!==null&&(u.f&w)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ct(t);return e}}function pr(t){return Ot(),at(t)}function hr(t){const n=q(z,t,!0);return()=>{P(n)}}function Ct(t){return q(ht,t,!1)}function dr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=at(()=>{t(),!e.ran&&(e.ran=!0,mt(r.l.r2,!0),xn(n))})}function Er(){var t=f;at(()=>{if(Zt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),F(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function at(t){return q(Y,t,!0)}function yr(t){return pn(t)}function pn(t,n=0){return q(Y|rt|n,t,!0)}function wr(t,n=!0){return q(Y|w,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=lt,e=o;vt(!0),$(null);try{n.call(null)}finally{vt(r),$(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)st(n[r])}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function hn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&Jt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}bt(t),qt(t,n&&!r),H(t,0),E(t,j);var l=t.transitions;if(l!==null)for(const T of l)T.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&Pt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Pt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tr(t,n){var r=[];Ft(t,r,!0),dn(r,()=>{P(t),n&&n()})}function dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&dt)!==0||(e.f&w)!==0;Ft(e,n,a?r:!1),e=s}}}function mr(t){Mt(t,!0)}function Mt(t,n){if(t.f&N){t.f^=N,F(t)&&B(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&w)!==0;Mt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const En=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,Q=[],tt=[];function Lt(){G=!1;const t=Q.slice();Q=[],pt(t)}function Ht(){K=!1;const t=tt.slice();tt=[],pt(t)}function Ar(t){G||(G=!0,queueMicrotask(Lt)),Q.push(t)}function kr(t){K||(K=!0,En(Ht)),tt.push(t)}function yn(){G&&Lt(),K&&Ht()}const Yt=0,wn=1;let U=Yt,L=!1,O=!1,lt=!1;function ct(t){O=t}function vt(t){lt=t}let g=[],C=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let y=null;function Tn(t){y=t}let _=null,h=0,k=null;function mn(t){k=t}let jt=0,D=!1,f=null;function Bt(){return++jt}function ut(){return f!==null&&f.l===null}function F(t){var l,i;var n=t.f;if(n&S)return!0;if(n&b){var r=t.deps,e=(n&I)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(F(a)&&Dt(a),e&&u!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function An(t,n,r){throw t}function Ut(t){var ot;var n=_,r=h,e=k,s=o,a=D,l=y,i=f,T=t.f;_=null,h=0,k=null,o=T&(w|z)?null:t,D=!O&&(T&I)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(H(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(H(t,h),c.length=h);return A}finally{_=n,h=r,k=e,o=s,D=a,y=l,f=i}}function kn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,b),n.f&(I|V)||(n.f^=V),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)kn(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=u;u=t;try{bt(t),n&rt?hn(t):qt(t),Nt(t);var e=Ut(t);t.teardown=typeof e=="function"?e:null,t.version=jt}catch(s){An(s)}finally{u=r}}}function Vt(){C>1e3&&(C=0,en()),C++}function Gt(t){var n=t.length;if(n!==0){Vt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Kt(s,a),Sn(a)}}finally{O=r}}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|N))&&F(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Pt(e):e.fn=null))}}function gn(){if(L=!1,C>1001)return;const t=g;g=[],Gt(t),L||(C=0)}function W(t){U===Yt&&(L||(L=!0,queueMicrotask(gn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|w)){if(!(r&p))return;n.f^=p}}g.push(n)}function Kt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,l=a&&(s&p)!==0;if(!l&&!(s&N))if(s&Y){a?r.f^=p:F(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&ht&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Kt(i,n)}function $t(t){var n=U,r=g;try{Vt();const s=[];U=wn,g=s,L=!1,Gt(r);var e=t==null?void 0:t();return yn(),(g.length>0||s.length>0)&&$t(),C=0,e}finally{U=n,g=r}}async function Sr(){await Promise.resolve(),$t()}function Zt(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=Rt(t);return st(t),e}if(o!==null){y!==null&&y.includes(t)&&sn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),k!==null&&u!==null&&u.f&p&&!(u.f&w)&&k.includes(t)&&(E(u,S),W(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,F(a)&&Dt(a)),t.v}function xn(t){const n=o;try{return o=null,t()}finally{o=n}}const In=~(S|b|p);function E(t,n){t.f=t.f&In|n}function gr(t,n=1){var r=+Zt(t);return mt(t,r+n),r}function xr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:et(!1)})}function Ir(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];Z(a.effect),$(a.reaction),Ct(a.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Rr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ft in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ft in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Nn as $,Zt as A,Rr as B,cn as C,bn as D,Qt as E,ur as F,er as G,on as H,cr as I,ln as J,mt as K,dr as L,Er as M,ir as N,sr as O,Ar as P,Wt as Q,Fn as R,zt as S,kr as T,$ as U,Z as V,On as W,Rn as X,o as Y,ft as Z,Cn as _,R as a,et as a0,Hn as a1,Qn as a2,it as a3,Yn as a4,pn as a5,mr as a6,Tr as a7,dt as a8,fn as a9,un as aA,Un as aB,Gn as aC,Vn as aD,Ft as aE,dn as aF,P as aG,tr as aH,ar as aa,Ln as ab,Pn as ac,Zn as ad,wt as ae,gr as af,w as ag,z as ah,Kn as ai,$n as aj,zn as ak,_r as al,j as am,Wn as an,Xn as ao,Jn as ap,Ct as aq,at as ar,$t as as,or as at,Sr as au,yr as av,jn as aw,ut as ax,Bn as ay,N as az,kt as b,M as c,d,_n as e,St as f,J as g,rr as h,lr as i,Mn as j,fr as k,Dn as l,hr as m,X as n,wr as o,xr as p,x as q,u as r,nr as s,Ir as t,f as u,pr as v,vr as w,xn as x,qn as y,pt as z};
