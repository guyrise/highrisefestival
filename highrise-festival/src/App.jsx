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
import SiteInfo from "./pages/SiteInfo/SiteInfo";
import Ethos from "./pages/Ethos/Ethos";
import GetInvolved from "./pages/Get-Involved/GetInvolved";
// CHILD PAGES
import LineUp from "./pages/LineUp";
import Soundsystems from "./pages/SoundSystems";
import Venues from "./pages/Venues";
import Wellness from "./pages/Wellness";

// DATA
import ProgrammePageData from "./data/ProgrammePage.json";

// IMAGES
import beautifulForest1 from "./assets/images/deepAi festival images/beautiful-forest.jpeg";
import camping1 from "./assets/images/deepAi festival images/camping1.jpeg";
import camping2 from "./assets/images/deepAi festival images/camping2.jpeg";
import galaxyJungle from "./assets/images/deepAi festival images/galaxy-jungle1.jpeg";

// ProgrammePage
const programmeData = {
  photoGrid: [
    { image: beautifulForest1, label: "Line Up" },
    { image: camping1, label: "Venues" },
    { image: camping2, label: "Soundsystems" },
    { image: galaxyJungle, label: "Wellness" },
  ],
};
const programmeData2 = ProgrammePageData;

function App() {
  const links = ["programme", "site-info", "ethos", "faqs", "get-involved"];

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
        <Route path="site-info" element={<SiteInfo />} />
        <Route path="ethos" element={<Ethos />} />
        <Route path="faqs" element={<FAQS />} />
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
