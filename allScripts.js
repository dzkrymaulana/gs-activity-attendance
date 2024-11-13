// DATA
var localData = {
  database: {
    personData: [],
    workplaceData: [],
  },
  formValue: {
    personId: "",
    personName: "",
    workplaceName: "",
    workplaceId: "",
    activityDesc: "",
    activityNotes: "",
    pictId: "",
  },
  timestamp: "",
  location: {
    locationCoordinate: "",
    locationName: "",
  },
  clockInStatus: {},
};

function getAllDatabases() {
  localData.database.personData = personDatabase;
  localData.database.workplaceData = workPlaceDatabase;
}

// check if person has clock in
function checkClockInStatus(id = "", name = "") {
  if (id !== "" && name !== "") {
    // start code block for google script request
    // google.script.run.withSuccessHandler(function(data){
    var personIndex = 1;
    var workplaceIndex = 3;
    localData.clockInStatus.status = false;
    localData.clockInStatus.clockInData = {
      personId: localData.database.personData[personIndex].id,
      personName: localData.database.personData[personIndex].name,
      workplaceId: localData.database.workplaceData[workplaceIndex].id,
      workplaceName: localData.database.workplaceData[workplaceIndex].name,
      activityDesc: "lorem ipsum dolor sit amet adipiscing bla bla bla bla bla",
      clockInTimestamp: getTimestamp("DD/MM/YYYY hh:mm:ss"),
    };

    if (localData.clockInStatus.status) {
      $("#clock-out-form").removeClass("d-none");
      setTimeout(function () {
        hideLoader("#submit-btn");
        $("#submit-btn")
          .attr("onclick", "clockOut()")
          .children("span")
          .text("Clock Out");
      }, 100);
    } else {
      $("#clock-in-form").removeClass("d-none");
      setTimeout(function () {
        hideLoader("#submit-btn");
        $("#submit-btn")
          .attr("onclick", "clockIn()")
          .children("span")
          .text("Clock In");
      }, 100);
    }

    // end code block for google script request
    // }).checkClockInStatus(id, name);
  }
}

// clock in function
function clockIn() {
  if ($("select#name").val() == "") {
    getToast('"Name" is required!', "error");
    $("select#name").focus();
  } else if ($("select#workplace").val() == "") {
    getToast('"Workplace" is required!', "error");
    $("select#workplace").focus();
  } else if ($("textarea#activity-desc").val() == "") {
    getToast('"Activity Description" is required!', "error");
    $("textarea#activity-desc").focus();
  } else if (localData.location.locationCoordinate == "") {
    getToast("Device location not detected!", "error");
    getLocation();
  } else {
    clockInProcess();
  }
}

// clock in process data
function clockInProcess() {
  var data = localData.formValue;
  data.timestamp = localData.timestamp;
  data.location = localData.location;

  getAlert("Clock In Berhasil!", "success");
  resetForm();
}

// clock out function
function clockOut() {
  if ($("select#name").val() == "") {
    getToast('"Name" is required!', "error");
    $("select#name").focus();
  } else if (localData.location.locationCoordinate == "") {
    getToast("Device location not detected!", "error");
    getLocation();
  } else {
    clockOuProcess();
  }
}

// clock out process data
function clockOuProcess() {
  var data = localData.formValue;
  data.timestamp = localData.timestamp;
  data.location = localData.location;

  getAlert("Clock Out Berhasil!", "success");
  resetForm();
}

// FORM
function setFormRequiredLabel() {
  $("input, select, textarea").each(function () {
    if ($(this).attr("required")) {
      $(this).siblings("label").append("<span class='text-danger'>*</span>");
    }
  });
}

function setSelectDatabase() {
  $("select").each(function () {
    var ds = $(this).data("source-database");
    data = localData.database[ds];
    for (dl = 0; dl < data.length; dl++) {
      var optVal = data[dl].id + "#" + data[dl].name;
      var optText = data[dl].id + " - " + data[dl].name;
      if (data[dl].area) {
        optText += " - " + data[dl].area;
      }
      $(this).append('<option value="' + optVal + '">' + optText + "</option>");
    }
  });
}

function resetForm() {
  $("#clock-in-form, #clock-out-form").each(function () {
    if (!$(this).hasClass("d-none")) {
      $(this).addClass("d-none");
    }
  });

  $("#main-form input, #main-form textarea, #main-form select").val("");

  $("#submit-btn")
    .attr("onclick", "clockIn()")
    .children("span")
    .text("Clock In");

  select2Init();
}

// for check clock in status with person data
$("select#name").on("change", function () {
  var val = $(this).val();
  var idVal = val.split("#")[0];
  var nameVal = val.split("#")[1];

  localData.formValue.personId = idVal;
  localData.formValue.personName = nameVal;

  if (!$("#clock-in-form").hasClass("d-none")) {
    $("#clock-in-form").removeClass("d-none");
  }
  if (!$("#clock-out-form").hasClass("d-none")) {
    $("#clock-out-form").removeClass("d-none");
  }

  getLoader("#submit-btn", "Checking Your Status...");
  var clockInStatus = checkClockInStatus(idVal, nameVal);
});

$("select#workplace").on("change", function () {
  var val = $(this).val();
  var idVal = val.split("#")[0];
  var nameVal = val.split("#")[1];

  localData.formValue.workplaceId = idVal;
  localData.formValue.workplaceName = nameVal;
});

$("#activity-desc").on("keyup", function () {
  localData.formValue.activityDesc = $(this).val();
});

$("#activity-notes").on("keyup", function () {
  localData.formValue.activityNotes = $(this).val();
});

//DATE TIME
// array for nam of days and months
const daysName = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jum'at",
  "Sabtu",
];
const monthsName = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

