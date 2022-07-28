//menu
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')
menu.addEventListener('click',()=>{
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
//end of menu
// section //
let image=document.getElementById("picture");
let images=['gym-2.jpg','gym-3.jpg','gym-4.jpg'];
setInterval (function(){
    let random=Math.floor(Math.random()*3);
    image.src=images[random];
},1000);

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });