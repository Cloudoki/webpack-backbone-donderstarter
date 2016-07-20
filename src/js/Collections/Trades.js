var BaseCollection = require('./BaseCollection');
var Trade = require('../Models/Trade');

var Trades = BaseCollection.extend({

	collectionType: 'trades',
	model: Trade,

	initialize: function() {

		this.on('add', function(model){model.postParse()})
	},

	parse: function(response) {
		this.total = response.total; // TODO: replace for api total length ?
		return response.trades;
	},

	url: function() {
		return 'js/Dummy/collections/projects';
	}
});

module.exports = Trades;