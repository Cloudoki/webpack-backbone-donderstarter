// Get Handlebars instance
var Handlebars = require('handlebars-template-loader/runtime');

Handlebars.registerHelper('upper', function(text) {
  return text.toUpperCase();
});

Handlebars.registerHelper('lower', function(text) {
  return text.toLowerCase();
});