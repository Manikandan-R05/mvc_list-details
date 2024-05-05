import axios from "axios";
// api.js
//const API_URL = "http://universities.hipolabs.com/search?country=India";
const API_URL =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=m0kzqlmGnMEbEGSyuEx3RhbD6gm5qpem";
/*  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=aarL2NqZSImokRdDeza5jCkHLsfZjWI1"; */
/* "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=PbYA24xyseFrrcavsfTNUGBuYvpORMVR" */

export const fetchData = async () => {
  const response = await axios.get(API_URL);
  return response.data.results.books; // Adjust based on your API's response structure
};
