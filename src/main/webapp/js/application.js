
 
/* ---------------------------------------------------
Search Toggle
 ---------------------------------------------------*/

 $(function(){
  var $searchlink = $('#searchtoggle i');
  var $searchbar  = $('#searchbar');
  
  $('#searchClick a').on('click', function(e){
    e.preventDefault();
    
    if($(this).attr('id') == 'searchtoggle') {
      if(!$searchbar.is(":visible")) { 
        // if invisible we switch the icon to appear collapsable
        $searchlink.removeClass('fa-search').addClass('fa-search-minus');
      } else {
        // if visible we switch the icon to appear as a toggle
        $searchlink.removeClass('fa-search-minus').addClass('fa-search');
      }
      
      $searchbar.slideToggle(300, function(){
        // callback after search bar animation
      });
    }
  });
    });


$(document).ready(function(){
/* ---------------------------------------------------
	 Dropdowns
-------------------------------------------------- */
	$screensize = $(window).width();
	if ($screensize > 991) {
	$('#my_account, #pincode').hover(function() {
		$(this).find('ul').stop(true, true).slideDown('fast');
	  },function() {
		$(this).find('ul').stop(true, true).css('display', 'none');
	  });
	}

$('.dropdown-menu input').click(function (e) {
   e.stopPropagation();
 });
$('.dropdown-menu li').click(function(){
 
$('.dropdown-toggle b').remove().appendTo($('.dropdown-toggle').text($(this).text()));
});
	
// Hide tooltip when clicking on it
    var hasTooltip = $("[data-toggle='tooltip']").tooltip();
	hasTooltip.on('click', function () {
		    $(this).tooltip('hide')
	});



/* ---------------------------------------------------
	 Top Panel
-------------------------------------------------- */

$(window).on("load", function() {
    responsiveLayout();
});

 // responsiveLayout Menu

function responsiveLayout(element,eclass){
	var $header = $("header"),
    offset_top = $header.offset().top;
    $(window).scroll(function(event){
		processScroll($header, "navbar-compact", offset_top);
	});
}

// processScroll Menu
function processScroll(element, eclass, offset_top) {
    var scrollTop = $(window).scrollTop();
    if($(element).height()< $(window).height()){
        if (scrollTop > offset_top) {
            //fix secondary navigation
            $(element).addClass(eclass);		
        } else if (scrollTop <= offset_top) {
            $(element).removeClass(eclass);
        }
    }
}
//lastScrollTop Menu
$(window).load(function() {
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var $header = $("header");
		var scrTop = $(window).scrollTop();
		if( scrTop > lastScrollTop ) {
			if($header.hasClass('navbar-compact')) {
				$header.addClass('hidden-menu');
			}
		} else {
			if($header.hasClass('navbar-compact')) {
				$header.removeClass('hidden-menu');
			}
		}
		lastScrollTop = scrTop;
	});
});




/* ---------------------------------------------------
	Header Top link
-------------------------------------------------- */
	$(".header-top-right .top-link > li").mouseenter(function(){
		$(".header-top-right .top-link > li.account").addClass('inactive');
	});
	$(".header-top-right .top-link > li").mouseleave(function(){
		$(".header-top-right .top-link > li.account").removeClass('inactive');
	});
	$(".header-top-right .top-link > li.account").mouseenter(function(){
		$(".header-top-right .top-link > li.account").removeClass('inactive');
	});
/* ---------------------------------------------------
	Resonsive Header Top
-------------------------------------------------- */
	$(".collapsed-block .expander").click(function (e) {
        var collapse_content_selector = $(this).attr("href");
        var expander = $(this);
		
        if (!$(collapse_content_selector).hasClass("open")) {
			expander.addClass("open").html("<i class='fa fa-angle-up'></i>") ;
		}
		else expander.removeClass("open").html("<i class='fa fa-angle-down'></i>");
		
		if (!$(collapse_content_selector).hasClass("open")) $(collapse_content_selector).addClass("open").slideDown("normal");
        else $(collapse_content_selector).removeClass("open").slideUp("normal");
        e.preventDefault()
    })
			
/* ---------------------------------------------------
	Back to Top
-------------------------------------------------- */
	$(".back-to-top").addClass("hidden-top");
		$(window).scroll(function () {
		if ($(this).scrollTop() === 0) {
			$(".back-to-top").addClass("hidden-top")
		} else {
			$(".back-to-top").removeClass("hidden-top")
		}
	});

	$('.back-to-top').click(function () {
		$('body,html').animate({scrollTop:0}, 1200);
		return false;
	});	

});

