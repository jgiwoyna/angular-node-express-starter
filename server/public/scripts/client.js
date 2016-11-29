var app = angular.module('app', []);

app.controller('firstController', function() {
  console.log('firstController up and running');
  var self = this;
  self.message = "Welcome!"
});
