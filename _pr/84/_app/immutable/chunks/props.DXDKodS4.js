import{S as F,W as ce,X as de,Y as E,Z as _e,y as T,_ as y,$ as B,q as w,H as L,a0 as ve,a1 as he,B as re,h as P,D as te,a2 as ne,M as ae,a3 as C,a4 as D,a5 as ie,w as pe,O as ye,a6 as j,a7 as ge,a8 as be,a9 as V,aa as A,I as H,z as se,g as N,ab as we,ac as me,ad as Ee,ae as Te,af as Pe,F as Re,e as U,p as Se,b as Ie,j as Oe,d as Ae,ag as z,J as Z,E as Ne,ah as Le,ai as De,aj as xe,ak as Me,al as ue,am as qe,k as G,an as J,ao as Be,ap as Ce,aq as Ye,C as Fe,ar as Ve,as as je,t as X,at as He,au as Ue,x as We,av as $e}from"./runtime.C3bJa7lf.js";import{d as Ke}from"./disclose-version.x6NK4mC0.js";import{c as ze}from"./store.CTX3uiO4.js";function O(e,r=null,f){if(typeof e!="object"||e===null||F in e)return e;const c=he(e);if(c!==ce&&c!==de)return e;var u=new Map,n=re(e),d=E(0);n&&u.set("length",E(e.length));var _;return new Proxy(e,{defineProperty(o,t,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&_e();var i=u.get(t);return i===void 0?(i=E(a.value),u.set(t,i)):T(i,O(a.value,_)),!0},deleteProperty(o,t){var a=u.get(t);if(a===void 0)t in o&&u.set(t,E(y));else{if(n&&typeof t=="string"){var i=u.get("length"),s=Number(t);Number.isInteger(s)&&s<i.v&&T(i,s)}T(a,y),Q(d)}return!0},get(o,t,a){var v;if(t===F)return e;var i=u.get(t),s=t in o;if(i===void 0&&(!s||(v=B(o,t))!=null&&v.writable)&&(i=E(O(s?o[t]:y,_)),u.set(t,i)),i!==void 0){var l=w(i);return l===y?void 0:l}return Reflect.get(o,t,a)},getOwnPropertyDescriptor(o,t){var a=Reflect.getOwnPropertyDescriptor(o,t);if(a&&"value"in a){var i=u.get(t);i&&(a.value=w(i))}else if(a===void 0){var s=u.get(t),l=s==null?void 0:s.v;if(s!==void 0&&l!==y)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return a},has(o,t){var l;if(t===F)return!0;var a=u.get(t),i=a!==void 0&&a.v!==y||Reflect.has(o,t);if(a!==void 0||L!==null&&(!i||(l=B(o,t))!=null&&l.writable)){a===void 0&&(a=E(i?O(o[t],_):y),u.set(t,a));var s=w(a);if(s===y)return!1}return i},set(o,t,a,i){var b;var s=u.get(t),l=t in o;if(n&&t==="length")for(var v=a;v<s.v;v+=1){var h=u.get(v+"");h!==void 0?T(h,y):v in o&&(h=E(y),u.set(v+"",h))}s===void 0?(!l||(b=B(o,t))!=null&&b.writable)&&(s=E(void 0),T(s,O(a,_)),u.set(t,s)):(l=s.v!==y,T(s,O(a,_)));var m=Reflect.getOwnPropertyDescriptor(o,t);if(m!=null&&m.set&&m.set.call(i,a),!l){if(n&&typeof t=="string"){var R=u.get("length"),g=Number(t);Number.isInteger(g)&&g>=R.v&&T(R,g+1)}Q(d)}return!0},ownKeys(o){w(d);var t=Reflect.ownKeys(o).filter(s=>{var l=u.get(s);return l===void 0||l.v!==y});for(var[a,i]of u)i.v!==y&&!(a in o)&&t.push(a);return t},setPrototypeOf(){ve()}})}function Q(e,r=1){T(e,e.v+r)}function sr(e,r){if(r){const f=document.body;e.autofocus=!0,ae(()=>{document.activeElement===f&&e.focus()})}}function ur(e){P&&te(e)!==null&&ne(e)}let k=!1;function Ze(){k||(k=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const f of e.target.elements)(r=f.__on_r)==null||r.call(f)})},{capture:!0}))}function fe(e){var r=ie,f=L;C(null),D(null);try{return e()}finally{C(r),D(f)}}function fr(e,r,f,c=f){e.addEventListener(r,()=>fe(f));const u=e.__on_r;u?e.__on_r=()=>{u(),c()}:e.__on_r=c,Ze()}const oe=new Set,W=new Set;function Ge(e,r,f,c){function u(n){if(c.capture||M.call(r,n),!n.cancelBubble)return fe(()=>f.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ae(()=>{r.addEventListener(e,u,c)}):r.addEventListener(e,u,c),u}function or(e,r,f,c,u){var n={capture:c,passive:u},d=Ge(e,r,f,n);(r===document.body||r===window||r===document)&&pe(()=>{r.removeEventListener(e,d,n)})}function lr(e){for(var r=0;r<e.length;r++)oe.add(e[r]);for(var f of W)f(e)}function M(e){var g;var r=this,f=r.ownerDocument,c=e.type,u=((g=e.composedPath)==null?void 0:g.call(e))||[],n=u[0]||e.target,d=0,_=e.__root;if(_){var o=u.indexOf(_);if(o!==-1&&(r===document||r===window)){e.__root=r;return}var t=u.indexOf(r);if(t===-1)return;o<=t&&(d=o)}if(n=u[d]||e.target,n!==r){ye(e,"currentTarget",{configurable:!0,get(){return n||f}});var a=ie,i=L;C(null),D(null);try{for(var s,l=[];n!==null;){var v=n.assignedSlot||n.parentNode||n.host||null;try{var h=n["__"+c];if(h!==void 0&&!n.disabled)if(re(h)){var[m,...R]=h;m.apply(n,[e,...R])}else h.call(n,e)}catch(b){s?l.push(b):s=b}if(e.cancelBubble||v===r||v===null)break;n=v}if(s){for(let b of l)queueMicrotask(()=>{throw b});throw s}}finally{e.__root=r,delete e.currentTarget,C(a),D(i)}}}function cr(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Je=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function dr(e){return Je.includes(e)}const Xe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function _r(e){return e=e.toLowerCase(),Xe[e]??e}const Qe=["touchstart","touchmove"];function ke(e){return Qe.includes(e)}function vr(e,r){var f=r==null?"":typeof r=="object"?r+"":r;f!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=f,e.nodeValue=f==null?"":f+"")}function er(e,r){return le(e,r)}function hr(e,r){j(),r.intro=r.intro??!1;const f=r.target,c=P,u=N;try{for(var n=te(f);n&&(n.nodeType!==8||n.data!==ge);)n=be(n);if(!n)throw V;A(!0),H(n),se();const d=le(e,{...r,anchor:n});if(N===null||N.nodeType!==8||N.data!==we)throw me(),V;return A(!1),d}catch(d){if(d===V)return r.recover===!1&&Ee(),j(),ne(f),A(!1),er(e,r);throw d}finally{A(c),H(u)}}const I=new Map;function le(e,{target:r,anchor:f,props:c={},events:u,context:n,intro:d=!0}){j();var _=new Set,o=i=>{for(var s=0;s<i.length;s++){var l=i[s];if(!_.has(l)){_.add(l);var v=ke(l);r.addEventListener(l,M,{passive:v});var h=I.get(l);h===void 0?(document.addEventListener(l,M,{passive:v}),I.set(l,1)):I.set(l,h+1)}}};o(Te(oe)),W.add(o);var t=void 0,a=Pe(()=>{var i=f??r.appendChild(Re());return U(()=>{if(n){Se({});var s=Oe;s.c=n}u&&(c.$$events=u),P&&Ke(i,null),t=e(i,c)||{},P&&(L.nodes_end=N),n&&Ie()}),()=>{var v;for(var s of _){r.removeEventListener(s,M);var l=I.get(s);--l===0?(document.removeEventListener(s,M),I.delete(s)):I.set(s,l)}W.delete(o),$.delete(t),i!==f&&((v=i.parentNode)==null||v.removeChild(i))}});return $.set(t,a),t}let $=new WeakMap;function pr(e){const r=$.get(e);r&&r()}function yr(e,r,f,c=null,u=!1){P&&se();var n=e,d=null,_=null,o=null,t=u?Ne:0;Ae(()=>{if(o===(o=!!r()))return;let a=!1;if(P){const i=n.data===Le;o===i&&(n=De(),H(n),A(!1),a=!0)}o?(d?z(d):d=U(()=>f(n)),_&&Z(_,()=>{_=null})):(_?z(_):c&&(_=U(()=>c(n))),d&&Z(d,()=>{d=null})),a&&A(!0)},t),P&&(n=N)}const rr={get(e,r){if(!e.exclude.includes(r))return w(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=tr({get[r](){return e.props[r]}},r,ue)),e.special[r](f),J(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),J(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function gr(e,r){return new Proxy({props:e,exclude:r,special:{},version:E(0)},rr)}function ee(e){for(var r=L,f=L;r!==null&&!(r.f&(Be|Ce));)r=r.parent;try{return D(r),e()}finally{D(f)}}function tr(e,r,f,c){var K;var u=(f&Ye)!==0,n=!Fe||(f&Ve)!==0,d=(f&je)!==0,_=(f&Ue)!==0,o=!1,t;d?[t,o]=ze(()=>e[r]):t=e[r];var a=(K=B(e,r))==null?void 0:K.set,i=c,s=!0,l=!1,v=()=>(l=!0,s&&(s=!1,_?i=G(c):i=c),i);t===void 0&&c!==void 0&&(a&&n&&xe(),t=v(),a&&a(t));var h;if(n)h=()=>{var p=e[r];return p===void 0?v():(s=!0,l=!1,p)};else{var m=ee(()=>(u?X:He)(()=>e[r]));m.f|=Me,h=()=>{var p=w(m);return p!==void 0&&(i=void 0),p===void 0?i:p}}if(!(f&ue))return h;if(a){var R=e.$$legacy;return function(p,S){return arguments.length>0?((!n||!S||R||o)&&a(S?h():p),p):h()}}var g=!1,b=!1,q=We(t),x=ee(()=>X(()=>{var p=h(),S=w(q);return g?(g=!1,b=!0,S):(b=!1,q.v=p)}));return u||(x.equals=qe),function(p,S){if($e!==null&&(g=b,h(),w(q)),arguments.length>0){const Y=S?w(x):n&&d?O(p):p;return x.equals(Y)||(g=!0,T(q,Y),l&&i!==void 0&&(i=Y),G(()=>w(x))),p}return w(x)}}export{O as a,Ze as b,cr as c,lr as d,Ge as e,sr as f,dr as g,hr as h,yr as i,fr as j,or as k,gr as l,er as m,_r as n,tr as p,ur as r,vr as s,pr as u};