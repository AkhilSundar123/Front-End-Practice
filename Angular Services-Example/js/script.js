var app = angular.module("myModule",[])

app.controller("myController" , function($scope, service) {
			$scope.transfromString = function(input) {
				$scope.output = service.processString(input);
			}
		});