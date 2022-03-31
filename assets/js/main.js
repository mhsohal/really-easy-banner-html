(function($) {

    "use strict";

    var Medi = {
        init: function() {
            this.Basic.init();
        },

        Basic: {
            init: function() {
                this.BackgroundImage();
                this.MobileMenu();
                this.Niceselect();
                this.SponserSlider();
                this.TestimonialOne();
            },
            BackgroundImage: function() {
                $('[data-background]').each(function() {
                    $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
                });
            },
            MobileMenu: function() {
                jQuery(window).on('scroll', function() {
                    if (jQuery(window).scrollTop() > 250) {
                        jQuery('.main-header').addClass('sticky-on')
                    } else {
                        jQuery('.main-header').removeClass('sticky-on')
                    }
                });
                $('.open_mobile_menu').on("click", function() {
                    $('.mobile_menu_wrap').toggleClass("mobile_menu_on");
                });
                $('.open_mobile_menu').on('click', function() {
                    $('body').toggleClass('mobile_menu_overlay_on');
                });
                if ($('.mobile_menu li.dropdown ul').length) {
                    $('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
                    $('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
                        $(this).prev('ul').slideToggle(500);
                    });
                }
            },
            Niceselect: function() {
                $(document).ready(function() {
                    $('select').niceSelect();
                });
            },
            SponserSlider: function() {
                var swiperPartnarSlider = new Swiper(".sponserSlider", {
                    slidesPerView: 2,
                    loop: true,
                    autoplay: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        345: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        525: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    },
                });
            },
            TestimonialOne: function() {
                var swipergrid = new Swiper(".testiOneSlide", {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        345: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        525: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    },
                });
            },
        }
    };
    jQuery(document).ready(function() {
        Medi.init();
    });
})(jQuery);