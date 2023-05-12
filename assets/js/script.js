const bar=document.querySelector(".bar")
const resp=document.querySelector(".resp")
const header=document.querySelector("header")
bar.addEventListener("click",function () {
    resp.classList.toggle("responsive")
    header.classList.toggle("header_bg")
})

const category1 = document.querySelector(".category1")
const triangle = document.querySelector(".triangle")

triangle.addEventListener("click", function(){
    category1.classList.toggle("category2")
})