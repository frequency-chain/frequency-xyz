import{Q as f,a3 as l,ao as p,ap as h,y as u,Y as o,X as E,G as v,H as g}from"./runtime.AAFsb3N2.js";function m(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=v;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function w(r,t){var e=(t&p)!==0,_=(t&h)!==0,n,d=!r.startsWith("<!>");return()=>{if(u)return a(o,null),o;n===void 0&&(n=m(d?r:"<!>"+r),e||(n=f(n)));var s=_?document.importNode(n,!0):n.cloneNode(!0);if(e){var c=f(s),i=s.lastChild;a(c,i)}else a(s,s);return s}}function N(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(u)return a(o,null),o;if(!d){var s=m(n),c=f(s);d=f(c)}var i=d.cloneNode(!0);return a(i,i),i}}function M(r=""){if(!u){var t=l(r+"");return a(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=l()),E(e)),a(e,e),e}function x(){if(u)return a(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=l();return r.append(t,e),a(t,e),r}function L(r,t){if(u){v.nodes_end=o,g();return}r!==null&&r.before(t)}const T="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(T);export{L as a,a as b,x as c,M as d,N as n,w as t};
