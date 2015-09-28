(function() {

var app = angular.module('app');

/**
 * ng directive for hamburger menu (visible on small screen)
 */

app.directive('mobileBurger', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template:
        "<div class=\"container\">" +
          "<button class=\"burgerBtn\" ng-click=\"toggleBurger()\">" +
          "<i class=\"fa fa-bars\"></i></button>" +
          "<div class=\"burger-container\" ng-show=\"active\">" +
          "<p>BurgerState activated</p></div>" +
          "</div>",
      link: function($scope, $element, $attrs) {
        $scope.active = false;
        $scope.toggleBurger = function () {
          $scope.active = !$scope.active;
        };
      }
    };
  });

}());
