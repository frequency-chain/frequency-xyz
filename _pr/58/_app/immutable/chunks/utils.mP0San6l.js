import{I as T,P as k,U as f,V as d,W as L,X as A,Y as g,r as w}from"./runtime.Cq8ZWjRo.js";const I=new Set,V=new Set;function N(t,r,o,n){function a(e){if(n.capture||W.call(r,e),!e.cancelBubble){var i=g,u=w;f(null),d(null);try{return o.call(this,e)}finally{f(i),d(u)}}}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?k(()=>{r.addEventListener(t,a,n)}):r.addEventListener(t,a,n),a}function P(t,r,o,n,a){var e={capture:n,passive:a},i=N(t,r,o,e);(r===document.body||r===window||r===document)&&T(()=>{r.removeEventListener(t,i,e)})}function q(t){for(var r=0;r<t.length;r++)I.add(t[r]);for(var o of V)o(t)}function W(t){var y;var r=this,o=r.ownerDocument,n=t.type,a=((y=t.composedPath)==null?void 0:y.call(t))||[],e=a[0]||t.target,i=0,u=t.__root;if(u){var p=a.indexOf(u);if(p!==-1&&(r===document||r===window)){t.__root=r;return}var h=a.indexOf(r);if(h===-1)return;p<=h&&(i=p)}if(e=a[i]||t.target,e!==r){L(t,"currentTarget",{configurable:!0,get(){return e||o}});var E=g,b=w;f(null),d(null);try{for(var s,v=[];e!==null;){var _=e.assignedSlot||e.parentNode||e.host||null;try{var c=e["__"+n];if(c!==void 0&&!e.disabled)if(A(c)){var[m,...S]=c;m.apply(e,[t,...S])}else c.call(e,t)}catch(l){s?v.push(l):s=l}if(t.cancelBubble||_===r||_===null)break;e=_}if(s){for(let l of v)queueMicrotask(()=>{throw l});throw s}}finally{t.__root=r,delete t.currentTarget,f(E),d(b)}}}function x(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const B=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function U(t){return B.includes(t)}const D={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function z(t){return t=t.toLowerCase(),D[t]??t}const M=["touchstart","touchmove"];function C(t){return M.includes(t)}export{I as a,x as b,N as c,q as d,U as e,P as f,W as h,C as i,z as n,V as r};