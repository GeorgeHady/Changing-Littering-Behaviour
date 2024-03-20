
// get the navbar list
var navbarList = document.getElementById("navbar-list");

// check if user is logged in or not and display the appropriate navbar buttons
// if user is logged in, we display the username
// if user is not logged in, we display the login and register buttons
if (false) {
  navbarList.innerHTML = `
            <li class="nav-item">
                <a class="nav-link text-dark" id="logined-user">USER NAME</a>
            </li>
        `;
} else {
  navbarList.innerHTML = `
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="btn-tab-register"
                data-bs-toggle="tab"
                data-bs-target="#tab-register"
                type="button"
                role="tab"
                aria-controls="tab-register"
                aria-selected="false"
              >
                Register
              </button>
            </li>
             <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="btn-tab-login"
                data-bs-toggle="tab"
                data-bs-target="#tab-login"
                type="button"
                role="tab"
                aria-controls="tab-login"
                aria-selected="false"
              >
                Login
              </button>
            </li>
        `;
}


// initialize the map
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 43.238644, lng: -79.88817 },
  });

  fetch("https://binproj.com/bins", { mode: "cors" })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((bin) => {
        var marker = new google.maps.Marker({
          position: { lat: bin.Latitude, lng: bin.Longitude },
          map: map,
          title: "ID: " + bin.Id,
        });
        marker.addListener("click", function () {
          window.open("bindata.png", "_blank");
        });
      });
    })
    .catch((error) => console.error("Error fetching bins:", error));
}
