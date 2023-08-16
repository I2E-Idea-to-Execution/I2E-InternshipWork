const key = document.querySelector("#main-menu");
const s = document.querySelector(".moblie-view");
const r = document.querySelector("#close");
key.addEventListener('click' , ()=>{
    
    
    s.classList.add("show");
})
r.addEventListener('click' , ()=>{
    
    
    s.classList.remove("show");
})