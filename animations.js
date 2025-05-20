// animations.js

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".dashboard-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach((section) => {
    section.classList.add("hidden-section");
    observer.observe(section);
  });
});
