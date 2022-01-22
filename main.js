$(document).ready(startup());

/**************************************************************************************************************************************************************************/
/******************************************************************** Startup Function ************************************************************************************/
/**************************************************************************************************************************************************************************/

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
})

function startup() {
    $(".back-to-top").on({
        "click": function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    });

    resize();

    window.onresize = function(event) {
        resize();
    };

    $('.dropdown-toggle').dropdown();
}

function viewportToPixels(value) {
    var parts = value.match(/([0-9\.]+)(vh|vw)/)
    var q = Number(parts[1])
    var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
    return side * (q/100)
  }

function resize() {
    var height = parseInt($('.our-vision').css("height"));
    $('.vision-text').css("margin-top", height + viewportToPixels("10vh") + "px");


    if ($(window).width() < "1260") {
        $('.vision-text').css("margin-top", height + viewportToPixels("5vh") + "px");
    }
}