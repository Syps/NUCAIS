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

      var LAT_CONF = 42.337748;
      var LONG_CONF = -71.085369;
      var LAT_NWK = 42.336729;
      var LONG_NWK = -71.091747;
      var DATE_CONF = new Date("April 14, 2018 11:00:00");

      $scope.modalVisible = false;
      $scope.modalSpeakerBioParagraphs = [];

      $scope.toggleModal = function(speaker) {
          if (speaker.bioParagraphs && speaker.bioParagraphs.length) {
            $scope.modalSpeaker= speaker;
            $scope.modalVisible = true;
          }
      };

      $scope.hideModal = function() {
        $scope.modalVisible = false;
      }

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
        $scope.about.summary2 = "CAIS 2018 will be held on April 13-14, 2018. It will mark the sixth anniversary of the inaugural CAIS event, and will highlight the strides CAIS has made since its inception. It begins with a networking event designed to provide attendees with thoughtful discussion led by a panel of recent Northeastern alumni who are currently working in alternative investments. The main event, held the following day, consists of a series of speakers and panels. Speakers and panelists have had years of extensive experience in the alternative investments space and are considered specialists in their respective fields.";


        $scope.speakers = [
          {
            'category': 'Conference Keynotes',
            'members': [
              {
                name: "Henry Nasella",
                img: "/public/assets/img/speakers/headshots/henrynasella.jpeg",
                topic: "",
                year: "",
                title: "Partner",
                company: "LNK Partners",
                keynote: true,
                bioParagraphs: ["Henry co-founded LNK in 2005 and has over 25 years of operating experience and 16 years of private equity experience in the consumer/retail sector.",
                    "Prior to LNK, Henry was a Venture Partner at Apax Partners, where he was a senior member of the U.S. Consumer and Retail Group. Before Apax, Henry led the successful buyout of Star Markets, a regional supermarket chain, and served as Chairman and CEO of the company until its sale to Sainsbury Plc. Prior to Star Markets, Henry was the first President of Staples (NASDAQ: SPLS), where he built the company from a startup into a global leader in office supply retailing.",
                    "Henry is currently on the Board of Directors of Au Bon Pain, PVH (NYSE: PVH), and Northeastern University, and has served on the Board of Directors of Ariat, Natural Food Holdings, Staples, Panera Bread (NASDAQ: PNRA), Denny’s (NASDAQ: DENN), Spyder Active Sports, Ulta Beauty (NASDAQ: ULTA), and Blinds-To-Go. Henry received a BS from Northeastern University, where he is currently the Chairman of the Board of Trustees."
                  ]
              },
              {
                name: "Ted English",
                img: "/public/assets/img/speakers/headshots/tedenglish.jpg",
                topic: "",
                year: "",
                title: "Executive Chairman",
                company: "Bob's Discount Furniture",
                bioParagraphs: [
                  "Ted English is the Executive Chairman of Bob’s Discount Furniture and the former President and CEO of the TJX Companies, Inc. Ted joined Bob’s Discount Furniture in November of 2006 and since that time , Bob’s has more than quadrupled their sales from $225 million in 2005 to over  $1 billion in 2015. Bob’s has opened more than 50 stores on top of their original 21 during that period of time.",
                  "During his five plus year tenure as CEO of TJX, Ted increased revenue over $6B, from $8.8B in 2000 to $15B in 2005. He opened over 900 stores across 8 domestic and international divisions, creating over 50,000 new jobs as a result.  TJX’s common stock significantly outperformed the S&P 500 during this time generating a 20% compound annual growth rate in stock price while achieving double digit compound annual growth rates in revenue and earnings per share.",
                  "Ted has over 45 years of retailing experience. He began his career as a stock boy at Filene’s Basement in Boston where he worked from High School through College. As a Co-op student at Northeastern University, Ted held several entry level management positions ultimately landing a buyer’s role at that world renowned retailer upon graduation.",
                  "Ted is a member of the Board of Directors for Natixis Global Asset Management and Rue La La. Ted is a member of the Board of Trustees at Boston Medical Center and his alma mater, Northeastern University. Ted is also an Overseer at Cardinal Cushing Centers, an organization that teaches, trains and supports children and adults with developmental and cognitive disabilities.",
                  "Ted and his wife, Maureen, have four children and reside in Boston, Massachusetts."
                ],
                keynote: true,
                modalShown: false
              }
            ]
        },
        {
          'category': 'Alumni Night Keynote',
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
              keynote: true,
              modalShown: false,
              bioParagraphs: ["Fran has 32 years of private equity experience. She co-founded Pomona Capital in 1994 and is primarily responsible for investment sourcing and decision-making in the secondaries, primary funds of funds and co-investment businesses. Pomona Capital is a global, value-oriented private equity firm focused on generating significant performance while limiting risk.  The firm manages over $8 billion with 40 employees on three continents.",
                "Prior to joining Pomona, she was a General Partner of Hambro International Equity Partners, a venture group that managed a series of domestic and offshore funds. During her career, Fran served as a Director of a number of private and public companies engaged in the telecommunications equipment, consumer products, software services, healthcare, and specialty retailing industries.",
                "She received an MBA from Northeastern University, and a BS from the State University at New York (Albany). Fran is a member of the Board of Trustees of Northeastern University.  Fran lives in New York City with her husband and two sons ages 8 and 12."
            ]
            },
            {
              name: "Richard D'Amore",
              isModerator: true,
              img: "/public/assets/img/speakers/headshots/richarddamore.jpg",
              topic: "",
              year: "",
              title: "Partner",
              company: "North Bridge Venture Partners",
              bio: "",
              bioTwo: "",
              bioThree: "",
              keynote: true,
              modalShown: false,
              bioParagraphs: [
                "Rich D'Amore, Partner at North Bridge Venture Partners, has almost three decades of experience in the venture business.",
                "Rich D'Amore has been with North Bridge since the company's inception in 1994. Before co-founding North Bridge, he spent fourteen years at Hambro International Equity Partners, establishing the firm's Boston office. His investments have been split between early stage projects and special situations.",
                "Before joining Hambro in 1982, he worked as a consultant at Bain and Company and was a Certified Public Accountant with Arthur Young and Company.",
                "Rich received a BS from Northeastern, summa cum laude, in 1975. He also has an MBA from Harvard University Graduate School of Business Administration where he was a Baker Scholar. A dedicated supporter of higher education, he is on the Board of Trustees at Northeastern University, where he promotes innovation and research that can drive economic growth."
              ]
            }
          ]
      },
      {
        'category': 'Investing in Sustainability',
        'members': [
          {
            name: "Alan McKim",
            img: "/public/assets/img/speakers/headshots/alanmckim.jpg",
            topic: "",
            year: "",
            title: "Chairman, CEO & President",
            company: "Clean Harbors Inc.",
            keynote: false,
            modalShown: false,
            bioParagraphs: ["Alan McKim founded the Company in 1980, and has since established Clean Harbors as North America’s leading provider of environmental, energy and industrial services, with 2016 revenues of $2.8 billion.  Under Mr. McKim’s leadership, Clean Harbors has grown organically and through strategic acquisitions, including the 2012 purchase of Safety-Kleen. This acquisition greatly enhanced the Company’s deep commitment to sustainability by adding considerable recycling capabilities, including the world’s largest oil re-refining facility. Today, Clean Harbors offers a comprehensive array of services to more than 250,000 customers, and counts the majority of the Fortune 500 among its customer base.  Headquartered in Norwell, Massachusetts, the Company has more than 600 locations, including more than 100 waste management facilities throughout the U.S., Canada, Mexico and Puerto Rico. The Company’s workforce comprises more than 12,000 employees. Mr. McKim holds an MBA from Northeastern University, where he also serves as Trustee. He also received an Honorary Doctorate degree from Massachusetts Maritime Academy."]
          },
          {
            name: "Nicholas Sammut",
            img: "/public/assets/img/speakers/headshots/NicholasSammut.jpg",
            topic: "",
            year: "",
            title: "Investment Professional",
            company: "Generate Capital",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false,
            modalShown: false,
            bioParagraphs: ["Nick is currently an Investment Professional at Generate Capital where he focuses on equity investments in the distributed generation, energy efficiency and waste technology sectors. Before joining Generate in 2015, Nick was a member of the Private Equity team at Fortress Investment Group, a diversified global asset manager with over $75 billion under management. Here he worked on asset and corporate transactions in the transportation, infrastructure and energy sectors. Prior to Fortress, Nick was an analyst within the Global Investment Research group at Goldman Sachs, focused on the aerospace & defense sector.",
          "Nick received his BS from Northeastern University with a summa cum laude designation. Nick is also a co-founder of Northeastern's venture accelerator program, IDEA."]
        },
          {
            name: "Derek Lister",
            img: "/public/assets/img/speakers/headshots/dereklister.png",
            topic: "",
            year: "",
            title: "M&A Analyst",
            company: "Harvard Management Company",
            bioParagraphs: ["Derek Lister is an M&A Analyst on Harvard Management Company's natural resource team and is responsible for investment screening, financial analysis, structuring, and diligence of prospective renewable energy, agriculture, and timber investments.  He has six years of renewable natural resource investment experience.  His experience spans the geographies of North America, South America, Australia, Europe, and Africa.  Prior to joining Harvard Management Company, Derek was an M&A Analyst at Hancock Natural Resource Group and worked on international acquisitions within the renewable natural resources sector for a $14bn portfolio.  Derek is well positioned to analyze standalone investments as well as investments combining energy with either agriculture or timber.  He holds a B.S. in Business Administration with concentrations in Finance and Accounting from Northeastern University and a Master of Finance from MIT Sloan."],
            keynote: false,
          modalShown: false
          }
        ]
      },
      {
        'category': 'Partner-Track in Venture Capital',
        'members': [
          {
            name: "Richard Dulude",
            img: "/public/assets/img/speakers/headshots/richarddulude.jpg",
            topic: "",
            year: "",
            title: "Principal & Investment Manager",
            company: "_Underscore.VC",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Richard is the Principal & Investment Manager at _Underscore.VC, an early stage venture firm based in Boston and leads the firm's AR/VR investing practice. Richard previously worked at Founder Collective, a seed stage venture firm, while at Harvard Business School.",
              "Previously, he was the technical co-founder of Popt, a social media sentiment analysis startup focused on $1B+ brands. Before that, he led the Direct-to-Consumer eCommerce business for Procter & Gamble in North America following programming roles as a developer on Apple's first iTunes product and Goldman Sachs internal trading systems after retiring from the U.S. Ski Team for Freestyle Skiing where he was an alternate for the 2006 Winter Olympics in Torino Italy."
            ]
          },
          {
            name: "Andy Lefkarites",
            img: "/public/assets/img/speakers/headshots/andylefkarites.jpg",
            topic: "",
            year: "",
            title: "Senior Associate",
            company: "North Bridge Growth Equity",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Andy Lefkarites is a senior associate at North Bridge Growth Equity and joined in 2014. He focus on identifying, evaluating and executing investment opportunities within the technology and technology-enabled services sectors. Mr. Lefkarites currently support our investments in Asurint, Ingenious Med, and Valence Health/Evolent Health.",
              "North Bridge Growth Equity invests in rapidly growing companies that address large, dynamic market opportunities and have $15 million to $300 million in annualized revenue. They invest from $15 million to $100 million as either a minority or majority investor, and are able to make larger investments using an established network of partners. Their capital gives management more options at key inflection points to accelerate growth, fund acquisitions and buyouts, and provide liquidity to shareholders.",
              "Prior to joining North Bridge, Mr. Lefkarites was an analyst with Houlihan Lokey’s Global Technology Group in San Francisco where he advised clients on mergers and acquisitions and private placements within the software, internet, technology-enabled services and healthcare IT sectors."
            ]
          },
          {
            name: "Juan Leung Li",
            img: "/public/assets/img/speakers/headshots/juanleungli.jpg",
            topic: "",
            year: "",
            title: "Senior Associate",
            company: "General Catalyst Partners",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Juan is part of the early stage investment team at General Catalyst, a venture capital firm that makes early-stage and transformational investments. The firm backs exceptional entrepreneurs who are building innovative technology companies and market leading businesses, including Airbnb, BigCommerce, ClassPass, Datalogix, Datto, Demandware, Gusto (fka ZenPayroll), The Honest Company, HubSpot, KAYAK, Oscar, Snap, Stripe, and Warby Parker. Juan works closely with companies like Catalant (fka HourlyNerd), Feedvisor and B12.io.",
              "Juan’s experience in technology covers a wide spectrum – prior to joining General Catalyst, he worked at Javelin Venture Partners, Primary Venture Partners, McGraw-Hill Education and J.P. Morgan and was also the co-founder of Ripple Concerts, a marketplace for live music. He graduated from Boston University with a B.S., summa cum laude, in Business and from Harvard Business School with an MBA where he was a National Society of Hispanic MBAs Scholar and was awarded the Rock Entrepreneurship, Toigo and InSITE Fellowships. Follow Juan on Twitter via @juanleungli."
            ]
          },
          {
            name: "Parul Singh",
            img: "/public/assets/img/speakers/headshots/parulsingh.jpg",
            topic: "",
            year: "",
            title: "Principal",
            company: "Founder Collective",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Parul Singh is a principal at Founder Collective, one of the first seed stage VC firms in the country.  There she focuses on early stage investments across a wide range of industries, with technology as a unifying theme.  She has particular interests in SaaS, analytics, consumer products, food and developer tools.",
              "Parul is a former developer turned product manager for venture backed startups and media companies like the NY Times, where she helped launch the video and multimedia vertical and managed the video player on the homepage.  Before joining Founder Collective, she founded and ran an edtech assessment and analytics company which aimed to provide an alternative to standardized testing.",
              "Parul lectures on data analytics at Northeastern University and is deeply involved in the startup ecosystem in Boston and in building support networks for entrepreneurs at every level.  She grew up in the Boston area and has an undergraduate degree from Harvard College and an MBA from MIT.  Parul lives in a converted schoolhouse in Cambridge with her husband and two children."
            ]
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
            company: "Acadian Asset Management",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false,
            modalShown: false,
            bioParagraphs: ["Asha Mehta, CFA, is a lead Portfolio Manager with a focus on Frontier & Emerging Markets. Prior to joining Acadian, Asha worked as an investment banker at Goldman Sachs and at Johnson & Johnson in a strategy role. Early in her career, she conducted microfinance lending in India. She has traveled to over 70 countries and lived in six.  She holds an M.B.A. with Honors from The Wharton School (University of Pennsylvania) and undergraduate degrees from Stanford University. Asha is a CFA charterholder and a member of CFA Society Boston. Asha was named one of the Top 10 Women in Asset Management by Money Management Executive in 2016."]
          }
        ]
      },
      {
        'category': 'Merger Arbitrage',
        'members': [
          {
            name: "Sam Klar",
            img: "/public/assets/img/speakers/headshots/SamKlar.jpg",
            topic: "",
            year: "",
            title: "Portfolio Manager",
            company: "GMO",
            bio: "",
            bioTwo: "",
            bioThree: "",
            keynote: false,
            modalShown: false,
            bioParagraphs: ["Sam Klar is a Merger Arbitrage Portfolio Manager within GMO’s Asset Allocation team. Since joining GMO full-time in 2006, Mr. Klar has held positions within the firm’s Global Equity and Emerging Markets Equity teams. Mr. Klar earned his B.S. in Finance from Northeastern University in 2006."]
          }
        ]
      },
      {
        'category': 'Turnaround Management',
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
            keynote: false,
            modalShown: false,
            bioParagraphs: ["Jacen Dinoff is the co-Founder and Chief Executive Officer of KCP Advisory Group, a leading business advisory firm specializing in providing creative solutions to rehabilitate businesses. Mr. Dinoff oversees all company operations and case assignments. Mr. Dinoff is highly-regarded as a corporate restructuring and turnaround management advisor with hands-on accounting, finance, management and operations experience that complements his technical expertise in bankruptcy case administration and financial advisory. Mr. Dinoff’s career has included engagements in financial and operational restructurings, asset divestitures through sale and liquidation, and senior debtor/creditor advisor roles for many well-known companies, both publicly and privately held.",
            "Mr. Dinoff is a Certified Turnaround Professional. He holds a B.S. in Business Administration from the Peter T. Paul College of Business and Economics at the University of New Hampshire, and an M.B.A in Finance from Bentley College.  He is an active member of the Turnaround Management Association and American Bankruptcy Institute and is a frequent speaker and contributor at industry events and media outlets."]
          },
          {
            name: "Barry Green",
            img: "/public/assets/img/speakers/headshots/barrygreen.jpeg",
            topic: "",
            year: "",
            title: "Founding Partner",
            company: "HunterPoint LLC",
            bioParagraphs: [
              "Barry Green is a recognized expert in implementing change in companies undergoing or requiring transformation.  He has run and revived distressed companies in a wide range of industries and has nurtured businesses through the turmoil that can accompany rapid growth.",
              "Barry is a founding partner of HunterPoint LLC, a boutique management consultancy based in New York and Boston that provides corporate restructuring, due diligence and corporate governance services.",
              "Prior to the formation of HunterPoint, Barry was a founding partner of Coeus Management LLC, and before that a managing director at a middle market boutique turnaround consulting firm, during which periods he led a number of successful turnarounds and restructurings in the roles of Chief Restructuring Officer and financial advisor, and held several board positions as audit committee chair.  His prior experience included director and CFO of an international airline food and equipment distribution company, and similar posts in the consumer electronics and home improvement industries.",
              "Barry, originally from the UK, is a chartered accountant, has an MBA with distinction from the Wharton School, University of Pennsylvania, and a bachelor’s degree in Econometrics from the University of Manchester in the UK.",
              "Barry currently sits on the board of Katun Corporation, one of the world’s largest suppliers of OEM- compatible imaging consumables and supplies for office equipment, as an independent director and chair of the audit committee.  Barry is a member of the Turnaround Management Association (TMA) and the American Bankruptcy Institute, and is a former board member of the TMA Northeast Chapter."
            ],
            keynote: false,
            modalShown: false
          },
          {
            name: "John Loughnane",
            img: "/public/assets/img/speakers/headshots/johnloughanne.JPG",
            topic: "",
            year: "",
            title: "Partner",
            company: "Nutter McClennen & Fish",
            bioParagraphs: ["John G. Loughnane is a partner in Nutter’s Business Department. Clients rely on his practical business experience in working out difficult situations and solving a variety of business challenges inherent in today’s fast-paced innovation economy. Clients appreciate the value of John’s past work in-house at PTC, an international technology company based in the Boston area, where John worked directly with business teams solving a variety of business challenges. John’s recent clients include owners, investors, board members, lenders, buyers and vendors.   His leadership roles include current service as President of the Northeast Chapter of the Turnaround Management Association. John also serves on the leadership team for the Mediation Committee of the American Bankruptcy Institute. Past leadership service includes co-chairing the Technology & Intellectual Property Committee of ABI as well as co-chairing the Bankruptcy Section of the Boston Bar Association. He speaks and writes on topics involving financing and technology issues including data security. John strengthens client rights and outcomes at the outset of financing and technology transactions through his deep understanding of how commercial issues are handled in distressed circumstances.  He is a graduate of Holy Cross and George Washington University Law School."],
            keynote: false,
            modalShown: false
          }
        ]
      },
      {
        'category': 'DMSB Alumni Panel',
        'members': [
          {
            name: "Lilly Xie",
            img: "/public/assets/img/speakers/headshots/lillyxie.jpg",
            topic: "",
            year: "",
            title: "Analyst",
            company: "Spinnaker Capital LLC",
            bioParagraphs: ["Lilly Xie is a second year Analyst at Spinnaker Capital LLC, a Boston-based investment firm that focuses on investing in private companies and a variety of funds on behalf of a select number of high net-worth families. Prior to Spinnaker, Lilly worked as a client operations specialist at State Street. Before that, she was a credit research analyst at Moody’s Analytics in Beijing, China. Lilly graduated summa cum laude from Northeastern University with a degree in Business Administration."],
            keynote: false,
            modalShown: false
          },
          {
            name: "Martin Lemaire",
            img: "/public/assets/img/speakers/headshots/martinlemaire.png",
            topic: "",
            year: "",
            title: "Risk Analyst",
            company: "Putnam Investments",
            bioParagraphs: ["Mr. Lemaire is a Risk Analyst in the Risk Group.  He is responsible for the development, research, and testing of new risk models employed within the Investment Management Division for Equities.  In addition, he provides consultative assistance to investment teams regarding risk management and portfolio construction. Mr. Lemaire joined Putnam in 2013 as a Quantitative Investment Associate in the Global Asset Allocation Group.  He has been in the investment industry since 2011.",
            "Prior to joining Putnam, Mr. Lemaire was a Research Associate at Fidelity Investments and a COOP at Bank of America Merrill Lynch in student loan securitization.",
            "He earned a BSBA from Northeastern University with a minor in mathematics and a masters in finance from MIT."
            ],
            keynote: false,
            modalShown: false
          },
          {
            name: "Tarik Emara",
            img: "/public/assets/img/speakers/headshots/tarikemara.jpg",
            topic: "",
            year: "",
            title: "Vice President of Private Equity",
            company: "Citi",
            bioParagraphs: [
              "Tarik joined Citi Private Bank in 2015 and is a Vice President on the Private Equity Research and Management team. He is responsible for sourcing, structuring and diligencing private equity investment opportunities. Prior to joining Citi, he was a Senior Associate at Liberty Mutual Investments, where he was responsible for the analysis and underwriting of private equity investments across buyout, venture capital, growth equity, distressed and secondary strategies. He also contributed to the monitoring responsibilities for a portfolio of over 200 fund and co-investments with over $5 billion in total exposure. Tarik holds a BS in Finance and Management from Northeastern University. He is a member of the Boston Security Analyst Society and is a CFA charterholder."
            ],
            keynote: false,
            modalShown: false
          },
          {
            name: "Annemarie Murphy",
            img: "/public/assets/img/speakers/headshots/annemariemurphy.jpg",
            topic: "",
            year: "",
            title: "Assistant Vice President",
            company: "Boston Capital",
            bioParagraphs: ["Ms. Murphy began her career at Boston Capital in the Asset Management division in 2007.  She managed a portfolio of multi-family real estate partnerships, developing strong relations with lender representatives, management agents, local agencies, and General Partners.  In 2010, she joined Boston Capital’s Acquisitions division where she is an Assistant Vice-President.  She is currently responsible for the acquisition and structuring of multifamily affordable housing investments for Boston Capital’s corporate investors.  To date, she has been involved in the closing of over $200 million in tax credit equity throughout the United States with a wide range of financing structures including tax-exempt bond transactions, government subsidized, and conventional loans.  Prior to joining Boston Capital, Ms. Murphy worked at CB Richard-Ellis.  Ms. Murphy graduated with honors with a dual degree in Finance and Marketing from Northeastern University and graduated summa cum laude from Northeastern University’s MBA program."],
            keynote: false,
            modalShown: false
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
          activity: "Alumni Night Keynote\nModerated by Richard D'Amore",
          speaker: "Fran Janis - Founding Partner, Pomona Capital"
        },
        {
          time: "7:30 PM",
          activity: "DMSB Alumni Panel\nModerated by Nicole Boyson",
          speaker: "Lilly Xie - Analyst, Spinnaker Capital\nMartin Lemaire - Quantitative Investment Associate, Putnam Investments\nTarik Emara - Vice President of Private Equity, Citi\nAnnemarie Murphy - Assistant Vice President, Boston Capital"
        },
        {
          time: "8:15 PM",
          activity: "Networking Session",
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
          time: "9:30 AM",
          activity: "Welcome to CAIS 2017",
          speaker: "Cole Weppner - Co-President, CAIS"
        },
        {
          time: "9:40 AM",
          activity: "Frontier Markets",
          speaker: "Asha Mehta - Portfolio Manager, Acadian Asset Management"
        },
        {
          time: "10:15 AM",
          activity: "Conference Keynotes - Different Perspectives in Private Equity\nModerated by Nicole Boyson",
          speaker: "Henry Nasella - Partner, LNK Partners\nTed English - Executive Chairman, Bob's Discount Furniture"
        },
        {
          time: "11:15 AM",
          activity: "Coffee Break",
          speaker: ""
        },
        {
          time: "11:30 AM",
          activity: "Investing in Sustainability\nModerated by Mark Bernfeld",
          speaker: "Alan McKim - Chairman, CEO & President, Clean Harbors Inc.\nNicholas Sammut - Investment Professional, Generate Capital\nDerek Lister - M&A Analyst, Harvard Management Company"
        },
        {
          time: "12:30 PM",
          activity: "Partner-Track in Venture Capital\nModerated by Dan Gregory",
          speaker: "Richard Dulude - Principal & Investment Manager, _Underscore.VC\nAndy Lefkarites - Senior Associate, North Bridge Growth Equity\nJuan Leung Li - Senior Associate, General Catalyst Partners\nParul Singh - Principal, Founder Collective"
        },
        {
          time: "1:30 PM",
          activity: "Lunch",
          speaker: ""
        },
        {
          time: "2:00 PM",
          activity: "Merger Arbitrage",
          speaker: "Sam Klar - Portfolio Manager, GMO"
        },
        {
          time: "2:35 PM",
          activity: "Turnaround Management\nModerated by Harlan Platt",
          speaker: "Jacen Dinoff - Co-Founder & CEO, KCP Advisory Group\nBarry Green - Founding Partner, HunterPoint LLC\nJohn Loughnane - Partner, Nutter McClennen & Fish"
        },
        {
          time: "3:20 PM",
          activity: "CAIS Closing Remarks",
          speaker: "Lauren Tawfik - Co-President, CAIS"
        },
        {
          time: "3:30 PM",
          activity: "Networking",
          speaker: ""
        }
      ];

      $scope.faqs = [
        {
          question: "Who can attend?",
          answer: "CAIS 2018 is open to anyone interested in learning more about alternative investments, regardless of university or professional affiliation."
        },
        {
          question: "What's the cost?",
          answer: "CAIS 2018 will employ a variable cost structure. An early bird special will be available until Friday, March 24. These tickets will cost $20 each, and will grant the attendee access to Alumni Night and the Conference. Beginning Saturday, March 25, each ticket will cost $30, and will grant the attendee access to Alumni Night and the Conference. The registration fee includes breakfast and lunch at the Conference on April 14."
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
          answer: "As a general practice, we do not invite press to our conference events. CAIS 2018 will operate under Chatham House Rules in order to preserve the substance of the conference. Chatham House Rules are defined as a meeting where participants are free to use the information received, but neither the identity nor the affiliation of the speakers, nor that of any participant, may be revealed."
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
          name: "Cole Weppner",
          img: "/public/assets/img/team/coleweppner.jpg",
          linkedin: "https://www.linkedin.com/in/cole-weppner-a1b59599",
    title: "Co-President"
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
           name: "Lauren Tawfik",
           img: "/public/assets/img/team/laurentawfik.jpg",
           linkedin: "https://www.linkedin.com/in/lauren-tawfik-a93a48111?authType=name&authToken=jiE_&trk=prof-sb-browse_map-name"
         },
         {
           name: "Michael Counihan",
           img: "/public/assets/img/advisory/michaelcounihan.jpg",
           linkedin: "https://www.linkedin.com/in/michaelbcounihan/"
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

       var pressImgRoot = "/public/assets/img/press/";

       $scope.press = [
         {
           link: "http://www.businesswire.com/news/home/20170320005109/en/Northeastern-University-Host-5th-Annual-Collegiate-Alternative",
           img: pressImgRoot + "businesswire.jpg",
           paddingTop: false,
           extraPadding: false
         },
         {
           link: "https://sg.finance.yahoo.com/news/northeastern-university-host-5th-annual-110000963.html",
           img: pressImgRoot + "yahoofinance.png",
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
        },
        {
            name: "BackBay Communications",
            img: imgRoot + "bbc.jpg",
            title: "Media Sponsor",
            link: "http://www.backbaycommunications.com/"
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
        'members': [
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
