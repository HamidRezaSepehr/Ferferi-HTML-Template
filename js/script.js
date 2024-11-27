/*!
 * Template Main JavaScript File
 * Ferferi | HTML Business Template
 * Author: HamidSepehr
 * Copyright 2021 © HamidSepehr (https://www.templatemonster.com/authors/hamidsepehr/)
 * Licensed under TemplateMonster (https://www.templatemonster.com/licenses/)
 *
 * "Life is balance of holding on and letting go." --Rumi
 *
 */

$(document).ready(function(){

	// Home Page Top Carousel Initialization
	$(".owl-carousel-home").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
	});

	if ($("section.testimonials")) {
		// Testimonial Carousel Initialization
		$(".owl-carousel-testimonials").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
		});

		$('.testimonials .nav-right').on('click', function(){
			$('.owl-carousel').trigger('next.owl.carousel');
		});
		$('.testimonials .nav-left').on('click', function(){
			$('.owl-carousel').trigger('prev.owl.carousel');
		});
	}

	if ($(".client-carousel")) {
		// Testimonial Carousel Initialization
		$(".client-carousel").owlCarousel({
			items: 6,
			loop: true,
			autoplay: true,
			responsive: {
				0 : {
			        items: 2,
			    },
			    480 : {
			        items: 3,
			    },
			    768 : {
			        items: 6,
			    }
			}
		});
	}

	// Lax Init
	lax.setup({
		breakpoints: { small: 0, large: 992 },
	});

	const updateLax = () => {
		lax.update(window.scrollY);
		window.requestAnimationFrame(updateLax);
	}

	window.requestAnimationFrame(updateLax);

	lax.updateElements();

	// Update on resize
	window.addEventListener("resize", function() {
		lax.updateElements();
	});


	// Counter Up Initialization
	if ($("#stat-1").length) {
		const countUp1 = new CountUp('stat-1', 24);
		// Counter Item 1
		if (!countUp1.error) {
			var waypoint = new Waypoint({
			  element: document.getElementById('stat-1'),
			  handler: function(direction) {
			    countUp1.start();
			  },
			  offset: '80%'
			});
		} else {
		  console.error(countUp1.error);
		}
	}
	if ($("#stat-2").length) {
		const countUp2 = new CountUp('stat-2', 365);
		// Counter Item 2
		if (!countUp2.error) {
			var waypoint = new Waypoint({
			  element: document.getElementById('stat-2'),
			  handler: function(direction) {
			    countUp2.start();
			  },
			  offset: '80%'
			});
		} else {
		  console.error(countUp2.error);
		}
	}
	if ($("#stat-3").length) {
		const countUp3 = new CountUp('stat-3', 423);
		// Counter Item 3
		if (!countUp3.error) {
			var waypoint = new Waypoint({
			  element: document.getElementById('stat-3'),
			  handler: function(direction) {
			    countUp3.start();
			  },
			  offset: '80%'
			});
		} else {
		  console.error(countUp3.error);
		}
	}
	if ($("#stat-4").length) {
		const countUp4 = new CountUp('stat-4', 86);
		// Counter Item 4
		if (!countUp4.error) {
			var waypoint = new Waypoint({
			  element: document.getElementById('stat-4'),
			  handler: function(direction) {
			    countUp4.start();
			  },
			  offset: '80%'
			});
		} else {
		  console.error(countUp4.error);
		}
	}
	

	// Post Like/ Comment Like Script (Add class "liked")
	$('#like_post, #like_comment').on('click', function() {
		$(this).toggleClass('liked');
	});

});