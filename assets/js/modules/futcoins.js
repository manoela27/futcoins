(function($){
	var containerInstruction = $(".instruction_slick")
	var containerHelp = $(".help_slick")
	


	containerInstruction.slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,

		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				}
			}]
	});

	containerHelp.slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows:false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,

						}
			
			}]
	});
	var target_top = $(window).height();
	$('.works-function').on('click', function(){
		$('html, body').animate({ scrollTop: target_top/3 }, 20);
	});

	

})(jQuery);

