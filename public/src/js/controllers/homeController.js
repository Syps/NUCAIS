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

      /* Google Maps */
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(42.337358, -71.091847),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    $scope.markerConference = new google.maps.Marker({
      position: {lat: 42.337358, lng: -71.091847},
      title: 'Speaker Conference'
    });

    $scope.markerNetworking = new google.maps.Marker({
      position: {lat: 42.337831, lng: -71.085189},
      title: 'Alumni Panel & Networking Night'
    });

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    $scope.markerConference.setMap($scope.map);
    $scope.markerNetworking.setMap($scope.map);

    $scope.registrationLink = "https://commerce.cashnet.com/SFDMSB2016";

      $scope.menuItems = ['About', 'Speakers', 'Schedule', 'Location', 'FAQ',
      'Sponsors', 'Past Speakers', 'Selected Presentations', 'Management Committee',
      'Advisory Board', 'Contact'];

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
            case 'past speakers':
              elName = 'past-speakers';
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
      $scope.about.summary1 = "The Northeastern University Collegiate Alternative Investment Summit (CAIS) is a student-led conference designed to create a knowledge forum with some of the brightest minds in the alternative investments space. The summit is comprised of an Alumni Panel on Friday, April 1 from 6PM - 9PM, and a Conference on Saturday, April 2 from 9AM to 4PM.";
      $scope.about.summary2 = "CAIS bridges the gap between classroom education and professional application with respect to Hedge Funds, Private Equity, Venture Capital, and Real Assets.";

      $scope.speakers = [
        {
          name: "Ryan Cotton",
          img: "/public/assets/img/speakers/headshots/RyanCotton.jpg",
          topic: "",
          year: "",
          title: "Managing Director",
          company: "Bain Capital",
          bio: "Ryan Cotton is a Managing Director at Bain Capital, a leading global private investment firm with approximately $80 billion in assets under management.  He has significant experience in private equity investing and currently leads Bain Capital’s North American consumer, travel, leisure and hospitality, and real estate investment efforts.",
          bioTwo: "Since joining the firm in 2003, Mr. Cotton has been actively involved with and served on the Board of Directors of a wide spectrum of prominent companies in which Bain Capital has made investments. These businesses currently include TOMS, the company that turned the idea of One for One™ into a global movement; Canada Goose, one of the world’s leading manufacturers of extreme weather outerwear; International Market Centers, the world's largest operator of premier showroom space for home furnishings and décor; Sundial Brands, a leading manufacturer of personal care products; and Apple Leisure Group, a leading hospitality company holding a unique niche in the U.S. travel industry. Mr. Cotton is also responsible for the launch of Virgin Cruises, a start-up cruise line developed and launched in partnership with Virgin and Richard Branson.",
          bioThree: "Prior to joining Bain Capital in 2003, Mr. Cotton was a consultant at Bain & Company and worked extensively in the consumer and financial services spaces. Previously, he worked in baseball operations as a member of The Boston Red Sox front office.  Mr. Cotton also volunteers his time to support a variety of charitable organizations. He currently serves on the Board of Directors of City Year New York, an education-focused, nonprofit organization founded in 1988 that partners with public schools to provide full-time targeted intervention for students most at risk of dropping out, and the St. Mark’s School of Texas, a K-12 primary school located in Dallas, Texas.\nMr. Cotton received an M.B.A from The Stanford Graduate School of Business where he was a Seibel Scholar, an Arjay Miller Scholar and the winner of the Alexander A. Robichek Award for Outstanding Achievement in Finance. He received an A.B. in Philosophy from Princeton University.",
          keynote: true
        },
        {
          name: "James Goodman",
          img: "/public/assets/img/speakers/headshots/JamesGoodman.jpg",
          topic: "",
          year: "",
          title: "President",
          preposition: true,
          company: "Gemini Investors",
          bio: "Jim has been an investor in private middle market companies for the last 26 years. Since 1993, when he founded Gemini’s predecessor firm, he has raised six private equity funds and completed investments in more than 120 different companies. From 1989 to 1993, Mr. Goodman completed over $400 million in private equity transactions at Berkshire Partners, a Boston-based private investment firm. Previously, he was a management consultant for five years with Bain & Company. Mr. Goodman has been a Director or Board observer for over 40 portfolio companies during his investment career. A speaker at numerous industry conferences and events, Mr. Goodman received his A.B., J.D., and M.B.A. degrees from Harvard University and is a member of the State Bar of California.",
          keynote: true
        },
        {
          name: "Bruce Martin",
          img: "/public/assets/img/speakers/headshots/BruceMartin.jpg",
          topic: "",
          year: "",
          title: "Managing Director and Executive Committee Member",
          company: "Angelo, Gordon & Co.",
          bio: "Bruce Martin joined Angelo, Gordon in 1999 to focus on investments in the leveraged loan market.  He is a Managing Director and a member of the firm’s executive committee. Bruce is head of the firm’s leveraged loan and high yield business and portfolio manager of the firm’s Northwoods Capital CLOs, the Diversified Credit Strategies and Income Funds and several separate accounts. Since 1993, Bruce has analyzed high yield investments ranging from par loans to distressed debt and has also focused on equity value creation as a member of the Board of Directors for Angelo, Gordon portfolio companies. Prior to joining the firm, Bruce was a High Yield Bond Analyst at Putnam Investments and at Eaton Vance.  Before working at Eaton Vance, he worked at John Hancock as a Senior Corporate Bond/High Yield Analyst and at Insurance Service Offices as an Actuarial Analyst. Bruce holds a B.A. degree in Mathematics from SUNY Binghamton and an M.B.A. degree from Northeastern University.",
          keynote: true
        },
        {
          name: "Gary Bergstrom, Ph.D",
          img: "/public/assets/img/speakers/headshots/glb.jpg",
          topic: "",
          year: "",
          title: "Founder",
          preposition: true,
          company: "Acadian Asset Management",
          bio: "Dr. Gary L. Bergstrom is the Founder of Acadian Asset Management, Inc., a global equity manager with main offices in Boston and Singapore. Dr. Bergstrom has over thirty-five years of continuous experience in global investing. He spent nine years at the Putnam Companies and started the Putnam International Fund in 1971. During the five years in which he managed the fund, it consistently outperformed global market indices.",
          bioTwo: "Dr. Bergstrom founded Acadian Financial Research, predecessor of Acadian Asset Management, in 1977. Acadian worked closely with the State Street Bank and Trust Company to launch and manage their first international index fund. In 1987, Acadian ended its formal relationship with State Street and began managing institutional assets directly. Since then, the firm has continued to be a pioneer in developing and implementing advanced active strategies for global equity investing.",
          bioThree: "Dr. Bergstrom’s pioneering article, \"A New Route to Higher Returns and Lower Risks,\" published in the Journal of Portfolio Management in 1975, was one of the first to advocate major systematic allocations of the assets of U.S.-based funds to non-U.S. equities. Other publications include articles in The Financial Analysts Journal, The Columbia Journal of World Business, and The Sloan Management Review, as well as chapters in many books on investing. Dr. Bergstrom has a particular interest in development economics and emerging markets, gained in part from his extensive research in India during graduate school. He has a doctorate from the Massachusetts Institute of Technology, where he also taught at the Sloan School of Management."
        },
        {
          name: "Thomas Andrews",
          img: "/public/assets/img/speakers/headshots/TomAndrews.jpeg",
          topic: "",
          year: "",
          title: "Executive Vice President, Regional Market Director",
          company: "Alexandria Real Estate Equities, Inc.",
          bio: "Tom Andrews serves as the Executive Vice President, Regional Market Director for Alexandria Real Estate Equities, Inc., the largest and leading real estate investment trust focused on urban science and technology campuses in major innovation clusters.   Tom has 26 years of direct experience in the development and management of office and life science facilities, including over 16 years heading Alexandria’s acquisition, development, leasing, and asset management activities in the Greater Boston region.  Under Tom’s leadership, the Greater Boston region has become Alexandria’s largest region, with 42 operating properties totaling 4.5 million square feet, and over 1.1 million square feet of additional projects under construction in Cambridge and Boston.    Tom heads a team of 22 individuals engaged in asset and property management, construction and development management, leasing and marketing, and business development and industry research activities.",
          bioTwo: "Prior to joining Alexandria in 1999, Tom served as the Executive Director of the Massachusetts Biotechnology Research Park in Worcester, one of the first purpose-built life science research parks in the world.  Tom graduated from Cornell University and earned a Master of Science degree from MIT Center for Real Estate, where his thesis examined the development of the research facilities for academic medical centers."
        },
        {
          name: "Michael Gries",
          img: "/public/assets/img/speakers/headshots/MichaelGries.png",
          topic: "",
          year: "",
          title: "Managing Member",
          company: "CDG Group",
          preposition: true,
          bio: "Michael Gries is a nationally recognized leader in the restructuring profession with more than 30 years of experience advising companies and creditors on complex corporate reorganizations. Mr. Gries has specialized in providing business and financial advice to boards of directors, management, investors, and other interested parties in distressed and turnaround situations.",
          bioTwo: "Mr. Gries has been involved in all aspects of CDG’s strategic and financial restructuring business as an advisor and as a manager of under-performing and distressed companies. He has also advised lenders, creditors, corporate boards, and equity sponsors on both operational and financial issues. He has been involved with more than 100 restructuring transactions and has successfully restructured billions of dollars of debt. In addition to serving as an advisor, Mr. Gries has served as the chairman of the board of directors of a major NYSE company, as chief executive officer and, on numerous occasions, as chief restructuring officer. Michael Gries received a Bachelor of Science in Accounting and Finance from Northeastern University."
        },
        {
          name: "Christina Qi",
          img: "/public/assets/img/speakers/headshots/ChristinaQi.png",
          topic: "",
          year: "",
          title: "Partner",
          company: "Domeyard LP",
          bio: "Christina Qi is a Partner at Domeyard LP, a quantitative hedge fund based in Boston. Domeyard leverages computational models to execute trades at ultra low latencies, deploying capital globally across multiple asset classes. Domeyard is backed by various institutional investors and hedge fund veterans. Christina started her career at Goldman Sachs, UBS Securities, Zions Bank, and Lincoln Labs, with experiences in buy-side trading, sell-side trading, derivatives operations, and technology infrastructure. Christina has guest-lectured for Nobel Laureate Robert Merton’s “Retirement Finance” class at MIT, as well as Harvard Business School’s core finance class \"Investment Strategies.\"",
          bioTwo: "Christina holds a Bachelor of Science degree from MIT. She is a CAIA Charterholder and was granted the 2014 CAIA Foundation Scholarship by PAAMCO and 100 Women in Hedge Funds. She was recently named among Boston Business Journal’s “40 Under 40”, of business and civic leaders making a major impact in their respective fields. She serves on the 100 Women in Hedge Funds Non-Profit Boards Committee."
        },
        {
          name: "Sam Klar",
          img: "/public/assets/img/speakers/headshots/SamKlar.jpg",
          topic: "",
          year: "",
          title: "Portfolio Manager",
          company: "GMO",
          bio: "Mr. Klar is a merger arbitrage Portfolio Manager for GMO’s Global Equity team. Prior to joining full-time in 2006, he held a co-op position at GMO with the Emerging Markets Equity team.  Mr. Klar earned his B.S. in Finance from Northeastern University."
        },
        {
          name: "Karthik Krishnan",
          img: "/public/assets/img/speakers/headshots/KarthikKrishnan.jpg",
          topic: "",
          year: "",
          title: "Associate Professor, Thomas Moore Faculty Fellow",
          company: "Northeastern University",
          bio: "Karthik Krishnan is an Associate Professor of Finance Thomas Moore Faculty Fellow at the D’Amore-McKim School of Business at Northeastern University. Additionally, Dr. Krishnan is a member of the Launchpad Venture Group, a Boston-area angel investing group focused on early stage investments primarily in high tech and life sciences. Dr. Krishnan graduated from the Delhi College of Engineering and received his Doctor of Philosophy degree in Finance from the Boston College Wallace E. Carroll Graduate School of Management."
        },
        {
          name: "Spencer Murray",
          img: "/public/assets/img/speakers/headshots/SpencerMurray.jpg",
          topic: "",
          year: "",
          title: "Associate",
          company: "Berkshire Partners",
          bio: "Spencer joined Berkshire Partners in 2015. Prior to joining Berkshire, he was an analyst at Morgan Stanley. Spencer earned his B.S. at Northeastern University."
        },
        {
          name: "Eric Rosiello",
          img: "/public/assets/img/speakers/headshots/ericrosiello.jpg",
          topic: "",
          year: "",
          title: "Associate",
          company: "Arrowstreet Capital, LP",
          bio: "Eric is an Associate on Arrowstreet's Portfolio Management and Investment Operations teams. Arrowstreet uses a quantitative approach to manage over $50 billion in global equity assets. He focuses on strategic implementation of the firm's model outputs as well as management of special situations & corporate opportunities. Prior to joining the firm full-time after graduation, Eric spent 10 months as a co-op and part-time member of the Portfolio Management team. Eric graduated with B.S. in Finance and Accounting from Northeastern University."
        },
        {
          name: "Nicholas Sammut",
          img: "/public/assets/img/speakers/headshots/NicholasSammut.jpg",
          topic: "",
          year: "",
          title: "Investment Professional",
          company: "Generate Capital",
          bio: "Nick is currently an Investment Professional at Generate Capital where he focuses on equity investments in the distributed generation, energy efficiency and waste technology sectors. Before joining Generate in 2015, Nick was a member of the Private Equity team at Fortress Investment Group, a diversified global asset manager with over $75 billion under management. Here he worked on asset and corporate transactions in the transportation, infrastructure and energy sectors. Prior to Fortress, Nick was an analyst within the Global Investment Research group at Goldman Sachs, focused on the aerospace & defense sector.",
          bioTwo: "Nick received his BS from Northeastern University with a summa cum laude designation. Nick is also a co-founder of Northeastern's venture accelerator program, IDEA."
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
        speaker: "Nicholas Sammut - Investment Professional at Generate Capital\nSpencer Murray - Associate at Berkshire Partners\nMichael St.Germain - Director at LR Global\nEric Rosiello - Associate at Arrowstreet Capital, LP"
      },
      {
        time: "7:35 PM",
        activity: "Keynote",
        speaker: "Bruce Martin - Managing Director and Executive Committee Member at Angelo, Gordon & Co."
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
        activity: "Registration and Breakfast",
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
        speaker: "Sean Wilson - Managing Partner and CIO at LR Global\nGary Bergstrom, Ph.D. - Founder and Consultant at Acadian Asset Management\nChristina Qi - Partner at Domeyard LP\nSam Klar - Portfolio Manager at GMO"
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
            answer: "You don't have to study finance or even be a Northeastern student to attend. CAIS welcomes anyone interested in learning more about alternative investments, regardless of age or discipline."
          },
          {
            question: "What's the cost?",
            answer: "Early bird registration is $20 until March 18, after which time the registration fee is $30. This grants you access to both the Friday alumni panel and the speaker conference the following day as well as breakfast and lunch the day of the speaker conference."
          },
          {
            question: "What's the Friday alumni panel about?",
            answer: "The Friday alumni panel is a panel-style Q&A session where Northeastern Alumni working in the alternatives space share their experiences, advice, and insights into their respective fields. It's a great opportunity for students to build their Northeastern network, particularly in the competitive alternatives field, and learn how some of our top talent broke into the industry."
          },
          {
            question: "Do I have to attend both the alumni panel and the conference?",
            answer: "Attendees are free to participate in either event, though we highly recommend coming to both for the best experience!"
          },
          {
            question: "Is the press allowed to attend?",
            answer: "As a general practice, we do not invite press to our conference events. For our 2016 Summit, we are operating under Chatham House Rules in order to preserve the substance of our conference. Chatham House Rules are defined as a meeting where participants are free to use the information received, but neither the identity nor the affiliation of the speakers, nor that of any participant, may be revealed."
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
            name: "Rohan Venkatesh",
            img: "/public/assets/img/team/rohanvenkatesh.jpg",
            linkedin: "https://www.linkedin.com/in/rohanvenkatesh",
            title: "Co-President"
          },
          {
            name: "Jake Fulton",
            img: "/public/assets/img/team/jakefulton.jpg",
            linkedin: "https://www.linkedin.com/pub/jake-fulton/43/a29/641",
            title: "Co-President"
          },
          {
            name: "Amy Zhou",
            img: "/public/assets/img/team/amyzhou.jpg",
            linkedin: "https://www.linkedin.com/in/amywzhou"
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
            name: "Mark Garbin",
            img: "/public/assets/img/team/markgarbin.jpg",
            linkedin: "https://www.linkedin.com/in/markkgarbin",
            title: ""
          },
          {
            name: "Lauren Tawfik",
            img: "/public/assets/img/team/laurentawfik.jpg",
            linkedin: "https://www.linkedin.com/in/lauren-tawfik-a93a48111?authType=name&authToken=jiE_&trk=prof-sb-browse_map-name",
            title: ""
          },
          {
            name: "Michael Counihan",
            img: "/public/assets/img/team/michaelcounihan.jpg",
            linkedin: "https://www.linkedin.com/in/michaelbcounihan",
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
            name: "Wellington Management",
            img: imgRoot + "wellington.png",
            title: "Gold Sponsor"
          },
          {
            name: "Wall Street Oasis",
            img: imgRoot + "wso.png",
            title: "Premier Sponsor",
            hasFacts: true
          },

          {
            name: "Pitchbook",
            img: imgRoot + "pitchbook.jpg",
            title: "Data Sponsor"
          },
          {
            name: "Northeastern Alumni Development Association",
            img: imgRoot + "nuada.png",
            title: "Silver Sponsor"
          },
          {
            name: "CAIA",
            img: imgRoot + "caia.jpg",
            title: "Silver Sponsor"
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

        var aboutEl = angular.element(document.getElementById("about"));
        var speakersEl = angular.element(document.getElementById("speakers"));
        var scheduleEl = angular.element(document.getElementById("schedule"));
        var faqEl = angular.element(document.getElementById("faq"));
        var pastSpeakersEl = angular.element(document.getElementById("past-speakers"));
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
           console.log(this.pageYOffset);
       });

     }
    /* end controller*/
  ]);

}());
