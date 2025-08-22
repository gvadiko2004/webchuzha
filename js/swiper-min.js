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
