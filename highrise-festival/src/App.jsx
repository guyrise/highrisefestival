import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";

// CONSTANTS
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import Newsletter from "./components/form/Newsletter/Newsletter";
import Newsletter2 from "./components/form/Newsletter/Newsletter2";

// NAV PAGES
import Home from "./pages/Home/Home";
import Programme from "./pages/Programme/Programme";
import FAQS from "./pages/FAQS/FAQS";
import Info from "./pages/Info/Info";
import Ethos from "./pages/Ethos/Ethos";
import GetInvolved from "./pages/Get-Involved/GetInvolved";
// CHILD PAGES
// programme
import LineUp from "./pages/LineUp/LineUp";
import Soundsystems from "./pages/Soundsystems/Soundsystems";
import Venues from "./pages/Venues/Venues";
import Wellness from "./pages/Wellness/Wellness";
// info
import Location from "./pages/Location/Location";
import Accomodation from "./pages/Accomodation/Accomodation";
import Travel from "./pages/Travel/Travel";
import Accessibility from "./pages/Accessibility/Accessibility";

// FOOTER LINKS
import Privacy from "./pages/Privacy Statement/Privacy";

// DATA
import ProgrammePageData from "./data/ProgrammePage.json";
import FAQData from "./data/FAQPage.json";

// IMAGES

// BACKGROUND
import highriseSidesBottom from "./assets/images/highrise-background-sides-bottom.png";
import highriseBorderLeft from "./assets/images/borders/highrise-border-left.svg";
import highriseBorderRight from "./assets/images/borders/highrise-border-right.svg";

import highriseBorderLeft1 from "./assets/images/borders/highrise-border-left1.png";
import highriseBorderRight1 from "./assets/images/borders/highrise-border-right1.png";

// PROGRAMME PHOTOGRID IMAGES
import beautifulForest1 from "./assets/images/deepAi festival images/beautiful-forest.jpeg";
import mushroomStage1 from "./assets/images/midjourney/mushroom-stage.png";
import mushroomStage2 from "./assets/images/midjourney/mushroom-stage2.png";
import galaxyJungle from "./assets/images/deepAi festival images/galaxy-jungle1.jpeg";

// INFO PHOTOGRID IMAGES
import camping1 from "./assets/images/deepAi festival images/camping1.jpeg";
import camping2 from "./assets/images/deepAi festival images/camping2.jpeg";
import cartoonFestival from "./assets/images/midjourney/cartoon-festival1.png";
import campervan from "./assets/images/campervan.png";

// TRAVEL IMAGES
import campervan1 from "./assets/images/Highrise Festival Website/campervan.jpg";
import bike from "./assets/images/Highrise Festival Website/bike.jpg";
import coach from "./assets/images/Highrise Festival Website/coach.jpg";
import train from "./assets/images/Highrise Festival Website/train.jpg";
import cargirls from "./assets/images/Highrise Festival Website/car-girls.jpg";

// ACCOMODATION IMAGES
import girlCamping from "./assets/images/Highrise Festival Website/girl-camping.jpg";
import belltent1 from "./assets/images/Highrise Festival Website/bell-tent-night.jpg";
import belltent2 from "./assets/images/Highrise Festival Website/bell-tent1.jpg";
import airstream1 from "./assets/images/Highrise Festival Website/airstream1.jpg";
import airstream2 from "./assets/images/Highrise Festival Website/airstream2.jpg";
import airstream3 from "./assets/images/Highrise Festival Website/airstream3.jpg";
import bwCamping from "./assets/images/Highrise Festival Website/b&w-camping.jpg";

// GET INVOLVED IMAGES
import hands from "./assets/images/Highrise Festival Website/hands.jpg";

// ACCESSIBILITY IMAGES
import mcFats from "./assets/images/Highrise Festival Website/mcFats.jpeg";

// random lazers
import lazers from "./assets/images/highrise-lazers.jpeg";

// SOUNDSYSTEM IMAGES
import Electrikal from "./assets/images/Highrise Festival Website/ELECTRIKAL.jpg";
import Iration from "./assets/images/Highrise Festival Website/IRATION-STEPPAS.jpg";
import FirmlyRooted1 from "./assets/images/Highrise Festival Website/firmly-rooted-soundsystem1.png";
import FirmlyRooted from "./assets/images/Highrise Festival Website/FirmlyRooted.jpg";
import Sinai from "./assets/images/Highrise Festival Website/Sinai.png";
import ChaiW from "./assets/images/Highrise Festival Website/ChaiWallah.png";
import Channel1 from "./assets/images/Highrise Festival Website/ChannelOne.png";

