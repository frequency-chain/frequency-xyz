import{a as A,t as M}from"./disclose-version.B5ZlPL5r.js";import{T as oe,f as fe,j as S,n as G,k as ce,ac as ve,a2 as ee,H as de,m as K,o as X,t as H,g as te,h as ae,i as ue,az as F,a4 as U,aA as he,aB as pe,aC as ge,I as _e,a7 as Q,aD as me,aE as be,a1 as we,aF as xe,aG as ye,X as Ee,_ as Te,W as Ie,e as J,u as Ce,r as N,N as Y,A as m,p as Se,l as Z,a as Ae,K as ne,b as Me,J as W,c as R,s as Le,M as z,B as De,L as We}from"./runtime.4U693toQ.js";import{p as C,e as B}from"./props.CUZcCKtw.js";import{s as re}from"./attributes.DGoJy2fc.js";import{s as k}from"./class.Bt-QwIAV.js";import{s as V}from"./slot.CfnEkbVK.js";import{b as Ne}from"./this.CNAmkGdh.js";import{i as ke}from"./lifecycle.Cl2VVGgh.js";import{o as He}from"./index-client.DCu0M5Ef.js";import{M as j}from"./Header.WqBxxIhV.js";let q=null;function ze(a,e){return e}function Re(a,e,t,n){for(var i=[],l=e.length,s=0;s<l;s++)be(e[s].e,i,!0);var v=l>0&&i.length===0&&t!==null;if(v){var f=t.parentNode;we(f),f.append(t),n.clear(),I(a,e[0].prev,e[l-1].next)}xe(i,()=>{for(var r=0;r<l;r++){var h=e[r];v||(n.delete(h.k),I(a,h.prev,h.next)),ye(h.e,!v)}})}function Ve(a,e,t,n,i,l=null){var s=a,v={flags:e,items:new Map,first:null};{var f=a;s=S?G(Ee(f)):f.appendChild(oe())}S&&ce();var r=null,h=!1;fe(()=>{var o=t(),p=ve(o)?o:o==null?[]:ee(o),d=p.length;if(h&&d===0)return;h=d===0;let u=!1;if(S){var y=s.data===de;y!==(d===0)&&(s=K(),G(s),X(!1),u=!0)}if(S){for(var c=null,g,E=0;E<d;E++){if(H.nodeType===8&&H.data===Te){s=H,u=!0,X(!1);break}var _=p[E],b=n(_,E);g=ie(H,v,c,null,_,b,E,i,e),v.items.set(b,g),c=g}d>0&&G(K())}S||Ye(p,v,s,i,e,n),l!==null&&(d===0?r?te(r):r=ae(()=>l(s)):r!==null&&ue(r,()=>{r=null})),u&&X(!0),t()}),S&&(s=H)}function Ye(a,e,t,n,i,l){var s=a.length,v=e.items,f=e.first,r=f,h,o=null,p=[],d=[],u,y,c,g;for(g=0;g<s;g+=1){if(u=a[g],y=l(u,g),c=v.get(y),c===void 0){var E=r?r.e.nodes_start:t;o=ie(E,e,o,o===null?e.first:o.next,u,y,g,n,i),v.set(y,o),p=[],d=[],r=o.next;continue}if(Be(c,u,g),c.e.f&F&&te(c.e),c!==r){if(h!==void 0&&h.has(c)){if(p.length<d.length){var _=d[0],b;o=_.prev;var w=p[0],T=p[p.length-1];for(b=0;b<p.length;b+=1)$(p[b],_,t);for(b=0;b<d.length;b+=1)h.delete(d[b]);I(e,w.prev,T.next),I(e,o,w),I(e,T,_),r=_,o=T,g-=1,p=[],d=[]}else h.delete(c),$(c,r,t),I(e,c.prev,c.next),I(e,c,o===null?e.first:o.next),I(e,o,c),o=c;continue}for(p=[],d=[];r!==null&&r.k!==y;)r.e.f&F||(h??(h=new Set)).add(r),d.push(r),r=r.next;if(r===null)continue;c=r}p.push(c),o=c,r=c.next}if(r!==null||h!==void 0){for(var x=h===void 0?[]:ee(h);r!==null;)r.e.f&F||x.push(r),r=r.next;var L=x.length;if(L>0){var D=s===0?t:null;Re(e,x,D,v)}}U.first=e.first&&e.first.e,U.last=o&&o.e}function Be(a,e,t,n){he(a.v,e),a.i=t}function ie(a,e,t,n,i,l,s,v,f){var r=q;try{var h=(f&pe)!==0,o=(f&ge)===0,p=h?o?_e(i):Q(i):i,d=f&me?Q(s):s,u={i:d,v:p,k:l,a:null,e:null,prev:t,next:n};return q=u,u.e=ae(()=>v(a,p,d),S),u.e.prev=t&&t.e,u.e.next=n&&n.e,t===null?e.first=u:(t.next=u,t.e.next=u.e),n!==null&&(n.prev=u,n.e.prev=u.e),u}finally{q=r}}function $(a,e,t){for(var n=a.next?a.next.e.nodes_start:t,i=e?e.e.nodes_start:t,l=a.e.nodes_start;l!==n;){var s=Ie(l);i.before(l),l=s}}function I(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Pe(a,e,t){J(()=>{var n=Ce(()=>e(a,t==null?void 0:t())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function Oe(a,e,t,n){var i=a.__styles??(a.__styles={});i[e]!==t&&(i[e]=t,t==null?a.style.removeProperty(e):a.style.setProperty(e,t,""))}var Ge=M("<button></button>"),Xe=M('<div role="navigation" aria-label="Page Sections" class="freq-container absolute right-0 w-[50%] justify-between pl-0 pt-[32px] sm:hidden md:hidden lg:flex vertical-lg:hidden"></div>');function ot(a,e){let t=C(e,"section",12),n=C(e,"sectionTitles",8);var i=Xe();Ve(i,5,n,ze,(l,s,v)=>{var f=Ge();f.textContent=`.0${v+1}`,Y(()=>{re(f,"aria-label",`Section ${v}: ${m(s)}`),k(f,`text-lg transition-opacity duration-700 ${t()===v+1?"opacity-100":"opacity-25"}`)}),B("click",f,()=>t(v+1)),A(l,f)}),N(i),A(a,i)}var Fe=M('<div class="vertical:block horizontal:hidden"><!></div> <div id="scroll-container"><!></div>',1);function ft(a,e){Se(e,!1);const t=z(),n=z(),i=2e3,l=150;let s=C(e,"section",12),v=C(e,"sectionCount",8),f=z(),r=z(!0);const h=()=>{var x,L,D;if(!m(f))return;const w=((L=(x=document.getElementById("header"))==null?void 0:x.getBoundingClientRect())==null?void 0:L.height)||0;-1*(((D=m(f).getBoundingClientRect())==null?void 0:D.top)||0)>w&&m(f).scrollIntoView()};let o=0,p=0,d=!1;const u=w=>{const T=w.deltaY>0,x=Date.now(),L=x-p,D=x-o,O=T!==d||D>l||L>i,se=s()>=v(),le=s()<=1;se&&T&&O||le&&!T&&O||(w.preventDefault(),O&&(w.deltaY>0&&s(Math.min(s()+1,v())),w.deltaY<0&&(s(Math.max(s()-1,1)),h()),p=x),o=x,d=T)},y=async()=>{m(f).style.setProperty("transition-property","none"),W(r,!m(r)),setTimeout(()=>m(f).style.removeProperty("transition-property"),1)};He(()=>(window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),Z(()=>(m(r),j),()=>{W(t,(m(r)||!0)&&Math.min(j,window.innerWidth))}),Z(()=>(m(t),De(s())),()=>{W(n,-1*m(t)*(s()-1))}),Ae(),ke();var c=Fe(),g=ne(c),E=R(g);V(E,e,"default",{}),N(g);var _=Le(g,2);Ne(_,w=>W(f,w),()=>m(f)),k(_,"relative z-0 h-[600px] flex-nowrap transition-transform duration-500 ease-in-out vertical:hidden horizontal:flex");var b=R(_);V(b,e,"default",{}),N(_),Y(()=>Oe(_,"transform",`translate(${m(n)}px)`)),B("wheel",_,u),A(a,c),Me()}var qe=M("<div><!></div>");function ct(a,e){let t=C(e,"id",8,""),n=C(e,"classes",8,"");var i=qe(),l=R(i);V(l,e,"default",{}),N(i),Y(()=>{re(i,"id",t()),k(i,`relative w-[100vw] min-w-full sm:pt-[80px] lg:pt-[140px] vertical-lg:w-[100%] ${n()}`)}),A(a,i)}let P;function Je(){P||(P=new IntersectionObserver(a=>{a.forEach(e=>{const t=e.isIntersecting?"enterViewport":"exitViewport";e.target.dispatchEvent(new CustomEvent(t))})}))}function Ke(a){return Je(),P.observe(a),{destroy(){P.unobserve(a)}}}var Ue=M("<div><!></div>");function vt(a,e){let t=z("");var n=Ue(),i=R(n);V(i,e,"default",{}),N(n),Y(()=>k(n,m(t))),Pe(n,l=>Ke(l)),J(()=>B("enterViewport",n,()=>W(t,"slide-from-right"))),J(()=>B("exitViewport",n,()=>W(t,""))),A(a,n)}var Qe=M('<div></div> <div class="relative z-10 h-full w-full bg-[url(/src/lib/assets/section1waves-top.svg)] bg-left-bottom bg-no-repeat sm:hidden lg:block vertical-lg:hidden"></div> <div class="relative z-0 -mt-[9px] h-[260px] w-full bg-[url(/src/lib/assets/section1waves-bottom.svg)] bg-left-top bg-no-repeat sm:hidden lg:block vertical-lg:hidden"></div>',1);function dt(a){var e=Qe(),t=ne(e);k(t,"absolute bottom-0 w-full bg-[url(/src/lib/assets/section1waves.svg)] bg-no-repeat sm:right-[10%] sm:h-[180px] sm:bg-right-bottom md:h-[200px] lg:hidden vertical-lg:relative vertical-lg:block"),We(4),A(a,e)}var Ze=M("<div><!></div>");function ut(a,e){let t=C(e,"isLeft",8,!1),n=C(e,"classes",8,"");var i=Ze(),l=R(i);V(l,e,"default",{}),N(i),Y(()=>k(i,`absolute -rotate-90 text-[150px] font-black leading-none ${t()?"sm:-left-3":"sm:-right-3"} bottom-0 sm:text-[85px] md:text-[100px] lg:-right-6 lg:left-[auto] ${n()}`)),A(a,i)}export{ct as S,vt as a,ut as b,dt as c,ft as d,ot as e};
