import React from "react";
import Carousel from "react-multi-carousel";
import './homePage.css'
import "react-multi-carousel/lib/styles.css";
import AssetCard from "../components/AssetCards/AssetCard";
import {
  assetCardData,
  responsive,
} from "../components/AssetCards/AsstCardData";

function Homepage() {
  const assets = assetCardData.map((asset) => (
    <AssetCard
      key={asset.id}
      storeImgUrl={asset.storeImgUrl}
      streetName={asset.streetName}
      costPerDay={asset.costPerDay}
      storeOwnerImgUrl={asset.storeOwnerImgUrl}
    ownerName={asset.ownerName}
    />
  ));

  return (
    <div className="app">
    <h1 className="app-slogan">Find your perfect pop-up space with <br/> ease - Rent, Pop, and Go!</h1>
      <Carousel responsive={responsive}>{assets}</Carousel>
    </div>
  );
}

export default Homepage;
