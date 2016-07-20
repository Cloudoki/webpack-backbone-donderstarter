var Collections = require("../Collections/Collections");
var Collection = require("./Collection");
var User = require("./User");

var Me = User.extend({

	modelType: "me",

	initialize: function(options) {

		this.currentCollection = 209225; // temp

		this.once('change', this.activate);

		this.collections = new Collections(null, {parentModel: this});
		this.collection = new Collection({id: this.currentCollection, parentModal: this});
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