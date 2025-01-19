import React from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Accountants from "./pages/Accountants";
import Services from "./pages/Services";
import ContactUsForm from "./pages/ContactUsForm";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <>
      <MainNavbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/accountants" element={<Accountants />} />
          <Route path="/services" element={<Services />} />
          <Route path="contactusform" element={<ContactUsForm />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
