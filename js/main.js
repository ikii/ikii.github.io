$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 140) {
            $('#nav').addClass('fixed');
        }
        if ($(window).scrollTop() < 140) {
            $('#nav').removeClass('fixed');
        }
    });
});