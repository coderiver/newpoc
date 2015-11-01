$(document).ready(function() {

	
	var logoSlider = $(".js-logo-slider");
	var logoSliderOpt = {
		slidesToShow: 5,
		slidesToScroll: 5
	}
	logoSlider.slick(logoSliderOpt);

	$("[data-slick]").slick();

});