import{I as i,m as o,J as _,k as m,o as p}from"./runtime.ifOYzh7S.js";function u(e){throw new Error("lifecycle_outside_component")}function x(e){o===null&&u(),_&&o.l!==null?d(o).m.push(e):m(()=>{const n=p(e);if(typeof n=="function")return n})}function v(e,n,{bubbles:c=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:c,cancelable:r})}function y(){const e=o;return e===null&&u(),(n,c,r)=>{var s;const t=(s=e.s.$$events)==null?void 0:s[n];if(t){const l=i(t)?t.slice():[t],a=v(n,c,r);for(const f of l)f.call(e.x,a);return!a.defaultPrevented}return!0}}function d(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{y as c,x as o};