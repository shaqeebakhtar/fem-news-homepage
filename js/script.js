const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

mobileNavToggle.addEventListener("click", () => {
  nav.hasAttribute("data-visible")
    ? mobileNavToggle.setAttribute("aria-expanded", false)
    : mobileNavToggle.setAttribute("aria-expanded", true);
  nav.toggleAttribute("data-visible");
});
