
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

    $(".white-header").each(function () {
        whiteHeaderOffsets.push([$(this).offset().top, $(this).outerHeight()])
    })

    $(document).on("scroll", function (e) {
        header.addClass("hidden-header")
        clearTimeout(headerTimeout)
        headerTimeout = setTimeout(function () {
            let offset = $(document).scrollTop()
            header.removeClass("white")
            for (let i = 0; i < whiteHeaderOffsets.length; i++) {
                if (offset >= whiteHeaderOffsets[i][0] && offset < (whiteHeaderOffsets[i][0] + whiteHeaderOffsets[i][1] - 30)) {
                    header.addClass("white")
                }
            }
            header.removeClass("hidden-header")
        }, 500)
    })

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
            top: 0,
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
            top: 90,
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
            top: 80,
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
    ScrollReveal().reveal('.projects-swiper-slide__title-animation', {
        reset: true,
        duration: 1000,
        opacity: 1,
        viewOffset: {
            top: 100,
            right: 0,
            bottom: 20,
            left: 0,
        },
        beforeReveal: function (el) {
            el.classList.add("show")
        },
        beforeReset: function (el) {
            el.classList.remove("show")
        },
    });
    ScrollReveal().reveal('.projects-swiper-slide__text-animation', {
        reset: true,
        duration: 1000,
        opacity: 1,
        viewOffset: {
            top: 200,
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
    ScrollReveal().reveal('.design-main__button-anchor', {
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
    ScrollReveal().reveal('.projects__gray-line .gray-line', {
        reset: true,
        duration: 1000,
        opacity: 1,
        viewOffset: {
            top: 170,
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
            top: 270,
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
            top: 250,
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

    if ($(".specialists-swiper")) {
        const swiper = new Swiper('.specialists-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            //effect: 'creative',
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

    if ($(".result-swiper")) {
        const swiper = new Swiper('.result-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
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
    $(".projects__button-anchor .round-button").click(function () {
        $(".projects").addClass("fullscreen")
        $('html, body').animate({ scrollTop: $(".projects-swiper-box").offset().top }, 1000)
    })

    if ($(".test-swiper")) {
        new Swiper('.test-swiper', {
            direction: "vertical",
            loop: false,
            slidesPerView: 1,
            speed: 1000,
        });
    }

    $(".services-section__item").click(function () {
        let that = $(this),
            topOffset = that.offset().top - $(document).scrollTop(),
            leftOffset = that.offset().left
        that.css("top",  topOffset + "px")
        that.css("left",  leftOffset + "px")
        that.parent().addClass("isSelected")
        header.addClass("white")
        that.animate({
            top: 0,
            left: 0
        }, 0, "linear")
    })

    setTimeout(function () {
        $("body").removeClass("isLoading").addClass("intoAnimation")
    },300)
});