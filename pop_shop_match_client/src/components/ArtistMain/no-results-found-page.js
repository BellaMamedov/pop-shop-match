import React from "react";
import "./no-results-found-page.scss";
import locationsearch from "./artist-main-media/locationsearch.png";


const NoResults = () => {
  
 
  return (
    <>
   <div className="main-section">
  <div className="content-box">
  <div className="img-container">
    <img src={locationsearch} alt="search-not-found"></img>
  </div>
    <h1 className="result-title">No results found</h1>
    <p>We couldn't find what you searched for</p>
    <p>try searching again.</p>
  </div>
  </div>
   </>
  );
};

export default NoResults;
