;(function($){
	// Navbar Fixed  
    function navbarFixed(){
        if ( $('.sticky_nav').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll){
                    $(".sticky_nav").addClass("navbar_fixed");
                } else {
                    $(".sticky_nav").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    function active_dropdown() {
        if ($(window).width() < 992) {
            $('.menu li.submenu > a').on('click',function(event){
                event.preventDefault()
                $(this).parent().find('ul').first().slideToggle(700);
                $(this).parent().siblings().find('ul').hide(700);
            });
        }
    }
    active_dropdown();
    
    // fullPage
    if ($('#wavescroll').length > 0) {
        $("#wavescroll").fullpage({
            navigation: true,
            navigationPosition: "right",
            autoScrolling: true,
            scrollBar: false,
            scrollOverflow: true,
            animateAnchor: true,
            css3: true,
            verticalCentered: true,
            anchors: ['Home', 'About', 'Services', 'Branding', 'Showrell', 'Clients', 'Contact', 'Newsletter'],
            menu: '#menu1',
            afterResponsive: function (isResponsive) {},
            afterLoad: function(anchorLink, index){
		    	if (index == 6){
		            $('.header_area, .full_footer').addClass('content-black');
		            $('#fp-nav').addClass('white');
		    	}
		    	else{
	            	$('.header_area, .full_footer').removeClass('content-black');
	            	$('#fp-nav').removeClass('white');
	            }   
                if ($('.w_footer_area,.wave_two_section_eight').hasClass('active')) {
                    $("#fp-nav,.full_footer").addClass('hide');
                }
                else{
	            	$('#fp-nav,.full_footer').removeClass('hide');
	            }
  			}
        });
        $('#moveDown').click(function() {
            $.fn.fullpage.moveSectionDown();
        });
        $('#moveUp').click(function() {
            $.fn.fullpage.moveSectionUp();
        });
    }
    

    // full screen side nav
    $(".burger_menu").on('click', function () {
        $('.hamburger_menu_wrepper').toggleClass("mySideBar");
        $(this).toggleClass("actives");
    });
    $(".close_icon").on('click', function () {
        $('.hamburger_menu_wrepper').removeClass("mySideBar");
        $('.close_icon').removeClass("actives");
    });
    
    $('.offcanfas_menu .dropdown').on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
	});
	$('.offcanfas_menu .dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
	});
    
    // Header
    $('.offcanfas_menu>li,.header_footer').each(function(index) {
		index = (index + 2) * .2;
		index = index + 's';
		$(this).css('animation-delay', index);
	});
    
    // End popup-js
    function popupGallery(){
        if($('.popup_youtube').length){
            $('.popup_youtube').magnificPopup({
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass:  'mfp-with-zoom mfp-img-mobile',
            });
        }
    }
    popupGallery();
    
})(jQuery)