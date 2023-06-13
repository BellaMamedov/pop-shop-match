import React from "react";
import "./single-asset-navbar.scss";
import { MdDiversity2 } from "react-icons/md";


const SingleAssetNavbar = () => {


  return (
    <section className="navbar-section">
      <header className="single-asset-header grid">
        <div className="logo-div">
          <a href="/" className="logo flex">
            <h1><MdDiversity2 className="icon" /> PopShopMatch.</h1>
          </a>
        </div>
      </header>
    </section>
  );
};

export default SingleAssetNavbar;
