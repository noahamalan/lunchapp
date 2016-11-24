// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic' , 'starter.controllers' , 'ngStorage', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.Home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'components/homeComponent/home.html',
        controller:'homeCtrl'
      }
    }
  })

  .state('app.orderfood', {
    url: '/orderFood',
    views: {
      'menuContent': {
        templateUrl: 'components/orderFoodComponent/orderFood.html',
        controller:'orderFoodCtrl'
      }
    }
  })

  .state('app.vieworder', {
    url: '/viewOrder',
    views: {
      'menuContent': {
        templateUrl: 'components/viewOrderComponent/viewOrder.html',
        controller:'viewOrderCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/home');
})

.factory ('StorageService', function ($localStorage) {
  $localStorage = $localStorage.$default({
    things: []
  });
  var _getAll = function () {
    return $localStorage.things;
  };
  var _add = function (thing) {
    $localStorage.things.push(thing);
  }
  var _remove = function (thing) {
    $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
  }
  
  return {
    getAll: _getAll,
    add: _add,
    remove: _remove
  };
})

.factory('orders', function($firebaseArray) {
  console.log("appearing");
  var itemsRef = new Firebase("https://lunchapp-ba061.firebaseio.com/orders");
  return $firebaseArray(itemsRef);
});
