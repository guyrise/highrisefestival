import { Route, Routes } from "react-router-dom";

import Page404 from "../../../pages/ErrorPages/Page404";
// NAV PAGES

import Home from "../../../pages/Home/Home";
import Programme from "../../../pages/Programme/Programme";
import FAQS from "../../../pages/FAQS/FAQS";
import Info from "../../../pages/Info/Info";
import Ethos from "../../../pages/Ethos/Ethos";
import GetInvolved from "../../../pages/Get-Involved/GetInvolved";
// CHILD PAGES
// programme
import LineUp from "../../../pages/LineUp/LineUp";
import Soundsystems from "../../../pages/Soundsystems/Soundsystems";
import Venues from "../../../pages/Venues/Venues";
import Wellness from "../../../pages/Wellness/Wellness";
// info
import Location from "../../../pages/Location/Location";
import Accomodation from "../../../pages/Accomodation/Accomodation";
import Travel from "../../../pages/Travel/Travel";
import Accessibility from "../../../pages/Accessibility/Accessibility";
// ethos
import Vision from "../../../pages/Vision/Vision";
import Environment from "../../../pages/Environment/Environment";

// FOOTER LINKS
import Privacy from "../../../pages/Privacy Statement/Privacy";

import { AnimatePresence } from "framer-motion";
import Credits from "../../../pages/Credits/Credits";

const AnimatedRoutes = ({ data }) => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home homeData={data.homeData} />} />
        {/* PROGRAMME */}
        <Route
          path="programme"
          element={<Programme programmeData={data.programmeData} />}
        />
        {/* PROGRAMME SUB ROUTES */}
        <Route
          path="/programme/line-up"
          element={<LineUp lineUpData={data.lineUpData} />}
        />
        <Route
          path="/programme/venues"
          element={<Venues venuesData={data.venuesData} />}
        />
        <Route
          path="/programme/soundsystems"
          element={<Soundsystems soundsystemData={data.soundsystemData} />}
        />
        <Route
          path="/programme/wellness"
          element={<Wellness wellnessData={data.wellnessData} />}
        />
        {/* INFO */}
        <Route path="info" element={<Info infoData={data.infoData} />} />
        {/* INFO SUB ROUTERS */}
        <Route
          path="info/location"
          element={<Location locationData={data.locationData} />}
        />
        <Route
          path="info/accomodation"
          element={<Accomodation accomodationData={data.accomodationData} />}
        />
        <Route
          path="info/travel"
          element={<Travel travelData={data.travelData} />}
        />
        <Route
          path="info/accessibility"
          element={<Accessibility accessibilityData={data.accessibilityData} />}
        />
        {/* ETHOS */}
        <Route path="ethos" element={<Ethos ethosData={data.ethosData} />} />
        {/* ETHOS SUB ROUTES */}
        <Route
          path="ethos/our-vision"
          element={<Vision visionData={data.visionData} />}
        />
        <Route
          path="ethos/environment"
          element={<Environment environmentData={data.environmentData} />}
        />

        <Route path="faqs" element={<FAQS faqData={data.faqData} />} />
        <Route
          path="get-involved"
          element={<GetInvolved getInvolvedData={data.getInvolvedData} />}
        />

        <Route path="privacy" element={<Privacy />} />
        <Route path="credits" element={<Credits />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
