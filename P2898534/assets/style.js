import { register } from "../controller/authController.js";
// ===== CONTROLLER =====
function register() {

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;

  if (password !== confirm) {
    document.getElementById("message").innerText = "❌ Passwords do not match";
    return;
  }

  // ===== MODEL =====
  let userData = {
    fullname: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    username: username,
    password: password
  };

  localStorage.setItem(username, JSON.stringify(userData));

  document.getElementById("message").innerText = "✅ Registration successful!";
}
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let stored = localStorage.getItem(username);

  if (!stored) {
    document.getElementById("message").innerText = "❌ User not found";
    return;
  }

  let user = JSON.parse(stored);

  if (user.password === password) {
    document.getElementById("message").innerText = "✅ Welcome " + user.fullname;
  } else {
    document.getElementById("message").innerText = "❌ Wrong password";
  }
}