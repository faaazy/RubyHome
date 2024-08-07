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
const plateTopList = document.querySelector(".find__plate-top__list");
const plateMain = document.querySelector(".find__plate-main");
const plateActive = document.querySelector("active-plate");

plateTopList.addEventListener("click", (event) => {
  plateTopLinks.forEach((plateTopLink) => {
    if (event.target === plateTopLink) {
      plateMain.classList.toggle("active-plate");
    }
    if (plateTopLink.contains(event.target)) {
      plateTopLink.classList.add("active-link");
    } else {
      plateTopLink.classList.remove("active-link");
    }
  });
});
// Dropdowns

const locationMenu = document.querySelector(".location-menu"),
  locationBtn = locationMenu.querySelector(".location-btn"),
  locationOptions = locationMenu.querySelectorAll(".location-option"),
  locationTitle = document.querySelector(".location-title");

document.addEventListener("click", outsideLocationMenu);

function outsideLocationMenu(event) {
  if (event.target === locationBtn || locationBtn.contains(event.target)) {
    locationMenu.classList.toggle("active");

    locationOptions.forEach((locationOption) => {
      locationOption.addEventListener("click", () => {
        let selectedOption = locationOption.querySelector(".option-text").innerText;
        locationTitle.innerText = selectedOption;
        locationMenu.classList.remove("active");
      });
    });
  } else {
    locationMenu.classList.remove("active");
  }
}

const propMenu = document.querySelector(".prop-menu"),
  propBtn = propMenu.querySelector(".prop-btn"),
  propOptions = propMenu.querySelectorAll(".prop-option"),
  propTitle = document.querySelector(".prop-title");

document.addEventListener("click", outsidePropMenu);

function outsidePropMenu(event) {
  if (event.target === propBtn || propBtn.contains(event.target)) {
    propMenu.classList.toggle("active");

    propOptions.forEach((propOption) => {
      propOption.addEventListener("click", () => {
        let selectedOption = propOption.querySelector(".option-text").innerText;
        propTitle.innerText = selectedOption;
        propMenu.classList.remove("active");
      });
    });
  } else {
    propMenu.classList.remove("active");
  }
}

const priceMenu = document.querySelector(".price-menu"),
  priceBtn = priceMenu.querySelector(".price-btn"),
  priceOptions = priceMenu.querySelectorAll(".price-option"),
  priceTitle = document.querySelector(".price-title");

document.addEventListener("click", outsidePriceMenu);

function outsidePriceMenu(event) {
  if (event.target === priceBtn || priceBtn.contains(event.target)) {
    priceMenu.classList.toggle("active");

    priceOptions.forEach((priceOption) => {
      priceOption.addEventListener("click", () => {
        let selectedOption = priceOption.querySelector(".option-text").innerText;
        priceTitle.innerText = selectedOption;
        priceMenu.classList.remove("active");
      });
    });
  } else {
    priceMenu.classList.remove("active");
  }
}

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
  // setTimeout(ctaAlert.classList.remove("cta-alert--active"), 3000);
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
