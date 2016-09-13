$(document).ready(function(){
	
	// landing page animations
	$('.logo').click(function(){
		$('.arrows, .subtitle').hide();
		$('.logo .background-overlay').addClass('rotate-anim');
		$('.logo .m-letter').addClass('m-anim');
		$('.logo .j-letter').addClass('j-anim');
		$('.logo .line').addClass('line-anim');
		$('.landing-page').delay(4500).fadeOut();
		$('main').delay(5000).fadeIn();
	});
	// --------


	// menu button transition
	$('.menu-div').click(function(){
		$('.menu-line').toggleClass('menu-active');
	});
	// menu button actions
	$('.menu-div').click(function(){
		$('.menu-element').toggleClass('active');
	});

	// animated circles
	var borders = ["border-top-color","border-right-color","border-bottom-color","border-left-color"];
	var directions = ["normal","reverse"];
	var angles = ["rotateX","rotateZ"];

	function randomColor(){
  		var color = "#";
		color += Math.floor(Math.random()*1000000);
		return color;
	}

	function randomAngleType(){
		var angleType = angles[Math.floor(Math.random()*angles.length)];
		console.log(angleType);
		return angleType;
	}
	function randomAngle(){
		var rotateAngle = Math.floor(Math.random()*360);
		return rotateAngle+"deg";
	}
	function randomWidth(){
		var width = Math.floor(Math.random()*400);
		return width;
	}
	function randomBorderWidth(){
		var borderWidth = Math.floor(Math.random()*5);
		return borderWidth;
	}
	function randomBorder(){
		var border = borders[Math.floor(Math.random()*borders.length)];
		return border;
	}
	function randomDirection(){
		var direction = directions[Math.floor(Math.random()*directions.length)];
		return direction;
	}
	function randomDelay(){
		var delay = Math.floor(Math.random()*3000);
		return delay;
	}
	function generateCircles(){
		for(var i=0;i<120;i++){
			$('.circles-container').append('<div class="circle circle-'+i+'"></div>');
			var size = randomWidth();
			$('.circle-'+i).css({
				width: size,
				height: size,
				animationDirection: randomDirection(),
				borderWidth: randomBorderWidth(),
				animationDelay: randomDelay()+"ms",
		    });
		    $('.circle-'+i).css('border-color',randomColor());
		}
	}
	generateCircles();

});