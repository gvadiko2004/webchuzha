gsap.registerPlugin(ScrollTrigger);

// ==========================
// Фиксируем секции при скролле
// ==========================
gsap.utils.toArray("section").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false,
    scrub: 0.5,
  });
});

// ==========================
// Анимация фоновых изображений
// ==========================
gsap.utils.toArray(".back-img-scale").forEach((img) => {
  gsap.to(img, {
    scale: 1.2,
    ease: "none",
    scrollTrigger: {
      trigger: img.closest("section"),
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
    },
  });
});

// ==========================
// Применяем .active ко всем элементам с классом .selector при скролле к футеру
// ==========================
ScrollTrigger.create({
  trigger: "section.footer",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    document.querySelectorAll(".selector").forEach((el) => {
      el.classList.add("active");
    });

    // Поочередное применение классов к .preloader-line-title
    const titles = gsap.utils.toArray(".preloader-line-title");
    titles.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("active");
      }, i * 300);

      setTimeout(() => {
        el.classList.add("active-after");
      }, i * 300 + 500);

      setTimeout(() => {
        el.classList.add("active-after-before");
      }, i * 300 + 1000);
    });
  },
  onLeaveBack: () => {
    document.querySelectorAll(".selector").forEach((el) => {
      el.classList.remove("active");
    });

    const titles = gsap.utils.toArray(".preloader-line-title");
    titles.forEach((el) => {
      el.classList.remove("active", "active-after", "active-after-before");
    });
  },
});

// ==========================
// Мерцание .logo только при видимости футера
// ==========================
const logoBlink = gsap.fromTo(
  ".header .logo",
  { opacity: 0.8 },
  { opacity: 0.2, duration: 0.7, repeat: -1, yoyo: true, ease: "power1.inOut", paused: true }
);

ScrollTrigger.create({
  trigger: "section.footer",
  start: "top center",
  end: "bottom center",
  onEnter: () => logoBlink.play(),
  onLeaveBack: () => logoBlink.pause(),
});
