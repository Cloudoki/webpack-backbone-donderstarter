var BaseView = require('./BaseView');
var MenuView = require('./Menu');
var footerTemplate = require('footer.hbs');
var mainTemplate = require('main.hbs');

// Include all helpers
require("helpers");

var RootView = BaseView.extend({

	events: {},	

	initialize: function(options) {
	  console.log('RootView::initialize');

	  MenuView = new MenuView();
	},	

  render: function()
  {
  	console.log('RootView::renderview->', this.view.name);

  	if (typeof (this.view) === 'undefined')
			return;

		this.renderMain();
		this.renderTopNav(this.view.nav);
		this.renderFooter();

		$('#main .content')
			.html(this.view.render())

			// Scroll to top
			window.scrollTo(0, 0);
  },

  setView: function (view)
	{
		if (this.view)
			this.view.remove();

		this.view = view;
		this.render();

		this.view.trigger('view:rendered');
	},

	renderTopNav: function(nav) {
		// TODO: add function code here
		if ($('#main .menu').is(':empty'))
			$('#main .menu').html(MenuView.render().el);

		MenuView.menuSelect(this.view.name);
	},

	renderFooter: function(nav) {
		// TODO: add function code here
		$('#main .footer').html(footerTemplate);
	},

	renderMain: function(nav) {
		if (!$('#main-content').children().length)
			$('#main-content').html(mainTemplate);
	}
});

module.exports = RootView;