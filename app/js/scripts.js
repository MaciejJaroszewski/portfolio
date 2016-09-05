$(document).ready(function(){
	
	// landing page animations
	$('.logo').click(function(){
		$('.arrows, .subtitle').hide();
		$('.background-overlay').addClass('rotate-anim');
		$('.m-letter').addClass('m-anim');
		$('.j-letter').addClass('j-anim');
		$('.line').addClass('line-anim');
		$('.landing-page').delay(4500).fadeOut();
		$('main').delay(5000).fadeIn();
	});
	// --------


});