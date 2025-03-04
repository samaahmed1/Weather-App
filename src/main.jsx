import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/layouts/Header.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import DownloadApp from "./components/pages/DownloadApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignUp" element={<DownloadApp />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/DownloadApp" element={<DownloadApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
