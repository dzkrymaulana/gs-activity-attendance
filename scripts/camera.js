function getCamera() {
  // INISIASI KOMPATIBILITAS KAMERA
  if (navigator.mediaDevices?.getUserMedia) {
    // console.log("Camera supported");
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

function captureImage(imgName = "", next = function () {}) {
  const video = document.querySelector("video");
  const output = document.querySelector("#output");

  const context = output.getContext("2d");
  const timeNow = new Date().toISOString();

  output.width = 768;
  output.height = 1024;

  context.fillText(timeNow, 100, 100);

  // membuat gambar
  context.drawImage(video, 0, 0, output.width, output.height);

  var fileData = output.toDataURL().split("base64,")[1];

  // upload
  uploadToDrive(fileData, imgName, true, next);
}

// MENYIMPAN KE DRIVE
function uploadToDrive(
  fileData,
  fileName,
  microTime = true,
  next = function () {}
) {
  let now = Date.now();
  var fileName = fileName;
  microTime ? (fileName += now) : (fileName = fileName);

  // menyimpan gambar ke google drive
  next(localData.formValue);
}
