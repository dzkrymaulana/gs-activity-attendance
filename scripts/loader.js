function pageLoader(event = "show") {
  var spinnerPage = $(
    '<div id="spinner" class="spinner-border" role="status">' +
      '<span class="visually-hidden" >Loading...</span>' +
      "</div>"
  );
  if (event == "show") {
    var spinnerPageLoad = spinnerPage.addClass("text-primary");
    $("#page-loader").append(spinnerPageLoad);
  } else if (event == "hide") {
    $("#page-loader").addClass("fade-out");
    setTimeout(function () {
      $("#page-loader").remove();
    }, 100);
  }
}

function getLoader(selector = "", text = "Loading...") {
  var spinnerWrapper = $(
    "<div class='loader-wrapper container py-1 my-1 d-flex justify-content-center align-items-center gap-2' data-loader-state></div>"
  );
  var spinner = $(
    '<span id="spinner" class="spinner-border spinner-border-sm" role="status"></span><span class="" role="status">' +
      text +
      "</span></div>"
  );

  if (selector !== "") {
    spinnerWrapper.attr("data-loader-state", selector);
    spinnerWrapper.append(spinner);

    $(selector).addClass("d-none");
    $(selector).before(spinnerWrapper);
  }
}

function hideLoader(selector = "") {
  if (selector !== "") {
    $("[data-loader-state='" + selector + "']").remove();
    $(selector).removeClass("d-none");
  }
}
