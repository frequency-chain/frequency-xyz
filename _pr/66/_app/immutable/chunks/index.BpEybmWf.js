import{n as f,t as m,y as w}from"./runtime.CdHlhT_4.js";import{s as q}from"./utils.CKUzKikO.js";const a=[];function x(s,i){return{subscribe:z(s,i).subscribe}}function z(s,i=f){let n=null;const r=new Set;function u(t){if(w(s,t)&&(s=t,n)){const o=!a.length;for(const e of r)e[1](),a.push(e,s);if(o){for(let e=0;e<a.length;e+=2)a[e][0](a[e+1]);a.length=0}}}function l(t){u(t(s))}function b(t,o=f){const e=[t,o];return r.add(e),r.size===1&&(n=i(u,l)||f),t(s),()=>{r.delete(e),r.size===0&&n&&(n(),n=null)}}return{set:u,update:l,subscribe:b}}function E(s,i,n){const r=!Array.isArray(s),u=r?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=i.length<2;return x(n,(b,t)=>{let o=!1;const e=[];let p=0,d=f;const g=()=>{if(p)return;d();const c=i(r?e[0]:e,b,t);l?b(c):d=typeof c=="function"?c:f},_=u.map((c,y)=>q(c,h=>{e[y]=h,p&=~(1<<y),o&&g()},()=>{p|=1<<y}));return o=!0,g(),function(){m(_),d(),o=!1}})}export{E as d,x as r,z as w};
