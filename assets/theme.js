document.addEventListener("DOMContentLoaded", function () {
  // ========== Cart Drawer Toggle ==========
  const cartIcon = document.querySelector(".nav-cart");
  const cartDrawer = document.querySelector(".cart-drawer");
  const cartOverlay = document.querySelector(".cart-overlay");
  const closeCart = document.querySelector(".cart-close");

  if (cartIcon && cartDrawer && cartOverlay) {
    cartIcon.addEventListener("click", () => {
      cartDrawer.classList.add("active");
      cartOverlay.classList.add("active");
    });

    closeCart?.addEventListener("click", () => {
      cartDrawer.classList.remove("active");
      cartOverlay.classList.remove("active");
    });

    cartOverlay.addEventListener("click", () => {
      cartDrawer.classList.remove("active");
      cartOverlay.classList.remove("active");
    });
  }

  // ========== Mobile Menu Toggle ==========
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".mobile-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Future: Product option selection, filter behavior, etc.
});
