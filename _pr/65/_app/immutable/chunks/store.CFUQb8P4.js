import{s as c}from"./utils.BG_AGzOp.js";import{t as f,m as b,n as o,o as a,j as l}from"./runtime.Jj8XJZyx.js";let n=!1;function _(s,r,u){const e=u[r]??(u[r]={store:null,source:b(void 0),unsubscribe:o});if(e.store!==s)if(e.unsubscribe(),e.store=s??null,s==null)e.source.v=void 0,e.unsubscribe=o;else{var i=!0;e.unsubscribe=c(s,t=>{i?e.source.v=t:a(e.source,t)}),i=!1}return l(e.source)}function g(){const s={};return f(()=>{for(var r in s)s[r].unsubscribe()}),s}function v(s){var r=n;try{return n=!1,[s(),n]}finally{n=r}}export{_ as a,v as c,g as s};
