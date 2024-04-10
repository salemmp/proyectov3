const btn_open=document.getElementById("btn_open")
const btn_close=document.getElementById("btn_close")
const nav =document.getElementById("nav_mobile")

btn_open.addEventListener("click",()=>{
    nav.style.right="0px"
})
btn_close.addEventListener("click",()=>{
    nav.style.right="-190px"
})



function siguiente(){
    window.open("index.html");

}