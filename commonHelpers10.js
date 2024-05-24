import"./assets/common-db51b7af.js";import{i as c,a as d}from"./assets/vendor-d45db4c2.js";const a="https://api.thecatapi.com/v1",p="live_sK4BiuzbT3GlzrkrrMgKCr9ro3L5jXUgL4mXhpGdxvocEr6JVnEDrjNnNFDFuyVh",n={title:"❌ ",message:"Oops! Something went wrong! Try reloading the page!",backgroundColor:"tomato",icon:"",messageColor:"white",position:"center",timeout:900,close:!1,animateInside:!1,progressBar:!1,transitionIn:"bounceInUp"},i={method:"GET",headers:{"Content-Type":"application/json","x-api-key":p}},l=()=>{r.errorMsg.innerHTML=`<div>
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
  </div>`},m=async()=>{try{const e=await fetch(`${a}/breeds`,i);if(!e.ok)throw new Error;return e.json()}catch(e){c.error(n),setTimeout(l,1e3),console.log(e)}},g=async e=>{try{const t=await fetch(`${a}/images/search?breed_ids=${e}`,i);if(!t.ok)throw new Error;return t.json()}catch(t){c.error(n),setTimeout(l,1e3),console.log(t)}},r={select:document.querySelector("select.breed-select"),cardWrapper:document.querySelector(".cat-info"),backdrop:document.querySelector(".backdrop"),errorMsg:document.querySelector(".error-msg")},h=e=>e.reduce((t,{name:s,id:o})=>t+=`<option value="${o}">${s}</option>`,'<option data-placeholder="true"></option>'),u=({breeds:e,url:t})=>{const[s]=e;return`<article class="cat-card">
    <div class="cat-card-left">
      <img
        class="cat-card-img"
        src="${t}"
        alt="${s.name}"
      />
    </div>
    <div class="cat-card-right">
      <h2 class="cat-card-title">${s.name}</h2>
      <p class="cat-card-desc">${s.description}</p>
      <p class="cat-card-tepm">
        <strong>Temperament:</strong>
        ${s.temperament}
      </p>
    </div>
  </article>`},f=async e=>{const t=e.currentTarget.value;r.backdrop.classList.toggle("is-hidden");const o=(await g(t))[0];r.cardWrapper.innerHTML=u(o),r.backdrop.classList.toggle("is-hidden")},y=async()=>{const e=await m();if(!e){r.select.style.display="none",r.backdrop.classList.toggle("is-hidden");return}r.backdrop.classList.toggle("is-hidden"),r.select.innerHTML=await h(e),new d({select:"select.breed-select",settings:{placeholderText:"Select the cat breed"}})};y();r.select.addEventListener("change",f);
