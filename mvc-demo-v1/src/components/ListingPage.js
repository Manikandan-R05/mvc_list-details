import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UniversityContext } from "../context/UniversityContext";
import "../styles/font.css";
import "../styles/listing.css";

const ListingPage = () => {
  const { universities } = useContext(UniversityContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedUniversities, setSortedUniversities] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");

  // Update sortedUniversities whenever universities changes
  useEffect(() => {
    setSortedUniversities([...universities]);
  }, [universities]);

  const handleSort = () => {
    const sorted = [...sortedUniversities].sort((a, b) => {
      if (sortDirection === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setSortedUniversities(sorted); // Update sorted universities
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const filteredUniversities = sortedUniversities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (name) => {
    const updatedUniversities = sortedUniversities.filter(
      (university) => university.name !== name
    );
    setSortedUniversities(updatedUniversities); // Update sorted universities after deletion
  };

  return (
    <div className="list_wrapper">
      <div className="list-container">
        <h2>University Listings</h2>
        <div className="actions">
          <input
            className="input-search"
            type="text"
            placeholder="Search universities"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSort}>
            Sort {sortDirection === "asc" ? "↑" : "↓"}
          </button>
        </div>
        <ul className="list">
          {filteredUniversities.length === 0 ? (
            <li className="no-results">No results found</li>
          ) : (
            filteredUniversities.map((university) => (
              <li className="list-item" key={university.name}>
                <Link
                  className="list-link"
                  to={`/details/${encodeURIComponent(university.name)}`}
                >
                  {university.name}
                </Link>
                <button onClick={() => handleDelete(university.name)}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ListingPage;
