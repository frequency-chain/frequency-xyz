import{d as f,i as o,h as c}from"./runtime.DKAJWjv-.js";import{l as d}from"./utils.2nhF4Qwc.js";function i(e,a,l=a){var v=o();d(e,"input",()=>{var r=n(e)?u(e.value):e.value;l(r),v&&r!==(r=a())&&(e.value=r??"")}),f(()=>{var r=a();if(c&&e.defaultValue!==e.value){l(e.value);return}n(e)&&r===u(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function m(e,a,l=a){d(e,"change",()=>{var v=e.checked;l(v)}),a()==null&&l(!1),f(()=>{var v=a();e.checked=!!v})}function n(e){var a=e.type;return a==="number"||a==="range"}function u(e){return e===""?null:+e}export{i as a,m as b};
