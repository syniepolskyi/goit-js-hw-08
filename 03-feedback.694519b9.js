!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(S,t),s?b(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function S(){var e=p();if(O(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?b(e):(r=i=void 0,u)}function T(){var e=p(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(S,t),b(c)}return void 0===f&&(f=setTimeout(S,t)),u}return t=h(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var j,O=document.querySelector("form.feedback-form");function S(){var e=localStorage.getItem("feedback-form-state"),t={email:"",message:""};if(e)try{var n=JSON.parse(e);Object.keys(t).forEach((function(e){t[e]=n[e]}))}catch(e){console.warn(e)}return t}function w(e){var t=""===e.value.trim();e.classList.toggle("error",t);var n=e.parentNode.children;if(t){var r=document.createElement("SPAN");r.classList.add("error-msg"),r.style.fontSize="11px",r.textContent="поле не можу бути порожнім",e.parentNode.append(r)}else n.length>1&&n[1].classList.contains("error-msg")&&n[1].remove();return!t}j=S(),Object.keys(j).forEach((function(e){var t=document.querySelector('[name="'.concat(e,'"]'));t&&(t.value=j[e])})),O.addEventListener("input",e(t)((function(e){var t=S();t[e.target.name]=e.target.value,w(e.target)&&localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),O.addEventListener("submit",(function(e){var t=S();e.preventDefault(),function(e){var t=e.elements,n=S();return Object.keys(n).reduce((function(e,n){var r=w(t[n]);return e&&!r}),!0)}(e.currentTarget)&&(alert("Local storage item was removed"),console.log(t),localStorage.removeItem("feedback-form-state"),console.log('localStorage["feedback-form-state"] was removed'))}))}();
//# sourceMappingURL=03-feedback.694519b9.js.map
