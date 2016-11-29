var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/cats', {
      templateUrl: '/views/templates/cats.html',
      controller: 'CatsController',
      controllerAs: 'cats'
    })
    .when('/dogs' ,{
      templateUrl: '/views/templates/dogs.html',
      controller: 'DogsController',
      controllerAs: 'dogs'
    })
    .when('/pigs' ,{
      templateUrl: '/views/templates/pigs.html',
      controller: 'PigsController',
      controllerAs: 'dogs'
    })
    .when('/shelter' ,{
      templateUrl: '/views/templates/shelter.html',
      controller: 'ShelterController',
      controllerAs: 'shelter'
    })
    .otherwise({
      redirectTo: 'CatsController'
    });

}]);


myApp.controller("CatsController", ["$scope", "$http", function($scope, $http) {
  var key = 'bf920036393de118071fd436b3a5f8d0';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=cat';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });

  }

}]);

myApp.controller("DogsController", ["$scope", "$http", function($scope, $http) {
  var key = 'bf920036393de118071fd436b3a5f8d0';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=dog';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });

  }

}]);

myApp.controller("PigsController", ["$scope", "$http", function($scope, $http) {
  var key = 'bf920036393de118071fd436b3a5f8d0';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=pig';
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;

    });

  }

}]);

myApp.controller("ShelterController", ["$scope", "$http", function($scope, $http) {
  var key = 'bf920036393de118071fd436b3a5f8d0';
  var baseURL = 'http://api.petfinder.com/';

  $scope.findShelter = function() {
    var query = baseURL + 'shelter.find';
    query += '?key=' + key;
    query += '&location=55404';
    query += '&output=basic';
    query += '&format=json';


    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.shelter = response.data.petfinder.shelters.shelter;
      console.log(response.data.petfinder.shelters.shelter);

    });

  }
  $scope.findShelter();
}]);
