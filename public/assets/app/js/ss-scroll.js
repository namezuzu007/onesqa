$(function(){ 'use strict';

    var scrollReady = true;
    $(document).keypress(function(e){
        if(scrollReady && e.charCode==96){
            scrollReady = false;
            var bodyHeight = $(document).height();
            document.querySelectorAll('.lazy-img').forEach(function(img){
                img.src = img.dataset.src;
                img.classList.remove('lazy-img');
            });
            document.querySelectorAll('.lazy-bg').forEach(function(bg){
                bg.style.backgroundImage = "url('" + bg.dataset.src + "')";
                bg.classList.remove('lazy-bg');
            });
            $('html, body').stop().animate({
                scrollTop: bodyHeight
            }, {
                duration: bodyHeight * 2.5, 
                easing: 'linear'
            });
        }
    });

});
