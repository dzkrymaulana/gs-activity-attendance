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

  getLoader("#submit-btn", "Memerikas Status...");
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
