// Show alert with Toastify --- https://apvarun.github.io/toastify-js/
function getToast(text = "Toast Called!", type = "primary") {
  var alertType = {
    primary: { bgColor: "#563ec9", icon: "fa-solid fa-circle-info" },
    success: { bgColor: "#00CE88", icon: "fa-solid fa-circle-check" },
    warning: { bgColor: "#E9AB48", icon: "fa-solid fa-circle-exclamation" },
    danger: { bgColor: "#C21606", icon: "fa-solid fa-circle-xmark" },
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
