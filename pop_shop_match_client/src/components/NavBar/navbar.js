import React from "react";
import Logo from "./navbar-media/logo.png";
import "./navbar.css";
import DateRangePicker from "./DatePicker/date-picker-component";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img className="navbar-logo" src={Logo} />
      </div>
      <DateRangePicker />
      <div className="profile-image">
        <img src="https://avatars.githubusercontent.com/u/94701315" />
      </div>
    </div>
  );
};

export default Navbar;
