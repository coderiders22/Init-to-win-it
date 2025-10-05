// Check if user is logged in
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// Function to update the navbar based on login state
function updateNavbar() {
  const loggedInItems = document.querySelectorAll('.logged-in');
  const loggedOutItems = document.querySelectorAll('.logged-out');

  // Show logged-in items and hide logged-out items if logged in
  if (isLoggedIn) {
    loggedInItems.forEach(item => item.style.display = 'block');
    loggedOutItems.forEach(item => item.style.display = 'none');
  } else {
    loggedInItems.forEach(item => item.style.display = 'none');
    loggedOutItems.forEach(item => item.style.display = 'block');
  }
}

// Call this function when the page loads to update navbar visibility
document.addEventListener('DOMContentLoaded', updateNavbar);

// Simulate login
function login() {
  localStorage.setItem('isLoggedIn', 'true');
  updateNavbar();
}

// Simulate logout
function logout() {
  localStorage.setItem('isLoggedIn', 'false');
  updateNavbar();
}

// If you have a login button, you can trigger login like this:
document.getElementById("loginButton").addEventListener("click", login);

// And logout like this:
document.getElementById("logoutButton").addEventListener("click", logout);

  document.addEventListener("DOMContentLoaded", function () {
    // Example: check if user is logged in
    const isLoggedIn = localStorage.getItem("loggedIn"); 

    if (isLoggedIn === "true") {
      document.querySelectorAll(".logged-in").forEach(el => el.style.display = "block");
      document.querySelectorAll(".logged-out").forEach(el => el.style.display = "none");
    } else {
      document.querySelectorAll(".logged-in").forEach(el => el.style.display = "none");
      document.querySelectorAll(".logged-out").forEach(el => el.style.display = "block");
    }
  });

  // Example: login function
  function login() {
    localStorage.setItem("loggedIn", "true");
    location.reload(); // refresh to update navbar
  }

  // Example: logout function
  function logout() {
    localStorage.removeItem("loggedIn");
    location.reload();
  }
