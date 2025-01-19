import React, { useState } from "react";
import { searchAccountants } from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setResults([]);
      return;
    }

    try {
      const data = await searchAccountants(e.target.value);
      setResults(data);
    } catch (err) {
      setError("Failed to fetch data");
    }
  };

  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className=" bg-gray-50 py-3 pt-24">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">
          - Find a Chartered Accountant -
        </h1>
        <input
          type="text"
          placeholder="Search by name... "
          value={query}
          onChange={handleSearch}
          className="w-full px-4 py-2  border rounded-lg shadow-md shadow-purple-400 focus:outline-none focus:ring focus:ring-blue-300"
        />

        {error && <p className="text-red-500 mt-2">{error}</p>}
        <ul className="mt-4 bg-white rounded-md shadow-md">
          {results.length > 0
            ? results.map((accountant) => (
                <li
                  key={accountant.id}
                  className="px-4 py-2 border-b cursor-pointer hover:bg-gray-100"
                  onClick={() => handleDetails(accountant.id)}
                >
                  {accountant.name}
                </li>
              ))
            : query && (
                <p className="text-center p-4 text-gray-500">
                  No results found.
                </p>
              )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
