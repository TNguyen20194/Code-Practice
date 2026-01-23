const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop

function fixNav() {

   if(window.scrollY  >= topOfNav) {
      // Add padding to replace lost space caused by position: fixed
      document.body.style.paddingTop = nav.offsetHeight + "px";
      document.body.classList.add("fixed-nav");
   } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove("fixed-nav")
   }
}

window.addEventListener("scroll", fixNav)