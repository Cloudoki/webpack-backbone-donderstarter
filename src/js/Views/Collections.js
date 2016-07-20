require("modules/collections.scss");
var BaseView = require('./BaseView');
var collectionsTemplate = require('collections.hbs');
var collectionItemTemplate = require('collections-item.hbs');

var CollectionsView = BaseView.extend({

  name: 'collections',
	events: {
    'click [data-action=goto-collection]' : 'gotoCollection',
    'click [data-action=remove-collection]' : 'removeCollection',
    'click [data-action=add-collection]' : 'addCollection',
    'click [data-action=suggest-collection]' : 'suggestCollection'
  },	

	initialize: function(options) {

    this.collections = Application.Session.User.collections;
    this.collections.once('sync', this.fillCollections.bind(this));
	},

  render: function()
  {
  	$('#main .content').html(this.$el.html(collectionsTemplate));

    this.collections.fetch();
  },

  fillCollections: function() {
    $('.collections').append(collectionItemTemplate({collections :this.collections.models}));
  },

  gotoCollection: function(e) {
    console.log('gotoCollection', $(e.currentTarget).closest('.details').data('id'));
  },

  removeCollection: function(e) {
    console.log('removeCollection', $(e.currentTarget).closest('.details').data('id'));
  },

  addCollection: function(e) {
    console.log('addCollection');
  },

  suggestCollection: function(e) {
    e.preventDefault();
    console.log('suggestCollection');
  }
});

module.exports = CollectionsView;