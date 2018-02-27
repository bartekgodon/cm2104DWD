$(document).ready(function() {

  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#headerBanner').height()) {
      $('#navigationBar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < $('#headerBanner').height()) {
      $('#navigationBar').removeClass('navbar-fixed');
    }
  });
});
