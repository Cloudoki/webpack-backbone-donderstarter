var BaseCollection = require('./BaseCollection');
var Collection = require('../Models/Collection');

var Collections = BaseCollection.extend({

	collectionType: 'collections',
	model: Collection,

	initialize: function() {

		this.on('add', function(model){model.postParse()})
	},

	parse: function(response) {
		this.total = response.total; // TODO: replace for api total length ?
		return response.collections;
	},

	url: function() {
		return 'js/Dummy/collections/collections';
	}
});

module.exports = Collections;