(function() {
  var app = angular.module('app', ['ngRoute', 'ngAnimate', 'duScroll']);

console.log("anything!!!!!");

// configure angular routes (minifaction-safe style)
app.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {

    console.log("app.js loaded");

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

  }
]);

/*app.animation('.slide-toggle', ['$animateCss', function($animateCss) {
  return {

    addClass: function(element, className, doneFn) {
      console.log("addClass\n" + element);
      if (className == 'ng-hide') {
        var animator = $animateCss(element, {
          to: {
            height: '0px',
            opacity: 0
          }
        });
        if (animator) {
          return animator.start().finally(function() {
            element[0].style.height = '';
            doneFn();
          });
        }
      }
      doneFn();
    },
    removeClass: function(element, className, doneFn) {
      if (className == 'ng-hide') {
        console.log("removeClass\n" + element);
        var height = element[0].offsetHeight;
        var animator = $animateCss(element, {
          from: {
            height: '0px',
            opacity: 0
          },
          to: {
            height: height + 'px',
            opacity: 1
          }
        });
        if (animator) {
          return animator.start().finally(doneFn);
        }
      }
      doneFn();
    }
  };
}]);*/

}());
