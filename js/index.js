document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    effect: "coverflow",
    autoplay: true,
    speed: 400,

    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },

    navigation: {
      nextEl: ".swiper-custom-next",
      prevEl: ".swiper-custom-prev",
    },
  });

  const inviteBtn = document.querySelector(".invite-block__btn");
  const inviteModal = document.querySelector(".invite-modal");
  const inviteCloseBtn = document.querySelector(".invite-modal__close");
  const inviteModalWindow = document.querySelector(".invite-modal__window");
  const inviteSubmitBtn = document.querySelector(".invite-modal__btn");

  inviteBtn.addEventListener("click", () => {
    inviteModal.classList.remove("hidden");

    inviteCloseBtn.addEventListener("click", () => {
      inviteModal.classList.add("hidden");
    });
  });

  inviteModalWindow.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  inviteModal.addEventListener("click", () => {
    inviteModal.classList.add("hidden");
  });

  const modalNav = document.querySelector(".modal-nav");
  const modalNavWindow = document.querySelector(".modal-nav__window");
  const modalNavCloseBtn = document.querySelector(".modal-nav__close");
  const headerBtn = document.querySelector(".header-btn");
  const modalNavLink = document.querySelectorAll(".modal-nav__link");

  headerBtn.addEventListener("click", () => {
    modalNav.classList.remove("hidden");

    modalNavCloseBtn.addEventListener("click", () => {
      modalNav.classList.add("hidden");
    });
  });

  modalNavWindow.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  modalNav.addEventListener("click", () => {
    modalNav.classList.add("hidden");
  });

  modalNavLink.forEach(function (item) {
    item.addEventListener("click", () => {
      modalNav.classList.add("hidden");
    });
  });

  ymaps.ready(init);
  function init() {
    let myMap = new ymaps.Map("map", {
      center: [55.908848401057995, 37.22134672574159],
      zoom: 15,
    });

    let myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [55.908848401057995, 37.22134672574159],
      },
    });

    myMap.geoObjects.add(myGeoObject);
  }
});
