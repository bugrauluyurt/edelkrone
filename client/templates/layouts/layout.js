const $browser = require('/node_modules/jquery.browser/dist/jquery.browser.js');


Template.layout.rendered = function() {
	new WOW().init();

	// Detect if Firefox
	if ($browser.mozilla) {
		// Calibrate the position of navbar spans
		$('ul.dropdown-menu li a span').addClass('firefox');
	}

	// Hide the close button and the search-bar
	$('.search-close-button').hide();
	$('.search-bar').hide();
	$('.shopping-cart-section').hide();
	$('.shopping-cart').hover(
		function(){
			$('.shopping-cart-section').show();
		}
	);
	$('.shopping-cart-section').hover(
		function(){
			$('.shopping-cart-section').show();
		},
		function(){
			$('.shopping-cart-section').hide();
		}
	);

	// Detect window width
	if ($(window).width() <= 768 && $(window).width() > 425 || ($browser.ipad && $(window).width() <= 769) ) {
		$('.search-bar').addClass('search-bar-absolute');
	}
	if ($(window).width() <= 768 || $browser.iphone || $browser.ipad) {
		$('.shopping-cart-section').remove();
	}
};

Template.layout.events({
	// Search button click
	'click .search-button': function(){
		$('.search-button').hide();
		$('.search-close-button').show();
		$('.search-bar').show();
	},

	// Close button click
	'click .search-close-button': function(){
		$('.search-close-button').hide();
		$('.search-button').show();
		$('.search-bar').hide();
	}
});