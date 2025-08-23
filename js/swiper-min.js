const swiperSlider = new Swiper(".swiper--slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  speed: 1200,
  spaceBetween: 34,

  // Включаем прокрутку колёсиком мыши
  mousewheel: {
    forceToAxis: true, // прокрутка только по основной оси
    sensitivity: 1, // чувствительность прокрутки, можно увеличить
  },

  breakpoints: {
    1080: {
      slidesPerView: 3,
    },
    440: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 1.1,
      spaceBetween: 8,
      centeredSlides: true, // исправлено с slidesCentered
    },
  },
});

//
//
//
// swiper-gallery
//
//
//

const swiperGallery = new Swiper(".swiper-gallery", {
  direction: "horizontal",
  loop: false, // выбери true или false, а не оба
  slidesPerView: 18,
  speed: 600,
  spaceBetween: 18,

  grabCursor: true,
  simulateTouch: true,
  slideToClickedSlide: true,
  touchRatio: 1,
  touchAngle: 45,

  breakpoints: {
    1440: { slidesPerView: 18 },
    1280: { slidesPerView: 14 },
    1080: { slidesPerView: 8 },
    768: { slidesPerView: 6, spaceBetween: 8 },
    440: { slidesPerView: 6, spaceBetween: 1.1 },
    320: { slidesPerView: 1.02, spaceBetween: 8, loop: false },
  },

  on: {
    slideChange: function () {
      const currentSlide = this.slides[this.activeIndex];
      const bgImage = getComputedStyle(currentSlide).backgroundImage;
      const preview = document.querySelector(".gallery-slider__bottom-server");

      if (preview && bgImage !== "none") {
        preview.style.transition = "opacity 0.4s ease";
        preview.style.opacity = 0;

        setTimeout(() => {
          const match = bgImage.match(/url\(["']?(.*?)["']?\)/);
          if (match && match[1]) {
            preview.src = match[1];
          }
          preview.style.opacity = 1;
        }, 200);
      }
    },
  },
});

// Navigation arrows
// navigation: {
//   nextEl: '.swiper-gallery .swiper-button-next',
//   prevEl: '.swiper-gallery .swiper-button-prev',
// },

// breakpoints: {
//   1080: {
//     slidesPerView: 4, // Corrected key
//   },
//   440: {
//     slidesPerView: 3, // Corrected key
//   },
//   320: {
//     slidesPerView: 1.1, // Partial slide on very small screens
//     spaceBetween: 8, // Space between slides (px)
//     slidesCentered: true,
//   },
// },
