import{a as T,n as ne,t as M}from"../chunks/disclose-version.fIwzQPrk.js";import{ao as _e,aJ as ge,aK as we,e as Ce,u as ke,z as te,aL as Fe,q as Ne,Y as A,aM as Ee,a5 as ae,a6 as ce,a8 as Te,aN as qe,d as de,h as Be,k as Se,p as fe,l as Le,a as Me,t as ve,V as u,b as pe,aG as N,c,r as l,s as h,a0 as I,$ as k,aE as Oe}from"../chunks/runtime.FR-W_Iy9.js";import{s as ue}from"../chunks/slot.DKA1932W.js";import"../chunks/index.ckEJWd_k.js";import{F as $e}from"../chunks/Footer.D51HG7ZF.js";import{e as R}from"../chunks/utils.D0c5ztsS.js";import{c as ze,i as ye,p as Ae,s as Pe}from"../chunks/props.tl2XAzn2.js";import{b as Ie,s as De,r as D}from"../chunks/attributes.CS2Ir1e3.js";import{p as me,s as W,b as Ge}from"../chunks/event-modifiers.BMxr6GBZ.js";import{i as Re}from"../chunks/lifecycle.C897wgdW.js";import{o as Ue}from"../chunks/index-client.D_0H4vRM.js";import{O as Ve}from"../chunks/OpenCloseIcon.2MHKMCYR.js";const Je=requestAnimationFrame,je=()=>performance.now(),E={tick:e=>Je(e),now:()=>je(),tasks:new Set};function xe(e){E.tasks.forEach(i=>{i.c(e)||(E.tasks.delete(i),i.f())}),E.tasks.size!==0&&E.tick(xe)}function Ke(e){let i;return E.tasks.size===0&&E.tick(xe),{promise:new Promise(r=>{E.tasks.add(i={c:e,f:r})}),abort(){E.tasks.delete(i)}}}function G(e,i){e.dispatchEvent(new CustomEvent(i))}function We(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const i=e.split("-");return i.length===1?i[0]:i[0]+i.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function le(e){const i={},r=e.split(";");for(const t of r){const[a,s]=t.split(":");if(!a||s===void 0)break;const n=We(a.trim());i[n]=s.trim()}return i}const Ye=e=>e;function Ze(e,i,r,t){var a=(e&Ee)!==0,s="both",n,b=i.inert,f,p;function v(){var o=Te,x=te;ae(null),ce(null);try{return n??(n=r()(i,(t==null?void 0:t())??{},{direction:s}))}finally{ae(o),ce(x)}}var _={is_global:a,in(){i.inert=b,G(i,"introstart"),f=Z(i,v(),p,1,()=>{G(i,"introend"),f==null||f.abort(),f=n=void 0})},out(o){i.inert=!0,G(i,"outrostart"),p=Z(i,v(),f,0,()=>{G(i,"outroend"),o==null||o()})},stop:()=>{f==null||f.abort(),p==null||p.abort()}},y=te;if((y.transitions??(y.transitions=[])).push(_),ze){var m=a;if(!m){for(var d=y.parent;d&&d.f&_e;)for(;(d=d.parent)&&!(d.f&ge););m=!d||(d.f&we)!==0}m&&Ce(()=>{ke(()=>_.in())})}}function Z(e,i,r,t,a){var s=t===1;if(Fe(i)){var n,b=!1;return Ne(()=>{if(!b){var x=i({direction:s?"in":"out"});n=Z(e,x,r,t,a)}}),{abort:()=>{b=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(r==null||r.deactivate(),!(i!=null&&i.duration))return a(),{abort:A,deactivate:A,reset:A,t:()=>t};const{delay:f=0,css:p,tick:v,easing:_=Ye}=i;var y=[];if(s&&r===void 0&&(v&&v(0,1),p)){var m=le(p(0,1));y.push(m,m)}var d=()=>1-t,o=e.animate(y,{duration:f});return o.onfinish=()=>{var x=(r==null?void 0:r.t())??1-t;r==null||r.abort();var F=t-x,g=i.duration*Math.abs(F),O=[];if(g>0){if(p)for(var P=Math.ceil(g/16.666666666666668),S=0;S<=P;S+=1){var $=x+F*_(S/P),U=p($,1-$);O.push(le(U))}d=()=>{var q=o.currentTime;return x+F*_(q/g)},v&&Ke(()=>{if(o.playState!=="running")return!1;var q=d();return v(q,1-q),!0})}o=e.animate(O,{duration:g,fill:"forwards"}),o.onfinish=()=>{d=()=>t,v==null||v(t,1-t),a()}},{abort:()=>{o&&(o.cancel(),o.effect=null,o.onfinish=A)},deactivate:()=>{a=A},reset:()=>{t===0&&(v==null||v(1,0))},t:()=>d()}}function he(e,i,r,t=r){e.addEventListener(i,r);const a=e.__on_r;a?e.__on_r=()=>{a(),t()}:e.__on_r=t,Ie()}function Y(e,i,r=i){var t=qe();he(e,"input",()=>{var a=se(e)?oe(e.value):e.value;r(a),t&&a!==(a=i())&&(e.value=a??"")}),de(()=>{var a=i();if(Be&&e.defaultValue!==e.value){r(e.value);return}se(e)&&a===oe(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function He(e,i,r=i){he(e,"change",()=>{var t=e.checked;r(t)}),i()==null&&r(!1),de(()=>{var t=i();e.checked=!!t})}function se(e){var i=e.type;return i==="number"||i==="range"}function oe(e){return e===""?null:+e}function Xe(e,i){var s;var r=(s=e.$$events)==null?void 0:s[i.type],t=Se(r)?r.slice():r==null?[]:[r];for(var a of t)a.call(this,i)}const Qe=e=>e;function ei(e,{delay:i=0,duration:r=400,easing:t=Qe}={}){const a=+getComputedStyle(e).opacity;return{delay:i,duration:r,easing:t,css:s=>`opacity: ${s*a}`}}const ii="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-28.5%20256%20256'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M216.856339,16.5966031%20C200.285002,8.84328665%20182.566144,3.2084988%20164.041564,0%20C161.766523,4.11318106%20159.108624,9.64549908%20157.276099,14.0464379%20C137.583995,11.0849896%20118.072967,11.0849896%2098.7430163,14.0464379%20C96.9108417,9.64549908%2094.1925838,4.11318106%2091.8971895,0%20C73.3526068,3.2084988%2055.6133949,8.86399117%2039.0420583,16.6376612%20C5.61752293,67.146514%20-3.4433191,116.400813%201.08711069,164.955721%20C23.2560196,181.510915%2044.7403634,191.567697%2065.8621325,198.148576%20C71.0772151,190.971126%2075.7283628,183.341335%2079.7352139,175.300261%20C72.104019,172.400575%2064.7949724,168.822202%2057.8887866,164.667963%20C59.7209612,163.310589%2061.5131304,161.891452%2063.2445898,160.431257%20C105.36741,180.133187%20151.134928,180.133187%20192.754523,160.431257%20C194.506336,161.891452%20196.298154,163.310589%20198.110326,164.667963%20C191.183787,168.842556%20183.854737,172.420929%20176.223542,175.320965%20C180.230393,183.341335%20184.861538,190.991831%20190.096624,198.16893%20C211.238746,191.588051%20232.743023,181.531619%20254.911949,164.955721%20C260.227747,108.668201%20245.831087,59.8662432%20216.856339,16.5966031%20Z%20M85.4738752,135.09489%20C72.8290281,135.09489%2062.4592217,123.290155%2062.4592217,108.914901%20C62.4592217,94.5396472%2072.607595,82.7145587%2085.4738752,82.7145587%20C98.3405064,82.7145587%20108.709962,94.5189427%20108.488529,108.914901%20C108.508531,123.290155%2098.3405064,135.09489%2085.4738752,135.09489%20Z%20M170.525237,135.09489%20C157.88039,135.09489%20147.510584,123.290155%20147.510584,108.914901%20C147.510584,94.5396472%20157.658606,82.7145587%20170.525237,82.7145587%20C183.391518,82.7145587%20193.761324,94.5189427%20193.539891,108.914901%20C193.539891,123.290155%20183.391518,135.09489%20170.525237,135.09489%20Z'%20fill='%23FFF'%20fill-rule='nonzero'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";var ri=ne('<svg fill="none" viewBox="0 0 374 201" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" opacity=".7"><circle cx="2.6087" cy="168.99" r=".62162" fill-opacity=".6"></circle><circle cx="134.1" cy="100.39" r=".69048" fill-opacity=".6"></circle><circle cx="13.404" cy="50.739" r=".76211" fill-opacity=".5"></circle><circle cx="70.168" cy="43.57" r=".69691" fill-opacity=".5"></circle><circle cx="263.17" cy="102.19" r=".71145" fill-opacity=".6"></circle><circle cx="123.44" cy="115.2" r=".6939" fill-opacity=".3"></circle><circle cx="373.83" cy="63.672" r=".67164" fill-opacity=".5"></circle><circle cx="2.1229" cy="28.803" r=".72923" fill-opacity=".4"></circle><circle cx="228.81" cy="96.25" r=".68988" fill-opacity=".5"></circle><circle cx="133.58" cy="152.56" r=".76521" fill-opacity=".4"></circle><circle cx="206.94" cy="78.518" r=".71817" fill-opacity=".6"></circle><circle cx="355.04" cy="117.11" r=".83158" fill-opacity=".4"></circle><circle cx="30.614" cy="183.38" r=".80469" fill-opacity=".5"></circle><circle cx="36.466" cy="8.683" r=".73598" fill-opacity=".4"></circle><circle cx="359.75" cy="191.67" r=".80659" fill-opacity=".4"></circle><circle cx="78.563" cy="88.076" r=".8044" fill-opacity=".4"></circle><circle cx="354.29" cy="26.97" r=".67146" fill-opacity=".6"></circle><circle cx="17.054" cy="40.182" r=".85995" fill-opacity=".6"></circle><circle cx="243.77" cy="57.932" r=".85128" fill-opacity=".6"></circle><circle cx="349.08" cy="38.33" r=".78445" fill-opacity=".3"></circle><circle cx="286.22" cy="75.519" r=".67836" fill-opacity=".4"></circle><circle cx="245.37" cy="84.988" r=".67648" fill-opacity=".6"></circle><circle cx="161.28" cy="16.291" r=".64847" fill-opacity=".4"></circle><circle cx="326.6" cy="63.213" r=".80469" fill-opacity=".5"></circle><circle cx="120.59" cy="124.18" r=".8032" fill-opacity=".5"></circle><circle cx="156.78" cy="57.372" r=".88313" fill-opacity=".5"></circle><circle cx="172.61" cy="100.43" r=".72705" fill-opacity=".6"></circle><circle cx="103.97" cy="57.244" r=".75484" fill-opacity=".5"></circle><circle cx="27.463" cy="101.5" r=".614" fill-opacity=".4"></circle><circle cx="181.56" cy="31.24" r=".79804" fill-opacity=".6"></circle><circle cx="39.986" cy=".95682" r=".70557" fill-opacity=".3"></circle><circle cx="97.551" cy="59.706" r=".8483" fill-opacity=".5"></circle><circle cx="289.73" cy="57.719" r=".63786" fill-opacity=".5"></circle><circle cx="180.3" cy="64.904" r=".71958" fill-opacity=".5"></circle><circle cx="-.77738" cy="166.2" r=".78884" fill-opacity=".4"></circle><circle cx="267.43" cy="137.83" r=".83023" fill-opacity=".4"></circle><circle cx="337.08" cy="1.476" r=".63263" fill-opacity=".5"></circle><circle cx="58.997" cy="75.022" r=".77398" fill-opacity=".3"></circle><circle cx="78.374" cy="9.1536" r=".61472" fill-opacity=".3"></circle><circle cx="121.2" cy="76.252" r=".82045" fill-opacity=".5"></circle><circle cx="125.12" cy="5.5812" r=".59395" fill-opacity=".6"></circle><circle cx="53.076" cy="109.95" r=".77151" fill-opacity=".3"></circle><circle cx="246.02" cy="161.41" r=".73464" fill-opacity=".5"></circle><circle cx="126.99" cy="101.58" r=".69211" fill-opacity=".5"></circle></g></svg>');function ti(e){var i=ri();T(e,i)}var ai=ne('<svg viewBox="0 0 453 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-438.504 61.3538C-438.347 61.3538 -1.62156 61.3538 -1.33253 61.3538C1.34099 61.3651 4.95384 61.2976 9.19293 60.9376C10.8669 60.7913 13.9498 60.5325 17.7554 59.88C22.8254 59.0136 26.9321 57.8436 30.9183 56.7072C38.8064 54.457 46.9715 52.1281 62.6392 52.1281C78.307 52.1281 86.4721 54.457 94.3602 56.7072C98.3344 57.8436 102.453 59.0136 107.523 59.88C110.269 60.3525 113.075 60.69 116.086 60.9376C119.506 61.2076 123.275 61.3538 127.285 61.3538C132.271 61.3538 136.932 60.915 141.171 60.0375C144.916 59.2612 148.384 58.1586 151.781 56.6622C158.055 53.8945 163.149 50.1367 168.087 46.5139C177.865 39.3246 187.969 31.8764 207.383 31.8764C226.796 31.8764 236.9 39.3133 246.679 46.5139C251.604 50.1367 256.698 53.8945 262.985 56.6622C266.381 58.1586 269.861 59.2724 273.594 60.0375C277.677 60.8813 282.181 61.3201 286.962 61.3538C287.022 61.3538 287.094 61.3538 287.155 61.3538C287.263 61.3538 287.371 61.3538 287.468 61.3538C293.272 61.2976 298.716 60.42 303.665 58.7211C308.17 57.1797 312.348 54.9746 316.431 51.9706C323.982 46.4239 330.124 38.9195 336.049 31.6627C347.815 17.2728 359.978 2.38782 383.341 2.38782C406.704 2.38782 418.868 17.2728 430.634 31.6627C436.571 38.9195 442.7 46.4239 450.251 51.9706C454.346 54.9746 458.525 57.1797 463.017 58.7211C469.111 60.8138 474.181 61.1401 477.721 61.3201C494.425 62.1639 612.149 62.0691 618.496 61.8441" stroke="#55B1AB" stroke-opacity="0.5" stroke-width="4" stroke-miterlimit="10"></path></svg>');function ci(e){var i=ai();T(e,i)}var li=M('<form novalidate><div class="mb-4"><label class="mb-2 block text-xs font-semibold" for="firstName">First Name <span class="text-red">*</span></label> <input required type="text" id="firstName" placeholder="John"></div> <div class="mb-4"><label class="mb-2 block text-xs font-semibold" for="lastName">Last Name <span class="text-red">*</span></label> <input required type="text" id="lastName" placeholder="Doe"></div> <div class="mb-4"><label class="mb-2 block text-xs font-semibold" for="email">Email <span class="text-red">*</span></label> <input required type="email" id="email" placeholder="Enter your email"></div> <div class="mb-4"><label class="inline-flex items-center hover:cursor-pointer"><input type="checkbox" class="form-checkbox text-white accent-tealBright hover:cursor-pointer"> <span class="ml-2 text-xs font-semibold">Are you a developer interested in building something on Frequency?</span></label></div> <div class="m-5"><button type="submit" class="radius w-full rounded-full bg-teal py-4 font-medium text-white shadow-lg transition duration-300 ease-in-out hover:shadow-none">Get Notified</button></div></form>'),si=M('<div class="px-8 py-12"><h2 class="title-75 text-center">Thank You!</h2></div>'),oi=M(`<div class="flex flex-col items-start rounded-3xl bg-cream"><div class="relative overflow-hidden rounded-t-3xl bg-navy"><div class="top-lines rounded-t-3xl svelte-db5uhr"><div class="top-lines-fade rounded-t-3xl svelte-db5uhr"><div id="notified-stars" class="absolute w-[80%] overflow-hidden"><div class="svg-100 w-[600px]"><!></div></div> <div id="notified-wave" class="absolute bottom-0 w-[100%]"><div class="svg-100 w-[100%]"><!></div></div> <div class="top-gradient relative z-10 rounded-t-3xl px-4 pb-[50px] pt-[70px] text-white svelte-db5uhr"><h2 class="title-50 mx-2 mb-4 text-center leading-[1.1]">Interested in Frequency's ecosystem?</h2> <p class="title-16 z-50 text-center">Get notified when more developer tools are available.</p></div></div></div></div> <div class="px-8 py-4"><!> <a class="m-2 flex p-4" href="https://discord.com/invite/JchmHX5afV"><div class="h-[70px] w-[70px] flex-shrink-0 rounded-lg bg-black p-2 hover:bg-teal"><img class="w-[70px]" alt=""></div> <div class="px-4"><h3 class="mb-1 font-semibold leading-none">Join our Discord</h3> <p class="text-sm">Become a part of shaping the future of the digital landscape with Frequency.</p></div></a></div></div>`);function ni(e,i){fe(i,!1);const r=N(),t={firstName:"entry.447550433",lastName:"entry.239030615",email:"entry.626493750",developerInterest:"entry.334295884"},a="https://7otsoqfsv4cgqxe6xvc2vyjo6e0sozeg.lambda-url.sa-east-1.on.aws";let s=N(""),n=N(""),b=N(""),f=N(!1),p=N(!1),v=N(!1),_="border-gray focus:border-tealBright focus:ring-tealBright focus:ring-1 focus:outline-none block w-full rounded-md border px-2 py-3",y="invalid:border-red  "+_;async function m(z){const w=z.target;if(k(v,!0),!w.checkValidity()){w.reportValidity();return}const C=new URLSearchParams;C.append(t.firstName,u(s)),C.append(t.lastName,u(n)),C.append(t.email,u(b)),u(f)&&C.append(t.developerInterest,"Developer");try{if((await fetch(a,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:C.toString()})).ok)k(p,!0);else throw new Error("Unknown form submission error")}catch(L){console.error("Error:",L),alert("Form submission failed due to network error.")}}Le(()=>u(v),()=>{k(r,u(v)?y:_)}),Me();var d=oi(),o=c(d),x=c(o),F=c(x),g=c(F),O=c(g),P=c(O);ti(P),l(O),l(g);var S=h(g,2),$=c(S),U=c($);ci(U),l($),l(S),I(2),l(F),l(x),l(o);var q=h(o,2),H=c(q);ye(H,()=>!u(p),z=>{var w=li(),C=c(w),L=h(c(C),2);D(L),l(C);var V=h(C,2),J=h(c(V),2);D(J),l(V);var j=h(V,2),K=h(c(j),2);D(K),l(j);var ee=h(j,2),ie=c(ee),re=c(ie);D(re),I(2),l(ie),l(ee),I(2),l(w),ve(()=>{W(L,`${u(r)??""} svelte-db5uhr`),W(J,`${u(r)??""} svelte-db5uhr`),W(K,`${u(r)??""} svelte-db5uhr`)}),Y(L,()=>u(s),B=>k(s,B)),Y(J,()=>u(n),B=>k(n,B)),Y(K,()=>u(b),B=>k(b,B)),He(re,()=>u(f),B=>k(f,B)),R("submit",w,me(m)),T(z,w)},z=>{var w=si();T(z,w)});var X=h(H,2),Q=c(X),be=c(Q);De(be,"src",ii),l(Q),I(2),l(X),l(q),l(d),T(e,d),pe()}var di=M('<div role="none" class="mobile-bar-padding fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 svelte-xv927h"><div role="none" class="relative max-h-full max-w-[600px] overflow-y-auto"><!> <div class="absolute right-2 top-0 z-50 px-3 pb-2 pt-4"><!></div></div></div>'),fi=M('<div class="fixed right-0 top-1/4 z-50 flex transform print:hidden"><button class="origin-top-left -translate-y-1/2 translate-x-full rotate-90 cursor-pointer rounded-b-lg bg-teal px-4 py-2 text-white shadow-md shadow-navy transition-shadow duration-300 hover:shadow"> </button></div> <!>',1);function vi(e,i){fe(i,!1);let r=Ae(i,"triggerText",8,"Open Popup"),t=N(!1);function a(){k(t,!u(t))}function s(){k(t,!1)}function n(y){(y==null?void 0:y.key)==="Escape"&&u(t)&&s()}Ue(()=>(window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)})),Re();var b=fi(),f=Oe(b),p=c(f),v=c(p,!0);l(p),l(f);var _=h(f,2);ye(_,()=>u(t),y=>{var m=di(),d=c(m),o=c(d);ue(o,i,"default",{},null);var x=h(o,2),F=c(x);Ve(F,{onClick:s,isOpen:!0}),l(x),l(d),l(m),R("click",d,Ge(function(g){Xe.call(this,i,g)})),R("click",m,me(s)),Ze(3,m,()=>ei,()=>({duration:200})),T(y,m)}),ve(()=>Pe(v,r())),R("click",p,a),T(e,b),pe()}var pi=M('<div class="h-[100vh] w-[100vw] overflow-x-hidden"><!> <!> <!></div>');function Ni(e,i){var r=pi(),t=c(r);ue(t,i,"default",{},null);var a=h(t,2);$e(a,{});var s=h(a,2);vi(s,{triggerText:"Get notified",children:(n,b)=>{ni(n,{})},$$slots:{default:!0}}),l(r),T(e,r)}export{Ni as component};
