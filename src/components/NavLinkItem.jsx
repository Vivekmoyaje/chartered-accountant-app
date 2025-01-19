import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkItem = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 border-b-2 border-purple-400 pb-2"
              : " hover:text-purple-500 pb-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 border-b-2 border-purple-400 pb-2"
              : " hover:text-purple-500 pb-2"
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/accountants"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 border-b-2 border-purple-400 pb-2"
              : " hover:text-purple-500 pb-2"
          }
        >
          Accountants
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-purple-500 border-b-2 border-purple-400 pb-2"
              : " hover:text-purple-500 pb-2"
          }
        >
          Services
        </NavLink>
      </li>
    </>
  );
};

export default NavLinkItem;
