/*
 * animate page elements
 */
(function () {

	$(".el, .el2").css("opacity", 0);

	anime({
		targets: '.hero .el',
		opacity: [0,1],
		duration: 3000,
		translateX: [-200, 0],
		delay: anime.stagger(200) // increase delay by 100ms for each elements.
	});

	anime({
		targets: '.hero .el2',
		opacity: [0,1],
		duration: 3000,
		translateX: [200, 0],
		delay: anime.stagger(200) // increase delay by 100ms for each elements.
	});

	new Waypoint({
		element: document.getElementById('de-risk'),
		handler: function(direction) {
			anime({
				targets: '#de-risk .el',
				opacity: [0,1],
				duration: 3000,
				translateX: [-200, 0],
				delay: anime.stagger(200) // increase delay by 100ms for each elements.
			});
			this.destroy()
		},
		offset: '75%'
	})

	new Waypoint({
		element: document.getElementById('apps'),
		handler: function(direction) {
			anime({
				targets: '#apps .el',
				opacity: [0,1],
				duration: 3000,
				translateX: [-200, 0],
				delay: anime.stagger(200) // increase delay by 100ms for each elements.
			});
			this.destroy()
		},
		offset: '75%'
	})

	new Waypoint({
		element: document.getElementById('stats'),
		handler: function(direction) {
			anime({
				targets: '#stats .el',
				opacity: [0,1],
				duration: 3000,
				delay: anime.stagger(200) // increase delay by 100ms for each elements.
			});
			this.destroy()
		},
		offset: '75%'
	})

	new Waypoint({
		element: document.getElementById('features'),
		handler: function(direction) {
			anime({
				targets: '#features .el',
				opacity: [0,1],
				duration: 3000,
				translateX: [200, 0],
				delay: anime.stagger(200) // increase delay by 100ms for each elements.
			});
			this.destroy()
		},
		offset: '75%'
	})

	new Waypoint({
		element: document.getElementById('whitepaper'),
		handler: function(direction) {
			anime({
				targets: '#whitepaper .el',
				opacity: [0,1],
				duration: 3000,
				translateX: [200, 0],
				delay: anime.stagger(200) // increase delay by 100ms for each elements.
			});
			this.destroy()
		},
		offset: '75%'
	})

	new Waypoint({
		element: document.getElementById('testimonials'),
		handler: function(direction) {
			anime({
				targets: '#testimonials .el',
				opacity: [0,1],
				duration: 3000,
				translateY: [-200, 0],
				delay: anime.stagger(200) // increase delay by 100ms for each elements.
			});
			this.destroy()
		},
		offset: '75%'
	})

	new Waypoint({
		element: document.getElementById('events'),
		handler: function(direction) {
			anime({
				targets: '#events .el',
				opacity: [0,1],
				duration: 3000,
				translateY: [200, 0],
				delay: anime.stagger(200) // increase delay by 100ms for each elements.
			});
			this.destroy()
		},
		offset: '75%'
	})

	new Waypoint({
		element: document.getElementById('news'),
		handler: function(direction) {
			anime({
				targets: '#news .el',
				opacity: [0,1],
				duration: 3000,
				translateY: [200, 0],
				delay: anime.stagger(200) // increase delay by 100ms for each elements.
			});
			this.destroy()
		},
		offset: '75%'
	})

	new Waypoint({
		element: document.getElementById('trial'),
		handler: function(direction) {
			anime({
				targets: '#trial .el',
				opacity: [0,1],
				duration: 3000,
				translateX: [-200, 0],
				delay: anime.stagger(200) // increase delay by 100ms for each elements.
			});
			this.destroy()
		},
		offset: '75%'
	})
}());

/*
 * add class to header when user scrolls down x pixels to stick header to top
 */
(function () {
	var offset = $(".banner-and-header").offset();
	checkOffset();

	$(window).scroll(function() {
		checkOffset();
	});

	function checkOffset() {
		if ( $(document).scrollTop() > offset.top){
			$('.banner-and-header').addClass('stuck');
		} else {
			$('.banner-and-header').removeClass('stuck');
		} 
	}
}());

/*
 * hero swiper https://swiperjs.com/
 */
(function () {
	new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		speed: 400,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}());