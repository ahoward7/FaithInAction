$(document).ready(startup());

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
})

window.addEventListener("resize", function(event) {
    resizePage();
})

/**************************************************************************************************************************************************************************/
/******************************************************************** Startup Function ************************************************************************************/
/**************************************************************************************************************************************************************************/

function startup() {

    resizePage();

    $(".need-help").on({
        "click": function() {
            $(".need-help-menu").css({
                "display": "flex"
            });

            if ($(window).width() < 1006) {
                $(".volunteer").css("margin-top", "55px");
            }
        },
        "mouseleave": function() {
            $(".need-help-menu").hide();
            $(".volunteer").css("margin-top", "0px");
        }
    });

    $(".back-to-top").on({
        "click": function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    });
}

/*********************************************************************************************************************************/
/*********************************************************** About Us ************************************************************/
/*********************************************************************************************************************************/

function resizePage () {

    var aspectRatio = this.screen.height/this.screen.width;
    var windowRatio = this.window.innerHeight/this.window.innerWidth;

    var size = this.window.innerWidth / 2000 * 5;

    $(".about-head").css("font-size", (10 - size) * .6 + "vw");

    if (window.innerWidth < 601) {
        $(".about-head").css("font-size", "30px");
        $(".about-head").css("margin-bottom", "30px");
        $(".text, .text-right, .contact-col").css("font-size", "15px");
    }
    else {
        $(".text, .text-right, .contact-col").css("font-size", "24px");
    }

    var contactHeight = parseInt($(".history-txt").css("height")) + parseInt($(".mission-txt").css("height")) 
    + parseInt($(".about-mission").css("height")) + parseInt($(".about-mission").css("margin-bottom")) + parseInt($(".about-mission").css("margin-top"));

    $(".contact").css("height", contactHeight);
}