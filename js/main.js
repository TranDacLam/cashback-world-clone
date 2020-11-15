$(document).ready(function() {

	var allHeaders = $("#footer #accordion .footer-header");
	var allPanels = $("#footer #accordion ul");
	$(window)
		.on("resize", function() {
			if (window.matchMedia('(min-width: 751px)').matches) {
				$("#footer #accordion .footer-header").off("click");
				allPanels.removeAttr("style");
				allHeaders.removeClass("open");
			} else {
				$("#footer #accordion .footer-header")
					.off()
					.on("click", function() {
						if (!$(this).hasClass("open")) {
							$(this)
								.next("ul")
								.slideDown(200);
							$(this).addClass("open");
						} else {
							$(this).removeClass("open");
							$(this)
								.next("ul")
								.slideUp(200);
						}
					});
			}
		})
		.resize();

	$('.btn-register-now').on('click', function(e){
		e.preventDefault();
		$([document.documentElement, document.body]).animate({
			scrollTop: $('#form-register').offset().top - 80
		}, 1000);
	})

	// $('#btnRegisterNow').on('click', function(e){
	// 	e.preventDefault();
	// 	if (!$(this).hasClass("open")) {
	// 		$('#form-register').slideDown(300);
	// 		$(this).addClass("open");
	// 		$([document.documentElement, document.body]).animate({
	// 			scrollTop: $(this).offset().top - 80
	// 		}, 1000);
	// 	} else {
	// 		$(this).removeClass("open");
	// 		$('#form-register').slideUp(300);
	// 	}
	// })

	$('.form-register__password .form-register__password-icon-1').on('click', function(e){
		$(this).css({'display': 'none'})
		$(this).next('span').css({'display': 'block'})
		$('.form-register__password input').attr('type', 'text')
	})
	$('.form-register__password .form-register__password-icon-2').on('click', function(e){
		$(this).css({'display': 'none'})
		$(this).prev('span').css({'display': 'block'})
		$('.form-register__password input').attr('type', 'password')
	})
	$('.form-register__confirm-password .form-register__confirm-password-icon-1').on('click', function(e){
		$(this).css({'display': 'none'})
		$(this).next('span').css({'display': 'block'})
		$('.form-register__confirm-password input').attr('type', 'text')
	})
	$('.form-register__confirm-password .form-register__confirm-password-icon-2').on('click', function(e){
		$(this).css({'display': 'none'})
		$(this).prev('span').css({'display': 'block'})
		$('.form-register__confirm-password input').attr('type', 'password')
	})

	// $('#navbar-main .nav > li').hover(function(){
	// 	$(this).addClass('open')
	// 	$(this).find('.has-submenu').addClass('highlighted')
		
	// 	$(this).find('.mega-menu').css({'display': 'block', 'top': 'auto', 'left': '0', 'margin-top': '0', 'z-index': '10001'});
	// 	let offset = $(this).find('.mega-menu').offset() && $(this).find('.mega-menu').offset().left || 0
	// 	console.log("$(this).find('.mega-menu-content').offset()", $(this).find('.mega-menu-content').offset())
	// 	$(this).find('.mega-menu-content').css({left: -offset+'px', width: $( window ).width()})
	// }, function() {
	// 	$( this ).removeClass( "open" );
	// 	$(this).find('.has-submenu').removeClass('highlighted');
	// 	$(this).find('.mega-menu').css({'display': 'none', 'top': 'auto', 'left': '0', 'margin-left': '0', 'margin-top': '0', 'z-index': ''});
	// })

	// var $header = $("#navbar-main-sticky-wrapper")

	// function onScroll(){
	// 	$(window).on("scroll", function() {
	// 		if ($(this).scrollTop() >= 50) {
	// 			$header.addClass('is-sticky');
	// 			$('#navbar-main').css({'width': $( window ).width(), 'position': 'fixed', 'top': '0px', 'z-index': 'auto'})
	// 		}
	// 		else {      
	// 			$header.removeClass('is-sticky');
	// 			$('#navbar-main').attr('style', '')
	// 		}
	// 	});
	// }
	// onScroll()

	// $('.website-select a').on('click', function(){
	// 	$('#website-container').toggleClass('website-container-active')
	// })
});