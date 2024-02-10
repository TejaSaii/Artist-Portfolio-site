const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobileNav");
hamburger.addEventListener("click", () => {
   document.querySelector(".bar1").classList.toggle("animateBar1");
   document.querySelector(".bar2").classList.toggle("animateBar2");
   document.querySelector(".bar3").classList.toggle("animateBar3");

   mobileNav.classList.toggle("openDrawer");
})