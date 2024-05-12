// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListingPage from "./components/ListingPage";
import DetailsPage from "./components/DetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/details/:name" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
