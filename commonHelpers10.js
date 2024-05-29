import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as a,a as d}from"./assets/vendor-ec4be6ce.js";const i="https://api.thecatapi.com/v1",p="live_sK4BiuzbT3GlzrkrrMgKCr9ro3L5jXUgL4mXhpGdxvocEr6JVnEDrjNnNFDFuyVh",c={title:"❌ ",message:"Oops! Something went wrong! Try reloading the page!",backgroundColor:"tomato",icon:"",messageColor:"white",position:"center",timeout:900,close:!1,animateInside:!1,progressBar:!1,transitionIn:"bounceInUp"},n=()=>{s.errorMsg.innerHTML=`<div>
    <div class="frame">
      <iframe
        src="https://giphy.com/embed/jpctIaLRTNCKKGiyPd/video"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen=""
      ></iframe>
    </div>
    <p>Oops...</p>
  </div>`},l={method:"GET",headers:{"Content-Type":"application/json","x-api-key":p}},m=async()=>{try{const e=await fetch(`${i}/breeds`,l);if(!e.ok)throw new Error;return e.json()}catch(e){a.error(c),setTimeout(n,1e3),console.log(e)}},g=async e=>{try{const r=await fetch(`${i}/images/search?breed_ids=${e}`,l),t=await r.json();if(!r.ok||!t.length)throw new Error;return t}catch(r){a.error(c),setTimeout(n,1e3),console.log(r)}},s={select:document.querySelector("select.breed-select"),cardWrapper:document.querySelector(".cat-info"),backdrop:document.querySelector(".backdrop"),errorMsg:document.querySelector(".error-msg")},h=e=>e.reduce((r,{name:t,id:o})=>r+=`<option value="${o}">${t}</option>`,'<option data-placeholder="true"></option>'),u=({breeds:e,url:r})=>{const[t]=e;return`<article class="cat-card">
    <div class="cat-card-left">
      <img
        class="cat-card-img"
        src="${r}"
        alt="${t.name}"
      />
    </div>
    <div class="cat-card-right">
      <h2 class="cat-card-title">${t.name}</h2>
      <p class="cat-card-desc">${t.description}</p>
      <p class="cat-card-tepm">
        <strong>Temperament:</strong>
        ${t.temperament}
      </p>
    </div>
  </article>`},f=async e=>{try{s.cardWrapper.innerHTML="",s.errorMsg.innerHTML="";const{value:r}=e[0];s.backdrop.classList.toggle("is-hidden");const t=await g(r);if(!t)return;const o=t[0];s.cardWrapper.innerHTML=u(o)}catch(r){a.error(c),setTimeout(n,1e3),console.log(r)}finally{s.backdrop.classList.toggle("is-hidden")}},y=async()=>{const e=await m();if(!e){s.select.style.display="none",s.backdrop.classList.toggle("is-hidden");return}s.backdrop.classList.toggle("is-hidden"),s.select.innerHTML=await h(e),new d({select:"select.breed-select",settings:{placeholderText:"Select the cat breed"},events:{afterChange:r=>{f(r)}}})};y();
