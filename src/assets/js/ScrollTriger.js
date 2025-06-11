
let triggers = [],
    defaultSettings = {
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
        }
    }

let documentObj = $(document),
    noOffset = $("html").hasClass("horizontal")

function checkEls() {
    let topViewPos = documentObj.scrollTop(),
        bottomViewPos = documentObj.scrollTop() + document.documentElement.clientHeight

    console.log(noOffset)
    triggers.forEach(function (item) {
        if (item.positionTop < bottomViewPos - (noOffset ? 0 : item.settings.viewOffset.bottom) && item.positionBottom > topViewPos + (noOffset ? 0 : item.settings.viewOffset.top)) {
            if (item.settings.beforeReveal) {
                item.settings.beforeReveal(item.el[0])
            }
            item.el.css("transform", "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)")
            item.el.css("opacity", "1")
            item.el.css("transition", "all 0.5s")
        } else {
            let transformStr = "matrix3d(";
            if (item.settings.beforeReset) {
                item.settings.beforeReset(item.el[0])
            }
            if (item.settings.scale !== undefined) {
                if (item.settings.scale === 0) {
                    transformStr += "0.001, 0, 0, 0, 0, 0.001, 0, 0, 0, 0, ";
                } else {
                    transformStr += item.settings.scale + ", 0, 0, 0, 0, " + item.settings.scale + ", 0, 0, 0, 0, ";
                }
            } else {
                transformStr += "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, ";
            }
            if (item.settings.distance) {
                if (item.settings.origin) {
                    if (item.settings.distance === "-100%") {
                        transformStr += "1, 0, -" + item.el.outerHeight() + ",0 , 0, 1)"
                    } else {
                        transformStr += "1, 0, " + item.el.outerHeight() + ",0 , 0, 1)"
                    }
                } else {
                    if (item.settings.distance === "-100%") {
                        transformStr += "1, 0, 0, -" + item.el.outerHeight() + ", 0, 1)"
                    } else {
                        transformStr += "1, 0, 0, " + item.el.outerHeight() + ", 0, 1)"
                    }
                }
            } else {
                transformStr += "1, 0, 0, 0, 0, 1)"
            }

            item.el.css("transform", transformStr)
            item.el.css("opacity", "0")
        }
    })
}

function ScrollTrigger() {
    return {
        reveal: function (selector, options) {
            $(selector).each(function () {
                let that = $(this),
                    elTop = Math.round(that.offset().top),
                    elBottom = elTop + Math.round(that.outerHeight())

                triggers.push({ positionTop: elTop, positionBottom: elBottom, el: that, settings: options });
                /*triggers.sort(function (a, b) {
                    if (a.position > b.position) {
                        return 1;
                    }
                    if (a.position < b.position) {
                        return -1;
                    }
                    return 0;
                });*/
            })
        },
        update: function () {
            for (let i = 0; i < triggers.length; i++) {
                let that =  triggers[i].el,
                    elTop = Math.round(that.offset().top),
                    elBottom = elTop + Math.round(that.outerHeight())

                triggers[i].positionTop = elTop;
                triggers[i].positionBottom = elBottom;
            }
            noOffset = $("html").hasClass("horizontal")
            checkEls()
        }
    }
}

$(document).ready(function () {

    checkEls()

    let lockEvent = false;

    $(window).scroll(function (e) {
        if (!lockEvent) {
            lockEvent = true;
            setTimeout(function () {
                lockEvent = false
                checkEls()
            }, 100)
        }
    })
})