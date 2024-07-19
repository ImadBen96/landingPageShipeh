// js Document

// Created on   : 14/07/2024.
// Last Update  : 14/07/2024.
// Theme Name   : Shipeh - Landing Page.
// Version      : 1.0.
// Author       : Shipeh.
// Developed by : IMAD GANNOUN


(function($) {
    "use strict";


    function owlInitialize() {
        if($(window).width() > 1280) {
            console.log("desktop")
            let owl = $('.owl-carousel');
            owl.trigger('destroy.owl.carousel');
            owl.addClass('off');
        } else {
            console.log("mobile")
            $('.owl-carousel').owlCarousel({
                loop:false,
                margin:10,
                nav:false,
                infinite:false,
                rtl: true,
                dots:false,
                responsive:{
                    0:{
                        items:1,
                    }
                }
            })
        }
    }
    $(document).ready(function(e) {
        owlInitialize();
    });
    $(window).resize(function() {
        owlInitialize();
    });
    /* FAQS */
    $("li.question").siblings().hide();

    $("li.question").click(function(){
        $(this).siblings().slideToggle();

        if ($(this).children().hasClass("rotate")) {
            $(this).children().removeClass("rotate");
            $(this).children().addClass("reverse");
        } else if ($(this).children().hasClass("reverse")) {
            $(this).children().removeClass("reverse");
            $(this).children().addClass("rotate");
        } else {
            $(this).children().addClass("rotate");
        }

    });
    //animation
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 10) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');


    // Scroll to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    })


})(jQuery);