//require("modules/dashboard.scss");
var BaseView = require('./BaseView');
var menuTemplate = require('menu.hbs');

var MenuView = BaseView.extend({
  
  name: 'menu',
  events: {
    'click .menu-item' : 'menuClick',
    'click .menu-logout' : 'logout'
  },  

  initialize: function(options) {
  
  },  

  render: function()
  {
   this.$el.html(menuTemplate);

    return this;
  },

  menuClick: function(e) {
    Application.Router.navigate('#' + $(e.currentTarget).find('a').data('nav'), true);
  },  

  menuSelect: function(name) {
    this.$el.find('li').removeClass('active');
    this.$el.find('[data-nav=' + name +']').parent().addClass('active');
  },

  logout: function(e) {
    Application.Session.logout();
  }
});

module.exports = MenuView;