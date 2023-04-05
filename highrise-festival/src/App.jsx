import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";

import "./index.css";

// CONSTANTS
import Page404 from "./pages/ErrorPages/Page404";

import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import Newsletter2 from "./components/form/Newsletter/Newsletter2";

// FOOTER LINKS
import Privacy from "./pages/Privacy Statement/Privacy";

// DATA

import FAQData from "./data/FAQPage.json";

// IMAGES

// BACKGROUND BORDERS
import borderRight from "./assets/images/borders/highrise-border-right.webp";
import borderLeft from "./assets/images/borders/highrise-border-left.webp";
import borderRightBlurred from "./assets/images/borders/highrise-border-right-blurred.webp";
import borderLeftBlurred from "./assets/images/borders/highrise-border-left-blurred.webp";

// PROGRAMME PHOTOGRID IMAGES
import LineupTile from "./assets/images/Programme/Lineup/LineupTile.png";
import ChaiWallahTile from "./assets/images/Programme/Venues/ChaiWallahTile.png";
import SinaiTile from "./assets/images/Programme/Soundsystems/SinaiTile.jpg";
// hottub

// INFO PHOTOGRID IMAGES

import lake from "./assets/images/Info/highrise-lake1.jpeg";
import AccomTile from "./assets/images/Info/Lotus-interior.jpeg";

// TRAVEL IMAGES
import campervan1 from "./assets/images/Highrise Festival Website/campervan.jpg";
import bike from "./assets/images/Highrise Festival Website/bike.jpg";
import coach from "./assets/images/Highrise Festival Website/coach.jpg";
import train from "./assets/images/Highrise Festival Website/train.jpg";
import cargirls from "./assets/images/Highrise Festival Website/car-girls.jpg";

// ACCOMODATION IMAGES
import girlCamping from "./assets/images/Highrise Festival Website/girl-camping.jpg";
import Belltent from "./assets/images/Info/Accomodation/highrise-bell-tent.png";
import Lotus from "./assets/images/Info/Accomodation/highrise-lotus-tent.png";
import Emperor2 from "./assets/images/Info/Accomodation/highrise-emperor-tent2.png";

// OLD ACCOM IMAGES
// import belltent1 from "./assets/images/Highrise Festival Website/bell-tent-night.jpg";
// import belltent2 from "./assets/images/Highrise Festival Website/bell-tent1.webp";
// import airstream1 from "./assets/images/Highrise Festival Website/airstream1.webp";
// import airstream2 from "./assets/images/Highrise Festival Website/airstream2.webp";
// import airstream3 from "./assets/images/Highrise Festival Website/airstream3.webp";
// import bwCamping from "./assets/images/Highrise Festival Website/bw-camping.webp";

// ETHOS IMAGES
import GoodVibes from "./assets/images/Ethos/good-vibes.jpg";
import EnvironmentTile from "./assets/images/Ethos/environment-trees.jpg";
import ReuseCups from "./assets/images/Ethos/reuse-plastic.jpg";
// GET INVOLVED IMAGES
import hands from "./assets/images/Highrise Festival Website/hands.jpg";

// ACCESSIBILITY IMAGES
import mcFats from "./assets/images/Highrise Festival Website/mcFats.jpeg";

// SOUNDSYSTEM IMAGES

import AbaShanti from "./assets/images/Programme/Soundsystems/AbaShanti.jpg";
import Danley from "./assets/images/Programme/Soundsystems/Danley.jpeg";
import Felt from "./assets/images/Programme/Soundsystems/Felt.jpg";
import RCASound from "./assets/images/Programme/Soundsystems/RCA.jpg";
import ScotlandYard from "./assets/images/Programme/Soundsystems/ScotlandYardSound.jpeg";
import Void from "./assets/images/Programme/Soundsystems/Void.jpeg";
import WashingMachine from "./assets/images/Programme/Soundsystems/WashingMachine.jpg";
import Electrikal from "./assets/images/Highrise Festival Website/ELECTRIKAL.jpg";
import Iration from "./assets/images/Highrise Festival Website/IRATION-STEPPAS.jpg";
import FirmlyRooted1 from "./assets/images/Highrise Festival Website/firmly-rooted-soundsystem1.webp";
import FirmlyRooted from "./assets/images/Highrise Festival Website/FirmlyRooted.jpg";
import Sinai from "./assets/images/Highrise Festival Website/sinai-soundsystem-crew.webp";
import Channel1 from "./assets/images/Highrise Festival Website/ChannelOne.webp";

// VENUES IMAGES
import BunkBeds from "./assets/images/Programme/Venues/BunkBeds.jpg";
import Dubtendo from "./assets/images/Programme/Venues/Dubtendo.jpeg";
import Woodland from "./assets/images/Programme/Venues/WoodlandStage.png";
import Woodland2 from "./assets/images/Programme/Venues/WoodlandStage2.png";
import Sublab from "./assets/images/Programme/Venues/Sublab.jpg";
import SmokeyTenticles from "./assets/images/Programme/Venues/smokey-tenticles.png";

// WELLNESS IMAGES
import hottub from "./assets/images/Highrise Festival Website/hot-tub.jpg";
import earth from "./assets/images/Highrise Festival Website/wellness-earth.jpg";
import water from "./assets/images/Highrise Festival Website/wellness-water.jpg";
import fire from "./assets/images/Highrise Festival Website/wellness-fire.jpg";
import air from "./assets/images/Highrise Festival Website/wellness-air.jpg";
import AnimatedRoutes from "./components/helpers/AnimatedRoutes/AnimatedRoutes";

