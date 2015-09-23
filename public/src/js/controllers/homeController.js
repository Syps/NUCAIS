(function() {

  var app = angular.module('app');

  /*
   * Home (Main) Controller
   */
  /*var homeController = function($scope, $http) {
    // dev:: welcome message
    $scope.welcome = "Welcome home";
  };
  // minifcation-safe injection
  HomeController.$inject = ['$scope', '$http'];
*/
  // create new controller HomeController w/ homeController constructor
  app.controller('HomeController', [
    '$scope',
    '$http',
    function($scope, $http) {
      // dev:: welcome message
      $scope.welcome = "Welcome home";
    }
  ]);

}());
