var BaseCollection = require('./BaseCollection');
var Swap = require('../Models/Swap');

var Swaps = BaseCollection.extend({

	collectionType: 'swaps',
	model: Swap,

	initialize: function() {

		this.on('add', function(model){model.postParse()})
	},

	parse: function(response) {
		this.total = response.total; // TODO: replace for api total length ?
		return response.swaps;
	},

	url: function() {
		return 'js/Dummy/collections/swaps';
	}
});

module.exports = Swaps;