// LineUp Data
const lineUpData = {
  lineup: [
    "ABA SHANTI-I",
    "AFRIQUOI",
    "BOKO! BOKO!",
    "MINA",
    "TASH LC",
    "JUBA",
    "BREAK",
    "BREAKAGE",
    "BRIGHTER DAYS",
    "BRYAN GEE",
    "CHAINSKA BRASSIKA",
    "CHANNEL ONE",
    "CHOPSTICK DUBPLATE",
    "CLASSIC WONDER VETERANS & SOLO BANTON",
    "COCO BRYCE",
    "DOUBLE O",
    "DUB PRINCESS & HOTSTEPPAS",
    "DUBKASM DWARDE",
    "EL-B",
    "EVA LAZARUS",
    "FACTA & K-LONE",
    "GARDNA",
    "GUTS",
    "HAMDI",
    "HOLD TIGHT RECORDS - IRATION STEPPAS",
    "IZCO",
    "J:KENZO",
    "JUBEI",
    "KOG",
    "KYRIST",
    "LIAM BAILEY",
    "LTJ BUKEN",
    "MANTRA MUNGO'S HI FI ",
    "NEFFA-T",
    "NUBIYAN TWIST",
    "OBF & CHARLIE P",
    "ONIPA",
    "PAPA NUGS",
    "RIZ LA TEEF",
    "SASHA STEPPA",
    "SCAR DUGGY",
    "SGT POKES",
    "SKEPTICAL",
    "SNAZZBACK",
    "SP:MC",
    "STAND HIGH PATROL DJ SET FT JOE YORKE",
    "SULLY",
    "THE BUSY TWIST",
    "TIM REAPER",
    "TROPICAL TEA PARTY",
    "VISAGES",
    "V.I.V.E.K",
    "WATCH THE RIDE",
    "ZION TRAIN",
  ],
};

// Programme Page
const programmeData = {
  photoGrid: [
    { image: LineupTile, label: "Line Up" },
    { image: ChaiWallahTile, label: "Venues" },
    { image: Sinai, label: "Soundsystems" },
    { image: hottub, label: "Wellness" },
  ],
};

// SoundSystem Page
const soundsystemData = {
  title: "SoundSystems",

  pageContent: {
    pageIntro: [
      "We are bringing some of the best UK soundsystems to Highrise Festival 2023.",
    ],
    cards: [
      {
        image: AbaShanti,
        color: "",
        label: "Aba Shanti-I",
        description: [
          "With over 30 years experience there is nothing quite like an Aba Shanti session, come and experience the sound of Jah Thunder & Lighting at the Teachings In Dub Arena on Friday.",
        ],
      },
      {
        image: Channel1,
        color: "",
        label: "Channel One Soundsystem",
        description: [
          "The legendary Channel One Sound System is one of the best known and most loved reggae sound systems in the UK. Find them at the Teachings In Dub Arena on Sunday.",
        ],
      },
      {
        image: Danley,
        color: "",
        label: "Danley",
        description: [
          "Provided by Reproduction in Bristol were hosting a range of Danley Sound Labs speakers which is some of the most cutting edge audio equipment on the globe right now.",
        ],
      },
      {
        image: Electrikal,
        color: "",
        label: "Elektrical Soundsystem",
        description: [
          "From Edinburgh, Scotland Electrikal Sound System is one of the UK's leading of bass music sound systems.",
        ],
      },
      {
        image: Felt,
        color: "",
        label: "Felt Soundsystem",
        description: [
          "A hand built sound system out of London, celebrating world music and sound system culture Felt will power our latin stage Candela Viva.",
        ],
      },
      {
        image: FirmlyRooted,
        color: "",
        label: "Firmly Rooted Soundsystem",
        description: [
          "Hailing from Bristol, Firmly Rooted has been making huge waves in the 140 and Roots community, they are powering the woodland stage as Firmly Rooted and also Sublab, the festivals dedicated 140 venue.",
        ],
      },
      {
        image: Iration,
        color: "",
        label: "Iration Steppas Soundsystem",
        description: [
          "The vanguard of Dub! Hailing from Leeds the Iration Steppas crew will be playing dubs in a year 300 style at the Teachings In Dub Arena on Saturday.",
        ],
      },
      {
        image: RCASound,
        color: "",
        label: "RCA Sound",
        description: [
          "Built by RC1 this active sound system will be powering the legendary Bunk Beds from HighRise Hub all the way to HighRise Festival. ",
        ],
      },
      {
        image: ScotlandYard,
        color: "",
        label: "Scotland Yard",
        description: [
          "From Scotland to Bristol this DIY sound system is fast becoming one of the most respected sounds in the UK scene and will be powering our Jungle Of Eden stage.",
        ],
      },
      {
        image: Sinai,
        color: "",
        label: "Sinai Soundsystem",
        description: [
          "From Sheffield the mighty Sinai Sound System is one of the UK's most respected sounds. Powering their own stage with takeovers from Croydub, Deep Medi & a jungle showcase.",
        ],
      },
      {
        image: Void,
        color: "",
        label: "Void Acoustics",
        description: [
          "One of the best speaker manufactures in the world, were teaming up with NSL Productions for a range of Void Acoustics speakers across the site.",
        ],
      },
      {
        image: WashingMachine,
        color: "",
        label: "Washing Machine Soundsystem",
        description: [
          "From Bristol UK, the washing Machine sound system will be powering our new Laundrette stage.",
        ],
      },
    ],
  },
};

