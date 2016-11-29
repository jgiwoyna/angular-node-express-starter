var app = angular.module('app', []);

app.controller('firstController', ["$http", function($http) {
  console.log('firstController up and running');
  var key = 'b900e0d5e332753a460a64eaa8de00fd';
  var self = this;

  self.animal = {};

  self.getRandomPet = function(){
    var query = 'http://api.petfinder.com/';
    query += 'pet.getRandom';
    query += '?key=' + key;
    query += '&format=json';
    query += '&output=basic';
    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log('Request: ', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  self.getRandomPet();

  self.message = "Welcome!"
}]);
