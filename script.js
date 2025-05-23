
// initialize the map
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 43.238644, lng: -79.88817 },
  });

  fetch("https://binproj.com/api/bins", { mode: "cors" })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((bin) => {
        var marker = new google.maps.Marker({
          position: { lat: bin.Latitude, lng: bin.Longitude },
          map: map,
          title: "ID: " + bin.BinID,
        });
        marker.addListener("click", function () {
          window.open("https://binproj.com/bin/" + bin.BinID, "_blank");
        });
      });
    })
    .catch((error) => console.error("Error fetching bins:", error));
}
