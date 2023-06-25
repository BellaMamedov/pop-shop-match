import React from "react";
import "./add-new-asset-navbar.scss";
import { MdDiversity2 } from "react-icons/md";


const FindSpaceNavbar = () => {


  return (
    <section className="navbar-section">
      <header className="add-new-asset-header grid">
        <div className="logo-div">
          <a href="/" className="logo flex">
            <h1><MdDiversity2 className="icon" /> PopShopMatch.</h1>
          </a>
        </div>
      </header>
    </section>
  );
};

export default FindSpaceNavbar;
