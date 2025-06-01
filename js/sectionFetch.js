document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("nav-container").outerHTML = data;
    });

  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      toggle();
    });

  fetch("review.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("review").innerHTML = data;
      initStarRatings();
    });

  fetch("contact-us.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("contact-us").innerHTML = data;
    });

  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
