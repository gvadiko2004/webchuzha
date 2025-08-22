document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".about-us__list-item");
  const answerSubtitle = document.querySelector(".about-us__answer-subtitle");
  const answerBlock = document.querySelector(".about-us__answer"); // контейнер для скролла

  if (!listItems.length || !answerSubtitle) return;

  // --- Инициализация текста ---
  const firstActive = document.querySelector(".about-us__list-btn.active");
  const initialItem = firstActive
    ? firstActive.closest(".about-us__list-item")
    : listItems[0];

  if (initialItem) {
    const initialText = initialItem.querySelector(".about-us__list-subtitle").innerHTML;
    answerSubtitle.innerHTML = initialText;
  }

  // --- Обработчик кликов для ПК ---
  listItems.forEach((item) => {
    const btn = item.querySelector(".about-us__list-btn");
    const subtitle = item.querySelector(".about-us__list-subtitle");

    if (!btn || !subtitle) return;

    btn.addEventListener("click", () => {
      // Снимаем active со всех кнопок
      document.querySelectorAll(".about-us__list-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Плавная смена текста через gsap
      gsap.to(answerSubtitle, {
        opacity: 0,
        y: -2,
        duration: 0.3,
        onComplete: () => {
          answerSubtitle.innerHTML = subtitle.innerHTML;

          gsap.fromTo(
            answerSubtitle,
            { opacity: 0, y: 0 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
          );
        },
      });

      // Скролл к началу блока
      if (answerBlock) {
        answerBlock.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // --- Мобильный аккордеон ---
  if (innerWidth < 768) {
    listItems.forEach((item) => {
      const subtitle = item.querySelector(".about-us__list-subtitle");
      if (!subtitle) return;

      item.addEventListener("click", () => {
        const isActive = subtitle.classList.contains("active");

        // Снимаем active со всех
        listItems.forEach((el) => {
          const elSub = el.querySelector(".about-us__list-subtitle");
          elSub.classList.remove("active");
        });

        // Если элемент не был активен, активируем его
        if (!isActive) {
          subtitle.classList.add("active");
        }
      });
    });
  }

  // --- Открытие/закрытие блока about-us ---
  const aboutUs = document.querySelector(".about-us");
  const body = document.body;

  document.querySelector(".menu__list--about")?.addEventListener("click", () => {
    aboutUs.classList.add("active");
    body.style.overflow = "hidden";
  });

  document.querySelector(".button-close-about")?.addEventListener("click", () => {
    aboutUs.classList.remove("active");
    body.style.overflow = "";
  });
});
