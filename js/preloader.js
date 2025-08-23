const line = document.querySelector(".preloader-line");
const preloader = document.querySelector(".preloader");
const cutTextElements = document.querySelectorAll(".cut-text-animated");

// Сначала скрываем все элементы с cut-text-animated через ширину 0 и opacity 0
gsap.set(cutTextElements, {
  width: 0,
  opacity: 0,
  overflow: "hidden",
  display: "inline-block",
});

// Анимация линии прелоадера
gsap.to(line, {
  width: "100%",
  duration: 3,
  ease: "power1.out",
  onComplete: () => {
    // Ждём 1 секунду, затем плавно скрываем прелоадер
    gsap.to(preloader, {
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      onComplete: () => {
        preloader.style.display = "none";

        // Анимация всех элементов одновременно
        cutTextElements.forEach((el) => {
          el.classList.add("active");

          // Ширина раскрывается
          gsap.to(el, {
            width: el.scrollWidth,
            duration: 1.2,
            ease: "power2.out",
          });

          // opacity появляется чуть медленнее
          gsap.to(el, {
            opacity: 1,
            duration: 2, // медленное появление
            ease: "power2.out",
          });
        });
      },
    });
  },
});

// Ждём полной загрузки страницы
window.addEventListener("load", function () {
  const preloaderTitle = document.querySelector(".preloader-line-title");
  if (preloaderTitle) {
    preloaderTitle.classList.add("active");
  }
});

window.addEventListener("load", function () {
  const preloaderTitle = document.querySelector(".preloader-line-title");
  if (preloaderTitle) {
    const tl = gsap.timeline();

    // Первый класс
    tl.add(() => {
      preloaderTitle.classList.add("active");
    }, 0); // старт сразу

    // Второй класс через 1.2 сек (можно подкорректировать под duration transition)
    tl.add(() => {
      preloaderTitle.classList.add("active-after");
    }, "+=.8");

    // Третий класс через еще 1.2 сек
    tl.add(() => {
      preloaderTitle.classList.add("active-after-before");
    }, "+=.8");
  }
});

window.addEventListener("load", function () {
  // Run after everything on the page is fully loaded
  setTimeout(() => {
    // Wait 2 seconds, then:
    // document.querySelector(".header").classList.add("active");
    document.querySelector(".hero__content-date").classList.add("active");
    document.querySelector(".hero").classList.add("active");
  }, 3400);
});
