var User = require("./User");

var Me = User.extend({

	modelType: "me",

	initialize: function(options) {

		this.once('change', this.activate);
	},

	url: function() {

		return 'js/Dummy/me';
		// return Application.Api + '/me';
	},

	activate: function() {
		this.trigger('activated');
	}
});

module.exports = Me;