gsap.registerPlugin(ScrollTrigger);

// Фиксируем и снапим все секции
gsap.utils.toArray("section").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false,
    scrub: {
      ease: "power1.inOut", // плавность во время скролла
      delay: 0.2            // "инерция"
    }
  });
});


// Анимация масштабирования только для десктопа
if (window.matchMedia("(min-width: 769px)").matches) {
  gsap.utils.toArray(".back-img-scale").forEach((img) => {
    gsap.to(img, {
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: img.closest("section"),
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  });
}

const selectors = document.querySelectorAll(".selector");
const titles = gsap.utils.toArray(".preloader-line-title");

// Анимации при скролле до футера
ScrollTrigger.create({
  trigger: "section.footer",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    selectors.forEach((el) => el.classList.add("active"));

    titles.forEach((el, i) => {
      const delay = i * 300;
      setTimeout(() => el.classList.add("active"), delay);
      setTimeout(() => el.classList.add("active-after"), delay + 500);
      setTimeout(() => el.classList.add("active-after-before"), delay + 1000);
    });
  },
  onLeaveBack: () => {
    selectors.forEach((el) => el.classList.remove("active"));
    titles.forEach((el) =>
      el.classList.remove("active", "active-after", "active-after-before")
    );
  },
});

// Мерцание логотипа
const logoBlink = gsap.fromTo(
  ".header .logo",
  { opacity: 0.8 },
  {
    opacity: 0.2,
    duration: 0.7,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    paused: true,
  }
);

ScrollTrigger.create({
  trigger: "section.footer",
  start: "top center",
  end: "bottom center",
  onEnter: () => logoBlink.play(),
  onLeaveBack: () => logoBlink.pause(),
});
