(function() {

var app = angular.module('app');

/**
 * ng directive for hamburger menu (visible on small screen)
 */
app.directive('menuOptions', function() {
  return {
      scope: false,
      restrict: 'AE',
      replace: true,
      template:
        "<div class=\"nav-list-container\">" +
        "<ul class=\"nav-list\"><li class=\"menu-item\" " +
        "ng-repeat=\"item in menuItems\">{{item}}</li></ul>" +
        "</div>"
      };
});

}());