// SoundSystem Page
const venuesData = {
  title: "Stages & Venues",

  pageContent: {
    pageIntro: [
      "We are building 20 immersive stages to host our largest line-up ever!",
      "Grange farm already has several stages that people have come to know and love over the years and we will of course be putting our own unique flavour on each of them.",
      "On top of this we will be creating many more stages and intimate venues to make sure there is always something to explore and new music to see!",
    ],
    cards: [
      {
        image: Electrikal,
        color: "",
        label: "Elektrical Soundsystem",
        description: [
          "A bass music orientated stage with daily takeovers from some of the UK's finest brands TBA.",
        ],
      },
      {
        image: Woodland,
        color: "",
        label: "Labyrinth",
        description: [
          "Deep in the woods you can find the finest Jungle & Drum & Bass powered by Danley Sound Labs.",
        ],
      },
      {
        image: Sublab,
        color: "",
        label: "Sub-Lab",
        description: [
          "A late-night venue specialising in all things 140, Dubstep and bass powered by the mighty Firmly Rooted sound system.",
        ],
      },
      {
        image: Dubtendo,
        color: "",
        label: "Dubtendo Arcane",
        description: [
          "Retro games meets 8 bit rave, an immersive micro venue from the Dubtendo crew.",
        ],
      },
      {
        image: BunkBeds,
        color: "",
        label: "Bunk Beds",
        description: [
          "The legendary silly & sweaty room from HighRise Hub makes it way across the country.",
        ],
      },
      {
        image: Woodland2,
        color: "",
        label: "Firmly Rooted",
        description: [
          "A woodland stage playing the finest in roots inspired music from across the world, from the inspiration to this generation.",
        ],
      },
      {
        image: SinaiTile,
        color: "",
        label: "Mount Sinai",
        description: [
          "An ancient temple set high on a mountain top, this bass music oriented stage will host Croydub, Deep Media and a Jungle showcase.",
        ],
      },
      {
        image: ChaiWallahTile,
        color: "",
        label: "Chai Wallah Soundsystem",
        description: [
          "Award winning touring venue Chai Wallahs will be hosting our full live bands. From Jazz to Afrobeat and Hip Hop to Reggae, these bands will keep you dancing.",
        ],
      },
      {
        image: SmokeyTenticles,
        color: "",
        label: "Smokey Tentacles",
        description: [
          "The UK festival circuits favourite chill-out lounge, cafe and shisha bar.",
        ],
      },
      {
        image: "",
        color: "",
        label: "Teachings In Dub Arena",
        description: [
          "An authentic sound system experience from the UK's leading Dub sounds.",
        ],
      },
      {
        image: "",
        color: "",
        label: "The Void",
        description: [
          "A showcase of the finest brands from around the UK with daily takeovers from Hit & Run, Gutter Funk & Lively Up.",
        ],
      },
      {
        image: "",
        color: "",
        label: "Global Gully",
        description: [
          "Where tropical grooves from around the world meets future dance music, programmed by Ru Robinson.",
        ],
      },
      {
        image: "",
        color: "",
        label: "Fungi Tavern",
        description: [
          "Enter a world of wonder with a collective of genres from the finest of UK Hip Hip to chuggy house bangers.",
        ],
      },
      {
        image: "",
        color: "",
        label: "Jungle Of Eden",
        description: [
          "An overgrown ancient ruin hosting the finest Jungle & DnB through the mighty Scotland Yard Sound System! ",
        ],
      },
      {
        image: "",
        color: "",
        label: "Candela Viva",
        description: [
          "A celebration of Latin American sounds, roots and culture powered by Felt Sound System.",
        ],
      },
      {
        image: "",
        color: "",
        label: "The Laundrette",
        description: [
          "A secret stage spinning the finest UKG, RnB and house party heaters. Come and rinse out with the Washing Machine Sound System crew.",
        ],
      },
      {
        image: "",
        color: "",
        label: "Tunnel Vision",
        description: ["An abandoned munitions factory "],
      },
      {
        image: "",
        color: "",
        label: "G Spot",
        description: [
          "A hidden pleasure spot and micro venue playing the finest UKG & House.",
        ],
      },
      {
        image: "",
        color: "",
        label: "Jungle Of Eden",
        description: [
          "An overgrown ancient ruin hosting the finest Jungle & DnB through the mighty Scotland Yard Sound System! ",
        ],
      },
    ],
  },
};

// Info Page
const infoData = {
  title: "Festival Information",
  photoGrid: [
    { image: lake, label: "Location" },
    { image: campervan1, label: "Travel" },
    { image: AccomTile, label: "Accomodation" },
    { image: mcFats, label: "Accessibility" },
  ],
};

// Ethos Page
const ethosData = {
  title: "Ethos",
  photoGrid: [
    { image: GoodVibes, label: "Our Vision" },
    { image: EnvironmentTile, label: "Environment" },
  ],
};