// WELLNESS IMAGES
import hottub from "./assets/images/Highrise Festival Website/hot-tub.jpg";
import earth from "./assets/images/Highrise Festival Website/wellness-earth.jpg";
import water from "./assets/images/Highrise Festival Website/wellness-water.jpg";
import fire from "./assets/images/Highrise Festival Website/wellness-fire.jpg";
import air from "./assets/images/Highrise Festival Website/wellness-air.jpg";

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
    { image: beautifulForest1, label: "Line Up" },
    { image: mushroomStage1, label: "Venues" },
    { image: mushroomStage2, label: "Soundsystems" },
    { image: galaxyJungle, label: "Wellness" },
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
        image: Electrikal,
        color: "",
        label: "Elektrical Soundsystem",
        description:
          "Some description about this soundsystem saying what its done and who they are.",
      },
      {
        image: Iration,
        color: "",
        label: "Iration Steppas Soundsystem",
        description:
          "Iration Steppas are a Leeds institution, active for over 23 years as a sound system and production unit composed of Mark Iration and Dennis Rootical.",
      },
      {
        image: FirmlyRooted1,
        color: "",
        label: "Firmly Rooted",
        description:
          "Firmly Rooted is a Soundsystem/Record label pushing the finest roots inspired sounds to the people. Run by a young crew of engineers, producers and selecta's who have been submerged within the bristol sound for ten years. Playing a heavyweight selection of modern day roots, dub and steppas. Firmly rooted perform with a focus on a conscious message, and providing soundsystem music for all.",
      },
      {
        image: Channel1,
        color: "",
        label: "Channel One Soundsystem",
        description:
          "Some description about this soundsystem saying what its done and who they are.",
      },
      {
        image: Sinai,
        color: "",
        label: "Sinai Soundsystem",
        description:
          "Some description about this soundsystem saying what its done and who they are.",
      },
      {
        image: ChaiW,
        color: "",
        label: "Chai Wallah Soundsystem",
        description:
          "Some description about this soundsystem saying what its done and who they are.",
      },
    ],
  },
};

