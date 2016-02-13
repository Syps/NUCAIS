(function() {

  var app = angular.module('app');
  //
  // $scope.map = new google.maps.Map(document.getElementById('map'), init
  //
  // function initMap() {
  //   map = , {
  //     center: {lat: -34.397, lng: 150.644},
  //     zoom: 8
  //   });
  // }
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

      /* Google Maps */
    var mapOptions = {
      zoom: 17,
      center: new google.maps.LatLng(42.337358, -71.091847),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    $scope.marker = new google.maps.Marker({
      position: {lat: 42.337358, lng: -71.091847},
      title: 'Hello World!'
    });


    $scope.registrationLink = "https://commerce.cashnet.com/SFDMSB2016";

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    $scope.marker.setMap($scope.map);


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
      $scope.about.summary1 = "CAIS is a student-run conference designed to create a knowledge forum with some of the brightest minds in the alternative investments space.";
      $scope.about.summary2 = "CAIS bridges the gap between classroom education and professional application with respect to Hedge Funds, Private Equity, Venture Capital, and Real Assets.";

      $scope.speakers = [
        {
          name: "Bruce Martin",
          img: "/public/assets/img/speakers/headshots/BruceMartin.jpg",
          topic: "",
          year: "",
          title: "",
          company: ""
        },
        {
          name: "Christina Qi",
          img: "/public/assets/img/speakers/headshots/ChristinaQi.png",
          topic: "",
          year: "",
          title: "",
          company: ""
        },
        {
          name: "James Goodman",
          img: "/public/assets/img/speakers/headshots/JamesGoodman.jpg",
          topic: "",
          year: "",
          title: "",
          company: ""
        },
        {
          name: "Karthik Krishnan",
          img: "/public/assets/img/speakers/headshots/KarthikKrishnan.jpg",
          topic: "",
          year: "",
          title: "",
          company: ""
        },
        {
          name: "Michael Gries",
          img: "/public/assets/img/speakers/headshots/MichaelGries.png",
          topic: "",
          year: "",
          title: "",
          company: ""
        },
        {
          name: "Nicholas Sammut",
          img: "/public/assets/img/speakers/headshots/NicholasSammut.jpg",
          topic: "",
          year: "",
          title: "",
          company: ""
        },
        {
          name: "Ryan Cotton",
          img: "/public/assets/img/speakers/headshots/RyanCotton.jpg",
          topic: "",
          year: "",
          title: "",
          company: ""
        },
        {
          name: "Sam Klar",
          img: "/public/assets/img/speakers/headshots/SamKlar.jpg",
          topic: "",
          year: "",
          title: "",
          company: ""
        },
        {
          name: "Spencer Murray",
          img: "/public/assets/img/speakers/headshots/SpencerMurray.jpg",
          topic: "",
          year: "",
          title: "",
          company: ""
        },
        {
          name: "Tom Andrews",
          img: "/public/assets/img/speakers/headshots/TomAndrews.jpeg",
          topic: "",
          year: "",
          title: "",
          company: ""
        }
        ];

        $scope.faqs = [
          {
            question: "Who can attend?",
            answer: "You don't have to study finance or even be a Northeastern student to attend. CAIS welcomes anyone interested in learning more about alternative investments, regardless of age or discipline."
          },
          {
            question: "When is it?",
            answer: "April 1-2, 2016"
          },
          {
            question: "Where is it?",
            answer: "20 West Village F"
          },
          {
            question: "What's the cost?",
            answer: "Early bird registration is $20 until March 18, after which time the registration fee is $30. This grants you access to both the networking night and the speaker conference the following day as well as breakfast and lunch the day of the speaker conference."
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
            url: $sce.trustAsResourceUrl("https://www.youtube.com/embed/c6OCuycMmRg"),
            description: ""
          },
          {
            url: $sce.trustAsResourceUrl("https://www.youtube.com/embed/byoSuIUhjsg"),
            description: "Pagliuca"
          },
          {
            url: $sce.trustAsResourceUrl("https://www.youtube.com/embed/uvFvArULZKY"),
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
            name: "Amy Zhou",
            img: "/public/assets/img/team/amyzhou.jpg",
            linkedin: "https://www.linkedin.com/in/amywzhou"
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
            name: "Mark Garbin",
            img: "/public/assets/img/team/markgarbin.jpg",
            linkedin: "https://www.linkedin.com/in/markkgarbin"
          },
          {
            name: "Lauren Tawfik",
            img: "/public/assets/img/team/laurentawfik.jpg",
            linkedin: "https://www.linkedin.com/in/lauren-tawfik-a93a48111?authType=name&authToken=jiE_&trk=prof-sb-browse_map-name"
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
              $scope.anAbout = true;
           }
           if (this.pageYOffset > aboutEl.prop('offsetTop') - 900) {
              $scope.anAboutPoints = true;
           }
           if (this.pageYOffset > speakersEl.prop('offsetTop') - 1000) {
             $scope.anSpeakers = true;
           }
           if (this.pageYOffset > speakersEl.prop('offsetTop') - 750) {
             $scope.anSpeakerPics = true;
           }
           if (this.pageYOffset > faqEl.prop('offsetTop') - 1000) {
             $scope.anFaq = true;
           }
           if (this.pageYOffset > faqEl.prop('offsetTop') - 750) {
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
