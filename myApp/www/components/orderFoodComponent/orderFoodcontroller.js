angular.module('starter.controllers').controller('orderFoodCtrl', function($scope , StorageService) {
  	$scope.things = StorageService.getAll();
	
	$scope.add = function (newThing) {
		StorageService.add(newThing);
	};

	$scope.remove = function (thing) {
		StorageService.remove(thing);
	};
})