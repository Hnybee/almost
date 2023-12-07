window.addEventListener("scroll",()=>{
    var some = document.querySelector(".")
    if(window.scrollY > 100){
        some.style.display = "flex"
    }else{
        some.style.display = "none"
    }
})