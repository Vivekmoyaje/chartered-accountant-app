import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import NavLinkItem from "./NavLinkItem";
import ContactUs from "./ContactUs";

const ResponsiveNavbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Mobile hamburger menu section */}
      <div
        className="text-3xl md:hidden  hover:text-purple-500 hover:bg-black p-2 rounded-full cursor-pointer"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </div>

      {/* Mobile sidebar section */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-60 right-0  z-500 bg-opacity-90"
          >
            <div className="flex flex-col justify-center items-center gap-6 text-[20px] font-semibold  bg-white shadow-lg shadow-purple-500 text-black px-20 py-10">
              <div>
                <FaWindowClose
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl"
                />
              </div>
              <div>
                <ul className=" flex flex-col justify-center items-center gap-3">
                  <NavLinkItem />
                </ul>
              </div>
              <div className="block md:hidden">
                <ContactUs />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveNavbar;
