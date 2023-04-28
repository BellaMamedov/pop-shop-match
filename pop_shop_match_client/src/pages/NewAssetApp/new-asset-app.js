import React from "react";
import "./new-asset-app.scss";
import AddNewAsset from '../../Components/AddNewAsset/add-new-asset';
import AddNewAssetNavbar from "../../Components/NavBar/add-new-asset-navbar";

const NewAssetApp = () => {
  return (
    <>
    <AddNewAssetNavbar />
   <AddNewAsset />
    </>
  );
};

export default NewAssetApp;
