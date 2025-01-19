import React from "react";
import { NavLink } from "react-router-dom";
const ContactUs = () => {
  return (
    <>
      <NavLink
        to="/contactusform"
        className="bg-purple-500 hover:bg-purple-600 mr-0 md:mr-2 py-2 px-2 md:px-4 rounded-lg "
      >
        Contact Us
      </NavLink>
    </>
  );
};

export default ContactUs;
