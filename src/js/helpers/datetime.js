// Get Handlebars instance
var Handlebars = require('handlebars-template-loader/runtime');
var moment = require('moment');

Handlebars.registerHelper('moment', function(value, format) {
	try {
		return moment(value).format(format);
	} catch (e) {
		console.log('error in handlebars helper:', e);
	}
});