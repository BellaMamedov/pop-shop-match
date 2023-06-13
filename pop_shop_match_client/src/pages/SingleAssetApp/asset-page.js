import React from "react";
import "./asset-page.scss";
import SingleAssetNavbar from "../../Components/NavBar/single-asset-navbar.js"
import SingleAsset from "../../Components/SingleAsset/single-asset.js"



const AssetPage = () => {
  return (
    <>
 <SingleAssetNavbar/> 
 <SingleAsset/>
     
    </>
  );
};

export default AssetPage;
