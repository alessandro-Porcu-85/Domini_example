$(document).ready(function() {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /*click-event on toggle menu*/
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })



    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            560: {
                items: 2,
                nav: false
            },
            960: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

    // click to scroll top
    $('.move-up span').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 3000);
    })

});