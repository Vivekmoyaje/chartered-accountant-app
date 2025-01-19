import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Clients = () => {
  const [charteredAccountants, setCharteredAccountants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          " https://vivekmoyaje.github.io/chartered-accountant-api/db.json"
        );
        setCharteredAccountants(response.data.accountants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <Search />
      <div className="">
        <div className="container mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center bg-gray-50">
          {charteredAccountants.map((ca) => (
            <div className="flex justify-center">
              <div className=" bg-gray-200 border-2  border-purple-500 rounded w-72 mb-8 p-2 shadow-md shadow-purple-900">
                <h2 className="text-2xl font-bold mb-2 text-center">
                  {ca.name}
                </h2>
                <img
                  className="mb-1 mx-auto border rounded-full border-black rounded"
                  src={ca.image}
                  width="180px"
                  alt=""
                />
                <div className=" p-2">
                  <p className="text-center">{ca.price}</p>
                  <div className="flex justify-between font-bold my-2">
                    <p>Rate : {ca.rating}/5</p>
                    <p>Reviews : {ca.reviewCount}</p>
                  </div>
                  <NavLink
                    to={`/details/${ca.id}`}
                    className="flex justify-center"
                  >
                    <button
                      onClick={() => handleDetails(ca.id)}
                      className="bg-purple-600 hover:bg-purple-800 rounded px-4 py-1 text-white text-center mt-2"
                    >
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
