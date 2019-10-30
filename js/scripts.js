!function(n){function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=n,t.c=r,t.i=function(n){return n},t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=1)}([function(n,t){},function(n,t,r){"use strict";var e=r(0);!function(n){n&&n.__esModule}(e)}]);

(function($) {

	var hhl;
	var HHL = function(){
		this.winHeight = $(window).height();
		this.winWidth = $(window).width();
		this.menuHeight = $('header').height() * 2;
		this.scrollTop = $(document).scrollTop();
	};
	

	HHL.prototype.init = function(){
		
		/* 
		@:	PAGE SCROLL NAVIGATION
		*/
    	$('.menu-wrap .menu ul li a').click(function (e){
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 200);
            if(!$('.navbar-toggler').hasClass('collapsed'))
            	$('.navbar-toggler').click();
        });

        $('.logo-wrap .logo-inner-wrap .logo').click(function(){
			if(!$('.navbar-toggler').hasClass('collapsed'))
        		$('.navbar-toggler').click();
			history.pushState("", document.title, window.location.pathname);
        	$('html, body').animate({ scrollTop: 0 }, 200);
        	animateMenu(false);
        });

        /* 
        @: 	MENU CONTROLLER
        */
        this.checkScroll();

        $(document).on('scroll', _.throttle(updatePosition, 200));
	}

	HHL.prototype.checkScroll = function(){
		if(this.scrollTop >= this.winHeight - this.menuHeight && !$('header').hasClass('small')){
	        $('header').addClass('small');
	       	this.animateMenu(true);
	   	} else if(this.scrollTop <= this.winHeight - this.menuHeight && $('header').hasClass('small')) {
			$('header').removeClass('small');
	  		this.animateMenu(false);
       	}
	}

	HHL.prototype.animateMenu = function(small){
		if(this.winWidth >= 992){
			if(small){
				$('.logo-inner-wrap').animate({ margin: "0%" }, 300 );
				$('.menu-wrap .menu ul').animate({ marginTop: "0" }, 300 );
				$('.menu-wrap .menu ul li').animate({ padding: "37px" }, 300 );
				$('.logo-wrap .logo-inner-wrap .logo').animate({
				    fontSize: "20px",
				    width: "150px",
					height: "100px",
					padding: "16px 20px",
					lineHeight: "22px"
				}, 300 );
			} else {
				$('.logo-inner-wrap').animate({ margin: "20px 0 0 40px" }, 300 );
				$('.menu-wrap .menu ul').animate({ marginTop: "20px" }, 300 );
				$('.menu-wrap .menu ul li').animate({ padding: "62px" }, 300 );
				$('.logo-wrap .logo-inner-wrap .logo').animate({
				    fontSize: "30px",
				    width: "200px",
					height: "150px",
					padding: "22px 20px",
					lineHeight: "36px"
				}, 300 );
			}
		}
	}
	
	function updatePosition(arg){
        hhl.scrollTop = $(arg.target).scrollTop();
       	
        hhl.checkScroll();

	    clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() { hhl.checkScroll(); }, 250));
    }

    $(document).ready(function(){
		hhl = new HHL();
		hhl.init();
	});

})( jQuery );