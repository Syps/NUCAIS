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
        'Sponsors', 'Contact', 'Last'];

        $scope.nav = {};
        $scope.nav.img = "/public/assets/img/nav-logo.png";

        $scope.jumpTop = function() {
          var offset = 30;
          var duration = 2000;
          var target = angular.element(document.getElementById('intro'));
          $document.scrollToElement(target, offset, duration);

        }
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
  };

        $scope.intro = {};
        $scope.intro.img = "/public/assets/img/intro-logo.png";

      $scope.about = {};
      $scope.about.title = "About";
      $scope.about.summary1 = "Northeastern University’s Collegiate Alternative Investments Summit (NUCAIS) is a student-run conference that offers students from universities across the United States an opportunity to engage in topics that pertain to the private equity, venture capital, and hedge fund industries.";
      $scope.about.summary2 = "With a focus on educational enrichment and relationship development, NUCAIS aims to better equip future business leaders with both enhanced knowledge of alternative investments and a robust network of top industry professionals.";

      $scope.speakers = [
        {
          name: "Adam Berger",
          img: "/public/assets/img/speakers/adam-berger-150x150.png",
          topic: "Stub",
          year: "2014"
        },

        {
          name: "Akram Yosri",
          img: "/public/assets/img/speakers/AkramYosri.jpg",
          topic: "Stub",
          year: "2014"
        },
        {
          name: "Anne Benware",
          img: "/public/assets/img/speakers/BenwareAnne.jpg",
          topic: "Stub",
          year: "2014"
        },
        {
          name: "Jeff McCarthy",
          img: "/public/assets/img/speakers/jeffmccarthy.jpg",
          topic: "Stub",
          year: "2014"
        },
        {
          name: "Keith Black",
          img: "/public/assets/img/speakers/keith-black.jpg",
          topic: "Stub",
          year: "2014"
        },
        {
          name: "newgraham",
          img: "/public/assets/img/speakers/newgraham.jpg",
          topic: "Stub",
          year: "2014"
        },
        {
          name: "Pagliuca",
          img: "/public/assets/img/speakers/pagliuca.jpg",
          topic: "Stub",
          year: "2014"
        },
        {
          name: "Rick Lake",
          img: "/public/assets/img/speakers/ricklake.jpg",
          topic: "Stub",
          year: "2014"
        },
        {
          name: "Samuel Belk",
          img: "/public/assets/img/speakers/samuel-belk-150x150.png",
          topic: "Stub",
          year: "2014"
        }
        ];

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
            img: "/public/assets/img/team/rohanvenkatesh.jpg",
            linkedin: "https://www.linkedin.com/in/rohanvenkatesh"
          },
          {
            name: "Daniel Arvidsson",
            img: "/public/assets/img/team/danielarvidson.jpg",
            linkedin: "https://www.linkedin.com/pub/daniel-arvidsson/91/3ba/81b"
          },
          {
            name: "Harrison Balder",
            img: "/public/assets/img/team/harrsionbalder.jpg",
            linkedin: "https://www.linkedin.com/pub/harrison-balder/b0/890/b10"
          },
          {
            name: "Jake Fulton",
            img: "/public/assets/img/team/jakefulton.jpg",
            linkedin: "https://www.linkedin.com/pub/jake-fulton/43/a29/641"
          },
          {
            name: "Michael Counihan",
            img: "/public/assets/img/team/michaelcounihan.jpg",
            linkedin: "https://www.linkedin.com/in/michaelbcounihan"
          },
          {
            name: "Nick Sypteras",
            img: "/public/assets/img/team/nicksypteras.jpg",
            linkedin: "https://www.linkedin.com/pub/nicholas-sypteras/69/4a9/a2"
          },
          {
            name: "Omar Fahmy",
            img: "/public/assets/img/team/omarfahmy.jpg",
            linkedin: "https://www.linkedin.com/in/omarfahmy"
          },
          {
            name: "Sam Marley",
            img: "/public/assets/img/team/sammarley.jpg",
            linkedin: "https://www.linkedin.com/pub/sam-marley/a4/a51/275"
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
          /*{
            name: "Northeastern Alumni Development Association",
            img: imgRoot + "nuada-color.png"
          },*/
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
        $scope.animate = {
          about: false,
          speakers: false,
          faq: false,
          team: false,
          sponsors: false,
          contact: false
        };

        $scope.anAbout = false;
        $scope.anAboutPoints = false;
        $scope.anSpeakers = false;
        $scope.anSpeakerPics = false;
        $scope.anFaq = false;
        $scope.anTeam = false;
        $scope.anTeamPics = false;
        $scope.anSponsors = false;
        $scope.anContact = false;

        var aboutEl = angular.element(document.getElementById("about"));
        var speakersEl = angular.element(document.getElementById("speakers"));
        var faqEl = angular.element(document.getElementById("faq"));
        var teamEl = angular.element(document.getElementById("team"));
        var sponsorsEl = angular.element(document.getElementById("sponsors"));
        var contactEl = angular.element(document.getElementById("contact"));

        angular.element($window).bind("scroll", function() {

           if (this.pageYOffset > aboutEl.prop('offsetTop') - 100) {
               $scope.isScrolling = true;
           } else {
               $scope.isScrolling = false;
           }

           if (this.pageYOffset > aboutEl.prop('offsetTop') - 1000) {
             console.log("reached about");
              $scope.anAbout = true;
           }
           if (this.pageYOffset > aboutEl.prop('offsetTop') - 900) {
             console.log("reached about");
              $scope.anAboutPoints = true;
           }
           if (this.pageYOffset > speakersEl.prop('offsetTop') - 1000) {
             console.log("reached speakers");
             $scope.anSpeakers = true;
           }

           if (this.pageYOffset > speakersEl.prop('offsetTop') - 750) {
             console.log("reached speakers");
             $scope.anSpeakerPics = true;
           }
           if (this.pageYOffset > faqEl.prop('offsetTop') - 1000) {
             console.log("reached faq");
             $scope.anFaq = true;
           }
           if (this.pageYOffset > teamEl.prop('offsetTop')  - 1000) {
             $scope.anTeam = true;
           }
           if (this.pageYOffset > teamEl.prop('offsetTop')  - 750) {
             $scope.anTeamPics = true;
           }
           if (this.pageYOffset > sponsorsEl.prop('offsetTop') - 1000) {
             $scope.anSponsors = true;
           }

           $scope.$apply();
           console.log(this.pageYOffset);
       });

     }




        /* end controller*/
  ]);

}());
