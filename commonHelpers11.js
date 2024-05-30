import"./assets/modulepreload-polyfill-3cfb730f.js";import{T as $,b as f,S as C,c as M}from"./assets/vendor-ec4be6ce.js";const k="https://pixabay.com/api/",q="15249615-5ccf49bef51d4f01888f64cb2",p=40,d=({message:t,customClass:e})=>{const o=document.getElementById("toastContainer"),s=document.createElement("div");s.classList.add("toast","align-items-center",e),s.setAttribute("role","alert"),s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true"),s.innerHTML=`
      <div class="d-flex">
        <div class="toast-body text-white">
            ${t}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
  `,o.appendChild(s),new $(s,{delay:2e3}).show()};f.defaults.baseURL=k;const x={key:q,per_page:p,safesearch:!0,image_type:"photo",orientation:"horizontal"},v=async({searchQuery:t,currentPage:e}={})=>{const o=await f({params:{...x,q:t,page:e}}),{data:s,status:c}=o,a=Math.ceil(s.total/p),r=e>=a||a===1;return c!==200?(d({message:"Sorry, something went wrong on server.",customClass:"bg-danger"}),{hits:s.hits,isEndOfCollection:r}):s.total?(e<2&&d({message:`Hooray! We found ${s.totalHits} images.`,customClass:"bg-success"}),r?(d({message:"End of collection.",customClass:"bg-warning"}),{hits:s.hits,isEndOfCollection:r}):{hits:s.hits,isEndOfCollection:r}):(d({message:"Sorry, there are no images matching your search query. Please try again.",customClass:"bg-info"}),{hits:s.hits,isEndOfCollection:r})},u="/goit-advancedjs/sprite.svg",y=t=>t.reduce((e,o)=>{const{webformatURL:s,webformatWidth:c,webformatHeight:a,largeImageURL:r,tags:m,likes:l,views:T,comments:A,downloads:E}=o;return e+=`<a
          class="info-card d-flex flex-column text-decoration-none"
          href="${r}"
        >
          <div class="rounded overflow-hidden flex-grow-1 shadow">
            <img
              class="info-ill"
              src="${s}"
              alt="${m}"
              width="${c}"
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
                <use href="${u}#likes"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Views: ${T}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="${u}#views"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Comments: ${A}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="${u}#comment"></use>
              </svg>
            </button>
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-custom-class="custom-tooltip"
              data-bs-title="Downloads: ${E}"
            >
              <svg class="info-icon" aria-hidden="true" width="20" height="20">
                <use href="${u}#download"></use>
              </svg>
            </button>
          </div>
        </a>`},""),B=(t="[data-gallery]")=>{if(!t)return;const{height:e}=document.querySelector("[data-gallery]").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})},w=()=>localStorage.getItem("theme"),P=t=>localStorage.setItem("theme",t),h=()=>{const t=w();return t||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},b=t=>{t==="auto"?document.documentElement.setAttribute("data-bs-theme",window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):document.documentElement.setAttribute("data-bs-theme",t)};b(h());const g=(t,e=!1)=>{const o=document.querySelector("#bd-theme");if(!o)return;const s=document.querySelector("#bd-theme-text"),c=document.querySelector(".theme-icon-active use"),a=document.querySelector(`[data-bs-theme-value="${t}"]`),r=a.querySelector("svg use").getAttribute("href");document.querySelectorAll("[data-bs-theme-value]").forEach(l=>{l.classList.remove("active"),l.setAttribute("aria-pressed","false")}),a.classList.add("active"),a.setAttribute("aria-pressed","true"),c.setAttribute("href",r);const m=`${s.textContent} (${a.dataset.bsThemeValue})`;o.setAttribute("aria-label",m),e&&o.focus()};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{const t=w();t!=="light"&&t!=="dark"&&b(h())});window.addEventListener("DOMContentLoaded",()=>{g(h()),document.querySelectorAll("[data-bs-theme-value]").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-bs-theme-value");P(e),b(e),g(e,!0)})})});const n={searchForm:document.forms.searchForm,container:document.querySelector("[data-gallery]"),loadMoreBtn:document.querySelector("[data-load-more]")},i={currentPage:1,searchQuery:""},S=new C("[data-gallery] a"),L=t=>{[...document.querySelectorAll(t)].map(o=>new M(o))},I=async t=>{t.preventDefault();const e=t.currentTarget;i.searchQuery=e.elements.searchInput.value.trim(),i.currentPage=1;try{n.container.innerHTML="",n.loadMoreBtn.classList.add("d-none");const{hits:o,isEndOfCollection:s}=await v(i);if(n.container.insertAdjacentHTML("beforeend",y(o)),S.refresh(),L('[data-bs-toggle="tooltip"]'),s)return;n.loadMoreBtn.classList.remove("d-none")}catch(o){console.log(o)}finally{e.reset()}},H=async t=>{try{i.currentPage+=1;const{hits:e,isEndOfCollection:o}=await v(i);n.container.insertAdjacentHTML("beforeend",y(e)),S.refresh(),L('[data-bs-toggle="tooltip"]'),B("[data-gallery]"),o&&n.loadMoreBtn.classList.add("d-none")}catch(e){console.log(e)}};n.searchForm.addEventListener("submit",I);n.loadMoreBtn.addEventListener("click",H);
