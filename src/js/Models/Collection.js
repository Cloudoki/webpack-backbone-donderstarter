var BaseModel = require('./BaseModel');
var Trades = require('../Collections/Trades');
var Swaps = require('../Collections/Swaps');

var Collection = BaseModel.extend({

	modelType: 'collection',

	initialize: function(options) {
		
		this.trades = new Trades(null, {parentModel: this});
		this.swaps = new Swaps(null, {parentModel: this});

		this.once('change', this.postParse.bind(this));
	},

	postParse: function() {

	},

	url: function() {
		return 'js/Dummy/collection/'+this.id;
	}
});

module.exports = Collection;