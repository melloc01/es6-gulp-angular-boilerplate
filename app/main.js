var angular = require('angular');
var bulk = require('bulk-require');
var modules = bulk(__dirname, [ 'src/**/module.js' ]);


var requires = Object.keys(modules.src);

require('./templates.js');
requires.push('templates');


angular.module('app', requires);

class Animal {

	constructor(type) {

		console.log(type);
	}


}

new Animal('dog');