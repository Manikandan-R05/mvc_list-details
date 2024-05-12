import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom"; // Import Link
import { UniversityContext } from "../context/UniversityContext";
import "../styles/font.css";
import "../styles/detail.css";

const DetailsPage = () => {
  const { universities } = useContext(UniversityContext);
  const { name } = useParams();

  // Ensure proper decoding of URI component
  const decodedName = decodeURIComponent(name);

  const university = universities.find((u) => u.name === decodedName);
  // Function to check if a URL is absolute
  const isAbsoluteUrl = (url) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };
  return (
    <div className="detail-container">
      <h2>University Details</h2>

      <Link to="/" className="go-back-link">
        &#129136; Go back to list page
      </Link>
      {university ? (
        <div>
          <p>Name: {university.name}</p>
          {university["state-province"] && (
            <p>State-Province: {university["state-province"]}</p>
          )}
          <p>Country: {university.country}</p>
          {/* Display other details of the selected university */}
          {university.domains[0] && (
            <a
              href={
                isAbsoluteUrl(university.domains[0])
                  ? university.domains[0]
                  : `https://${university.domains[0]}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit University Website &#129174; &#129174;
            </a>
          )}
        </div>
      ) : (
        <p>University not found</p>
      )}
    </div>
  );
};

export default DetailsPage;
