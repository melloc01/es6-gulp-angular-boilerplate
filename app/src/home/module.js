var angular = require('angular');
var bulk = require('bulk-require');

angular.module('home', []);
bulk(__dirname, [ '*.js' ]);
