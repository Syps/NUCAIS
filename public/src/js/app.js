
var app = angular.module('app', ['ngRoute']);

// configure angular routes (minifaction-safe style)
app.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider

      .when('/', {
        templateUrl: '/public/views/partials/home',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });

      // enable html5Mode to remove # from urls
      $locationProvider.html5Mode(true);

}]);