// function for get timestamp or date or time
function getTimestamp(format = "dd-mmmm-yyyy h:m:s", dateTime = "") {
  var dateTime;
  dateTime == "" ? (dateTime = new Date()) : (dateTime = new Date(dateTime));

  // datetime object // format must same property name of datetime object
  const dateTimeObj = {
    D: dateTime.getDate(), // for date
    DD: String(dateTime.getDate()).padStart(2, "0"), //for date two digits
    DDDD: daysName[dateTime.getDay()], //for name of day
    M: dateTime.getMonth(), //for month number
    MM: String(dateTime.getMonth()).padStart(2, "0"), //for month number
    MMMM: monthsName[dateTime.getMonth()], //for name of month
    YYYY: dateTime.getFullYear(), //for year
    h: dateTime.getHours(), //for hour
    hh: String(dateTime.getHours()).padStart(2, "0"), //for hour
    m: dateTime.getMinutes(), //for minute
    mm: String(dateTime.getMinutes()).padStart(2, "0"), //for minute
    s: dateTime.getSeconds(), //for second
    ss: String(dateTime.getSeconds()).padStart(2, "0"), //for second
    ms: dateTime.getMilliseconds(),
  };

  // split format string
  const f = format.match(/\w+/g);
  // split format delimiters
  const del = format.match(/[^a-zA-Z0-9]+/g);

  var timestamp = "";
  for (a = 0; a < f.length; a++) {
    // add value of timestamp form format
    if (dateTimeObj[f[a]]) {
      timestamp += dateTimeObj[f[a]];
      if (del !== null) {
        del[a] ? (timestamp += del[a]) : "";
      }
    } else {
      timestamp = new Date();
      console.log('timestamp format for "' + f[a] + '" is not available');
    }
  }

  return timestamp;
}

function setLocalTimestamp() {
  localData.timestamp = new Date();
  $("#time-info").text(getTimestamp("hh:mm:ss"));
  $("#date-info").text(
    getTimestamp("DDDD") + ", " + getTimestamp("D MMMM YYYY")
  );
}

// LOCATION
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

//CAMERA
function getCamera() {
  // INISIASI KOMPATIBILITAS KAMERA
  if (navigator.mediaDevices?.getUserMedia) {
    console.log("Camera supported");
  } else {
    console.log("Camera unsupported");
  }

  // MEMULAI KAMERA
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then((localMediaStream) => {
      const video = document.querySelector("video");
      video.srcObject = localMediaStream;
      video.classList = "";
      $("video").siblings("img").remove();
    })
    .catch((error) => {
      console.log("Rejected!", error);
    });
}

//LOADER
function pageLoader(event = "show") {
  var spinnerPage = $(
    '<div id="spinner" class="spinner-border" role="status">' +
      '<span class="visually-hidden" >Loading...</span>' +
      "</div>"
  );
  if (event == "show") {
    var spinnerPageLoad = spinnerPage.addClass("text-primary");
    $("#page-loader").append(spinnerPageLoad);
  } else if (event == "hide") {
    $("#page-loader").addClass("fade-out");
    setTimeout(function () {
      $("#page-loader").remove();
    }, 100);
  }
}

function getLoader(selector = "", text = "Loading...") {
  var spinnerWrapper = $(
    "<div class='loader-wrapper container py-1 my-1 d-flex justify-content-center align-items-center gap-2' data-loader-state></div>"
  );
  var spinner = $(
    '<span id="spinner" class="spinner-border spinner-border-sm" role="status"></span><span class="" role="status">' +
      text +
      "</span></div>"
  );

  if (selector !== "") {
    spinnerWrapper.attr("data-loader-state", selector);
    spinnerWrapper.append(spinner);

    $(selector).addClass("d-none");
    $(selector).before(spinnerWrapper);
  }
}

function hideLoader(selector = "") {
  if (selector !== "") {
    $("[data-loader-state='" + selector + "']").remove();
    $(selector).removeClass("d-none");
  }
}

// ALERT
// Show alert with Toastify --- https://apvarun.github.io/toastify-js/
function getToast(text = "Toast Called!", type = "info") {
  var alertType = {
    info: { bgColor: "#563ec9", icon: "fa-solid fa-circle-info" },
    success: { bgColor: "#00CE88", icon: "fa-solid fa-circle-check" },
    warning: { bgColor: "#E9AB48", icon: "fa-solid fa-circle-exclamation" },
    error: { bgColor: "#C21606", icon: "fa-solid fa-circle-xmark" },
  };

  var textNode = document.createElement("span");
  var iconNode = document.createElement("i");
  iconNode.classList = alertType[type].icon;

  textNode.innerHTML = "&nbsp;&nbsp;" + text + " ";
  textNode.prepend(iconNode);

  Toastify({
    // text: textNode+"  ",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    node: textNode,
    // backgroundColor: "transparent",
    style: {
      background: alertType[type].bgColor,
    },
  }).showToast();
}

// using SweetAlert2 -- https://sweetalert2.github.io/
function getAlert(text = "This Alert", type = "success") {
  var title;
  switch (type) {
    case "success":
      title = "Success!";
      break;
    case "error":
      title = "Error!";
      break;
    case "warning":
      title = "Warning!";
      break;
    case "info":
      title = "Information";
      break;
    case "question":
      title = "Are You Sure?";
      break;
  }

  Swal.fire({
    title: title,
    text: text,
    icon: type,
  });
}

// SELECT2
// Select2 Init function
function select2Init() {
  $(".select2").select2({
    theme: "bootstrap-5",
    width: "style",
    placeholder: "Choose Option",
  });
}

// EXECUTION
pageLoader("show"); //show page loader
getLoader("#main-form", "Memuat Data..."); // show loader in form element

$(document).ready(function () {
  // get all databases
  getAllDatabases();
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