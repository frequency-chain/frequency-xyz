import{f as c,M as u,z as l,a9 as p,aa as h,h as f,v as s,i as E,j as g}from"./runtime.FR-W_Iy9.js";function m(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=l;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&p)!==0,_=(t&h)!==0,n,d=!r.startsWith("<!>");return()=>{if(f)return a(s,null),s;n===void 0&&(n=m(d?r:"<!>"+r),e||(n=u(n)));var o=_?document.importNode(n,!0):n.cloneNode(!0);if(e){var v=u(o),i=o.lastChild;a(v,i)}else a(o,o);return o}}function M(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(f)return a(s,null),s;if(!d){var o=m(n),v=u(o);d=u(v)}var i=d.cloneNode(!0);return a(i,i),i}}function N(r=""){if(!f){var t=c(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=c()),E(e)),a(e,e),e}function x(){if(f)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=c();return r.append(t,e),a(t,e),r}function L(r,t){if(f){l.nodes_end=s,g();return}r!==null&&r.before(t)}const T="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(T);export{L as a,a as b,x as c,N as d,m as e,M as n,y as t};