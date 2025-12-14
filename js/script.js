const burgerMenu = document.querySelector(".header-burger");
const headerMobileMenu = document.querySelector(".header-mobile-menu");
const headerMobile = document.querySelector(".header-mobile");
const headerMobileLinks = document.querySelectorAll(".header-mobile-menu a");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  headerMobileMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  headerMobile.classList.toggle("active");
});

headerMobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    headerMobileMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    headerMobile.classList.toggle("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    const offset = 50;

    const topPosition =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  });
});

const video = document.getElementById("aboutVideo");
const playBtn = document.getElementById("playBtn");

video.removeAttribute("controls");

playBtn.addEventListener("click", () => {
  video.setAttribute("controls", "controls");
  playBtn.style.display = "none";
  video.play();
});

setPoster();
window.addEventListener("resize", setPoster);

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".products-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    initialSlide: 1,
    centeredSlides: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        initialSlide: 1,
      },
    },
  });
});

const scrollContainer = document.querySelector(".events-slider");
const scrollBtn = document.querySelector(".scroll-left-btn");

scrollContainer.addEventListener("scroll", () => {
  if (scrollContainer.scrollLeft > 10) {
    scrollBtn.classList.add("active");
    scrollBtn.removeAttribute("disabled");
  } else {
    scrollBtn.classList.remove("active");
    scrollBtn.setAttribute("disabled", true);
  }
});

scrollBtn.addEventListener("click", () => {
  scrollContainer.scrollTo({
    left: 0,
    behavior: "smooth",
  });
});

document.getElementById("scrollToTop").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    headerMobile.classList.add("scrolled");
  } else {
    headerMobile.classList.remove("scrolled");
  }
});

(function () {
  const img = new Image();
  img.onload = img.onerror = function () {
    document.documentElement.classList.add(
      img.height === 2 ? "webp" : "no-webp"
    );
  };
  img.src =
    "data:image/webp;base64,UklGRiIAAABXRUJQVlA4TAYAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
})();
