const swiperSlider = new Swiper(".swiper--slider", {
  direction: "horizontal", // Slides move horizontally
  loop: true, // Infinite loop of slides
  slidesPerView: 4, // Show 4 slides at once
  speed: 1200, // Slide transition speed (ms)
  spaceBetween: 34, // Space between slides (px)

  autoplay: {
    delay: 3000, // 3 seconds
  },

  breakpoints: {
    1080: {
      slidesPerView: 4, // Corrected key
    },
    440: {
      slidesPerView: 3, // Corrected key
    },
    320: {
      slidesPerView: 1.1, // Partial slide on very small screens
      spaceBetween: 8, // Space between slides (px)
      slidesCentered: true,
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
  loop: true,
  slidesPerView: 18,
  speed: 600,
  spaceBetween: 18,

  grabCursor: true,
  simulateTouch: true,
  slideToClickedSlide: true,

  breakpoints: {
    1440: {
      slidesPerView: 18, // Corrected key
    },
    1280: {
      slidesPerView: 14, // Corrected key
    },
    1080: {
      slidesPerView: 8, // Corrected key
    },
    768: {
      slidesPerView: 6, // Corrected key
      spaceBetween: 8,
    },
    440: {
      spaceBetween: 1.1,
      slidesPerView: 6, // Corrected key
    },
    320: {
      slidesPerView: 1.02, // Corrected key
      spaceBetween: 8, // Space between slides (px)
      loop: false
    },
  },

  on: {
    slideChange: function () {
      const currentSlide = this.slides[this.activeIndex];
      const bgImage = currentSlide.style.backgroundImage;
      const preview = document.querySelector(".gallery-slider__bottom-server");

      if (preview) {
        // Плавная смена через opacity
        preview.style.transition = "opacity 0.4s ease";
        preview.style.opacity = 0;

        setTimeout(() => {
          preview.src = bgImage.slice(5, -2); // убираем url(" ... ")
          preview.style.opacity = 1;
        }, 200); // таймаут для плавного исчезновения
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

// // Включаем возможность листать мышью
// grabCursor: true, // Курсор изменится на "руку", показывая, что можно тянуть
// simulateTouch: true, // Разрешаем имитацию тач-событий мышью
// touchRatio: 1, // Чувствительность свайпа мышью/тачем
// touchAngle: 45, // Максимальный угол свайпа
// slideToClickedSlide: true, // Переключение на слайд по клику
