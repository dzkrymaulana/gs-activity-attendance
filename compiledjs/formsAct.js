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
