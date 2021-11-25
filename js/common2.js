$(document).ready(function(){

    // menu responsive
    $('[data-target]').on('click', function(){
        var target = $(this).data("target");
        if($(this).hasClass('hamburger')) {
            $(target).toggleClass('active').siblings('.overlay').toggleClass('active');
            console.log('hamburger');
        }
        else {
            $(this).toggleClass('active').siblings(target).slideToggle();
        }
        if($(this).hasClass('search-icon')) {
            $('#search-mobile').focus();
        }
    });


    // carousel
    var swiper = new Swiper('.swiper-container--intro', {
        simulateTouch: false,
        watchOverflow: true,
        slidesPerView: 1,
        effect: 'fade',
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        speed: 3000,
        autoplay: 
        {
          delay: 3000,
        },
        navigation: {
        nextEl: '.next--primary',
        prevEl: '.prev--primary',
    },
        pagination: {
        el: '.disc',
        clickable: true,
    },
    on: {
        slideChangeTransitionStart: function () {
            $('.intro__picture').hide(0);
            $('.intro__picture').removeClass('aos-init').removeClass('aos-animate');
          },
        slideChangeTransitionEnd: function () {
            $('.intro__picture').show(0);
            AOS.init();
        },
    },
        mousewheel: {
        forceToAxis: true,
    },
        keyboard: false,
    });
    var swiper = new Swiper('.swiper-container--cards', {
        slidesPerView: 5,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '.disc',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 4,
            },
            1230: {
                slidesPerView: 5,
            },
        }
    });
    var swiper = new Swiper('.swiper-container--card-image', {
        slidesPerColumn: 1,
        slidesPerView: 1,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        pagination: {
            el: '.disc',
            clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            992: {
                slidesPerColumn: 2,
                slidesPerView: 1,
            },
        }
    });
    var swiper = new Swiper('.swiper-container--collection', {
        slidesPerView: 3,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next--default',
        prevEl: '.prev--default',
    },
        pagination: {
        el: '.disc',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        }
    });
});