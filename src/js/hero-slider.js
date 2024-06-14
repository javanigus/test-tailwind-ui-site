/*
 * hero swiper https://swiperjs.com/
 */
(function () {
	new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		/*autoplay: {
			delay: 3000,
			disableOnInteraction: false,
    		pauseOnMouseEnter: true,
		},*/
		speed: 400,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}());