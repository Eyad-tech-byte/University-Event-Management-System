export function login(username, password) {
  // Get stored user from localStorage
  const storedUser = JSON.parse(localStorage.getItem(username));

  if (!storedUser) {
    return { message: "❌ User not found" };
  }

  if (storedUser.password !== password) {
    return { message: "❌ Wrong password" };
  }

  // ✅ Save the logged-in user in sessionStorage
  sessionStorage.setItem("currentUser", JSON.stringify(storedUser));

  return { message: `✅ Welcome ${storedUser.fullname}` };
}

// Optional: function to check if a user is logged in
export function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem("currentUser"));
}

