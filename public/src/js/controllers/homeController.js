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

      $scope.menuItems = ['About', 'Speakers', 'FAQ', 'Team',
        'Sponsors', 'Partners', 'Location'];

      $scope.about = {};
      $scope.about.title = "About";
      $scope.about.summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo a neque a congue. Praesent eros tellus, condimentum sed nulla a, sollicitudin ultrices orci. Suspendisse arcu turpis, mollis pharetra laoreet et, vulputate eu velit."
    }
  ]);

}());
