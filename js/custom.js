(function ($) {
	"use strict";

	//AOS Init
	AOS.init({
		disable: 'mobile'
	});

	// Preloader
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

	//Menu
	$('#menu-toggle, #menu > ul > li > a').on('click', function (e) {
		var $toggle = $(this);
		var $menu = $('#' + $(this).attr('aria-controls'));

		if ($menu.attr('aria-hidden') == 'true') {
			$('body').addClass('open');
			$menu.attr('aria-hidden', 'false');
			$toggle.attr('aria-expanded', 'true');
		} else if ($menu.attr('aria-hidden') == 'false') {
			$('body').removeClass('open');
			$menu.attr('aria-hidden', 'true');
			$toggle.attr('aria-expanded', 'faremove');
		}
	});

	$('#menu > ul > li > a').on('click', function (e) {
		var $menu = $('#menu');
		$('body').removeClass('open');
		$menu.attr('aria-hidden', 'true');
	});


	/*------------------
		Testimonials
	--------------------*/
	$('.testmonial_active').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		autoplay: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplaySpeed: 800,
		responsive: {
			0: {
				items: 1,
				dots: false,
				nav: true
			},
			767: {
				items: 2,
				dots: false,
				nav: true
			},
			992: {
				items: 2,
				dots: false,
				nav: true
			},
			1200: {
				items: 2,
				dots: false,
				nav: true
			},
			1500: {
				items: 2,
				dots: false,
				nav: true
			}
		}
	});
	
})(jQuery);


// go to top
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('#back-to-top').fadeIn();
	} else {
		$('#back-to-top').fadeOut();
	}
});

// scroll body to 0px on click
$('#back-to-top').on('click', function () {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});


//Page portfolio cursors
$("body").on("mousemove", function (n) {
	t.style.left = n.clientX + "px",
	t.style.top = n.clientY + "px",
	e.style.left = n.clientX + "px",
	e.style.top = n.clientY + "px",
	i.style.left = n.clientX + "px",
	i.style.top = n.clientY + "px"
});


var t = $('#cursor')[0],
	e = $('#cursor2')[0],
	i = $('#cursor3')[0];


function n(t) {
	e.classList.add("hover"), i.classList.add("hover")
}

function s(t) {
	e.classList.remove("hover"), i.classList.remove("hover")
}

s();

for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
	o(r[a])
}

function o(t) {
	$(t).on("mouseover", n), $(t).on("mouseout", s)
}

const cursor = document.querySelector('.cursor');

$(this).on('mousemove', function(e) {
	cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

$(this).on('click', function(){
	cursor.classList.add("expand");

	setTimeout(() => {
		cursor.classList.remove("expand");
	}, 500)
})

/* Hero Case study images */

$('.slide-buttons li:nth-child(1)').on('mouseenter', function () {
	$('.slide-buttons li.active').removeClass('active');
	$('.hero-center-section.show').removeClass("show");
	$('.hero-center-section:nth-child(1)').addClass("show");
	$('.slide-buttons li:nth-child(1)').addClass('active');
})
$('.slide-buttons li:nth-child(2)').on('mouseenter', function () {
	$('.slide-buttons li.active').removeClass('active');
	$('.hero-center-section.show').removeClass("show");
	$('.hero-center-section:nth-child(2)').addClass("show");
	$('.slide-buttons li:nth-child(2)').addClass('active');
})
$('.slide-buttons li:nth-child(3)').on('mouseenter', function () {
	$('.slide-buttons li.active').removeClass('active');
	$('.hero-center-section.show').removeClass("show");
	$('.hero-center-section:nth-child(3)').addClass("show");
	$('.slide-buttons li:nth-child(3)').addClass('active');
})
$('.slide-buttons li:nth-child(4)').on('mouseenter', function () {
	$('.slide-buttons li.active').removeClass('active');
	$('.hero-center-section.show').removeClass("show");
	$('.hero-center-section:nth-child(4)').addClass("show");
	$('.slide-buttons li:nth-child(4)').addClass('active');
})
$('.slide-buttons li:nth-child(5)').on('mouseenter', function () {
	$('.slide-buttons li.active').removeClass('active');
	$('.hero-center-section.show').removeClass("show");
	$('.hero-center-section:nth-child(5)').addClass("show");
	$('.slide-buttons li:nth-child(5)').addClass('active');
})
$('.slide-buttons li:nth-child(6)').on('mouseenter', function () {
	$('.slide-buttons li.active').removeClass('active');
	$('.hero-center-section.show').removeClass("show");
	$('.hero-center-section:nth-child(6)').addClass("show");
	$('.slide-buttons li:nth-child(6)').addClass('active');
})
$('.slide-buttons li:nth-child(1)').trigger('mouseenter');