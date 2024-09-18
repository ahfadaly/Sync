"use strict";

// add class active -----------
let navlinks = document.querySelectorAll(".header .list li a");

navlinks.forEach((item) => {
  item.addEventListener(`click`, () => {
    document.querySelector(".header .list li a.active").classList.remove("active");
    item.classList.add("active");
  });
});

$(`document`).ready(() => {
  // testimonials
  $(".testimonials .owl-carousel").owlCarousel({
    stagePadding: 250,
    loop: true,
    margin: 30,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    nav: true,
    navText: [
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left fa-lg"></i></button>',
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-right fa-lg"></i></button>',
    ],
    responsive: {
      0: {
        stagePadding: 0,
        items: 1,
      },
      769: {
        stagePadding: 0,
        items: 2,
      },
      1200: {
        items: 1,
      },
    },
  });
});

// AOS ANIMATION ON SCROLL
AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
});
