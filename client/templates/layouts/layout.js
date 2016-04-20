const $browser = require('/node_modules/jquery.browser/dist/jquery.browser.js');

Template.layout.rendered = function() {
	new WOW().init();

	// Detect if Firefox
	if ($browser.desktop) {
		// Calibrate the position of navbar spans
		$('ul.dropdown-menu li a span').addClass('firefox');
	}

	// Cart animation
	
};