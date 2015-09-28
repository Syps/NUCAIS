(function() {

  var app = angular.module('app');

  console.log("homeController");

  // create new controller HomeController w/ homeController constructor
  app.controller('HomeController', [
    '$scope',
    '$http',
    function($scope, $http) {
      console.log("compiled");
      // dev:: welcome message
      $scope.welcome = "Welcome home";

      $scope.menuItems = ['About', 'FAQ', 'Team',
        'Sponsors', 'Partners', 'Location'];

    }
  ]);

}());
