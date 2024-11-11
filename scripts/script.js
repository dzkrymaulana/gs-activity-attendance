pageLoader("show"); //show page loader
getLoader("#main-form", "Memuat Data..."); // show loader in form element

$(document).ready(function () {
  // get camera
  getCamera();
  // set label * for required form input
  setFormRequiredLabel();
  // set database for select form
  setSelectDatabase();
  // init select2
  select2Init();
  // get date and time data and loop every 1 seconds
  setLocalTimestamp();
  setInterval(function () {
    setLocalTimestamp();
  }, 1000);

  // get location data and loop every 5 seconds
  getLocation();
  setInterval(function () {
    getLocation();
  }, 5000);

  // remove page loader
  setTimeout(function () {
    pageLoader("hide");
  }, 100);

  // remove loader in form element
  setTimeout(function () {
    hideLoader("#main-form");
  }, 1000);
});
