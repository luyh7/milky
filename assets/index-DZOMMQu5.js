import{b7 as p,b8 as b,C as c}from"./index-DJZqXJCD.js";function u(e){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function h(e,t,n){return v(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function g(e){var t=_(e,"string");return u(t)=="symbol"?t:t+""}function _(e,t){if(u(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(u(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var L=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};m(this,e),this.element=t,this.listener=n}return h(e,[{key:"bindScrollListener",value:function(){this.scrollableParents=b(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function a(e){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(e)}function S(e){return C(e)||k(e)||w(e)||P()}function P(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(e,t){if(e){if(typeof e=="string")return f(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function k(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function C(e){if(Array.isArray(e))return f(e)}function f(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function $(e,t,n){return j(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=O(e,"string");return a(t)=="symbol"?t:t+""}function O(e,t){if(a(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(a(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var T=function(){function e(t){var n=t.init,r=t.type;A(this,e),y(this,"helpers",void 0),y(this,"type",void 0),this.helpers=new Set(n),this.type=r}return $(e,[{key:"add",value:function(n){this.helpers.add(n)}},{key:"update",value:function(){}},{key:"delete",value:function(n){this.helpers.delete(n)}},{key:"clear",value:function(){this.helpers.clear()}},{key:"get",value:function(n,r){var l=this._get(n,r),i=l?this._recursive(S(this.helpers),l):null;return c(i)?i:null}},{key:"_isMatched",value:function(n,r){var l,i=n==null?void 0:n.parent;return(i==null||(l=i.vnode)===null||l===void 0?void 0:l.key)===r||i&&this._isMatched(i,r)||!1}},{key:"_get",value:function(n,r){var l,i;return((l=r||(n==null?void 0:n.$slots))===null||l===void 0||(i=l.default)===null||i===void 0?void 0:i.call(l))||null}},{key:"_recursive",value:function(){var n=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],i=[];return l.forEach(function(o){o.children instanceof Array?i=i.concat(n._recursive(i,o.children)):o.type.name===n.type?i.push(o):c(o.key)&&(i=i.concat(r.filter(function(s){return n._isMatched(s,o.key)}).map(function(s){return s.vnode})))}),i}}])}();function M(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return p(e)}function I(e,t){if(e){var n=e.props;if(n){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),l=Object.prototype.hasOwnProperty.call(n,r)?r:t;return e.type.extends.props[t].type===Boolean&&n[l]===""?!0:n[l]}}return null}export{L as C,M as U,T as _,I as g};
