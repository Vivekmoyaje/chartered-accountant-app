import React, { useEffect, useState } from "react";
import { getAccountantById } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [accountant, setAccountant] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getAccountantById(id);
        setAccountant(data);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 pt-24">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="text-blue-500 hover:underline mb-4"
        >
          &larr; Back to Home
        </button>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : accountant ? (
          <div className="bg-white p-4 rounded-md shadow-md shadow-purple-700 px-10">
            {accountant.image && (
              <img
                src={accountant.image}
                alt={accountant.name}
                className="w-52 h-52 mx-auto rounded-full mb-4"
              />
            )}
            <h2 className="text-xl font-bold text-center">{accountant.name}</h2>
            <p className="text-center text-gray-600">{accountant.price}</p>
            <p className="mt-2 font-bold">
              <span className="font-bold">Rating : </span> {accountant.rating}/5
            </p>
            <p className="mt-4">
              <span className="font-bold">Reviews : </span>{" "}
              {accountant.reviewCount}
            </p>
            <p className="mt-4">
              <span className="font-bold">Specialization : </span>
              {accountant.intro}
            </p>
            <p className="mt-4">
              <span className="font-bold">Task Complexity : </span>
              {accountant.taskComplexity}
            </p>
            <p className="mt-4">
              <span className="font-bold">Delivery Time : </span>
              {accountant.deliveryTime}
            </p>
            <h5 className="font-bold text-xl mt-5">About : -</h5>
            <div className="border border-black ps-4 pb-5">
              <p className="mt-4">
                <span className="font-bold">Location : </span>
                {accountant.about.from}
              </p>

              <p className="mt-4">
                <span className="font-bold">Partner Since : </span>
                {accountant.about.partnerSince}
              </p>
              <p className="mt-4">
                <span className="font-bold">Average Response Time : </span>
                {accountant.about.averageResponseTime}
              </p>
              <p className="mt-4">
                <span className="font-bold">Description : </span>
                {accountant.about.description}
              </p>
              <p className="mt-4">
                <span className="font-bold">Services : </span>
                {accountant.about.services}
              </p>
              <p className="mt-4">
                <span className="font-bold">Benefits : </span>
                {accountant.about.benefits}
              </p>
            </div>
            <button
              onClick={() => navigate("/accountants")}
              className="bg-purple-500 text-white rounded-md py-2 px-4 mt-4"
            >
              Back
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Details;
