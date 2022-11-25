(()=>{"use strict";var e={772:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".sometxt {\n  color: #5f66ca; }\n\n.colorBox1 {\n  background-color: #0a0a14;\n  height: 50;\n  width: 50; }\n\n.colorBox2 {\n  background-color: #131428;\n  height: 50;\n  width: 50; }\n\n.colorBox3 {\n  background-color: #1d1f3d;\n  height: 50;\n  width: 50; }\n\n.colorBox4 {\n  background-color: #262951;\n  height: 50;\n  width: 50; }\n\n.colorBox5 {\n  background-color: #303365;\n  height: 50;\n  width: 50; }\n\n.colorBox6 {\n  background-color: #393d79;\n  height: 50;\n  width: 50; }\n\n.colorBox7 {\n  background-color: #43478d;\n  height: 50;\n  width: 50; }\n\n.colorBox8 {\n  background-color: #4c52a2;\n  height: 50;\n  width: 50; }\n\n.colorBox9 {\n  background-color: #565cb6;\n  height: 50;\n  width: 50; }\n\n.colorBox10 {\n  background-color: #5f66ca;\n  height: 50;\n  width: 50; }\n\n.rotate {\n  transition-duration: 0.8s;\n  transition-property: transform;\n  overflow: hidden;\n  cursor: pointer; }\n\n.rotate:hover {\n  transform: rotate(360deg); }",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},970:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n.p+"36685111f36463c2657f212fa1cb625c.jpg"},441:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(379),o=n.n(r),i=n(772);o()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],d=t.base?c[0]+t.base:c[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=a(s),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:s,updater:g(f,t),references:1}),r.push(s)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,p=0;function g(e,t){var n,r,o;if(t.singleton){var i=p++;n=h||(h=d(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=d(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var d=c(e,t),l=0;l<n.length;l++){var s=a(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=d}}}},138:(e,t,n)=>{n(441);const r=n(970);let o=document.getElementById("dspl");o.innerText="Hello Webpak with JS, CSS and Image packing",o.setAttribute("class","sometxt");let i=document.createElement("img");i.setAttribute("src",r.default),i.setAttribute("height","250"),i.setAttribute("width","500"),i.classList.add("rotate");let a=document.createElement("div");a.setAttribute("id","randomdiv"),a.appendChild(i),document.body.appendChild(a);for(let e=1;e<10;e++){let t="pageDivBox"+e.toString(),n=document.createElement("div");n.setAttribute("id",t),n.classList.add("colorBox"+e.toString()),document.body.append(n)}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n(138)})();