!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=70)}({70:function(e,t){var n=document.querySelector(".slider__button--prev"),r=document.querySelector(".slider__button--next"),i=document.getElementsByClassName("slider__item"),o=document.getElementsByClassName("slider__dot");i=[].slice.call(i),o=[].slice.call(o);var c=0;function s(e){c=e>i.length?1:e<0?i.length:e,i.forEach(function(t,n){n!=e?i[n].classList.add("slider__item--inactive"):i[n].classList.remove("slider__item--inactive")})}s(c),n.addEventListener("click",function(){c?o[(c-=1)+1].classList.remove("slider__dot--active"):(c=i.length-1,o[0].classList.remove("slider__dot--active")),s(c),o[c].classList.add("slider__dot--active")}),r.addEventListener("click",function(){c<i.length-1?o[(c+=1)-1].classList.remove("slider__dot--active"):(c=0,o[o.length-1].classList.remove("slider__dot--active")),s(c),o[c].classList.add("slider__dot--active")}),o.forEach(function(e,t){e.addEventListener("click",function(e){return function(){s(e),o[e].classList.add("slider__dot--active"),o.forEach(function(t,n){e!=n&&t.classList.contains("slider__dot--active")&&t.classList.remove("slider__dot--active")})}}(t))})}});