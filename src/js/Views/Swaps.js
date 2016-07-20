require("modules/swaps.scss");
var BaseView = require('./BaseView');
var swapsTemplate = require('swaps.hbs');
var userTemplate = require('user.hbs');

var SwapsView = BaseView.extend({

  name: 'swaps',
	events: {},	

	initialize: function(options) {
	},	

  render: function()
  {
  	var user = {
  	  name: 'Nuno Jorge',
  	  email: 'username@domainname.com',
  	  phone: '+351 123 456 789'
  	}

  	$('#main .content').html(this.$el.html(swapsTemplate));
  	this.$el.find('.user').html(userTemplate({user: user}));
  }
});

module.exports = SwapsView;