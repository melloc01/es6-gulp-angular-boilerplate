var angular = require('angular');
var bulk = require('bulk-require');

angular.module('signin', []);
bulk(__dirname, [ '*.js' ]);
