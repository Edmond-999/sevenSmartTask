$(document).ready(function () {
  $(".burger").click(function () {
    if ($(".nav-ul").hasClass("opened")) {
      $(".nav-ul").removeClass("opened");
    } else {
      $(".nav-ul").addClass("opened");
    }
  });
  $(".burger").click(function () {
    if ($(".lines").hasClass("opened")) {
      $(".lines").removeClass("opened");
    } else {
      $(".lines").addClass("opened");
    }
  });
});
