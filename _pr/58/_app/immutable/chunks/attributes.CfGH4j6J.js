import{P as $,Q as N,q as d,R as I,S as B,T as M}from"./runtime.BZpaNx-_.js";import{b as R,c as b,d as S,n as z,e as C}from"./utils.CB_USZjk.js";function D(s,r){if(r){const i=document.body;s.autofocus=!0,$(()=>{document.activeElement===i&&s.focus()})}}let L=!1;function G(){L||(L=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var r;if(!s.defaultPrevented)for(const i of s.target.elements)(r=i.__on_r)==null||r.call(i)})},{capture:!0}))}function j(s){if(d){var r=!1,i=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var u=s.value;v(s,"value",null),s.value=u}if(s.hasAttribute("checked")){var f=s.checked;v(s,"checked",null),s.checked=f}}};s.__on_r=i,M(i),G()}}function v(s,r,i,u){var f=s.__attributes??(s.__attributes={});d&&(f[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||f[r]!==(f[r]=i)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[I]=i),i==null?s.removeAttribute(r):typeof i!="string"&&w(s).includes(r)?s[r]=i:s.setAttribute(r,i))}function F(s,r,i,u,f=!1,n=!1,K=!1){var a=r||{},E=s.tagName==="OPTION";for(var h in r)h in i||(i[h]=null);var O=w(s),P=s.__attributes??(s.__attributes={}),y=[];for(const o in i){let t=i[o];if(E&&o==="value"&&t==null){s.value=s.__value="",a[o]=t;continue}var g=a[o];if(t!==g){a[o]=t;var p=o[0]+o[1];if(p!=="$$"){if(p==="on"){const c={},l="$$"+o;let e=o.slice(2);var k=C(e);if(R(e)&&(e=e.slice(0,-7),c.capture=!0),!k&&g){if(t!=null)continue;s.removeEventListener(e,a[l],c),a[l]=null}if(t!=null)if(k)s[`__${e}`]=t,S([e]);else{let A=function(q){a[o].call(this,q)};r?a[l]=b(e,s,A,c):y.push([o,t,()=>a[l]=b(e,s,A,c)])}}else if(o==="style"&&t!=null)s.style.cssText=t+"";else if(o==="autofocus")D(s,!!t);else if(o==="__value"||o==="value"&&t!=null)s.value=s[o]=s.__value=t;else{var _=o;f||(_=z(_)),t==null&&!n?(P[o]=null,s.removeAttribute(o)):O.includes(_)&&(n||typeof t!="string")?s[_]=t:typeof t!="function"&&(d&&(_==="src"||_==="href"||_==="srcset")||v(s,_,t))}o==="style"&&"__styles"in s&&(s.__styles={})}}}return r||$(()=>{if(s.isConnected)for(const[o,t,c]of y)a[o]===t&&c()}),a}var T=new Map;function w(s){var r=T.get(s.nodeName);if(r)return r;T.set(s.nodeName,r=[]);for(var i,u=N(s),f=Element.prototype;f!==u;){i=B(u);for(var n in i)i[n].set&&r.push(n);u=N(u)}return r}export{G as a,F as b,j as r,v as s};
