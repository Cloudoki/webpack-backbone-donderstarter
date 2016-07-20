var AppRouter = Backbone.Router.extend({
  routes : {
    '*actions' : 'home'
  },

  home: function() {
    require.ensure([], function() {
      var DashboardView = require('./views/Dashboard');
      var view = new DashboardView({data: 'data goes here'});
      Application.RootView.setView(view);
    });
  }
});

module.exports = AppRouter;