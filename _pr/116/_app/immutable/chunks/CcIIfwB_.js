import{q as g,h as x,V as P,O as V,ax as l,ay as f,az as E,K as w,f as A,I,t as N}from"./Bl9MByqY.js";function F(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const O=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function G(t){return O.includes(t)}const M={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function K(t){return t=t.toLowerCase(),M[t]??t}const W=["touchstart","touchmove"];function U(t){return W.includes(t)}const j=["textarea","script","style","title"];function X(t){return j.includes(t)}function H(t,e){if(e){const r=document.body;t.autofocus=!0,g(()=>{document.activeElement===r&&t.focus()})}}function J(t){x&&P(t)!==null&&V(t)}let b=!1;function q(){b||(b=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function m(t){var e=E,r=w;l(null),f(null);try{return t()}finally{l(e),f(r)}}function Q(t,e,r,n=r){t.addEventListener(e,()=>m(r));const o=t.__on_r;o?t.__on_r=()=>{o(),n(!0)}:t.__on_r=()=>n(!0),q()}const B=new Set,D=new Set;function R(t,e,r,n={}){function o(a){if(n.capture||z.call(e,a),!a.cancelBubble)return m(()=>r==null?void 0:r.call(this,a))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?g(()=>{e.addEventListener(t,o,n)}):e.addEventListener(t,o,n),o}function Y(t,e,r,n,o){var a={capture:n,passive:o},i=R(t,e,r,a);(e===document.body||e===window||e===document)&&N(()=>{e.removeEventListener(t,i,a)})}function Z(t){for(var e=0;e<t.length;e++)B.add(t[e]);for(var r of D)r(t)}function z(t){var y;var e=this,r=e.ownerDocument,n=t.type,o=((y=t.composedPath)==null?void 0:y.call(t))||[],a=o[0]||t.target,i=0,p=t.__root;if(p){var _=o.indexOf(p);if(_!==-1&&(e===document||e===window)){t.__root=e;return}var v=o.indexOf(e);if(v===-1)return;_<=v&&(i=_)}if(a=o[i]||t.target,a!==e){A(t,"currentTarget",{configurable:!0,get(){return a||r}});var k=E,T=w;l(null),f(null);try{for(var u,h=[];a!==null;){var d=a.assignedSlot||a.parentNode||a.host||null;try{var s=a["__"+n];if(s!=null&&(!a.disabled||t.target===a))if(I(s)){var[S,...L]=s;S.apply(a,[t,...L])}else s.call(a,t)}catch(c){u?h.push(c):u=c}if(t.cancelBubble||d===e||d===null)break;a=d}if(u){for(let c of h)queueMicrotask(()=>{throw c});throw u}}finally{t.__root=e,delete t.currentTarget,l(k),f(T)}}}export{B as a,F as b,R as c,Z as d,H as e,G as f,q as g,z as h,U as i,Y as j,X as k,Q as l,J as m,K as n,D as r,m as w};
