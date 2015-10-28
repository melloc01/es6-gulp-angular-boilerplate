var angular = require('angular');
var m 	= angular.module('signin');	
var Controller = require('../_base/base.controller.js');

/*@ngInject*/
class SigninCtrl extends Controller{

  	constructor($scope) {

		super();
		this.val = 0;
		this.registerWatchers($scope);

	}

	add() {

		this.val++;
	
	}

	registerWatchers($scope) {

		$scope.$watch('ctrl.val', (cur,prev) => {

			if (cur == 5)
				this.val = 0;

		});
			
	}

}

m.controller('SigninCtrl', SigninCtrl);