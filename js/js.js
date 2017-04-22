// scroll-top
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0}, 1100);
	});
});

// preloader
var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},2000);};

// scroll-button
new WOW().init();
$(document).ready(function() {
	$("#top").on("click","form", function (event) {
		event.preventDefault();
		var id = $(this).attr('action'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-120}, 700);
	});
});

