import"./assets/common-f893a7e2.js";const r=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");let a=null;const t=e=>{const n=e.disabled;e.disabled=!n},c=()=>`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`,l=({interval:e})=>{a=setInterval(()=>{const n=c();document.body.style.background=n},e)};t(o);r.addEventListener("click",()=>{t(o),t(r),l({interval:1e3})});o.addEventListener("click",()=>{t(r),t(o),clearInterval(a)});
