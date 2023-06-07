import React from "react";
import "./new-asset-app.scss";
import AddNewAssetNew from '../../Components/AddNewAsset/add-new-asset-new';
import AddNewAssetNavbar from "../../Components/NavBar/add-new-asset-navbar";

const NewAssetApp = () => {
  return (
    <>
    <AddNewAssetNavbar />
   <AddNewAssetNew />
    </>
  );
};

export default NewAssetApp;
