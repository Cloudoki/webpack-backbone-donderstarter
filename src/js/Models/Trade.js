var BaseModel = require('./BaseModel');

var Trade = BaseModel.extend({

	modelType: 'trade',

	initialize: function(options) {
		
		this.once('change', this.postParse.bind(this));
	},

	postParse: function() {

	},

	url: function() {
		return 'js/Dummy/trade/'+this.id;
	}
});

module.exports = Trade;