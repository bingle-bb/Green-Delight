const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
const icons = document.getElementById("icon-wrapper");

toggle.addEventListener("click", () => {
  links.classList.toggle("show");
  icons.classList.toggle("show-icons"); // ✅ makes icons appear
});
