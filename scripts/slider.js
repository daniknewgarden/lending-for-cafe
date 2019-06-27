$(document).ready(function(){
	
	$('.next').click(function(){
		var currentImage = $('.slider.curry');
		var currentImageIndex = $('.slider.curry').index();
		var nextImageindex = currentImageIndex + 1;
		var nextImage = $('.slider').eq(nextImageindex);
		currentImage.fadeOut(1000);
		currentImage.removeClass('.curry');


		if(nextImageindex == ($('.slider:last').index()+1)){
			$('.slider').eq(0).fadeIn(1000);
			$('.slider').eq(0).addClass('curry');
		} else {
			nextImage.fadeIn(1000);
			nextImage.addClass('curry');
		}


	})

});