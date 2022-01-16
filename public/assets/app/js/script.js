
$(function(){ 'use strict';

    
  
//     /*Menu*/
//     $.fn.extend({ animateCss: function(animationName) { var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//         this.addClass('animated ' + animationName).one(animationEnd, function() { $(this).removeClass('animated ' + animationName); }); return this; } });
// jQuery(document).ready(function($) {
// 	if($(window).width() <= 767){
// 		$(".boxslidecms").removeClass('fadeInBottom');
// 	}
//     var ua = window.navigator.userAgent;
//     var is_ie = /MSIE|Trident/.test(ua);

//     if (is_ie==false && 0) {
//         window.sr = ScrollReveal();
//         var hero = { origin: "top", distance: "24px", duration: 1500, scale: 1.05, }
//         var intro = { origin: "bottom", distance: "64px", duration: 900, delay: 1500, scale: 1, }
//         var github = { origin: "top", distance: "32px", duration: 600, delay: 1800, scale: 0, }
//         var block_top = { reset: false, duration: 1200, origin: 'top', viewOffset: { top: 200 } }
//         var block_left = { reset: false, duration: 1200, origin: 'left', viewOffset: { left: 200 } }
//         var block_right = { reset: false, duration: 1200, origin: 'right', viewOffset: { right: 200 } }
//         sr.reveal('.fadeInBottom', block_top);
//         sr.reveal('.fadeInLeft', block_left);
//         sr.reveal('.fadeInRight', block_right);
//     }
//     $(".sitemenu").hover(function() { $("body").addClass('menuhover'); }, function() { $("body").removeClass('menuhover'); });
//     $(".sitemenu > ul > li > a").click(function(event) { if ($(window).width() < 768) { var LI = $(this).parent(); var subUL = LI.find(".fullmenu").eq(0);
//             subUL.stop().css({ 'opacity': 1 }); if (subUL.css("display") == 'block') { subUL.slideUp(400);
//                 LI.removeClass('open'); return false; } else { if (subUL.length) { $(".fullmenu").stop().hide(0);
//                     subUL.stop().slideDown(400);
//                     $(".sitemenu > ul > li").removeClass('open');
//                     LI.addClass('open');
//                     $.scrollTo(LI, { duration: 800, offset: 0, easing: 'easeInOutExpo' }); } } } });
//     $(".sitemenu > ul > li").hover(function() { if ($(window).width() < 768) {} else { var LI = $(this); var subUL = LI.find(".fullmenu").eq(0); if (subUL.length) { subUL.show(0);
//                 subUL.stop().css({ 'opacity': 0 }).animate({ opacity: 1 }, 500, 'easeInBack', function() {}); } } }, function() { if ($(window).width() < 768) { return false; } var LI = $(this); var subUL = LI.find(".fullmenu").eq(0); if (subUL.length) { subUL.hide(0);
//             subUL.stop().css('opacity', 0); } });
//     $(".sitemenu li").each(function(index, el) { var em = $(this); var UL = em.find("ul").eq(0); if (UL.find("li").length) { em.addClass('submenu'); } else { UL.remove(); } });
//     $(".sitemenu li.selected").parents('li').addClass('groupopen');
//     $(".fullmenu").each(function(index, el) { if ($(this).find("ul").length == 1) { $(this).parent('li').addClass('onecolum'); } });
//     var TIM;
//     $(".boxtab .nav-tabs a").click(function(event) { var tab_id = $(this).attr("href");
//         $(tab_id).stop().css("opacity", 0); var LI = $(tab_id).find("ul.rowslist > li");
//         $(tab_id).animate({ opacity: 1 }, 200, function() {});
//         clearTimeout(TIM);
//         LI.css("opacity", 0);
//         LI.each(function(index, el) { var em = this; var id = $(em).parents('.tab-pane').attr("id"); var emotion = 'fadeInUp';
//             TIM = setTimeout(function() { $(em).removeClass('.' + emotion);
//                 $(em).css("opacity", 0).animateCss(emotion).animate({ opacity: 1 }, 200, function() {});; }, index * 100); }); });
// });
// (function($) { $(window).on("load", function() { $(".boxoverflow").mCustomScrollbar(); }); })(jQuery);
     
//section-2 Tab
$(function() { 

	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(1)').addClass('current');
		
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
	})(jQuery);

});
 //section-2 Tab inner
