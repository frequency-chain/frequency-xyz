import{A as l,V as d,a3 as p,K as m,a4 as h,a5 as g,h as f,Z as s,G as E,i as T}from"./DDBYWjmy.js";function v(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=m;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&h)!==0,_=(t&g)!==0,n,i=!r.startsWith("<!>");return()=>{if(f)return a(s,null),s;n===void 0&&(n=v(i?r:"<!>"+r),e||(n=d(n)));var o=_||p?document.importNode(n,!0):n.cloneNode(!0);if(e){var c=d(o),u=o.lastChild;a(c,u)}else a(o,o);return o}}function M(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,i;return()=>{if(f)return a(s,null),s;if(!i){var o=v(n),c=d(o);i=d(c)}var u=i.cloneNode(!0);return a(u,u),u}}function N(r=""){if(!f){var t=l(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=l()),E(e)),a(e,e),e}function A(){if(f)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=l();return r.append(t,e),a(t,e),r}function b(r,t){if(f){m.nodes_end=s,T();return}r!==null&&r.before(t)}export{b as a,a as b,A as c,N as d,v as e,M as n,y as t};
