import React from "react";
import "./artist-footer.scss";
import { FiSend } from "react-icons/fi";
import { MdDiversity2 } from "react-icons/md";
// import {FiChevronRight } from "react-icons/fi";

const ArtistFooter = () => {
  return (
    <section className="artist-footer">
      <div className="video-div">
        <video src="https://stage-popshopmatch.s3.eu-north-1.amazonaws.com/sea.mp4" loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="sec-content container">
        <div className="contact-div flex">
          <div className="text">
            <small>CANT FIND YOUR SAPCE?</small>
            <h2>Contat us</h2>
          </div>
          <div className="input-div flex">
            <input type="text" placeholder="Enter Email Adress" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="artist-footer-card flex">
          <div className="artist-footer-intro flex">
            <div className="logo-div">
              <a href="#" className="logo flex">
                <MdDiversity2 className="icon" /> PopShopMatch.
              </a>
            </div>

            <div className="artist-footer-paragraph">
              PopShopMatch allows artists to easily locate available stores for
              short-term rentals, ideal for hosting pop-up stores. With a
              user-friendly interface, artists can browse through a curated
              selection of spaces, filtering by location, size, and amenities.
              Store owners can showcase their available spaces, reaching a wider
              audience of talented artists and boosting foot traffic to their
              locations. PopShopMatch revolutionizes the way artists and store
              owners connect, fostering collaboration and creating unique
              shopping experiences.
            </div>
          </div>

          <div className="artist-footer-links flex">
            {/*Group One */}
            <div className="link-group">
              <span className="group-title"> GENERAL</span>
              <li className="artist-footer-list flex">
                {/* <FiChevronRight className="icon" /> */}
                Listing your space
              </li>
            </div>
            {/*Group two */}
            <div className="link-group">
              <span className="group-title">SERVICES</span>

              <li className="artist-footer-list flex">
                {/* <FiChevronRight className="icon" /> */}
                All locations
              </li>

              <li className="artist-footer-list flex">
                {/* <FiChevronRight className="icon" /> */}
                Explore map
              </li>
            </div>
            {/*Group three */}
            <div className="link-group">
              <span className="group-title"> SUPPORT</span>

              <li className="artist-footer-list flex">
                {/* <FiChevronRight className="icon" /> */}
                Help & Support
              </li>

              <li className="artist-footer-list flex">
                {/* <FiChevronRight className="icon" /> */}
                About us
              </li>

              <li className="artist-footer-list flex">
                {/* <FiChevronRight className="icon" /> */}
                Contact us
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistFooter;
