$(document).ready(function(){

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 500;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides');
    var $slides = $('.slide');

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({marginLeft: '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});