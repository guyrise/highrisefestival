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
import LineUp from "./pages/LineUp";
import Soundsystems from "./pages/SoundSystems";
import Venues from "./pages/Venues";
import Wellness from "./pages/Wellness";

// DATA
import ProgrammePageData from "./data/ProgrammePage.json";
import FAQData from "./data/FAQPage.json";

// IMAGES
import beautifulForest1 from "./assets/images/deepAi festival images/beautiful-forest.jpeg";
import camping1 from "./assets/images/deepAi festival images/camping1.jpeg";
import camping2 from "./assets/images/deepAi festival images/camping2.jpeg";
import galaxyJungle from "./assets/images/deepAi festival images/galaxy-jungle1.jpeg";

import cartoonFestival from "./assets/images/midjourney/cartoon-festival1.png";
import mushroomStage1 from "./assets/images/midjourney/mushroom-stage.png";
import mushroomStage2 from "./assets/images/midjourney/mushroom-stage2.png";

// Programme Page
const programmeData = {
  photoGrid: [
    { image: beautifulForest1, label: "Line Up" },
    { image: mushroomStage1, label: "Venues" },
    { image: mushroomStage2, label: "Soundsystems" },
    { image: galaxyJungle, label: "Wellness" },
  ],
};

// Info Page
const infoData = {
  photoGrid: [
    { image: beautifulForest1, label: "Location" },
    { image: camping1, label: "Travel" },
    { image: cartoonFestival, label: "Accomodation" },
    { image: camping2, label: "Accessibility" },
  ],
};

// Ethos Page
const ethosData = {
  photoGrid: [
    { image: beautifulForest1, label: "Vision" },
    { image: beautifulForest1, label: "Environment" },
    { image: camping1, label: "Principles" },
    { image: camping2, label: "Waste & Compost" },
    { image: camping2, label: "Compost Toilets" },
  ],
};

// FAQ PAGE
const faqData = FAQData;

function App() {
  const links = ["programme", "info", "ethos", "faqs", "get-involved"];
  return (
    <div className="app-wrapper">
      <div className="mazeletter-bg">
        <p className="mazeletter">
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelaz
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelaz
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelaz
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelaz
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelaz
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelaz
          <br></br>
          <br></br>
          sopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopmsopm
          <br></br>
          thequickbrownfoxjumpedoverthelazydogthequickbrownfoxjumpedoverthelaz
          <br></br>
        </p>
      </div>

      <Navbar links={links} />
      <Routes>
        {/* {links.map(link, index) => {

        }} */}
        <Route path="/" element={<Home />} />
        <Route
          path="/programme"
          element={<Programme programmeData={programmeData} />}
        ></Route>
        <Route path="info" element={<Info infoData={infoData} />} />
        <Route path="ethos" element={<Ethos ethosData={ethosData} />} />
        <Route path="faqs" element={<FAQS faqData={faqData} />} />
        <Route path="get-involved" element={<GetInvolved />} />

        <Route path="/programme/line-up" element={<LineUp />} />
        <Route path="/programme/venues" element={<Venues />} />
        <Route path="/programme/soundsystems" element={<Soundsystems />} />
        <Route path="/programme/wellness" element={<Wellness />} />

        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
      </Routes>
      {/* PROGRAMME SUB ROUTES */}

      <Footer />
    </div>
  );
}

export default App;
