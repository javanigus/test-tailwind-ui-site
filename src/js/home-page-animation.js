/*
 * animate page elements
 */
(function () {

	$(".el, .el2").css("opacity", 0);

	anime({
		targets: '.hero .el',
		opacity: [0,1],
		duration: 1000,
		translateX: [-300, 0],
		easing: 'easeOutCubic',
		delay: anime.stagger(200) // increase delay by 100ms for each elements.
	});

	anime({
		targets: '.hero .el2',
		opacity: [0,1],
		duration: 1000,
		translateX: [300, 0],
		easing: 'easeOutCubic',
		delay: anime.stagger(200) // increase delay by 100ms for each elements.
	});

	new Waypoint({
		element: document.getElementById('de-risk'),
		handler: function(direction) {
			anime({
				targets: '#de-risk .el',
				opacity: [0,1],
				duration: 1000,
				translateX: [-300, 0],
				easing: 'easeOutCubic',
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
				duration: 1000,
				translateX: [-300, 0],
				easing: 'easeOutCubic',
				delay: anime.stagger(200) // increase delay by 100ms for each elements.
			});
			anime({
				targets: '#apps .app',
				delay: 1500,
				opacity: [0,1],
				duration: 750,
				easing: 'easeOutCubic',
				delay: anime.stagger(75) // increase delay by 100ms for each elements.
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
				duration: 1000,
				easing: 'easeOutCubic',
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
				duration: 1000,
				translateX: [300, 0],
				easing: 'easeOutCubic',
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
				duration: 1000,
				translateX: [300, 0],
				easing: 'easeOutCubic',
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
				duration: 1000,
				translateY: [-200, 0],
				easing: 'easeOutCubic',
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
				duration: 1000,
				translateY: [200, 0],
				easing: 'easeOutCubic',
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
				duration: 1000,
				translateY: [200, 0],
				easing: 'easeOutCubic',
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
				duration: 1000,
				translateX: [-300, 0],
				easing: 'easeOutCubic',
				delay: anime.stagger(200) // increase delay by 100ms for each elements.
			});
			this.destroy()
		},
		offset: '75%'
	})
}());