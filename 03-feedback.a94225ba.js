function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,s=f||u||Function("return this")(),l=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var o,r,i,a,c,f,u=0,s=!1,l=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,u=t,a=e.apply(i,n)}function h(e){return u=e,c=setTimeout(w,t),s?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||l&&e-u>=i}function w(){var e=g();if(j(e))return O(e);c=setTimeout(w,function(e){var n=t-(e-f);return l?m(n,i-(e-u)):n}(e))}function O(e){return c=void 0,p&&o?b(e):(o=r=void 0,a)}function S(){var e=g(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===c)return h(f);if(l)return c=setTimeout(w,t),b(f)}return void 0===c&&(c=setTimeout(w,t)),a}return t=y(t)||0,v(n)&&(s=!!n.leading,i=(l="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=f=r=c=void 0},S.flush=function(){return void 0===c?a:O(g())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?c(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector("form.feedback-form");function h(){const e=localStorage.getItem("feedback-form-state"),t={email:"",message:""};if(e)try{const n=JSON.parse(e);Object.keys(t).forEach((e=>{t[e]=n[e]}))}catch(e){console.warn(e)}return t}function j(e){const t=""===e.value.trim(),n=e.parentNode.children;if(t){const t=document.createElement("SPAN");t.classList.add("error-msg"),t.style.fontSize="11px",t.textContent="поле не можу бути порожнім",e.parentNode.append(t)}else n.length>1&&n[1].classList.contains("error-msg")&&n[1].remove();return!t}!function(){const e=h();Object.keys(e).forEach((t=>{const n=document.querySelector(`[name="${t}"]`);n&&(n.value=e[t])}))}(),b.addEventListener("input",e(t)((function(e){const t=h();t[e.target.name]=e.target.value,j(e.target)&&localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),b.addEventListener("submit",(e=>{const t=h();e.preventDefault(),function(e){const t=e.elements,n=h();return Object.keys(n).reduce(((e,n)=>{const o=!j(t[n]);return e&&!o}),!0)}(e.currentTarget)&&(alert("Local storage item was removed"),console.log(t),localStorage.removeItem("feedback-form-state"),console.log('localStorage["feedback-form-state"] was removed'))}));
//# sourceMappingURL=03-feedback.a94225ba.js.map
