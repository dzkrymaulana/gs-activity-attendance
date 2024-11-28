/**
 * HTML FUNCTIONS
 */
function doGet(e) {
  var htmlOutput = HtmlService.createTemplateFromFile("index");
  return htmlOutput
    .evaluate()
    .setTitle("GS Activity Attendance")
    .setFaviconUrl(
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-miGHg1xlAu6pq040e6gHvZiTo6cb9TxZWbhhmaVSF9CYhOb6lue3SnEaej-A5MFux2vsjVwTO9ASGaQ-hDo3r9HZdOtScFLJAhyAORrg4D0oPVQznhZey9g0WygCVJJn0GwSj3hHKWuQQmBUOZ7_Pe0FBcMDCpTe8u3hH2OTJlRW4QmTn8RwxUg_qvs/s2000/icon%20activity%20app.png"
    )
    .addMetaTag("viewport", "width=device-width , initial-scale=1")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * ALL VARIABLES
 */

const v = {
  spreadsheetId: "1WG_vQMoS4oIpilYI2sif1Ycl5FbXBydj5M75HueByh8",
  folderId: "18GIuR9PQ7LI4taIEy-1ACa4w308-81H1",
  sheetName: {
    activityData: "activity-data",
    personData: "person-data",
    workplaceData: "workplace-data",
  },
};

/**
 * SPREADSHEET GET DATA RANGE
 */

function getDataSheet(sheet) {
  const dataSheet = SpreadsheetApp.openById(v.spreadsheetId)
    .getSheetByName(sheet)
    .getDataRange()
    .getValues();
  return dataSheet;
}

/**
 * SPREADSHEET APPEND DATA TO ROW
 */

function appendData(sheet = "", data = []) {
  let addRow;

  if (data.length < 0) {
    return false;
  } else if (sheet == "") {
    return false;
  } else {
    addRow = SpreadsheetApp.openById(v.spreadsheetId)
      .getSheetByName(sheet)
      .appendRow(data);
    if (addRow) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * EDIT CELL DATA
 */
function editDataSheet(sheet, cValue, rIndex, cIndex) {
  SpreadsheetApp.openById(v.spreadsheetId)
    .getSheetByName(sheet)
    .getRange(rIndex, cIndex)
    .setValue(cValue);
  return true;
}

/**
 * CHANGE RANGE DATA TO OBJECT (header as key)
 */

function toObjData(data, cols = [2, 3, 4]) {
  const database = data;
  var outputData = {};
  // looping data
  if (database.length > 0) {
    for (i = 1; i < database.length; i++) {
      if (database[i][0] !== "") {
        var row = {};
        var ci = cols;
        for (c = 0; c < ci.length; c++) {
          row[database[0][ci[c]]] = database[i][ci[c]];
        }
        outputData[i] = row;
      }
    }
  }
  return outputData;
}

/**
 * GET ALL DATABASES FROM CLIENT SIDE
 */

function getAllDatabases() {
  personData = getDataSheet(v.sheetName.personData);
  workplaceData = getDataSheet(v.sheetName.workplaceData);

  var returnData = {
    personDatabase: toObjData(personData, [1, 2]),
    workplaceDatabase: toObjData(workplaceData, [1, 2, 3]),
  };

  return returnData;
}

/**
 * CHECK IF USER HAS CLOCK IN ON SAME DATE
 */

function checkClockInStatus(id = "") {
  const database = getDataSheet(v.sheetName.activityData);
  const dt = new Date();
  const date = dt.toLocaleDateString();

  const filtered = database.filter(function (d) {
    const ts = new Date(d[0]);
    const tsCheck = ts.toLocaleDateString();
    if (tsCheck == date && d[1] == id && d[11] == "") {
      return d;
    }
  });

  var cdt = "";

  if (filtered.length > 0) {
    const fd = filtered[0];
    // pId-pNm-wpId-wpNm-actDesc-cInTime
    cdt =
      true +
      "|" +
      fd[1] +
      "|" +
      fd[2] +
      "|" +
      fd[3] +
      "|" +
      fd[4] +
      "|" +
      fd[5] +
      "|" +
      fd[7];
    return cdt;
  } else {
    cdt = "false|";
    return cdt;
  }
}

/**
 * UPLOAD CAPTURED IMAGE
 */

function uploadImage(img, fileName) {
  var mimeType = "image/*";
  var destination = DriveApp.getFolderById(v.folderId);
  var imgData = Utilities.base64Decode(img);
  var blob = Utilities.newBlob(imgData, mimeType, fileName);
  var imgId = destination.createFile(blob).getId();
  return imgId;
}

/**
 * SAVE CAPTURED IMAGE FROM CLIENT SIDE
 */

function savePicture(fileData = "", fileName = "") {
  var uc = {};
  if (fileData == "") {
    uc.status = "error";
    uc.error = "Image cannot be processed, image data is missing";
    return uc;
  } else if (fileName == "") {
    uc.status = "error";
    uc.error = "Invalid file name";
    return uc;
  } else {
    uc.status = "success";
    uc.fileId = uploadImage(fileData, fileName);
    return uc;
  }
}

/**
 * SAVE CLOCK IN DATA FROM CLIENT SIDE
 */
function saveClockInData(data) {
  var ts = new Date();
  var rowData = [
    ts,
    data.personId,
    data.personName,
    data.workplaceId,
    data.workplaceName,
    data.activityDesc,
    ,
    ts,
    data.coord,
    data.locName,
    data.pictId,
    ,
    ,
    ,
    ,
  ];

  const save = appendData(v.sheetName.activityData, rowData);

  if (save) {
    return true;
  } else {
    return false;
  }
}

/**
 * SAVE CLOCK OUT DATA FROM CLIENT SIDE
 */

function saveClockOutData(data) {
  const d = data;
  const s = v.sheetName.activityData;
  const dtN = new Date();
  const dtNStr = dtN.toLocaleDateString();

  const database = getDataSheet(v.sheetName.activityData);

  const setData = database.filter(function (db, i) {
    const dtDb = new Date(db[0]);
    const dtDbStr = dtDb.toLocaleDateString();

    if (
      dtDbStr == dtNStr &&
      db[1] == d.personId &&
      db[3] == d.workplaceId &&
      db[11] == ""
    ) {
      const ot = editDataSheet(s, dtN, i + 1, 12);
      const olc = editDataSheet(s, d.coord, i + 1, 13);
      const oln = editDataSheet(s, d.locName, i + 1, 14);
      const opi = editDataSheet(s, d.pictId, i + 1, 15);
      const on = editDataSheet(s, d.activityNotes, i + 1, 7);

      if (
        ot == true &&
        olc == true &&
        oln == true &&
        opi == true &&
        on == true
      ) {
        return true;
      }
    }
  });
  if (setData) {
    return true;
  } else {
    return false;
  }
}
