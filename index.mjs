// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function p(e,t){return s(t)?i(t,"period")&&(e.period=t.period,!o(t.period))?new TypeError(m("0RX8f","period",t.period)):i(t,"offset")&&(e.offset=t.offset,!n(t.offset))?new TypeError(m("0RX8e","offset",t.offset)):i(t,"iter")&&(e.iter=t.iter,!d(t.iter))?new TypeError(m("0RX35","iter",t.iter)):null:new TypeError(m("0RX2h",t))}function f(s){var i,n,o,d,m,l;if(i={period:10,offset:0,iter:1e308},arguments.length&&(d=p(i,s)))throw d;return(m=(i.period-i.offset)%i.period)<0&&(m+=i.period),m-=1,l=0,e(n={},"next",j),e(n,"return",h),t&&e(n,t,a),n;function j(){return l+=1,o||l>i.iter?{done:!0}:(m+=1,{value:0===(m%=i.period)?r:0,done:!1})}function h(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function a(){return f(i)}}export{f as default};
//# sourceMappingURL=index.mjs.map