const visionData = {
  photoGrid: [{ image: GoodVibes, label: "" }],
  pageContent: {
    heading: "Our Vision",
    pageIntro: [
      "With over 10 years of experience in the events industry, the team behind HighRise are excited to begin a brand new chapter.",
      "We aim to bring all of our favourite things from each of the festivals we have attended over the years and fuse them together with our own unique brand to create the perfect weekend for all of you!",
      "Below are 5 of our key principles, which we believe will make it one to remember...",
    ],
    body: [
      {
        heading: "Affordable & Accessible",
        description: [
          "We are keeping the ticket price low and offering many ways to come for free via our Get Involved Scheme.",
          "You can volunteer, join the crew or even become a walkabout performer as we know not everyone can afford expensive festival tickets.",
          "We want our festival to be a place for everyone no matter your financial situation. Come and join the fun this September.",
        ],
      },
      {
        heading: "Immersive & Intimate",
        description: [
          "It's our mission to make the festival as immersive as possible with set builds, decorations and walkabout performers.",
          "We're not hosting any huge stages, instead we are building 20 immersive venues with big sounds.",
        ],
      },
      {
        heading: "Wellness & Healing",
        description: [
          "We really want you all to leave HighRise Festival feeling inspired & rejuvenated and ready to go back to the outside world feeling refreshed.",
          "To make sure you all are as healthy as possible not only are we Erving lots of delicious veggie & vegan food we are also offering a huge range of wellness and healing.",
          "Please see the Wellness & Healing page in the programme for more info.",
        ],
      },
      {
        heading: "Welfare & Safety",
        description: [
          "It means the world to use that you are consindering coming to party with us in September and for those that attend we want to make sure you have the best possible experience while here.",
          "A huge part of that is creating a environment where everyone can enjoy themselves and feel safe, so to ensure this happens we have partnered with our favourite security firm, Green Security, who we have worked with for many years and feel have the best track record in handling situations the right way.",
          "We have also teamed up with the wonderful people at PsyCare, who will be on-site all weekend to provide a safe space for you to go if required.",
        ],
      },
      {
        heading: "Environmentally Friendly",
        description: [
          "We want HighRise Festival to lead the way in the UK for sustainability.",
          "This is an ambitious target, but one we are passionate about. Please go to our enviornment page to find out more about what we are doing to protect our planet.",
        ],
      },
    ],
  },
};

const environmentData = {
  photoGrid: [{ image: EnvironmentTile, label: "" }],
  pageContent: {
    heading: "Environment",
    pageIntro: [
      "As we all know we are living through a climate crisis.",
      "We must also be aware that the festival industry is one of the worst polluters of the environment and sadly there is a lot of greenwashing in this industry.",
      "Our aims are simple. We wish to reduce our impact on the planet as much as possible, while being honest and transparent with our customers.",
      "Here are some key things we are doing that will make HighRise Festival as low impact as possible.",
    ],
    body: [
      {
        heading: "Our Location",
        description: [
          "Choosing our location was a huge project in itself, it actually took us 2 years! After comparing many options we were offered the incredible Grange Farm! The location is set between Bristol, London and Leeds which are our three main audiences so travel is effective for all our customers.",
          "The land owners also run Secret Garden Party and over the years have built permanent stages and have installed mains power, water and roads. This means every year we won't have to hire as many generators, truck in water and lay miles of trackway.",
          "The simple decision to share a site with other festival makes a lot of sense to us. It is our aim to share as much infrastructure with the other festival on the site to get the maximum use out of it.",
        ],
      },
      {
        heading: "No single use plastic",
        description: [
          "We are very conscious of the huge problem mankind faces when it comes to plastic. This oil product is being produced and distributed on a terrifying scale. It takes far too long to break down and is clogging our seas & soil.",
          "We want to set some realistic targets for how we can reduce our plastic use.",
          "1.) All of our bars will be using re-usable cups.",
          "2.) Our trades will only be serving biodegradable packaging.",
          "3.) Our build & break crew will be using re-usable cable.",
        ],
      },
      {
        heading: "Predominately Veggie & Vegan food offering",
        description: [
          "One of the best things we ALL could do for the planet is to cut back our meat intake and move towards a veggie or vegan diet. This is a simple change that can reduce your carbon footprint, greenhouse gasses and water usage all at once.",
          "We are not trying to force this change upon anyone which is why we have decided to still serve some meat & dairy products, however we are hosting a majority of veggie & vegan traders and asking all our traders to source their stock locally and only serve biodegradable packaging.",
        ],
      },
      {
        heading: "Upcycling ",
        description: [
          "We have saved hundreds of pieces of set from going to landfill already. With so many other Industries, such as theatre and film, failing to recycle their sets, the HighRise team aims to be different and will be upcycling pre-existing set, often form London.",
        ],
      },
      {
        heading: "Compost Toilets",

        description: [
          "We are proud to be using environmentally friendly compost toilets.",
          "We have over 150 compost toilets, 50+ urinals and a range of accessible compost toilets being used across the site.",
          "The toilets use no water, no chemicals and no energy during treatment, so the final product can be used to improve soil nutrients.",
        ],
      },
    ],
  },
};

