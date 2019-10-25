!function(n){function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=n,t.c=r,t.i=function(n){return n},t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=1)}([function(n,t){},function(n,t,r){"use strict";var e=r(0);!function(n){n&&n.__esModule}(e)}]);

(function($) {
    $(document).ready(function(){

    	// GLOBAL VARIABLES
    	var windowHeight = $(window).height();
    	var menuHeight = $('header').height() * 2;

    	// PAGE SCROLL
    	$('.menu-wrap .menu ul li a').click(function (e){
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 200);
        });

        $('.logo-wrap .logo-inner-wrap .logo').click(function(){
        	$('html, body').animate({ scrollTop: 0 }, 200);
        	animateMenu(false);
        });

        // MENU CONTROLLER
        var scrollTop = $(document).scrollTop();

        checkScroll();

        $(document).on('scroll', _.throttle(updatePosition, 200));

        function updatePosition(arg){
        	scrollTop = $(arg.target).scrollTop();
        	
        	checkScroll();

	       	clearTimeout($.data(this, 'scrollTimer'));
		    $.data(this, 'scrollTimer', setTimeout(function() { checkScroll(); }, 250));
        }

        function checkScroll(){
        	if(scrollTop >= windowHeight - menuHeight && !$('header').hasClass('small')){
	        	$('header').addClass('small');
	        	animateMenu(true);
	       	} else if(scrollTop <= windowHeight - menuHeight && $('header').hasClass('small')) {
				$('header').removeClass('small');
	       		animateMenu(false);
	       	}
        }

    });


	function animateMenu(small){
		if(small){
			$('.logo-inner-wrap').animate({ margin: "0%" }, 300 );
			$('.menu-wrap .menu ul').animate({ marginTop: "0" }, 300 );
			$('.menu-wrap .menu ul li').animate({ padding: "37px" }, 300 );
			$('.logo-wrap .logo-inner-wrap .logo').animate({
			    fontSize: "20px",
			    width: "150px",
				height: "100px",
				padding: "16px 20px"
			}, 300 );
		} else {
			$('.logo-inner-wrap').animate({ margin: "20px 0 0 40px" }, 300 );
			$('.menu-wrap .menu ul').animate({ marginTop: "20px" }, 300 );
			$('.menu-wrap .menu ul li').animate({ padding: "62px" }, 300 );
			$('.logo-wrap .logo-inner-wrap .logo').animate({
			    fontSize: "30px",
			    width: "200px",
				height: "150px",
				padding: "22px 20px"
			}, 300 );
		}
	}
})( jQuery );