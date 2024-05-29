import"./assets/modulepreload-polyfill-3cfb730f.js";import{T as E,b,S as C,c as x}from"./assets/vendor-ec4be6ce.js";const M="https://pixabay.com/api/",k="15249615-5ccf49bef51d4f01888f64cb2",f=40,d=({message:t,customClass:e})=>{const o=document.getElementById("toastContainer"),s=document.createElement("div");s.classList.add("toast","align-items-center",e),s.setAttribute("role","alert"),s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true"),s.innerHTML=`
      <div class="d-flex">
        <div class="toast-body text-white">
            ${t}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
  `,o.appendChild(s),new E(s,{delay:2e3}).show()};b.defaults.baseURL=M;const q={key:k,per_page:f,safesearch:!0,image_type:"photo",orientation:"horizontal"},p=async({searchQuery:t,currentPage:e}={})=>{const o=await b({params:{...q,q:t,page:e}}),{data:s,status:i}=o,a=Math.ceil(s.total/f),r=e>=a||a===1;return i!==200?(d({message:"Sorry, something went wrong on server.",customClass:"bg-danger"}),{hits:s.hits,isEndOfCollection:r}):s.total?(e<2&&d({message:`Hooray! We found ${s.totalHits} images.`,customClass:"bg-success"}),r?(d({message:"End of collection.",customClass:"bg-warning"}),{hits:s.hits,isEndOfCollection:r}):{hits:s.hits,isEndOfCollection:r}):(d({message:"Sorry, there are no images matching your search query. Please try again.",customClass:"bg-info"}),{hits:s.hits,isEndOfCollection:r})},v=t=>t.reduce((e,o)=>{const{webformatURL:s,webformatWidth:i,webformatHeight:a,largeImageURL:r,tags:u,likes:l,views:S,comments:T,downloads:A}=o;return e+=`<a
          class="info-card d-flex flex-column text-decoration-none"
          href="${r}"
        >
          <div class="rounded overflow-hidden flex-grow-1 shadow">
            <img
              class="info-ill"
              src="${s}"
              alt="${u}"
              width="${i}"
              heigth="${a}"
            />
          </div>
          <div class="info-list d-grid text-center">
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Likes: ${l}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="/sprite.svg#likes"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Views: ${S}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="/sprite.svg#views"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Comments: ${T}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="/sprite.svg#comment"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Downloads: ${A}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="/sprite.svg#download"></use>
              </svg>
            </button>
          </div>
        </a>`},""),$=(t="[data-gallery]")=>{if(!t)return;const{height:e}=document.querySelector("[data-gallery]").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})},y=()=>localStorage.getItem("theme"),B=t=>localStorage.setItem("theme",t),m=()=>{const t=y();return t||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},h=t=>{t==="auto"?document.documentElement.setAttribute("data-bs-theme",window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):document.documentElement.setAttribute("data-bs-theme",t)};h(m());const g=(t,e=!1)=>{const o=document.querySelector("#bd-theme");if(!o)return;const s=document.querySelector("#bd-theme-text"),i=document.querySelector(".theme-icon-active use"),a=document.querySelector(`[data-bs-theme-value="${t}"]`),r=a.querySelector("svg use").getAttribute("href");document.querySelectorAll("[data-bs-theme-value]").forEach(l=>{l.classList.remove("active"),l.setAttribute("aria-pressed","false")}),a.classList.add("active"),a.setAttribute("aria-pressed","true"),i.setAttribute("href",r);const u=`${s.textContent} (${a.dataset.bsThemeValue})`;o.setAttribute("aria-label",u),e&&o.focus()};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{const t=y();t!=="light"&&t!=="dark"&&h(m())});window.addEventListener("DOMContentLoaded",()=>{g(m()),document.querySelectorAll("[data-bs-theme-value]").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-bs-theme-value");B(e),h(e),g(e,!0)})})});const n={searchForm:document.forms.searchForm,container:document.querySelector("[data-gallery]"),loadMoreBtn:document.querySelector("[data-load-more]")},c={currentPage:1,searchQuery:""},w=t=>{new C(t).refresh()},L=t=>{[...document.querySelectorAll(t)].map(o=>new x(o))},P=async t=>{t.preventDefault();const e=t.currentTarget;c.searchQuery=e.elements.searchInput.value,c.currentPage=1;try{n.container.innerHTML="",n.loadMoreBtn.classList.add("d-none");const{hits:o,isEndOfCollection:s}=await p(c);if(n.container.insertAdjacentHTML("beforeend",v(o)),w("[data-gallery] a"),L('[data-bs-toggle="tooltip"]'),s)return;n.loadMoreBtn.classList.remove("d-none")}catch(o){console.log(o)}finally{e.reset()}},I=async t=>{try{c.currentPage+=1;const{hits:e,isEndOfCollection:o}=await p(c);n.container.insertAdjacentHTML("beforeend",v(e)),w("[data-gallery] a"),L('[data-bs-toggle="tooltip"]'),$("[data-gallery]"),o&&n.loadMoreBtn.classList.add("d-none")}catch(e){console.log(e)}};n.searchForm.addEventListener("submit",P);n.loadMoreBtn.addEventListener("click",I);
