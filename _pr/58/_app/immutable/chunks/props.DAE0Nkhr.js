import{S as M,I as ae,J as ne,K as g,M as te,h as w,U as m,N as Y,g as y,G as C,O as se,x as ie,E as fe,P as j,Q as ue,R as le,T as de,V as H,W as I,X as q,H as k,Y as O,Z as _e,_ as oe,$ as ce,a0 as ve,a1 as he,a2 as be,a3 as me,a4 as B,p as ye,y as S,j as ge,c as we,a5 as Re,a6 as $,a7 as V,a8 as Ee,a9 as Pe,aa as Te,ab as pe,ac as Ie,ad as ee,ae as Oe,b as Z,af as G,ag as Se,ah as Ne,C as W,ai as Ae,aj as De,ak as xe,f as z,al as Le,F as Ye,am as Ce,an as Fe,m as Me}from"./runtime.AAFsb3N2.js";import{b as He,r as J,h as L,e as je}from"./utils.CLEMWXyN.js";import{b as qe}from"./disclose-version.CoeVHDR6.js";import{c as Be}from"./store.DAC_7824.js";function p(e,r=null,d){if(typeof e!="object"||e===null||M in e)return e;const h=ie(e);if(h!==ae&&h!==ne)return e;var u=new Map,l=fe(e),_=g(0);l&&u.set("length",g(e.length));var o;return new Proxy(e,{defineProperty(i,a,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&te();var t=u.get(a);return t===void 0?(t=g(n.value),u.set(a,t)):w(t,p(n.value,o)),!0},deleteProperty(i,a){var n=u.get(a);if(n===void 0)a in i&&u.set(a,g(m));else{if(l&&typeof a=="string"){var t=u.get("length"),s=Number(a);Number.isInteger(s)&&s<t.v&&w(t,s)}w(n,m),Q(_)}return!0},get(i,a,n){var c;if(a===M)return e;var t=u.get(a),s=a in i;if(t===void 0&&(!s||(c=Y(i,a))!=null&&c.writable)&&(t=g(p(s?i[a]:m,o)),u.set(a,t)),t!==void 0){var f=y(t);return f===m?void 0:f}return Reflect.get(i,a,n)},getOwnPropertyDescriptor(i,a){var n=Reflect.getOwnPropertyDescriptor(i,a);if(n&&"value"in n){var t=u.get(a);t&&(n.value=y(t))}else if(n===void 0){var s=u.get(a),f=s==null?void 0:s.v;if(s!==void 0&&f!==m)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return n},has(i,a){var f;if(a===M)return!0;var n=u.get(a),t=n!==void 0&&n.v!==m||Reflect.has(i,a);if(n!==void 0||C!==null&&(!t||(f=Y(i,a))!=null&&f.writable)){n===void 0&&(n=g(t?p(i[a],o):m),u.set(a,n));var s=y(n);if(s===m)return!1}return t},set(i,a,n,t){var N;var s=u.get(a),f=a in i;if(l&&a==="length")for(var c=n;c<s.v;c+=1){var b=u.get(c+"");b!==void 0?w(b,m):c in i&&(b=g(m),u.set(c+"",b))}s===void 0?(!f||(N=Y(i,a))!=null&&N.writable)&&(s=g(void 0),w(s,p(n,o)),u.set(a,s)):(f=s.v!==m,w(s,p(n,o)));var R=Reflect.getOwnPropertyDescriptor(i,a);if(R!=null&&R.set&&R.set.call(t,n),!f){if(l&&typeof a=="string"){var x=u.get("length"),E=Number(a);Number.isInteger(E)&&E>=x.v&&w(x,E+1)}Q(_)}return!0},ownKeys(i){y(_);var a=Reflect.ownKeys(i).filter(s=>{var f=u.get(s);return f===void 0||f.v!==m});for(var[n,t]of u)t.v!==m&&!(n in i)&&a.push(n);return a},setPrototypeOf(){se()}})}function Q(e,r=1){w(e,e.v+r)}function ze(e,r){var d=r==null?"":typeof r=="object"?r+"":r;d!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=d,e.nodeValue=d==null?"":d+"")}function Ke(e,r){return re(e,r)}function Je(e,r){j(),r.intro=r.intro??!1;const d=r.target,h=S,u=O;try{for(var l=ue(d);l&&(l.nodeType!==8||l.data!==le);)l=de(l);if(!l)throw H;I(!0),q(l),k();const _=re(e,{...r,anchor:l});if(O===null||O.nodeType!==8||O.data!==_e)throw oe(),H;return I(!1),_}catch(_){if(_===H)return r.recover===!1&&ce(),j(),ve(d),I(!1),Ke(e,r);throw _}finally{I(h),q(u)}}const T=new Map;function re(e,{target:r,anchor:d,props:h={},events:u,context:l,intro:_=!0}){j();var o=new Set,i=t=>{for(var s=0;s<t.length;s++){var f=t[s];if(!o.has(f)){o.add(f);var c=je(f);r.addEventListener(f,L,{passive:c});var b=T.get(f);b===void 0?(document.addEventListener(f,L,{passive:c}),T.set(f,1)):T.set(f,b+1)}}};i(he(He)),J.add(i);var a=void 0,n=be(()=>{var t=d??r.appendChild(me());return B(()=>{if(l){ye({});var s=we;s.c=l}u&&(h.$$events=u),S&&qe(t,null),a=e(t,h)||{},S&&(C.nodes_end=O),l&&ge()}),()=>{var c;for(var s of o){r.removeEventListener(s,L);var f=T.get(s);--f===0?(document.removeEventListener(s,L),T.delete(s)):T.set(s,f)}J.delete(i),K.delete(a),t!==d&&((c=t.parentNode)==null||c.removeChild(t))}});return K.set(a,n),a}let K=new WeakMap;function Qe(e){const r=K.get(e);r&&r()}function Xe(e,r,d,h=null,u=!1){S&&k();var l=e,_=null,o=null,i=null,a=u?Ee:0;Re(()=>{if(i===(i=!!r()))return;let n=!1;if(S){const t=l.data===Pe;i===t&&(l=Te(),q(l),I(!1),n=!0)}i?(_?$(_):_=B(()=>d(l)),o&&V(o,()=>{o=null})):(o?$(o):h&&(o=B(()=>h(l))),_&&V(_,()=>{_=null})),n&&I(!0)},a),S&&(l=O)}const Ue={get(e,r){if(!e.exclude.includes(r))return y(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,d){return r in e.special||(e.special[r]=$e({get[r](){return e.props[r]}},r,ee)),e.special[r](d),G(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),G(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ke(e,r){return new Proxy({props:e,exclude:r,special:{},version:g(0)},Ue)}function X(e){for(var r=C,d=C;r!==null&&!(r.f&(Se|Ne));)r=r.parent;try{return W(r),e()}finally{W(d)}}function $e(e,r,d,h){var U;var u=(d&Ae)!==0,l=(d&De)!==0,_=(d&xe)!==0,o=(d&Fe)!==0,i=!1,a;_?[a,i]=Be(()=>e[r]):a=e[r];var n=(U=Y(e,r))==null?void 0:U.set,t=h,s=!0,f=!1,c=()=>(f=!0,s&&(s=!1,o?t=Z(h):t=h),t);a===void 0&&h!==void 0&&(n&&l&&pe(),a=c(),n&&n(a));var b;if(l)b=()=>{var v=e[r];return v===void 0?c():(s=!0,f=!1,v)};else{var R=X(()=>(u?z:Le)(()=>e[r]));R.f|=Ie,b=()=>{var v=y(R);return v!==void 0&&(t=void 0),v===void 0?t:v}}if(!(d&ee))return b;if(n){var x=e.$$legacy;return function(v,P){return arguments.length>0?((!l||!P||x||i)&&n(P?b():v),v):b()}}var E=!1,N=!1,F=Me(a),A=X(()=>z(()=>{var v=b(),P=y(F),D=Ye;return E||v===void 0&&D.f&Ce?(E=!1,N=!0,P):(N=!1,F.v=v)}));return u||(A.equals=Oe),function(v,P){if(arguments.length>0){const D=P?y(A):l&&_?p(v):v;return A.equals(D)||(E=!0,w(F,D),f&&t!==void 0&&(t=D),Z(()=>y(A))),v}return y(A)}}export{p as a,Je as h,Xe as i,ke as l,Ke as m,$e as p,ze as s,Qe as u};
