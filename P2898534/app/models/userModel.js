// Handles saving and reading users
export function saveUser(user) {
  localStorage.setItem(user.username, JSON.stringify(user));
}

export function getUser(username) {
  const data = localStorage.getItem(username);
  return data ? JSON.parse(data) : null;
}

