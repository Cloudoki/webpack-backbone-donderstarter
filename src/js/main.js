require("css/manifest");
var app = require('./Application');


$(document).ready(function() {     
  Application = app;
  Application.init();
});