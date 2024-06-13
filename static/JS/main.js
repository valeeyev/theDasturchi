document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  hero.style.animationDelay = "0.5s";

  const toggle = document.querySelector("#menubar");
  const navContainer = document.querySelector("#nav-container");
  const mainBg = document.querySelector(".main-bg");

  toggle.addEventListener("click", function () {
    if (navContainer.classList.contains("show")) {
      navContainer.classList.remove("show");
      mainBg.classList.remove("nav-active-bg");
      hero.classList.remove("hide");
    } else {
      navContainer.classList.add("show");
      mainBg.classList.add("nav-active-bg");
      hero.classList.add("hide");
    }
  });
});
