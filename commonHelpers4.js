import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as r}from"./assets/vendor-ec4be6ce.js";class m{constructor({key:e,data:o=""}={}){this.key=e,this._data=o}get data(){try{const e=localStorage.getItem(this.key);return e?JSON.parse(e):{}}catch(e){console.log(e.message)}}set data(e){try{localStorage.setItem(this.key,JSON.stringify(e))}catch(o){console.log(o.message)}}reset(){localStorage.removeItem(this.key)}}const a=document.querySelector(".feedback-form"),n={key:"feedback-form-state"},s=new m(n),c=()=>{const{email:t,message:e}=a.elements;s.data={email:t.value,message:e.value}},l=t=>{t.preventDefault(),a.reset(),console.log(s.data),s.reset()},i=()=>{const{email:t,message:e}=s.data;a.elements.email.value=t||"",a.elements.message.value=e||""};i();a.addEventListener("input",r(c,500));a.addEventListener("submit",l);
