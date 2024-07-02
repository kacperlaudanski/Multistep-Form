(()=>{"use strict";var n={936:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),l=t(417),s=t.n(l),c=new URL(t(867),t.b),d=a()(o()),p=s()(c);d.push([n.id,`.step_container {\n    width: 30%;\n    height: 100%;\n    border-radius: 10px;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    background-image: url(${p});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n  \n  .step_item {\n    width: 100%;\n    height: 30px;\n    margin: 15px 0;\n    display: flex;\n    align-items: center;\n  }\n  \n  .step_number {\n    width: 30px;\n    height: 30px;\n    color: var(--white);\n    font-size: 0.8rem;\n    font-weight: 600;\n    border: 1px solid var(--white);\n    display: flex;\n    border-radius: 9999px;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .step_number-active {\n    background-color: var(--light-blue);\n    color: var(--black);\n    border: none;\n  }\n  \n  .step_content {\n    color: var(--white);\n    margin-left: 15px;\n  }\n  \n  .step_content small {\n    font-size: 0.7rem;\n    color: var(--cool-gray);\n  }\n  \n  .step_content h4 {\n    font-size: 0.9rem;\n    letter-spacing: 1px;\n  }`,""]);const u=d},934:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'.form_billing_options {\n    width: 100%;\n    height: 50px;\n    position: relative;\n    background-color: var(--magnolia);\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 0 5em;\n  }\n  \n  /* The switch - the box around the slider */\n  .form_billing_toggle {\n    font-size: 17px;\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 25px;\n    font-weight: 700;\n  }\n  \n  .form_billing_option.active {\n    color: var(--marine-blue);\n  }\n  \n  .form_billing_option {\n    font-weight: 700;\n    color: var(--cool-gray);\n    transition: 0.4s linear;\n  }\n  \n  .form_yearly_discount_badge {\n    color: var(--marine-blue);\n    margin-top: 0.6em;\n    font-size: 0.8rem;\n  }\n  \n  /* Hide default HTML checkbox */\n  .form_billing_toggle input[type="checkbox"] {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .form_billing_toggle_slider {\n    position: absolute;\n    cursor: pointer;\n    inset: 0;\n    background-color: var(--marine-blue);\n    border-radius: 50px;\n    transition: all 0.4s linear;\n  }\n  \n  .form_billing_toggle_slider:before {\n    position: absolute;\n    content: "";\n    height: 17px;\n    width: 17px;\n    top: 4px;\n    left: 4px;\n    background-color: white;\n    border-radius: 50px;\n    transition: all 0.2s linear;\n  }\n  \n  .form_billing_toggle input:checked + .form_billing_toggle_slider:before {\n    transform: translateX(25px);\n    bottom: 0;\n  }',""]);const l=a},784:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,".form_step_buttons {\n    width: 100%;\n    height: 10%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  \n  .form_step_buttons.form_step1_button {\n    justify-content: flex-end;\n  }\n  \n  .form_next_btn {\n    width: 100px;\n    height: 40px;\n    background-color: var(--marine-blue);\n    color: var(--white);\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: linear 0.3s;\n  }\n  \n  .form_previous_btn {\n    background: none;\n    border: none;\n    color: var(--cool-gray);\n    transition: linear 0.3s;\n  }\n  \n  .form_next_btn:hover {\n    opacity: 0.8;\n  }\n  \n  .form_previous_btn:hover {\n    color: var(--marine-blue);\n  }",""]);const l=a},944:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,".form_confirmed_container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .form_confirmed_container * {\n    margin: 0.5em auto;\n  }\n  \n  .form_confirmed_container > h1 {\n    color: var(--marine-blue);\n    font-size: 1.8rem;\n  }\n  \n  .form_confirmed_container > p {\n    color: var(--cool-gray);\n    text-align: center;\n    line-height: 1.6em;\n    font-size: 0.9rem;\n  }",""]);const l=a},816:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,".form_step_inputs_container {\n    width: 100%;\n    flex-grow: 1;\n    height: auto;\n    margin-top: 20px;\n  }\n  \n  .form_step_input_group {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin: 20px 0;\n    position: relative;\n  }\n  \n  .form_step_input_group label {\n    color: var(--marine-blue);\n    margin-bottom: 0.5rem;\n    font-size: 0.8rem;\n  }\n  \n  .form_step_input {\n    width: 100%;\n    height: 40px;\n    border-radius: 5px;\n    padding: 0 10px;\n    border: 1px solid var(--light-gray);\n  }\n  .form_step_input::placeholder {\n    color: var(--light-gray);\n  }\n  \n  .form_step_input:focus {\n    outline: 1px solid var(--purplish-blue);\n  }\n  \n  .form_step_error_msg {\n    position: absolute;\n    right: 0;\n    color: var(--strawberry-red);\n  }\n  \n  .form_step_input-error {\n    border: 1px solid var(--strawberry-red) !important;\n  }",""]);const l=a},407:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'.form_add-ons_container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    padding: 3em 0;\n  }\n  \n  .form_add-one_element {\n    display: flex;\n    align-items: center;\n    flex-grow: 1;\n    justify-content: flex-start;\n    position: relative;\n    border: 1px solid var(--light-gray);\n    border-radius: 10px;\n    padding: 1.2em;\n  }\n  \n  .form_add-one_element > label {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  \n  .form_add-one_element:has(input[type="checkbox"]:checked) {\n    border: 1px solid var(--purplish-blue);\n    background-color: var(--magnolia);\n  }\n  \n  .form_add-one_input {\n    display: flex;\n  }\n  \n  .form_add-one_input > input[type="checkbox"] {\n    margin-right: 1.2em;\n  }\n  \n  .form_add-one_details h4 {\n    color: var(--marine-blue);\n  }\n  .form_add-one_details small {\n    color: var(--cool-gray);\n  }\n  .form_add-one_price {\n    color: var(--purplish-blue);\n  }',""]);const l=a},165:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'\n\n.form_plan_option {\n    width:100%; \n  }\n  \n  .form_plan_option > input[type="radio"] {\n    display: none;\n  }\n  \n  .form_plan_option > input[type="radio"] ~ label {\n    flex: 1 1 0px;\n    height: 180px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    cursor: pointer;\n    border: 1px solid var(--light-gray);\n    border-radius: 10px;\n    padding: 1em;\n    transition: linear 0.3s;\n  \n  }\n  \n  .form_plan_option > input[type="radio"]:checked ~ label {\n    border-color: var(--purplish-blue);\n    background-color: var(--magnolia);\n  }\n  \n  .form_plan_option > input[type="radio"] ~ label:hover {\n    border-color: var(--purplish-blue);\n  }\n  \n  .form_plan_option_info > h3 {\n    margin: 0.2em 0;\n    color: var(--marine-blue);\n  }\n  \n  .form_plan_option_price {\n    color: var(--cool-gray);\n  }',""]);const l=a},271:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,".form_summary_container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n  \n  .form_summary_calculation {\n    flex-basis: 1;\n    min-height: 50%;\n    background-color: var(--magnolia);\n    padding: 1.5em;\n    border-radius: 10px;\n    margin-top: 2em;\n  }\n  \n  .form_summary_selected_plan {\n    flex-basis: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 1.5em;\n    border-bottom: 1px solid var(--light-gray);\n  }\n  \n  .form_summary_plan_details > h4 {\n    color: var(--marine-blue);\n    font-weight: 700;\n  }\n  \n  .form_summary_plan_details > button {\n    width: max-content;\n    margin-top: 0.5em;\n    background: none;\n    border: none;\n    color: var(--cool-gray);\n    border-bottom: 2px solid var(--cool-gray);\n    cursor: pointer;\n    transition: color 0.3s linear;\n  }\n  \n  .form_summary_plan_details > button:hover {\n    color: var(--purplish-blue);\n  }\n  \n  .form_summary_plan_price {\n    color: var(--marine-blue);\n    font-weight: 700;\n  }\n  \n  .form_summary_selected_add-ones {\n    flex-basis: 1;\n    padding-top: 1.5em;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n  \n  .form_summary_add-one {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  \n  .form_summary_add-one_name {\n    color: var(--cool-gray);\n  }\n  \n  .form_summary_add-one_price {\n    color: var(--marine-blue);\n  }\n  \n  .form_summary_total {\n    flex-basis: 1;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1.5em;\n  }\n  \n  .form_summary_total_name {\n    color: var(--cool-gray);\n  }\n  \n  .form_summary_total_price {\n    color: var(--purplish-blue);\n    font-size: 1.3rem;\n    font-weight: 700;\n  }",""]);const l=a},142:(n,e,t)=>{t.d(e,{A:()=>b});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),l=t(936),s=t(934),c=t(165),d=t(784),p=t(407),u=t(271),m=t(816),f=t(944),h=t(743),g=a()(o());g.i(l.A),g.i(s.A),g.i(c.A),g.i(d.A),g.i(p.A),g.i(u.A),g.i(m.A),g.i(f.A),g.i(h.A),g.push([n.id,':root {\n  --marine-blue: hsl(213, 96%, 18%);\n  --purplish-blue: hsl(243, 100%, 62%);\n  --pastel-blue: hsl(228, 100%, 84%);\n  --light-blue: hsl(206, 94%, 87%);\n  --strawberry-red: hsl(354, 84%, 57%);\n  --cool-gray: hsl(231, 11%, 63%);\n  --light-gray: hsl(229, 24%, 87%);\n  --magnolia: hsl(217, 100%, 97%);\n  --alabaster: hsl(231, 100%, 99%);\n  --white: hsl(0, 0%, 100%);\n  --black: hsl(0, 0%, 0%);\n}\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Ubuntu", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  align-items: flex-start;\n  overflow-x: hidden;\n  background-color: var(--magnolia);\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type="number"] {\n  -moz-appearance: textfield;\n}\n\nbutton:disabled {\n  background-color: var(--cool-gray);\n  cursor: default;\n}\n\nbutton:disabled:hover {\n  opacity: 1;\n}\n\n.main_container {\n  width: 65%;\n  height: 75svh;\n  background-color: var(--white);\n  display: flex;\n  padding: 15px;\n  margin: auto;\n  border-radius: 15px;\n  -webkit-box-shadow: 2px 17px 28px -9px rgba(179, 179, 179, 1);\n  -moz-box-shadow: 2px 17px 28px -9px rgba(179, 179, 179, 1);\n  box-shadow: 2px 17px 28px -9px rgba(179, 179, 179, 1);\n}\n\n.form_container {\n  width: 70%;\n  height: 100%;\n  padding: 3em 5em;\n}\n\n.form_wrapper {\n  height: 100%;\n}\n\n.form_step {\n  display: none;\n}\n\n.form_step-active {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.form_step_header {\n  width: 100%;\n  height: 20%;\n}\n\n.form_step_header h1 {\n  color: var(--marine-blue);\n  font-size: 2rem;\n  margin: 5px 0;\n}\n\n.form_step_header small {\n  color: var(--cool-gray);\n  font-size: 0.9rem;\n}\n\n.form_plan_options {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n}\n\n.hidden {\n  display: none;\n}',""]);const b=g},743:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),l=t(417),s=t.n(l),c=new URL(t(183),t.b),d=a()(o()),p=s()(c);d.push([n.id,`@media screen and (width <= 1280px) {\n    .main_container {\n      width: 100%;\n      height: auto;\n      padding: 0;\n      flex-direction: column;\n      box-shadow: none;\n      margin-top: 10em;\n    }\n    .step_container {\n      width: 100%;\n      height: 200px;\n      padding: 0 4em;\n      border-radius: 0;\n      justify-content: center;\n      align-items: center;\n      flex-direction: row;\n      position: absolute;\n      top: 0;\n      z-index: -1;\n      background-image: url(${p});\n      background-size: cover;\n    }\n  \n    .step_item {\n      justify-content: center;\n    }\n  \n    .step_content {\n      display: none;\n    }\n  \n    .form_container {\n      width: 100%;\n      height: auto;\n      padding: 1.5em 1.5em 7em;\n      margin: 0;\n      position: static;\n      z-index: 1000;\n    }\n  \n    .form_step_buttons {\n      width: 100%;\n      padding: 0 1.5em;\n      position: fixed;\n      bottom: 0;\n      left: 50%;\n      transform: translate(-50%);\n      background-color: var(--white);\n      -webkit-box-shadow: 0px 18px 34px 13px rgba(179, 179, 179, 1);\n      -moz-box-shadow: 0px 18px 34px 13px rgba(179, 179, 179, 1);\n      box-shadow: 0px 18px 34px 13px rgba(179, 179, 179, 1);\n    }\n  \n    .form_plan_options {\n      flex-direction: column;\n      margin-top: 3em;\n    }\n  \n    .form_plan_option > input[type="radio"] ~ label{\n      width: 100%; \n      height:100px;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start;\n    }\n  \n    .form_plan_option_info{\n      margin-left: 1em;\n    }\n  \n    .form_billing_options {\n      margin-top: 2em;\n      padding:0 3em; \n    }\n  }\n  \n  @media screen and (min-width:769px) and (max-width: 1280px){\n    .step_container{\n      padding: 0 14em; \n    }\n    .form_container{\n      padding: 6em;\n    }\n    .form_billing_options {\n      margin-top: 2em;\n      padding:0 10em; \n    }\n  } `,""]);const u=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],l=0;l<n.length;l++){var s=n[l],c=r.base?s[0]+r.base:s[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=l,e.splice(l,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);e[l].references--}for(var s=r(n,o),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},867:(n,e,t)=>{n.exports=t.p+"./images/bg-sidebar-desktop.svg"},183:(n,e,t)=>{n.exports=t.p+"./images/bg-sidebar-mobile.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),l=t(659),s=t.n(l),c=t(56),d=t.n(c),p=t(540),u=t.n(p),m=t(113),f=t.n(m),h=t(142),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),o()(h.A,g),h.A&&h.A.locals&&h.A.locals,t(867),t(183);const b=document.querySelector("[data-multistep-form]"),_=document.getElementById("billing-toggle");let y=[...document.querySelectorAll(".plan_option")];const x=[...document.querySelectorAll(".pick-one-checkbox")],v={yearly:"yr",monthly:"mo"};function w(){const n=_.checked,e=n?"yearly":"monthly";return{isYearly:n,billingType:e,suffix:v[e]}}function k(n,e,t){if(!("string"==typeof n&&Array.isArray(e)&&t instanceof HTMLElement))return;const r=document.createElement(n);return r.classList.add(...e),t.appendChild(r),r}function A(n,e,t){if(!(n instanceof HTMLElement)||"string"!=typeof e||"string"!=typeof t)return;const r=n.getAttribute(e);return r?`$${r}/${t}`:null}function E(n,e){n instanceof HTMLElement&&"string"==typeof e||console.error("Invalid arguments passed to the function"),n.innerText=e}function S(){if(Array.isArray(x))try{!function(n){const{billingType:e,suffix:t}=w(),r=b.querySelector(".form_summary_selected_add-ones");r.innerHTML="",n.forEach((n=>{const o=k("li",["form_summary_add-one"],r),i=k("div",["form_summary_add-one_name"],o),a=k("div",["form_summary_add-one_price"],o),l=n.getAttribute("data-name"),s=A(n,`data-${e}-price`,t);i&&E(i,l),a&&E(a,s)}))}(x.filter((n=>n.checked)))}catch(n){console.error("Error filtering pickOnes:",n)}}const T=new class{constructor(){this.value=0}getTotalValue(){return this.value<0&&console.error("Invalid value: check your functions"),this.value}incrementValue(n){return"string"!=typeof n&&console.error("Invalid value type"),this.value+=parseInt(n)}decrementValue(n){return"string"!=typeof n&&console.error("Invalid value type"),this.value-=parseInt(n)}resetCounter(){return this.value=0}};function j(){const{isYearly:n,suffix:e}=w();!function(n){const e=b.querySelector(".billing_snippet");e&&E(e,n?"year":"month")}(n),function(n,e){const t=b.querySelector(".form_summary_total_price"),r=T.getTotalValue();r&&t&&E(t,`$${r}/${e}`)}(0,e)}function q(n){const e=n.target,{billingType:t}=w(),r=e.dataset[`${t}Price`];r&&(e.checked&&T.incrementValue(r),e.checked||T.decrementValue(r)),j(),S()}function L(n,e,t){n instanceof HTMLElement&&"string"==typeof e&&n.classList.toggle(e,t)}const $=b.querySelectorAll("[data-input-step1]"),z=new class{constructor(n,e){this.form=n,this.inputs=e}getValidityStatus(){return[...this.inputs].every((n=>n.checkValidity()))}validateOnBlur(){this.inputs.forEach((n=>{n.addEventListener("blur",(()=>{L(n,"form_step_input-error",!n.checkValidity()),L(n.nextElementSibling,"hidden",n.checkValidity())}))}))}validateOnClick(){const n=this.form.querySelector("[data-next-step1]");this.inputs.forEach((e=>{n.addEventListener("click",(()=>{let n=e.checkValidity();L(e,"form_step_input-error",!n),L(e.nextElementSibling,"hidden",n)}))}))}}(b,$),I=[...b.querySelectorAll("[data-step]")],M=document.querySelector("[data-step-menu]").querySelectorAll("[data-step-number]");let C=I.findIndex((n=>n.matches("[form_step-active]")));function V(n){I.forEach(((e,t)=>{L(e,"form_step-active",t===n)})),M.forEach(((e,t)=>{L(e,"step_number-active",t===n)}))}function H(n){if(!n)return;const{billingType:e,suffix:t}=w(),r=b.querySelector(".form_summary_selected_plan");!function(n,e,t){const r=n.querySelector(".form_summary_name"),o=e.dataset.name;r&&E(r,`${o} (${t})`)}(r,n,e),function(n,e,t,r){const o=n.querySelector(".form_summary_plan_price");if(o){const n=A(e,`data-${t}-price`,r);n&&E(o,n)}}(r,n,e,t),function(n,e){const t=n.dataset[`${e}Price`];T.resetCounter(),T.incrementValue(t),x.forEach((n=>{n.checked=!1,S()})),j()}(n,e)}function O(n){if(Array.isArray(n))try{H(n.find((n=>n.checked))),n.forEach((e=>{e.addEventListener("change",(()=>{let e=n.find((n=>n.checked));H(e)}))}))}catch(n){console.error("Error in findSelectedPlan",n)}}C<0&&(C=0,V(C)),O(y),b.addEventListener("click",(n=>{if(n.target.matches("[data-next]"))try{z.getValidityStatus()?(C+=1,V(C)):console.warn("Form is invalid, cannot proceed to the next step")}catch(n){console.error("Error checking validity:",n)}else n.target.matches("[data-previous]")&&(C-=1,V(C))})),z.validateOnBlur(),z.validateOnClick(),x.forEach((n=>{n.addEventListener("change",q)})),_.addEventListener("change",(function(){O(y),function(){const{isYearly:n}=w();[{badge:b.querySelector("[data-monthly-billing]"),isActive:!n},{badge:b.querySelector("[data-yearly-billing]"),isActive:n}].forEach((({badge:n,isActive:e})=>{n&&L(n,"active",e),n||console.warn("Billing badge element not found")}))}(),j(),S(),function(){const{isYearly:n,billingType:e,suffix:t}=w();y.forEach((r=>{const o=r.closest(".form_plan_option");!function(n,e){if(n){const t=n.querySelector(".form_yearly_discount_badge");t&&L(t,"hidden",!e)}}(o,n);const i=o.querySelector(".form_plan_option_price");if(i){const n=A(r,`data-${e}-price`,t);n&&E(i,n)}})),function(n,e){b.querySelectorAll(".form_add-one_element").forEach((t=>{const r=t.querySelector(".pick-one-checkbox"),o=t.querySelector("[data-add-one-price]");if(r&&o){const t=A(r,`data-${n}-price`,e);t&&E(o,t)}}))}(e,t)}()})),document.getElementById("change-plan-btn").addEventListener("click",(n=>{!function(n){n.preventDefault(),C=1,j(),V(C)}(n)}))})();