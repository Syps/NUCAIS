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
      $scope.about.summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo a neque a congue. Praesent eros tellus, condimentum sed nulla a, sollicitudin ultrices orci. Suspendisse arcu turpis, mollis pharetra laoreet et, vulputate eu velit.";

      $scope.speakers = [
        {
          name: "John White",
          img: "/public/assets/img/fish.svg",
          topic: "Renewable Energy",
          year: "2014"
        },

        {
          name: "Howard Yu",
          img: "/public/assets/img/fish.svg",
          topic: "Activist Investing",
          year: "2014"
        }];

        $scope.faqs = [
          {
            question: "What is the answer?",
            answer: "42"
          },
          {
            question: "What is the answer?",
            answer: "42"
          },
          {
            question: "What is the answer?",
            answer: "42"
          },
          {
            question: "What is the answer?",
            answer: "42"
          },
        ];

        $scope.team = [
          {
            name: "Rohan Venkatesh",
            img: "/public/assets/img/fish.svg",
            info: "Senior // Finance"
          },
          {
            name: "Jake Fulton",
            img: "/public/assets/img/fish.svg",
            info: "Senior // Finance, Economics Minor"
          },
          {
            name: "Jake Fulton",
            img: "/public/assets/img/fish.svg",
            info: "Senior // Finance, Economics Minor"
          },
          {
            name: "Jake Fulton",
            img: "/public/assets/img/fish.svg",
            info: "Senior // Finance, Economics Minor"
          }
        ];

    }
  ]);

}());
