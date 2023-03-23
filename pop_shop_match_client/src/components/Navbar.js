import React from "react";
import Logo from "../media/static/logo.png";
import "../media/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={Logo} />
      <ul className="navbar-nav">
        {
          /* TODO:: Add date range component here */
          }
      </ul>
      <div className="profile-image">
        <img src="https://avatars.githubusercontent.com/u/94701315" />
      </div>
  </div>
  );
}

export default Navbar;