var angular = require('angular');
var Controller = require('../_base/base.controller.js');

/*@ngInject*/
class HeaderCtrl extends Controller{

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

angular.module('partials').controller('HeaderCtrl', HeaderCtrl);