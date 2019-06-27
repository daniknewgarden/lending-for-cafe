$(document).ready(function(){

	$('.next').click(function(){
		var currentSlide = $('.slide.curry');
		var currentSlideIndex = $('.slider.curry').index();
		var nextSlideIndex = currentSlideIndex + 1;
		var nextSlide = $('.slider').eq(nextSlideIndex);
		currentSlide.fadeOut(1000);
		currentSlide.removeClass('curry');

		if(nextSlideIndex == ($('.slide:last').index()+1)){
		 $('.slider').eq(0).fadeIn(1000);
		 $('.slider').eq(0).addClass('curry');
		}
		else{
		nextSlide.fadeIn(1000);
		nextSlideIndex.addClass('curry');
		}

	})
});


