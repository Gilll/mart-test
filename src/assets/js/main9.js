
$(document).ready(function() {

    ScrollTrigger.debug = true;

    if ($("#play-video")) {
        $("#play-video").click(function() {
            let vid = document.getElementById("premium-video")
            $(".header").addClass("white")
            $("#premium").attr("animation-step", 1).removeClass("animation-state-0").addClass("animation-state-1")
            if (vid) vid.play()
        })
    }

    let header = $(".header"),
        headerTimeout,
        whiteHeaderOffsets = []

    /*$(".white-header").each(function () {
        whiteHeaderOffsets.push([$(this).offset().top, $(this).outerHeight() - 70])
    })*/
    $(".giga-white-header").each(function () {
        whiteHeaderOffsets.push([$(this).offset().top, $(this).outerHeight() - 70])
    })

    $(document).on("scroll", function (e) {
        header.addClass("hidden-header")
        clearTimeout(headerTimeout)
        headerTimeout = setTimeout(function () {
            let offset = $(document).scrollTop()
            header.addClass("white-bg")
            for (let i = 0; i < whiteHeaderOffsets.length; i++) {
                if (offset >= whiteHeaderOffsets[i][0] && offset < (whiteHeaderOffsets[i][0] + whiteHeaderOffsets[i][1] - 30)) {
                    header.removeClass("white-bg")
                }
            }
            header.removeClass("hidden-header")
        }, 500)
    })

    if ($(".slide-up-in-view100")) ScrollTrigger().reveal('.slide-up-in-view100', {
        reset: true,
        duration: 500,
        distance: '100%',
        viewOffset: {
            top: 150,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    if ($(".slide-up-in-view")) ScrollTrigger().reveal('.slide-up-in-view', {
        reset: true,
        duration: 500,
        distance: '100%',
        viewOffset: {
            top: 110,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });

    if ($(".slide-up-in-view150")) ScrollTrigger().reveal('.slide-up-in-view150', {
        reset: true,
        duration: 500,
        distance: '100%',
        viewOffset: {
            top: 200,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    if ($(".slide-up-in-view0")) ScrollTrigger().reveal('.slide-up-in-view0', {
        reset: true,
        duration: 500,
        distance: '100%',
        viewOffset: {
            top: 110,
            right: 0,
            bottom: 0,
            left: 0,
        }
    });
    if ($(".slide-down-in-view")) ScrollTrigger().reveal('.slide-down-in-view', {
        reset: true,
        duration: 500,
        distance: '-100%',
        viewOffset: {
            top: 110,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    if ($(".slide-down-in-view150")) ScrollTrigger().reveal('.slide-down-in-view150', {
        reset: true,
        duration: 500,
        distance: '-100%',
        viewOffset: {
            top: 180,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    if ($(".slide-down-in-view100")) ScrollTrigger().reveal('.slide-down-in-view100', {
        reset: true,
        duration: 500,
        distance: '-100%',
        viewOffset: {
            top: 150,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    if ($(".slide-left-in-view")) ScrollTrigger().reveal('.slide-left-in-view', {
        reset: true,
        duration: 500,
        distance: '-100%',
        origin: 'left',
        viewOffset: {
            top: 110,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    if ($(".animation-height")) ScrollTrigger().reveal('.animation-height', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 60,
            right: 0,
            bottom: 50,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".button-animation")) ScrollTrigger().reveal('.button-animation', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 40,
            right: 0,
            bottom: 40,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".primary-button__circle-anchor")) ScrollTrigger().reveal('.primary-button__circle-anchor', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 110,
            right: 0,
            bottom: 100,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    $(".mob-header-icon").click(function () {
        $('body').addClass("body-lock")
        $(this).parent().parent().addClass("menu-is-open")
    })
    $(".close-menu").click(function () {
        $('body').removeClass("body-lock")
        $(this).parent().parent().removeClass("menu-is-open")
    })
    if ($(".main-view__gray-line .gray-line")) ScrollTrigger().reveal('.main-view__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 170,
            right: 0,
            bottom: 100,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".price-supervision__gray-line .gray-line")) ScrollTrigger().reveal('.price-supervision__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 170,
            right: 0,
            bottom: 100,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".premium__gray-line .gray-line")) ScrollTrigger().reveal('.premium__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 170,
            right: 0,
            bottom: 100,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".design-main__gray-line .gray-line")) ScrollTrigger().reveal('.design-main__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 170,
            right: 0,
            bottom: 100,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".design-components__gray-line .gray-line")) ScrollTrigger().reveal('.design-components__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 70,
            right: 0,
            bottom: 70,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".about-section__gray-line .gray-line")) ScrollTrigger().reveal('.about-section__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 70,
            right: 0,
            bottom: 70,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".prices__gray-line .gray-line")) ScrollTrigger().reveal('.prices__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 70,
            right: 0,
            bottom: 70,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".prices-design__gray-line .gray-line")) ScrollTrigger().reveal('.prices-design__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 70,
            right: 0,
            bottom: 70,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".project__gray-line .gray-line")) ScrollTrigger().reveal('.project__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 70,
            right: 0,
            bottom: 70,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".complectation__gray-line .gray-line")) ScrollTrigger().reveal('.complectation__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 70,
            right: 0,
            bottom: 70,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".price-assembly__gray-line .gray-line")) ScrollTrigger().reveal('.price-assembly__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 70,
            right: 0,
            bottom: 70,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".vision-main__gray-line .gray-line")) ScrollTrigger().reveal('.vision-main__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 70,
            right: 0,
            bottom: 70,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".supervisors__gray-line .gray-line")) ScrollTrigger().reveal('.supervisors__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 120,
            right: 0,
            bottom: 80,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".architecture-main__gray-line .gray-line")) ScrollTrigger().reveal('.architecture-main__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 120,
            right: 0,
            bottom: 80,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".steps-list__gray-line .gray-line")) ScrollTrigger().reveal('.steps-list__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 60,
            right: 0,
            bottom: 80,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".piter__gray-line .gray-line")) ScrollTrigger().reveal('.piter__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 60,
            right: 0,
            bottom: 80,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".steps__gray-line .gray-line")) {
        ScrollTrigger().reveal('.steps__gray-line .gray-line', {
            reset: true,
            duration: 500,
            opacity: 1,
            viewOffset: {
                top: 40,
                right: 0,
                bottom: 80,
                left: 0,
            },
            beforeReveal: function (el) {
                el.classList.add("show")
            },
            beforeReset: function (el) {
                el.classList.remove("show")
            },
        });
    }
    if ($(".main-view__button-anchor")) {
        ScrollTrigger().reveal('.main-view__button-anchor', {
            reset: true,
            duration: 500,
            opacity: 1,
            viewOffset: {
                top: 40,
                right: 0,
                bottom: 40,
                left: 0,
            },
            beforeReveal: function (el) {
                el.classList.add("show")
            },
            beforeReset: function (el) {
                el.classList.remove("show")
            },
        });
    }
    if ($(".about-advantages__gray-line .gray-line")) {
        ScrollTrigger().reveal('.about-advantages__gray-line .gray-line', {
            reset: true,
            duration: 500,
            opacity: 1,
            viewOffset: {
                top: 90,
                right: 0,
                bottom: 50,
                left: 0,
            },
            beforeReveal: function (el) {
                el.classList.add("show")
            },
            beforeReset: function (el) {
                el.classList.remove("show")
            },
        });
    }
    if ($(".faq-list__gray-line .gray-line")) ScrollTrigger().reveal('.faq-list__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 90,
            right: 0,
            bottom: 50,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".about-advantages__item-wrapper")) ScrollTrigger().reveal('.about-advantages__item-wrapper', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 90,
            right: 0,
            bottom: 50,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".services-desc__gray-line .gray-line")) ScrollTrigger().reveal('.services-desc__gray-line .gray-line', {
        reset: true,
        duration: 500,
        opacity: 1,
        viewOffset: {
            top: 200,
            right: 0,
            bottom: 70,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".projects-swiper-box--animation")) ScrollTrigger().reveal('.projects-swiper-box--animation', {
        reset: true,
        duration: 500,
        distance: '100%',
        viewOffset: {
            top: 20,
            right: 0,
            bottom: 20,
            left: 0,
        }
    });
    if ($(".scale-into-view")) ScrollTrigger().reveal('.scale-into-view', {
        reset: true,
        duration: 500,
        scale: 1.2,
        viewOffset: {
            top: 100,
            right: 0,
            bottom: 100,
            left: 0,
        }
    });
    if ($(".piter__title")) ScrollTrigger().reveal('.piter__title', {
        reset: true,
        duration: 500,
        viewOffset: {
            top: 200,
            right: 0,
            bottom: 150,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    if ($(".services-list__item")) ScrollTrigger().reveal('.services-list__item', {
        reset: true,
        duration: 500,
        scale: 0,
        viewOffset: {
            top: 70,
            right: 0,
            bottom: 70,
            left: 0,
        }
    });
    //ScrollTrigger().reveal('.tagline', { delay: 500 });

    if ($(".projects-swiper")) {
        const swiper = new Swiper('.projects-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            //effect: 'creative',
            creativeEffect: {},
            speed: 1000,
            navigation: {
                nextEl: '.projects-swiper__next',
                prevEl: '.projects-swiper__prev',
            },
            on: {
                slidePrevTransitionStart: s => {
                    let projects = $("#projects")
                    if (projects.hasClass("animation-state-0")) {
                        projects.removeClass("animation-state-0").addClass("animation-state-1").attr("animation-step", "1")
                        $(".header").addClass("white")
                    }
                }
                ,
                slidePrevTransitionEnd: s => {

                }
                ,
                slideNextTransitionStart: s => {
                    let projects = $("#projects")
                    if (projects.hasClass("animation-state-0")) {
                        projects.removeClass("animation-state-0").addClass("animation-state-1").attr("animation-step", "1")
                        $(".header").addClass("white")
                    }
                }
            }
        });
    }
    $("[call-modal]").click(function () {
        let modalId = $(this).attr("call-modal"),
            modal = $("#" + modalId)
        modal.addClass("show-modal")
        $("body").addClass("body-lock")
    })

    $(".modal-box .mob-cross").click(function () {
        $(this).parent().removeClass("show-modal").removeClass("success")
        $("body").removeClass("body-lock")
    })

    $(".time-picker-item").click(function () {
        $(this).parent().children().removeClass("active")
        $(this).addClass("active")
    })

    if ($(".specialists-swiper")) {
        const swiper = new Swiper('.specialists-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            //effect: 'creative',
            autoplay: {
                delay: 3000,
            },
            //allowTouchMove: false,
            effect: 'fade',
            creativeEffect: {},
            speed: 1000,
            navigation: {
                nextEl: '.specialists-swiper__next',
                prevEl: '.specialists-swiper__prev',
            },
            on: {
                slidePrevTransitionStart: s => {

                }
                ,
                slidePrevTransitionEnd: s => {

                }
                ,
                slideNextTransitionStart: s => {

                }
            }
        });
    }
    if ($(".piter-swiper")) {
        const swiper = new Swiper('.piter-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1.9,
            //effect: 'creative',
            autoplay: {
                delay: 5000,
            },
            spaceBetween: 16,
            //allowTouchMove: false,
            creativeEffect: {},
            speed: 1000,
            navigation: {
                nextEl: '.piter-swiper__next',
                prevEl: '.piter-swiper__prev',
            }
        });
    }
    if ($(".premium-service-slider") && $(".premium-service__text-slider")) {
        const swiper2 = new Swiper('.premium-service__text-slider', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            //effect: 'creative',
            //allowTouchMove: false,
            effect: 'fade',
            //creativeEffect: {},
            speed: 1000
        });
        const swiper = new Swiper('.premium-service-slider', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1.9,
            //effect: 'creative',
            autoplay: {
                delay: 5000,
            },
            spaceBetween: 16,
            //allowTouchMove: false,
            creativeEffect: {},
            speed: 1000,
            navigation: {
                nextEl: '.premium-service-swiper__next',
                prevEl: '.premium-service-swiper__prev',
            },
            thumbs: {
                swiper: swiper2,
            },
        });
    }
    if ($(".specialists-swiper--row")) {
        const swiper = new Swiper('.specialists-swiper--row', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1.9,
            //effect: 'creative',
            autoplay: {
                delay: 5000,
            },
            spaceBetween: 16,
            //allowTouchMove: false,
            creativeEffect: {},
            speed: 1000,
            navigation: {
                nextEl: '.specialists-swiper__next',
                prevEl: '.specialists-swiper__prev',
            }
        });
    }

    if ($(".result-swiper")) {
        const swiper = new Swiper('.result-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            spaceBetween: 20,
            //effect: 'creative',
            creativeEffect: {},
            speed: 1000,
            navigation: {
                nextEl: '.result-swiper__next',
                prevEl: '.result-swiper__prev',
            },
            on: {
                slidePrevTransitionStart: s => {

                }
                ,
                slidePrevTransitionEnd: s => {

                }
                ,
                slideNextTransitionStart: s => {

                }
            }
        });
    }

    function deviceOrientation() {
        var body = $("html");
        body.removeClass("rotation90").removeClass("rotation-90").removeClass("portrait").removeClass("horizontal")
        switch(window.orientation) {
            case 90:
                body.addClass('rotation90').addClass("horizontal");
                break;
            case -90:
                body.addClass('rotation-90').addClass("horizontal");
                break;
            default:
                body.addClass('portrait');
                break;
        }
        setTimeout(function () {
            ScrollTrigger().update()
        }, 1200)
    }
    window.addEventListener('orientationchange', deviceOrientation);
    deviceOrientation();

    if ($(".interiors-swiper")) {
        const swiper = new Swiper('.interiors-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            //effect: 'creative',
            //creativeEffect: {},
            spaceBetween: 14,
            speed: 1000,
            navigation: {
                nextEl: '.interiors-swiper__next',
                prevEl: '.interiors-swiper__prev',
            },
            on: {
                slidePrevTransitionStart: s => {

                }
                ,
                slidePrevTransitionEnd: s => {

                }
                ,
                slideNextTransitionStart: s => {

                }
            }
        });
    }

    if ($(".test-swiper")) {
        new Swiper('.test-swiper', {
            direction: "vertical",
            loop: false,
            slidesPerView: 1,
            speed: 1000,
        });
    }

    let startOffset = 0;

    $(".fullscreen-projects").click(function () {
        let that = $(".projects-swiper-box--animation"),
            topOffset = that.offset().top - $(document).scrollTop()


        that.css("transition",  "1s")
        that.css("top",  topOffset + "px")
        that.parent().addClass("fixed-block")
        setTimeout(function () {
            that.addClass("top0")
        }, 50)
        header.removeClass("white-bg").addClass("hide-phone")
        $("body").addClass("body-lock")
    })

    $("#send-request").click(function () {
        $("#feedback-modal").addClass("success")
    })

    $(".projects .white-cross").click(function () {
        let that = $(".projects-swiper-box--animation")

        $("body").removeClass("body-lock")
        that.removeClass("top0").parent()
        header.addClass("white-bg").removeClass("hide-phone")
        setTimeout(function () {
            that.attr("style", "").parent().removeClass("fixed-block")
        }, 1000)

    })

    $("#accept-cookies").click(function () {
        $(".cookies-wrapper").addClass("cookies-accepted");
    })

    setTimeout(function () {
        $("body").removeClass("isLoading").addClass("intoAnimation")
    },300)
});