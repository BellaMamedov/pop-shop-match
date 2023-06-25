import React, { useState } from "react";
import "./artist-navbar.scss";
import { MdDiversity2 } from "react-icons/md";
//import DateRangePicker from "./DatePicker/date-picker-component";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const ArtistNavbar = () => {
  const [active, setActive] = useState("artist-navbar");

  const showNav = () => {
    setActive("artist-navbar active-artist-navbar");
  };

  const removeNavbar = () => {
    setActive("artist-navbar");
  };

  return (
    <section className="navbar-section">
      <header className="artist-header grid">
        <div className="logo-div">
          <a href="/" className="logo flex">
            <h1><MdDiversity2 className="icon" /> PopShopMatch.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="nav-lists flex">
            <li className="nav-item">
              <a href="/find-a-space" className="nav-link">
               Find a space
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                How it works?
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                What's New
              </a>
            </li>
            <button className="btn">
              <a href="/login">Login</a>
            </button>
            <button className="btn">
              <a href="/register">Register</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="close-navbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggle-navbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default ArtistNavbar;

{
  /* <DateRangePicker />
<div className="profile-image">
   <img src="https://avatars.githubusercontent.com/u/94701315" />
 </div> */
}
{
  /* <DateRangePicker /> */
}
