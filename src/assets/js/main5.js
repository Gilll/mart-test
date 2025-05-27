
$(document).ready(function() {

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

    function checkHeaderColor() {
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
    }

    $(document).on("scroll", function (e) {
        checkHeaderColor()
    })

    checkHeaderColor()

    ScrollReveal().reveal('.slide-up-in-view', {
        reset: true,
        duration: 1000,
        distance: '100%',
        viewOffset: {
            top: 110,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    ScrollReveal().reveal('.slide-up-in-view100', {
        reset: true,
        duration: 1000,
        distance: '100%',
        viewOffset: {
            top: 150,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    ScrollReveal().reveal('.slide-up-in-view150', {
        reset: true,
        duration: 1000,
        distance: '100%',
        viewOffset: {
            top: 200,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    ScrollReveal().reveal('.slide-up-in-view0', {
        reset: true,
        duration: 1000,
        distance: '100%',
        viewOffset: {
            top: 110,
            right: 0,
            bottom: 0,
            left: 0,
        }
    });
    ScrollReveal().reveal('.slide-down-in-view', {
        reset: true,
        duration: 1000,
        distance: '-100%',
        viewOffset: {
            top: 110,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    ScrollReveal().reveal('.slide-down-in-view150', {
        reset: true,
        duration: 1000,
        distance: '-100%',
        viewOffset: {
            top: 180,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    ScrollReveal().reveal('.slide-down-in-view100', {
        reset: true,
        duration: 1000,
        distance: '-100%',
        viewOffset: {
            top: 150,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    ScrollReveal().reveal('.slide-left-in-view', {
        reset: true,
        duration: 1000,
        distance: '-100%',
        origin: 'left',
        viewOffset: {
            top: 110,
            right: 0,
            bottom: 60,
            left: 0,
        }
    });
    ScrollReveal().reveal('.animation-height', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.main-view__button-text', {
        reset: true,
        duration: 1000,
        opacity: 1,
        viewOffset: {
            top: 150,
            right: 0,
            bottom: 0,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    ScrollReveal().reveal('.main-view__arrow', {
        reset: true,
        duration: 1000,
        opacity: 1,
        viewOffset: {
            top: 135,
            right: 0,
            bottom: 0,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    ScrollReveal().reveal('.primary-button__circle-anchor', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.architecture-main__button-anchor', {
        reset: true,
        duration: 1000,
        opacity: 1,
        viewOffset: {
            top: 200,
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
    ScrollReveal().reveal('.main-view__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.price-supervision__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.premium__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.design-main__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.design-components__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.about-section__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.prices__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.prices-design__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.project__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.complectation__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.price-assembly__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.vision-main__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.supervisors__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.architecture-main__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.steps-list__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.piter__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.steps__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.about-advantages__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.faq-list__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.about-advantages__item-wrapper', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.services-desc__gray-line .gray-line', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.projects-swiper-slide__wrapper-a', {
        reset: true,
        duration: 1000,
        distance: '100%',
        scale: 1.2,
        viewOffset: {
            top: 100,
            right: 0,
            bottom: 100,
            left: 0,
        }
    });
    ScrollReveal().reveal('.scale-into-view', {
        reset: true,
        duration: 1000,
        scale: 1.2,
        viewOffset: {
            top: 100,
            right: 0,
            bottom: 100,
            left: 0,
        }
    });
    ScrollReveal().reveal('.piter__title', {
        reset: true,
        duration: 1000,
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
    ScrollReveal().reveal('.services-list__item', {
        reset: true,
        duration: 1000,
        scale: 0,
        viewOffset: {
            top: 100,
            right: 0,
            bottom: 100,
            left: 0,
        }
    });
    //ScrollReveal().reveal('.tagline', { delay: 500 });

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
    if ($(".premium-service-slider")) {
        const swiper = new Swiper('.premium-service-slider', {
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
                nextEl: '.premium-service-swiper__next',
                prevEl: '.premium-service-swiper__prev',
            }
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

    if ($(".interiors-swiper")) {
        const swiper = new Swiper('.interiors-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            //effect: 'creative',
            creativeEffect: {},
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

    setTimeout(function () {
        $("body").removeClass("isLoading").addClass("intoAnimation")
    },300)
});