(function() {

  var app = angular.module('app');

  console.log("homeController");

  // create new controller HomeController w/ homeController constructor
  app.controller('HomeController', [
    '$scope',
    '$http',
    '$sce',
    '$window',
    '$document',
    function($scope, $http, $sce, $window, $document) {
      console.log("compiled");
      // dev:: welcome message
      $scope.welcome = "Welcome home";

      $scope.menuItems = ['About', 'Speakers', 'FAQ',
      'Selected Presentations', 'Management Committee',
      'Advisory Board', /*'Sponsors',*/ 'Contact'];

        $scope.nav = {};
        $scope.nav.img = "/public/assets/img/nav-logo.png";

        $scope.jump = function(section) {
          var offset = 30;
          var duration = 2000;
          var target = angular.element(document.getElementById(section));
          $document.scrollToElement(target, offset, duration);
        };

        $scope.scrollTo = function(section) {

          // bring up nav dropdown
          $scope.toggleBurger();
          var dropDown = document.getElementById('drop-menu');
          dropDown.style.height = 0;
          // $scope.$apply();

          var elName = section.toLowerCase();

          switch (elName) {
            case 'management committee':
              elName = 'team';
              break;
            case 'selected presentations':
              elName = 'presentations';
              break;
            case 'advisory board':
              elName = 'advisory-board';
              break;
          }

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
          topic: "Asset Allocation",
          year: "2014",
          title: "VP & Asset Allocation Strategist",
          company: "Wellington Management"
        },

        {
          name: "Akram Yosri",
          img: "/public/assets/img/speakers/AkramYosri.jpg",
          topic: "Leapthrough Investing in Frontier Markets",
          year: "2015",
          title: "Managing Partner",
          company: "3i Capital Group"
        },
        {
          name: "Jeff McCarthy",
          img: "/public/assets/img/speakers/jeff-mccarthy.jpg",
          topic: "The Venture Capital Industry",
          year: "2015",
          title: "Partner",
          company: "North Bridge Venture Partners"
        },
        {
          name: "Keith Black",
          img: "/public/assets/img/speakers/keith-black.jpg",
          topic: "Harvard, Yale and Investments: A Post-Crisis View",
          year: "2015",
          title: "Managing Director of Curriculum and Exams",
          company: "CAIA Association"
        },
        {
          name: "Graham Brooks",
          img: "/public/assets/img/speakers/GrahamBrooks.jpg",
          topic: "How to get a Job in Venture Capital",
          year: "2015",
          title: "Partner",
          company: ".406 Ventures"
        },
        {
          name: "Stephen Pagliuca",
          img: "/public/assets/img/speakers/pagliuca.jpg",
          topic: "Global Outlook of Private Equity and Venture Capital",
          year: "2014",
          title: "Managing Director/Co-owner",
          company: "Bain Capital/Boston Celtics"
        },
        {
          name: "Rick Lake",
          img: "/public/assets/img/speakers/ricklake.jpg",
          topic: "Alternative Strategies in Mutual Fund Structures",
          year: "2014",
          title: "Chairman",
          company: "Lake Partners"
        },
        {
          name: "Theodore Giletti",
          img: "/public/assets/img/speakers/giletti.png",
          topic: "Investment Opportunities in Emerging Markets",
          year: "2013",
          title: "Director",
          company: "Angola Capital Partners"
        },
        {
          name: "James Swanson",
          img: "/public/assets/img/speakers/jswanson.png",
          topic: "The Sustainable Cycle",
          year: "2013",
          title: "Chief Investment Stategist",
          company: "MFS Investment Management"
        }
        ];

        $scope.faqs = [
          {
            question: "Who can attend?",
            answer: "You don't have to study finance or even be a Northeastern student to attend. CAIS welcomes anyone interested in learning more about alternative investments, regardless of age or discipline."
          },
          {
            question: "Where is it?",
            answer: "30 West Village F"
          },
          {
            question: "What's the cost?",
            answer: "The registration fee is $35. This grants you access to both the networking night and the speaker conference the following day."
          },
          {
            question: "What's the Friday networking event about?",
            answer: "The Friday networking event is a panel-style Q&A session where Northeastern Alumni working in the alternatives space share their experiences, advice, and insights into their respective fields. It's a great opportunity for students to build their Northeastern network, particularly in the competitive alternatives field, and learn how some of our top talent broke into the industry."
          },
          {
            question: "Do I have to attend both the networking night and the conference?",
            answer: "Attendees are free to participate in either event, though we highly recommend coming to both for the best experience!"
          }
        ];

        /*
         * YouTube vids of selected presentations
         */

        $scope.presentations = [
          {
            url: $sce.trustAsResourceUrl("https://www.youtube.com/embed/byoSuIUhjsg"),
            description: ""
          },
          {
            url: $sce.trustAsResourceUrl("https://www.youtube.com/embed/hdFzfXmDoZE"),
            description: ""
          }
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
            img: "/public/assets/img/team/harrisonbalder.jpg",
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

        /*
         * Advisory Board
         */
         $scope.advisoryBoard = [
           {
             name: "Nicholas Lara",
             img: "/public/assets/img/advisory/lara.jpg",
             linkedin: "https://www.linkedin.com/pub/nicholas-f-lara/2a/ba7/47b"
           },
           {
             name: "Stephen Price",
             img: "/public/assets/img/advisory/price.jpg",
             linkedin: "https://www.linkedin.com/in/stephenprice93"
           },
           {
             name: "Rohit Malrani",
             img: "/public/assets/img/advisory/rohit.jpg",
             linkedin: "https://www.linkedin.com/in/rohitmalrani"
           },
           {
             name: "Amanda White",
             img: "/public/assets/img/advisory/white.jpg",
             linkedin: "https://www.linkedin.com/pub/amanda-white/27/86b/20a"
           },
           {
             name: "Jay Hastings",
             img: "/public/assets/img/advisory/hastings.jpg",
             linkedin: "https://www.linkedin.com/pub/jayhastings"
           },
           {
             name: "Michael DeCenzo",
             img: "/public/assets/img/advisory/deCenzo.jpg",
             linkedin: "https://www.linkedin.com/pub/michael-decenzo/13/873/46a"
           },
           {
             name: "Daniel Asulin",
             img: "/public/assets/img/advisory/asulin.jpg",
             linkedin: "https://www.linkedin.com/in/danielgasulin"
           },
           {
             name: "Rohan Venkatesh",
             img: "/public/assets/img/advisory/rohanvenkatesh.jpg",
             linkedin: "https://www.linkedin.com/in/rohanvenkatesh"
           },
           {
             name: "Jake Fulton",
             img: "/public/assets/img/advisory/jakefulton.jpg",
             linkedin: "https://www.linkedin.com/pub/jake-fulton/43/a29/641"
           }
         ];

        var imgRoot = "/public/assets/img/sponsors/";

        $scope.sponsors = [

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
            name: "MFS",
            img: imgRoot + "mfs-color.png"
          },

          {
            name: "Northeastern Alumni Development Association",
            img: imgRoot + "nuada-color.png"
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

        $scope.affiliates = [
          {
            name: "Alt Assets",
            img: imgRoot + "altassets.jpg"
          },
          {
            name: "Northeastern Finance and Investment Club",
            img: imgRoot + "nufic-color.png"
          },
          {
            name: "Northeastern Alumni Development Association",
            img: imgRoot + "nuada-color.png"
          },
          {
            name: "LSE SU Alternative Investments Conference",
            img: imgRoot + "lse-aic-color.png"
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
        $scope.anFaqs = false;
        $scope.anPresentations = false;
        $scope.anVids = false;
        $scope.anTeam = false;
        $scope.anTeamPics = false;
        $scope.anAvisory = false;
        $scope.anAdvisoryPics = false;
        $scope.anSponsors = false;
        $scope.anContact = false;

        var aboutEl = angular.element(document.getElementById("about"));
        var speakersEl = angular.element(document.getElementById("speakers"));
        var faqEl = angular.element(document.getElementById("faq"));
        var teamEl = angular.element(document.getElementById("team"));
        var presentationsEl = angular.element(document.getElementById("presentations"));
        var advisoryEl = angular.element(document.getElementById("advisory-board"));
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
           if (this.pageYOffset > faqEl.prop('offsetTop') - 750) {
             console.log("reached faq");
             $scope.anFaqs = true;
           }
           if (this.pageYOffset > presentationsEl.prop('offsetTop') - 1000) {
             $scope.anPresentations = true;
           }
           if (this.pageYOffset > presentationsEl.prop('offsetTop') - 750) {
             $scope.anVids = true;
           }
           if (this.pageYOffset > teamEl.prop('offsetTop')  - 1000) {
             $scope.anTeam = true;
           }
           if (this.pageYOffset > teamEl.prop('offsetTop')  - 750) {
             $scope.anTeamPics = true;
           }
           if (this.pageYOffset > advisoryEl.prop('offsetTop')  - 1000) {
             $scope.anAdvisory = true;
           }
           if (this.pageYOffset > advisoryEl.prop('offsetTop')  - 750) {
             $scope.anAdvisoryPics = true;
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
