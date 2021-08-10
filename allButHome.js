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
    resizeAboutPage();
})

/**************************************************************************************************************************************************************************/
/******************************************************************** Startup Function ************************************************************************************/
/**************************************************************************************************************************************************************************/

function startup() {

    var path = window.location.pathname;

    resizeAboutPage();
    
    $('.dropdown-toggle').dropdown();


    if (path=="/resources.html") {
        var glideMulti = new Glide('.glide', {
            type: 'carousel',
            perView: 3,
            autoplay: 3000,
        });
    
        glideMulti.mount();
    }

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

function resizeAboutPage () {

    var aspectRatio = this.screen.height/this.screen.width;
    var windowRatio = this.window.innerHeight/this.window.innerWidth;

    var size = this.window.innerWidth / 2000 * 5;

    $(".about-head, .service-title, .scheduler-link").css("font-size", (10 - size) * .6 + "vw");
    $(".page-head").css("font-size", (10 - size) * .8 + "vw");
    $(".text, .text-right, .contact-col").css("font-size", "24px");

    if (window.innerWidth < 601) {
        $(".page-head").css("font-size", "40px");
        $(".page-head").css("margin-bottom", "50px");
        $(".text, .text-right, .contact-col").css("font-size", "15px");
    }

    var contactHeight = parseInt($(".history-txt").css("height")) + parseInt($(".mission-txt").css("height")) 
    + parseInt($(".about-mission").css("height")) + parseInt($(".about-mission").css("margin-bottom")) + parseInt($(".about-mission").css("margin-top"));

    $(".contact").css("height", contactHeight);

    $(".team-holder").css("margin-bottom", "5vh")

    if (window.innerWidth < 768) {
        $(".contact").css("height", "500px");
        $(".contact").css("height", "500px");

        $(".team-holder").css("margin-bottom", "2vh")
    }


    /*********************************************************************************************************************************/
    /************************************************************ Impact *************************************************************/
    /*********************************************************************************************************************************/
    
    $(".impact-statement").css("margin-top", "2vh");

    if (window.innerWidth < 708) {
        $(".impact-statement").css("margin-top", "7vh");
    }

    $(".glide").remove();

    $(".glider").append(`
        <div class="glide">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide glide-slide slide-1"></li>
                    <li class="glide__slide glide-slide slide-2"></li>
                    <li class="glide__slide glide-slide slide-3"></li>
                    <li class="glide__slide glide-slide slide-4"></li>
                    <li class="glide__slide glide-slide slide-5"></li>
                    <li class="glide__slide glide-slide slide-6"></li>
                    <li class="glide__slide glide-slide slide-7"></li>
                    <li class="glide__slide glide-slide slide-8"></li>
                </ul>
            </div>

            <div class="glide__arrows glide-arrows" data-glide-el="controls">
                <div class="glide-arrow glide-arrow-left glide__arrow glide__arrow--left" data-glide-dir="<">
                    <-
                </div>
                <div class="glide__bullets glide-bullets" data-glide-el="controls[nav]">
                    <div class="glide__bullet" data-glide-dir="=0"></div>
                    <div class="glide__bullet" data-glide-dir="=1"></div>
                    <div class="glide__bullet" data-glide-dir="=2"></div>
                    <div class="glide__bullet" data-glide-dir="=3"></div>
                    <div class="glide__bullet" data-glide-dir="=4"></div>
                    <div class="glide__bullet" data-glide-dir="=5"></div>
                    <div class="glide__bullet" data-glide-dir="=6"></div>
                    <div class="glide__bullet" data-glide-dir="=7"></div>
                </div>
                <div class="glide-arrow glide-arrow-right glide__arrow glide__arrow--right" data-glide-dir=">">
                    ->
                </div>
            </div>
        </div>
    `)

    var path = window.location.pathname;

    if (path=="/resources.html") {
        if (window.innerWidth < 767) {
            var glideMulti = new Glide('.glide', {
                type: 'carousel',
                perView: 2,
                autoplay: 3000,
            });
        
            glideMulti.mount();
        }
        else {
            var glideMulti = new Glide('.glide', {
                type: 'carousel',
                perView: 3,
                autoplay: 3000,
            });
        
            glideMulti.mount();
        }
    }
}