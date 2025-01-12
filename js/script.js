

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".header_nav");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

