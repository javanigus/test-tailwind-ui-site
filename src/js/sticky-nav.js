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