function toggle() {
  const toggle = document.querySelector(".mainNav-toggle");
  const links = document.querySelector(".mainNav-links");
  const icons = document.getElementById("icon-wrapper");

  toggle.addEventListener("click", () => {
    links.classList.toggle("show");
    icons.classList.toggle("show-icons");
  });
}

// Call the toggle function after DOM is loaded
document.addEventListener("DOMContentLoaded", toggle);
