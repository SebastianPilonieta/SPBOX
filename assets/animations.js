document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".nav-hamburger");
  const layout = document.querySelector(".nav-layout");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("w--open");
    layout.classList.toggle("menu-open");
  });
});
