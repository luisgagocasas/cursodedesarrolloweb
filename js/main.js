$(document).ready( function(){
    jQuery(window).scroll(function(){
        var scrollTop = jQuery(window).scrollTop();
        if(scrollTop >= 390){ jQuery('#aflotar').addClass("flotante"); }
        else{ jQuery('#aflotar').removeClass("flotante"); }
    });
});