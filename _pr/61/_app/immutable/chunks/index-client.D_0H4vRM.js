import{R as c,Q as i,k as _,u as m}from"./runtime.FR-W_Iy9.js";function a(e){throw new Error("lifecycle_outside_component")}function k(e){c===null&&a(),c.l!==null?v(c).m.push(e):i(()=>{const n=m(e);if(typeof n=="function")return n})}function p(e,n,{bubbles:o=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:n,bubbles:o,cancelable:r})}function x(){const e=c;return e===null&&a(),(n,o,r)=>{var s;const t=(s=e.s.$$events)==null?void 0:s[n];if(t){const l=_(t)?t.slice():[t],u=p(n,o,r);for(const f of l)f.call(e.x,u);return!u.defaultPrevented}return!0}}function v(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{x as c,k as o};
