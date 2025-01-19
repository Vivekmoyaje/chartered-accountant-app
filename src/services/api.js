// const API_URL =
//   "https://vivekmoyaje.github.io/chartered-accountant-api/db.json";

// export const searchAccountants = async (query) => {
//   const response = await fetch(`${API_URL}/accountants?q=${query}`);
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// };

// export const getAccountantById = async (id) => {
//   const response = await fetch(`${API_URL}/accountants/${id}`);
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// };
// api.js

import axios from "axios";

const baseURL =
  "https://vivekmoyaje.github.io/chartered-accountant-api/db.json";

export const searchAccountants = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data.accountants; // Returns the accountants list
  } catch (error) {
    console.error("Error fetching accountants:", error);
    throw error; // Ensures calling code handles the error
  }
};

export const getAccountantById = async (id) => {
  try {
    const response = await axios.get(baseURL); // Fetch the entire data
    const accountants = response.data.accountants; // Access accountants array
    //console.log(response.data.accountants);
    const accountant = accountants.find((acc) => acc.id === Number(id)); // Find by ID
    console.log(accountant);
    return accountant; // Returns a single accountant object
  } catch (error) {
    console.error("Error fetching accountant details:", error);
    throw error;
  }
};
