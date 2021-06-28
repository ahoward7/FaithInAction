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

var missionController;
var visionController;
var serviceController;
var volDonController;

function startup() {
    
    missionController = new ScrollMagic.Controller();
    visionController = new ScrollMagic.Controller();
    serviceController = new ScrollMagic.Controller();
    volDonController = new ScrollMagic.Controller();

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

window.addEventListener("resize", function(event) {
    resizePage();
})

/**************************************************************************************************************************************************************************/
/******************************************************************* Mission Statement ************************************************************************************/
/**************************************************************************************************************************************************************************/


function resizePage() {

    missionController = missionController.destroy(true);
    missionController = null;
    visionController = visionController.destroy(true);
    visionController = null;
    serviceController = serviceController.destroy(true);
    serviceController = null;
    volDonController = volDonController.destroy(true);
    volDonController = null;
   
    missionController = new ScrollMagic.Controller();
    visionController = new ScrollMagic.Controller();
    serviceController = new ScrollMagic.Controller();
    volDonController = new ScrollMagic.Controller();

    var aspectRatio = this.screen.height/this.screen.width;
    var windowRatio = this.window.innerHeight/this.window.innerWidth;

    var size = this.window.innerWidth / 2000 * 5;
    $(".our-mission, .our-vision, .our-services").css("font-size", 10 - size + "vw");
    $(".mission-text, .vision-text, .service-list").css("font-size", (10 - size) * .5 + "vw");
    $(".volunteer-body, .donate-body").css("font-size", (10 - size) * .4 + "vw");

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

    let pathOurMission = {
        values: [
            {x: window.innerWidth * .58, y: 0}
        ]
    }

    let pathMissionText = {
        values: [
            {x: window.innerWidth * -.66, y: 0}
        ]
    }

    if (window.innerWidth < 1120) {
        pathMissionText = {
            values: [
                {x: window.innerWidth * -.8, y: 0}
            ]
        }
    }

    let tweenOurMission = new TimelineLite();
    tweenOurMission.add(
        TweenLite.to('.our-mission', 1, {
            bezier: pathOurMission,
            ease: Power1.easeInOut
        })
    );

    let tweenMissionText = new TimelineLite();
    tweenMissionText.add(
        TweenLite.to('.mission-text', 1, {
            bezier: pathMissionText,
            ease: Power1.easeInOut
        })
    );

    let sceneOurMission = new ScrollMagic.Scene({
        triggerElement: '.mission',
        duration: 800,
        triggerHook: .5,
    })
    .setTween(tweenOurMission)
    .addTo(missionController);

    let sceneMissionText = new ScrollMagic.Scene({
        triggerElement: '.mission',
        duration: 600,
        triggerHook: 0,
    })
    .setTween(tweenMissionText)
    .addTo(missionController);

    let sceneMissionPin = new ScrollMagic.Scene({
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

    if (window.innerWidth < 1120) {
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

    /***************************************************************** Scroll magic for services ******************************************************************************/

    let pathOurServices = {
        values: [
            {y: window.innerHeight * .15}
        ]
    }

    let pathServiceText = {
        values: [
            {y: window.innerHeight * -.80}
        ]
    }

    if (window.innerWidth < 1200) {
        pathOurServices = {
            values: [
                {y: window.innerHeight * .30}
            ]
        }

        pathServiceText = {
            values: [
                {y: window.innerHeight * -.8}
            ]
        }
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
    /***************************************************************** Volunteer/Donate ***************************************************************************************/
    /**************************************************************************************************************************************************************************/

    /************************************************************* Scroll magic for volunteer/donate **************************************************************************/

    const pathVolunteer = {
        values: [
            {x: window.innerWidth * .5}
        ]
    }

    const pathDonate = {
        values: [
            {x: window.innerWidth * -.5}
        ]
    }

    const tweenVolunteer = new TimelineLite();
    tweenVolunteer.add(
        TweenLite.to('.volunteer-container', 1, {
            bezier: pathVolunteer,
            ease: Power1.easeInOut
        })
    )

    const tweenDonate = new TimelineLite();
    tweenDonate.add(
        TweenLite.to('.donate-container', 1, {
            bezier: pathDonate,
            ease: Power1.easeInOut
        })
    )

    const sceneVolunteer = new ScrollMagic.Scene({
        triggerElement: '.volunteer-donate',
        duration: 800,
        triggerHook: .5,
    })
    .setTween(tweenVolunteer)
    .addTo(volDonController);

    const sceneDonate = new ScrollMagic.Scene({
        triggerElement: '.volunteer-donate',
        duration: 800,
        triggerHook: .5,
    })
    .setTween(tweenDonate)
    .addTo(volDonController);

    const sceneVolDonPin = new ScrollMagic.Scene({
        triggerElement: '.volunteer-donate',
        duration: 700,
        triggerHook: 0,
    })
    .setPin('.volunteer-donate')
    .addTo(volDonController);
}