// Wellness Page
const wellnessData = {
  wellnessPage: true,
  photoGrid: [{ image: hottub, label: "" }],
  pageContent: {
    heading: "Wellness",
    pageIntro: [
      "Welcome to The Sanctuary...",
      "Your lakeside oasis and spiritual home at Highrise Festival.",
      "Immerse, empower and enlighten yourself within our garden walls, a safe and peaceful setting for rebalancing your mind, body and energies.",
      "Journey deep into your senses with our carefully curated programme of wellness workshops, treatments and talks; inspired by both the practises and remedies of ancient cultures, and the experimental healing techniques of the modern day.",
      "Your elemental haven awaits...",
    ],
    cards: [
      {
        image: fire,
        borderColor: "border-[#F88D5D]",
        label: "Fire Garden",
        description: [
          "Explore the warmth of flame and human connection within our Fire Garden. Gather among likeminded spirits, forging strong and sincere bonds around our communal fire pit. Temper the days teachings into permanence as you lose your conscious self to enchanting flames and incensing smoke, rising anew from the ashes with your innermost burdens stripped away.",
        ],
      },
      {
        image: water,

        borderColor: "border-blue-300",
        label: "Water Garden",
        description: [
          "Discover the aquatic delights of our Water Garden on the western shore, a shimmering pool of clarity and focus. Float in suspended balance atop the sun-soaked surface as you stretch towards the summer skies. Clear your mind and cleanse your soul while gazing into the depths, in reflection of what has been, and what may come to pass on the infinite paths before you.",
        ],
      },
      {
        image: air,

        borderColor: "border-yellow-200",
        label: "Air Garden",
        description: [
          "Flowing in from the east, our Air Garden is your centre for movement and vibration. Release tensions and anxieties through an opulence of accredited yoga instructors, drifting like clouds as you aspire to weightless ascension. Relax into powerful meditation as peaceful sounds and scents lift you to higher celestial plains, and rejuvenate in the rhythms of dance and bodily motion.",
        ],
      },
      {
        image: earth,

        borderColor: "border-green-500",
        label: "Earth Garden",
        description: [
          `Gather in the grounds of our Earth Garden, among a myriad of experienced practitioners presenting thought-provoking talks, wide-ranging wellness workshops, and illuminating masterclasses. Open your mind to inspiring and diverse topics, share meaningful conversations with fellow participants, and restore the foundations of your practises with professional guidance.`,
        ],
      },
    ],
  },
  faqData: [
    {
      question: "What are the Covid safe entry requirements?",
      answer:
        "To gain access to Highrise Festival this year we will ask ALL customers, staff and artists to take an at-home lateral flow test (irrespective of vaccination status) no more than 24 hours before arriving on site to the festival, verifying that the test shows negative results. \n  We also will be operating further measures to reduce the risk of COVID-19 including: \n • Increased ventilation through all tents/structures \n • Face masks for all “customer facing” staff on site \n • Increased hand washing and sanitisation points throughout the site \n Any ticket holders who test positive in a pre-event lateral flow and who cannot attend will be able to roll their ticket over to 2023.",
    },
    {
      question: "When does the festival start and end?",
      answer:
        "The main gates open at midday on 25th August. \n Once in, you are free to leave the site at any time, but you will only be allowed back in between 10:00 and 22:00 each day. \n The festival ends on 27th August and we ask that all festival-goers leave site by 12:00 latest.",
    },
    {
      question: "Where can I get a festival site map?",
      answer:
        "Site maps will be emailed to all ticket holders in advance of the festival.",
    },
    {
      question: "When can I get a full programme?",
      answer:
        "There will be an app with set times available to festival goers at the start of August. A full programme will be available on site.",
    },
    {
      question: "Will there be showers available for campers?",
      answer:
        "Yes, there will be showers available in the campsites for all festival goers. Remember your own towels and toiletries!",
    },
    {
      question: "Will BBQs or campfires be permitted on campsites?",
      answer:
        "Unfortunately not. Any open fires or naked flames are prohibited at Highrise Festival for safety reasons. There will be no shortage of great hot food over the weekend from our on site stalls.",
    },
  ],
};

// Location Page
const locationData = {
  photoGrid: [{ image: lake, label: "" }],
  pageContent: {
    heading: "Location",
    description: [
      "We're very excited to be hosting the first HighRise Festival at the Legendary Grange Farm in Cambridgeshire. Our festival will be set amongst the rolling hills, meadows, woodlands and lakes of this strudels stunning location. It's the perfect place to get away and reconnect with nature.",
      "Widely recognised as one of the best festival sites in the country it is home to Secret Garden Party and former home to We Out Here and many amazing festival.",
      "The site comes with loads of permanent infrastructure, stages, bars, roads, power and water. It's a tried and tested festival location so we feel we're in safe hands to make sure you all have the best weekender ever!",
    ],
  },
  faqData: [
    {
      question: "What are the Covid safe entry requirements?",
      answer:
        "To gain access to Highrise Festival this year we will ask ALL customers, staff and artists to take an at-home lateral flow test (irrespective of vaccination status) no more than 24 hours before arriving on site to the festival, verifying that the test shows negative results. \n  We also will be operating further measures to reduce the risk of COVID-19 including: \n • Increased ventilation through all tents/structures \n • Face masks for all “customer facing” staff on site \n • Increased hand washing and sanitisation points throughout the site \n Any ticket holders who test positive in a pre-event lateral flow and who cannot attend will be able to roll their ticket over to 2023.",
    },
    {
      question: "When does the festival start and end?",
      answer:
        "The main gates open at midday on 25th August. \n Once in, you are free to leave the site at any time, but you will only be allowed back in between 10:00 and 22:00 each day. \n The festival ends on 27th August and we ask that all festival-goers leave site by 12:00 latest.",
    },
    {
      question: "Where can I get a festival site map?",
      answer:
        "Site maps will be emailed to all ticket holders in advance of the festival.",
    },
    {
      question: "When can I get a full programme?",
      answer:
        "There will be an app with set times available to festival goers at the start of August. A full programme will be available on site.",
    },
    {
      question: "Will there be showers available for campers?",
      answer:
        "Yes, there will be showers available in the campsites for all festival goers. Remember your own towels and toiletries!",
    },
    {
      question: "Will BBQs or campfires be permitted on campsites?",
      answer:
        "Unfortunately not. Any open fires or naked flames are prohibited at Highrise Festival for safety reasons. There will be no shortage of great hot food over the weekend from our on site stalls.",
    },
  ],
};

