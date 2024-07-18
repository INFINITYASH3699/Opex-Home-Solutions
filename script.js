document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector(".toggle-switch");

  function applyDarkModePreference() {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    }
  }

  toggleSwitch.addEventListener("click", toggleDarkMode);
  applyDarkModePreference();
});