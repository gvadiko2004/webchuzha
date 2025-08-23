const menuPhone = document.querySelector(".btn-open-menu");
const heroContent = document.querySelector(".hero__content");
// const menuContact = document.querySelector(".menu__list-contact"); // новая кнопка
const formOverlay = document.querySelector(".form-overlay");
const form = document.querySelector(".form");
const btnBurger = document.querySelector(".header__burger-btn");
const menu = document.querySelector(".menu");

let ignoreNextMenuClick = false;

// --- Функция открытия формы ---
function openForm() {
  btnBurger.classList.add("active");
  form.classList.add("active");
  formOverlay.classList.add("active");

  const formTitle = document.querySelector(".form__top-title");
  const headerLang = document.querySelector(".header__lang");

  if (formTitle) formTitle.classList.add("active");
  if (headerLang) headerLang.classList.add("active");

  ignoreNextMenuClick = true;
}

// --- Клики по кнопкам открытия формы ---
menuPhone.addEventListener("click", openForm);
if (heroContent) heroContent.addEventListener("click", openForm);
// if (menuContact) menuContact.addEventListener("click", openForm); // добавляем новую кнопку

// --- Закрытие формы через кнопку-бургер ---
btnBurger.addEventListener("click", function () {
  if (form.classList.contains("active")) {
    btnBurger.classList.remove("active");
    form.classList.remove("active");
    formOverlay.classList.remove("active");

    const formTitle = document.querySelector(".form__top-title");
    const headerLang = document.querySelector(".header__lang");

    if (formTitle) formTitle.classList.remove("active");
    if (headerLang) headerLang.classList.remove("active");

    ignoreNextMenuClick = false;
    return;
  }

  menu.classList.toggle("active");
  btnBurger.classList.toggle("active");
});

// --- Закрытие формы при клике на оверлей ---
formOverlay.addEventListener("click", function () {
  btnBurger.classList.remove("active");
  form.classList.remove("active");
  formOverlay.classList.remove("active");

  const formTitle = document.querySelector(".form__top-title");
  const headerLang = document.querySelector(".header__lang");

  if (formTitle) formTitle.classList.remove("active");
  if (headerLang) headerLang.classList.remove("active");

  ignoreNextMenuClick = false;
});

// --- Закрытие формы при ESC ---
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && form.classList.contains("active")) {
    btnBurger.classList.remove("active");
    form.classList.remove("active");
    formOverlay.classList.remove("active");

    const formTitle = document.querySelector(".form__top-title");
    const headerLang = document.querySelector(".header__lang");

    if (formTitle) formTitle.classList.remove("active");
    if (headerLang) headerLang.classList.remove("active");

    ignoreNextMenuClick = false;
  }
});

// price

const price = document.querySelector(".price");
const menuListPrice = document.querySelector(".menu__list--price");
const priceClose = document.querySelector(".btn-price-close");
const priceContentFagItem = document.querySelectorAll(
  ".price-content__fag-item"
);

priceContentFagItem.forEach((item) => {
  const dropItem = item.querySelector(".price-content__lixt");

  item.addEventListener("click", function () {
    // Если этот элемент уже активен — убрать актив
    if (dropItem.classList.contains("active")) {
      dropItem.classList.remove("active");
    } else {
      // Убрать active у всех остальных
      priceContentFagItem.forEach((otherItem) => {
        const otherDrop = otherItem.querySelector(".price-content__lixt");
        otherDrop.classList.remove("active");
      });
      // Добавить active текущему
      dropItem.classList.add("active");
    }
  });
});

menuListPrice.addEventListener("click", function () {
  price.classList.add("active");
});

priceClose.addEventListener("click", function () {
  price.classList.remove("active");
});

