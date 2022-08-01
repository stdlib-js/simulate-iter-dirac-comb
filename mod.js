// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=Object.prototype.hasOwnProperty;function y(t,r){return null!=t&&p.call(t,r)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&y(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null,b=Number.POSITIVE_INFINITY;var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return v&&"symbol"==typeof Symbol.toStringTag}var j=Object.prototype.toString;var m="function"==typeof Symbol?Symbol.toStringTag:"";var _=d()?function(t){var r,e,n;if(null==t)return j.call(t);e=t[m],r=y(t,m);try{t[m]=void 0}catch(r){return j.call(t)}return n=j.call(t),r?t[m]=e:delete t[m],n}:function(t){return j.call(t)};var w=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};var g=/./;function O(t){return"boolean"==typeof t}var h=Boolean.prototype.toString;var S=d();function E(t){return"object"==typeof t&&(t instanceof Boolean||(S?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function P(t){return O(t)||E(t)}function T(){return new Function("return this;")()}a(P,"isPrimitive",O),a(P,"isObject",E);var I="object"==typeof self?self:null,A="object"==typeof window?window:null,N="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof N?N:null;var F=function(t){if(arguments.length){if(!O(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(I)return I;if(A)return A;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),R=F.document&&F.document.childNodes,V=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var X=/^\s*function\s*([^(]*)/i;function C(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=_(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=X.exec(n.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(x,"REGEXP",X),a(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!w(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(C));var k="function"==typeof g||"object"==typeof V||"function"==typeof R?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function L(t){return"function"===k(t)}var M,U=Object.getPrototypeOf;M=L(Object.getPrototypeOf)?U:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===_(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Y=M;var q=Object.prototype;function z(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!w(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Y(t))}(t),!r||!y(t,"constructor")&&y(r,"constructor")&&L(r.constructor)&&"[object Function]"===_(r.constructor)&&y(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===q||function(t){var r;for(r in t)if(!y(t,r))return!1;return!0}(t)))}function D(t){return"number"==typeof t}var H=Number,J=H.prototype.toString;var K=d();function Q(t){return"object"==typeof t&&(t instanceof H||(K?function(t){try{return J.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function W(t){return D(t)||Q(t)}a(W,"isPrimitive",D),a(W,"isObject",Q);var Z=H.NEGATIVE_INFINITY,$=Math.floor;function tt(t){return t<b&&t>Z&&$(r=t)===r;var r}function rt(t){return D(t)&&tt(t)}function et(t){return Q(t)&&tt(t.valueOf())}function nt(t){return rt(t)||et(t)}function ot(t){return rt(t)&&t>0}function ut(t){return et(t)&&t.valueOf()>0}function it(t){return ot(t)||ut(t)}function ft(t){return rt(t)&&t>=0}function ct(t){return et(t)&&t.valueOf()>=0}function lt(t){return ft(t)||ct(t)}function at(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function pt(t,r){return z(r)?y(r,"period")&&(t.period=r.period,!ot(r.period))?new TypeError(at("0RX8f","period",r.period)):y(r,"offset")&&(t.offset=r.offset,!rt(r.offset))?new TypeError(at("0RX8e","offset",r.offset)):y(r,"iter")&&(t.iter=r.iter,!ft(r.iter))?new TypeError(at("0RX35","iter",r.iter)):null:new TypeError(at("0RX2h",r))}function yt(t){var r,e,n,o,u,i;if(r={period:10,offset:0,iter:1e308},arguments.length&&(o=pt(r,t)))throw o;return(u=(r.period-r.offset)%r.period)<0&&(u+=r.period),u-=1,i=0,a(e={},"next",f),a(e,"return",c),s&&a(e,s,l),e;function f(){return i+=1,n||i>r.iter?{done:!0}:(u+=1,{value:0===(u%=r.period)?b:0,done:!1})}function c(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return yt(r)}}a(nt,"isPrimitive",rt),a(nt,"isObject",et),a(it,"isPrimitive",ot),a(it,"isObject",ut),a(lt,"isPrimitive",ft),a(lt,"isObject",ct);export{yt as default};
//# sourceMappingURL=mod.js.map
