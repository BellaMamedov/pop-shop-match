import React from "react";
import "./new-asset-app.scss";
import AddedNewAsset from '../../Components/AddedNewAsset/added-new-asset';
import AddedNewAssetNavbar from "../../Components/NavBar/added-new-asset-navbar";

const NewAssetApp = () => {
  return (
    <>
    <AddedNewAssetNavbar />
   <AddedNewAsset />
    </>
  );
};

export default NewAssetApp;
