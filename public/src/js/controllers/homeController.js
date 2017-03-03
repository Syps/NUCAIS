(function() {

  var app = angular.module('app');

  // create new controller HomeController w/ homeController constructor
  app.controller('HomeController', [
    '$scope',
    '$http',
    '$sce',
    '$window',
    '$document',
    function($scope, $http, $sce, $window, $document) {
      $scope.welcome = "Welcome home";

      var LAT_CONF = 42.337358;
      var LONG_CONF = -71.091847;
      var LAT_NWK = 42.337831;
      var LONG_NWK = -71.085189;
      var DATE_CONF = new Date("April 6, 2017 11:00:00");

      /* Google Maps */
      var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(LAT_CONF, LONG_CONF),
        mapTypeId: google.maps.MapTypeId.TERRAIN
      };

      $scope.markerConference = new google.maps.Marker({
        position: {lat: LAT_CONF, lng: LONG_CONF},
        title: 'Speaker Conference'
      });

      $scope.markerNetworking = new google.maps.Marker({
        position: {lat: LAT_NWK, lng: LONG_NWK},
        title: 'Alumni Panel & Networking Night'
      });

      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
      $scope.markerConference.setMap($scope.map);
      $scope.markerNetworking.setMap($scope.map);

      $scope.hideButton = false;

      $scope.getTimeLeftMessage = function() {
        var endDate = DATE_CONF.getTime() / 1000,
            now = Date.now() / 1000,
            message;

        // returns # days between now and the conference date
        var dayDiff = function(d1,d2) {
  	       return (d1 - d2) / (24 * 60 * 60);
        };

        if (dayDiff(endDate, now) > 2) {
  	        message = "More details to come";
  	         $scope.hideButton = true;
  	    }
        else if (endDate > now) {
          message = "Only " + Math.floor((endDate - now) / 3600) + " hours left to register! Additional tickets will be sold at door on Saturday.";
        } else {
          $scope.hideButton = true;
          message = "Online registration has ended. Additional tickets will be sold at door on Saturday.";
        }
        return message;
      };

      $scope.menuItems = ['About', 'Speakers', 'Schedule', 'Location', 'FAQ',
      'Sponsors', 'Press Releases', 'Past Speakers', 'Selected Presentations', 'Management Committee',
      'Advisory Board', 'Contact'];

      $scope.nav = {};
      $scope.nav.img = "/public/assets/img/nav-logo.png";

      // scroll variables
      var scrollOffset = 30;
      var scrollDuration = 2000;

      // the auto scroll function
      $scope.jump = function(section) {
        var target = angular.element(document.getElementById(section));
        $document.scrollToElement(target, scrollOffset, scrollDuration);
      };

      $scope.scrollTo = function(section) {

        // bring up nav dropdown
        $scope.toggleBurger();
        var dropDown = document.getElementById('drop-menu');
        dropDown.style.height = 0;

        var elName = section.toLowerCase().replace(" ", "-");

        var target = angular.element(document.getElementById(elName));
        $document.scrollToElement(target, scrollOffset, scrollDuration);
      };

        $scope.intro = {};
        $scope.intro.img = "/public/assets/img/intro-logo.png";

        $scope.about = {};
        $scope.about.title = "About";
        $scope.about.summary1 = "CAIS is a student-run organization that enables students and professionals to learn from and engage with experts in the alternative investments space. Its mission is to bridge the gap between the traditional educational curriculum and real-life application by creating a knowledge-sharing forum for like-minded students and professionals to interact. CAIS educates students on topics related to private equity, venture capital, hedge funds and real estate.";
        $scope.about.summary2 = "CAIS 2017 will be held on April 7-8, 2017. It will mark the fifth anniversary of the inaugural CAIS event, and will highlight the strides CAIS has made since its inception. It begins with a networking event designed to provide attendees with thoughtful discussion led by a panel of recent Northeastern alumni who are currently working in alternative investments. The main event, held the following day, consists of a series of speakers and panels. Speakers and panelists have had years of extensive experience in the alternative investments space and are considered specialists in their respective fields.";


        $scope.speakers = [
          {
            'category': 'Conference Keynote Speakers',
            'members': [
              {
                name: "Henry Nasella",
                img: "/public/assets/img/speakers/headshots/henrynasella.jpeg",
                topic: "",
                year: "",
                title: "Founding Partner",
                company: "LNK Partners",
                bio: "Henry co-founded LNK in 2005 and has over 25 years of operating experience and 16 years of private equity experience in the consumer/retail sector.",
                bioTwo: "Prior to LNK, Henry was a Venture Partner at Apax Partners, where he was a senior member of the U.S. Consumer and Retail Group. Before Apax, Henry led the successful buyout of Star Markets, a regional supermarket chain, and served as Chairman and CEO of the company until its sale to Sainsbury Plc. Prior to Star Markets, Henry was the first President of Staples (NASDAQ: SPLS), where he built the company from a startup into a global leader in office supply retailing.",
                bioThree: "Henry is currently on the Board of Directors of Au Bon Pain, PVH (NYSE: PVH), and Northeastern University, and has served on the Board of Directors of Ariat, Natural Food Holdings, Staples, Panera Bread (NASDAQ: PNRA), Denny’s (NASDAQ: DENN), Spyder Active Sports, Ulta Beauty (NASDAQ: ULTA), and Blinds-To-Go. Henry received a BS from Northeastern University, where he is currently the Chairman of the Board of Trustees.",
                keynote: true
              },
              {
                name: "Ted English",
                img: "/public/assets/img/speakers/headshots/tedenglish.jpg",
                topic: "",
                year: "",
                title: "Executive Chairman",
                company: "Bob's Discount Furniture",
                bio: "",
                bioTwo: "",
                bioThree: "",
                keynote: true
              }
            ]
        },
        {
          'category': 'Alumni Night Keynote Speakers',
          'members': [
            {
              name: "Fran Janis",
              img: "/public/assets/img/speakers/headshots/franjanis.jpg",
              topic: "",
              year: "",
              title: "Founding Partner",
              company: "Pomona Capital",
              bio: "",
              bioTwo: "",
              bioThree: "",
              keynote: true
            },
            {
              name: "Richard D'Amore",
              img: "/public/assets/img/speakers/headshots/richarddamore.jpg",
              topic: "",
              year: "",
              title: "Founding Partner",
              company: "Northbridge Ventures",
              bio: "",
              bioTwo: "",
              bioThree: "",
              keynote: true
            }
          ]
      },
      {
        'category': 'Sustainability Panel',
        'members': [
          {
            name: "Alan McKim",
            img: "/public/assets/img/speakers/headshots/alanmckim.jpg",
            topic: "",
            year: "",
            title: "Chairman & CEO",
            company: "Clean Harbors Inc.",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false
          },
          {
            name: "Nicholas Sammut",
            img: "/public/assets/img/speakers/headshots/nicholassammut.jpg",
            topic: "",
            year: "",
            title: "Investment Professional",
            company: "Generate Capital",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false
          },
          {
            name: "Derek Lister",
            img: "/public/assets/img/speakers/headshots/dereklister.jpg",
            topic: "",
            year: "",
            title: "Portfolio Analyst",
            company: "Harvard Management Company",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false
          }
        ]
      },
      {
        'category': 'Frontier Markets',
        'members': [
          {
            name: "Asha Mehta",
            img: "/public/assets/img/speakers/headshots/ashamehta.jpg",
            topic: "",
            year: "",
            title: "Portfolio Manager",
            company: "Acadian Management",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false
          }
        ]
      },
      {
        'category': 'Merger Arbitrage',
        'members': [
          {
            name: "Sam Klar",
            img: "/public/assets/img/speakers/headshots/samklar.jpg",
            topic: "",
            year: "",
            title: "Portfolio Manager",
            company: "GMO",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false
          }
        ]
      },
      {
        'category': 'Turnaround Management Panel',
        'members': [
          {
            name: "Jacen Dinoff",
            img: "/public/assets/img/speakers/headshots/jacendinoff.png",
            topic: "",
            year: "",
            title: "Co-Founder & CEO",
            company: "KCP Advisory Group",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false
          },
          {
            name: "Barry Green",
            img: "/public/assets/img/speakers/headshots/barrygreen.jpeg",
            topic: "",
            year: "",
            title: "Founding Partner",
            company: "HunterPoint LLC",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false
          },
          {
            name: "John Loughnane",
            img: "/public/assets/img/speakers/headshots/johnloughanne.JPG",
            topic: "",
            year: "",
            title: "Partner",
            company: "Nutter McClennen & Fish",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false
          }
        ]
      },
      {
        'category': 'Alumni Panel',
        'members': [
          {
            name: "Tarik Emara",
            img: "/public/assets/img/speakers/headshots/tarikemara.jpg",
            topic: "",
            year: "",
            title: "Vice President of Private Equity",
            company: "Citi",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false
          }
        ]
      }
    ];

      $scope.pastSpeakers = [
          {
            name: "Keith Black",
            img: "/public/assets/img/speakers/previous_speakers/keith-black.jpg",
            topic: "Harvard, Yale and Investments: A Post-Crisis View",
            year: "2015",
            title: "Managing Director",
            company: "CAIA Association"
          },
          {
            name: "Stephen Pagliuca",
            img: "/public/assets/img/speakers/previous_speakers/pagliuca.jpg",
            topic: "Global Outlook of Private Equity and Venture Capital",
            year: "2014",
            title: "Managing Director/Co-owner",
            company: "Bain Capital/Boston Celtics"
          },
          {
            name: "James Swanson",
            img: "/public/assets/img/speakers/previous_speakers/jswanson.png",
            topic: "The Sustainable Cycle",
            year: "2013",
            title: "Chief Investment Stategist",
            company: "MFS Investment Management"
          },
          {
            name: "Roger Ibbotson",
            img: "/public/assets/img/speakers/previous_speakers/ribbotson.jpg",
            title: "Chairman and Chief Investment Officer",
            company: "Zebra Capital Management, LLC"
          }
      ];

      $scope.schedule = {};

      $scope.schedule.friday = [
        {
          time: "6 PM",
          activity: "Registration",
          speaker: ""
        },
        {
          time: "6:30 PM",
          activity: "Welcome",
          speaker: "Nicholas Lara - Founder and Chairman of CAIS\nHugh Courtney, Ph.D. - Dean, D'Amore-McKim School of Business"
        },
        {
          time: "6:45 PM",
          activity: "D'Amore-McKim School of Business Alumni Panel\nModerated by Professor Nicole Boyson",
          speaker: "Nicholas Sammut - Investment Professional at Generate Capital\nSpencer Murray - Associate at Berkshire Partners\nEric Rosiello - Associate at Arrowstreet Capital, LP"
        },
        {
          time: "7:35 PM",
          activity: "Keynote",
          speaker: "Bruce Martin - Former Managing Director and Executive Committee Member at Angelo, Gordon & Co."
        },
        {
          time: "8:20 PM",
          activity: "Networking",
          speaker: ""
        }
      ];

      $scope.schedule.saturday = [
        {
          time: "9 AM",
          activity: "Registration & Breakfast",
          speaker: ""
        },
        {
          time: "9:35 AM",
          activity: "Welcome to CAIS 2016",
          speaker: "Jake Fulton - Co-President of CAIS"
        },
        {
          time: "9:50 AM",
          activity: "Real Estate Investing",
          speaker: "Thomas Andrews - Executive Vice President & Regional Market Director at Alexandria Real Estate Equities"
        },
        {
          time: "10:30 AM",
          activity: "Keynote",
          speaker: "Ryan Cotton - Managing Director at Bain Capital"
        },
        {
          time: "11:15 AM",
          activity: "Coffee Break",
          speaker: ""
        },
        {
          time: "11:50 AM",
          activity: "Generating Alpha in the Current Market Environment\nModerated by Professor Nicole Boyson",
          speaker: "Gary Bergstrom, Ph.D. - Founder and Consultant at Acadian Asset Management\nChristina Qi - Partner at Domeyard LP\nSam Klar - Portfolio Manager at GMO\nJason Leinwand - Managing Director at Riverside Risk Advisors"
        },
        {
          time: "12:50 PM",
          activity: "Venture Capital and Angel Investing",
          speaker: "Karthik Krishnan - Associate Professor - Thomas Moore Faculty Fellow at Northeastern University"
        },
        {
          time: "1:15 PM",
          activity: "Lunch",
          speaker: ""
        },
        {
          time: "1:50 PM",
          activity: "The Art of Restructuring",
          speaker: "Michael Gries - Managing Member of CDG Group"
        },
        {
          time: "2:40 PM",
          activity: "Keynote",
          speaker: "James Goodman - President of Gemini Investors"
        },
        {
          time: "3:25 PM",
          activity: "CAIS Closing Remarks",
          speaker: "Rohan Venkatesh - Co-President of CAIS"
        },
        {
          time: "3:35 PM",
          activity: "Networking",
          speaker: ""
        }
      ];

      $scope.faqs = [
        {
          question: "Who can attend?",
          answer: "CAIS 2017 is open to anyone interested in learning more about alternative investments, regardless of university or professional affiliation."
        },
        {
          question: "What's the cost?",
          answer: "CAIS 2017 will employ a variable cost structure. An early bird special will be available until Friday, March 24. These tickets will cost $20 each, and will grant the attendee access to Alumni Night and the Conference. Beginning Saturday, March 25, each ticket will cost $30, and will grant the attendee access to Alumni Night and the Conference. The registration fee includes breakfast and lunch at the Conference on April 8."
        },
        {
          question: "What's the dresscode?",
          answer: "Business formal is recommended."
        },
        {
          question: "What is Alumni Night?",
          answer: "Alumni Night consists on an Alumni Panel and a Keynote Speaker. The Alumni Panel will be structured as Q&A session where Northeastern Alumni working in the alternatives space can share their experiences, advice, and insights into their respective fields. Following the panel, the Keynote Speaker and Moderator will host a fireside chat. These two distinguished professionals will discuss their experiences and will then field questions directly from the audience. Overall, Alumni Night is a great opportunity for students to build their Northeastern network, particularly in the competitive alternatives field, and learn how some of our top talent broke into the industry."
        },
        {
          question: "Do I have to attend both the alumni panel and the conference?",
          answer: "Attendees are free to participate in either event, though we highly recommend coming to both for the best experience."
        },
        {
          question: "Is the press allowed to attend?",
          answer: "As a general practice, we do not invite press to our conference events. CAIS 2017 will operate under Chatham House Rules in order to preserve the substance of the conference. Chatham House Rules are defined as a meeting where participants are free to use the information received, but neither the identity nor the affiliation of the speakers, nor that of any participant, may be revealed."
        },
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
          name: "Lauren Tawfik",
          img: "/public/assets/img/team/laurentawfik.jpg",
          linkedin: "https://www.linkedin.com/in/lauren-tawfik-a93a48111?authType=name&authToken=jiE_&trk=prof-sb-browse_map-name",
          title: "Co-President"
        },
        {
          name: "Cole Weppner",
          img: "/public/assets/img/team/coleweppner.jpg",
          linkedin: "https://www.linkedin.com/in/cole-weppner-a1b59599",
    title: "Co-President"
  },
        {
          name: "Sofia Sotelo Ortiz",
          img: "/public/assets/img/team/sofiasoteloortiz.jpg",
          linkedin: "https://www.linkedin.com/in/sofia-sotelo-ortiz-48702271"
        },
        {
          name: "Daniel Arvidsson",
          img: "/public/assets/img/team/danielarvidson.jpg",
          linkedin: "https://www.linkedin.com/pub/daniel-arvidsson/91/3ba/81b",
          title: ""
        },
        {
          name: "Harrison Balder",
          img: "/public/assets/img/team/harrisonbalder.jpg",
          linkedin: "https://www.linkedin.com/pub/harrison-balder/b0/890/b10",
          title: ""
        },
        {
          name: "Helen Wang",
          img: "/public/assets/img/team/helenwang.jpg",
          linkedin: "https://www.linkedin.com/in/hwang18",
          title: ""
        },
        {
          name: "Mark Garbin",
          img: "/public/assets/img/team/markgarbin.jpg",
          linkedin: "https://www.linkedin.com/in/markkgarbin",
          title: ""
        },
        {
          name: "Colby Gilbert",
          img: "/public/assets/img/team/colbygilbert.jpg",
          linkedin: "https://www.linkedin.com/in/gilbertrichardc",
          title: ""
        },
        {
          name: "Robert Hartman",
          img: "/public/assets/img/team/roberthartman.jpg",
          linkedin: "https://www.linkedin.com/in/robert-hartman",
          title: ""
        },
        {
          name: "John O'Connor",
          img: "/public/assets/img/team/johnoconnor.jpg",
          linkedin: "https://www.linkedin.com/in/john-o-connor-49817773",
          title: ""
        },
        {
          name: "John Zhang",
          img: "/public/assets/img/team/johnzhang.jpg",
          linkedin: "https://www.linkedin.com/in/john-zhang-99a131b4",
          title: ""
        },
        {
          name: "Nick Sypteras",
          img: "/public/assets/img/team/nicksypteras.jpg",
          linkedin: "https://www.linkedin.com/pub/nicholas-sypteras/69/4a9/a2",
          title: ""
        },
        {
          name: "Sam Marley",
          img: "/public/assets/img/team/sammarley.jpg",
          linkedin: "https://www.linkedin.com/pub/sam-marley/a4/a51/275",
          title: ""
        }
      ];

      /*
       * Advisory Board
       */
       $scope.advisoryBoard = [
         {
           name: "Nicholas Lara",
           img: "/public/assets/img/advisory/lara.jpg",
           linkedin: "https://www.linkedin.com/pub/nicholas-f-lara/2a/ba7/47b",
           title: "Founder and Chairman"
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
           name: "Amy Zhou",
           img: "/public/assets/img/advisory/amyzhou.jpg",
           linkedin: "https://www.linkedin.com/in/amywzhou/"
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
         },
         {
           name: "Michael Counihan",
           img: "/public/assets/img/advisory/michaelcounihan.jpg",
           linkedin: "https://www.linkedin.com/in/michaelbcounihan"
         }
       ];

       var pressImgRoot = "/public/assets/img/press/";

       $scope.press = [
         {
           link: "http://finance.yahoo.com/news/4th-annual-northeastern-university-collegiate-110000421.html",
           img: pressImgRoot + "yahoofinance.png",
           paddingTop: true,
           extraPadding: true
         },
         {
           link: "http://www.businesswire.com/news/home/20160308005500/en/4th-Annual-Northeastern-University-Collegiate-Alternative-Investment",
           img: pressImgRoot + "businesswire.jpg",
           paddingTop: false,
           extraPadding: false
         }
       ];

      var imgRoot = "/public/assets/img/sponsors/";

      $scope.sponsors = [
        {'category': 'Platinum Sponsors',
          'members': [{
            name: "Thrive",
            img: imgRoot + "thrive.jpg",
            title: "Platinum Sponsor",
            link: "http://www.northeastern.edu/cfi"
        }]
      },
      {
        'category': 'Gold Sponsors',
        'members': [{
                  name: "Scotiabank",
                  img: imgRoot + "scotia.png",
                  title: "Gold Sponsor",
                  link: "http://www.scotiabank.com/"
                },
                {
                  name: "Office of Alumni Relations",
                  img: imgRoot + "oar.png",
                  title: "Gold Sponsor",
                  link: "https://www.northeastern.edu/alumni/"
                }]
      },
      {
        'category': 'Silver Sponsors',
        'members': [{
                  name: "CAIA",
                  img: imgRoot + "caia.jpg",
                  title: "Silver Sponsor",
                  link: "https://www.caia.org/"
                }]
      },
      {
        'category': 'Media Sponsors',
        'members': [{
                  name: "BackBay Communications",
                  img: imgRoot + "bbc.jpg",
                  title: "Media Sponsor",
                  link: "http://www.backbaycommunications.com/"
                },
              {
                name: "Wall Street Oasis",
                img: imgRoot + 'wso.png',
                hasFacts: true,
                link: "http://www.wallstreetoasis.com/"
              }]
      },
      {
        'category': 'Data Sponsors',
        'members': [{
          name: 'Pitchbook',
          img: imgRoot + 'pitchbook.jpg',
          link: "http://pitchbook.com/"
        }]
      }
      ];
      // $scope.sponsors = [
      //
      //
      //
      //   {
      //     name: "Wall Street Oasis",
      //     img: imgRoot + "wso.png",
      //     title: "Premier Sponsor",
      //     hasFacts: true
      //   },
      //
      //   {
      //     name: "Pitchbook",
      //     img: imgRoot + "pitchbook.jpg",
      //     title: "Data Sponsor"
      //   },
      //
      //
      // ];

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

      // scroll "logic"

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
      $scope.anSchedule = false;
      $scope.anSchedulePics = false;
      $scope.anFaq = false;
      $scope.anFaqs = false;
      $scope.anPastSpeakers = false;
      $scope.anPastSpeakersPics = false;
      $scope.anPresentations = false;
      $scope.anVids = false;
      $scope.anTeam = false;
      $scope.anTeamPics = false;
      $scope.anAvisory = false;
      $scope.anAdvisoryPics = false;
      $scope.anSponsors = false;
      $scope.anContact = false;

      var sections = document.getElementsByTagName('section');

      // get elements as angular elements and ignore the first section (intro section)
      // var ngSections = sections.map(angular.element).slice(1,sections.length);



      var aboutEl = angular.element(document.getElementById("about"));
      var speakersEl = angular.element(document.getElementById("speakers"));
      var scheduleEl = angular.element(document.getElementById("schedule"));
      var faqEl = angular.element(document.getElementById("faq"));
      var pastSpeakersEl = angular.element(document.getElementById("past-speakers"));
      var teamEl = angular.element(document.getElementById("management-committee"));
      var presentationsEl = angular.element(document.getElementById("selected-presentations"));
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
         if (this.pageYOffset > scheduleEl.prop('offsetTop') - 1000) {
           $scope.anSchedule = true;
         }
         if (this.pageYOffset > scheduleEl.prop('offsetTop') - 750) {
           $scope.anScheduleChart = true;
         }
         if (this.pageYOffset > faqEl.prop('offsetTop') - 1000) {
           $scope.anFaq = true;
         }
         if (this.pageYOffset > faqEl.prop('offsetTop') - 750) {
           $scope.anFaqs = true;
         }
         if (this.pageYOffset > pastSpeakersEl.prop('offsetTop') - 1000) {
           $scope.anPastSpeakers = true;
         }
         if (this.pageYOffset > pastSpeakersEl.prop('offsetTop') - 750) {
           $scope.anPastSpeakersPics = true;
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
     });

     }
  ]);

}());
