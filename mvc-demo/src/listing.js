import React, { useState, useEffect } from "react";
import { fetchData } from "./apiresponse"; // Import data fetching function
import DetailsItem from "./details.js";
import "./font.css";
import "./listing.css";
import "./search.css";
const Listing = () => {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setItems(data); // Update state with fetched data
    };
    getData();
  }, []);
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const openDetailPop = (event) => {
    const detailElements = document.querySelectorAll(".show_detail");
    const overlayelement = document.getElementsByClassName("overlay_div");
    overlayelement[0].classList.add("active");
    detailElements.forEach((element) =>
      element.classList.remove("show_detail")
    );
    event.currentTarget.childNodes[2].classList.add(
      "show_detial",
      "detailBlock"
    );
  };

  return (
    <>
      <div className="listing container">
        <div className="head">
          <div className="headerobjectswrapper">
            <header>Hardcover Fiction</header>
          </div>

          <div className="subhead">
            Copyright (c) 2024 The New York Times Company. All Rights Reserved.
          </div>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Books by Name..."
            value={searchText}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        {
          /* <ul>
              {filteredItems.map((item) => (
                <li key={item.uri} onClick={() => console.log(item)}>
                  <h3>{item.title}</h3>
                  { }
                </li>
              ))}
            </ul> */
          <div className="content">
            <div className="collumns">
              {filteredItems.map((item) => (
                <div className="collumn" onClick={openDetailPop}>
                  <div className="head">
                    <span className="headline hl3">{item.title}</span>
                    <p>
                      <span className="headline hl4">{item.author} </span>
                    </p>
                  </div>

                  {
                    <div className="image_wrapper">
                      <img src={item.book_image} alt="Media" />
                    </div>
                  }

                  {/* <img src={item.media.media - metadata[2].url} /> */}
                  <DetailsItem detailItem={item} />
                </div>
              ))}
            </div>
          </div>
        }
      </div>
      <div className="overlay_div"></div>
    </>
  );
};

export default Listing;
