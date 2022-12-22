import { useState } from "react";
import "./index.css";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import Home from "./pages/Home/Home";
import Programme from "./pages/Programme/Programme";
import FAQS from "./pages/FAQS/FAQS";
import SiteInfo from "./pages/SiteInfo/SiteInfo";
import Ethos from "./pages/Ethos/Ethos";
import GetInvolved from "./pages/Get-Involved/GetInvolved";
import { Route, Routes } from "react-router-dom";

function App() {
  const links = ["programme", "site-info", "ethos", "faqs", "get-involved"];

  return (
    <>
      <Navbar links={links} />
      <Routes>
        {/* {links.map(link, index) => {

        }} */}
        <Route path="/" element={<Home />} />
        <Route path="programme" element={<Programme />} />
        <Route path="/site-info" element={<SiteInfo />} />
        <Route path="/ethos" element={<Ethos />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/get-involved" element={<GetInvolved />} />

        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
