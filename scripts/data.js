var localData = {
  database: {
    personData: personDatabase,
    workplaceData: workPlaceDatabase,
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

// check if person has clock in
function checkClockInStatus(id, name) {
  var personIndex = 1;
  var workplaceIndex = 3;
  localData.clockInStatus.status = true;
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
}

// clock in function
function clockIn() {
  if ($("select#name").val() == "") {
    getToast('"Name" is required!', "danger");
    $("select#name").focus();
  } else if ($("select#workplace").val() == "") {
    getToast('"Workplace" is required!', "danger");
    $("select#workplace").focus();
  } else if ($("textarea#activity-desc").val() == "") {
    getToast('"Activity Description" is required!', "danger");
    $("textarea#activity-desc").focus();
  } else if (localData.location.locationCoordinate == "") {
    getToast("Device location not detected!", "danger");
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

  if (!$("#clock-in-form").hasClass("d-none")) {
    $("#clock-in-form").removeClass("d-none");
  }
  if (!$("#clock-out-form").hasClass("d-none")) {
    $("#clock-out-form").removeClass("d-none");
  }

  getToast("Clock In Berhasil!", "success");

  $("#clock-in-form").addClass("d-none");

  $("#main-form input, #main-form textarea, #main-form select").val("");
  select2Init();
}

// clock out function
function clockOut() {
  if ($("select#name").val() == "") {
    getToast('"Name" is required!', "danger");
    $("select#name").focus();
  } else if (localData.location.locationCoordinate == "") {
    getToast("Device location not detected!", "danger");
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

  getToast("Clock Out Berhasil!", "success");

  $("#clock-out-form").addClass("d-none");

  $("#main-form input, #main-form textarea, #main-form select").val("");
  select2Init();
}
