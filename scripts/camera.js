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
