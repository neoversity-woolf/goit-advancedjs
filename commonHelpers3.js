import"./assets/common-3e181d95.js";import{P as s,t as l}from"./assets/vendor-d45db4c2.js";window.onload=()=>{const o="videoplayer-current-time",e=new s("vimeo-player");e.setColor("#ffb510");const r=JSON.parse(localStorage.getItem(o))||0,a=({seconds:n})=>{try{const t=JSON.stringify(Math.floor(n));localStorage.setItem(o,t)}catch(t){console.log(t.message)}};e.on("timeupdate",l(a,1e3)),e.setCurrentTime(r)};
