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
                name: "Bob Davis",
                img: "/public/assets/img/speakers/headshots/bobdavis.png",
                topic: "A Partner's Perspective in Venture Capital",
                year: "",
                title: "Partner",
                company: "Highland Capital Partners",
                keynote: true,
                bioParagraphs: ["Bob is a General Partner at Highland focusing primarily on digital media and has been with our team since 2001. He currently represents Highland with ALOHA, Beeswax, FRESHLY, Handy, Harry’s, Lovepop and SessionM. Bob previously served on the boards of Bullhorn (acquired by Vista Equity Partners), Fastclick (Nasdaq: FSTC), Going (acquired by AOL), Name Media (acquired by Endurance International Group), Navic (acquired by MSFT), nuTonomy (acquired by Delphi Automotive PLC), Pixable (acquired by SingTel), Quattro (acquired by Apple), Quigo (acquired by AOL) and Turbine (acquired by Warner Bros.)",
                    "Bob is the best-selling author of \"Speed is Life: Street Smart Lessons from the Front Lines of Business (Currency).\"",
                    "Prior to joining Highland, Bob served as the Chief Executive Officer of Terra Lycos (TRLY) formed in October 2000 with the $5.5 billion acquisition of Lycos by Telefonica’s Terra Networks of Spain. Previously, Bob was the Founder of Lycos, Inc. (LCOS) and served as its President and Chief Executive Officer since its inception in 1995 where he led Lycos from a start-up with $2 million in venture capital funding to become the most visited online destination in the world. Under his leadership, Lycos jumped from the fastest IPO in Nasdaq history, a mere nine months from inception to offering, exceeding Wall Street estimates for 22 consecutive quarters, and grew to a global media entity",
                    "Bob has also served on the boards of several public and private sector companies including John Hancock (JHFS), Ticketmaster (TCMS), Terra Lycos (TRLY), Lycos (LCOS) and Lycos Europe (LCY). He serves on the Board of Advisors for the Boston College Carroll School of Management, the Board of Governors for the CEO Club of Boston, the Chairman’s Council for Boston’s Children’s Hospital and is currently the President of The Rivers School Board of Trustees.",
                    "Bob has advised former President Clinton on matters relating to internet commerce and regulation and has addressed Congress, The United Nations, The National Press Corps and the U.S. Council of Foreign Relations on similar matters.",
                    "Bob graduated summa cum laude from Northeastern University, where he earned a B.S. in Business Administration. He holds an M.B.A. from Babson College, an Honorary Doctorate of Commercial Sciences from Bentley College, and an Honorary Doctorate from Northeastern University.",
                    "Bob has been inducted into the Academy of Distinguished Entrepreneurs and received the Massachusetts Interactive Media Council’s Lifetime Achievement Award."
                  ]
              }
            ]
        },
        {
          'category': 'Alumni Night Keynote',
          'members': [
            {
              name: "Gerry Coughlin",
              img: "/public/assets/img/speakers/headshots/gerrycoughlin.png",
              topic: "",
              year: "",
              title: "Managing Partner",
              company: "Oakpoint Advisors",
              keynote: true,
              modalShown: false,
              bioParagraphs: ["Gerry is founder and Managing Partner of Oakpoint Advisors. He is responsible for business development and manages Oakpoint’s strategic GP relationships. As the head of Oakpoint’s Capital Team, Gerry manages the firm’s institutional capital marketing business and oversees all aspects of capital formation.",
                "Gerry was formerly the President of Vinik Asset Management, a multi-billion dollar equity long/short fund. In that capacity, Gerry was charged with restructuring the entire infrastructure of Vinik Asset Management and ensuring the firm met all standards of \"best practices\". He was directly responsible for Finance, Marketing, Operations, Trading and Technology, as well as being one of five members of the Management Committee.",
                "Gerry spent 20 years of his career at Morgan Stanley. He joined Morgan Stanley in 1989 in the Equity Controllers group, working in New York, Tokyo, Singapore and Hong Kong. He established Morgan Stanley's equity trading and sales trading for Southeast Asia in Singapore, before moving to Hong Kong in 1999 to run regional sales trading, and ultimately assuming responsibility for Asia distribution globally. Gerry returned to New York in 2004 as a member of the Prime Brokerage Executive Committee, where he assumed responsibility for Capital Introductions and Business Consulting. In 2006, Gerry was named Global Head of Sales, where he was responsible for overall coverage of the firm's prime brokerage clients, as well as any new business.",
                "He holds a BS in Finance with honors from Northeastern University."
            ]
            }
          ]
      },
      {
        'category': 'Women in Alternatives',
        'members': [
          {
            name: "Robin Devereux",
            img: "/public/assets/img/speakers/headshots/robindevereux.png",
            topic: "",
            year: "",
            title: "CFO",
            company: "Summit Partners",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Robin joined Summit Partners in 2000. Prior to Summit, she worked for National Development, Property Capital Trust, R.M. Bradley & Co. and Deloitte & Touche.",
              "Based in Summit’s Boston office, Robin is the firm’s Chief Financial Officer and Chief Compliance Officer.",
              "She holds a BS in accounting from Northeastern University and is a CPA (expired)."
            ]
          },
          {
            name: "Whitney Kelley",
            img: "/public/assets/img/speakers/headshots/whitneykelly.jpg",
            topic: "",
            year: "",
            title: "Vice President",
            company: "Berkshire Partners",
            keynote: false,
            modalShown: false,
            bioParagraphs: []
          },
          {
            name: "Laurie Gormley",
            img: "/public/assets/img/speakers/headshots/lauriegormley.png",
            topic: "",
            year: "",
            title: "Portfolio Manager",
            company: "Adage Capital Management",
            keynote: false,
            modalShown: false,
            bioParagraphs: []
          },
          {
            name: "Jess Yuan",
            img: "/public/assets/img/speakers/headshots/jessyuan.jpeg",
            topic: "",
            year: "",
            title: "Associate",
            company: "J.W. Childs Associates",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Ms. Yuan joined J.W. Childs Associates in July 2016. Previously, she was an Investment Banking Analyst at Deloitte Corporate Finance (formerly McColl Partners). Her current portfolio company involvement include Honors Holdings, Kosta Browne and Comoto Holdings, the parent company of Cycle Gear and RevZilla. Ms. Yuan graduated with distinction from the University of Virginia, where she received a B.S. in Commerce with concentrations in Finance and Accounting."
            ]
          }
        ]
      },
      {
        'category': 'Investment Banking to Private Equity',
        'members': [
          {
            name: "Caitlin Vorlicek",
            img: "/public/assets/img/speakers/headshots/caitlinvorlicek.png",
            topic: "",
            year: "",
            title: "Associate",
            company: "Summit Partners",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Caitlin focuses primarily on the technology sector.",
              "Prior to Summit, Caitlin worked as an analyst in the Technology, Media, & Telecom Group at Harris Williams & Co. Caitlin holds a BA in economics, cum laude, from Colby College."
            ]
          },
          {
            name: "Forrest Richmond",
            img: "/public/assets/img/speakers/headshots/forestrichmond.png",
            topic: "",
            year: "",
            title: "Associate",
            company: "HarbourVest Partners",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Forrest Richmond joined HarbourVest in 2017 and focuses on analyzing, structuring, and monitoring secondary private equity opportunities, including traditional and complex transactions.",
              "Forrest joined the Firm from Bank of America Merrill Lynch in Palo Alto, where he was an analyst in the Technology Group focusing on mergers and acquisitions and financing transactions in Internet, software, hardware, and semiconductor sectors. He began his career as an analyst in the Global Loan Products team at Bank of America Merrill Lynch in New York.",
              "Forrest received a BS (with university honors) in Business Administration with a concentration in Finance from Carnegie Mellon University in 2013."
            ]
          },
          {
            name: "Ben Fischberg",
            img: "/public/assets/img/speakers/headshots/benfischberg.png",
            topic: "",
            year: "",
            title: "Associate",
            company: "Guidepost Growth Equity",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Ben Fischberg joined Guidepost Growth Equity as an Associate in 2017.",
              "Previously, Ben was a member of Bank of America Merrill Lynch’s M&A team in Palo Alto, where he advised clients within the software, internet, hardware and technology-enabled services sectors.",
              "Ben graduated from Williams College with a B.A. in Economics and Political Science and ran on the Varsity cross country team."
            ]
          },
          {
            name: "Nicolas Wright",
            img: "/public/assets/img/speakers/headshots/nicolaswright.png",
            topic: "",
            year: "",
            title: "Associate",
            company: "3L Capital",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Nick currently works at 3L Capital, a technology, media and consumer fund based in NYC & LA. 3L is focused on expansion capital, seeking to invest in transformational business models driven by rapidly evolving demands and expectations of consumers and businesses.",
              "Previously, Nick worked at Morgan Stanley in the Media and Communications group and graduated from Northeastern University. "
            ]
          }

        ]
      },
      {
        'category': 'Blockchain: What Can the Future Hold?',
        'members': [
          {
            name: "Abhi Shelat",
            img: "/public/assets/img/speakers/headshots/abhishelat.png",
            topic: "",
            year: "",
            title: "Associate Professor",
            company: "Northeastern University",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Abhi Shelat is an associate professor at Northeastern University’s College of Computer and Information Science. Previously he served as an associate professor at the University of Virginia’s computer science department.",
              "Abhi earned a BA from Harvard in 1997, before moving to San Francisco to work at a startup. He earned his PhD in cryptography from MIT in 2005 and joined the Zurich IBM Research Lab shortly after. He then joined the computer science department at the University of Virginia in 2007. He was promoted and tenured from an assistant professor to an associate professor in 2013.",
              "Abhi has received the NSF CAREER award, Microsoft Faculty Fellowship Award, the FEST fellowship award, an Amazon Research award, an SAIC research award, a Jacobs Future of Money Workshop research prize, the Google Faculty Research Award, and an ACM UVA-chapter Professor of the Year award. He is also co-founder of a software company, Arqspin, in Charlottesville that now operates itself.",
              "His research interests lie in cryptography and applied security. He focused on secure computation protocols, which are methods for mutually distrusting parties, each with private inputs, to jointly compute a function while ensuring maximal privacy and correctness."
          ]
        },
          {
            name: "Dave Balter",
            img: "/public/assets/img/speakers/headshots/davebalter.jpeg",
            topic: "",
            year: "",
            title: "Partner",
            company: "Flipside Crypto",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Dave has been active in the cryptocurrency space for years, and has learned invaluable lessons from not buying during crypto winters and at least one wallet loss.",
              "Previously, Dave was the CEO and co-founder of Smarterer, a machine-learning skills assessment company acquired by Pluralsight in 2014.  Post-acquisition, Dave was the Head of Transactions at Pluralsight, while also serving as a Board Observer.  Before co-founding Smarterer in 2010, Dave founded and was CEO of BzzAgent, a social media marketing company, which was acquired by dunnhumby, a division of Tesco (PLC) in 2011.  From 2011-2014 Dave sat on the Global Executive Team at dunnhumby, where he led all venture investments and M&A activity.",
              "Dave was the Chairman of Mylestone, a company that assigns a personal biographer to your digital photo library, to generate your life story, which he founded in early 2016.",
              "Dave shares his drive for technology with his local Boston community as an investor and advisor to dozens of startups, including acting as Venture Partner Emeritus in seed-stage investment firm Boston Seed Capital.  Personal investments include Promoboxx, Help Scout, Kettle & Fire, Turo, NRG, AdHawk, and Fortified Bike.  Dave sits on the Board of Directors of tech-enabled startups Grapevine, and Kindara, and is Vice Chairman of Boch Center for the Performing Arts, a nonprofit steward of iconic venues, providing arts, entertainment, cultural, and educational experiences to the greater Boston community."
            ]
          },
          {
            name: "Russ Wilcox",
            img: "/public/assets/img/speakers/headshots/russwilcox.jpeg",
            topic: "",
            year: "",
            title: "Partner",
            company: "Pillar VC",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Russ Wilcox is a partner at Pillar. He has 20 years of start-up operating experience, having founded three companies and raised $150 million in private capital. At E Ink Corporation, he commercialized electronic paper invented at the MIT Media Lab. E Ink conducted materials research, filed patents, scaled a factory, and shipped tens of millions of displays for the Amazon Kindle and other devices. E Ink reached a $200 million run rate with strong profits leading to its sale in 2009. To date consumers have purchased more than $10 billion of E Ink-related devices and content.",
              "Following E Ink, Russ co-founded Transatomic Power, advancing a source of clean energy; and Piper Therapeutics, conducting pre-clinical studies for an immuno-oncology drug.",
              "Russ actively supports the Boston entrepreneurial community. Since 2012 he has volunteered as an Entrepreneur-in-Residence for the Harvard Business School Rock Center and counseled hundreds of students on achieving their start-up goals. He sits on the Harvard Physical Sciences Accelerator Review Board and was a Board Director for Harvest Automation, a venture-backed developer of agricultural robots. He has been an angel investor in several start-ups, including Disruptor Beam, PowerInbox, Calimmune, Gen9, DriveFactor, and Camino Financial. Russ began his startup career as a product manager at PureSpeech, a speech recognition company co-founded by Jamie Goldstein.",
              "Russ graduated with honors in Applied Mathematics from Harvard College and worked in Boston and Paris as a management consultant for Oliver Wyman. He was a Baker Scholar at the Harvard Business School. He is an Ernst & Young New England Entrepreneur of the Year and a Mass High Tech All-Star. He holds thirty-three issued U.S. patents."
            ]
          },
          {
            name: "Jim Cunha",
            img: "/public/assets/img/speakers/headshots/jimcunha.jpeg",
            topic: "",
            year: "",
            title: "SVP",
            company: "Federal Reserve Bank of Boston",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "As Senior Vice President of Treasury and Financial Services at the Federal Reserve Bank of Boston, Jim Cunha leads the Bank's work on behalf the Bank's cash operation, wholesale payments, mobile and digital payments.",
              "Cunha is spearheading the Boston Fed's efforts to study, explore, and engage with distributed ledger technology to determine applicability, potential benefits, and risks for internal and external uses. He is focused on the evolution of the technology and its potential impact on the financial services sector.",
              "Cunha is also responsible for two U.S. Treasury businesses supported by the Boston Fed: Stored Value Card, which is a chip based card prepaid used world-wide by the U.S. military; and Invoice Processing Platform, a web based portal to automate purchase order and invoice processing for Federal agencies and their vendors.",
              "Jim has worked at the Boston Fed since 1984. Prior to that, he worked at Fleet National Bank.",
              "He has a Bachelor of Science in accounting and philosophy from Northeastern University and a Bachelor of Arts in computer science from Rhode Island College. He is chairman of the board of Children's Friend and Family Services of Salem, Mass. and an ex-officio member of the board of directors at New England ACH Association (NEACH), a payments education non-profit."
            ]
          },
          {
            name: "Jeremy Kauffman",
            img: "/public/assets/img/speakers/headshots/jeremykauffman.jpeg",
            topic: "",
            year: "",
            title: "Founder & CEO",
            company: "LBRY",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Jeremy is the founder and chief executive officer at LBRY a company he started because he fell in love with the idea of shared, global content registry that is owned and controlled by no one. Unsurprisingly, he is a longtime supporter of decentralized technology and freedom of information. LBRY is first and foremost a new protocol that allows anyone to build apps that interact with digital content on the LBRY network.  LBRY’s underlying technology is blockchain.",
              "Prior to LBRY, Jeremy founded TopScore, a startup that processes millions of dollars monthly in event and activity registrations. Before TopScore, he founded Flickswitch which helps companies build the internet of things focused on SIM card management.",
              "He attended Rensselaer Polytechnic Institute, where he received degrees in physics and computer science."
            ]
          }
        ]
      },
      {
        'category': 'Innovators in Venture',
        'members': [
          {
            name: "Cory Bolotsky",
            img: "/public/assets/img/speakers/headshots/corybolotsky.png",
            topic: "",
            year: "",
            title: "Head of Platform & Community",
            company: "_underscore.vc",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Cory is Underscore VC’s head of Platform and Community and manages all aspects of the Core Community.",
              "Prior to Underscore, Cory was the Director of Global Operations at MassChallenge, known as the most startup-friendly accelerator, where he helped to build and scale the community and operational infrastructure to support over 800 startups during his tenure.  Cory was also instrumental in co-founding MassChallenge Israel and launched MassChallenge in Mexico City. Prior to MassChallenge, Cory was the Director of Startup Massachusetts, part of the Obama Administration’s Startup America Partnership. Within Startup Massachusetts, Cory launched a program called Startup Summer that provided the region’s college students with startup internship opportunities.",
              "Cory graduated from Northeastern University with a BSBA in Entrepreneurship."
          ]
        },
          {
            name: "Rob McCall",
            img: "/public/assets/img/speakers/headshots/robmccall.png",
            topic: "",
            year: "",
            title: "Associate",
            company: ".406 Ventures",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Rob joined .406 Ventures in 2015, supporting the team in all aspects of investing and portfolio management. He brings a diversified operational background to the firm, with deep experience in sales and account management.",
              "At .406, Rob spends his time working across all of .406’s investment verticals and strategies, as well as running the Student Fellows program with partner Graham Brooks.",
              "Prior to joining .406, Rob was an inside account manager at EMC covering the great state of Texas. At EMC, he worked with his customers and their IT departments to craft forward-thinking strategies surrounding their data storage, backup, and disaster recovery environments. Although a great experience, Rob was happy to leave the corporate world and return to the entrepreneurial scene in Boston.",
              "Before EMC, Rob spent over 3 years working in a variety of operational roles at MineralTree, a .406 Fund I portfolio company. While the company was in stealth mode and Rob was in college, he joined as a summer intern focused on market research in the financial and SMB spaces. Immediately drawn to the energy, culture, and pace of the startup world, Rob graduated a semester early from college to start working full-time. As a former customer support representative, sales engineer, project manager, customer success representative, inside sales representative, sales operations lead, account manager, and just about any other title he could think up for the day’s activities, Rob knows the hard-work and drive required to bring a start-up to life.",
              "Rob received his BA in Psychology from Duke University, with minors in Economics as well as Environmental Science and Policy."
            ]
          },
          {
            name: "Ken Cowan",
            img: "/public/assets/img/speakers/headshots/kencowan.jpeg",
            topic: "",
            year: "",
            title: "Associate",
            company: "OpenView Partners",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Ken is an Associate at OpenView where he works to find great entrepreneurs building generational software companies.",
              "Prior to joining OpenView, Ken helped build early-stage tech companies across the US and in Europe, working with companies such as Tagetik, OutlookSoft, Vcommerce, OpenBox Technologies, RMS and modomodo. Ken was also CEO of The Stables, a services company in Scottsdale, AZ, and a Consultant at FTI Consulting in New York City."
            ]
          },
          {
            name: "Monique Guimond",
            img: "/public/assets/img/speakers/headshots/moniqueguimond.jpg",
            topic: "",
            year: "",
            title: "Associate",
            company: "The Engine",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Monique received her MBA from MIT Sloan in the Spring of 2017, where she was involved with the entrepreneurial ecosystem as the Managing Director of the MIT $100K Competition. Prior to Sloan, she was one of the first employees at a social enterprise specializing in healthcare design, MASS Design Group, where she built out operations and expanded the business model abroad. Monique is working on founder programs, investments, and the overall business model of The Engine’s space"
            ]
          }
        ]
      },
      {
        'category': 'Recent Northeastern Alumni',
        'members': [
          {
            name: "Kelly Wallace",
            img: "/public/assets/img/speakers/headshots/kellywallace.png",
            topic: "",
            year: "",
            title: "Associate",
            company: "Spring Lake Equity Partners",
            keynote: false,
            modalShown: false,
            bioParagraphs: [
              "Kelly joined Spring Lake Equity Partners in 2015.",
            "She is involved in prospecting and evaluating new investment opportunities for the firm. Prior to joining Spring Lake Equity Partners, Kelly worked for Westfield Capital Management and interned at UBS.",
            "Kelly holds a Master of Science in Leadership and a Bachelor of Science in Social Science and Humanities from Northeastern University."
          ]
          },
          {
            name: "William Pearce",
            img: "/public/assets/img/speakers/headshots/williampearce.png",
            topic: "",
            year: "",
            title: "Analyst",
            company: "Acadian Asset Management",
            bioParagraphs: [
              "William joined Acadian Asset Management in 2017 as trader and analyst in the Portfolio Construction Group. He is responsible for the daily portfolio construction, implementation and trading of Acadian’s global quantitative investment strategies. Prior to joining Acadian, William was a trader at PanAgora Asset Management, where he was responsible for research and execution of global trading strategies.",
              "William holds an M.B.A from the D’Amore-Mckim School of Business at Northeastern University and a BS in Business from Salve Regina University. Additionally, William is a CFA charterholder and a member of CFA Society Boston."
            ],
            keynote: false,
            modalShown: false
          },
          {
            name: "Andrew Hinker",
            img: "/public/assets/img/speakers/headshots/andrewhinker.png",
            topic: "",
            year: "",
            title: "Pricing Analyst",
            company: "The Baupost Group",
            bioParagraphs: [
              "Andrew joined Baupost in June of 2016. His main responsibilities include the valuation of different asset classes of public securities and of select private equity investments. Before Baupost he worked as a pricing analyst at the Bank of New York Mellon. He completed 3 co-ops at Liberty Mutual, Hercules Technology Growth Capital, and Spinnaker Capital.",
              "Andrew graduated from Northeastern University in 2014 with a BS in Business Administration with dual concentrations in Finance and Accounting and a minor in Economics."
            ],
            keynote: false,
            modalShown: false
          },
          {
            name: "Emma Odell",
            img: "/public/assets/img/speakers/headshots/emmaodell.png",
            topic: "",
            year: "",
            title: "Director of Analytics",
            company: "Matheys Lane Capital Management",
            bioParagraphs: [
              ""
            ],
            keynote: false,
            modalShown: false
          }
        ]
      }
    ];

      $scope.pastSpeakers = [
          {
            name: "Henry Nasella",
            img: "/public/assets/img/speakers/headshots/henrynasella.jpeg",
            topic: "Different Perspectives in Private Equity",
            year: "2017",
            title: "Partner",
            company: "LNK Partners",
          },
          {
            name: "Ted English",
            img: "/public/assets/img/speakers/headshots/tedenglish.jpg",
            topic: "Different Perspectives in Private Equity",
            year: "2017",
            title: "Executive Chairman",
            company: "Bob's Discount Furniture",
          },
          {
            name: "Fran Janis",
            img: "/public/assets/img/speakers/headshots/franjanis.jpg",
            topic: "",
            year: "2017",
            title: "Founding Partner",
            company: "Pomona Capital",
          },
          {
            name: "Richard D'Amore",
            isModerator: true,
            img: "/public/assets/img/speakers/headshots/richarddamore.jpg",
            topic: "",
            year: "2017",
            title: "Partner",
            company: "North Bridge Venture Partners",
          },
          {
            name: "Alan McKim",
            img: "/public/assets/img/speakers/headshots/alanmckim.jpg",
            topic: "Investing in Sustainability",
            year: "2017",
            title: "Chairman, CEO & President",
            company: "Clean Harbors Inc."
          },
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
          time: "5:30 PM",
          activity: "Registration",
          speaker: ""
        },
        {
          time: "6 PM",
          activity: "Welcome",
          speaker: "Nicholas Lara - Founder and Chairman of CAIS\nRaj Echambadi - Dean, D'Amore-McKim School of Business"
        },

        {
          time: "6:15 PM",
          activity: "Hedge Funds: A Misnomer",
          speaker: "Gerry Coughlin - Managing Partner, Oakpoint Advisors"
        },
        {
          time: "7:15 PM",
          activity: "DMSB Recent Alumni",
          speaker: "\nElliot Sherman* - Professor, Northeastern University\nKelly Wallace - Analyst, Spring Lake Equity Partners\nWilliam Pearce - Analyst, Acadian Asset Management"
        },
        {
          time: "8:30 PM",
          activity: "Networking Session",
          speaker: ""
        }
      ];

      $scope.schedule.saturday = [
        {
          time: "8:30 AM",
          activity: "Registration & Breakfast",
          speaker: ""
        },
        {
          time: "9:00 AM",
          activity: "Welcome",
          speaker: "Colby Gilbert - Co-President, CAIS"
        },
        {
          time: "9:15 AM",
          activity: "Investment Banking to Private Equity",
          speaker: "Mark Bernfeld* - Professor, Northeastern University\nCaitlin Vorlicek - Associate, Summit Partners\nBen Fischberg - Associate, Guidepost\nForrest Richmond - Associate, HarbourVest\nNicolas Wright - Associate, 3L Capital"
        },
        {
          time: "10:15 AM",
          activity: "Women in Alternatives",
          speaker: "Robin Devereux* - CFO, Summit Partners\nLaurie Gormley - Portfolio Manager, Adage Capital\nJess Yuan - Associate, J.W. Childs Associates\nWhitney Kelly - Vice President, Berkshire Partners"
        },
        {
          time: "11:15 AM",
          activity: "A Partner's Perspective in Venture Capital",
          speaker: "Bob Davis - Partner, Highland Capital Partners"
        },
        {
          time: "12 PM",
          activity: "Keynote Address",
          speaker: ""
        },
        {
          time: "1 PM",
          activity: "Lunch",
          speaker: ""
        },
        {
          time: "1:45 PM",
          activity: "Blockchain: What Can the Future Hold?",
          speaker: "Abhi Shellat* - Professor, Northeastern University\nDave Balter - Partner, Flipside Crypto\nRuss Wilcox - Partner, Pillar VC\nJim Cunha - SVP, Federal Reserve Bank of Boston\nJeremy Kauffman - Founder & CEO, LBRY"
        },
        {
          time: "2:45 PM",
          activity: "Innovators in Venture",
          speaker: "Cory Bolotsky*, Head of Platform, Underscore VC\nRob McCall - Associate, .406 Ventures\nKen Cowan - Associate, OpenView Venture Partners\nMonique Guimond - Associate, The Engine"
        },
        {
          time: "3:45 PM",
          activity: "Closing Remarks",
          speaker: "Mike Watts - Co-President, CAIS"
        },
        {
          time: "4 PM",
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
          answer: "CAIS 2018 will employ a variable cost structure. An early bird special will be available until Monday, April 2nd. These tickets will cost $30 each, and will grant the attendee access to Alumni Night and the Conference. Beginning Wednesday, April 3rd, each ticket will cost $40, and will grant the attendee access to Alumni Night and the Conference. The registration fee includes breakfast and lunch at the Conference on April 14."
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
          name: "Colby Gilbert",
          img: "/public/assets/img/team/codygilbert.png",
          linkedin: "https://www.linkedin.com/in/gilbertrichardc/",
          title: "Co-President"
        },
        {
          name: "Michael Watts",
          img: "/public/assets/img/team/michaelwatts.png",
          linkedin: "https://www.linkedin.com/in/michael-watts-86695bbb/",
          title: "Co-President"
        },
        {
          name: "Dan McLaughlin",
          img: "/public/assets/img/team/danmclaughlin.png",
          linkedin: "https://www.linkedin.com/in/daniel-mclaughlin-b6060a110/",
          title: ""
        },
        {
          name: "Helen Wang",
          img: "/public/assets/img/team/helenwang.jpg",
          linkedin: "https://www.linkedin.com/in/hwang18",
          title: ""
        },
        {
          name: "Andrew Eckel",
          img: "/public/assets/img/team/andreweckel.png",
          linkedin: "https://www.linkedin.com/in/andrew-eckel-77199684/",
          title: ""
        },
        {
          name: "Jeff O'Connor",
          img: "/public/assets/img/team/jeffoconnor.jpeg",
          linkedin: "https://www.linkedin.com/in/jeff-o-connor-27ab618a/",
          title: ""
        },
        {
          name: "Alyssa Wren",
          img: "/public/assets/img/team/alyssawren.png",
          linkedin: "https://www.linkedin.com/in/alyssa-wren-736075b4/",
          title: ""
        },
        {
          name: "James Wong",
          img: "/public/assets/img/team/jameswong.png",
          linkedin: "https://www.linkedin.com/in/james-wong-588a15138/",
          title: ""
        },
        {
          name: "Matt McLaughlin",
          img: "/public/assets/img/team/mattmclaughlin.png",
          linkedin: "https://www.linkedin.com/in/mattfmclaughlin/",
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
           name: "Kimberly Krzemien",
           img: "/public/assets/img/advisory/kimberlykrzemien.png",
           linkedin: "https://www.linkedin.com/in/kimberlykrzemien/"
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
                  name: "General Catalyst",
                  img: imgRoot + "generalcatalyst.png",
                  title: "Gold Sponsor",
                  link: "http://generalcatalyst.com/"
                },
                {
                  name: "UBS",
                  img: imgRoot + "ubs.png",
                  title: "Gold Sponsor",
                  link: "https://www.ubs.com/us/en.html"
                }]
      },
      {
        'category': 'Silver Sponsors',
        'members': [
          {
            name: "EY",
            img: imgRoot + "ey.png",
            title: "Silver Sponsor",
            link: ""
          },
                {
                  name: "CFA Society Boston",
                  img: imgRoot + "cfaboston.jpg",
                  title: "Silver Sponsor",
                  link: "https://www.cfaboston.org/"
                },
                {
                          name: "CAIA",
                          img: imgRoot + "caia.jpg",
                          title: "Silver Sponsor",
                          link: "https://www.caia.org/"
                        }
                      ]
      },
      {
        'category': 'Media & Data Sponsors',
        'members': [
              {
                name: "Wall Street Oasis",
                img: imgRoot + 'wso.png',
                hasFacts: true,
                link: "http://www.wallstreetoasis.com/"
              },
              {
                name: 'Pitchbook',
                img: imgRoot + 'pitchbook.jpg',
                link: "http://pitchbook.com/"
              }]
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
