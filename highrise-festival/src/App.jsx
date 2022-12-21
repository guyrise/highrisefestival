import { useState } from "react";
import "./index.css";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const links = ["info", "programme", "faqs", "get-involved"];

  return (
    <>
      <Navbar links={links} />
      <Routes>
        {/* {links.map(link, index) => {

        }} */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
