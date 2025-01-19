import React from "react";
import NavLinkItem from "./NavLinkItem";
import ResponsiveNavbar from "./ResponsiveNavbar";
import ContactUs from "./ContactUs";
import Logo from "../assets/logo.jpg";

const MainNavbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white container-fluid flex justify-between items-center py-2 shadow-md font-bold tracking-wider px-7">
        {/* Logo */}
        <div className="text-2xl md:text-3xl flex justify-between items-center p-2  underline">
          <img
            className="rounded-full mr-2"
            src={Logo}
            height="50px"
            width="50px"
            alt=""
          />
          <span className="text-2xl md:text-4xl text-purple-500">F</span>in
          <span className="text-2xl md:text-4xl text-purple-500">F</span>olio.
        </div>

        {/* Nav Links */}
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-6 text-[17px] p-2">
            <NavLinkItem />
          </ul>
        </div>

        {/* Play Btn and Theme Changer */}
        <div className="flex justify-center items-center gap-3">
          <div className="hidden md:block">
            <ContactUs />
          </div>
          <div>
            <ResponsiveNavbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
