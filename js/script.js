/**
 * Created by vish on 20-07-2014.
 */

$(document).ready(function () {
    $('.carousel').carousel({
        
        interval : 3000,
        pause : false
    });

    $('.content-one').hover(function() {
        $(".content-one").addClass('transition');
    
    }, function() {
        $(".content-one").removeClass('transition');
    });
    $('.content-two').hover(function() {
        $(".content-two").addClass('transition');
    
    }, function() {
        $(".content-two").removeClass('transition');
    });
    $('.content-three').hover(function() {
        $(".content-three").addClass('transition');
    
    }, function() {
        $(".content-three").removeClass('transition');
    });

});