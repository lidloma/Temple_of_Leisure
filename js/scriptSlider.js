var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween:0,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      768: {
          slidesPerView: 3, 
          spaceBetween: 30 
      }
  },
  on: {
      resize: function () {
          swiper.changeDirection(getDirection());
      },
  },
});
var swiper = new Swiper(".mySwiper2", {
  effect: "coverflow",
  slidesPerView: 1,
  centeredSlides: false, 
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false 
  },
  allowTouchMove: false, 
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3, 
      spaceBetween: 30 
    }
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});



