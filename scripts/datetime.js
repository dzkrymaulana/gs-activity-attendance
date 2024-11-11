// DATETIME HELPER

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
