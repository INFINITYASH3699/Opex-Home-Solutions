document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("darkModeSwitch");

  function applyDarkModePreference() {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      toggleSwitch.checked = true;
    } else {
      document.body.classList.remove("dark-mode");
      toggleSwitch.checked = false;
    }
  }

  function toggleDarkMode() {
    if (toggleSwitch.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }

  toggleSwitch.addEventListener("change", toggleDarkMode);
  applyDarkModePreference();
});

document.addEventListener("DOMContentLoaded", function () {
  var currentLocation = window.location.pathname;
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
