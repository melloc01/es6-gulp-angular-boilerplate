var angular = require('angular');
var bulk = require('bulk-require');

angular.module('_base', []);
bulk(__dirname, [ '*.js' ]);
