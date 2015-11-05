$(document).ready(function() {
	$(document).on('click', function () {
		if($('.js-popup').hasClass('is-active')) {
			$('.js-popup').removeClass('is-active')
			$('.js-popup').fadeOut();
			$('body').removeClass('no-scroll');
			$('body').css({
				marginRight: 0,
			});
		}
	});
	
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

	// popup
	$('.js-show-popup').on('click', function (event) {
		var $popup = $('.' + $(this).data('popup'));
		$('.js-popup').fadeOut();
		$popup.addClass('is-active').fadeIn()
		$('body').addClass('no-scroll');
		$('body').css({
			marginRight: scrollBarWidth(),
		});
		return false;
	});
	$('.js-close-popup').on('click', function() {
		$(this).parents(".js-popup").fadeOut().removeClass("is-active");
		$('body').removeClass('no-scroll');
		$('body').css({
			marginRight: 0,
		});
	});
	$(".js-popup-in").on("click", function(event) {
		event.stopPropagation();
	});

	// scrollBarWidth
	function scrollBarWidth() {
		var scrollDiv = document.createElement("div");
		scrollDiv.className = "scrollbar-measure";
		document.body.appendChild(scrollDiv);
		// Get the scrollbar width
		$('.scrollbar-measure').css({
			'width': '100px',
			'height': '100px',
			'overflow': 'scroll',
			'position': 'absolute',
			'top': '-9999px'
		});
		var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
		console.warn(scrollbarWidth);
		// Delete the DIV 
		document.body.removeChild(scrollDiv);
		return scrollbarWidth;
	}


});