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

function displayHouses() {
  const houseList = document.getElementById("houseList");
  houseList.innerHTML = "";
  houses.forEach((house, index) => {
    const houseCard = `
    <div class="col-3 card" onclick="houseInfo(${index});">
            <img
              src="${house.img}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <div class="card-content">
                <h5>${house.name}</h5>
                <p>
                  ${house.desp}
                </p>
              </div>
              <div class="card-btn text-end">
                <button class="btn btn-outline-dark" onclick="houseInfo(${index});">Visit</button>
              </div>
            </div>
          </div>
    `;
    houseList.innerHTML += houseCard;
  });
}

function houseInfo(index) {
  window.location.href = `houseDetails.html?houseIndex=${index}`;
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    houseIndex: params.get("houseIndex")
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const { houseIndex } = getQueryParams();
  const house = houses[houseIndex];
  if (house) {
    document.getElementById("house-name").textContent = house.name;
    document.getElementById("house-img").src = house.img;
    document.getElementById("house-img").alt = house.name;
    document.getElementById("house-desp").textContent = house.desp;
  } else {
    document.getElementById("house-name").textContent = "House not found";
  }
});

displayHouses();
