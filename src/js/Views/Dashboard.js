require("modules/dashboard.scss");
var BaseView = require('./BaseView');
var dashboardTemplate = require('dashboard.hbs');


var DashboardView = BaseView.extend({
  
  name: 'dashboard',
  events: {}, 

  initialize: function(options) {
  
  },  

  render: function()
  {
    var suggestions = [
      { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: '2016-04-05T12:00:00+01:00' }
    ];

    var notifications = [
      { message: 'You have one new message to read.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'You have one new message to read.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'You have one new message to read.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'You have one new message to read.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'You have one new message to read.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'You have one new message to read.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'You have one new message to read.', date: '2016-04-05T12:00:00+01:00' },
      { message: 'You have one new message to read.', date: '2016-04-05T12:00:00+01:00' }
    ];

    $('#main .content').html(this.$el.html(dashboardTemplate({notifications: notifications, suggestions: suggestions})));
  }
});

module.exports = DashboardView;