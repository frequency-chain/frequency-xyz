import{a as _,t as M,n as K,c as se,d as ne}from"../chunks/disclose-version.CwNrvoDA.js";import"../chunks/legacy.BJU1Cibx.js";import{U as be,a5 as we,h as P,M as U,x as ye,Y as Ce,S as ie,a9 as $e,aa as ee,K as j,N as D,aC as F,a6 as oe,V as de,a7 as ke,W as te,aD as He,aE as Ie,R as Me,aF as Ve,az as Le,G as Ee,O as Te,ap as Ae,v as ze,a0 as re,aG as Be,aH as Re,aI as Pe,I as Ze,p as A,ay as k,b as z,c as y,r as b,m as h,am as N,D as H,E as W,aB as G,l as De,a as Ne,av as Oe,aA as Se,aw as Y,w as J}from"../chunks/runtime.B7hjv9x3.js";import{s as ve}from"../chunks/slot.D6o-hhqY.js";import{i as B}from"../chunks/lifecycle.CO_upe4a.js";import{s as Fe,a as Ye}from"../chunks/store.I2vujHEa.js";import{c as ce,B as fe}from"../chunks/index.CRX64NPe.js";import{s as E,a as Q}from"../chunks/event-modifiers.DgX551Z8.js";import{l as I,p as $,i as ue}from"../chunks/props.B99uV12d.js";import{s as O,o as qe}from"../chunks/index-client.2wqK0P4e.js";import{s as V,r as Xe}from"../chunks/attributes.DddvFtFg.js";import{j as Ue}from"../chunks/utils.JED6u04i.js";import{b as je}from"../chunks/input.CNh0rDNL.js";import{b as Z}from"../chunks/paths.DQwxf1hz.js";import{p as Ge}from"../chunks/stores.QDmpCKQS.js";function he(n,e){return e}function Je(n,e,t,o){for(var a=[],i=e.length,d=0;d<i;d++)Ie(e[d].e,a,!0);var f=i>0&&a.length===0&&t!==null;if(f){var s=t.parentNode;Me(s),s.append(t),o.clear(),T(n,e[0].prev,e[i-1].next)}Ve(a,()=>{for(var u=0;u<i;u++){var r=e[u];f||(o.delete(r.k),T(n,r.prev,r.next)),Le(r.e,!f)}})}function ge(n,e,t,o,a,i=null){var d=n,f={flags:e,items:new Map,first:null};{var s=n;d=P?U(Ee(s)):s.appendChild(be())}P&&ye();var u=null,r=!1;we(()=>{var v=t(),l=Ce(v)?v:v==null?[]:ie(v),c=l.length;if(r&&c===0)return;r=c===0;let m=!1;if(P){var x=d.data===$e;x!==(c===0)&&(d=ee(),U(d),j(!1),m=!0)}if(P){for(var w=null,g,p=0;p<c;p++){if(D.nodeType===8&&D.data===Te){d=D,m=!0,j(!1);break}var R=l[p],L=o(R,p);g=pe(D,f,w,null,R,L,p,a,e),f.items.set(L,g),w=g}c>0&&U(ee())}if(!P){var C=Ae;Ke(l,f,d,a,e,(C.f&F)!==0,o)}i!==null&&(c===0?u?oe(u):u=de(()=>i(d)):u!==null&&ke(u,()=>{u=null})),m&&j(!0),t()}),P&&(d=D)}function Ke(n,e,t,o,a,i,d){var f=n.length,s=e.items,u=e.first,r=u,v,l=null,c=[],m=[],x,w,g,p;for(p=0;p<f;p+=1){if(x=n[p],w=d(x,p),g=s.get(w),g===void 0){var R=r?r.e.nodes_start:t;l=pe(R,e,l,l===null?e.first:l.next,x,w,p,o,a),s.set(w,l),c=[],m=[],r=l.next;continue}if(We(g,x,p),g.e.f&F&&oe(g.e),g!==r){if(v!==void 0&&v.has(g)){if(c.length<m.length){var L=m[0],C;l=L.prev;var S=c[0],q=c[c.length-1];for(C=0;C<c.length;C+=1)ae(c[C],L,t);for(C=0;C<m.length;C+=1)v.delete(m[C]);T(e,S.prev,q.next),T(e,l,S),T(e,q,L),r=L,l=q,p-=1,c=[],m=[]}else v.delete(g),ae(g,r,t),T(e,g.prev,g.next),T(e,g,l===null?e.first:l.next),T(e,l,g),l=g;continue}for(c=[],m=[];r!==null&&r.k!==w;)(i||!(r.e.f&F))&&(v??(v=new Set)).add(r),m.push(r),r=r.next;if(r===null)continue;g=r}c.push(g),l=g,r=g.next}if(r!==null||v!==void 0){for(var X=v===void 0?[]:ie(v);r!==null;)(i||!(r.e.f&F))&&X.push(r),r=r.next;var xe=X.length;if(xe>0){var _e=f===0?t:null;Je(e,X,_e,s)}}te.first=e.first&&e.first.e,te.last=l&&l.e}function We(n,e,t,o){He(n.v,e),n.i=t}function pe(n,e,t,o,a,i,d,f,s){var u=(s&Re)!==0,r=(s&Pe)===0,v=u?r?ze(a):re(a):a,l=s&Be?re(d):d,c={i:l,v,k:i,a:null,e:null,prev:t,next:o};try{return c.e=de(()=>f(n,v,l),P),c.e.prev=t&&t.e,c.e.next=o&&o.e,t===null?e.first=c:(t.next=c,t.e.next=c.e),o!==null&&(o.prev=c,o.e.prev=c.e),c}finally{}}function ae(n,e,t){for(var o=n.next?n.next.e.nodes_start:t,a=e?e.e.nodes_start:t,i=n.e.nodes_start;i!==o;){var d=Ze(i);a.before(i),i=d}}function T(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}const Qe=!0,et=!1,tt="always",Dt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Qe,ssr:et,trailingSlash:tt},Symbol.toStringTag,{value:"Module"}));var rt=M('<a target="_blank"><div><!></div></a>');function le(n,e){const t=I(e,["children","$$slots","$$events","$$legacy"]),o=I(t,["label","href","isRound","type"]);A(e,!1);let a=$(e,"label",8,""),i=$(e,"href",8,""),d=$(e,"isRound",8,!1),f=$(e,"type",8,"light"),s={light:"bg-navy",dark:"bg-white"}[f()],u={light:"text-white",dark:"text-black"}[f()];B();var r=rt();const v=N(()=>ce("flex h-f32 w-f32 items-center justify-center p-1 transition-colors duration-[0.3s] hover:bg-teal",d()?"rounded-full":"rounded",s,o.class));var l=y(r);E(l,`h-auto w-full ${u??""}`);var c=y(l);ve(c,e,"default",{}),b(l),b(r),k(()=>{V(r,"aria-label",a()),E(r,h(v)),V(r,"href",i())}),_(n,r),z()}var at=M(`<label aria-label="Open main navigation" aria-controls="mobile-navigation"><svg class="h-[40px] w-[40px] stroke-current" role="none"><line x1="5%" y1="50%" x2="95%" y2="50%" stroke-linecap="round" stroke-linejoin="round" class="origin-left translate-y-[25%] stroke-[10%] transition-all duration-[0.3s] peer-checked:group-[]:translate-x-[8px] peer-checked:group-[]:translate-y-[35%] peer-checked:group-[]:-rotate-45"></line><line x1="5%" y1="50%" x2="95%" y2="50%" stroke-linecap="round" stroke-linejoin="round" class="origin-center stroke-[10%] transition-all duration-[0.3s] peer-checked:group-[]:scale-x-0"></line><line x1="5%" y1="50%" x2="95%" y2="50%" stroke-linecap="round" stroke-linejoin="round" class="origin-left translate-y-[-25%] stroke-[10%] transition-all duration-[0.3s] peer-checked:group-[]:translate-x-[8px] peer-checked:group-[]:translate-y-[-35%] peer-checked:group-[]:rotate-45
      "></line></svg></label>`);function lt(n,e){let t=$(e,"toggleIdentifier",8,"mobile-menu-toggle"),o=$(e,"classes",8,"");var a=at();k(()=>{V(a,"for",t()),E(a,`group z-50 ${o()}`)}),_(n,a)}var st=K('<svg width="257" height="36" viewBox="0 0 257 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.737414V35.2633H6.40857V24.5081L19.284 19.2909L19.1144 13.1214L6.46158 18.2334V6.48588H22.7984V0.737414H0ZM31.1629 6.48087H39.7501C42.5383 6.48087 44.8229 7.79895 44.8229 10.6456C44.8229 13.4923 42.5383 14.8605 39.7501 14.8605H31.1629V6.48588V6.48087ZM24.696 0.737414V35.2633H31.1629V26.7784L51.2314 35.2633V28.6227L31.7195 20.6641H39.5805C45.8247 20.6641 51.2314 16.8702 51.2314 10.7007C51.2314 4.5313 45.8247 0.737414 39.5805 0.737414H24.696ZM53.1821 0.737414V35.2633H75.9275V29.4647H59.5907V20.8194H75.9275V15.076H59.5907V6.48588H75.9275V0.737414H53.1821ZM137.193 0.737414V24.3527C137.193 27.886 134.463 30.3067 130.785 30.3067C127.106 30.3067 124.376 27.881 124.376 24.3527V0.737414H117.967V24.2475C117.967 31.2038 123.708 36 130.79 36C137.872 36 143.612 31.2038 143.612 24.2475V0.737414H137.204H137.193ZM145.558 0.737414V35.2633H168.303V29.4647H151.966V20.8194H168.303V15.076H151.966V6.48588H168.303V0.737414H145.558ZM190.603 0.737414V24.037L177.224 0.737414H170.254V35.2633H176.551V12.0188L189.988 35.2633H196.9V0.737414H190.603ZM250.199 0.737414L245.126 13.7028L239.773 0.737414H232.691L248.19 35.2633H254.88L248.413 20.8746L257 0.792543H250.199V0.737414ZM84.0111 17.9778C84.0111 11.232 89.8101 5.69402 97.0031 5.69402C104.196 5.69402 109.995 11.1769 109.995 17.9778C109.995 20.1378 109.439 22.2478 108.267 24.1472L93.828 15.7125V22.5635L103.974 28.3621C101.853 29.575 99.4574 30.2616 96.9501 30.2616C89.8684 30.3167 84.0747 24.9391 84.0164 18.2434V17.9778M96.9448 0.00068895C86.4653 0.0558181 77.9365 8.1197 77.9895 18.0279C78.0478 27.9361 86.5766 36 97.0562 35.9499C101.625 35.9499 106.03 34.3662 109.486 31.5245L115.953 35.2132V28.6227L113.388 27.1493C115.063 24.3577 115.953 21.1953 115.953 17.9778C116.07 8.1197 107.652 0.0558181 97.2258 0.00068895C97.1145 0.00068895 97.0561 0.00068895 96.9448 0.00068895ZM217.923 0.00068895C207.444 0.00068895 198.856 8.01446 198.856 17.9728C198.856 27.9311 207.332 36 217.865 36C223.939 36 229.627 33.3137 233.194 28.6728L228.737 24.458C226.563 28.1466 222.381 30.4119 217.923 30.3067C210.566 30.3067 205.048 24.9842 205.048 18.0229C205.048 11.0616 210.624 5.68901 217.923 5.68901C222.381 5.58376 226.563 7.84907 228.737 11.5928L233.194 7.37797C229.627 2.63686 223.939 -0.0494284 217.923 0.00068895Z" fill="currentColor" class="transition-all duration-1000"></path></svg>');function me(n,e){const t=I(e,["children","$$slots","$$events","$$legacy"]),o=I(t,[]);A(e,!1),B();var a=st();k(()=>Q(a,o.class)),_(n,a),z()}var nt=K('<svg viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="currentColor" fill-rule="nonzero"></path></g></svg>');function it(n,e){const t=I(e,["children","$$slots","$$events","$$legacy"]),o=I(t,[]);A(e,!1),B();var a=nt();k(()=>Q(a,o.class)),_(n,a),z()}var ot=K('<svg viewBox="0 0 300 300.251" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" fill="currentColor"></path></svg>');function dt(n,e){const t=I(e,["children","$$slots","$$events","$$legacy"]),o=I(t,[]);A(e,!1),B();var a=ot();k(()=>Q(a,o.class)),_(n,a),z()}var vt=M('<footer><!> <aside class="flex flex-col items-center space-y-4 leading-none md:flex-row md:space-x-4 md:space-y-0"><div> <span class="md:hidden">All Rights Reserved</span></div> <div></div> <div class="hidden md:block">All Rights Reserved</div> <div></div> <div><a class="underline transition duration-[0.3s] hover:text-teal">Privacy Policy</a></div></aside> <div class="flex gap-f16" aria-label="Social Links"><!> <!></div></footer>');function ct(n,e){const t=I(e,["children","$$slots","$$events","$$legacy"]),o=I(t,["privacyHref","type"]);A(e,!1);let a=$(e,"privacyHref",8,"/privacy"),i=$(e,"type",8,"light"),d={dark:"text-white",light:"text-black"}[i()],f={dark:"bg-white",light:"bg-black"}[i()];B();var s=vt();const u=N(()=>ce("sm md:md mx-auto my-0 flex max-w-screen-xl flex-col items-center gap-f16 border-t-[2px] border-current py-f48 md:gap-f48",d,o.class));var r=y(s);me(r,{class:"w-[146px] md:w-[257px]"});var v=H(r,2),l=y(v),c=y(l);k(()=>O(c,`© ${new Date().getFullYear()??""} Frequency Network Foundation `)),W(),b(l);var m=H(l,2);E(m,`hidden w-[2px] self-stretch md:block ${f??""}`);var x=H(m,4);E(x,`hidden w-[2px] self-stretch md:block ${f??""}`);var w=H(x,2),g=y(w);b(w),b(v);var p=H(v,2),R=y(p);le(R,{get type(){return i()},label:"X/Twitter",href:"https://twitter.com/one_frequency",children:(C,S)=>{dt(C,{})},$$slots:{default:!0}});var L=H(R,2);le(L,{get type(){return i()},label:"Discord",href:"https://discord.com/invite/JchmHX5afV",children:(C,S)=>{it(C,{})},$$slots:{default:!0}}),b(p),b(s),k(()=>{E(s,h(u)),V(g,"href",a())}),_(n,s),z()}var ft=M('<div class="content-center"><!></div>'),ut=M("<a> </a>"),ht=M('<nav class="hidden items-stretch gap-f40 md:flex"></nav>');function gt(n,e){A(e,!1);const t=G();let o=$(e,"menuItems",24,()=>[]),a=$(e,"highlightMarginTop",8,"0px"),i=G(o().filter(f=>f.viewportHighlightId).map(f=>[f.viewportHighlightId,!1]));qe(()=>{const f=new IntersectionObserver(s=>{s.forEach(u=>{const r=h(i).findIndex(([v])=>v===u.target.id);r>-1&&Oe().then(()=>Se(i,h(i)[r][1]=u.isIntersecting))})},{threshold:.05,rootMargin:`${a()} 0px 0px 0px`});return h(i).forEach(([s])=>{const u=document.getElementById(s);u&&f.observe(u)}),()=>{f.disconnect()}}),De(()=>h(i),()=>{var f;J(t,(f=h(i).find(([s,u])=>u===!0))==null?void 0:f[0])}),Ne(),B();var d=ht();ge(d,5,o,he,(f,s)=>{var u=se(),r=Y(u);ue(r,()=>h(s).isButton,v=>{var l=ft(),c=y(l),m=N(()=>h(s).isActive||!1),x=N(()=>h(s).isExternal?"_blank":"_self");fe(c,{size:"auto",get active(){return h(m)},get href(){return h(s).href},get target(){return h(x)},children:(w,g)=>{W();var p=ne();k(()=>O(p,h(s).label)),_(w,p)},$$slots:{default:!0}}),b(l),_(v,l)},v=>{var l=ut(),c=y(l,!0);b(l),k(()=>{V(l,"href",h(s).href),V(l,"target",h(s).isExternal?"_blank":"_self"),E(l,`${`h6 underline-on-nav-hover border-color hidden content-center px-2 text-navy transition-all duration-1000 after:bg-current lg:block ${h(s).viewportHighlightId&&h(t)===h(s).viewportHighlightId?"underline-on-nav":""}`??""} svelte-1m2t4rb`),O(c,h(s).label)}),_(v,l)}),_(f,u)}),b(d),_(n,d),z()}var pt=M("<a> </a>"),mt=M('<input type="checkbox" class="peer hidden"> <!> <div class="z-1 fixed left-0 top-0 z-10 flex h-0 w-[100vw] flex-col justify-between gap-f24 overflow-y-scroll bg-navy px-[12%] transition-[height] duration-[1s] peer-checked:h-[100vh] lg:hidden"><nav id="mobile-navigation" aria-label="Main" class="mb-f20 mt-[85px] flex flex-col gap-f24 text-white"></nav></div>',1);function xt(n,e){let t=$(e,"menuItems",24,()=>[]),o=$(e,"toggleIdentifier",8,"mobile-menu-toggle"),a=G(!1);var i=mt(),d=Y(i);Xe(d);var f=H(d,2);lt(f,{classes:"cursor-pointer text-navy peer-checked:text-white peer-checked:hover:text-teal hover:text-teal flex self-center lg:hidden"});var s=H(f,2),u=y(s);ge(u,5,t,he,(r,v)=>{var l=se(),c=Y(l);ue(c,()=>h(v).isButton,m=>{var x=N(()=>h(v).isExternal?"_blank":"_self");fe(m,{size:"full",class:"mt-f24 max-w-[360px] md:hidden",get href(){return h(v).href},get target(){return h(x)},children:(w,g)=>{W();var p=ne();k(()=>O(p,h(v).label)),_(w,p)},$$slots:{default:!0}})},m=>{var x=pt();E(x,"h4 underline-on-hover font-bold after:bg-current");var w=y(x,!0);b(x),k(()=>{V(x,"href",h(v).href),V(x,"target",h(v).isExternal?"_blank":"_self"),O(w,h(v).label)}),Ue("click",x,()=>h(v).isExternal?null:J(a,!1)),_(m,x)}),_(r,l)}),b(u),b(s),k(()=>{V(d,"id",o()),V(s,"aria-expanded",h(a))}),je(d,()=>h(a),r=>J(a,r)),_(n,i)}var _t=M('<div><div class="m-auto flex h-[85px] w-full max-w-screen-lg items-stretch justify-around sm:px-f20 md:px-f32"><div class="flex w-[146px] items-center text-teal md:w-[200px]"><!></div> <!> <!></div></div>');function bt(n,e){const t=I(e,["children","$$slots","$$events","$$legacy"]),o=I(t,["menuItems","highlightMarginTop"]);A(e,!1);let a=$(e,"menuItems",24,()=>[]),i=$(e,"highlightMarginTop",8,"90px");B();var d=_t(),f=y(d),s=y(f),u=y(s);me(u,{}),b(s);var r=H(s,2);gt(r,{get highlightMarginTop(){return i()},get menuItems(){return a()}});var v=H(r,2);xt(v,{get menuItems(){return a()}}),b(f),b(d),k(()=>E(d,`${`header-shadow flex h-[85px] font-title ${o.class}`??""} svelte-5f62pp`)),_(n,d),z()}var wt=M('<div class="sticky top-0 z-50 mb-4 w-full bg-white"><!></div>');function yt(n,e){A(e,!1);const t=Fe(),o=()=>Ye(Ge,"$page",t),a=[{label:"Mission",href:Z+"/#mission",viewportHighlightId:"mission"},{label:"About",href:Z+"/#about",viewportHighlightId:"about"},{label:"Users",href:Z+"/#users",viewportHighlightId:"users"},{label:"Developers",href:Z+"#developers",viewportHighlightId:"developers"},{label:"Contact",href:Z+"/#contact",viewportHighlightId:"contact"},{label:"Developer Portal",href:Z+"/docs",isButton:!0,isActive:o().url.pathname==="/docs/"}];B();var i=wt(),d=y(i);bt(d,{menuItems:a}),b(i),_(n,i),z()}var Ct=M('<!> <div class="w-full max-w-screen-xl"><!></div> <!>',1);function Nt(n,e){var t=Ct(),o=Y(t);yt(o,{});var a=H(o,2),i=y(a);ve(i,e,"default",{}),b(a);var d=H(a,2);ct(d,{type:"dark",class:"w-full border-grayBorder border-opacity-25 bg-navy vertical-lg:w-[100%]"}),_(n,t)}export{Nt as component,Dt as universal};
