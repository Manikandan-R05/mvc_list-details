import React from "react";
import "./font.css";
import "./details.css";

const ArticleDetails = ({ detailItem }) => {
  const closeDetailPop = (event) => {
    event.currentTarget.parentElement.parentElement.classList.remove(
      "show_detial"
    );
    const overlayelement = document.getElementsByClassName("overlay_div");
    overlayelement[0].classList.remove("active");
    event.stopPropagation();
  };
  return (
    <div className="detailBlock">
      {
        <>
          <div className="popup-close">
            <span onClick={closeDetailPop}>X</span>
          </div>
          <h5>About the book</h5>
          <h3>{detailItem.description}</h3>
          <h5>Available at the following sites</h5>
          <ul className="book_available_sites">
            {detailItem.buy_links.map((links) => (
              <li className="truncated-url">
                <h2>{links.name}</h2>
                <a href={links.url} className="truncated-text">
                  {links.url}
                </a>
              </li>
            ))}
          </ul>
        </>
      }
    </div>
  );
};

export default ArticleDetails;
