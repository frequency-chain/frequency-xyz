import{a as p,t as x,b as z}from"../chunks/disclose-version.DlJIDhwu.js";import{F as $e,K as ye,h as R,I as ee,f as Pe,a1 as ke,af as fe,ai as Se,aj as oe,a8 as te,H as G,ah as ge,N as ue,O as Ce,aC as ae,J as se,aD as Ee,aE as Te,aF as He,z as Ie,Y as ne,aG as qe,aH as Fe,ae as Le,aI as Me,aJ as ze,E as We,ab as Ae,a7 as Ve,e as le,u as De,r as h,t as W,o as y,p as me,l as O,a as he,U as A,b as xe,A as q,c as w,s as m,aw as D,v as Be,n as T}from"../chunks/runtime.HFrxrq5J.js";import{p as H,e as Z,s as Ne,c as Ye}from"../chunks/props.BNPdRTwM.js";import{s as V}from"../chunks/attributes.DaUFU_VX.js";import{i as be}from"../chunks/lifecycle.C6VVn1Ip.js";import{s as Re,a as Ue}from"../chunks/store.Cai8xP-0.js";import{p as je}from"../chunks/stores.VZ03yco4.js";import{M as ie,H as Oe,J as Ge}from"../chunks/Header.07fXBkVr.js";import{s as M}from"../chunks/OpenCloseIcon.C66PtJN3.js";import{s as Y}from"../chunks/slot.BhLE95o-.js";import{b as Je}from"../chunks/this.B3-WDNa8.js";import{o as Ze}from"../chunks/index-client.DWLvS2kp.js";let re=null;function Xe(l,e){return e}function Ke(l,e,a,r){for(var t=[],c=e.length,s=0;s<c;s++)Fe(e[s].e,t,!0);var v=c>0&&t.length===0&&a!==null;if(v){var d=a.parentNode;Le(d),d.append(a),r.clear(),N(l,e[0].prev,e[c-1].next)}Me(t,()=>{for(var o=0;o<c;o++){var f=e[o];v||(r.delete(f.k),N(l,f.prev,f.next)),ze(f.e,!v)}})}function Qe(l,e,a,r,t,c=null){var s=l,v={flags:e,items:new Map,first:null};{var d=l;s=R?ee(We(d)):d.appendChild($e())}R&&Pe();var o=null,f=!1;ye(()=>{var n=a(),g=ke(n)?n:n==null?[]:fe(n),i=g.length;if(f&&i===0)return;f=i===0;let u=!1;if(R){var $=s.data===Se;$!==(i===0)&&(s=oe(),ee(s),te(!1),u=!0)}if(R){for(var b=null,P,I=0;I<i;I++){if(G.nodeType===8&&G.data===Ae){s=G,u=!0,te(!1);break}var S=g[I],_=r(S,I);P=we(G,v,b,null,S,_,I,t,e),v.items.set(_,P),b=P}i>0&&ee(oe())}R||et(g,v,s,t,e,r),c!==null&&(i===0?o?ge(o):o=ue(()=>c(s)):o!==null&&Ce(o,()=>{o=null})),u&&te(!0),a()}),R&&(s=G)}function et(l,e,a,r,t,c){var s=l.length,v=e.items,d=e.first,o=d,f,n=null,g=[],i=[],u,$,b,P;for(P=0;P<s;P+=1){if(u=l[P],$=c(u,P),b=v.get($),b===void 0){var I=o?o.e.nodes_start:a;n=we(I,e,n,n===null?e.first:n.next,u,$,P,r,t),v.set($,n),g=[],i=[],o=n.next;continue}if(tt(b,u,P),b.e.f&ae&&ge(b.e),b!==o){if(f!==void 0&&f.has(b)){if(g.length<i.length){var S=i[0],_;n=S.prev;var C=g[0],E=g[g.length-1];for(_=0;_<g.length;_+=1)ce(g[_],S,a);for(_=0;_<i.length;_+=1)f.delete(i[_]);N(e,C.prev,E.next),N(e,n,C),N(e,E,S),o=S,n=E,P-=1,g=[],i=[]}else f.delete(b),ce(b,o,a),N(e,b.prev,b.next),N(e,b,n===null?e.first:n.next),N(e,n,b),n=b;continue}for(g=[],i=[];o!==null&&o.k!==$;)o.e.f&ae||(f??(f=new Set)).add(o),i.push(o),o=o.next;if(o===null)continue;b=o}g.push(b),n=b,o=b.next}if(o!==null||f!==void 0){for(var k=f===void 0?[]:fe(f);o!==null;)o.e.f&ae||k.push(o),o=o.next;var F=k.length;if(F>0){var L=s===0?a:null;Ke(e,k,L,v)}}se.first=e.first&&e.first.e,se.last=n&&n.e}function tt(l,e,a,r){Ee(l.v,e),l.i=a}function we(l,e,a,r,t,c,s,v,d){var o=re;try{var f=(d&Te)!==0,n=(d&He)===0,g=f?n?Ie(t):ne(t):t,i=d&qe?ne(s):s,u={i,v:g,k:c,a:null,e:null,prev:a,next:r};return re=u,u.e=ue(()=>v(l,g,i),R),u.e.prev=a&&a.e,u.e.next=r&&r.e,a===null?e.first=u:(a.next=u,a.e.next=u.e),r!==null&&(r.prev=u,r.e.prev=u.e),u}finally{re=o}}function ce(l,e,a){for(var r=l.next?l.next.e.nodes_start:a,t=e?e.e.nodes_start:a,c=l.e.nodes_start;c!==r;){var s=Ve(c);t.before(c),c=s}}function N(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function at(l,e,a){le(()=>{var r=De(()=>e(l,a==null?void 0:a())||{});if(r!=null&&r.destroy)return()=>r.destroy()})}function rt(l,e,a,r){var t=l.__styles??(l.__styles={});t[e]!==a&&(t[e]=a,a==null?l.style.removeProperty(e):l.style.setProperty(e,a,""))}var lt=x("<button></button>"),ot=x('<div role="navigation" aria-label="Page Sections" class="freq-container absolute right-0 w-[50%] justify-between pl-0 pt-[32px] sm:hidden md:hidden lg:flex vertical-lg:hidden"></div>');function st(l,e){let a=H(e,"section",12),r=H(e,"sectionTitles",8);var t=ot();Qe(t,5,r,Xe,(c,s,v)=>{var d=lt();d.textContent=`.0${v+1}`,W(()=>{V(d,"aria-label",`Section ${v}: ${y(s)}`),M(d,`text-lg transition-opacity duration-700 ${a()===v+1?"opacity-100":"opacity-25"}`)}),Z("click",d,()=>a(v+1)),p(c,d)}),h(t),p(l,t)}var nt=x('<div class="vertical:block horizontal:hidden"><!></div> <div id="scroll-container"><!></div>',1);function it(l,e){me(e,!1);const a=D(),r=D(),t=2e3,c=150;let s=H(e,"section",12),v=H(e,"sectionCount",8),d=D(),o=D(!0);const f=()=>{var k,F,L;if(!y(d))return;const C=((F=(k=document.getElementById("header"))==null?void 0:k.getBoundingClientRect())==null?void 0:F.height)||0;-1*(((L=y(d).getBoundingClientRect())==null?void 0:L.top)||0)>C&&y(d).scrollIntoView()};let n=0,g=0,i=!1;const u=C=>{const E=C.deltaY>0,k=Date.now(),F=k-g,L=k-n,B=E!==i||L>c||F>t,Q=s()>=v(),_e=s()<=1;Q&&E&&B||_e&&!E&&B||(C.preventDefault(),B&&(C.deltaY>0&&s(Math.min(s()+1,v())),C.deltaY<0&&(s(Math.max(s()-1,1)),f()),g=k),n=k,i=E)},$=async()=>{y(d).style.setProperty("transition-property","none"),q(o,!y(o)),setTimeout(()=>y(d).style.removeProperty("transition-property"),1)};Ze(()=>(window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$)})),O(()=>(y(o),ie),()=>{q(a,(y(o)||!0)&&Math.min(ie,window.innerWidth))}),O(()=>(y(a),Be(s())),()=>{q(r,-1*y(a)*(s()-1))}),he(),be();var b=nt(),P=A(b),I=w(P);Y(I,e,"default",{}),h(P);var S=m(P,2);Je(S,C=>q(d,C),()=>y(d)),M(S,"relative z-0 h-[600px] flex-nowrap transition-transform duration-500 ease-in-out vertical:hidden horizontal:flex");var _=w(S);Y(_,e,"default",{}),h(S),W(()=>rt(S,"transform",`translate(${y(r)}px)`)),Z("wheel",S,u),p(l,b),xe()}var ct=x("<div><!></div>");function J(l,e){let a=H(e,"id",8,""),r=H(e,"classes",8,"");var t=ct(),c=w(t);Y(c,e,"default",{}),h(t),W(()=>{V(t,"id",a()),M(t,`relative w-[100vw] min-w-full sm:pt-[80px] lg:pt-[140px] vertical-lg:w-[100%] ${r()}`)}),p(l,t)}let X;function dt(){X||(X=new IntersectionObserver(l=>{l.forEach(e=>{const a=e.isIntersecting?"enterViewport":"exitViewport";e.target.dispatchEvent(new CustomEvent(a))})}))}function vt(l){return dt(),X.observe(l),{destroy(){X.unobserve(l)}}}var pt=x("<div><!></div>");function U(l,e){let a=D("");var r=pt(),t=w(r);Y(t,e,"default",{}),h(r),W(()=>M(r,y(a))),at(r,c=>vt(c)),le(()=>Z("enterViewport",r,()=>q(a,"slide-from-right"))),le(()=>Z("exitViewport",r,()=>q(a,""))),p(l,r)}var ft=x('<div></div> <div class="relative z-10 h-full w-full bg-[url(/src/lib/assets/section1waves-top.svg)] bg-left-bottom bg-no-repeat sm:hidden lg:block vertical-lg:hidden"></div> <div class="relative z-0 -mt-[9px] h-[260px] w-full bg-[url(/src/lib/assets/section1waves-bottom.svg)] bg-left-top bg-no-repeat sm:hidden lg:block vertical-lg:hidden"></div>',1);function gt(l){var e=ft(),a=A(e);M(a,"absolute bottom-0 w-full bg-[url(/src/lib/assets/section1waves.svg)] bg-no-repeat sm:right-[10%] sm:h-[180px] sm:bg-right-bottom md:h-[200px] lg:hidden vertical-lg:relative vertical-lg:block"),T(4),p(l,e)}var ut=x("<div><!></div>");function j(l,e){let a=H(e,"isLeft",8,!1),r=H(e,"classes",8,"");var t=ut(),c=w(t);Y(c,e,"default",{}),h(t),W(()=>M(t,`absolute -rotate-90 text-[150px] font-black leading-none ${a()?"sm:-left-3":"sm:-right-3"} bottom-0 sm:text-[85px] md:text-[100px] lg:-right-6 lg:left-[auto] ${r()}`)),p(l,t)}var mt=x('<h2 class="title-75 paragraph-spacing-left text-teal sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">Build at a higher Frequency</h2>'),ht=x('<p class="subtitle paragraph-spacing-left sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">Frequency Empowers the Social Web, Putting Control and Data Privacy in Your Hands</p>'),xt=x(`<div class="flex sm:justify-start sm:px-[30px] md:px-[40px] lg:justify-end lg:px-0 vertical-lg:justify-start vertical-lg:px-[30px]"><section class="flex h-full w-full flex-col gap-6 lg:w-[60%] lg:pl-6"><!> <!> <p class="body paragraph-spacing-left sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">Frequency contributes to the mission of creating a better web and world. It empowers individuals to ensure the
        portability of their content and safeguard their privacy. The protocol enables ownership of digital identity and
        control over online presence. In a world where technology can have both positive and negative effects,
        Frequency's focus is on what truly matters: people.</p></section></div> <!> <div class="bottom-0 left-0 w-full sm:-mb-[9px] sm:block sm:h-[190px] md:-mb-[10px] md:h-[220px] lg:absolute lg:mb-0 lg:h-full vertical-lg:relative vertical-lg:-mb-[10px] vertical-lg:block"><!></div>`,1);function bt(l){J(l,{id:"section1",classes:"lg:px-0",children:(e,a)=>{var r=xt(),t=A(r),c=w(t),s=w(c);U(s,{children:(n,g)=>{var i=mt();p(n,i)},$$slots:{default:!0}});var v=m(s,2);U(v,{children:(n,g)=>{var i=ht();p(n,i)},$$slots:{default:!0}}),T(2),h(c),h(t);var d=m(t,2);j(d,{classes:"text-teal sm:right-0 sm:bottom-[140px] z-10 lg:bottom-4",children:(n,g)=>{T();var i=z(".01");p(n,i)},$$slots:{default:!0}});var o=m(d,2),f=w(o);gt(f),h(o),p(e,r)},$$slots:{default:!0}})}var wt=x('<div class="relative z-10 h-full w-full bg-[url(/src/lib/assets/section2waves-top.svg)] bg-left-bottom bg-no-repeat sm:hidden lg:block"></div> <div class="relative z-0 -mt-[4px] h-[80px] w-full bg-[url(/src/lib/assets/section2waves-bottom.svg)] bg-left-top bg-no-repeat sm:hidden lg:block"></div> <div class="h-full w-full bg-[url(/src/lib/assets/section2mobile-top.svg)] bg-left-bottom bg-no-repeat sm:w-[170%] sm:max-w-[900px] md:w-[110%] md:max-w-full lg:hidden"></div> <div class="h-full w-full bg-[url(/src/lib/assets/section2mobile-bottom.svg)] bg-left-top bg-no-repeat sm:w-[170%] sm:max-w-[900px] md:w-[110%] md:max-w-full lg:hidden"></div>',1);function _t(l){var e=wt();T(6),p(l,e)}var $t=x("<p><!></p>");function K(l,e){let a=H(e,"classes",8,"");var r=$t(),t=w(r);Y(t,e,"default",{}),h(r),W(()=>M(r,`body sm:max-w-[600px] md:max-w-[700px] lg:max-w-[450px] ${a()}`)),p(l,r)}var yt=x("<section><!></section>");function Pt(l,e){let a=H(e,"classes",8,"");var r=yt(),t=w(r);Y(t,e,"default",{}),h(r),W(()=>M(r,`sm:freq-container md:freq-container body relative h-full ${a()}`)),p(l,r)}var kt=x('<h2 class="title-100 -mt-[9px] sm:max-w-[280px] sm:pr-5 lg:max-w-[320px]">Taking back control</h2>'),St=x('<div class="flex gap-4 text-right sm:items-end lg:items-start"><!> <!></div> <!>',1),Ct=x('<!> <!> <div class="absolute bottom-0 left-0 h-full w-full"><!></div>',1);function Et(l){J(l,{id:"section2",classes:"text-cream bg-navy sm:pb-[40px] lg:pb-0 vertical-lg:min-h-[550px]",children:(e,a)=>{var r=Ct(),t=A(r);j(t,{classes:"lg:hidden bottom-4 z-20",isLeft:!0,children:(d,o)=>{T();var f=z(".02");p(d,f)},$$slots:{default:!0}});var c=m(t,2);Pt(c,{classes:"flex gap-12 sm:flex-col sm:items-end lg:flex-row lg:items-start justify-center",children:(d,o)=>{var f=St(),n=A(f),g=w(n);j(g,{classes:"md:text-[100px] lg:block lg:font-normal relative lg:bottom-auto lg:right-auto lg:top-[16px] sm:hidden",children:($,b)=>{T();var P=z(".02");p($,P)},$$slots:{default:!0}});var i=m(g,2);U(i,{children:($,b)=>{var P=kt();p($,P)},$$slots:{default:!0}}),h(n);var u=m(n,2);K(u,{classes:"text-left paragraph-spacing-right lg:pl-0 sm:pb-[100px] lg:pb-0 sm:pr-5  sm:max-w-[515px] lg:max-w-auto",children:($,b)=>{T();var P=z(`With Frequency, you will have a choice in how your favorite applications and websites utilize your data. Obtain
      control over your privacy and how your data is shared.`);p($,P)},$$slots:{default:!0}}),p(d,f)},$$slots:{default:!0}});var s=m(c,2),v=w(s);_t(v),h(s),p(e,r)},$$slots:{default:!0}})}var Tt=x("<div></div>");function de(l){var e=Tt();M(e,"absolute left-0 h-full bg-left-bottom bg-no-repeat sm:-bottom-16 sm:max-h-[200px] sm:w-[200%] sm:bg-[url(/src/lib/assets/section3mobile.svg)] md:max-h-full md:w-full lg:bottom-0 lg:max-w-full lg:bg-[url(/src/lib/assets/section3waves.svg)]"),p(l,e)}var Ht=x("<div><!></div>");function ve(l,e){let a=H(e,"isLeft",8),r=H(e,"classes",8);var t=Ht(),c=w(t);Y(c,e,"default",{}),h(t),W(()=>M(t,`${a()?"left-0 justify-end lg:pr-7":"right-0 justify-start lg:pl-7"} sm:freq-container md:freq-container top-0 flex sm:relative sm:pt-6 lg:absolute lg:w-[50%] lg:pt-[150px] vertical-lg:relative vertical-lg:w-full vertical-lg:pt-[40px] ${r()}`)),p(l,t)}var It=x('<h2 class="title-75 text-right text-navy sm:max-w-[300px] sm:pr-5 md:max-w-[400px] lg:max-w-[540px]">Take Your Content & Relationships With You</h2>'),qt=x('<!> <div class="z-10 sm:block md:block lg:hidden"><!></div>',1),Ft=x('<div class="absolute bottom-0 left-0 h-full w-[50%] sm:hidden lg:block vertical-lg:hidden"><!></div> <section class="flex h-full flex-1 justify-center sm:flex-col sm:pt-[40px] lg:flex-row vertical-lg:flex-col"><!> <!></section> <!>',1);function Lt(l){J(l,{id:"section3",classes:"z-0 flex sm:justify-center md:justify-center overflow-hidden sm:pt-[40px]  vertical-lg:pt-0 text-white",children:(e,a)=>{var r=Ft(),t=A(r),c=w(t);de(c),h(t);var s=m(t,2),v=w(s);ve(v,{isLeft:!0,classes:"relative sm:pb-[100px] lg:pb-0",children:(f,n)=>{var g=qt(),i=A(g);U(i,{children:(b,P)=>{var I=It();p(b,I)},$$slots:{default:!0}});var u=m(i,2),$=w(u);de($),h(u),p(f,g)},$$slots:{default:!0}});var d=m(v,2);ve(d,{isLeft:!1,classes:"lg:border-b-[5px] h-full lg:border-yellow bg-teal lg:mr-0 transition-[height] sm:pt-[100px] vertical-lg:pt-6 duration-[2s] sm:pb-[80px]",children:(f,n)=>{K(f,{classes:"sm:pr-[100px] md:pr-[140px] lg:px-0",children:(g,i)=>{T();var u=z(`Your followers and friends are yours to keep, with complete control in your hands. Frequency ensures that you
        can seamlessly bring your content and connections along to any exciting new experience within the Frequency
        Network. If you love experimenting, you can post to multiple experiences at once using your Frequency identity,
        which links you to the entire network of Frequency apps.`);p(g,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),h(s);var o=m(s,2);j(o,{classes:"sm:bottom-4 lg:-bottom-[20px] lg:text-[200px] lg:-right-[80px]",children:(f,n)=>{T();var g=z(".03");p(f,g)},$$slots:{default:!0}}),p(e,r)},$$slots:{default:!0}})}var Mt=x("<div></div>");function zt(l){var e=Mt();M(e,"md:max-h-auto absolute h-full bg-[url(/src/lib/assets/section4waves.svg)] bg-bottom sm:-bottom-[6px] sm:right-[10%] sm:max-h-[100px] sm:w-[800px] sm:bg-no-repeat md:right-[50%] lg:bottom-0 lg:left-auto lg:right-0 lg:max-h-[150px] lg:w-full lg:bg-repeat-x"),p(l,e)}var Wt=x('<h2 class="title-75 sm:max-w-[500px] sm:pr-5 lg:max-w-[500px] lg:text-left">Support Your Preferred Apps</h2>'),At=x('<div class="sm:freq-container md:freq-container body relative h-full"><section class="sm:flex-end flex text-navy sm:flex-col sm:items-end sm:gap-6 lg:flex-row-reverse lg:items-start lg:justify-end lg:gap-12"><!> <!></section></div> <!> <div class="absolute bottom-0 left-0 flex h-full w-full"><!></div>',1);function Vt(l){J(l,{id:"section4",classes:"text-right flex lg:px-0 sm:pb-[140px] lg:pb-0 justify-end vertical-lg:min-h-[600px]",children:(e,a)=>{var r=At(),t=A(r),c=w(t),s=w(c);U(s,{children:(n,g)=>{var i=Wt();p(n,i)},$$slots:{default:!0}});var v=m(s,2);K(v,{classes:"paragraph-spacing-right lg:pl-0 sm:pr-5",children:(n,g)=>{T();var i=z(`Frequency is set to unveil a distinctive feature that allows you to express support for the apps and services
        within the Frequency network that you love. This feature will also enable you to publicly alter your choices,
        and, if necessary, reevaluate your support of apps and services, encouraging ethical conduct and responsibility.`);p(n,i)},$$slots:{default:!0}}),h(c),h(t);var d=m(t,2);j(d,{isLeft:!0,classes:"text-yellow sm:bottom-[100px] md:bottom-[120px] lg:text-[200px] lg:-right-[80px]",children:(n,g)=>{T();var i=z(".04");p(n,i)},$$slots:{default:!0}});var o=m(d,2),f=w(o);zt(f),h(o),p(e,r)},$$slots:{default:!0}})}const Dt=""+new URL("../assets/Braxton.Y9GadBX-.png",import.meta.url).href,Bt=""+new URL("../assets/Harry.BcrH4SGT.png",import.meta.url).href,Nt="data:image/svg+xml,%3csvg%20width='23'%20height='23'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15_7631)'%3e%3cpath%20d='M11.5%2023C17.8513%2023%2023%2017.8513%2023%2011.5C23%205.14873%2017.8513%200%2011.5%200C5.14873%200%200%205.14873%200%2011.5C0%2017.8513%205.14873%2023%2011.5%2023Z'%20fill='black'/%3e%3cpath%20d='M6.67715%209.35828H8.90444V16.5132H6.67715V9.35828ZM7.79118%205.80274C8.50349%205.80274%209.08066%206.38053%209.08066%207.0913C9.08066%207.80206%208.50349%208.38171%207.79118%208.38171C7.07887%208.38171%206.5%207.80299%206.5%207.0913C6.5%206.3796%207.07702%205.80274%207.79118%205.80274Z'%20fill='white'/%3e%3cpath%20d='M10.3%209.35828H12.4333V10.337H12.4625C12.7599%209.7739%2013.4854%209.18128%2014.5685%209.18128C16.8202%209.18128%2017.2354%2010.6621%2017.2354%2012.5892V16.5134H15.013V13.0347C15.013%2012.2043%2014.9968%2011.1374%2013.8571%2011.1374C12.7175%2011.1374%2012.5229%2012.0412%2012.5229%2012.974V16.5132H10.3V9.35828Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15_7631'%3e%3crect%20width='23'%20height='23'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";var Yt=x('<div class="max-w-[100px] sm:text-brightBlue lg:text-cream"><a target="_blank"><div class="relative"><img alt="headshot" class="mb-4 h-[100px] rounded-full drop-shadow-lg"> <img alt="linkedin" class="absolute bottom-0 right-0"></div> <p class="text-wrap text-center font-semibold leading-none"> </p></a></div>');function pe(l,e){let a=H(e,"imgSrc",8),r=H(e,"name",8),t=H(e,"linkedinUrl",8);var c=Yt(),s=w(c),v=w(s),d=w(v),o=m(d,2);V(o,"src",Nt),h(v);var f=m(v,2),n=w(f,!0);h(f),h(s),h(c),W(()=>{V(s,"href",t()),V(d,"src",a()),Ne(n,r())}),p(l,c)}var Rt=x('<h3 class="font-title text-xl tracking-wide">Meet the Founders</h3>'),Ut=x('<section class="flex flex-col gap-6 text-cream sm:-mb-[100px] lg:mb-[80px] vertical-lg:-mb-[100px]"><!> <div class="flex gap-6"><!> <!></div></section>');function jt(l){var e=Ut(),a=w(e);U(a,{children:(s,v)=>{var d=Rt();p(s,d)},$$slots:{default:!0}});var r=m(a,2),t=w(r);pe(t,{imgSrc:Dt,name:"Braxton Woodham",linkedinUrl:"https://www.linkedin.com/in/braxton-woodham-a1498b"});var c=m(t,2);pe(c,{imgSrc:Bt,name:"Harry Evans",linkedinUrl:"https://www.linkedin.com/in/harry-evans-"}),h(r),h(e),p(l,e)}var Ot=x("<div></div>");function Gt(l){var e=Ot();M(e,"wave absolute bottom-0 left-0 z-10 h-full w-full svelte-1djxotp"),p(l,e)}var Jt=x('<h2 class="title-75 text-yellow sm:pr-5 lg:max-w-[600px]">The Core of Our Technology</h2>'),Zt=x('<div class="absolute bottom-0 left-0 flex h-full w-full overflow-hidden sm:hidden lg:block vertical-lg:hidden"><!> <span class="absolute bottom-0 right-0 w-full border-b-4 border-darkIndigo"></span></div> <div class="freq-container right-0 top-0 flex h-full sm:w-full sm:flex-col sm:gap-12 lg:absolute lg:w-[70%] lg:flex-row lg:items-end lg:justify-around lg:gap-0 lg:px-6 vertical-lg:relative vertical-lg:w-full vertical-lg:flex-col vertical-lg:items-start"><section class="relative flex flex-col gap-6 sm:max-w-[800px] lg:max-w-[640px] lg:pb-[80px] lg:pr-[80px]"><!> <!> <a href="https://docs.frequency.xyz/" target="_blank"><button class="max-w-[200px] border-2 border-white px-10 py-3 text-xs font-semibold text-white transition-colors duration-500 hover:bg-cream hover:bg-opacity-30">Learn More</button></a> <!></section> <!></div> <!>',1);function Xt(l){J(l,{id:"section5",classes:"relative bg-brightBlue flex sm:flex-col vertical-lg:flex-col lg:flex-row sm:pt-[50px] vertical-lg:pt-[50px] lg:pt-0",children:(e,a)=>{var r=Zt(),t=A(r),c=w(t);Gt(c),T(2),h(t);var s=m(t,2),v=w(s),d=w(v);U(d,{children:(i,u)=>{var $=Jt();p(i,$)},$$slots:{default:!0}});var o=m(d,2);K(o,{classes:"sm:pr-5 md:pr-[140px] lg:px-0 text-white",children:(i,u)=>{T();var $=z(`The creators of Frequency are at the forefront of innovation. They've created the Decentralized Social
        Networking Protocol (DSNP), an open-source solution that establishes a shared social graph independent of
        specific applications or centralized platforms.`);p(i,$)},$$slots:{default:!0}});var f=m(o,4);j(f,{classes:"text-white sm:hidden lg:block mr-[70px] bottom-4 right-0 vertical-lg:hidden",children:(i,u)=>{T();var $=z(".05");p(i,$)},$$slots:{default:!0}}),h(v);var n=m(v,2);jt(n),h(s);var g=m(s,2);j(g,{classes:"text-white bottom-4 lg:hidden vertical-lg:block",children:(i,u)=>{T();var $=z(".05");p(i,$)},$$slots:{default:!0}}),p(e,r)},$$slots:{default:!0}})}var Kt=x('<meta property="og:title" content="Frequency"> <meta property="og:url"> <meta property="og:description" content="Frequency fuels the Social Web, putting control &amp; data privacy in your hands."> <meta property="og:type" content="website"> <meta property="og:image"> <meta property="og:image:width" content="1200"> <meta property="og:image:height" content="630"> <meta property="og:image"> <meta property="og:image:width" content="1200"> <meta property="og:image:height" content="1200"> <meta property="og:image"> <meta property="og:image:width" content="200"> <meta property="og:image:height" content="200"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:image">',1),Qt=x("<!> <!> <!> <!> <!>",1),ea=x('<div class="min-h-[calc(100vh-100px)]"><div class="relative lg:max-w-[100vw] xl:max-w-page"><div class="absolute top-0 z-50 w-full"><!></div> <!> <!></div> <div class="freq-container mt-[150px]"><!></div></div>');function fa(l,e){me(e,!1);const a=Re(),r=()=>Ue(je,"$page",a),t=D(),c=D(),s=D(),v=D(),d="#5E69FF",o="#FEFAF3",f=new Map([[1,{logo:d,nav:"navy"}],[2,{logo:o,nav:"cream"}],[3,{logo:d,nav:"cream"}],[4,{logo:d,nav:"navy"}],[5,{logo:o,nav:"cream"}]]),n=["Introduction","Control","Portability","Vote","Technology"];O(()=>{},()=>{q(t,1)}),O(()=>y(t),()=>{var _;q(c,(_=f.get(y(t)))==null?void 0:_.logo)}),O(()=>y(t),()=>{var _;q(s,(_=f.get(y(t)))==null?void 0:_.nav)}),O(()=>r(),()=>{q(v,r().url.protocol+"//"+r().url.host)}),he(),be();var g=ea();Ye(_=>{var C=Kt(),E=m(A(C),2);W(()=>V(E,"content",r().url.toString()));var k=m(E,6),F=m(k,6),L=m(F,6),B=m(L,8);W(()=>{V(k,"content",`${y(v)}/og-preview.png`),V(F,"content",`${y(v)}/og-square.png`),V(L,"content",`${y(v)}/og-thumb.png`),V(B,"content",`${y(v)}/og-twitter.png`)}),p(_,C)});var i=w(g),u=w(i),$=w(u);Oe($,{get logoHex(){return y(c)},get navColor(){return y(s)},get section(){return y(t)},set section(_){q(t,_)},$$legacy:!0}),h(u);var b=m(u,2);it(b,{get section(){return y(t)},set section(_){q(t,_)},sectionCount:5,children:(_,C)=>{var E=Qt(),k=A(E);bt(k);var F=m(k,2);Et(F);var L=m(F,2);Lt(L);var B=m(L,2);Vt(B);var Q=m(B,2);Xt(Q),p(_,E)},$$slots:{default:!0},$$legacy:!0});var P=m(b,2);st(P,{get section(){return y(t)},set section(_){q(t,_)},sectionTitles:n,$$legacy:!0}),h(i);var I=m(i,2),S=w(I);Ge(S),h(I),h(g),p(l,g),xe()}export{fa as component};
