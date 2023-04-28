import React from "react";
import "./added-new-asset-navbar.scss";
import { MdDiversity2 } from "react-icons/md";


const AddedNewAssetNavbar = () => {


  return (
    <section className="navbar-section">
      <header className="add-new-asset-header grid">
        <div className="logo-div">
          <a href="/" className="logo flex">
            <h1><MdDiversity2 className="icon" /> PoPShopMatch.</h1>
          </a>
        </div>
      </header>
    </section>
  );
};

export default AddedNewAssetNavbar;
