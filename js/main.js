// Modal
const modalBtn = document.querySelector(".header__btn");
const modalForm = document.querySelector(".modal__form-wrapper");
const modalFormBtn = document.querySelector(".modal__form-btn");

document.addEventListener("click", modalMenu);
function modalMenu(event) {
  if (event.target === modalBtn) {
    modalForm.classList.add("modal");
    modalForm.classList.remove("none");
  } else if (event.target === modalFormBtn || event.target == modalForm) {
    modalForm.classList.remove("modal");
    modalForm.classList.add("none");
  }
}

// Plate switches
const plateTopLinks = document.querySelectorAll(".find__plate-top__link");
const plateTop = document.querySelector(".find__plate-top");
const plateMain = document.querySelector(".find__plate-main");
const plateActive = document.querySelector("active-plate");
const findPlate = document.querySelector(".find__plate");

document.addEventListener("click", (event) => {
  const isClickedInsidePlateMain = event.target.closest(".find__plate-main");

  if (!isClickedInsidePlateMain) {
    plateTopLinks.forEach((item) => item.classList.remove("active-link"));
  }

  for (const link of plateTopLinks) {
    if (event.target === link) {
      link.classList.add("active-link");
      plateMain.classList.add("active-plate");
      break;
    }
    if (isClickedInsidePlateMain) {
      plateMain.classList.add("active-plate");
    } else {
      plateMain.classList.remove("active-plate");
    }
  }
});

// Dropdowns
function setupDropDown(menuSelector, btnSelector, optionsSelector, titleSelector) {
  const menu = document.querySelector(menuSelector);
  const btn = document.querySelector(btnSelector);
  const options = document.querySelectorAll(optionsSelector);
  const title = document.querySelector(titleSelector);

  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      title.innerText = selectedOption;
      menu.classList.remove("active");
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target === btn || btn.contains(event.target)) {
      menu.classList.toggle("active");
    } else {
      menu.classList.remove("active");
    }
  });
}

setupDropDown(".location-menu", ".location-btn", ".location-option", ".location-title");
setupDropDown(".prop-menu", ".prop-btn", ".prop-option", ".prop-title");
setupDropDown(".price-menu", ".price-btn", ".price-option", ".price-title");

// Favorites
const favorites = document.querySelectorAll(".props__card-heading__img");
favorites.forEach((favorite) => {
  favorite.addEventListener("click", () => {
    favorite.classList.toggle("favorite-active");
  });
});

// Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

// CTA
const ctaBtn = document.querySelector(".cta__plate-form__btn");
const ctaAlert = document.querySelector(".cta-alert");

ctaBtn.addEventListener("click", () => {
  ctaAlert.classList.add("cta-alert--active");

  setTimeout(() => {
    ctaAlert.classList.remove("cta-alert--active");
  }, 3000);
});

// Media
const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const navIconActive = document.querySelector("nav-icon--active");
const nav = document.querySelector(".header__row");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header__row--mobile");
  document.body.classList.toggle("no-scroll");
};

document.addEventListener("click", (event) => {
  if (event.target.closest(".header__row--mobile") && event.target.closest(".header__list-item")) {
    nav.classList.remove("header__row--mobile");
    navIcon.classList.remove("nav-icon--active");
    document.body.classList.remove("no-scroll");
  }
});
