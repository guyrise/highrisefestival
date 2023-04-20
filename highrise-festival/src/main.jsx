import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";
import ScrollToTop from "./components/helpers/ScrollToTop/ScrollToTop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
