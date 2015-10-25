(function() {

  var app = angular.module('app');

  console.log("homeController");

  // create new controller HomeController w/ homeController constructor
  app.controller('HomeController', [
    '$scope',
    '$http',
    '$window',
    '$document',
    function($scope, $http, $window, $document) {
      console.log("compiled");
      // dev:: welcome message
      $scope.welcome = "Welcome home";

      $scope.menuItems = ['About', 'Speakers', 'FAQ', 'Team',
        'Sponsors', 'Partners', 'Location'];

        $scope.nav = {};
        $scope.nav.img = "/public/assets/img/nav-logo.png";
        $scope.scrollTo = function(section) {

          // bring up nav dropdown
          $scope.toggleBurger();
          var dropDown = document.getElementById('drop-menu');
          dropDown.style.height = 0;
          // $scope.$apply();

          var elName = section.toLowerCase();

          var offset = 30;
          var duration = 2000;
    var target = angular.element(document.getElementById(elName));
    $document.scrollToElement(target, offset, duration);
        }

        $scope.intro = {};
        $scope.intro.img = "/public/assets/img/intro-logo.png";

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

        var imgRoot = "/public/assets/img/sponsors/";

        $scope.sponsors = [
          {
            name: "Alt Assets",
            img: imgRoot + "altassets.jpg"
          },
          {
            name: "D'Amore-McKim School of Business",
            img: imgRoot + "dmsob-logo-color.png"
          },
          {
            name: "John Hancock",
            img: imgRoot + "john-hancock-color.png"
          },

          {
            name: "Lake Partners",
            img: imgRoot + "lake-partners.jpg"
          },
          {
            name: "LSE SU Alternative Investments Conference",
            img: imgRoot + "lse-aic-color.png"
          },
          {
            name: "MFS",
            img: imgRoot + "mfs-color.png"
          },
          {
            name: "Northeastern Alumni Development Association",
            img: imgRoot + "nuada-color.png"
          },
          {
            name: "Northeastern Finance and Investment Club",
            img: imgRoot + "nufic-color.png"
          },

          {
            name: "State Street",
            img: imgRoot + "statest-color.png"
          },
          {
            name: "Wall Street Oasis",
            img: imgRoot + "WSO-logo.jpg"
          }
        ];

        // scroll logic

        // set initial
        $scope.scrollPosition = 0;
        angular.element($window).bind("scroll", function() {

           if (this.pageYOffset > $scope.scrollPosition) {
               $scope.isScrolling = true;
           } else {
               $scope.isScrolling = false;
           }
           $scope.$apply();
           console.log(this.pageYOffset);
       });

        /* end controller*/
    }
  ]);

}());
