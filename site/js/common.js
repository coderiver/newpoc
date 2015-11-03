$(document).ready(function() {

	
	var logoSlider = $(".js-logo-slider");
	var logoSliderOpt = {
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}
	logoSlider.slick(logoSliderOpt);

	$("[data-slick]").slick();

});