import{h as l}from"./runtime.FR-W_Iy9.js";function n(s,a){var t=s.__className,e=r(a);l&&s.getAttribute("class")===e?s.__className=e:(t!==e||l&&s.getAttribute("class")!==e)&&(e===""?s.removeAttribute("class"):s.setAttribute("class",e),s.__className=e)}function i(s,a){var t=s.__className,e=r(a);l&&s.className===e?s.__className=e:(t!==e||l&&s.className!==e)&&(a==null?s.removeAttribute("class"):s.className=e,s.__className=e)}function r(s){return s??""}function _(s){return function(...a){var t=a[0];return t.stopPropagation(),s==null?void 0:s.apply(this,a)}}function u(s){return function(...a){var t=a[0];return t.preventDefault(),s==null?void 0:s.apply(this,a)}}export{n as a,_ as b,u as p,i as s};