// Travel Page
const travelData = {
  photoGrid: [{ image: campervan1, label: "" }],
  pageContent: {
    heading: "Travel",
    pageIntro: [
      "There are tons of ways to get to Highrise Festival this year and below we have listed some details on the best ways to reach us here at Grange Farm, Huntingdon.",
    ],
    cards: [
      {
        image: coach,

        label: "Coach",
        description: [
          "Our official coach partner is National Express. They offer weekend return coach services from most major cities. Most coaches arrive on Thursday in-time to pick the perfect camping spot. Some arrive on Friday morning from London. Coaches return on Monday morning so you can rest the whole way back.",
        ],
      },
      {
        image: train,

        label: "Train",
        description: [
          "The nearest train station is Huntingdon. There will be a cheap and recent shuttle service running on Thursday and Friday as you arrive and a return service on Sunday & Monday. Taxi's are also available from the station.",
        ],
      },
      {
        image: cargirls,

        label: "Car",
        description: [
          "We hope that you consider travelling to Highrise festival via coach or train, but we understand this is not always possible. If you are driving there are well sign posted routes from the A14 and A1 to the festival site. Please make sure you remember to purchase a car parking pass, and we hope you consider car pooling to help reduce emissions.",
        ],
      },
    ],
  },
  faqData: [
    {
      question: "What are the Covid safe entry requirements?",
      answer:
        "To gain access to Highrise Festival this year we will ask ALL customers, staff and artists to take an at-home lateral flow test (irrespective of vaccination status) no more than 24 hours before arriving on site to the festival, verifying that the test shows negative results. \n  We also will be operating further measures to reduce the risk of COVID-19 including: \n • Increased ventilation through all tents/structures \n • Face masks for all “customer facing” staff on site \n • Increased hand washing and sanitisation points throughout the site \n Any ticket holders who test positive in a pre-event lateral flow and who cannot attend will be able to roll their ticket over to 2023.",
    },
    {
      question: "When does the festival start and end?",
      answer:
        "The main gates open at midday on 25th August. \n Once in, you are free to leave the site at any time, but you will only be allowed back in between 10:00 and 22:00 each day. \n The festival ends on 27th August and we ask that all festival-goers leave site by 12:00 latest.",
    },
    {
      question: "Where can I get a festival site map?",
      answer:
        "Site maps will be emailed to all ticket holders in advance of the festival.",
    },
    {
      question: "When can I get a full programme?",
      answer:
        "There will be an app with set times available to festival goers at the start of August. A full programme will be available on site.",
    },
    {
      question: "Will there be showers available for campers?",
      answer:
        "Yes, there will be showers available in the campsites for all festival goers. Remember your own towels and toiletries!",
    },
    {
      question: "Will BBQs or campfires be permitted on campsites?",
      answer:
        "Unfortunately not. Any open fires or naked flames are prohibited at Highrise Festival for safety reasons. There will be no shortage of great hot food over the weekend from our on site stalls.",
    },
  ],
};

