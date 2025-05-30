const loginToggle = document.getElementById("loginToggle");
const signupToggle = document.getElementById("signupToggle");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const switchToSignup = document.getElementById("switchToSignup");
let password = document.querySelector("#passwordInput");

loginToggle.addEventListener("click", () => {
  loginToggle.classList.add("active");
  signupToggle.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

signupToggle.addEventListener("click", () => {
  signupToggle.classList.add("active");
  loginToggle.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});

switchToSignup.addEventListener("click", (e) => {
  e.preventDefault();
  signupToggle.click();
});

// Login form check
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("loginName").value;
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (name === "bb" && email === "bb@blabla.com" && password === "123456789") {
    alert("You are logged in successfully!");
  } else {
    alert("Incorrect email or password!");
  }
});

// password length check
document.getElementById("signupForm").addEventListener("submit", function (e) {
  const password = document.getElementById("signupPassword");
  if (password.value.length < 8) {
    alert("Password should be at least 8 characters!");
    e.preventDefault();
    return;
  }

  if (password.value.length > 15) {
    alert("Password should not be more than 15 characters!");
    e.preventDefault();
    return;
  }
});
