$("body").addClass("hidden");

$(window).on("load", function () {
    $('.preloader p').css("animation-iteration-count", "1");
    window.setTimeout(function(){$('.preloader').fadeOut(2600)}, 2000);
    $('.preloader p').fadeOut(1700);
});