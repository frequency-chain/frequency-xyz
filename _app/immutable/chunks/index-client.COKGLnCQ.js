import{S as C,Z as pe,_ as ye,$ as w,a0 as me,w as E,a1 as m,U as B,k as g,D as N,a2 as be,a3 as ge,a4 as z,x as R,A as ie,a5 as se,q as ue,a6 as Y,a7 as D,a8 as fe,t as we,M as Ee,a9 as H,aa as Pe,ab as Te,ac as $,ad as O,F as U,y as oe,E as L,ae as Re,af as Se,ag as Ie,ah as Ae,ai as Oe,B as Le,I as j,p as Ne,b as De,h as q,G as xe,aj as X,J as k,H as Me,ak as qe,al as Ce,am as Be,an as Ye,ao as le,ap as Fe,u as W,aq as ee,ar as Ve,as as $e,at as He,au as ce,av as Ue,aw as je,L as We,n as re,W as Ge,ax as Ke,v as Ze,g as ze}from"./runtime.vkBB_Hf4.js";import{d as Je}from"./disclose-version.BxY2mYpg.js";import{c as Qe}from"./store.ChOPtp-w.js";function A(e,r=null,s){if(typeof e!="object"||e===null||C in e)return e;const c=ge(e);if(c!==pe&&c!==ye)return e;var a=new Map,n=z(e),d=w(0);n&&a.set("length",w(e.length));var _;return new Proxy(e,{defineProperty(o,t,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&me();var u=a.get(t);return u===void 0?(u=w(f.value),a.set(t,u)):E(u,A(f.value,_)),!0},deleteProperty(o,t){var f=a.get(t);if(f===void 0)t in o&&a.set(t,w(m));else{if(n&&typeof t=="string"){var u=a.get("length"),i=Number(t);Number.isInteger(i)&&i<u.v&&E(u,i)}E(f,m),te(d)}return!0},get(o,t,f){var v;if(t===C)return e;var u=a.get(t),i=t in o;if(u===void 0&&(!i||(v=B(o,t))!=null&&v.writable)&&(u=w(A(i?o[t]:m,_)),a.set(t,u)),u!==void 0){var l=g(u);return l===m?void 0:l}return Reflect.get(o,t,f)},getOwnPropertyDescriptor(o,t){var f=Reflect.getOwnPropertyDescriptor(o,t);if(f&&"value"in f){var u=a.get(t);u&&(f.value=g(u))}else if(f===void 0){var i=a.get(t),l=i==null?void 0:i.v;if(i!==void 0&&l!==m)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return f},has(o,t){var l;if(t===C)return!0;var f=a.get(t),u=f!==void 0&&f.v!==m||Reflect.has(o,t);if(f!==void 0||N!==null&&(!u||(l=B(o,t))!=null&&l.writable)){f===void 0&&(f=w(u?A(o[t],_):m),a.set(t,f));var i=g(f);if(i===m)return!1}return u},set(o,t,f,u){var b;var i=a.get(t),l=t in o;if(n&&t==="length")for(var v=f;v<i.v;v+=1){var p=a.get(v+"");p!==void 0?E(p,m):v in o&&(p=w(m),a.set(v+"",p))}i===void 0?(!l||(b=B(o,t))!=null&&b.writable)&&(i=w(void 0),E(i,A(f,_)),a.set(t,i)):(l=i.v!==m,E(i,A(f,_)));var y=Reflect.getOwnPropertyDescriptor(o,t);if(y!=null&&y.set&&y.set.call(u,f),!l){if(n&&typeof t=="string"){var T=a.get("length"),P=Number(t);Number.isInteger(P)&&P>=T.v&&E(T,P+1)}te(d)}return!0},ownKeys(o){g(d);var t=Reflect.ownKeys(o).filter(i=>{var l=a.get(i);return l===void 0||l.v!==m});for(var[f,u]of a)u.v!==m&&!(f in o)&&t.push(f);return t},setPrototypeOf(){be()}})}function te(e,r=1){E(e,e.v+r)}function de(e){throw new Error("lifecycle_outside_component")}function dr(e,r){if(r){const s=document.body;e.autofocus=!0,ue(()=>{document.activeElement===s&&e.focus()})}}function _r(e){R&&ie(e)!==null&&se(e)}let ne=!1;function Xe(){ne||(ne=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const s of e.target.elements)(r=s.__on_r)==null||r.call(s)})},{capture:!0}))}function _e(e){var r=fe,s=N;Y(null),D(null);try{return e()}finally{Y(r),D(s)}}function vr(e,r,s,c=s){e.addEventListener(r,()=>_e(s));const a=e.__on_r;a?e.__on_r=()=>{a(),c()}:e.__on_r=c,Xe()}const ve=new Set,G=new Set;function ke(e,r,s,c){function a(n){if(c.capture||M.call(r,n),!n.cancelBubble)return _e(()=>s.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ue(()=>{r.addEventListener(e,a,c)}):r.addEventListener(e,a,c),a}function hr(e,r,s,c,a){var n={capture:c,passive:a},d=ke(e,r,s,n);(r===document.body||r===window||r===document)&&we(()=>{r.removeEventListener(e,d,n)})}function pr(e){for(var r=0;r<e.length;r++)ve.add(e[r]);for(var s of G)s(e)}function M(e){var P;var r=this,s=r.ownerDocument,c=e.type,a=((P=e.composedPath)==null?void 0:P.call(e))||[],n=a[0]||e.target,d=0,_=e.__root;if(_){var o=a.indexOf(_);if(o!==-1&&(r===document||r===window)){e.__root=r;return}var t=a.indexOf(r);if(t===-1)return;o<=t&&(d=o)}if(n=a[d]||e.target,n!==r){Ee(e,"currentTarget",{configurable:!0,get(){return n||s}});var f=fe,u=N;Y(null),D(null);try{for(var i,l=[];n!==null;){var v=n.assignedSlot||n.parentNode||n.host||null;try{var p=n["__"+c];if(p!==void 0&&!n.disabled)if(z(p)){var[y,...T]=p;y.apply(n,[e,...T])}else p.call(n,e)}catch(b){i?l.push(b):i=b}if(e.cancelBubble||v===r||v===null)break;n=v}if(i){for(let b of l)queueMicrotask(()=>{throw b});throw i}}finally{e.__root=r,delete e.currentTarget,Y(f),D(u)}}}function yr(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const er=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function mr(e){return er.includes(e)}const rr={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function br(e){return e=e.toLowerCase(),rr[e]??e}const tr=["touchstart","touchmove"];function nr(e){return tr.includes(e)}let K=!0;function gr(e){K=e}function wr(e,r){var s=r==null?"":typeof r=="object"?r+"":r;s!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=s,e.nodeValue=s==null?"":s+"")}function ar(e,r){return he(e,r)}function Er(e,r){H(),r.intro=r.intro??!1;const s=r.target,c=R,a=L;try{for(var n=ie(s);n&&(n.nodeType!==8||n.data!==Pe);)n=Te(n);if(!n)throw $;O(!0),U(n),oe();const d=he(e,{...r,anchor:n});if(L===null||L.nodeType!==8||L.data!==Re)throw Se(),$;return O(!1),d}catch(d){if(d===$)return r.recover===!1&&Ie(),H(),se(s),O(!1),ar(e,r);throw d}finally{O(c),U(a)}}const I=new Map;function he(e,{target:r,anchor:s,props:c={},events:a,context:n,intro:d=!0}){H();var _=new Set,o=u=>{for(var i=0;i<u.length;i++){var l=u[i];if(!_.has(l)){_.add(l);var v=nr(l);r.addEventListener(l,M,{passive:v});var p=I.get(l);p===void 0?(document.addEventListener(l,M,{passive:v}),I.set(l,1)):I.set(l,p+1)}}};o(Ae(ve)),G.add(o);var t=void 0,f=Oe(()=>{var u=s??r.appendChild(Le());return j(()=>{if(n){Ne({});var i=q;i.c=n}a&&(c.$$events=a),R&&Je(u,null),K=d,t=e(u,c)||{},K=!0,R&&(N.nodes_end=L),n&&De()}),()=>{var v;for(var i of _){r.removeEventListener(i,M);var l=I.get(i);--l===0?(document.removeEventListener(i,M),I.delete(i)):I.set(i,l)}G.delete(o),Z.delete(t),u!==s&&((v=u.parentNode)==null||v.removeChild(u))}});return Z.set(t,f),t}let Z=new WeakMap;function Pr(e){const r=Z.get(e);r&&r()}function Tr(e,r,s,c=null,a=!1){R&&oe();var n=e,d=null,_=null,o=null,t=a?Me:0;xe(()=>{if(o===(o=!!r()))return;let f=!1;if(R){const u=n.data===qe;o===u&&(n=Ce(),U(n),O(!1),f=!0)}o?(d?X(d):d=j(()=>s(n)),_&&k(_,()=>{_=null})):(_?X(_):c&&(_=j(()=>c(n))),d&&k(d,()=>{d=null})),f&&O(!0)},t),R&&(n=L)}const ir={get(e,r){if(!e.exclude.includes(r))return g(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,s){return r in e.special||(e.special[r]=sr({get[r](){return e.props[r]}},r,le)),e.special[r](s),ee(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),ee(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Rr(e,r){return new Proxy({props:e,exclude:r,special:{},version:w(0)},ir)}function ae(e){for(var r=N,s=N;r!==null&&!(r.f&(Ve|$e));)r=r.parent;try{return D(r),e()}finally{D(s)}}function sr(e,r,s,c){var Q;var a=(s&He)!==0,n=!ce||(s&Ue)!==0,d=(s&je)!==0,_=(s&Ke)!==0,o=!1,t;d?[t,o]=Qe(()=>e[r]):t=e[r];var f=C in e||We in e,u=((Q=B(e,r))==null?void 0:Q.set)??(f&&d&&r in e?h=>e[r]=h:void 0),i=c,l=!0,v=!1,p=()=>(v=!0,l&&(l=!1,_?i=W(c):i=c),i);t===void 0&&c!==void 0&&(u&&n&&Be(),t=p(),u&&u(t));var y;if(n)y=()=>{var h=e[r];return h===void 0?p():(l=!0,v=!1,h)};else{var T=ae(()=>(a?re:Ge)(()=>e[r]));T.f|=Ye,y=()=>{var h=g(T);return h!==void 0&&(i=void 0),h===void 0?i:h}}if(!(s&le))return y;if(u){var P=e.$$legacy;return function(h,S){return arguments.length>0?((!n||!S||P||o)&&u(S?y():h),h):y()}}var b=!1,J=!1,F=Ze(t),x=ae(()=>re(()=>{var h=y(),S=g(F);return b?(b=!1,J=!0,S):(J=!1,F.v=h)}));return a||(x.equals=Fe),function(h,S){if(arguments.length>0){const V=S?g(x):n&&d?A(h):h;return x.equals(V)||(b=!0,E(F,V),v&&i!==void 0&&(i=V),W(()=>g(x))),h}return g(x)}}function Sr(e){q===null&&de(),ce&&q.l!==null?fr(q).m.push(e):ze(()=>{const r=W(e);if(typeof r=="function")return r})}function ur(e,r,{bubbles:s=!1,cancelable:c=!1}={}){return new CustomEvent(e,{detail:r,bubbles:s,cancelable:c})}function Ir(){const e=q;return e===null&&de(),(r,s,c)=>{var n;const a=(n=e.s.$$events)==null?void 0:n[r];if(a){const d=z(a)?a.slice():[a],_=ur(r,s,c);for(const o of d)o.call(e.x,_);return!_.defaultPrevented}return!0}}function fr(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{A as a,gr as b,Ir as c,pr as d,Xe as e,yr as f,ke as g,Er as h,Tr as i,dr as j,mr as k,Rr as l,ar as m,br as n,Sr as o,sr as p,vr as q,hr as r,wr as s,K as t,Pr as u,_r as v};