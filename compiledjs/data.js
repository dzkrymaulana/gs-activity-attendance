var personDatabase = [
  { id: "A7D3K2B5", name: "Rizky Pratama Putra" },
  { id: "F8J6L2X1", name: "Siti Aisyah Dewi" },
  { id: "B4H7R1M3", name: "Ahmad Fadli Rahman" },
  { id: "C9G3N8Y6", name: "Putri Maharani" },
  { id: "P1Q2R4K7", name: "Dian Eka Saputra" },
  { id: "X5T8Z3N1", name: "Budi Santoso" },
  { id: "M6R9W5Q2", name: "Sri Hartati" },
  { id: "L2J5D9C8", name: "Hendra Wijaya" },
  { id: "Q8N4L7P6", name: "Maya Puspita Sari" },
  { id: "Z3A5T1X9", name: "Yusuf Rahmatullah" },
  { id: "D2H7K4G9", name: "Rahmat Hidayat" },
  { id: "S9V3L1F8", name: "Andi Setiawan" },
  { id: "W4T8J2Z6", name: "Mega Kusuma Putri" },
  { id: "K7M5Q3N2", name: "Eko Prasetyo" },
  { id: "L9C1T8P3", name: "Indah Permata Sari" },
  { id: "X2B4N7Q5", name: "Agung Saputra" },
  { id: "J5F9K6Y1", name: "Wulan Anggraeni" },
  { id: "R3P8H2M4", name: "Dewi Susanti" },
  { id: "Q4D6Z9W3", name: "Bambang Wicaksono" },
  { id: "T8L2N5K7", name: "Lestari Sari Dewi" },
  { id: "F3H1K9P7", name: "Fajar Ramadhan" },
  { id: "M5J2X8L4", name: "Arif Budiman" },
  { id: "V6G4N3C9", name: "Hasan Alfarizi" },
  { id: "N7L1J5Y3", name: "Putra Nugraha" },
  { id: "Y3Q6F8Z2", name: "Irma Wahyuni" },
  { id: "P8M4T1D9", name: "Dina Kusumawati" },
  { id: "Z6B2R9H5", name: "Samsul Hadi" },
  { id: "G9V1C4T3", name: "Novi Yuliani" },
  { id: "H4D8L7M2", name: "Asep Sutisna" },
  { id: "C3R5J9W1", name: "Citra Anggraini" },
];

var workPlaceDatabase = [
  { id: "AB123", name: "Jalan Merdeka Raya", area: "Jakarta" },
  { id: "CD456", name: "Pasar Baru", area: "Jakarta" },
  { id: "EF789", name: "Jalan Sudirman", area: "Jakarta" },
  { id: "GH012", name: "Plaza Indonesia", area: "Jakarta" },
  { id: "IJ345", name: "Taman Menteng", area: "Jakarta" },
  { id: "KL678", name: "Pantai Kuta", area: "Denpasar" },
  { id: "MN901", name: "Jalan Sunset Road", area: "Denpasar" },
  { id: "OP234", name: "Pasar Kumbasari", area: "Denpasar" },
  { id: "QR567", name: "Jalan Veteran", area: "Denpasar" },
  { id: "ST890", name: "Bali Mall Galleria", area: "Denpasar" },
  { id: "UV123", name: "Jalan Braga", area: "Bandung" },
  { id: "WX456", name: "Gedung Sate", area: "Bandung" },
  { id: "YZ789", name: "Pasar Baru Trade Center", area: "Bandung" },
  { id: "AB234", name: "Cihampelas Walk", area: "Bandung" },
  { id: "CD567", name: "Trans Studio Mall", area: "Bandung" },
  { id: "EF890", name: "Tunjungan Plaza", area: "Surabaya" },
  { id: "GH123", name: "Pakuwon Mall", area: "Surabaya" },
  { id: "IJ456", name: "Pasar Atom", area: "Surabaya" },
  { id: "KL789", name: "Jalan Pemuda", area: "Surabaya" },
  { id: "MN012", name: "Galaxy Mall", area: "Surabaya" },
  { id: "OP345", name: "Pasar Cinde", area: "Palembang" },
  { id: "QR678", name: "Benteng Kuto Besak", area: "Palembang" },
  { id: "ST901", name: "Jalan Sudirman", area: "Palembang" },
  { id: "UV234", name: "Palembang Trade Center", area: "Palembang" },
  { id: "WX567", name: "Jalan Kapten A Rivai", area: "Palembang" },
  { id: "YZ890", name: "Simpang Lima", area: "Semarang" },
  { id: "AB567", name: "Jalan Pahlawan", area: "Semarang" },
  { id: "CD890", name: "Pasar Johar", area: "Semarang" },
  { id: "EF123", name: "Tugu Muda", area: "Semarang" },
  { id: "GH456", name: "Kota Lama", area: "Semarang" },
  { id: "IJ678", name: "Jalan Thamrin", area: "Jakarta" },
  { id: "KL901", name: "Setiabudi One", area: "Jakarta" },
  { id: "MN234", name: "Blok M Plaza", area: "Jakarta" },
  { id: "OP567", name: "Jalan Gatot Subroto", area: "Jakarta" },
  { id: "QR890", name: "Kuningan City", area: "Jakarta" },
  { id: "ST123", name: "Ubud Art Market", area: "Denpasar" },
  { id: "UV456", name: "Nusa Dua Beach", area: "Denpasar" },
  { id: "WX789", name: "Sanur Beach Walk", area: "Denpasar" },
  { id: "YZ012", name: "Jalan Pantai Mengiat", area: "Denpasar" },
  { id: "AB345", name: "Sukawati Market", area: "Denpasar" },
  { id: "CD678", name: "Paris Van Java", area: "Bandung" },
  { id: "EF901", name: "Alun-Alun Bandung", area: "Bandung" },
  { id: "GH234", name: "Rumah Mode", area: "Bandung" },
  { id: "IJ567", name: "Dago Plaza", area: "Bandung" },
  { id: "KL890", name: "Museum Geologi", area: "Bandung" },
  { id: "MN123", name: "Ciputra World", area: "Surabaya" },
  { id: "OP456", name: "Royal Plaza", area: "Surabaya" },
  { id: "QR789", name: "Jalan Tunjungan", area: "Surabaya" },
  { id: "ST012", name: "Surabaya Plaza", area: "Surabaya" },
  { id: "UV345", name: "Kebun Binatang Surabaya", area: "Surabaya" },
];

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
