import{a as $,t as S,n as be,c as Ae,d as Ve}from"../chunks/disclose-version.RCTTjgyM.js";import"../chunks/legacy.D5XGKOQg.js";import{U as De,a5 as Je,h as O,M as de,p as Ke,Y as Qe,S as Ee,a9 as er,aa as ke,K as ue,N as Q,aC as se,a6 as Se,V as Re,a7 as rr,W as _e,aD as tr,aE as or,R as nr,aF as sr,az as ar,G as lr,O as ir,ap as cr,m as dr,a0 as $e,aG as ur,aH as pr,aI as fr,I as gr,z as Z,ay as A,C as F,c as M,r as _,j as y,am as le,D as V,E as he,aB as fe,A as br,B as hr,av as vr,aA as mr,aw as ae,o as Le}from"../chunks/runtime.Jj8XJZyx.js";import{s as Pe}from"../chunks/slot.CFuE2d7R.js";import{B as Te}from"../chunks/index.C-dTocWs.js";import{s as T,a as ve}from"../chunks/event-modifiers.tEPb4zW4.js";import{i as W}from"../chunks/lifecycle.C0fdknDz.js";import{l as E,p as H,i as Ge}from"../chunks/props.BU3dlumd.js";import{s as te,o as xr}from"../chunks/index-client.CUuZcB22.js";import{s as R,r as yr}from"../chunks/attributes.BgDSMU-1.js";import{b as wr}from"../chunks/input.DQC0yadC.js";function Ne(e,r){return r}function Cr(e,r,t,o){for(var a=[],n=r.length,l=0;l<n;l++)or(r[l].e,a,!0);var s=n>0&&a.length===0&&t!==null;if(s){var c=t.parentNode;nr(c),c.append(t),o.clear(),B(e,r[0].prev,r[n-1].next)}sr(a,()=>{for(var u=0;u<n;u++){var i=r[u];s||(o.delete(i.k),B(e,i.prev,i.next)),ar(i.e,!s)}})}function Be(e,r,t,o,a,n=null){var l=e,s={flags:r,items:new Map,first:null};{var c=e;l=O?de(lr(c)):c.appendChild(De())}O&&Ke();var u=null,i=!1;Je(()=>{var p=t(),d=Qe(p)?p:p==null?[]:Ee(p),f=d.length;if(i&&f===0)return;i=f===0;let x=!1;if(O){var h=l.data===er;h!==(f===0)&&(l=ke(),de(l),ue(!1),x=!0)}if(O){for(var v=null,g,m=0;m<f;m++){if(Q.nodeType===8&&Q.data===ir){l=Q,x=!0,ue(!1);break}var I=d[m],z=o(I,m);g=je(Q,s,v,null,I,z,m,a,r),s.items.set(z,g),v=g}f>0&&de(ke())}if(!O){var k=cr;kr(d,s,l,a,r,(k.f&se)!==0,o)}n!==null&&(f===0?u?Se(u):u=Re(()=>n(l)):u!==null&&rr(u,()=>{u=null})),x&&ue(!0),t()}),O&&(l=Q)}function kr(e,r,t,o,a,n,l){var s=e.length,c=r.items,u=r.first,i=u,p,d=null,f=[],x=[],h,v,g,m;for(m=0;m<s;m+=1){if(h=e[m],v=l(h,m),g=c.get(v),g===void 0){var I=i?i.e.nodes_start:t;d=je(I,r,d,d===null?r.first:d.next,h,v,m,o,a),c.set(v,d),f=[],x=[],i=d.next;continue}if(_r(g,h,m),g.e.f&se&&Se(g.e),g!==i){if(p!==void 0&&p.has(g)){if(f.length<x.length){var z=x[0],k;d=z.prev;var j=f[0],q=f[f.length-1];for(k=0;k<f.length;k+=1)ze(f[k],z,t);for(k=0;k<x.length;k+=1)p.delete(x[k]);B(r,j.prev,q.next),B(r,d,j),B(r,q,z),i=z,d=q,m-=1,f=[],x=[]}else p.delete(g),ze(g,i,t),B(r,g.prev,g.next),B(r,g,d===null?r.first:d.next),B(r,d,g),d=g;continue}for(f=[],x=[];i!==null&&i.k!==v;)(n||!(i.e.f&se))&&(p??(p=new Set)).add(i),x.push(i),i=i.next;if(i===null)continue;g=i}f.push(g),d=g,i=g.next}if(i!==null||p!==void 0){for(var U=p===void 0?[]:Ee(p);i!==null;)(n||!(i.e.f&se))&&U.push(i),i=i.next;var D=U.length;if(D>0){var J=s===0?t:null;Cr(r,U,J,c)}}_e.first=r.first&&r.first.e,_e.last=d&&d.e}function _r(e,r,t,o){tr(e.v,r),e.i=t}function je(e,r,t,o,a,n,l,s,c){var u=(c&pr)!==0,i=(c&fr)===0,p=u?i?dr(a):$e(a):a,d=c&ur?$e(l):l,f={i:d,v:p,k:n,a:null,e:null,prev:t,next:o};try{return f.e=Re(()=>s(e,p,d),O),f.e.prev=t&&t.e,f.e.next=o&&o.e,t===null?r.first=f:(t.next=f,t.e.next=f.e),o!==null&&(o.prev=f,o.e.prev=f.e),f}finally{}}function ze(e,r,t){for(var o=e.next?e.next.e.nodes_start:t,a=r?r.e.nodes_start:t,n=e.e.nodes_start;n!==o;){var l=gr(n);a.before(n),n=l}}function B(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}const $r=!0,zr=!1,Mr="always",Bt=Object.freeze(Object.defineProperty({__proto__:null,prerender:$r,ssr:zr,trailingSlash:Mr},Symbol.toStringTag,{value:"Module"}));function Oe(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(t=Oe(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Ir(){for(var e,r,t=0,o="",a=arguments.length;t<a;t++)(e=arguments[t])&&(r=Oe(e))&&(o&&(o+=" "),o+=r);return o}const me="-",Hr=e=>{const r=Vr(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:l=>{const s=l.split(me);return s[0]===""&&s.length!==1&&s.shift(),Ze(s,r)||Ar(l)},getConflictingClassGroupIds:(l,s)=>{const c=t[l]||[];return s&&o[l]?[...c,...o[l]]:c}}},Ze=(e,r)=>{var l;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),a=o?Ze(e.slice(1),o):void 0;if(a)return a;if(r.validators.length===0)return;const n=e.join(me);return(l=r.validators.find(({validator:s})=>s(n)))==null?void 0:l.classGroupId},Me=/^\[(.+)\]$/,Ar=e=>{if(Me.test(e)){const r=Me.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},Vr=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Sr(Object.entries(e.classGroups),t).forEach(([n,l])=>{ge(l,o,n,r)}),o},ge=(e,r,t,o)=>{e.forEach(a=>{if(typeof a=="string"){const n=a===""?r:Ie(r,a);n.classGroupId=t;return}if(typeof a=="function"){if(Er(a)){ge(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([n,l])=>{ge(l,Ie(r,n),t,o)})})},Ie=(e,r)=>{let t=e;return r.split(me).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},Er=e=>e.isThemeGetter,Sr=(e,r)=>r?e.map(([t,o])=>{const a=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([l,s])=>[r+l,s])):n);return[t,a]}):e,Rr=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const a=(n,l)=>{t.set(n,l),r++,r>e&&(r=0,o=t,t=new Map)};return{get(n){let l=t.get(n);if(l!==void 0)return l;if((l=o.get(n))!==void 0)return a(n,l),l},set(n,l){t.has(n)?t.set(n,l):a(n,l)}}},Fe="!",Lr=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,a=r[0],n=r.length,l=s=>{const c=[];let u=0,i=0,p;for(let v=0;v<s.length;v++){let g=s[v];if(u===0){if(g===a&&(o||s.slice(v,v+n)===r)){c.push(s.slice(i,v)),i=v+n;continue}if(g==="/"){p=v;continue}}g==="["?u++:g==="]"&&u--}const d=c.length===0?s:s.substring(i),f=d.startsWith(Fe),x=f?d.substring(1):d,h=p&&p>i?p-i:void 0;return{modifiers:c,hasImportantModifier:f,baseClassName:x,maybePostfixModifierPosition:h}};return t?s=>t({className:s,parseClassName:l}):l},Pr=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},Tr=e=>({cache:Rr(e.cacheSize),parseClassName:Lr(e),...Hr(e)}),Gr=/\s+/,Nr=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:a}=r,n=[],l=e.trim().split(Gr);let s="";for(let c=l.length-1;c>=0;c-=1){const u=l[c],{modifiers:i,hasImportantModifier:p,baseClassName:d,maybePostfixModifierPosition:f}=t(u);let x=!!f,h=o(x?d.substring(0,f):d);if(!h){if(!x){s=u+(s.length>0?" "+s:s);continue}if(h=o(d),!h){s=u+(s.length>0?" "+s:s);continue}x=!1}const v=Pr(i).join(":"),g=p?v+Fe:v,m=g+h;if(n.includes(m))continue;n.push(m);const I=a(h,x);for(let z=0;z<I.length;++z){const k=I[z];n.push(g+k)}s=u+(s.length>0?" "+s:s)}return s};function Br(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=We(r))&&(o&&(o+=" "),o+=t);return o}const We=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=We(e[o]))&&(t&&(t+=" "),t+=r);return t};function jr(e,...r){let t,o,a,n=l;function l(c){const u=r.reduce((i,p)=>p(i),e());return t=Tr(u),o=t.cache.get,a=t.cache.set,n=s,s(c)}function s(c){const u=o(c);if(u)return u;const i=Nr(c,t);return a(c,i),i}return function(){return n(Br.apply(null,arguments))}}const w=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},qe=/^\[(?:([a-z-]+):)?(.+)\]$/i,Or=/^\d+\/\d+$/,Zr=new Set(["px","full","screen"]),Fr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Wr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,qr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ur=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Xr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,P=e=>X(e)||Zr.has(e)||Or.test(e),G=e=>Y(e,"length",tt),X=e=>!!e&&!Number.isNaN(Number(e)),pe=e=>Y(e,"number",X),ee=e=>!!e&&Number.isInteger(Number(e)),Yr=e=>e.endsWith("%")&&X(e.slice(0,-1)),b=e=>qe.test(e),N=e=>Fr.test(e),Dr=new Set(["length","size","percentage"]),Jr=e=>Y(e,Dr,Ue),Kr=e=>Y(e,"position",Ue),Qr=new Set(["image","url"]),et=e=>Y(e,Qr,nt),rt=e=>Y(e,"",ot),re=()=>!0,Y=(e,r,t)=>{const o=qe.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},tt=e=>Wr.test(e)&&!qr.test(e),Ue=()=>!1,ot=e=>Ur.test(e),nt=e=>Xr.test(e),st=()=>{const e=w("colors"),r=w("spacing"),t=w("blur"),o=w("brightness"),a=w("borderColor"),n=w("borderRadius"),l=w("borderSpacing"),s=w("borderWidth"),c=w("contrast"),u=w("grayscale"),i=w("hueRotate"),p=w("invert"),d=w("gap"),f=w("gradientColorStops"),x=w("gradientColorStopPositions"),h=w("inset"),v=w("margin"),g=w("opacity"),m=w("padding"),I=w("saturate"),z=w("scale"),k=w("sepia"),j=w("skew"),q=w("space"),U=w("translate"),D=()=>["auto","contain","none"],J=()=>["auto","hidden","clip","visible","scroll"],ie=()=>["auto",b,r],C=()=>[b,r],xe=()=>["",P,G],oe=()=>["auto",X,b],ye=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ne=()=>["solid","dashed","dotted","double","none"],we=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ce=()=>["start","end","center","between","around","evenly","stretch"],K=()=>["","0",b],Ce=()=>["auto","avoid","all","avoid-page","page","left","right","column"],L=()=>[X,b];return{cacheSize:500,separator:":",theme:{colors:[re],spacing:[P,G],blur:["none","",N,b],brightness:L(),borderColor:[e],borderRadius:["none","","full",N,b],borderSpacing:C(),borderWidth:xe(),contrast:L(),grayscale:K(),hueRotate:L(),invert:K(),gap:C(),gradientColorStops:[e],gradientColorStopPositions:[Yr,G],inset:ie(),margin:ie(),opacity:L(),padding:C(),saturate:L(),scale:L(),sepia:K(),skew:L(),space:C(),translate:C()},classGroups:{aspect:[{aspect:["auto","square","video",b]}],container:["container"],columns:[{columns:[N]}],"break-after":[{"break-after":Ce()}],"break-before":[{"break-before":Ce()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ye(),b]}],overflow:[{overflow:J()}],"overflow-x":[{"overflow-x":J()}],"overflow-y":[{"overflow-y":J()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ee,b]}],basis:[{basis:ie()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",b]}],grow:[{grow:K()}],shrink:[{shrink:K()}],order:[{order:["first","last","none",ee,b]}],"grid-cols":[{"grid-cols":[re]}],"col-start-end":[{col:["auto",{span:["full",ee,b]},b]}],"col-start":[{"col-start":oe()}],"col-end":[{"col-end":oe()}],"grid-rows":[{"grid-rows":[re]}],"row-start-end":[{row:["auto",{span:[ee,b]},b]}],"row-start":[{"row-start":oe()}],"row-end":[{"row-end":oe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",b]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",b]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...ce()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...ce(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...ce(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],ms:[{ms:[v]}],me:[{me:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[q]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[q]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",b,r]}],"min-w":[{"min-w":[b,r,"min","max","fit"]}],"max-w":[{"max-w":[b,r,"none","full","min","max","fit","prose",{screen:[N]},N]}],h:[{h:[b,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[b,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[b,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[b,r,"auto","min","max","fit"]}],"font-size":[{text:["base",N,G]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",pe]}],"font-family":[{font:[re]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",b]}],"line-clamp":[{"line-clamp":["none",X,pe]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",P,b]}],"list-image":[{"list-image":["none",b]}],"list-style-type":[{list:["none","disc","decimal",b]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ne(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",P,G]}],"underline-offset":[{"underline-offset":["auto",P,b]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",b]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",b]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ye(),Kr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Jr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},et]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...ne(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:ne()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...ne()]}],"outline-offset":[{"outline-offset":[P,b]}],"outline-w":[{outline:[P,G]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:xe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[P,G]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",N,rt]}],"shadow-color":[{shadow:[re]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...we(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":we()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",N,b]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[i]}],invert:[{invert:[p]}],saturate:[{saturate:[I]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[i]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[I]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",b]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",b]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",b]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[z]}],"scale-x":[{"scale-x":[z]}],"scale-y":[{"scale-y":[z]}],rotate:[{rotate:[ee,b]}],"translate-x":[{"translate-x":[U]}],"translate-y":[{"translate-y":[U]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",b]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",b]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",b]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[P,G,pe]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},at=jr(st);function Xe(...e){return at(Ir(e))}var lt=S('<a target="_blank"><div><!></div></a>');function He(e,r){const t=E(r,["children","$$slots","$$events","$$legacy"]),o=E(t,["label","href","isRound","type"]);Z(r,!1);let a=H(r,"label",8,""),n=H(r,"href",8,""),l=H(r,"isRound",8,!1),s=H(r,"type",8,"light"),c={light:"bg-navy",dark:"bg-white"}[s()],u={light:"text-white",dark:"text-black"}[s()];W();var i=lt();const p=le(()=>Xe("flex h-f32 w-f32 items-center justify-center p-1 transition-colors duration-[0.3s] hover:bg-teal",l()?"rounded-full":"rounded",c,o.class));var d=M(i);T(d,`h-auto w-full ${u??""}`);var f=M(d);Pe(f,r,"default",{}),_(d),_(i),A(()=>{R(i,"aria-label",a()),T(i,y(p)),R(i,"href",n())}),$(e,i),F()}var it=S(`<label aria-label="Open main navigation" aria-controls="mobile-navigation"><svg class="h-[40px] w-[40px] stroke-current" role="none"><line x1="5%" y1="50%" x2="95%" y2="50%" stroke-linecap="round" stroke-linejoin="round" class="origin-left translate-y-[25%] stroke-[10%] transition-all duration-[0.3s] peer-checked:group-[]:translate-x-[8px] peer-checked:group-[]:translate-y-[35%] peer-checked:group-[]:-rotate-45"></line><line x1="5%" y1="50%" x2="95%" y2="50%" stroke-linecap="round" stroke-linejoin="round" class="origin-center stroke-[10%] transition-all duration-[0.3s] peer-checked:group-[]:scale-x-0"></line><line x1="5%" y1="50%" x2="95%" y2="50%" stroke-linecap="round" stroke-linejoin="round" class="origin-left translate-y-[-25%] stroke-[10%] transition-all duration-[0.3s] peer-checked:group-[]:translate-x-[8px] peer-checked:group-[]:translate-y-[-35%] peer-checked:group-[]:rotate-45
      "></line></svg></label>`);function ct(e,r){let t=H(r,"toggleIdentifier",8,"mobile-menu-toggle"),o=H(r,"classes",8,"");var a=it();A(()=>{R(a,"for",t()),T(a,`group z-50 ${o()}`)}),$(e,a)}var dt=be('<svg width="257" height="36" viewBox="0 0 257 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.737414V35.2633H6.40857V24.5081L19.284 19.2909L19.1144 13.1214L6.46158 18.2334V6.48588H22.7984V0.737414H0ZM31.1629 6.48087H39.7501C42.5383 6.48087 44.8229 7.79895 44.8229 10.6456C44.8229 13.4923 42.5383 14.8605 39.7501 14.8605H31.1629V6.48588V6.48087ZM24.696 0.737414V35.2633H31.1629V26.7784L51.2314 35.2633V28.6227L31.7195 20.6641H39.5805C45.8247 20.6641 51.2314 16.8702 51.2314 10.7007C51.2314 4.5313 45.8247 0.737414 39.5805 0.737414H24.696ZM53.1821 0.737414V35.2633H75.9275V29.4647H59.5907V20.8194H75.9275V15.076H59.5907V6.48588H75.9275V0.737414H53.1821ZM137.193 0.737414V24.3527C137.193 27.886 134.463 30.3067 130.785 30.3067C127.106 30.3067 124.376 27.881 124.376 24.3527V0.737414H117.967V24.2475C117.967 31.2038 123.708 36 130.79 36C137.872 36 143.612 31.2038 143.612 24.2475V0.737414H137.204H137.193ZM145.558 0.737414V35.2633H168.303V29.4647H151.966V20.8194H168.303V15.076H151.966V6.48588H168.303V0.737414H145.558ZM190.603 0.737414V24.037L177.224 0.737414H170.254V35.2633H176.551V12.0188L189.988 35.2633H196.9V0.737414H190.603ZM250.199 0.737414L245.126 13.7028L239.773 0.737414H232.691L248.19 35.2633H254.88L248.413 20.8746L257 0.792543H250.199V0.737414ZM84.0111 17.9778C84.0111 11.232 89.8101 5.69402 97.0031 5.69402C104.196 5.69402 109.995 11.1769 109.995 17.9778C109.995 20.1378 109.439 22.2478 108.267 24.1472L93.828 15.7125V22.5635L103.974 28.3621C101.853 29.575 99.4574 30.2616 96.9501 30.2616C89.8684 30.3167 84.0747 24.9391 84.0164 18.2434V17.9778M96.9448 0.00068895C86.4653 0.0558181 77.9365 8.1197 77.9895 18.0279C78.0478 27.9361 86.5766 36 97.0562 35.9499C101.625 35.9499 106.03 34.3662 109.486 31.5245L115.953 35.2132V28.6227L113.388 27.1493C115.063 24.3577 115.953 21.1953 115.953 17.9778C116.07 8.1197 107.652 0.0558181 97.2258 0.00068895C97.1145 0.00068895 97.0561 0.00068895 96.9448 0.00068895ZM217.923 0.00068895C207.444 0.00068895 198.856 8.01446 198.856 17.9728C198.856 27.9311 207.332 36 217.865 36C223.939 36 229.627 33.3137 233.194 28.6728L228.737 24.458C226.563 28.1466 222.381 30.4119 217.923 30.3067C210.566 30.3067 205.048 24.9842 205.048 18.0229C205.048 11.0616 210.624 5.68901 217.923 5.68901C222.381 5.58376 226.563 7.84907 228.737 11.5928L233.194 7.37797C229.627 2.63686 223.939 -0.0494284 217.923 0.00068895Z" fill="currentColor" class="transition-all duration-1000"></path></svg>');function Ye(e,r){const t=E(r,["children","$$slots","$$events","$$legacy"]),o=E(t,[]);Z(r,!1),W();var a=dt();A(()=>ve(a,o.class)),$(e,a),F()}var ut=be('<svg viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="currentColor" fill-rule="nonzero"></path></g></svg>');function pt(e,r){const t=E(r,["children","$$slots","$$events","$$legacy"]),o=E(t,[]);Z(r,!1),W();var a=ut();A(()=>ve(a,o.class)),$(e,a),F()}var ft=be('<svg viewBox="0 0 300 300.251" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" fill="currentColor"></path></svg>');function gt(e,r){const t=E(r,["children","$$slots","$$events","$$legacy"]),o=E(t,[]);Z(r,!1),W();var a=ft();A(()=>ve(a,o.class)),$(e,a),F()}var bt=S('<footer><!> <aside class="flex flex-col items-center space-y-4 leading-none md:flex-row md:space-x-4 md:space-y-0"><div> <span class="md:hidden">All Rights Reserved</span></div> <div></div> <div class="hidden md:block">All Rights Reserved</div> <div></div> <div><a class="underline transition duration-[0.3s] hover:text-teal">Privacy Policy</a></div></aside> <div class="flex gap-f16" aria-label="Social Links"><!> <!></div></footer>');function ht(e,r){const t=E(r,["children","$$slots","$$events","$$legacy"]),o=E(t,["privacyHref","type"]);Z(r,!1);let a=H(r,"privacyHref",8,"/privacy"),n=H(r,"type",8,"light"),l={dark:"text-white",light:"text-black"}[n()],s={dark:"bg-white",light:"bg-black"}[n()];W();var c=bt();const u=le(()=>Xe("sm md:md mx-auto my-0 flex max-w-screen-xl flex-col items-center gap-f16 border-t-[2px] border-current py-f48 md:gap-f48",l,o.class));var i=M(c);Ye(i,{class:"w-[146px] md:w-[257px]"});var p=V(i,2),d=M(p),f=M(d);A(()=>te(f,`© ${new Date().getFullYear()??""} Frequency Network Foundation `)),he(),_(d);var x=V(d,2);T(x,`hidden w-[2px] self-stretch md:block ${s??""}`);var h=V(x,4);T(h,`hidden w-[2px] self-stretch md:block ${s??""}`);var v=V(h,2),g=M(v);_(v),_(p);var m=V(p,2),I=M(m);He(I,{get type(){return n()},label:"X/Twitter",href:"https://twitter.com/one_frequency",children:(k,j)=>{gt(k,{})},$$slots:{default:!0}});var z=V(I,2);He(z,{get type(){return n()},label:"Discord",href:"https://discord.com/invite/JchmHX5afV",children:(k,j)=>{pt(k,{})},$$slots:{default:!0}}),_(m),_(c),A(()=>{T(c,y(u)),R(g,"href",a())}),$(e,c),F()}var vt=S('<div class="content-center"><!></div>'),mt=S("<a> </a>"),xt=S('<nav class="hidden items-stretch gap-f40 md:flex"></nav>');function yt(e,r){Z(r,!1);const t=fe();let o=H(r,"menuItems",24,()=>[]),a=H(r,"highlightMarginTop",8,"0px"),n=fe(o().filter(s=>s.viewportHighlightId).map(s=>[s.viewportHighlightId,!1]));xr(()=>{const s=new IntersectionObserver(c=>{c.forEach(u=>{const i=y(n).findIndex(([p])=>p===u.target.id);i>-1&&vr().then(()=>mr(n,y(n)[i][1]=u.isIntersecting))})},{threshold:.05,rootMargin:`${a()} 0px 0px 0px`});return y(n).forEach(([c])=>{const u=document.getElementById(c);u&&s.observe(u)}),()=>{s.disconnect()}}),br(()=>y(n),()=>{var s;Le(t,(s=y(n).find(([c,u])=>u===!0))==null?void 0:s[0])}),hr(),W();var l=xt();Be(l,5,o,Ne,(s,c)=>{var u=Ae(),i=ae(u);Ge(i,()=>y(c).isButton,p=>{var d=vt(),f=M(d),x=le(()=>y(c).isExternal?"_blank":"_self");Te(f,{size:"auto",get href(){return y(c).href},get target(){return y(x)},children:(h,v)=>{he();var g=Ve();A(()=>te(g,y(c).label)),$(h,g)},$$slots:{default:!0}}),_(d),$(p,d)},p=>{var d=mt(),f=M(d,!0);_(d),A(()=>{R(d,"href",y(c).href),R(d,"target",y(c).isExternal?"_blank":"_self"),T(d,`${`h6 underline-on-nav-hover border-color hidden content-center px-2 text-navy transition-all duration-1000 after:bg-current lg:block ${y(c).viewportHighlightId&&y(t)===y(c).viewportHighlightId?"underline-on-nav":""}`??""} svelte-1m2t4rb`),te(f,y(c).label)}),$(p,d)}),$(s,u)}),_(l),$(e,l),F()}var wt=S("<a> </a>"),Ct=S('<input type="checkbox" class="peer hidden"> <!> <div class="z-1 fixed right-0 top-0 z-10 flex h-0 w-[100vw] flex-col justify-between gap-f24 overflow-y-scroll bg-navy px-[12%] transition-[height] duration-[1s] peer-checked:h-[100vh] lg:hidden"><nav id="mobile-navigation" aria-label="Main" class="mb-f20 mt-[85px] flex flex-col gap-f24 text-white"></nav></div>',1);function kt(e,r){let t=H(r,"menuItems",24,()=>[]),o=H(r,"toggleIdentifier",8,"mobile-menu-toggle"),a=fe(!1);var n=Ct(),l=ae(n);yr(l);var s=V(l,2);ct(s,{classes:"cursor-pointer stroke-navy peer-checked:stroke-white peer-checked:hover:stroke-teal hover:stroke-teal flex self-center lg:hidden"});var c=V(s,2),u=M(c);Be(u,5,t,Ne,(i,p)=>{var d=Ae(),f=ae(d);Ge(f,()=>y(p).isButton,x=>{var h=le(()=>y(p).isExternal?"_blank":"_self");Te(x,{size:"full",class:"mt-f24 max-w-[360px] md:hidden",get href(){return y(p).href},get target(){return y(h)},children:(v,g)=>{he();var m=Ve();A(()=>te(m,y(p).label)),$(v,m)},$$slots:{default:!0}})},x=>{var h=wt();T(h,"h4 underline-on-hover font-bold after:bg-current");var v=M(h,!0);_(h),A(()=>{R(h,"href",y(p).href),R(h,"target",y(p).isExternal?"_blank":"_self"),te(v,y(p).label)}),$(x,h)}),$(i,d)}),_(u),_(c),A(()=>{R(l,"id",o()),R(c,"aria-expanded",y(a))}),wr(l,()=>y(a),i=>Le(a,i)),$(e,n)}var _t=S('<div><div class="m-auto flex h-[85px] w-full max-w-screen-lg items-stretch justify-around sm:px-f20 md:px-f32"><div class="flex w-[146px] items-center text-teal md:w-[200px]"><!></div> <!> <!></div></div>');function $t(e,r){const t=E(r,["children","$$slots","$$events","$$legacy"]),o=E(t,["menuItems"]);Z(r,!1);let a=H(r,"menuItems",24,()=>[]);W();var n=_t(),l=M(n),s=M(l),c=M(s);Ye(c,{}),_(s);var u=V(s,2);yt(u,{get menuItems(){return a()}});var i=V(u,2);kt(i,{get menuItems(){return a()}}),_(l),_(n),A(()=>T(n,`${`header-shadow flex h-[85px] font-title ${o.class}`??""} svelte-5f62pp`)),$(e,n),F()}var zt=S('<div class="sticky top-0 z-50 bg-white md:pt-[30px]"><!></div>');function Mt(e){const r="#5E69FF",o="text-navy",a=[{label:"About",href:"/"},{label:"Dev Docs",href:"/docs",isExternal:!1},{label:"Newsroom",href:"https://medium.com/one-frequency",isExternal:!0},{label:"Contact",href:"mailto:info@frequency.xyz"}];var n=zt(),l=M(n);$t(l,{logoType:"primary",logoHex:r,class:o,menuItems:a}),_(n),$(e,n)}var It=S('<div class="freq-container"><!></div> <div class="max-w-screen-xl"><!></div> <!>',1);function jt(e,r){var t=It(),o=ae(t),a=M(o);Mt(a),_(o);var n=V(o,2),l=M(n);Pe(l,r,"default",{}),_(n);var s=V(n,2);ht(s,{type:"dark",class:"w-full border-grayBorder border-opacity-25 bg-navy vertical-lg:w-[100%]"}),$(e,t)}export{jt as component,Bt as universal};
