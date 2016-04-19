/*
router style, initial configuration template
layoutTemplate will map to a layout template
notFoundTemplate will use a template named 404 or a name of your choice if you chose to change it
loadingTemplate will use a template with loading or a template

*/
Router.configure({
	layoutTemplate: 'layout'
});

// ============================================== routes ========================================================================

//  route one basic
Router.map(function(){
	this.route('/', {
		path: '/',
		template: 'index'
	});
});