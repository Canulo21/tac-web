import $ from "jquery";
import Revslider from "../../Revslider";

$(window).scroll(function () {
  // for navigation gsyicky
  var scroll = $(window).scrollTop();
  if (scroll >= 300) {
    $(".App-header").addClass("gsticky");
  } else {
    $(".App-header.gsticky").removeClass("gsticky");
  }

  // for not draging image Revslider
  document.getElementById("rev").setAttribute("draggable", false);

  //   for back-to-top
  var backTop = $(window).scrollTop();
  if (backTop >= 300) {
    $("#back-top").addClass("show");
  } else {
    $("#back-top.show").removeClass("show");
  }

  // progress bar on scroll
  $(document).on("scroll", function () {
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = (100 * pixels) / pageHeight;

    $(".progress-bar").css("width", progress + "%");
  });
});
