import{n as b,u as v,aw as E,v as k,o as q,j as p,I as z,ar as A}from"./Bl9MByqY.js";function y(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function h(e,n,t){if(e==null)return n(void 0),t&&t(void 0),b;const s=v(()=>e.subscribe(n,t));return s.unsubscribe?()=>s.unsubscribe():s}const l=[];function $(e,n){return{subscribe:j(e,n).subscribe}}function j(e,n=b){let t=null;const s=new Set;function o(u){if(E(e,u)&&(e=u,t)){const c=!l.length;for(const r of s)r[1](),l.push(r,e);if(c){for(let r=0;r<l.length;r+=2)l[r][0](l[r+1]);l.length=0}}}function i(u){o(u(e))}function a(u,c=b){const r=[u,c];return s.add(r),s.size===1&&(t=n(o,i)||b),u(e),()=>{s.delete(r),s.size===0&&t&&(t(),t=null)}}return{set:o,update:i,subscribe:a}}function I(e,n,t){const s=!Array.isArray(e),o=s?[e]:e;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=n.length<2;return $(t,(a,u)=>{let c=!1;const r=[];let _=0,d=b;const g=()=>{if(_)return;d();const f=n(s?r[0]:r,a,u);i?a(f):d=typeof f=="function"?f:b},w=o.map((f,m)=>h(f,x=>{r[m]=x,_&=~(1<<m),c&&g()},()=>{_|=1<<m}));return c=!0,g(),function(){k(w),d(),c=!1}})}function M(e){let n;return h(e,t=>n=t)(),n}function P(e){p===null&&y(),A&&p.l!==null?C(p).m.push(e):q(()=>{const n=v(e);if(typeof n=="function")return n})}function B(e,n,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:s})}function S(){const e=p;return e===null&&y(),(n,t,s)=>{var i;const o=(i=e.s.$$events)==null?void 0:i[n];if(o){const a=z(o)?o.slice():[o],u=B(n,t,s);for(const c of a)c.call(e.x,u);return!u.defaultPrevented}return!0}}function C(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{S as c,I as d,M as g,P as o,$ as r,h as s,j as w};
