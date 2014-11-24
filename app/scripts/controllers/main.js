'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test1App
 */
angular.module('test1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [];
	
	$scope.addTodo = function(){
		
		$scope.awesomeThings.push($scope.todo);
		$scope.todo = "";
		
	}
	
	$scope.removeTodo = function($index) {
		
		$scope.awesomeThings.splice($index,1);
		
	}
	
  });
