$(document).ready(function(){
    // menu responsive
    $('[data-target]').on('click', function(){
        var target = $(this).data("target");
        if($(this).hasClass('hamburger') || $(this).hasClass('overlay')) {
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
    var introSlider = new Swiper('.intro-slider', {    
        simulateTouch: false,
        watchOverflow: true,
        slidesPerView: 1,
        effect: 'fade',
        mousewheel: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        centeredSlides: true,
        cssMode: false,
        loop: true,
        speed: 1000,
        allowTouchMove: false,
        thumbs: {
            swiper: introNums
        },
        pagination: {
            el: '',
            clickable: true,
    },
    mousewheel: {
        forceToAxis: true,
    },
    keyboard: false,
    navigation: {
        nextEl: '#next--intro',
        prevEl: '#prev--intro',
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
        keyboard: false,
        breakpoints: {
            991: {
                mousewheelControl: false,
            },
        }
    });
    var introNums = new Swiper('.intro-nums-slider', {
        simulateTouch: false,
        spaceBetween: 0,
        slidesPerView: 5,
        freeMode: false,
        cssMode: false,
        centeredSlides: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: false,
        slideToClickedSlide: true,
        touchRatio: 0.2,
        loop: true,
        allowTouchMove: true,
        navigation: {
            nextEl: '#next--intro',
            prevEl: '#prev--intro',
        },
        autoplay: 
        {
          delay: 300000,
          disableOnInteraction: false,
        },
        mousewheel: {
            forceToAxis: true,
        },
    });
    $(function () {
        introNums.controller.control = introSlider;
    });

    var mySwiper = undefined;
        function initSwiper() {
            var screenWidth = $(window).width();
            if(screenWidth > 575 && mySwiper == undefined) {             
                $('.swiper-disc--cards-main').css('display', 'block');      
                mySwiper = new Swiper('.swiper-container--cards-main', {            
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
                        767: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        1601: {
                            slidesPerView: 5,
                        },
                    }
                });
            } else if (screenWidth < 575 && mySwiper != undefined) {
                mySwiper.destroy();
                mySwiper = undefined;
                $('.swiper-wrapper--cards-main').removeAttr('style');
                $('.swiper-slide--cards-main').removeAttr('style');
                $('.swiper-disc--cards-main').css('display', 'none');
            }        
        }

    //Swiper plugin initialization
    initSwiper();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function(){
        initSwiper();        
    });
    var swiper = new Swiper('.swiper-container--cards', {
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
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1601: {
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
        slidesPerView: 'auto',
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
        el: '',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
            1601: {
                slidesPerView: 3,
            },
        }
    });

    // AOS aniamte

    $(function () {
        AOS.init();
    });
});