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

function getDatabase() {
  localData.database.personData = personDatabase;
  localData.database.workplaceData = workPlaceDatabase;

  setSelectDatabase();
}

// check if person has clock in
function checkClockInStatus(id = "", name = "") {
  if (id !== "" && name !== "") {
    // start code block for google script request
    // google.script.run.withSuccessHandler(function(data){
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
      var inData = localData.clockInStatus.clockInData;
      $("#clock-in-workplace").text(inData.workplaceName);
      $("#clock-in-activity").text(inData.activityDesc);
      $("#clock-in-time").text(inData.clockInTimestamp);
      localData.formValue.personId = inData.personId;
      localData.formValue.personName = inData.personName;
      localData.formValue.workplaceId = inData.workplaceId;
      localData.formValue.workplaceName = inData.workplaceName;
      localData.formValue.activityDesc = inData.activityDesc;

      $("#clock-out-form").removeClass("d-none");
      setTimeout(function () {
        hideLoader("#submit-btn");
        $("#submit-btn")
          .attr("onclick", "clockOut()")
          .children("span")
          .text("Clock Out");
      }, 1000);
    } else {
      $("#clock-in-form").removeClass("d-none");
      setTimeout(function () {
        hideLoader("#submit-btn");
        $("#submit-btn")
          .attr("onclick", "clockIn()")
          .children("span")
          .text("Clock In");
      }, 1000);
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
    // clockInProcess();
    captureImage("(in)" + localData.formValue.personId, clockInProcess);
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
    captureImage("(out)" + localData.formValue.personId, clockOuProcess);
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
