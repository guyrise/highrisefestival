import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

// CONSTANTS
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
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

// DATA
import ProgrammePageData from "./data/ProgrammePage.json";
import FAQData from "./data/FAQPage.json";

// IMAGES

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

import lazers from "./assets/images/highrise-lazers.jpeg";

// SOUNDSYSTEM IMAGES
import Electrikal from "./assets/images/Highrise Festival Website/ELECTRIKAL.jpg";
import Iration from "./assets/images/Highrise Festival Website/IRATION-STEPPAS.jpg";
import FirmlyRooted from "./assets/images/Highrise Festival Website/FirmlyRooted.jpg";
import Sinai from "./assets/images/Highrise Festival Website/Sinai.png";
import ChaiW from "./assets/images/Highrise Festival Website/ChaiWallah.png";
import Channel1 from "./assets/images/Highrise Festival Website/ChannelOne.png";

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
  pageContent: [
    {
      image: Electrikal,
      label: "Elektrical",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: Iration,
      label: "Iration Steppas",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: FirmlyRooted,
      label: "Firmly Rooted",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: Channel1,
      label: "Channel One",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: Sinai,
      label: "Sinai",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: ChaiW,
      label: "Chai Wallah",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
  ],
};

// SoundSystem Page
const venuesData = {
  pageContent: [
    {
      image: Electrikal,
      label: "Elektrical",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: Iration,
      label: "Iration Steppas",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: FirmlyRooted,
      label: "Firmly Rooted",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: Channel1,
      label: "Channel One",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: Sinai,
      label: "Sinai",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
    {
      image: ChaiW,
      label: "Chai Wallah",
      description:
        "Some description about this soundsystem saying what its done and who they are.",
    },
  ],
};

// Info Page
const infoData = {
  photoGrid: [
    { image: camping1, label: "Location" },
    { image: campervan, label: "Travel" },
    { image: cartoonFestival, label: "Accomodation" },
    { image: camping2, label: "Accessibility" },
  ],
};

// Ethos Page
const ethosData = {
  photoGrid: [
    { image: beautifulForest1, label: "Our Vision" },
    { image: beautifulForest1, label: "Environment" },
    { image: camping1, label: "Principles" },
    { image: camping2, label: "Waste & Compost" },
    { image: camping2, label: "Compost Toilets" },
  ],
};

// Wellness Page
const wellnessData = {
  photoGrid: [{ image: lazers, label: "" }],
  pageContent: {
    heading: "Wellness",
    description: {
      paragraph1:
        "Now, this is a story all about how My life got flipped-turned upside down And I'd like to take a minute Just sit right there I'll tell you how I became the prince of a town called Bel-Air.",
      paragraph2:
        "In West Philadelphia born and raised On the playground was where I spent most of my days Chillin' out, maxin', relaxin', all cool And all shootin' some b-ball outside of the school. When a couple of guys who were up to no good; Started making trouble in my neighborhood. I got in one little fight and my mom got scared. She said, 'You're movin' in with your auntie and uncle in Bel-Air.'",
      paragraph3:
        "I begged and pleaded with her day after day But she packed my suitcase and sent me on my way She gave me a kiss and then she gave me my ticket I put my Walkman on and said, 'I might as well kick it'. First class, yo this is bad Drinking orange juice out of a champagne glass Is this what the people of Bel-Air living like? Hmm, this might be alright But wait, I hear they're prissy, bourgeois, all that Is this the type of place that they just send this cool cat?",
      paragraph4:
        "I don't think so I'll see when I get there I hope they're prepared for the prince of Bel-Air Well, the plane landed and when I came out There was a dude who looked like a cop standing there with my name out I ain't trying to get arrested yet, I just got here I sprang with the quickness like lightning, disappeared I whistled for a cab and when it came near The license plate said, 'Fresh' and it had dice in the mirror If anything I could say that this cab was rare But I thought 'Nah, forget it, yo, holmes to Bel Air' I pulled up to the house about seven or eight And I yelled to the cabbie, 'Yo holmes, smell ya later' I looked at my kingdom I was finally there To sit on my throne as the prince of Bel-Air",
    },
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
    description: {
      paragraph1:
        "Now, this is a story all about how My life got flipped-turned upside down And I'd like to take a minute Just sit right there I'll tell you how I became the prince of a town called Bel-Air.",
      paragraph2:
        "In West Philadelphia born and raised On the playground was where I spent most of my days Chillin' out, maxin', relaxin', all cool And all shootin' some b-ball outside of the school. When a couple of guys who were up to no good; Started making trouble in my neighborhood. I got in one little fight and my mom got scared. She said, 'You're movin' in with your auntie and uncle in Bel-Air.'",
      paragraph3:
        "I begged and pleaded with her day after day But she packed my suitcase and sent me on my way She gave me a kiss and then she gave me my ticket I put my Walkman on and said, 'I might as well kick it'. First class, yo this is bad Drinking orange juice out of a champagne glass Is this what the people of Bel-Air living like? Hmm, this might be alright But wait, I hear they're prissy, bourgeois, all that Is this the type of place that they just send this cool cat?",
      paragraph4:
        "I don't think so I'll see when I get there I hope they're prepared for the prince of Bel-Air Well, the plane landed and when I came out There was a dude who looked like a cop standing there with my name out I ain't trying to get arrested yet, I just got here I sprang with the quickness like lightning, disappeared I whistled for a cab and when it came near The license plate said, 'Fresh' and it had dice in the mirror If anything I could say that this cab was rare But I thought 'Nah, forget it, yo, holmes to Bel Air' I pulled up to the house about seven or eight And I yelled to the cabbie, 'Yo holmes, smell ya later' I looked at my kingdom I was finally there To sit on my throne as the prince of Bel-Air",
    },
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
  photoGrid: [{ image: lazers, label: "" }],
  pageContent: {
    heading: "Travel",
    description: {
      paragraph1:
        "Now, this is a story all about how My life got flipped-turned upside down And I'd like to take a minute Just sit right there I'll tell you how I became the prince of a town called Bel-Air.",
      paragraph2:
        "In West Philadelphia born and raised On the playground was where I spent most of my days Chillin' out, maxin', relaxin', all cool And all shootin' some b-ball outside of the school. When a couple of guys who were up to no good; Started making trouble in my neighborhood. I got in one little fight and my mom got scared. She said, 'You're movin' in with your auntie and uncle in Bel-Air.'",
      paragraph3:
        "I begged and pleaded with her day after day But she packed my suitcase and sent me on my way She gave me a kiss and then she gave me my ticket I put my Walkman on and said, 'I might as well kick it'. First class, yo this is bad Drinking orange juice out of a champagne glass Is this what the people of Bel-Air living like? Hmm, this might be alright But wait, I hear they're prissy, bourgeois, all that Is this the type of place that they just send this cool cat?",
      paragraph4:
        "I don't think so I'll see when I get there I hope they're prepared for the prince of Bel-Air Well, the plane landed and when I came out There was a dude who looked like a cop standing there with my name out I ain't trying to get arrested yet, I just got here I sprang with the quickness like lightning, disappeared I whistled for a cab and when it came near The license plate said, 'Fresh' and it had dice in the mirror If anything I could say that this cab was rare But I thought 'Nah, forget it, yo, holmes to Bel Air' I pulled up to the house about seven or eight And I yelled to the cabbie, 'Yo holmes, smell ya later' I looked at my kingdom I was finally there To sit on my throne as the prince of Bel-Air",
    },
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
  photoGrid: [{ image: lazers, label: "" }],
  pageContent: {
    heading: "Accomodation",
    description: {
      paragraph1:
        "Now, this is a story all about how My life got flipped-turned upside down And I'd like to take a minute Just sit right there I'll tell you how I became the prince of a town called Bel-Air.",
      paragraph2:
        "In West Philadelphia born and raised On the playground was where I spent most of my days Chillin' out, maxin', relaxin', all cool And all shootin' some b-ball outside of the school. When a couple of guys who were up to no good; Started making trouble in my neighborhood. I got in one little fight and my mom got scared. She said, 'You're movin' in with your auntie and uncle in Bel-Air.'",
      paragraph3:
        "I begged and pleaded with her day after day But she packed my suitcase and sent me on my way She gave me a kiss and then she gave me my ticket I put my Walkman on and said, 'I might as well kick it'. First class, yo this is bad Drinking orange juice out of a champagne glass Is this what the people of Bel-Air living like? Hmm, this might be alright But wait, I hear they're prissy, bourgeois, all that Is this the type of place that they just send this cool cat?",
      paragraph4:
        "I don't think so I'll see when I get there I hope they're prepared for the prince of Bel-Air Well, the plane landed and when I came out There was a dude who looked like a cop standing there with my name out I ain't trying to get arrested yet, I just got here I sprang with the quickness like lightning, disappeared I whistled for a cab and when it came near The license plate said, 'Fresh' and it had dice in the mirror If anything I could say that this cab was rare But I thought 'Nah, forget it, yo, holmes to Bel Air' I pulled up to the house about seven or eight And I yelled to the cabbie, 'Yo holmes, smell ya later' I looked at my kingdom I was finally there To sit on my throne as the prince of Bel-Air",
    },
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
  photoGrid: [{ image: lazers, label: "" }],
  pageContent: {
    heading: "Accessibility",
    description: {
      paragraph1:
        "Now, this is a story all about how My life got flipped-turned upside down And I'd like to take a minute Just sit right there I'll tell you how I became the prince of a town called Bel-Air.",
      paragraph2:
        "In West Philadelphia born and raised On the playground was where I spent most of my days Chillin' out, maxin', relaxin', all cool And all shootin' some b-ball outside of the school. When a couple of guys who were up to no good; Started making trouble in my neighborhood. I got in one little fight and my mom got scared. She said, 'You're movin' in with your auntie and uncle in Bel-Air.'",
      paragraph3:
        "I begged and pleaded with her day after day But she packed my suitcase and sent me on my way She gave me a kiss and then she gave me my ticket I put my Walkman on and said, 'I might as well kick it'. First class, yo this is bad Drinking orange juice out of a champagne glass Is this what the people of Bel-Air living like? Hmm, this might be alright But wait, I hear they're prissy, bourgeois, all that Is this the type of place that they just send this cool cat?",
      paragraph4:
        "I don't think so I'll see when I get there I hope they're prepared for the prince of Bel-Air Well, the plane landed and when I came out There was a dude who looked like a cop standing there with my name out I ain't trying to get arrested yet, I just got here I sprang with the quickness like lightning, disappeared I whistled for a cab and when it came near The license plate said, 'Fresh' and it had dice in the mirror If anything I could say that this cab was rare But I thought 'Nah, forget it, yo, holmes to Bel Air' I pulled up to the house about seven or eight And I yelled to the cabbie, 'Yo holmes, smell ya later' I looked at my kingdom I was finally there To sit on my throne as the prince of Bel-Air",
    },
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

// FAQ PAGE
const faqData = FAQData;

function App() {
  const links = ["programme", "info", "ethos", "faqs", "get-involved"];
  return (
    <div className="app-wrapper">
      <div className="mazeletter-bg">
        {/* VERY LONG STRING */}
        <p className="mazeletter">
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelazdogthequickbrownfoxjumped
          <br></br>
        </p>
      </div>

      <Navbar links={links} />
      <Routes>
        {/* {links.map(link, index) => {

        }} */}
        <Route path="/" element={<Home />} />
        <Route
          path="programme"
          element={<Programme programmeData={programmeData} />}
        />

        <Route path="info" element={<Info infoData={infoData} />} />
        <Route path="ethos" element={<Ethos ethosData={ethosData} />} />
        <Route path="faqs" element={<FAQS faqData={faqData} />} />
        <Route path="get-involved" element={<GetInvolved />} />

        {/* PROGRAMME SUB ROUTES */}
        <Route path="/programme/line-up" element={<LineUp />} />
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
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
