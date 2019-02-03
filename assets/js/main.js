// commercial project SoftService 24 | 2019 | url: areaweb.su


document.body.onload = function () {
    $('.preloader').addClass('preloader-off');
};

$(document).ready(function () {

    $('.effect-line-one').addClass('slide-effect-left-r');
    $('.effect-line-two').addClass('slide-effect-right');

    setTimeout(function () {
        $('.effect-line-one').removeClass('slide-effect-left-r');
        $('.effect-line-two').removeClass('slide-effect-right');
        $('.effect-line-one').addClass('slide-effect-right-r');
        $('.effect-line-two').addClass('slide-effect-left');
    }, 1500);

    $('.main-section').mousemove(function (e) {

        const x = e.pageX / $(window).width();
        const y = e.pageY / $(window).height();

        $('.main-section-bg').css({
            "transform":"translate(-" + x * 30 + "px, -" + y * 30 + "px)"
        });

    })

    $('.page-section').mousemove(function (e) {

        const x = e.pageX / $(window).width();
        const y = e.pageY / $(window).height();

        $('.main-section-bg').css({
            "transform":"translate(-" + x * 30 + "px, -" + y * 30 + "px)"
        });

    })

});

$('.burger').click(function () {

    $('.burger-two').toggleClass('op-null');
    $('.burger-one').toggleClass('burger-one-transform');
    $('.burger-three').toggleClass('burger-three-transform');
    $('.burger').toggleClass('white-bg-burger');
    $('.burger').toggleClass('fixed');

    $('.sidebar-nav').toggleClass('sidebar-nav-show');

});