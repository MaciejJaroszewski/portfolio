$(document).ready(function(){
	
	// --------------------------------------|

	var menuElements = $('.menu-element');
	var slideReload = $('.slide-reload');
	var slideReloadLeft = $('.slide-reload-left');
	var slideReloadRight = $('.slide-reload-right');
	var menuLines = $('.menu-line');
	var animatedCircles = $('.animated-circles');
	var reloadSmallCircle = $('.reload-circle');
	var smallLogo = $('.logo-animated');


	//   -------------------------------------
	//              functions                |
	//   -------------------------------------

	function showHideMenu(){
		menuElements.toggleClass('active');
		smallLogo.toggleClass('active-menu-logo');

	}
	function showMenu(){
		if(menuElements.hasClass('active')){
			return;
		} else {
			menuElements.addClass('active');
		}
	}
	function hideMenu(){
		if(menuElements.hasClass('active') && smallLogo.hasClass('active-menu-logo')){
			menuElements.removeClass('active');
			smallLogo.removeClass('active-menu-logo');
		} else {
			return;
		}
	}
	function transformMenuLines(){
		menuLines.toggleClass('menu-active');
	}
	function showContent(content){
		content.css('transform', 'translate(0,0)');
	}
	function hideContent(content){
		content.hide();
	}
	function reloadContent(time){
		slideReload.css({
			transform:'translateX(0)',
			transitionDelay: '400ms',
			transitionDuration: '300ms'
		});
		reloadSmallCircle.delay(400).fadeIn();
		setTimeout(function(){
			slideReload.css({
				transform:'',
				transitionDelay: 0,
				transitionDuration: '400ms'
			});
			reloadSmallCircle.delay(200).fadeOut();
		}, time);
	}

	// --------------------------------------------|
	// --------------------------------------------|

	
	// temporary turn off the landing page animation ant turn on home page
	$('.landing-page').hide();
	$('main').show();
	

	// landing page animations
	// $('.logo').click(function(){
	// 	$('.arrows, .subtitle').hide();
	// 	$('.logo .background-overlay').addClass('rotate-anim');
	// 	$('.logo .m-letter').addClass('m-anim');
	// 	$('.logo .j-letter').addClass('j-anim');
	// 	$('.logo .line').addClass('line-anim');
	// 	$('.landing-page').delay(4500).fadeOut();
	// 	$('main').delay(5000).fadeIn();
	// });
	// --------


	// menu button transition
	$('.menu-div').click(function(){
		transformMenuLines();
	});
	// menu button actions - sliding menu down/up
	$('.menu-div').click(function(){
		showHideMenu();
	});

	menuElements.click(function(){
		hideMenu();
		transformMenuLines();
		reloadContent(1600);
	});



	// animated circles
	var borders = ["border-top-color","border-right-color","border-bottom-color","border-left-color"];
	var directions = ["normal","reverse"];

	function randomColor(){
  		var color = "#";
		color += Math.floor(Math.random()*1000000);
		return color;
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



	// temporary turn off circles animation and hide home page
	$('.animated-circles .circle').css('animation-play-state', 'paused');
	$('#home').hide();
	// turn on about me page
	$('#about-me').show();

});