$(function() { 

	(function ($) { 
		$('.tab-inner ul.tabs-inner').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab-inner ul.tabs-inner li a').click(function (g) { 
			var tabInner = $(this).closest('.tab-inner'), 
				indexInner = $(this).closest('li').index();
			
			tabInner.find('ul.tabs-inner > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tabInner.find('.tab_content-inner').find('div.tabs_item-inner').not('div.tabs_item-inner:eq(' + indexInner + ')').slideUp();
			tabInner.find('.tab_content-inner').find('div.tabs_item-inner:eq(' + indexInner + ')').slideDown();
			
			g.preventDefault();
		} );
	})(jQuery);

});
 
 

      

    // Footer
    $('nav.footer .tag').click(function(e){
        e.preventDefault();
        $('nav.footer .tag-target').slideToggle(600);
    });
 
    // Font Sizes
    var bodySize = 16;
    $('.btn-font-size').click(function(e){
        e.preventDefault();
        var s = Number($(this).data('size'));
        if(s==0) bodySize = 16;
        else if(s==1 || s==-1) bodySize += s;
        else bodySize = s;
        $('html, body').css('font-size', bodySize+'px');
    });

    

    // Themes
    $('.btn-theme').click(function(e){
        e.preventDefault();
        $('#css-theme').attr('href', 'public/assets/app/css/color-'+$(this).data('theme')+'.css');
        $('body').removeClass('theme-0 theme-1 theme-2');
        $('body').addClass('theme-'+$(this).data('theme'));
    });
 
    // Slide Container 01
    var slideContainer01 = $('.slide-container-01');
    if(slideContainer01.length){
        slideContainer01.each(function(){
            var self = $(this),
                slides = self.find('> .slides'),
                arrows = self.find('> .arrows .arrow');
            slides.slick({
                centerMode: true, centerPadding: 0, slidesToShow: 1, infinite: true,
                autoplay: true, autoplaySpeed: 14000, speed: 900, dots: false,
                arrows: true, prevArrow: arrows.eq(1), nextArrow: arrows.eq(0),
                swipe: true, touchMove: true, swipeToSlide: true,adaptiveHeight: true
            });
        });
    }

        // Content 04
        var content04 = $('.content-04');
        if(content04.length){
            content04.each(function(){
                var self = $(this),
                    slideContainer = self.find('.slide-container'),
                    slideNav = self.find('.slide-nav');
                if(slideContainer.length){
                    slideContainer.find('> .slides').slick({
                        centerMode: true, centerPadding: 0, slidesToShow: 1, infinite: true,
                        focusOnSelect: true, autoplay: false, speed: 900,
                        arrows: false, appendArrows: slideContainer.find('.arrows'), dots: false,
                        adaptiveHeight: true, asNavFor: slideNav.find('> .slides'),
                    });
                    slideNav.find('> .slides').slick({
                        centerMode: true, centerPadding: 0, slidesToShow: 4, infinite: true,
                        focusOnSelect: true, autoplay: false, speed: 900,
                        arrows: false, dots: false, asNavFor: slideContainer.find('> .slides'),
                        responsive: [
                            { breakpoint: 1299.98, settings: { slidesToShow: 5, } },
                            { breakpoint: 1199.98, settings: { slidesToShow: 5, } },
                            { breakpoint: 991.98, settings: { slidesToShow: 3, } },
                            { breakpoint: 767.98, settings: { slidesToShow: 3, } },
                            { breakpoint: 575.98, settings: { slidesToShow: 3, } },
                        ]
                    });
                }
            });
        }
     
 
        // Tab Container
 var tabContainers = $('.tab-container');
 if(tabContainers.length){
     tabContainers.each(function(){
         var self = $(this);
         if(!self.hasClass('tab-local') && !self.hasClass('tab-local-target')){
             var tabs = self.find('.tabs .tab'),
                 tabChildren = self.find('.tabs .tab-children'),
                 tabContents = self.find('.tab-contents .tab-content');
             tabs.click(function(e){
                 var temp = $(this),
                     tabId = temp.data('tab');
                 if(tabId!==undefined){
                     var target = tabContents.filter('[data-tab="'+tabId+'"]');
                     if(target.length){
                         e.preventDefault();

                         tabChildren.stop().slideUp();
                         var children = temp.next();
                         if(children.hasClass('tab-children')){
                             children.stop().slideDown();
                         }

                         tabs.removeClass('active');
                         temp.addClass('active');
                         tabContents.removeClass('active');
                         target.addClass('active');

                         var slides = target.find('.slide-container > .slides');
                         if(slides.length){
                             slides.slick('setPosition');
                         }

                         AOS.refresh();
                     }
                 }
             });
         }
     });
 }

    // Tab Container 02
    var tabContainers02 = $('.tab-container-02');
    if(tabContainers02.length){
        tabContainers02.each(function(){
            var self = $(this),
                slideContainers = self.find('.slide-container');
            slideContainers.each(function(){
                var slideContainer = $(this),
                    arrows = slideContainer.find('.arrows .arrow');
                slideContainer.find('> .slides').slick({
                    centerMode: false, centerPadding: '60px', slidesToShow: 5,
                    infinite: true, autoplay: false, speed: 450, dots: true,
                    arrows: true, prevArrow: arrows.eq(0), nextArrow: arrows.eq(1),
                    swipe: true, touchMove: true, swipeToSlide: true,
                    responsive: [
                        { 
                            breakpoint: 1299.98, 
                            settings: { slidesToShow: 6, centerPadding: '100px' }
                        },
                        { 
                            breakpoint: 1025, 
                            settings: { slidesToShow: 4, centerPadding: '40px' }
                        },
                        { 
                            breakpoint: 991.98, 
                            settings: { slidesToShow: 3, centerPadding: '40px' }
                        },
                        { 
                            breakpoint: 767.98, 
                            settings: { slidesToShow: 1, centerPadding: '140px',centerMode: true }
                        },
                        { 
                            breakpoint: 575.98, 
                            settings: { slidesToShow: 1, centerPadding: '50px',centerMode: true  }
                        },
                    ]
                });
            });
        });
    }

    /* Tab container 03*/
    var tabContainers03 = $('.tab-container-03');
    if(tabContainers03.length){
        tabContainers03.each(function(){
            var self = $(this),
                slideContainers = self.find('.slide-container');
            slideContainers.each(function(){
                var slideContainer = $(this),
                    arrows = slideContainer.find('.arrows .arrow');
                slideContainer.find('> .slides').slick({
                    centerMode: false, centerPadding: '60px', slidesToShow: 3,
                    infinite: true, autoplay: false, speed: 450, dots: true,
                    arrows: true, prevArrow: arrows.eq(0), nextArrow: arrows.eq(1),
                    swipe: true, touchMove: true, swipeToSlide: true,
                    responsive: [
                        { 
                            breakpoint: 1299.98, 
                            settings: { slidesToShow: 3, centerPadding: '100px' }
                        },
                        { 
                            breakpoint: 1025, 
                            settings: { slidesToShow: 3, centerPadding: '40px' }
                        },
                        { 
                            breakpoint: 991.98, 
                            settings: { slidesToShow: 3, centerPadding: '40px' }
                        },
                        { 
                            breakpoint: 767.98, 
                            settings: { slidesToShow: 1, centerPadding: '140px',centerMode: true }
                        },
                        { 
                            breakpoint: 575.98, 
                            settings: { slidesToShow: 1, centerPadding: '50px',centerMode: true  }
                        },
                    ]
                });
            });
        });
    }

    // Page Loader
    var pageLoader = $('.page-loader');
    if(pageLoader.length){
        window.onload = function(){
            pageLoader.addClass('fade-out');
            setTimeout(function(){
                pageLoader.remove();
                $('body').removeClass('loading');
                AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 15 });
            }, 1350);
        }
    }else{
        $('body').removeClass('loading');
        AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 15 });
    }

    // On Resize
    $(window).on('resize', function(){
        AOS.refresh();
    });


    // Topnav
    var topnav = $('nav.topnav'),
        topnavDropdownToggles = topnav.find('.topnav-dropdown-toggle'),
        topnavDropdown = $('.topnav-dropdown'),
        topnavDropdownWrappers = topnavDropdown.find('.dropdown-wrapper');
    var sidenav = $('nav.sidenav'),
        sidenavMenus = sidenav.find('.menu-container'),
        sidenavToggles = $('nav.topnav .sidenav-toggle, nav.sidenav .sidenav-toggle');
    var searchnav = $('nav.searchnav'),
        searchnavToggles = $('nav.topnav .searchnav-toggle, nav.searchnav .searchnav-toggle');
    if(topnav.length){

        // Topnav Dropdown Toggle
        topnavDropdownToggles.click(function(e){
            e.preventDefault();
            var self = $(this),
                parent = self.parent();
            if(parent.hasClass('active')){
                parent.removeClass('active');
                topnavDropdown.removeClass('active');
                topnavDropdown.stop().slideUp();
            }else{
                topnavDropdownToggles.parent().removeClass('active');
                parent.addClass('active');
                topnavDropdownWrappers.removeClass('active');
                topnavDropdownWrappers
                    .filter('[data-dropdown="'+self.data('dropdown')+'"]')
                    .addClass('active');
                topnavDropdown.addClass('active');
                topnavDropdown.stop().slideDown();
            }
        });
        topnavDropdown.find('.main-menu__close-btn > .btn-close-menu').click(function(e){
            e.preventDefault();
            topnavDropdownToggles.parent().addClass('active');
            topnavDropdown.addClass('active');
            topnavDropdown.stop().slideUp();
        });


        /*Top nav*/
        topnavDropdown.find('ul.ss-list > li > a').click(function(e){
            var self = $(this);
            if(self.attr('href')=='#'){
                e.preventDefault();
                self.closest('.menu').find('> ul.ss-list').slideToggle(900);
            }
        });








        // Sidenav Toggles
        searchnavToggles.click(function(e){
            e.preventDefault();
            if($('body').hasClass('sidenav-opened')){
                $('html, body').removeClass('sidenav-opened');
                searchnavToggles.find('> *').removeClass('active');
                searchnav.removeClass('active');
            }else{
                $('html, body').addClass('sidenav-opened');
                searchnavToggles.find('> *').addClass('active');
                searchnav.addClass('active');
            }
        });
        $('.searchnav-filter').click(function(e){
            e.preventDefault();
            $('html, body').removeClass('sidenav-opened');
            searchnavToggles.find('> *').removeClass('active');
            searchnav.removeClass('active');
        });

        // Generate sidenav
        sidenavMenus.html( topnav.find('.menu-container').html() );
        sidenavMenus.find('.menu.menu-icon').last().remove();
        sidenavMenus.find('.menu.menu-icon').last().find('> a').html('อื่นๆ');
        sidenavMenus.find('.menu > a').each(function(){
            var self = $(this),
                target = topnavDropdownWrappers
                    .filter('[data-dropdown="'+self.data('dropdown')+'"]');
            if(target.length){
                var parent = self.parent(),
                    html = '';
                parent.append('<em class="zmdi zmdi-chevron-down"></em>');
                target.find('.ss-list').each(function(){
                    html += $(this).html();
                });
                parent.append('<ul class="ss-list">'+html+'</ul>');
            }
        });
        

        // Searchnav Toggles
        sidenavToggles.click(function(e){
            e.preventDefault();
            if($('body').hasClass('sidenav-opened')){
                $('html, body').removeClass('sidenav-opened');
                sidenavToggles.find('> *').removeClass('active');
                sidenav.removeClass('active');
            }else{
                $('html, body').addClass('sidenav-opened');
                sidenavToggles.find('> *').addClass('active');
                sidenav.addClass('active');
            }
        });
        $('.sidenav-filter').click(function(e){
            e.preventDefault();
            $('html, body').removeClass('sidenav-opened');
            sidenavToggles.find('> *').removeClass('active');
            sidenav.removeClass('active');
        });

        sidenavMenus.find('.menu > a').click(function(e){
            var self = $(this);
            if(self.attr('href')=='#'){
                e.preventDefault();
                self.closest('.menu').find('> ul.ss-list').slideToggle(900);
            }
        });
        sidenavMenus.find('.menu > em').click(function(e){
            e.preventDefault();
            $(this).next().slideToggle(900);
        });
        sidenavMenus.find('.btn-icon').click(function(e){
            e.preventDefault();
            $(this).next().slideToggle(900);
        });
    }

    // Footer
    $('nav.footer .tag').click(function(e){
        e.preventDefault();
        $('nav.footer .tag-target').slideToggle(600);
    });

        // Quick Tab
        var quickTab = $('.quick-tab');
        if(quickTab.length){
            var quickTabContainer = quickTab.find('.tabs'),
                quickTabs = quickTabContainer.find('.tab'),
                quickTabBars = quickTab.find('.tab-bar'),
                quickTablCloses = quickTab.find('.btn-close');
            quickTabs.click(function(e){
                e.preventDefault();
                quickTabContainer.addClass('inactive');
                var target = quickTabBars.filter('[data-tab="'+$(this).data('tab')+'"]');
                target.addClass('show');
                setTimeout(function(){
                    target.addClass('active');
                }, 100);
            });
            quickTablCloses.click(function(e){
                e.preventDefault();
                quickTabContainer.removeClass('inactive');
                quickTabBars.removeClass('show active');
            });
        }
    







    // Global Search
    var globalSearchContainer = $('.global-search-container');
    if(globalSearchContainer.hasClass('use-gsap')){
        var globalSearchTl =  new TimelineMax({paused: true})
            .to('.global-search-container', .6, {
                autoAlpha: 1, ease: Power3.easeInOut
            })
            .from('.global-search-container .hamburger', .6, {
                opacity: 0, y: 30, ease: Power3.easeInOut
            }, '-=.4')
            .from('.global-search-container h3, .global-search-container .h3', .6, {
                opacity: 0, y: 30, ease: Power3.easeInOut
            }, '-=.4')
            .from('.global-search-container .input-container', .6, {
                opacity: 0, y: 30, ease: Power3.easeInOut
            }, '-=.4')
            .reverse();
        $('.global-search-toggle').click(function(e){
            e.preventDefault();
            globalSearchTl.reversed( !globalSearchTl.reversed() );
            globalSearchContainer.toggleClass('active');
            if(globalSearchContainer.hasClass('active')){
                globalSearchContainer.find('input[type=text]').focus();
                $('html, body').addClass('global-search-opened');
            }else{
                $('html, body').removeClass('global-search-opened');
            }
        });
    }else{
        $('.global-search-toggle').click(function(e){
            e.preventDefault();
            globalSearchContainer.toggleClass('active');
            if(globalSearchContainer.hasClass('active')){
                globalSearchContainer.find('input[type=text]').focus();
                $('html, body').addClass('global-search-opened');
            }else{
                $('html, body').removeClass('global-search-opened');
            }
        });
    }


     
    function openTab(evt, tabName) {
        var i, tabcontent, tabs_items_link;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tabs_items_link = document.getElementsByClassName("tabs_items_link");
        for (i = 0; i < tabs_items_link.length; i++) {
            tabs_items_link[i].className = tabs_items_link[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    document.getElementById("defaultOpen").click();
   



/*Sub Menu*/
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('.accordion6'), false);
});

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('.accordion7'), false);
});
 

topnavDropdownWrappers.find('.btn-icon').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle(900);
    });
    
    

    topnavDropdownWrappers.find('.btn-icon').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle(900);
    });
    
 
    
});

 
    
 

  // Button Popup
  $('.btn-popup-toggle').click(function(e){
    e.preventDefault();
    $('.popup-container[data-popup="'+$(this).data('popup')+'"]').toggleClass('active');
});
    

function scrollToSec1() {
    document.querySelector('#section-1').scrollIntoView({behavior: 'smooth'});
}
function scrollToSec2() {
    document.querySelector('#section-2').scrollIntoView({behavior: 'smooth'});
}
function scrollToSec3() {
    document.querySelector('#section-3').scrollIntoView({behavior: 'smooth'});
  }
function scrollToSec5() {
    document.querySelector('#section-5').scrollIntoView({behavior: 'smooth'});
  }