// Accomodation Page
const accomodationData = {
  photoGrid: [{ image: girlCamping, label: "" }],
  pageContent: {
    heading: "Accomodation",
    pageIntro: [
      "All weekend tickets include free camping on-site. There will be compost toilets and showers available to all campers.",
      "There will also be a range of spa's with showers, saunas and steam rooms on-site for a small donation.",
      "We're teaming up with the Woodville Project to provide amazing & affordable boutique camping at Highrise festival from just £25 per night, per person.",
      "We are also selling a limited number of camper van passes. Please note these do not include an electrical hook up.",
    ],
    cards: [
      {
        image: Belltent,
        label: "Bell Tents",
        link: "https://www.woodvilleproject.co.uk/pages/5m-bell-tent-high-rise-festival",
        description: [
          "The basic bell tent option is 5 meters in diameter, sleeps 2-5 people and starts from £300.",
          "You can choose from 3 different furnishing options: Furnished, Classic or Deluxe.",
          "For more information about each of these options, please click the button below.",
        ],
      },
      {
        image: Lotus,
        label: "Lotus Bell Tents",
        link: "https://www.woodvilleproject.co.uk/pages/high-rise-festival-5m-lotus-belle-tent",
        description: [
          "The Lotus bell tent option is 5 meters in diameter, sleeps 2-5 people and starts from £600.",
          "You can choose from 2 different furnishing options: Classic or Deluxe.",
          "For more information about each of these options, please click the button below.",
        ],
      },
      {
        image: Emperor2,
        label: "Emperor Tents",
        link: "https://www.woodvilleproject.co.uk/pages/emperor-tent-high-rise-festival",
        description: [
          "The Emperor Tent option is 6 meters in diameter, sleeps 4-8 people and starts from £480.",
          "You can choose from 3 different furnishing options: Furnished, Classic or Deluxe.",
          "For more information about each of these options, please click the button below.",
        ],
      },
      {
        image: campervan1,

        label: "Campervans",
        link: "https://fixr.co/event/highrise-festival-2023-tickets-811270693/tickets?",
        description: [
          "If you are planning on sleeping in your campervan, please make sure you have purchased one of our campervan passes before hand which you can purchase through Fixr, where you purchase normal festival tickets.",
        ],
      },
    ],
  },
  faqData: [
    {
      question: "What are the Covid safe entry requirements?",
      answer:
        "To gain access to Highrise Festival this year we will ask ALL customers, staff and artists to take an at-home lateral flow test (irrespective of vaccination status) no more than 24 hours before arriving on site to the festival, verifying that the test shows negative results. \n  We also will be operating further measures to reduce the risk of COVID-19 including: \n • Increased ventilation through all tents/structures \n • Face masks for all “customer facing” staff on site \n • Increased hand washing and sanitisation points throughout the site \n Any ticket holders who test positive in a pre-event lateral flow and who cannot attend will be able to roll their ticket over to 2023.",
    },
    {
      question: "When does the festival start and end?",
      answer:
        "The main gates open at midday on 25th August. \n Once in, you are free to leave the site at any time, but you will only be allowed back in between 10:00 and 22:00 each day. \n The festival ends on 27th August and we ask that all festival-goers leave site by 12:00 latest.",
    },
    {
      question: "Where can I get a festival site map?",
      answer:
        "Site maps will be emailed to all ticket holders in advance of the festival.",
    },
    {
      question: "When can I get a full programme?",
      answer:
        "There will be an app with set times available to festival goers at the start of August. A full programme will be available on site.",
    },
    {
      question: "Will there be showers available for campers?",
      answer:
        "Yes, there will be showers available in the campsites for all festival goers. Remember your own towels and toiletries!",
    },
    {
      question: "Will BBQs or campfires be permitted on campsites?",
      answer:
        "Unfortunately not. Any open fires or naked flames are prohibited at Highrise Festival for safety reasons. There will be no shortage of great hot food over the weekend from our on site stalls.",
    },
  ],
};

// Accessibility Page
const accessibilityData = {
  photoGrid: [{ image: mcFats, label: "" }],
  pageContent: {
    heading: "Accessibility",
    description: [
      "We want our festival to be accessible to everyone.",

      "To ensure this, we have appointed a head of accessibility who's sole focus will be on proivding people of all abilities have the right support and facilities to fully enjoy their time at Highrise Festival.",

      "If you have a disability you can pruchase a special ticket which includes a free ticket for a carer. When you arrive on-site you will be offered any special assistance you may need.",

      "There will be a range of disabled toilets on-site and our largest stages will have disabled viewing platforms, which will be manned at all times by stewards to ensure they are free when required.",

      "If you require any further information in advance of the festival, please reach out to us via email on info@highrise.com",
    ],
  },
  faqData: [
    {
      question: "What are the Covid safe entry requirements?",
      answer:
        "To gain access to Highrise Festival this year we will ask ALL customers, staff and artists to take an at-home lateral flow test (irrespective of vaccination status) no more than 24 hours before arriving on site to the festival, verifying that the test shows negative results. \n  We also will be operating further measures to reduce the risk of COVID-19 including: \n • Increased ventilation through all tents/structures \n • Face masks for all “customer facing” staff on site \n • Increased hand washing and sanitisation points throughout the site \n Any ticket holders who test positive in a pre-event lateral flow and who cannot attend will be able to roll their ticket over to 2023.",
    },
    {
      question: "When does the festival start and end?",
      answer:
        "The main gates open at midday on 25th August. \n Once in, you are free to leave the site at any time, but you will only be allowed back in between 10:00 and 22:00 each day. \n The festival ends on 27th August and we ask that all festival-goers leave site by 12:00 latest.",
    },
    {
      question: "Where can I get a festival site map?",
      answer:
        "Site maps will be emailed to all ticket holders in advance of the festival.",
    },
    {
      question: "When can I get a full programme?",
      answer:
        "There will be an app with set times available to festival goers at the start of August. A full programme will be available on site.",
    },
    {
      question: "Will there be showers available for campers?",
      answer:
        "Yes, there will be showers available in the campsites for all festival goers. Remember your own towels and toiletries!",
    },
    {
      question: "Will BBQs or campfires be permitted on campsites?",
      answer:
        "Unfortunately not. Any open fires or naked flames are prohibited at Highrise Festival for safety reasons. There will be no shortage of great hot food over the weekend from our on site stalls.",
    },
  ],
};

