var BaseModel = require('./BaseModel');

var Swap = BaseModel.extend({

	modelType: 'swap',

	initialize: function(options) {
		
		this.once('change', this.postParse.bind(this));
	},

	postParse: function() {

	},

	url: function() {
		return 'js/Dummy/swap/'+this.id;
	}
});

module.exports = Swap;