// SoundSystem Page
const venuesData = {
  title: "Stages & Venues",
  pageContent: [
    {
      image: Electrikal,
      color: "text-white",
      label: "Elektrical",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: Iration,
      color: "text-white",
      label: "Iration Steppas",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: FirmlyRooted,
      color: "text-white",
      label: "Firmly Rooted",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: Channel1,
      color: "text-white",
      label: "Channel One",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: Sinai,
      color: "text-white",
      label: "Sinai",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: ChaiW,
      color: "text-white",
      label: "Chai Wallah",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
  ],
};

// Info Page
const infoData = {
  title: "Festival Information",
  photoGrid: [
    { image: camping1, label: "Location" },
    { image: campervan, label: "Travel" },
    { image: cartoonFestival, label: "Accomodation" },
    { image: camping2, label: "Accessibility" },
  ],
};

// Ethos Page
const ethosData = {
  title: "Ethos",
  photoGrid: [
    { image: beautifulForest1, label: "Our Vision" },
    { image: beautifulForest1, label: "Environment" },
    { image: camping1, label: "Principles" },
    { image: camping2, label: "Waste & Compost" },
    { image: camping2, label: "Compost Toilets" },
    { image: camping2, label: "Compost Toilets" },
  ],
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
        description:
          "Explore the warmth of flame and human connection within our Fire Garden. Gather among likeminded spirits, forging strong and sincere bonds around our communal fire pit. Temper the days teachings into permanence as you lose your conscious self to enchanting flames and incensing smoke, rising anew from the ashes with your innermost burdens stripped away.",
      },
      {
        image: water,

        borderColor: "border-blue-300",
        label: "Water Garden",
        description:
          "Discover the aquatic delights of our Water Garden on the western shore, a shimmering pool of clarity and focus. Float in suspended balance atop the sun-soaked surface as you stretch towards the summer skies. Clear your mind and cleanse your soul while gazing into the depths, in reflection of what has been, and what may come to pass on the infinite paths before you.",
      },
      {
        image: air,

        borderColor: "border-yellow-200",
        label: "Air Garden",
        description:
          "Flowing in from the east, our Air Garden is your centre for movement and vibration. Release tensions and anxieties through an opulence of accredited yoga instructors, drifting like clouds as you aspire to weightless ascension. Relax into powerful meditation as peaceful sounds and scents lift you to higher celestial plains, and rejuvenate in the rhythms of dance and bodily motion.",
      },
      {
        image: earth,

        borderColor: "border-green-500",
        label: "Earth Garden",
        description: `Gather in the grounds of our Earth Garden, among a myriad of experienced practitioners presenting thought-provoking talks, wide-ranging wellness workshops, and illuminating masterclasses. Open your mind to inspiring and diverse topics, share meaningful conversations with fellow participants, and restore the foundations of your practises with professional guidance.`,
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
  photoGrid: [{ image: lazers, label: "" }],
  pageContent: {
    heading: "Location",
    description: [
      "We are hugely excited to have secured, Grange Farm, one of our favourite festival sites in the uk for our first year of Highrise!",
      "Sentence 2",
      " Sentence 3",
      "Sentence 4",
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
        borderColor: "red",
        label: "Coach",
        description:
          "Return coaches are available from Bristol, Brighton, London, Birmingham, Manchester and Sheffield. All coaches and coach tickets are for departures on the Thursday of the event. All tickets include return travel on the Monday after the show. Please check all the information below carefully it is your responsibility to comply with terms of Shambala Express travel and be on time for your departures.",
      },
      {
        image: train,
        borderColor: "blue",
        label: "Train",
        description:
          "As you may already know, because we bang on about it enough, over 90% of our remaining carbon footprint is made up of audience travel, and we're constantly looking for new ways to hammer that down… In 2022, you lot set a new record for arriving on public transport, with nearly a third of you rocking up on one of our coaches, by bicycle or by train and shuttle bus, saving carbon and also saving cash, as our coach and cycle packages are priced £20 cheaper than regular entry tickets. Huge big ups to every single one of you who chose to travel to Shambala sustainably.",
      },
      {
        image: bike,
        borderColor: "red",
        label: "Cycle",
        description:
          "In 2023, we will once again be partnering with Red Fox Cycling, to offer guided bike rides from different cities to Shambala. Our bike rides run from Bristol, London, Sheffield and (new for 2023) Birmingham. Cyclist Tickets are priced £20 cheaper than regular entry tickets - as a thank you for choosing to travel so sustainably. What's more, a Red Fox guided tour costs half what you would expect for a regular cycling holiday, so this really is a bargain. Take the scenic route, stop at beautiful campsites along the way and arrive at Shambala with a host of new pals.",
      },
      {
        image: cargirls,
        borderColor: "yellow",
        label: "Car",
        description:
          "We hope that you consider travelling to Highrise festival via some of the other options mentioned, but we understand this is not always possible. If you are driving we hope you consider car pooling and there is ample parking allocated for you on arrival. ",
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
      "There are tons of ways to get to Highrise Festival this year and below we have listed some details on the best ways to reach us here at Grange Farm, Huntingdon.",
    ],
    cards: [
      {
        image: belltent1,
        borderColor: "red",
        label: "Bell Tents",
        description:
          "Return coaches are available from Bristol, Brighton, London, Birmingham, Manchester and Sheffield. All coaches and coach tickets are for departures on the Thursday of the event. All tickets include return travel on the Monday after the show. Please check all the information below carefully it is your responsibility to comply with terms of Shambala Express travel and be on time for your departures.",
      },
      {
        image: belltent2,
        borderColor: "blue",
        label: "Bell Tents",
        description:
          "As you may already know, because we bang on about it enough, over 90% of our remaining carbon footprint is made up of audience travel, and we're constantly looking for new ways to hammer that down… In 2022, you lot set a new record for arriving on public transport, with nearly a third of you rocking up on one of our coaches, by bicycle or by train and shuttle bus, saving carbon and also saving cash, as our coach and cycle packages are priced £20 cheaper than regular entry tickets. Huge big ups to every single one of you who chose to travel to Shambala sustainably.",
      },
      {
        image: airstream3,
        borderColor: "red",
        label: "Airstreams",
        description:
          "In 2023, we will once again be partnering with Red Fox Cycling, to offer guided bike rides from different cities to Shambala. Our bike rides run from Bristol, London, Sheffield and (new for 2023) Birmingham. Cyclist Tickets are priced £20 cheaper than regular entry tickets - as a thank you for choosing to travel so sustainably. What's more, a Red Fox guided tour costs half what you would expect for a regular cycling holiday, so this really is a bargain. Take the scenic route, stop at beautiful campsites along the way and arrive at Shambala with a host of new pals.",
      },
      {
        image: airstream2,
        borderColor: "yellow",
        label: "Airstreams",
        description:
          "We hope that you consider travelling to Highrise festival via some of the other options mentioned, but we understand this is not always possible. If you are driving we hope you consider car pooling and there is ample parking allocated for you on arrival. ",
      },
      {
        image: bwCamping,
        borderColor: "yellow",
        label: "Camping",
        description:
          "We hope that you consider travelling to Highrise festival via some of the other options mentioned, but we understand this is not always possible. If you are driving we hope you consider car pooling and there is ample parking allocated for you on arrival. ",
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
// const locationData = {
//   photoGrid: [{image: "hello", label: ""}],
//   pageContent: {

//   }
// }

// Accessibility Page
const accessibilityData = {
  photoGrid: [{ image: mcFats, label: "" }],
  pageContent: {
    heading: "Accessibility",
    description: [
      "We are striving to make Highrise Festival inclusive for everyone and accessible to all.",
      "We offer facilities for accessibility guests across the campsite and arena, and have detailed these below. Please reach out to us via email for any further information you require in advance of the festival on info@highrise.com",
      "On-site, you can drop in to chat to our helpful and friendly team at the Info Point on-site.",
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
    description: [
      "There are tons of ways to get involved with Highrise Festival this year and we want as many of you as possible!",
      "Whether you want to volenteer, work, trade or participate in anyway, we would love to hear from you!",
      "Please check out some of the information below and reach out to us via email.",
    ],
    cards: [
      {
        image: belltent1,
        borderColor: "red-500",
        label: "Volenteering",
        description: "",
      },
      {
        image: belltent2,
        borderColor: "blue",
        label: "Vendors",
        description: "",
      },
      {
        image: airstream3,
        borderColor: "red",
        label: "Art and Decoration",
        description: "",
      },
      {
        image: airstream3,
        borderColor: "red",
        label: "Workshops",
        description: "",
      },
      {
        image: airstream3,
        borderColor: "red",
        label: "Work with us",
        description: "",
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

// HOME PAGE

const homeData = {
  pageContent: {
    heading: "About",
    description: [
      "After 10 years running multi-genre events across the country and opening our own club in Bristol, we are ready to take our next step into the festival world.",
      "Our festival will be set within the woodlands, fields and lakes of the legendary Secret Garden Party site. We are proud to be a fully independent and grassroots festival which is environmentally conscious and sustainability focused. We are a predominately vegetarian and vegan festival with all of our food & drink being locally sourced. There will be no single use plastic on-site and the majority of our power will come directly from the sun.",
      "We've hosting a weekend of live music, sound system culture, wellness and healing. Set across 20+ immersive medium, small and micro venues for your to explore. There will be no huge stages, instead we are focusing on intimate and immersive spaces with big sounds.",
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
      <Navbar links={links} />
      <Routes>
        {/* {links.map(link, index) => {

        }} */}
        <Route path="/" element={<Home homeData={homeData} />} />
        <Route
          path="programme"
          element={<Programme programmeData={programmeData} />}
        />

        <Route path="info" element={<Info infoData={infoData} />} />
        <Route path="ethos" element={<Ethos ethosData={ethosData} />} />
        <Route path="faqs" element={<FAQS faqData={faqData} />} />
        <Route
          path="get-involved"
          element={<GetInvolved getInvolvedData={getInvolvedData} />}
        />

        {/* PROGRAMME SUB ROUTES */}
        <Route
          path="/programme/line-up"
          element={<LineUp lineUpData={lineUpData} />}
        />
        <Route
          path="/programme/venues"
          element={<Venues venuesData={venuesData} />}
        />
        <Route
          path="/programme/soundsystems"
          element={<Soundsystems soundsystemData={soundsystemData} />}
        />
        <Route
          path="/programme/wellness"
          element={<Wellness wellnessData={wellnessData} />}
        />

        <Route
          path="info/location"
          element={<Location locationData={locationData} />}
        />
        <Route
          path="info/accomodation"
          element={<Accomodation accomodationData={accomodationData} />}
        />
        <Route
          path="info/travel"
          element={<Travel travelData={travelData} />}
        />
        <Route
          path="info/accessibility"
          element={<Accessibility accessibilityData={accessibilityData} />}
          // <Route element={<Newsletter />} />
        />
        <Route path="privacy-policy" element={<Privacy />} />
      </Routes>
      {pathname !== "/programme" &&
        pathname !== "/info" &&
        pathname !== "/ethos" &&
        pathname !== "/programme/line-up" && <Newsletter2 />}
      <Footer />
    </div>
  );
}

export default App;