// get involved Page
const getInvolvedData = {
  photoGrid: [{ image: hands, label: "" }],
  pageContent: {
    heading: "Get Involved",
    pageIntro: [
      "This is the first year of HighRise Festival which means there are loads of opportunities to get involved with us from the very start of our journey.",
      "To make this beautiful festival come to life we need lots of you to come and join our ever growing family.",
      "You can get a free ticket for lots of volunteering roles, apply to trade or perform with us or apply for a more senior role in the company.",
    ],
    body: [
      {
        heading: "Volunteer at the Festival:",
        link: {
          address:
            "https://docs.google.com/forms/d/e/1FAIpQLSfvLDQ4HNo5YTCskWFEtIVlhjhRH-OQk9m8sbUVpRxONEYl5Q/viewform?usp=sf_link",
          label: "Sign up to Volunteer",
        },
        description: [
          "Volunteering at our festival is a great opportunity to meet new people, gain experience, and contribute to a good cause.",
          "Volunteer roles available:",
          "Bar Staff, Steward Team, Ticket Scanning / Accreditation Team, Life Guards, Car Park Team, Litter Picking & Recycling Team and Decor Team",
          "Each volunteer will get free entry to the festival as well as food & drink vouchers.",
          "There are also several paid crew roles available to:",
          "Carpenters, Scenic Painters, Set Builders, Runners, and lots more",
          "Please click the button below to fill out a application form with your details and let us know how you want to get involved!",
        ],
      },
      {
        heading: "Vendors & Traders",
        link: {
          address:
            "https://docs.google.com/forms/d/e/1FAIpQLScIoAT1i17-pJvMT0OzIJx5AZT_N_GiQBhCzzZ7MzCejPMQGA/viewform?usp=sf_link",
          label: "Sign up to Trade",
        },
        description: [
          "If you would like to trade at this years festival we would love to hear from you.",
          "We're looking for more food traders (veggie or vegan ideally), art & craft stalls and clothing stalls.",
          "Whether you sell food, make clothes, create art or host workshops, we have a space and would love to hear from you!",
          "Please click the button below to fill out a quick form explaining how you wish to get involved.",
        ],
      },
      {
        heading: "Walkabout Performers",
        link: {
          address:
            "https://docs.google.com/forms/d/e/1FAIpQLSfaMMJwjkyahbOO6n0aUdD4V1hajx4igeb4j3wy_qASc3602g/viewform?usp=sf_link",
          label: "Sign up to Perform",
        },
        description: [
          "We're hoping to make our festival as immersive and interactive as possible and would love to see as many of you get involved as possible.",
          "Have you got a great idea and want to see it come to life?",
          "Do you and your friends prefer to perform at festivals than buy a ticket?",
          "We're offering free tickets and sometimes budget to help bring you're amazing ideas to HighRise Festival.",
          "Please click the button below to fill out our form and tell us about your concept.",
        ],
      },
    ],
  },
};

// HOME PAGE

const homeData = {
  pageContent: {
    heading: "About",
    description: [
      "After 10 years running multi-genre events across the country and opening our own club in Bristol, we are ready to take our next step into the festival world.",
      "Our festival will be set within the woodlands, fields and lakes of the legendary Secret Garden Party site. We are proud to be a fully independent and grassroots festival which is environmentally conscious and sustainability focused. We are a predominately vegetarian and vegan festival with all of our food & drink being locally sourced. There will be no single use plastic on-site and the majority of our power will come directly from the sun.",
      "We're hosting a weekend of live music, sound system culture, wellness and healing. Set across 20+ immersive medium, small and micro venues for you to explore. There will be no huge stages, instead we are focusing on intimate and immersive spaces with big sounds.",
    ],
  },
};

// FAQ PAGE
const faqData = FAQData;

function App() {
  const { pathname } = useLocation();

  const links = ["programme", "info", "ethos", "faqs", "get-involved"];

  return (
    <div className="app-wrapper">
      <ProgressiveImage src={borderLeft} placeholder={borderLeftBlurred}>
        {(src, loading) => (
          <img
            className={`app-wrapper-bg-left hidden lg:block ${
              loading ? "loading" : "loaded"
            }`}
            src={src}
            alt="app-border-image"
          />
        )}
      </ProgressiveImage>
      <ProgressiveImage src={borderRight} placeholder={borderRightBlurred}>
        {(src, loading) => (
          <img
            className={`app-wrapper-bg-right hidden lg:block ${
              loading ? "loading" : "loaded"
            }`}
            src={src}
            alt="app-border-image"
          />
        )}
      </ProgressiveImage>
      <Navbar links={links} />
      <AnimatedRoutes
        data={{
          homeData: homeData,
          programmeData: programmeData,
          infoData: infoData,
          ethosData: ethosData,
          visionData: visionData,
          environmentData: environmentData,
          faqData: faqData,
          getInvolvedData: getInvolvedData,
          lineUpData: lineUpData,
          venuesData: venuesData,
          soundsystemData: soundsystemData,
          wellnessData: wellnessData,
          locationData: locationData,
          accomodationData: accomodationData,
          travelData: travelData,
          accessibilityData: accessibilityData,
        }}
      />
      <div className="lg:mx-[9vw]">
        {pathname !== "/programme" &&
          pathname !== "/info" &&
          pathname !== "/ethos" &&
          pathname !== "/programme/line-up" &&
          pathname !== "/credits" &&
          pathname !== "/privacy" && <Newsletter2 />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
