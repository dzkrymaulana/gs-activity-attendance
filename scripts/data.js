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
  clockInStatus: {
    status: true,
    clockInData: {},
    clockInSetData: function () {
      var data = this.clockInData;
    },
  },
};

function checkClockInStatus(id, name) {
  return true;
}
