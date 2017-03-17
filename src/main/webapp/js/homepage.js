/* ---------------------------------------------------
	Home Page Owl carousel - Slider
-------------------------------------------------- */

$(document).ready(function ($) {
	"use strict";
	// Content slider
 
		var owlBanner =  $('.yt-content-slider');
owlBanner.owlCarousel2({
	//animateOut: 'fadeOut',
	loop:true,
	margin:0,
	autoWidth: false,
	dots: true,
	nav:true,
	autoplay:true,
	//lazyLoad:true,
	//autoHeight:true,
	autoplayTimeout:5000,
	smartSpeed:450,
	autoplayHoverPause: true,
	responsive:{
		0:{
			items:1,
		},
		480:{
			items:1,
		},
		768:{
			items:1
		},
		1024:{
			items:1
		},
		1200:{
			items:1
		}
	}
})		
	 
});