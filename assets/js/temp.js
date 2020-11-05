var windowWidth, windowHeight, windowHeightHalf, windowY, lastWindowWidth = void 0, $window = $(window), $body = $("body"), sectionOffsets = [];
$(window).on("resize", function() {
    windowWidth = $window.width(),
    windowHeight = $window.height(),
    windowHeightHalf = windowHeight / 2,
    (!lastWindowWidth || lastWindowWidth - windowWidth > 10 || windowWidth - lastWindowWidth > 10) && sectionColorOffsets(),
    lastWindowWidth = windowWidth
}).trigger("resize"),
$window.on("scroll", function() {
    windowY = window.scrollY || window.pageYOffset,
    sectionColorScroll()
});
var sectionsCount, lastIndex, $section = $(".theme-color-section");
function sectionColorOffsets() {
    $(".theme-color-section").each(function(t) {
        var e = Math.round($(this).offset().top)
          , o = $(this).attr("data-theme-color")
          , i = !!$(this).attr("data-visual") && $(this).attr("data-visual");
        sectionOffsets.push({
            offset: e,
            bg: o,
            visual: i
        })
    }),
    sectionsCount = sectionOffsets.length
}
function sectionColorScroll() {
    if (sectionOffsets.length)
        for (var t = 0; t < sectionsCount; t++) {
            var e = sectionOffsets[t].offset
              , o = t + 1
              , i = 999999;
            o < sectionsCount && (i = sectionOffsets[o].offset),
            windowY > e - windowHeightHalf && windowY < i - windowHeightHalf && (t != lastIndex && ($body.removeClass("bg-primary bg-dark").addClass(sectionOffsets[t].bg),
            sectionOffsets[t].visual ? $("#" + sectionOffsets[t].visual).toggleClass("hide") : $(".section-visual").addClass("hide")),
            lastIndex = t)
        }
}
$(document).ready(function() {
    $(".scroll").click(function(t) {
        t.preventDefault(),
        $("body,html").animate({
            scrollTop: $(this.hash).offset().top
        }, 1e3)
    })
}),
$(".js-scroll-to").click(function(t) {
    target = $($(this).attr("href")),
    target.offset() && $("html, body").animate({
        scrollTop: target.offset().top + "px"
    }, 600),
    t.preventDefault()
}),
$(".js-next").click(function(t) {
    var e = $(".js-list-item.js-current-panel")
      , o = $(".js-list-item")
      , i = o.index(e)
      , s = o.get(i + 1);
    target = $(s),
    $(e).removeClass("js-current-panel"),
    $(s).addClass("js-current-panel"),
    target.offset() && $("html, body").animate({
        scrollTop: target.offset().top + "px"
    }, 600),
    t.preventDefault()
}),
$(".js-prev").click(function(t) {
    var e = $(".js-list-item.js-current-panel")
      , o = $(".js-list-item")
      , i = o.index(e)
      , s = o.get(i - 1);
    target = $(s),
    $(e).removeClass("js-current-panel"),
    $(s).addClass("js-current-panel"),
    target.offset() && $("html, body").animate({
        scrollTop: target.offset().top + "px"
    }, 600),
    t.preventDefault()
}),
$.fn.isInViewport = function() {
    var t = $(this).offset().top
      , e = t + $(this).outerHeight()
      , o = $(window).scrollTop()
      , i = o + $(window).height();
    return e > o + $(window).height() / 4 && t < i
}
,
$(window).on("resize scroll", function() {
    var t = $(".js-list-item");
    t.each((e,o)=>{
        if ($(o).isInViewport())
            return $("li.counter").text(e + 1 + "/" + t.length),
            t.removeClass("js-current-panel"),
            $(o).addClass("js-current-panel"),
            !1
    }
    )
}),
$(window).resize(),
$(".count").each(function() {
    $(this).prop("Counter", 0).animate({
        Counter: $(this).text()
    }, {
        duration: 1500,
        easing: "swing",
        step: function(t) {
            $(this).text(Math.ceil(t))
        }
    })
});
