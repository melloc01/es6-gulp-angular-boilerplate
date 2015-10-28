var angular = require('angular');
var bulk = require('bulk-require');

angular.module('partials', 

	[
	
	]
	
);

bulk(__dirname, [ '*.js' ]);