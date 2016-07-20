require("css/modules/trades.scss");
var BaseView = require('./BaseView');
var tradesTemplate = require('trades.hbs');
var userTemplate = require('user.hbs');


var TradesView = BaseView.extend({

  name: 'trades',
	events: {
    'click [data-action=search]': 'search',
    'click [data-action=add]': 'add',
    'click [data-action=remove]': 'remove',
    'click .user-name' : 'add'
  },	

	initialize: function(options) {
	},	

  render: function()
  {
  	var user = {
  	  name: 'Nuno Jorge',
  	  email: 'username@domainname.com',
  	  phone: '+351 123 456 789'
  	}

  	$('#main .content').html(this.$el.html(tradesTemplate));
  	this.$el.find('.user').html(userTemplate({user: user}));
  },

  search: function() {
    console.log('TODO:// add code for search here ..');
  },

  add: function() {
    console.log('TODO:// add code for add here ..');
  },

  remove: function() {
    console.log('TODO:// add code for remove here ..');
  }
});

module.exports = TradesView;