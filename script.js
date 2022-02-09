$(document).ready(function () {
  $(document).scroll(function (evt) {
    var v2 = Math.abs($(".box").position().top - $(window).height() / 2);
    var v1 = $(this).scrollTop();
    if (v1 > v2) {
      console.log("in");
      $(".box").addClass("animated flip");
    }
  });
});
