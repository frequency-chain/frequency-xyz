import{h as T,I as R,J as Q,C as W,d as Z,K as $,M as Y,N as q,O as M,P as p,g as A,Q as k,R as B,e as L,T as z,U as H,V as F,W as G,X as j,Y as ee,f as ae,Z as re,_ as ne,$ as le,A as fe,a0 as D,a1 as se,a2 as ue,a3 as ve,a4 as ie,a5 as te,j as U}from"./runtime.BmkytcgR.js";import{l as X}from"./utils.WThLkV_-.js";function Ee(a,e){return e}function de(a,e,r,s){for(var f=[],t=e.length,i=0;i<t;i++)G(e[i].e,f,!0);var h=t>0&&f.length===0&&r!==null;if(h){var o=r.parentNode;j(o),o.append(r),s.clear(),b(a,e[0].prev,e[t-1].next)}ee(f,()=>{for(var _=0;_<t;_++){var n=e[_];h||(s.delete(n.k),b(a,n.prev,n.next)),ae(n.e,!h)}})}function ye(a,e,r,s,f,t=null){var i=a,h={flags:e,items:new Map,first:null};{var o=a;i=T?R(re(o)):o.appendChild(Q())}T&&W();var _=null,n=!1;Z(()=>{var d=r(),u=$(d)?d:d==null?[]:Y(d),l=u.length;if(n&&l===0)return;n=l===0;let E=!1;if(T){var x=i.data===q;x!==(l===0)&&(i=M(),R(i),p(!1),E=!0)}if(T){for(var g=null,v,c=0;c<l;c++){if(A.nodeType===8&&A.data===ne){i=A,E=!0,p(!1);break}var I=u[c],m=s(I,c);v=J(A,h,g,null,I,m,c,f,e),h.items.set(m,v),g=v}l>0&&R(M())}if(!T){var y=le;_e(u,h,i,f,e,(y.f&k)!==0,s)}t!==null&&(l===0?_?B(_):_=L(()=>t(i)):_!==null&&z(_,()=>{_=null})),E&&p(!0),r()}),T&&(i=A)}function _e(a,e,r,s,f,t,i){var h=a.length,o=e.items,_=e.first,n=_,d,u=null,l=[],E=[],x,g,v,c;for(c=0;c<h;c+=1){if(x=a[c],g=i(x,c),v=o.get(g),v===void 0){var I=n?n.e.nodes_start:r;u=J(I,e,u,u===null?e.first:u.next,x,g,c,s,f),o.set(g,u),l=[],E=[],n=u.next;continue}if(ce(v,x,c),v.e.f&k&&B(v.e),v!==n){if(d!==void 0&&d.has(v)){if(l.length<E.length){var m=E[0],y;u=m.prev;var w=l[0],C=l[l.length-1];for(y=0;y<l.length;y+=1)V(l[y],m,r);for(y=0;y<E.length;y+=1)d.delete(E[y]);b(e,w.prev,C.next),b(e,u,w),b(e,C,m),n=m,u=C,c-=1,l=[],E=[]}else d.delete(v),V(v,n,r),b(e,v.prev,v.next),b(e,v,u===null?e.first:u.next),b(e,u,v),u=v;continue}for(l=[],E=[];n!==null&&n.k!==g;)(t||!(n.e.f&k))&&(d??(d=new Set)).add(n),E.push(n),n=n.next;if(n===null)continue;v=n}l.push(v),u=v,n=v.next}if(n!==null||d!==void 0){for(var N=d===void 0?[]:Y(d);n!==null;)(t||!(n.e.f&k))&&N.push(n),n=n.next;var K=N.length;if(K>0){var P=h===0?r:null;de(e,N,P,o)}}H.first=e.first&&e.first.e,H.last=u&&u.e}function ce(a,e,r,s){F(a.v,e),a.i=r}function J(a,e,r,s,f,t,i,h,o){var _=(o&ue)!==0,n=(o&ve)===0,d=_?n?fe(f):D(f):f,u=o&se?D(i):i,l={i:u,v:d,k:t,a:null,e:null,prev:r,next:s};try{return l.e=L(()=>h(a,d,u),T),l.e.prev=r&&r.e,l.e.next=s&&s.e,r===null?e.first=l:(r.next=l,r.e.next=l.e),s!==null&&(s.prev=l,s.e.prev=l.e),l}finally{}}function V(a,e,r){for(var s=a.next?a.next.e.nodes_start:r,f=e?e.e.nodes_start:r,t=a.e.nodes_start;t!==s;){var i=ie(t);f.before(t),t=i}}function b(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function ge(a,e,r=e){var s=te();X(a,"input",()=>{var f=O(a)?S(a.value):a.value;r(f),s&&f!==(f=e())&&(a.value=f??"")}),U(()=>{var f=e();if(T&&a.defaultValue!==a.value){r(a.value);return}O(a)&&f===S(a.value)||a.type==="date"&&!f&&!a.value||f!==a.value&&(a.value=f??"")})}function Te(a,e,r=e){X(a,"change",()=>{var s=a.checked;r(s)}),e()==null&&r(!1),U(()=>{var s=e();a.checked=!!s})}function O(a){var e=a.type;return e==="number"||e==="range"}function S(a){return a===""?null:+a}export{ge as a,Te as b,ye as e,Ee as i};
