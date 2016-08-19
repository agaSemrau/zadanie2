$(document).ready(function () {



    //----------------slider--------------------------//

    $(".slider-top").lightSlider(
            {
                adaptiveHeight: true,
                item: 1,
                slideMargin: 0,
                loop: true,
                keyPress: true,
                pager: false,
                prevHtml: '<span class="custom-prev-html"><img src="images/header/left_arrow.png" /></span>',
                nextHtml: '<span class="custom-next-html"><img src="images/header/right_arrow.png" /></span>'
            }
    );

    //----------------responsive navbar settings--------------------------//

    function createMenu() {
        $(".navbar2").addClass("small").before('<div id="menu">☰</div>');
        $('#menu').css({
            "margin-top": "0",
            "position": "absolute",
            "right": "75%",
            "display": "block",
            "color": "white",
            "font-size": "40px",
            "width": "100px",
            "float": "right",
            "opacity": "0.7",
            'z-index':'9999'
        }).addClass('clicked');
    }
    function hideMainNav() {
        $(".main-nav").hide();
    }
    function showMainNav() {
        $(".main-nav").fadeIn();
    }
    function nowYouSeeMe() {
        if ($("#menu")) {
            $("#menu").on('click', function () {
                $("#menu").toggleClass('clicked');
                if ($("#menu").hasClass('clicked')) {
                    hideMainNav();
                } else {
                    showMainNav();
                }
            });
        }
    }
    function checkSmallClass() {
        if ($("#menu")) {
            $("#menu").hide();
            if ($('.small')) {
                $("#menu").remove();
                $(".navbar2").removeClass('small');
                showMainNav();
            }
        }
    }
    if (window.innerWidth < 750) {
        createMenu();
        hideMainNav();
        nowYouSeeMe();
        if ($("#menu").hasClass('clicked')) {
            hideMainNav();
        } else {
            showMainNav();
        }
    }
    else {
        checkSmallClass();
    }
    $(window).resize(function () {
        if (window.innerWidth < 750) {
            hideMainNav();
            if ($(".navbar2").hasClass("small")) {
                return
            } else {
                createMenu();
            }
            nowYouSeeMe();
        }
        else {
            checkSmallClass();
        }
    });

    //----------------smooth scrolling---------------------------------//

    var $root = $('html, body');
    var $linkSmooth = $('a').not('.lSNext, .lsPrev');
    $linkSmooth.click(function () {
        var href = $.attr(this, 'href');

            $root.animate({
                scrollTop: $(href).offset().top - 80
            }, 600, function () {
                window.location.hash = href;

            });
            return false;

    });



    //----------------fixing navbar on scroll--------------------------//

    $(window).scroll(function () {

        var upperHeader = $('.navbar1').height() + $('.lSSlideOuter').height();

        if($('body').scrollTop()>upperHeader){
            $('.navbar2').css({
                'position':'fixed',
                'width':'100vw',
                'top':'0',
                'z-index':'999'
            });
            $('#menu').css({
                'position':'fixed',
                'top':'0'
            });
        }
        else {
            $('.navbar2').css({
                'position':"relative"

            });
            $('#menu').css({
                'position':'absolute',
                'top':"auto"
            });
        }

        //----------------highliting menu elements accordingly to scroll position--------------------------//

        var position = $(this).scrollTop() + 80;

        $('.nav-link').each(function(){

            var href = $(this).attr('href');
            var target = $(href).offset().top;

            if (position >= target) {
                $('.nav-link').removeClass('active').closest($('li')).removeClass('active');
                $('.main-nav a[href=' + href + ']').addClass('active').parent($('li')).addClass('active');
            }

            if(position < 280) {
                $('.nav-link').removeClass('active').parent($('li')).removeClass('active');
            }
        });

        //----------------fading in images on scroll--------------------------//

        $('#advantages img, #program .icone, #apps .tile ').addClass('hideMe');

        $('#advantages img, #program .icone, #apps .tile ').each(function () {

            var _100pxOfObject = $(this).offset().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > _100pxOfObject) {

                $(this).animate({'opacity':'1'},400);
            }
        });
    });

});
