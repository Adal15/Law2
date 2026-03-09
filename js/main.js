; (function () {

	'use strict';

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function () {

		$(document).click(function (e) {
			var container = $("#colorlib-offcanvas, .js-colorlib-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

				if ($('body').hasClass('offcanvas')) {

					$('body').removeClass('offcanvas');
					$('.js-colorlib-nav-toggle').removeClass('active');

				}


			}
		});

	};


	var offcanvasMenu = function () {

		$('#page').prepend('<div id="colorlib-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#colorlib-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#colorlib-offcanvas').append(clone2);

		$('#colorlib-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#colorlib-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function () {
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');
		}).mouseleave(function () {

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
		});


		$(window).resize(function () {

			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-colorlib-nav-toggle').removeClass('active');

			}
		});
	};


	var burgerMenu = function () {

		$('body').on('click', '.js-colorlib-nav-toggle', function (event) {
			var $this = $(this);


			if ($('body').hasClass('overflow offcanvas')) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var fullHeight = function () {

		if (!isMobile.any()) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function () {
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};



	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 40, 'easeInOutExpo');
					});

				}, 30);

			}

		}, { offset: '65%' });
	};


	var dropdown = function () {

		$('.has-dropdown').mouseenter(function () {

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function () {
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function () {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function () {

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};


	// Loading page
	var loaderPage = function () {
		$(".colorlib-loader").fadeOut("slow");
	};

	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};

	var counterWayPoint = function () {
		if ($('#colorlib-counter').length > 0) {
			$('#colorlib-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(counter, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}
	};

	var parallax = function () {

		if (!isMobile.any()) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false,
				responsive: true

			});
		}
	};

	var testimonialCarousel = function () {

		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});
	};

	var sliderMain = function () {

		$('#colorlib-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function () {
				setTimeout(function () {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function () {
				setTimeout(function () {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

		});

		// $('#colorlib-hero .flexslider .slides > li').css('height', $(window).height());	
		// $(window).resize(function(){
		// 	$('#colorlib-hero .flexslider .slides > li').css('height', $(window).height());	
		// });

	};


	$(function () {
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		counter();
		parallax();
		testimonialCarousel();
		fullHeight();
	});


}());

// const tabs = document.querySelectorAll(".pro-tab");
// const cards = document.querySelectorAll(".pro-card");

// tabs.forEach(tab => {

// tab.addEventListener("click", () => {

// tabs.forEach(btn => btn.classList.remove("active-tab"));
// tab.classList.add("active-tab");

// const filter = tab.getAttribute("data-filter");

// cards.forEach(card => {

// if(card.getAttribute("data-category") === filter){

// card.classList.remove("hidden-card");

// setTimeout(()=>{
// card.style.display="block";
// },100);

// }
// else{

// card.classList.add("hidden-card");

// setTimeout(()=>{
// card.style.display="none";
// },200);

// }

// });

// });

// });

const ultraTabs = document.querySelectorAll(".ultra-btn");
const ultraCards = document.querySelectorAll(".ultra-card");

ultraTabs.forEach(tab => {

	tab.addEventListener("click", () => {

		ultraTabs.forEach(btn => btn.classList.remove("active-btn"));
		tab.classList.add("active-btn");

		const filter = tab.getAttribute("data-filter");

		ultraCards.forEach(card => {

			if (card.getAttribute("data-category") === filter) {

				card.classList.remove("hidden-card");

				setTimeout(() => {
					card.style.display = "block";
				}, 100);

			}
			else {

				card.classList.add("hidden-card");

				setTimeout(() => {
					card.style.display = "none";
				}, 200);

			}

		});

	});

});

// Trigger initial filter on page load
const activeTab = document.querySelector(".ultra-btn.active-btn");
if (activeTab) {
	activeTab.click();
}

// Floating Menu Toggle
const floatingContainer = document.querySelector(".floating-menu-container");
const floatingToggle = document.getElementById("menuToggle");
const contactLabel = document.querySelector(".floating-contact-label");

if (floatingToggle && floatingContainer) {
	floatingToggle.addEventListener("click", () => {
		floatingContainer.classList.toggle("active");

		// Remove label permanently on first click
		if (contactLabel) {
			contactLabel.style.opacity = '0';
			setTimeout(() => {
				contactLabel.remove();
			}, 300); // 300ms matches existing CSS transition
		}
	});

	// Close when clicking outside
	document.addEventListener("click", (e) => {
		if (!floatingContainer.contains(e.target) && floatingContainer.classList.contains("active")) {
			floatingContainer.classList.remove("active");
		}
	});
}

// disclaimer
// document.addEventListener("DOMContentLoaded", function(){

// const modal = document.getElementById("disclaimer-modal");
// const agreeBtn = document.getElementById("agree-btn");

// if(localStorage.getItem("disclaimerAccepted")){
// modal.style.display="none";
// document.body.style.overflow="auto";
// }else{
// document.body.style.overflow="hidden";
// }

// agreeBtn.onclick = function(){

// localStorage.setItem("disclaimerAccepted","true");

// modal.style.display="none";

// document.body.style.overflow="auto";

// };

// });

// disclaimer
const disclaimerModal = document.getElementById("disclaimer-modal");
const agreeBtn = document.getElementById("agree-btn");

if (disclaimerModal && agreeBtn) {
	document.body.style.overflow = "hidden";
	agreeBtn.onclick = function () {
		disclaimerModal.style.display = "none";
		document.body.style.overflow = "auto";
	}
}