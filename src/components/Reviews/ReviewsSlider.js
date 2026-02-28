var reviewsSwiper = new Swiper(".reviewsSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

