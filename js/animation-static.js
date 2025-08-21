// ==========================
// Применяем .active ко всем элементам с классом .selector при скролле к футеру
// ==========================

const footer = document.querySelector("section.footer");
const selectors = document.querySelectorAll(".selector");
const titles = document.querySelectorAll(".preloader-line-title");

// Функция проверки видимости футера
function checkFooterInView() {
  const rect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Когда верх футера пересекает центр экрана
  if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
    // Добавляем классы
    selectors.forEach((el) => el.classList.add("active"));

    titles.forEach((el, i) => {
      setTimeout(() => el.classList.add("active"), i * 300);
      setTimeout(() => el.classList.add("active-after"), i * 300 + 500);
      setTimeout(() => el.classList.add("active-after-before"), i * 300 + 1000);
    });
  } else {
    // Убираем классы при уходе назад
    selectors.forEach((el) => el.classList.remove("active"));
    titles.forEach((el) =>
      el.classList.remove("active", "active-after", "active-after-before")
    );
  }
}

// Проверка при скролле
window.addEventListener("scroll", checkFooterInView);

// Первичная проверка при загрузке
window.addEventListener("load", checkFooterInView);
