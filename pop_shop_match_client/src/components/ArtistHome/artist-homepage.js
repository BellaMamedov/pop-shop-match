import React from "react";
import "./artist-homepage.scss";

import { GrLocation } from "react-icons/gr";
//import "react-multi-carousel/lib/styles.css";
//import { Button } from "antd";

const ArtistHomepage = () => {
  return (
    <section className="artist-home">
      <div className="overlay"></div>
      <video
        src="https://stage-popshopmatch.s3.eu-north-1.amazonaws.com/streetview.mp4"
        muted
        autoPlay
        loop
        type="video/mp4"
      ></video>
      <div className="artist-home-content container">
        <div className="text-div">
          <span className="small-text-slogan">
            Unleash your creativity and pop up with us
          </span>
          <h1 className="text-slogan">Search your Pop-Shop</h1>
        </div>

        <div className="asset-search-div grid">
          <div className="destination-input">
            <label htmlFor="city">Discover the top cities</label>
            <div className="input flex">
              <input type="text" placeholder="Enter city here... " />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="date-input">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="price-input">
            <div className="lable-total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">5000₪</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistHomepage;
