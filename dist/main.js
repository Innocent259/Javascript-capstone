"use strict";(self.webpackChunkjavascript_capstone=self.webpackChunkjavascript_capstone||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([n.id,"* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #111010;\n  font-family: 'Roboto Condensed', sans-serif;\n  color: #fff;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 3rem 5rem;\n  background-color: #1d1c1c;\n  height: 5rem;\n}\n\n.logo-movie {\n  display: flex;\n  gap: 4rem;\n  align-items: center;\n}\n\n.img-logo {\n  height: 4rem;\n  width: 4rem;\n}\n\nli {\n  list-style: none;\n}\n\n.links {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.main-content {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-row-gap: 1.5rem;\n  padding: 2rem 5rem;\n}\n\n.likeBtn {\n  width: 24px;\n  height: 24px;\n}\n\n.popup {\n  background-color: #1d1c1c;\n  padding: 3rem;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n}\n\n.popup-container {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.image-cancelbtn {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.id-image {\n  width: 90%;\n  height: 50vh;\n}\n\n.cancel-img {\n  width: 40px;\n  height: 40px;\n  background-color: rgb(231, 54, 54);\n}\n\n.sub-details {\n  display: flex;\n  justify-content: space-between;\n}\n\n.comment-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-self: flex-start;\n}\n\n.footer {\n  height: 3rem;\n  background-color: #1d1c1c;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n",""]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var l=0;l<n.length;l++){var m=[].concat(n[l]);a&&o[m[0]]||(void 0!==i&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=i),t&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=t):m[2]=t),r&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=r):m[4]="".concat(r)),e.push(m))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},o=[],c=0;c<n.length;c++){var s=n[c],l=a.base?s[0]+a.base:s[0],m=i[l]||0,d="".concat(l," ").concat(m);i[l]=m+1;var p=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=r(u,a);a.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=a(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=t(i[o]);e[c].references--}for(var s=a(n,r),l=0;l<i.length;l++){var m=t(i[l]);0===e[m].references&&(e[m].updater(),e.splice(m,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},491:(n,e,t)=>{var a=t(379),r=t.n(a),i=t(795),o=t.n(i),c=t(569),s=t.n(c),l=t(565),m=t.n(l),d=t(216),p=t.n(d),u=t(589),f=t.n(u),h=t(426),v={};v.styleTagTransform=f(),v.setAttributes=m(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=p(),r()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const g=t.p+"df945fde705454cbd07d.jpeg",y=t.p+"6af010327c10a0167290.svg",b="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi",x="pfgR2udmM1C7KAakhBx1",w="72QQXo1DqQdAodZkhqZc",k=async n=>{try{const e=await fetch(`${b}/apps/${x}/comments?item_id=${n}`);return await e.json()}catch(n){return console.error("Error fetching comments:",n),[]}};(async()=>{const n=await fetch("https://api.tvmaze.com/shows"),e=(await n.json()).slice(0,30);document.querySelector(".movies-length").textContent=`Movies(${e.length})`;const t=document.querySelector(".main-content");e.forEach((n=>{const e=document.createElement("div");e.classList.add("list-container"),e.innerHTML=`\n      <img src="${n.image.medium}" alt="image"/> \n      <div class="listLikeGroup">\n        <div class="elementName">\n          ${n.name}\n        </div>\n        <div class="likeCounter">\n          <img class="likeImg likeBtn" src="${g}" alt="like logo"/> \n          <p class= "likes" >likes()</p>\n        </div>\n      </div>\n      <button class="commentBtn">Comments</button>\n    `;const a=e.querySelector(".likeBtn"),r=e.querySelector(".likes"),i=async()=>{const n=await(async()=>{try{const n=await fetch(`${b}/apps/${w}/likes`);return await n.json()}catch(n){return console.error("Error fetching comments:",n),[]}})();r.textContent=`Likes(${n.length})`};i(),a.addEventListener("click",(async()=>{await(async()=>{await fetch(`${b}/apps/${w}/likes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:"item1"})})})(),i()})),e.querySelector(".commentBtn").addEventListener("click",(async()=>{const e=document.createElement("div");e.className="popup";const t=await k(n.id),a=Array.isArray(t)?t.map((n=>`<ul>${n.username}: ${n.comment}</ul>`)).join(""):"";e.innerHTML=`\n        <div class="popup-container">\n          <div class="image-cancelbtn">\n            <img src="${n.image.original}" class="id-image">\n            <img src="${y}" class="cancel-img">\n          </div>\n          <h2 class="movie">${n.name}</h2>\n          <span class="sub-details">\n            <p>Release date: ${n.premiered}</p>\n            <a href="${n.officialSite}">Watch Movie</a>\n          </span>\n          <div class="comment-container">\n            <div class="comments">\n              <p>Comments(${t.length})</p>\n              ${a}\n            </div>\n            <h2 class="comment-title">Add Comment</h2>\n            <form class="form">\n              <input type="text" id="usernameInput" placeholder="Username">\n              <textarea id="commentInput" placeholder="Your insight"></textarea>\n              <button type="submit" class="submit-btn">Comment</button>\n            </form>\n          </div>\n        </div>\n      `,e.querySelector(".cancel-img").addEventListener("click",(()=>{e.remove()})),document.body.prepend(e);const r=e.querySelector(".form"),i=r.querySelector("#usernameInput"),o=r.querySelector("#commentInput");r.addEventListener("submit",(async t=>{t.preventDefault();const a=i.value,r=o.value;await(async n=>{await fetch(`${b}/apps/${x}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})})({item_id:n.id,username:a,comment:r});const c=await k(n.id),s=Array.isArray(c)?c.map((n=>`<ul>${n.username}: ${n.comment}</ul>`)).join(""):"";e.querySelector(".comments").innerHTML=`\n          <p>Comments(${c.length})</p>\n          ${s}\n        `,i.value="",o.value=""}))})),t.appendChild(e)}))})(),k()}},n=>{n(n.s=491)}]);