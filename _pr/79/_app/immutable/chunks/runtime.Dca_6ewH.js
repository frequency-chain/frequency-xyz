var bn=Array.isArray,qn=Array.from,Pn=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,tn=Object.getOwnPropertyDescriptors,Fn=Object.prototype,Mn=Array.prototype,nn=Object.getPrototypeOf;const Ln=()=>{};function Hn(t){return t()}function mt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,At=4,B=8,at=16,T=32,W=64,x=128,K=256,p=512,k=1024,q=2048,b=4096,U=8192,rn=16384,gt=32768,en=65536,sn=1<<18,kt=1<<19,ht=Symbol("$state"),Yn=Symbol("");function St(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function It(t){return!an(t,this.v)}function ln(t){throw new Error("effect_in_teardown")}function un(){throw new Error("effect_in_unowned_derived")}function on(t){throw new Error("effect_orphan")}function fn(){throw new Error("effect_update_depth_exceeded")}function jn(){throw new Error("hydration_failed")}function Bn(t){throw new Error("props_invalid_value")}function Un(){throw new Error("state_descriptors_fixed")}function Vn(){throw new Error("state_prototype_fixed")}function _n(){throw new Error("state_unsafe_local_read")}function cn(){throw new Error("state_unsafe_mutation")}let X=!1;function Gn(){X=!0}function lt(t){return{f:0,v:t,reactions:null,equals:St,version:0}}function Kn(t){return xt(lt(t))}function vn(t,n=!1){var e;const r=lt(t);return n||(r.equals=It),X&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function $n(t,n=!1){return xt(vn(t,n))}function xt(t){return o!==null&&o.f&w&&(y===null?In([t]):y.push(t)),t}function Et(t,n){return ut(t,vt(()=>ct(t))),n}function ut(t,n){return o!==null&&_t()&&o.f&(w|at)&&(y===null||!y.includes(t))&&cn(),pn(t,n)}function pn(t,n){return t.equals(n)||(t.v=n,t.version=Zt(),Rt(t,k),_t()&&u!==null&&u.f&p&&!(u.f&T)&&(_!==null&&_.includes(t)?(E(u,k),Q(u)):g===null?xn([t]):g.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=_t(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&k||!e&&l===u||(E(l,n),i&(p|x)&&(i&w?Rt(l,q):Q(l)))}}const Zn=1,zn=2,Jn=16,Wn=1,Xn=2,Qn=4,tr=8,nr=16,rr=1,er=2,dn="[",hn="[!",En="]",Dt={},sr=Symbol(),ar="http://www.w3.org/2000/svg";function Ot(t){console.warn("hydration_mismatch")}let I=!1;function lr(t){I=t}let h;function H(t){if(t===null)throw Ot(),Dt;return h=t}function ur(){return H(R(h))}function or(t){if(I){if(R(h)!==null)throw Ot(),Dt;h=t}}function ir(t=1){if(I){for(var n=t,r=h;n--;)r=R(r);h=r}}function fr(){for(var t=0,n=h;;){if(n.nodeType===8){var r=n.data;if(r===En){if(t===0)return n;t-=1}else(r===dn||r===hn)&&(t+=1)}var e=R(n);n.remove(),n=e}}var yt,Ct,Nt;function _r(){if(yt===void 0){yt=window;var t=Element.prototype,n=Node.prototype;Ct=dt(n,"firstChild").get,Nt=dt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function tt(t=""){return document.createTextNode(t)}function nt(t){return Ct.call(t)}function R(t){return Nt.call(t)}function cr(t,n){if(!I)return nt(t);var r=nt(h);if(r===null)r=h.appendChild(tt());else if(n&&r.nodeType!==3){var e=tt();return r==null||r.before(e),H(e),e}return H(r),r}function vr(t,n){if(!I){var r=nt(t);return r instanceof Comment&&r.data===""?R(r):r}return h}function pr(t,n=1,r=!1){let e=I?h:t;for(;n--;)e=R(e);if(!I)return e;var s=e.nodeType;if(r&&s!==3){var a=tt();return e==null||e.before(a),H(a),a}return H(e),e}function dr(t){t.textContent=""}function yn(t){var n=w|k;u===null?n|=x:u.f|=kt;const r={children:null,ctx:f,deps:null,equals:St,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&w){var e=o;(e.children??(e.children=[])).push(r)}return r}function hr(t){const n=yn(t);return n.equals=It,n}function bt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?ot(e):F(e)}}}function qt(t){var n,r=u;J(t.parent);try{bt(t),n=zt(t)}finally{J(r)}return n}function Pt(t){var n=qt(t),r=(O||t.f&x)&&t.deps!==null?q:p;E(t,r),t.equals(n)||(t.v=n,t.version=Zt())}function ot(t){bt(t),j(t,0),E(t,U),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ft(t){u===null&&o===null&&on(),o!==null&&o.f&x&&un(),ft&&ln()}function wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&W)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=C;try{wt(!0),V(l),l.f|=rn}catch(c){throw F(l),c}finally{wt(i)}}else n!==null&&Q(l);var m=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&kt)===0;if(!m&&!s&&e&&(a!==null&&wn(l,a),o!==null&&o.f&w)){var A=o;(A.children??(A.children=[])).push(l)}return l}function Er(t){const n=P(B,null,!1);return E(n,p),n.teardown=t,n}function yr(t){Ft();var n=u!==null&&(u.f&T)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Mt(t);return e}}function wr(t){return Ft(),it(t)}function Tr(t){const n=P(W,t,!0);return()=>{F(n)}}function Mt(t){return P(At,t,!1)}function mr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=it(()=>{t(),!e.ran&&(e.ran=!0,ut(r.l.r2,!0),vt(n))})}function Ar(){var t=f;it(()=>{if(ct(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,q),M(r)&&V(r),n.ran=!1}t.l.r2.v=!1}})}function it(t){return P(B,t,!0)}function gr(t){return Tn(t)}function Tn(t,n=0){return P(B|at|n,t,!0)}function kr(t,n=!0){return P(B|T,t,!0,n)}function Lt(t){var n=t.teardown;if(n!==null){const r=ft,e=o;Tt(!0),z(null);try{n.call(null)}finally{Tt(r),z(e)}}}function Ht(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function Yt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function mn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&sn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}Yt(t,n&&!r),Ht(t),j(t,0),E(t,U);var l=t.transitions;if(l!==null)for(const m of l)m.stop();Lt(t);var i=t.parent;i!==null&&i.first!==null&&jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function jt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Sr(t,n){var r=[];Bt(t,r,!0),An(r,()=>{F(t),n&&n()})}function An(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Bt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&gt)!==0||(e.f&T)!==0;Bt(e,n,a?r:!1),e=s}}}function Ir(t){Ut(t,!0)}function Ut(t,n){if(t.f&b){M(t)&&V(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&gt)!==0||(r.f&T)!==0;Ut(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const gn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let $=!1,Z=!1,rt=[],et=[];function Vt(){$=!1;const t=rt.slice();rt=[],mt(t)}function Gt(){Z=!1;const t=et.slice();et=[],mt(t)}function xr(t){$||($=!0,queueMicrotask(Vt)),rt.push(t)}function Rr(t){Z||(Z=!0,gn(Gt)),et.push(t)}function kn(){$&&Vt(),Z&&Gt()}const Kt=0,Sn=1;let G=Kt,Y=!1,C=!1,ft=!1;function wt(t){C=t}function Tt(t){ft=t}let S=[],N=0;let o=null;function z(t){o=t}let u=null;function J(t){u=t}let y=null;function In(t){y=t}let _=null,d=0,g=null;function xn(t){g=t}let $t=0,O=!1,L=!1,D=new Set,f=null;function Zt(){return++$t}function _t(){return!X||f!==null&&f.l===null}function M(t){var l,i;var n=t.f;if(n&k)return!0;if(n&q){var r=t.deps,e=(n&x)!==0;if(r!==null){var s;if(n&K){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=K}for(s=0;s<r.length;s++){var a=r[s];if(M(a)&&Pt(a),e&&u!==null&&!O&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function Rn(t,n,r){throw t}function zt(t){var pt;var n=_,r=d,e=g,s=o,a=O,l=y,i=f,m=t.f;_=null,d=0,g=null,o=m&(T|W)?null:t,O=!C&&(m&x)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(j(t,d),c!==null&&d>0)for(c.length=d+_.length,v=0;v<_.length;v++)c[d+v]=_[v];else t.deps=c=_;if(!O)for(v=d;v<c.length;v++)((pt=c[v]).reactions??(pt.reactions=[])).push(t)}else c!==null&&d<c.length&&(j(t,d),c.length=d);return A}finally{_=n,d=r,g=e,o=s,O=a,y=l,f=i}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(_===null||!_.includes(n))&&(E(n,q),n.f&(x|K)||(n.f^=K),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function V(t){var n=t.f;if(!(n&U)){E(t,p);var r=u;u=t;try{n&at?mn(t):Yt(t),Ht(t),Lt(t);var e=zt(t);t.teardown=typeof e=="function"?e:null,t.version=$t}catch(s){Rn(s)}finally{u=r}}}function Jt(){N>1e3&&(N=0,fn()),N++}function Wt(t){var n=t.length;if(n!==0){Jt();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Xt(s,a),On(a)}}finally{C=r}}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(U|b))&&M(e)&&(V(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?jt(e):e.fn=null))}}function Cn(){if(Y=!1,N>1001)return;const t=S;S=[],Wt(t),Y||(N=0)}function Q(t){G===Kt&&(Y||(Y=!0,queueMicrotask(Cn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|T)){if(!(r&p))return;n.f^=p}}S.push(n)}function Xt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&T)!==0,l=a&&(s&p)!==0;if(!l&&!(s&b))if(s&B){a?r.f^=p:M(r)&&V(r);var i=r.first;if(i!==null){r=i;continue}}else s&At&&e.push(r);var m=r.next;if(m===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=m}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Xt(i,n)}function Qt(t){var n=G,r=S;try{Jt();const s=[];G=Sn,S=s,Y=!1,Wt(r);var e=t==null?void 0:t();return kn(),(S.length>0||s.length>0)&&Qt(),N=0,e}finally{G=n,S=r}}async function Dr(){await Promise.resolve(),Qt()}function ct(t){var i;var n=t.f,r=(n&w)!==0;if(r&&n&U){var e=qt(t);return ot(t),e}if(L&&D.add(t),o!==null){y!==null&&y.includes(t)&&_n();var s=o.deps;_===null&&s!==null&&s[d]===t?d++:_===null?_=[t]:_.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&T)&&g.includes(t)&&(E(u,k),Q(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,M(a)&&Pt(a)),t.v}function Or(t){var n=L,r=D;L=!0,D=new Set;var e=D,s;try{vt(t)}finally{if(L=n,L)for(s of D)r.add(s);D=r}for(s of e)if(s.f&en)for(const a of s.deps||[])a.f&w||Et(a,null);else Et(s,null)}function vt(t){const n=o;try{return o=null,t()}finally{o=n}}const Nn=~(k|q|p);function E(t,n){t.f=t.f&Nn|n}function Cr(t,n=1){var r=+ct(t);return ut(t,r+n),r}function Nr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(f.l={s:null,u:null,r1:[],r2:lt(!1)})}function br(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];J(a.effect),z(a.reaction),Mt(a.fn)}}finally{J(r),z(e)}}f=n.p,n.m=!0}return{}}function qr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=nn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=tn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Zn as $,nn as A,tn as B,Rr as C,xr as D,gt as E,Gn as F,H as G,tt as H,bn as I,qn as J,hn as K,Yn as L,fr as M,lr as N,b as O,Ir as P,Sr as Q,u as R,pn as S,Bt as T,dr as U,An as V,nt as W,En as X,o as Y,lt as Z,zn as _,Ar as a,Jn as a0,R as a1,_t as a2,it as a3,X as a4,pr as a5,ir as a6,ht as a7,Fn as a8,Mn as a9,rr as aA,er as aB,Mt as aC,Qt as aD,vr as aE,Kn as aF,Dr as aG,gr as aH,Et as aI,$n as aJ,ar as aK,Or as aL,Un as aa,sr as ab,dt as ac,Vn as ad,_r as ae,dn as af,Dt as ag,Ot as ah,jn as ai,Tr as aj,Bn as ak,en as al,Qn as am,It as an,Cr as ao,T as ap,W as aq,J as ar,Wn as as,Xn as at,tr as au,hr as av,nr as aw,L as ax,z as ay,Pn as az,br as b,cr as c,Tn as d,kr as e,F as f,h as g,I as h,yr as i,f as j,vt as k,mr as l,Hn as m,Ln as n,mt as o,Nr as p,ct as q,or as r,qr as s,yn as t,wr as u,an as v,Er as w,vn as x,ut as y,ur as z};