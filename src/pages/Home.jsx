import React from "react";
import background from "../assets/banner.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen bg-cover"
    >
      <div className="text-purple-600 font-bold flex flex-col justify-center items-center pt-60">
        <h3 className="md:text-4xl text-3xl">Welcome To</h3>
        <h1 className="md:text-6xl text-center text-5xl">
          Chartered Accountants
        </h1>
        <NavLink to="/accountants" className="mt-4">
          <button className="bg-purple-600 rounded px-4 py-2 text-white mt-4">
            Find Accountants
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
