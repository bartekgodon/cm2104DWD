$(document).ready(function() {

  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#headerBanner').height()) {
      $('#navigationBar').addClass('navbar-fixed');
        $('#pageContent').addClass('padding');
    }
    if ($(window).scrollTop() < $('#headerBanner').height()) {
      $('#navigationBar').removeClass('navbar-fixed');
        $('#pageContent').addClass('padding');
    }
  });
});
