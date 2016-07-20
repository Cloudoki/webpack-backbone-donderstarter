var AppRouter = Backbone.Router.extend({
  routes : {
    'swaps' : 'swaps',
    'collections' : 'collections',
    'collection(/:filter)': 'collection',
    'trades' : 'trades',
    '*actions' : 'home'
  },

  home: function() {
    require.ensure([], function() {
      var DashboardView = require('./views/Dashboard');
      var view = new DashboardView({data: 'data goes here'});
      Application.RootView.setView(view);
    });
  },

  swaps: function() {
    require.ensure([], function() {
      var SwapsView = require('./views/Swaps');
      var view = new SwapsView({data: 'data goes here'});
      Application.RootView.setView(view);
    });
  },

  collections: function() {
    require.ensure([], function() {
      var CollectionsView = require('./views/Collections');
      var view = new CollectionsView({data: 'data goes here'});
      Application.RootView.setView(view);
    });
  },

  collection: function(filter) {
    require.ensure([], function() {
      var CollectionView = require('./views/Collection');
      var view = new CollectionView({filter: filter});
      Application.RootView.setView(view);
    });
  },

  trades: function() {
    require.ensure([], function() {
      var TradesView = require('./views/Trades');
      var view = new TradesView({data: 'data goes here'});
      Application.RootView.setView(view);
    });
  },
});

module.exports = AppRouter;