/* ---------------------------------------------------
	Quantity minus and plus
-------------------------------------------------- */
$(function ($) {
    "use strict";
	//Quantity plus minus 
    $.initQuantity = function ($control) {
        $control.each(function () {
            var $this = $(this),
                data = $this.data("inited-control"),
                $plus = $(".input-group-addon:last", $this),
                $minus = $(".input-group-addon:first", $this),
                $value = $(".form-control", $this);
            if (!data) {
                $control.attr("unselectable", "on").css({
                    "-moz-user-select": "none",
                    "-o-user-select": "none",
                    "-khtml-user-select": "none",
                    "-webkit-user-select": "none",
                    "-ms-user-select": "none",
                    "user-select": "none"
                }).bind("selectstart", function () {
                    return false
                });
                $plus.click(function () {
                    var val =
                        parseInt($value.val()) + 1;
                    $value.val(val);
                    return false
                });
                $minus.click(function () {
                    var val = parseInt($value.val()) - 1;
                    $value.val(val > 0 ? val : 1);
                    return false
                });
                $value.blur(function () {
                    var val = parseInt($value.val());
                    $value.val(val > 0 ? val : 1)
                })
            }
        })
    };
    $.initQuantity($(".quantity-control"));
    $.initSelect = function ($select) {
        $select.each(function () {
            var $this = $(this),
                data = $this.data("inited-select"),
                $value = $(".value", $this),
                $hidden = $(".input-hidden", $this),
                $items = $(".dropdown-menu li > a", $this);
            if (!data) {
                $items.click(function (e) {
                    if ($(this).closest(".sort-isotope").length >
                        0) e.preventDefault();
                    var data = $(this).attr("data-value"),
                        dataHTML = $(this).html();
                    $this.trigger("change", {
                        value: data,
                        html: dataHTML
                    });
                    $value.html(dataHTML);
                    if ($hidden.length) $hidden.val(data)
                });
                $this.data("inited-select", true)
            }
        })
    };
    $.initSelect($(".btn-select")); 
	
});

/* ---------------------------------------------------
	Home & Details Page Product Scroll
-------------------------------------------------- */
$(document).ready(function($) {
	$('.releate-products').owlCarousel2({
		pagination: false,
		center: false,
		items:5,
		nav: true,
		dots: false,
		loop: true,
		margin: 25,
		navText: [ 'prev', 'next' ],
		slideBy: 1,
		autoplay: false,
		autoplayTimeout: 2500,
		autoplayHoverPause: true,
		autoplaySpeed: 800,
		startPosition: 0, 
		responsive:{
			0:{
				items:2
			},
			480:{
				items:3
			},
			768:{
				items:4
			},
			1024:{
				items:5
			},
			1200:{
				items:6
			}
		}
	});	 
	 
});

/* ---------------------------------------------------
	Thumb Slider Product Details
-------------------------------------------------- */
$(document).ready(function() {
	var $nav = $("#thumb-slider");
	$nav.each(function() {
		$(this).owlCarousel2({
			nav: true,
			dots: false,
			slideBy: 1,
			margin: 10,
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 3
				},
				1000: {
					items: 6
				}
			}
		});
	})
	
	var zoomCollection = '.large-image img';
	$( zoomCollection ).elevateZoom({
		zoomType    : "inner",
		lensSize    :"200",
		easing:true,
		gallery:'thumb-slider',
		cursor: 'pointer',
		galleryActiveClass: "active"
	});
	$('.large-image').magnificPopup({
		items: [
			{src: 'image/products/J9.jpg' },
			{src: 'image/products/J6.jpg' },
			{src: 'image/products/J5.jpg' },
			{src: 'image/products/J4.jpg' },
			{src: 'image/products/J9.jpg' },
			{src: 'image/products/J6.jpg' },
			{src: 'image/products/J5.jpg' },
		],
		gallery: { enabled: true, preload: [0,2] },
		type: 'image',
		mainClass: 'mfp-fade',
		callbacks: {
			open: function() {
				
				var activeIndex = parseInt($('#thumb-slider .img.active').attr('data-index'));
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.goTo(activeIndex);
			}
		}
	});
	$("#thumb-slider .owl2-item").each(function() {
		$(this).find("[data-index='0']").addClass('active');
	});
	
	$('.thumb-video').magnificPopup({
	  type: 'iframe',
	  iframe: {
		patterns: {
		   youtube: {
			  index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
			  id: 'v=', // String that splits URL in a two parts, second part should be %id%
			  src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
				},
			}
		}
	});
	 
});

/* ---------------------------------------------------
	Add to Cart
-------------------------------------------------- */

 	// Cart add remove functions
	var cart = {
		'add': function(product_id, quantity) {
			addProductNotice('Product added to Cart', '<img src="image/products/e11.jpg" alt="">', '<h3><a href="#">Apple Cinema 30"</a> added to <a href="#">shopping cart</a>!</h3>', 'success');
		}
	}
	/* ---------------------------------------------------
		jGrowl – jQuery alerts and message box
	-------------------------------------------------- */
	function addProductNotice(title, thumb, text, type) {
		$.jGrowl.defaults.closer = false;
		//Stop jGrowl
		//$.jGrowl.defaults.sticky = true;
		var tpl = thumb + '<h3>'+text+'</h3>';
		$.jGrowl(tpl, {		
			life: 4000,
			header: title,
			speed: 'slow',
			theme: type
		});
	}	