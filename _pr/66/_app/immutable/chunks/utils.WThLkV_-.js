import{q as E,aa as l,ab as f,$ as b,U as w,z as A,ac as I,K as N}from"./runtime.BmkytcgR.js";function z(t,e){if(e){const o=document.body;t.autofocus=!0,E(()=>{document.activeElement===o&&t.focus()})}}let g=!1;function P(){g||(g=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const o of t.target.elements)(e=o.__on_r)==null||e.call(o)})},{capture:!0}))}function m(t){var e=b,o=w;l(null),f(null);try{return t()}finally{l(e),f(o)}}function U(t,e,o,n=o){t.addEventListener(e,()=>m(o));const a=t.__on_r;a?t.__on_r=()=>{a(),n()}:t.__on_r=n,P()}const V=new Set,q=new Set;function x(t,e,o,n){function a(r){if(n.capture||B.call(e,r),!r.cancelBubble)return m(()=>o.call(this,r))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?E(()=>{e.addEventListener(t,a,n)}):e.addEventListener(t,a,n),a}function j(t,e,o,n,a){var r={capture:n,passive:a},i=x(t,e,o,r);(e===document.body||e===window||e===document)&&A(()=>{e.removeEventListener(t,i,r)})}function C(t){for(var e=0;e<t.length;e++)V.add(t[e]);for(var o of q)o(t)}function B(t){var y;var e=this,o=e.ownerDocument,n=t.type,a=((y=t.composedPath)==null?void 0:y.call(t))||[],r=a[0]||t.target,i=0,p=t.__root;if(p){var _=a.indexOf(p);if(_!==-1&&(e===document||e===window)){t.__root=e;return}var v=a.indexOf(e);if(v===-1)return;_<=v&&(i=_)}if(r=a[i]||t.target,r!==e){I(t,"currentTarget",{configurable:!0,get(){return r||o}});var S=b,L=w;l(null),f(null);try{for(var u,h=[];r!==null;){var d=r.assignedSlot||r.parentNode||r.host||null;try{var s=r["__"+n];if(s!==void 0&&!r.disabled)if(N(s)){var[T,...k]=s;T.apply(r,[t,...k])}else s.call(r,t)}catch(c){u?h.push(c):u=c}if(t.cancelBubble||d===e||d===null)break;r=d}if(u){for(let c of h)queueMicrotask(()=>{throw c});throw u}}finally{t.__root=e,delete t.currentTarget,l(S),f(L)}}}function G(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const D=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function K(t){return D.includes(t)}const M={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function R(t){return t=t.toLowerCase(),M[t]??t}const O=["touchstart","touchmove"];function $(t){return O.includes(t)}export{P as a,z as b,x as c,C as d,K as e,V as f,$ as g,B as h,G as i,j,U as l,R as n,q as r};