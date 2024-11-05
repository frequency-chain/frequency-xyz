import{b as o,t as v,d as I}from"../chunks/disclose-version.CxGibZjM.js";import{aq as J,x as ie,ax as ne,ar as re,q as le,av as S,F as d,G as c,K as x,ay as g,A as h,at as A,N as f,O as $,p as de,L as ce,M as ve,t as ue}from"../chunks/runtime.Cq8ZWjRo.js";import{s as V}from"../chunks/slot.CAqwqClh.js";import{a as fe,s as se,r as B}from"../chunks/attributes.CaJKyTIa.js";import{s as C,p as pe}from"../chunks/event-modifiers.C-c3KxO6.js";import{p as E,i as he}from"../chunks/props.BaFu3BKe.js";import{f as Y}from"../chunks/utils.mP0San6l.js";function me(t,r,a){J(()=>{var e=ie(()=>r(t,a==null?void 0:a())||{});if(e!=null&&e.destroy)return()=>e.destroy()})}function ae(t,r,a,e=a){t.addEventListener(r,a);const s=t.__on_r;s?t.__on_r=()=>{s(),e()}:t.__on_r=e,fe()}function W(t,r,a=r){var e=ne();ae(t,"input",()=>{var s=ee(t)?te(t.value):t.value;a(s),e&&s!==(s=r())&&(t.value=s??"")}),re(()=>{var s=r();if(le&&t.defaultValue!==t.value){a(t.value);return}ee(t)&&s===te(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function $e(t,r,a=r){ae(t,"change",()=>{var e=t.checked;a(e)}),r()==null&&a(!1),re(()=>{var e=r();t.checked=!!e})}function ee(t){var r=t.type;return r==="number"||r==="range"}function te(t){return t===""?null:+t}var _e=v("<div><!></div>");function k(t,r){let a=E(r,"id",8,""),e=E(r,"classes",8,"");var s=_e(),i=d(s);V(i,r,"default",{}),c(s),S(()=>{se(s,"id",a()),C(s,`w-full ${e()}`)}),o(t,s)}let O;function be(){O||(O=new IntersectionObserver(t=>{t.forEach(r=>{const a=r.isIntersecting?"enterViewport":"exitViewport";r.target.dispatchEvent(new CustomEvent(a))})}))}function xe(t){return be(),O.observe(t),{destroy(){O.unobserve(t)}}}var ge=v("<div><!></div>");function P(t,r){let a=g("");var e=ge(),s=d(e);V(s,r,"default",{}),c(e),S(()=>C(e,h(a))),me(e,i=>xe(i)),J(()=>Y("enterViewport",e,()=>x(a,"slide-from-right"))),J(()=>Y("exitViewport",e,()=>x(a,""))),o(t,e)}var ye=v("<section><!></section>");function Z(t,r){let a=E(r,"classes",8,"");var e=ye(),s=d(e);V(s,r,"default",{}),c(e),S(()=>C(e,`${a()}`)),o(t,e)}var we=v('<h2 class="title-100 text-navy">Bringing Humanity Internet of People</h2>'),Ce=v("<div><!></div>"),Pe=v('<div class="freq-container"><!></div>');function ke(t){k(t,{id:"about",classes:"",children:(r,a)=>{var e=Pe(),s=d(e);Z(s,{classes:"",children:(i,l)=>{var u=Ce(),n=d(u);P(n,{children:(p,m)=>{var q=we();o(p,q)},$$slots:{default:!0}}),c(u),o(i,u)},$$slots:{default:!0}}),c(e),o(r,e)},$$slots:{default:!0}})}var qe=v('<h2 class="title-75">Frequency’s Mission</h2>'),Ne=v(`<p>Frequency’s Mission is to provide critical infrastructure to help people take back control over their digital
        lives by:</p>`),Fe=v('<section class="freq-container"><!> <!></section> <div class="bg-navy"><div class="freq-container"><h2>Your Network</h2></div></div>',1);function De(t){k(t,{id:"mission",classes:"",children:(r,a)=>{var e=Fe(),s=A(e),i=d(s);P(i,{children:(u,n)=>{var p=qe();o(u,p)},$$slots:{default:!0}});var l=f(i,2);P(l,{children:(u,n)=>{var p=Ne();o(u,p)},$$slots:{default:!0}}),c(s),$(2),o(r,e)},$$slots:{default:!0}})}var Ie=v("<p><!></p>");function M(t,r){let a=E(r,"classes",8,"");var e=Ie(),s=d(e);V(s,r,"default",{}),c(e),S(()=>C(e,`body sm:max-w-[600px] md:max-w-[700px] lg:max-w-[450px] ${a()}`)),o(t,e)}var Se=v('<h2 class="title-100">What is Frequency?</h2>'),Me=v("<div><!></div> <!>",1),Be=v('<div class="freq-container"><!></div> <div>[Image]</div>',1);function Ae(t){k(t,{id:"about",children:(r,a)=>{var e=Be(),s=A(e),i=d(s);Z(i,{classes:"",children:(l,u)=>{var n=Me(),p=A(n),m=d(p);P(m,{children:(F,L)=>{var y=Se();o(F,y)},$$slots:{default:!0}}),c(p);var q=f(p,2);M(q,{classes:"",children:(F,L)=>{$();var y=I(`Frequency is a blockchain designed to support decentralized social networks to give people control over their
        online presence. With Frequency, users can freely choose and connect on social apps while retaining ownership of
        their data. Built on the Decentralized Social Networking Protocol (DSNP), Frequency offers scalable tools for
        message discovery, flexible storage for social and identity data, and a unique cost-sharing model that allows
        apps to deliver smooth, secure experiences that put users in charge."`);o(F,y)},$$slots:{default:!0}}),o(l,n)},$$slots:{default:!0}}),c(s),$(2),o(r,e)},$$slots:{default:!0}})}var Ee=v('<h2 class="title-75">User Advantages</h2>'),Oe=v('<section class="freq-container"><div><!></div> <div><!></div></section>');function Ve(t){k(t,{id:"users",classes:"text-white bg-navy",children:(r,a)=>{var e=Oe(),s=d(e),i=d(s);P(i,{children:(n,p)=>{var m=Ee();o(n,m)},$$slots:{default:!0}}),c(s);var l=f(s,2),u=d(l);M(u,{classes:"",children:(n,p)=>{$();var m=I(`On most social media platforms, you get a stark choice: accept the platform as is, or leave the platform, your
        friends and your relationships behind.  Frequency changes all of this by offering users, control, community, and
        ownership over their online experience.`);o(n,m)},$$slots:{default:!0}}),c(l),c(e),o(r,e)},$$slots:{default:!0}})}var Le=v('<h2 class="title-75">Developer Advantages:</h2>'),Ue=v('<section><!> <!> <a href="/docs">Developer Portal</a></section>');function Te(t){k(t,{id:"developers",classes:"freq-container",children:(r,a)=>{var e=Ue(),s=d(e);P(s,{children:(l,u)=>{var n=Le();o(l,n)},$$slots:{default:!0}});var i=f(s,2);M(i,{classes:"",children:(l,u)=>{$();var n=I("Getting started building on Frequency is simple and easy.");o(l,n)},$$slots:{default:!0}}),$(2),c(e),o(r,e)},$$slots:{default:!0}})}var ze=v('<h2 class="title-75">Our Partners</h2>'),Ge=v("<section><!> <!></section>");function We(t){k(t,{id:"partners",classes:"freq-container",children:(r,a)=>{var e=Ge(),s=d(e);P(s,{children:(l,u)=>{var n=ze();o(l,n)},$$slots:{default:!0}});var i=f(s,2);M(i,{classes:"",children:(l,u)=>{$();var n=I("A, B, C");o(l,n)},$$slots:{default:!0}}),c(e),o(r,e)},$$slots:{default:!0}})}const Je="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%20-28.5%20256%20256'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M216.856339,16.5966031%20C200.285002,8.84328665%20182.566144,3.2084988%20164.041564,0%20C161.766523,4.11318106%20159.108624,9.64549908%20157.276099,14.0464379%20C137.583995,11.0849896%20118.072967,11.0849896%2098.7430163,14.0464379%20C96.9108417,9.64549908%2094.1925838,4.11318106%2091.8971895,0%20C73.3526068,3.2084988%2055.6133949,8.86399117%2039.0420583,16.6376612%20C5.61752293,67.146514%20-3.4433191,116.400813%201.08711069,164.955721%20C23.2560196,181.510915%2044.7403634,191.567697%2065.8621325,198.148576%20C71.0772151,190.971126%2075.7283628,183.341335%2079.7352139,175.300261%20C72.104019,172.400575%2064.7949724,168.822202%2057.8887866,164.667963%20C59.7209612,163.310589%2061.5131304,161.891452%2063.2445898,160.431257%20C105.36741,180.133187%20151.134928,180.133187%20192.754523,160.431257%20C194.506336,161.891452%20196.298154,163.310589%20198.110326,164.667963%20C191.183787,168.842556%20183.854737,172.420929%20176.223542,175.320965%20C180.230393,183.341335%20184.861538,190.991831%20190.096624,198.16893%20C211.238746,191.588051%20232.743023,181.531619%20254.911949,164.955721%20C260.227747,108.668201%20245.831087,59.8662432%20216.856339,16.5966031%20Z%20M85.4738752,135.09489%20C72.8290281,135.09489%2062.4592217,123.290155%2062.4592217,108.914901%20C62.4592217,94.5396472%2072.607595,82.7145587%2085.4738752,82.7145587%20C98.3405064,82.7145587%20108.709962,94.5189427%20108.488529,108.914901%20C108.508531,123.290155%2098.3405064,135.09489%2085.4738752,135.09489%20Z%20M170.525237,135.09489%20C157.88039,135.09489%20147.510584,123.290155%20147.510584,108.914901%20C147.510584,94.5396472%20157.658606,82.7145587%20170.525237,82.7145587%20C183.391518,82.7145587%20193.761324,94.5189427%20193.539891,108.914901%20C193.539891,123.290155%20183.391518,135.09489%20170.525237,135.09489%20Z'%20fill='%23FFF'%20fill-rule='nonzero'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";var Ye=v('<form novalidate><div class="mb-4"><label class="mb-2 block text-xs font-semibold" for="firstName">First Name <span class="text-red">*</span></label> <input required type="text" id="firstName" placeholder="John"></div> <div class="mb-4"><label class="mb-2 block text-xs font-semibold" for="lastName">Last Name <span class="text-red">*</span></label> <input required type="text" id="lastName" placeholder="Doe"></div> <div class="mb-4"><label class="mb-2 block text-xs font-semibold" for="email">Email <span class="text-red">*</span></label> <input required type="email" id="email" placeholder="Enter your email"></div> <div class="mb-4"><label class="inline-flex items-center hover:cursor-pointer"><input type="checkbox" class="form-checkbox text-white accent-tealBright hover:cursor-pointer"> <span class="ml-2 text-xs font-semibold">Are you a developer interested in building something on Frequency?</span></label></div> <div class="m-5"><button type="submit" class="radius w-full rounded-full bg-teal py-4 font-medium text-white shadow-lg transition duration-300 ease-in-out hover:shadow-none">Get Notified</button></div></form>'),Ze=v('<div class="px-8 py-12"><h2 class="title-75 text-center">Thank You!</h2></div>'),He=v('<div class="px-8 py-4"><!> <a class="m-2 flex p-4" href="https://discord.com/invite/JchmHX5afV"><div class="h-[70px] w-[70px] flex-shrink-0 rounded-lg bg-black p-2 hover:bg-teal"><img class="w-[70px]" alt=""></div> <div class="px-4"><h3 class="mb-1 font-semibold leading-none">Join our Discord</h3> <p class="text-sm">Become a part of shaping the future of the digital landscape with Frequency.</p></div></a></div>');function Re(t,r){de(r,!1);const a=g(),e={firstName:"entry.447550433",lastName:"entry.239030615",email:"entry.626493750",developerInterest:"entry.334295884"},s="https://7otsoqfsv4cgqxe6xvc2vyjo6e0sozeg.lambda-url.sa-east-1.on.aws";let i=g(""),l=g(""),u=g(""),n=g(!1),p=g(!1),m=g(!1),q="border-gray focus:border-tealBright focus:ring-tealBright focus:ring-1 focus:outline-none block w-full rounded-md border px-2 py-3",F="invalid:border-red  "+q;async function L(D){const _=D.target;if(x(m,!0),!_.checkValidity()){_.reportValidity();return}const b=new URLSearchParams;b.append(e.firstName,h(i)),b.append(e.lastName,h(l)),b.append(e.email,h(u)),h(n)&&b.append(e.developerInterest,"Developer");try{if((await fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b.toString()})).ok)x(p,!0);else throw new Error("Unknown form submission error")}catch(N){console.error("Error:",N),alert("Form submission failed due to network error.")}}ce(()=>h(m),()=>{x(a,h(m)?F:q)}),ve();var y=He(),H=d(y);he(H,()=>!h(p),D=>{var _=Ye(),b=d(_),N=f(d(b),2);B(N),c(b);var U=f(b,2),T=f(d(U),2);B(T),c(U);var z=f(U,2),G=f(d(z),2);B(G),c(z);var K=f(z,2),X=d(K),Q=d(X);B(Q),$(2),c(X),c(K),$(2),c(_),S(()=>{C(N,`${h(a)??""} svelte-db5uhr`),C(T,`${h(a)??""} svelte-db5uhr`),C(G,`${h(a)??""} svelte-db5uhr`)}),W(N,()=>h(i),w=>x(i,w)),W(T,()=>h(l),w=>x(l,w)),W(G,()=>h(u),w=>x(u,w)),$e(Q,()=>h(n),w=>x(n,w)),Y("submit",_,pe(L)),o(D,_)},D=>{var _=Ze();o(D,_)});var R=f(H,2),j=d(R),oe=d(j);se(oe,"src",Je),c(j),$(2),c(R),c(y),o(t,y),ue()}var je=v("<!> <!>",1);function Ke(t){k(t,{id:"about",classes:"text-white bg-navy",children:(r,a)=>{Z(r,{classes:"freq-container",children:(e,s)=>{var i=je(),l=A(i);M(l,{classes:"",children:(n,p)=>{$();var m=I("Image");o(n,m)},$$slots:{default:!0}});var u=f(l,2);Re(u,{}),o(e,i)},$$slots:{default:!0}})},$$slots:{default:!0}})}var Xe=v('<div class="flex w-full flex-col items-center"><!> <!> <!> <!> <!> <!> <!></div>');function it(t){var r=Xe(),a=d(r);ke(a);var e=f(a,2);De(e);var s=f(e,2);Ae(s);var i=f(s,2);Ve(i);var l=f(i,2);Te(l);var u=f(l,2);We(u);var n=f(u,2);Ke(n),c(r),o(t,r)}export{it as component};
