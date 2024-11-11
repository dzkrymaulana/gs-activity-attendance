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
