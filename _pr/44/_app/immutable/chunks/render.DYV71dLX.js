import{Q as S,f as L,R as O,j as c,T as V,U as w,o as _,n as g,t as f,V as C,W as R,X as T,k as Y,Y as k,Z as $,_ as j,$ as F,a0 as M,a1 as W,h as P,p as Q,a2 as U,b as X,x as Z}from"./runtime.BT_uWMy-.js";import{a as q,r as N,h as v}from"./props.BinwrMFY.js";import{b as z}from"./disclose-version.eBSOqKFk.js";let r;function B(){r=void 0}function ae(t){let e=null,a=c;var i;if(c){for(e=f,r===void 0&&(r=C(document.head));r!==null&&(r.nodeType!==8||r.data!==V);)r=w(r);r===null?_(!1):r=g(w(r))}c||(i=document.head.appendChild(S()));try{L(()=>t(i),O)}finally{a&&(_(!0),r=f,g(e))}}const G=["touchstart","touchmove"];function J(t){return G.includes(t)}let D=!0;function ne(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a==null?"":a+"")}function K(t,e){return H(t,e)}function re(t,e){R(),e.intro=e.intro??!1;const a=e.target,i=c,y=f;try{for(var n=C(a);n&&(n.nodeType!==8||n.data!==V);)n=w(n);if(!n)throw T;_(!0),g(n),Y();const l=H(t,{...e,anchor:n});if(f===null||f.nodeType!==8||f.data!==k)throw $(),T;return _(!1),l}catch(l){if(l===T)return e.recover===!1&&j(),R(),F(a),_(!1),K(t,e);throw l}finally{_(i),g(y),B()}}const u=new Map;function H(t,{target:e,anchor:a,props:i={},events:y,context:n,intro:l=!0}){R();var m=new Set,E=o=>{for(var s=0;s<o.length;s++){var d=o[s];if(!m.has(d)){m.add(d);var h=J(d);e.addEventListener(d,v,{passive:h});var A=u.get(d);A===void 0?(document.addEventListener(d,v,{passive:h}),u.set(d,1)):u.set(d,A+1)}}};E(M(q)),N.add(E);var p=void 0,I=W(()=>{var o=a??e.appendChild(S());return P(()=>{if(n){Q({});var s=Z;s.c=n}y&&(i.$$events=y),c&&z(o,null),D=l,p=t(o,i)||{},D=!0,c&&(U.nodes_end=f),n&&X()}),()=>{var h;for(var s of m){e.removeEventListener(s,v);var d=u.get(s);--d===0?(document.removeEventListener(s,v),u.delete(s)):u.set(s,d)}N.delete(E),b.delete(p),o!==a&&((h=o.parentNode)==null||h.removeChild(o))}});return b.set(p,I),p}let b=new WeakMap;function se(t){const e=b.get(t);e&&e()}export{D as a,ae as b,re as h,K as m,ne as s,se as u};