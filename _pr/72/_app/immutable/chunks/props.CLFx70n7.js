import{Z as D,_ as V,$ as z,a0 as P,a1 as G,w as g,a2 as c,a3 as T,m as y,W as L,a4 as W,y as X,Y as J,a5 as Q,a6 as q,V as B,a7 as C,h as p,x as k,a8 as ee,a9 as re,aa as ae,M as ne,K,N as ie,ab as te,ac as se,ad as H,ae as fe,g as M,af as Y,ag as ue,ah as le,ai as U,aj as de,X as ve,ak as _e,al as ce,o as j,am as oe,an as be,v as he}from"./runtime.DKAJWjv-.js";import{c as me}from"./store.3aBDn4Ll.js";function I(e,a=null,o){if(typeof e!="object"||e===null||D in e)return e;const m=X(e);if(m!==V&&m!==z)return e;var f=new Map,l=J(e),_=P(0);l&&f.set("length",P(e.length));var v;return new Proxy(e,{defineProperty(t,r,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&G();var i=f.get(r);return i===void 0?(i=P(n.value),f.set(r,i)):g(i,I(n.value,v)),!0},deleteProperty(t,r){var n=f.get(r);if(n===void 0)r in t&&f.set(r,P(c));else{if(l&&typeof r=="string"){var i=f.get("length"),s=Number(r);Number.isInteger(s)&&s<i.v&&g(i,s)}g(n,c),Z(_)}return!0},get(t,r,n){var b;if(r===D)return e;var i=f.get(r),s=r in t;if(i===void 0&&(!s||(b=T(t,r))!=null&&b.writable)&&(i=P(I(s?t[r]:c,v)),f.set(r,i)),i!==void 0){var u=y(i);return u===c?void 0:u}return Reflect.get(t,r,n)},getOwnPropertyDescriptor(t,r){var n=Reflect.getOwnPropertyDescriptor(t,r);if(n&&"value"in n){var i=f.get(r);i&&(n.value=y(i))}else if(n===void 0){var s=f.get(r),u=s==null?void 0:s.v;if(s!==void 0&&u!==c)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return n},has(t,r){var u;if(r===D)return!0;var n=f.get(r),i=n!==void 0&&n.v!==c||Reflect.has(t,r);if(n!==void 0||L!==null&&(!i||(u=T(t,r))!=null&&u.writable)){n===void 0&&(n=P(i?I(t[r],v):c),f.set(r,n));var s=y(n);if(s===c)return!1}return i},set(t,r,n,i){var x;var s=f.get(r),u=r in t;if(l&&r==="length")for(var b=n;b<s.v;b+=1){var h=f.get(b+"");h!==void 0?g(h,c):b in t&&(h=P(c),f.set(b+"",h))}s===void 0?(!u||(x=T(t,r))!=null&&x.writable)&&(s=P(void 0),g(s,I(n,v)),f.set(r,s)):(u=s.v!==c,g(s,I(n,v)));var w=Reflect.getOwnPropertyDescriptor(t,r);if(w!=null&&w.set&&w.set.call(i,n),!u){if(l&&typeof r=="string"){var O=f.get("length"),R=Number(r);Number.isInteger(R)&&R>=O.v&&g(O,R+1)}Z(_)}return!0},ownKeys(t){y(_);var r=Reflect.ownKeys(t).filter(s=>{var u=f.get(s);return u===void 0||u.v!==c});for(var[n,i]of f)i.v!==c&&!(n in t)&&r.push(n);return r},setPrototypeOf(){W()}})}function Z(e,a=1){g(e,e.v+a)}function Re(e,a,o,m=null,f=!1){p&&k();var l=e,_=null,v=null,t=null,r=f?ee:0;Q(()=>{if(t===(t=!!a()))return;let n=!1;if(p){const i=l.data===re;t===i&&(l=ae(),ne(l),K(!1),n=!0)}t?(_?q(_):_=B(()=>o(l)),v&&C(v,()=>{v=null})):(v?q(v):m&&(v=B(()=>m(l))),_&&C(_,()=>{_=null})),n&&K(!0)},r),p&&(l=ie)}const ye={get(e,a){if(!e.exclude.includes(a))return y(e.version),a in e.special?e.special[a]():e.props[a]},set(e,a,o){return a in e.special||(e.special[a]=Pe({get[a](){return e.props[a]}},a,H)),e.special[a](o),Y(e.version),!0},getOwnPropertyDescriptor(e,a){if(!e.exclude.includes(a)&&a in e.props)return{enumerable:!0,configurable:!0,value:e.props[a]}},deleteProperty(e,a){return e.exclude.includes(a)||(e.exclude.push(a),Y(e.version)),!0},has(e,a){return e.exclude.includes(a)?!1:a in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(a=>!e.exclude.includes(a))}};function Ee(e,a){return new Proxy({props:e,exclude:a,special:{},version:P(0)},ye)}function $(e){for(var a=L,o=L;a!==null&&!(a.f&(ue|le));)a=a.parent;try{return U(a),e()}finally{U(o)}}function Pe(e,a,o,m){var F;var f=(o&de)!==0,l=!ve||(o&_e)!==0,_=(o&ce)!==0,v=(o&be)!==0,t=!1,r;_?[r,t]=me(()=>e[a]):r=e[a];var n=(F=T(e,a))==null?void 0:F.set,i=m,s=!0,u=!1,b=()=>(u=!0,s&&(s=!1,v?i=M(m):i=m),i);r===void 0&&m!==void 0&&(n&&l&&te(),r=b(),n&&n(r));var h;if(l)h=()=>{var d=e[a];return d===void 0?b():(s=!0,u=!1,d)};else{var w=$(()=>(f?j:oe)(()=>e[a]));w.f|=se,h=()=>{var d=y(w);return d!==void 0&&(i=void 0),d===void 0?i:d}}if(!(o&H))return h;if(n){var O=e.$$legacy;return function(d,E){return arguments.length>0?((!l||!E||O||t)&&n(E?h():d),d):h()}}var R=!1,x=!1,N=he(r),S=$(()=>j(()=>{var d=h(),E=y(N);return R?(R=!1,x=!0,E):(x=!1,N.v=d)}));return f||(S.equals=fe),function(d,E){if(arguments.length>0){const A=E?y(S):l&&_?I(d):d;return S.equals(A)||(R=!0,g(N,A),u&&i!==void 0&&(i=A),M(()=>y(S))),d}return y(S)}}export{I as a,Re as i,Ee as l,Pe as p};
