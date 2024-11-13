// Show alert with Toastify --- https://apvarun.github.io/toastify-js/
function getToast(text = "Toast Called!", type = "info") {
  var alertType = {
    info: { bgColor: "#563ec9", icon: "fa-solid fa-circle-info" },
    success: { bgColor: "#00CE88", icon: "fa-solid fa-circle-check" },
    warning: { bgColor: "#E9AB48", icon: "fa-solid fa-circle-exclamation" },
    error: { bgColor: "#C21606", icon: "fa-solid fa-circle-xmark" },
  };

  var textNode = document.createElement("span");
  var iconNode = document.createElement("i");
  iconNode.classList = alertType[type].icon;

  textNode.innerHTML = "&nbsp;&nbsp;" + text + " ";
  textNode.prepend(iconNode);

  Toastify({
    // text: textNode+"  ",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    node: textNode,
    // backgroundColor: "transparent",
    style: {
      background: alertType[type].bgColor,
    },
  }).showToast();
}

// using SweetAlert2 -- https://sweetalert2.github.io/
function getAlert(text = "This Alert", type = "success") {
  var title;
  switch (type) {
    case "success":
      title = "Success!";
      break;
    case "error":
      title = "Error!";
      break;
    case "warning":
      title = "Warning!";
      break;
    case "info":
      title = "Information";
      break;
    case "question":
      title = "Are You Sure?";
      break;
  }

  Swal.fire({
    title: title,
    text: text,
    icon: type,
  });
}
