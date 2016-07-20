var BaseModel = Backbone.Model.extend({

	initialize: function(options) {

		$.extend(this, options);
		this.on('change', this.postParse.bind(this));
	},

	url: function() {

		var url = Application.Api;

		if (this.parentModel)
			url = url + this.parentModel.modelType + '/' + this.parentModel.id + '/';

		return url + this.modelType + (this.id? '/' + this.id: '') + (this.parameters? '?'+$.param(this.parameters): '');			
	},

	parse: function(response) {
		
		return response[this.modelType] || response;
	},

	postParse: function() {},

	sync: function (method, model, options)
	{
		this.endpoint = (options.endpoint)? options.endpoint: '';
		this.parameters = (options.parameters)? options.parameters: {};
		
		return Backbone.sync(method, model, options);
	}
});

module.exports = BaseModel;