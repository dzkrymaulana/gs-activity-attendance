// Geo Location init
function locationInit() {
  if (navigator.geolocation) {
    // console.log("Geolocation supported");
  } else {
    console.log("Geolocation is not supported");
  }
}

// Get location data
function getLocation() {
  locationInit();
  navigator.geolocation.getCurrentPosition(
    function onSuccess(p) {
      var lat = p.coords.latitude;
      var lon = p.coords.longitude;
      var coord = lat + " " + lon;
      getLocationData(lat, lon);
      // getMapView([lat, lon]);
    },
    function onFail() {
      //...
      console.log("Location not granted!");
      getToast("Location permission is not enabled!", "warning");
    }
  );
}

// Get Location data with GeoApify -- https://geoapify.com
function getLocationData(lat = "0.00000", lon = "0.00000") {
  var requestOptions = {
    method: "GET",
  };

  fetch(
    "https://api.geoapify.com/v1/geocode/reverse?lat=" +
      lat +
      "&lon=" +
      lon +
      "&type=street&lang=id&limit=10" +
      "&apiKey=8ae054c1837046e5b89538d2f0ba820a",
    requestOptions
  )
    .then((response) => response.json())
    .then(function (result) {
      // console.log(result);
      // for set coordinate
      localData.location.locationCoordinate =
        result.features[0].properties.lat +
        ", " +
        result.features[0].properties.lon;
      // for set location name
      localData.location.locationName = result.features[0].properties.formatted;

      setLocationView();
    })
    .catch((error) => console.log("error", error));
}

// Set Location data in object and view
function setLocationView() {
  let locationCoordPlace = document.querySelector("#location-coordinate");
  let locationNamePlace = document.querySelector("#location-name");

  if (
    localData.location.locationName == undefined ||
    localData.location.locationName == ""
  ) {
    setTimeout(function () {
      locationCoordPlace.innerHTML = localData.location.locationCoordinate;
      locationNamePlace.innerHTML = localData.location.locationName;
    }, 1000);
  } else {
    locationCoordPlace.innerHTML = localData.location.locationCoordinate;
    locationNamePlace.innerHTML = localData.location.locationName;
  }
}

const map = L.map("map-view");
const gaAPIkey = "8ae054c1837046e5b89538d2f0ba820a";

function getMapView(coord = [48.1500327, 11.5753989]) {
  // The Leaflet map Object
  map.setView(coord, 10);

  // Retina displays require different mat tiles quality
  const isRetina = L.Browser.retina;

  const baseUrl =
    "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
  const retinaUrl =
    "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

  // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
  L.tileLayer(isRetina ? retinaUrl : baseUrl, {
    attribution:
      'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
    apiKey: gaAPIkey,
    maxZoom: 20,
    id: "osm-bright",
  }).addTo(map);

  //add a marker with icon generated by Geoapify Marker Icon API
  const markerIcon = L.icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=awesome&color=%23563ec9&size=small&icon=user&shadowColor=%23ffffff&noShadow&noWhiteCircle&apiKey=${gaAPIkey}`,
    // iconSize: [31, 46], // size of the icon
    // iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    // popupAnchor: [0, -45], // point from which the popup should open relative to the iconAnchor
  });

  const zooMarkerPopup = L.popup().setContent("Your Current Location");
  const zooMarker = L.marker(coord, {
    icon: markerIcon,
  })
    .bindPopup(zooMarkerPopup)
    .addTo(map);
}

const mapModal = new bootstrap.Modal(document.getElementById("mapModal"), {});
function showMap() {
  mapModal.show();
}
