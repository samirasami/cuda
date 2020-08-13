$(document).ready(function () {
      // owlcarousel
      $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 2000,
            responsive: {
                  0: {
                        items: 1,
                  },
                  600: {
                        items: 2,
                  },
                  768: {
                         items: 3,
                   },
                  1000: {
                        items: 4,
                  }
            }
      });
      // mixitup
      var mixer = mixitup('.mix-container');
});
// custom js start
// nav add/remove active cls
var navUl = document.querySelectorAll("nav ul li a");
navUl.forEach(function (button) {
      button.addEventListener("click",function(){
            navUl.forEach(function(btn){
                  btn.classList.remove("active");
            });
            this.classList.add("active");
      });
});
// sticky-nav
window.addEventListener("scroll", function () {
      if (window.scrollY >= 100) {
            document.querySelector(".our-nav").classList.add("sticky");
      } else if (window.scrollY <= 595) {
            document.querySelector(".our-nav").classList.remove("sticky");
      }
});
// media-nav 
var a = document.querySelectorAll("header .nav-open");
var b = document.querySelectorAll(".nav-container");
var c = document.querySelectorAll(".nav-close");
var e = document.querySelectorAll(".nav-container .nav-open");
a[0].addEventListener("click", function () {
      b[0].style.display = "flex";
});
c[0].addEventListener("click", function () {
      b[0].style.display = "none";
});
e[0].addEventListener("click", function () {
      b[0].style.display = "none";
});
// footer-js start
var footerA = document.querySelectorAll(".footer-in ul li a");
footerA.forEach(function (button) {
      button.addEventListener("click", function () {
            footerA.forEach(function (btn) {
                  btn.classList.remove("active");
            });
            this.classList.add("active");
      });
});
// footer-icon
window.addEventListener("scroll",function(){
      if(window.scrollY >= 608){
            document.querySelector("footer i").classList.add("fa-angle-up");
      }
      else if (window.scrollY <= 157) {
             document.querySelector("footer i").classList.remove("fa-angle-up");
      }
});
document.querySelector("footer i").addEventListener("click",function(){
      window.scrollTo({top:0,behavior:"smooth"});
});

