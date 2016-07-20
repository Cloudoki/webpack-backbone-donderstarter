require("modules/collections.scss");
var BaseView = require('./BaseView');
var collectionTemplate = require('collection.hbs');

var CollectionView = BaseView.extend({

  name: 'collection',
	events: {},	

	initialize: function(options) {
    $.extend(this, options);

    this.collection = Application.Session.User.collection;
    this.collection.once('sync', this.fillCollection.bind(this));
	},

  render: function()
  {
    this.collection.fetch();

    return this;
  },

  fillCollection: function() {
    $('#main .content').html(this.$el.html(collectionTemplate({collection: this.collection})));
    console.log({collection: this.collection});
    //$('.collections').append(collectionItemTemplate({collections :this.collections.models}));
  }
});

module.exports = CollectionView;