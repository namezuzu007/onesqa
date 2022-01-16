$(function(){ 'use strict';

//section-2 Tab
$(function() { 

	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
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
        topnavDropdown.find('> .close-filter').click(function(e){
            e.preventDefault();
            topnavDropdownToggles.parent().removeClass('active');
            topnavDropdown.removeClass('active');
            topnavDropdown.stop().slideUp();
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

    // Back to Top
    var backToTop = $('.back-to-top');
    if(backToTop.length){
        if(topnav.hasClass('style-demo')){
            checkOnScrollDemo( $(window).scrollTop(), $(window).width() );
            $(window).scroll(function(){
                checkOnScrollDemo( $(this).scrollTop(), $(this).width() );
            });
        }else if(topnav.hasClass('minisite')){
            checkOnScrollMinisite( $(window).scrollTop(), $(window).width() );
            $(window).scroll(function(){
                checkOnScrollMinisite( $(this).scrollTop(), $(this).width() );
            });
        }else{
            checkOnScroll( $(window).scrollTop() );
            $(window).scroll(function(){
                checkOnScroll( $(this).scrollTop() );
            });
        }
        backToTop.click(function(e){
            e.preventDefault();
            $('html, body').stop().animate({ scrollTop: 0 }, 800 );
        });
    }
    function checkOnScroll(st){
        if(st > 400){
            backToTop.addClass('active');
        }else{
            backToTop.removeClass('active');
        }
    }
    function checkOnScrollDemo(st, w){
        checkOnScroll(st);
        var t = 130;
        if(w < 576) t = 64;
        else if(w < 992) t = 116;
        else if(w < 1200) t = 123;
        if(st > t){
            topnav.addClass('sticky');
            topnavDropdown.addClass('sticky');
        }else{
            topnav.removeClass('sticky');
            topnavDropdown.removeClass('sticky');
        }
    }
    function checkOnScrollMinisite(st, w){
        checkOnScroll(st);
        var t = 7.125 * bodySize;
        if(w < 576) t = 3.5 * bodySize;
        else if(w < 992) t = 6.5 * bodySize;
        else if(w < 1200) t = 6.8125 * bodySize;
        if(st > t){
            topnav.addClass('sticky');
            topnavDropdown.addClass('sticky');
        }else{
            topnav.removeClass('sticky');
            topnavDropdown.removeClass('sticky');
        }
    }

    // Themes
    $('.btn-theme').click(function(e){
        e.preventDefault();
        $('#css-theme').attr('href', 'public/assets/app/css/color-'+$(this).data('theme')+'.css');
        $('body').removeClass('theme-0 theme-1 theme-2');
        $('body').addClass('theme-'+$(this).data('theme'));
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

    // Quick Tab Minisite
    var quickTabMinisite = $('.quick-tab-minisite');
    if(quickTabMinisite.length){
        quickTabMinisite.find('.tab-btn, .btn-close').click(function(e){
            e.preventDefault();
            var parent = $(this).closest('.tab');
            if(parent.hasClass('active')){
                quickTabMinisite.find('.tab').removeClass('active');
            }else{
                quickTabMinisite.find('.tab').removeClass('active');
                parent.addClass('active');
            }
        });
    }


    // Date Picker
    $('input.date-picker').each(function(){
        new Datepicker($(this)[0], {});
    });

    // Dropzone
    $('.input-dropzone').each(function(){
        $(this).dropzone({
            url: 'writable',
            acceptedFiles: 'image/*,application/pdf',
            autoProcessQueue: false,
            uploadMultiple: true,
            parallelUploads: 5,
            maxFiles: 5,
            maxFilesize: 5,
            addRemoveLinks: true,
        });
    });
    

    // Button Popup
    $('.btn-popup-toggle').click(function(e){
        e.preventDefault();
        $('.popup-container[data-popup="'+$(this).data('popup')+'"]').toggleClass('active');
    });
    $('.btn-popup-close-all').click(function(e){
        e.preventDefault();
        $('.popup-container').removeClass('active');
    });

    // Shortcode
    var shortcodeReady = true,
        shortcodes = $('.shortcode-container');
    if(shortcodes.length){
        shortcodes.each(function(){
            var self = $(this),
                target = self.find('textarea');
            self.find('.btn-code-copy').click(function(e){
                e.preventDefault();
                var thisBtn = $(this);
                if(shortcodeReady && target.length){
                    shortcodeReady = false;
                    thisBtn.html('[คัดลอกแล้ว]');
                    target[0].select();
                    target[0].setSelectionRange(0, target[0].value.length);
                    document.execCommand('copy');
                    target.blur();
                    setTimeout(function(){
                        shortcodeReady = true;
                        thisBtn.html('[คัดลอก]');
                    }, 1500);
                }
            });
        });
    }


    // Special List Toggle
    $('ul.ss-list.ss-list-toggle').find('.btn-icon').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle();
    });


    // About 01
    var about01 = $('.about-01');
    if(about01.length){
        about01.each(function(){
            var self = $(this),
                tabIcons = self.find('.tab-icons .tab-icon'),
                slides = self.find('.slides');
            slides.slick({
                centerMode: true, centerPadding: 0, slidesToShow: 1, infinite: false,
                autoplay: false, speed: 900, arrows: false, dots: false,
                adaptiveHeight: true, swipe: false, touchMove: false
            });
            tabIcons.click(function(e){
                e.preventDefault();
                tabIcons.removeClass('active');
                $(this).addClass('active');
                slides.slick('slickGoTo', $(this).data('slide'));
            });
        });
    }

    // About 02
    var about02 = $('.about-02');
    if(about02.length){
        about02.each(function(){
            var self = $(this),
                aboutContainers = self.find('.about-container');
            aboutContainers.not('.active').find('> .about-body').hide();
            aboutContainers.find('> .about-header').click(function(e){
                e.preventDefault();
                var parent = $(this).parent();
                parent.toggleClass('active');
                if(parent.hasClass('active')) parent.find('> .about-body').slideDown();
                else parent.find('> .about-body').slideUp();
                AOS.refresh();
            });
        });
    }
    
    // About 03
    var about03 = $('.about-03');
    if(about03.length){
        // about03.each(function(){

            var self = about03,
                slideContainer = self.find('.slide-container');
            slideContainer.find('.slides').slick({
                centerMode: true, centerPadding: 0, slidesToShow: 1, infinite: false,
                adaptiveHeight: true, swipe: true, touchMove: true,
                autoplay: false, speed: 600, 
                arrows: true, appendArrows: slideContainer.find('.arrows'), 
                dots: true, appendDots: slideContainer.find('.dots'),
                customPaging: function(slide, i){
                    return '<button data-slide="'+i+'">'
                            +'<img src="public/assets/app/images/icon/pin.png" alt="Icon" />'
                            +'<div class="y">'
                                +'<span>พ.ศ.</span>'
                                +(2551+i)
                            +'<div>'
                        +'</button>';
                }
            });

            var awards = self.find('.awards .award'),
                li = slideContainer.find('.dots li');
            var clickReady = true,
                activeSlide = 0;
            li.each(function(j, k){
                if(j<5) $(k).attr('data-class', 'active');
            });
            awards.each(function(j, k){
                if(j==0) $(k).attr('data-pos', '0');
                else if(j==1) $(k).attr('data-pos', '1');
                else if(j==2) $(k).attr('data-pos', '2');
                else if(j==3) $(k).attr('data-pos', '3');
                else $(k).attr('data-pos', 'after');
            });

            li.click(function(){
                if(clickReady){
                    clickReady = false;
                    var i = $(this).find('> button').data('slide');
                    award03changeSlide(i);
                    setTimeout(function(){
                        clickReady = true;
                    }, 600);
                }
            });
            slideContainer.find('.slides').on('beforeChange', function(e, s, c, i){
                award03changeSlide(i);
                setTimeout(function(){
                    clickReady = true;
                }, 900);
            });

            li.mouseenter(function(){
                if(clickReady){
                    clickReady = false;
                    var i = $(this).find('> button').data('slide');
                    slideContainer.find('.slides').slick('slickGoTo', i)
                    setTimeout(function(){
                        clickReady = true;
                    }, 600);
                }
            });

            function award03changeSlide(i){
                activeSlide = i;
                var start = i - 2,
                    end = i + 2;
                while(start < 0){ start += 1; end += 1; }
                while(end > li.length-1){ start -= 1; end -= 1; }
                li.attr('data-class', '');
                li.each(function(j, k){
                    if(start<=j && j<=end) $(k).attr('data-class', 'active');
                });
                awards.each(function(j, k){
                    if(j<i) $(k).attr('data-pos', 'before');
                    else if(j==i) $(k).attr('data-pos', '0');
                    else if(j==i+1) $(k).attr('data-pos', '1');
                    else if(j==i+2) $(k).attr('data-pos', '2');
                    else if(j==i+3) $(k).attr('data-pos', '3');
                    else $(k).attr('data-pos', 'after');
                });
            }

        // });
    }
    
    // About 04
    var about04 = $('.about-04');
    if(about04.length){
        var about04Ready = true,
            teams = about04.find('.director'),
            targets = about04.find('.about-target');
        teams.click(function(e){
            e.preventDefault();
            var target = targets.filter('[data-team="'+$(this).data('team')+'"]');
            if(about04Ready && target.length){
                about04Ready = false;
                teams.removeClass('active');
                $(this).addClass('active');
                targets.filter('.active').addClass('out');
                setTimeout(function(){
                    targets.removeClass('active in out');
                    target.addClass('active in');
                    setTimeout(function(){
                        target.removeClass('in');
                        about04Ready = true;
                    }, 50);
                }, 450);
            }
        });
    }

    // Banner 01
    var banner01 = $('.banner-01');
    if(banner01.length){
        banner01.each(function(){
            var self = $(this),
                options = {
                    centerMode: true, centerPadding: 0, slidesToShow: 1, infinite: false,
                    focusOnSelect: true, autoplay: true, autoplaySpeed: 14000, speed: 900,
                    arrows: false, appendArrows: self.find('.arrows'),
                    dots: false, appendDots: self.find('.dots')
                };
            if(self.hasClass('img-only')){
                options = {
                    centerMode: true, centerPadding: 0, slidesToShow: 1, infinite: false,
                    focusOnSelect: true, autoplay: true, autoplaySpeed: 14000, speed: 900,
                    arrows: true, appendArrows: self.find('.arrows'),
                    dots: true, appendDots: self.find('.dots'),
                    adaptiveHeight: true
                };
            }

            var descObj = {};
            self.find('.slide').each(function(i){
                if($(this).data('desc')!==undefined){
                    descObj[i] = $(this).data('desc');
                }
            });

            self.find('.slides').slick(options);
            self.find('.slick-dots > li').each(function(i){
                if(descObj[i]!==undefined){
                    $(this).append('<div class="desc">'+descObj[i]+'</div>');
                }
            });
        });
    } 

    // Banner 02
    var banner02 = $('.banner-02');
    if(banner02.length){
        banner02.each(function(){
            var self = $(this),
                options = {
                    centerMode: true, centerPadding: 0, slidesToShow: 1, infinite: false,
                    focusOnSelect: true, autoplay: true, autoplaySpeed: 14000, speed: 900,
                    arrows: false, dots: true, appendDots: self.find('.dots'),
                    adaptiveHeight: true
                };

            var descObj = {};
            self.find('.slide').each(function(i){
                if($(this).data('desc')!==undefined){
                    descObj[i] = $(this).data('desc');
                }
            });

            self.find('.slides').slick(options);
            self.find('.slick-dots > li').each(function(i){
                if(descObj[i]!==undefined){
                    $(this).append('<div class="desc">'+descObj[i]+'</div>');
                }
            });
        });
    }
    
    // Client 01
    var client01 = $('.client-01');
    if(client01.length){
        client01.find('.slide-container').each(function(){
            var self = $(this);
            self.find('> .slides').slick({
                centerMode: true, centerPadding: 0, slidesToShow: 6, swipeToSlide: true, 
                focusOnSelect: true, autoplay: false, autoplaySpeed: 4000, speed: 600,
                arrows: true, appendArrows: self.find('.arrows'), dots: false,
                responsive: [
                    { breakpoint: 1199.98, settings: { slidesToShow: 5, } },
                    { breakpoint: 991.98, settings: { slidesToShow: 4, } },
                    { breakpoint: 767.98, settings: { slidesToShow: 3, } },
                    { breakpoint: 575.98, settings: { slidesToShow: 2, } },
                ]
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
                    arrows: true, appendArrows: slideContainer.find('.arrows'), dots: false,
                    adaptiveHeight: true, asNavFor: slideNav.find('> .slides'),
                });
                slideNav.find('> .slides').slick({
                    centerMode: true, centerPadding: 0, slidesToShow: 9, infinite: true,
                    focusOnSelect: true, autoplay: false, speed: 900,
                    arrows: false, dots: false, asNavFor: slideContainer.find('> .slides'),
                    responsive: [
                        { breakpoint: 1299.98, settings: { slidesToShow: 8, } },
                        { breakpoint: 1199.98, settings: { slidesToShow: 7, } },
                        { breakpoint: 991.98, settings: { slidesToShow: 6, } },
                        { breakpoint: 767.98, settings: { slidesToShow: 5, } },
                        { breakpoint: 575.98, settings: { slidesToShow: 3, } },
                    ]
                });
            }
        });
    }

    // Content 06
    var content06 = $('.content-06');
    if(content06.length){
        content06.each(function(){
            var self = $(this),
                slideContainer = self.find('.slide-container');
            slideContainer.find('> .slides').slick({
                centerMode: true, centerPadding: 0, slidesToShow: 7, infinite: true,
                focusOnSelect: true, autoplay: false, speed: 600, swipeToSlide: true,
                dots: false, arrows: true, appendArrows: slideContainer.find('> .arrows'),
                responsive: [
                    { breakpoint: 1299.98, settings: { slidesToShow: 6, } },
                    { breakpoint: 1199.98, settings: { slidesToShow: 5, } },
                    { breakpoint: 991.98, settings: { slidesToShow: 4, } },
                    { breakpoint: 767.98, settings: { slidesToShow: 3, } },
                    { breakpoint: 575.98, settings: { slidesToShow: 2, } },
                ]
            });
        });
    }


    // FAQ 01
    var faq01 = $('.faq-01');
    if(faq01.length){
        faq01.each(function(){
            var self = $(this);
            self.find('.faq > .faq-header .title').click(function(e){
                e.preventDefault();
                var parent = $(this).closest('.faq');
                parent.toggleClass('active');
                parent.find('> .faq-body').slideToggle();
            });
        });
    }

    // FAQ 02
    var faq02 = $('.faq-02');
    if(faq02.length){
        faq02.each(function(){
            var self = $(this);
            self.find('.faq > .faq-header .title').click(function(e){
                e.preventDefault();
                var parent = $(this).closest('.faq');
                parent.toggleClass('active');
                parent.find('> .faq-body').slideToggle();
            });
        });
    }

    // FAQ 03
    var faq03 = $('.faq-03');
    if(faq03.length){
        faq03.each(function(){
            var self = $(this);
            self.find('.faq > .faq-header').click(function(e){
                e.preventDefault();
                var parent = $(this).closest('.faq');
                parent.toggleClass('active');
                parent.find('> .faq-body').slideToggle();
            });
        });
    }


    // Search Panel 01
    var searchPanel01 = $('.search-panel-01');
    if(searchPanel01.length){
        searchPanel01.each(function(){
            var self = $(this),
                closeBtn = self.find('.btn-close'),
                toggleBtn = self.find('.btn-toggle'),
                searchContainer = self.find('.search-container');
            closeBtn.click(function(e){
                e.preventDefault();
                toggleBtn.removeClass('active');
                searchContainer.slideUp();
            });
            toggleBtn.click(function(e){
                e.preventDefault();
                if($(this).hasClass('active')){
                    toggleBtn.removeClass('active');
                    searchContainer.slideUp();
                }else{
                    toggleBtn.addClass('active');
                    searchContainer.slideDown();
                }
            });
        });
    }


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
                swipe: true, touchMove: true, swipeToSlide: true
            });
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
                            settings: { slidesToShow: 5, centerPadding: '100px' }
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

});
 
