$(document).ready(startup());

var aspectRatio = this.screen.height/this.screen.width;
var windowRatio = this.window.innerHeight/this.window.innerWidth;

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
})

window.addEventListener("resize", function(event) {
})

/**************************************************************************************************************************************************************************/
/******************************************************************* Mission Statement ************************************************************************************/
/**************************************************************************************************************************************************************************/

var size = this.window.innerWidth / 2000 * 5;
$(".our-mission, .our-vision, .our-services").css("font-size", 10 - size + "vw");
$(".mission-text, .vision-text, .service-list").css("font-size", (10 - size) * .5 + "vw");

if (aspectRatio > .56 && aspectRatio < .57 && this.screen.width < 1800) {
    $(".mission-text").css({
        "top": "19%",
        "right": "-65%",
        "width": "60%",
    });
}

if (windowRatio < .5) {
    $(".our-mission").css({
        "top": "1%",
    });

    $(".mission-text").css({
        "top": "20%",
    });
}

/***************************************************************** Scroll magic for mission statement *********************************************************************/

const pathOurMission = {
    values: [
        {x: window.innerWidth * .58, y: 0}
    ]
}

let pathMissionText = {
    values: [
        {x: window.innerWidth * -.66, y: 0}
    ]
}

if (window.innerWidth < 1030) {
    pathMissionText = {
        values: [
            {x: window.innerWidth * -.8, y: 0}
        ]
    }
}

const tweenOurMission = new TimelineLite();
tweenOurMission.add(
    TweenLite.to('.our-mission', 1, {
        bezier: pathOurMission,
        ease: Power1.easeInOut
    })
);

const tweenMissionText = new TimelineLite();
tweenMissionText.add(
    TweenLite.to('.mission-text', 1, {
        bezier: pathMissionText,
        ease: Power1.easeInOut
    })
);

const missionController = new ScrollMagic.Controller();

const sceneOurMission = new ScrollMagic.Scene({
    triggerElement: '.mission',
    duration: 800,
    triggerHook: .5,
})
.setTween(tweenOurMission)
.addTo(missionController);

const sceneMissionText = new ScrollMagic.Scene({
    triggerElement: '.mission',
    duration: 600,
    triggerHook: 0,
})
.setTween(tweenMissionText)
.addTo(missionController);

const sceneMissionPin = new ScrollMagic.Scene({
    triggerElement: '.mission',
    duration: 850,
    triggerHook: 0,
})
.setPin('.mission')
.addTo(missionController);

/**************************************************************************************************************************************************************************/
/******************************************************************** Vision Statement ************************************************************************************/
/**************************************************************************************************************************************************************************/

if (aspectRatio > .56 && aspectRatio < .57 && this.screen.width < 1800) {
    $(".vision-text").css({
        "top": "19%",
        "left": "-65%",
        "width": "60%",
    });
}

if (windowRatio < .5) {
    $(".our-vision").css("top", "1%");

    $(".vision-text").css({
        "top": "20%",
    });
}

/***************************************************************** Scroll magic for vision statement **********************************************************************/

const pathOurVision = {
    values: [
        {x: window.innerWidth * -.58, y: 0}
    ]
}

let pathVisionText = {
    values: [
        {x: window.innerWidth * .66, y: 0}
    ]
}

if (window.innerWidth < 1030) {
    pathVisionText = {
        values: [
            {x: window.innerWidth * .8, y: 0}
        ]
    }
}

const tweenOurVision = new TimelineLite();
tweenOurVision.add(
    TweenLite.to('.our-vision', 1, {
        bezier: pathOurVision,
        ease: Power1.easeInOut
    })
)

const tweenVisionText = new TimelineLite();
tweenVisionText.add(
    TweenLite.to('.vision-text', 1, {
        bezier: pathVisionText,
        ease: Power1.easeInOut
    })
)

const visionController = new ScrollMagic.Controller();

const sceneOurVision = new ScrollMagic.Scene({
    triggerElement: '.vision',
    duration: 800,
    triggerHook: .5,
})
.setTween(tweenOurVision)
.addTo(visionController);

const sceneVisionText = new ScrollMagic.Scene({
    triggerElement: '.vision',
    duration: 600,
    triggerHook: 0,
})
.setTween(tweenVisionText)
.addTo(visionController);

const sceneVisionPin = new ScrollMagic.Scene({
    triggerElement: '.vision',
    duration: 850,
    triggerHook: 0,
})
.setPin('.vision')
.addTo(visionController);

/**************************************************************************************************************************************************************************/
/************************************************************************* Services ***************************************************************************************/
/**************************************************************************************************************************************************************************/

/***************************************************************** Scroll magic for vision statement **********************************************************************/

const pathOurServices = {
    values: [
        {y: window.innerHeight * .15}
    ]
}

const pathServiceText = {
    values: [
        {y: window.innerHeight * -.80}
    ]
}

const tweenOurServices = new TimelineLite();
tweenOurServices.add(
    TweenLite.to('.our-services', 1, {
        bezier: pathOurServices,
        ease: Power1.easeInOut
    })
)

const tweenServiceText = new TimelineLite();
tweenServiceText.add(
    TweenLite.to('.services-container', 1, {
        bezier: pathServiceText,
        ease: Power1.easeInOut
    })
)

const serviceController = new ScrollMagic.Controller();

const sceneOurServices = new ScrollMagic.Scene({
    triggerElement: '.services',
    duration: 800,
    triggerHook: .5,
})
.setTween(tweenOurServices)
.addTo(serviceController);

const sceneServiceText = new ScrollMagic.Scene({
    triggerElement: '.services',
    duration: 600,
    triggerHook: 0,
})
.setTween(tweenServiceText)
.addTo(serviceController);

const sceneServicesPin = new ScrollMagic.Scene({
    triggerElement: '.services',
    duration: 850,
    triggerHook: 0,
})
.setPin('.services')
.addTo(serviceController);

/**************************************************************************************************************************************************************************/
/******************************************************************** Startup Function ************************************************************************************/
/**************************************************************************************************************************************************************************/

function startup() {
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
}