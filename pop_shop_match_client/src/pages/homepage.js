import React from "react";
import Carousel from "react-multi-carousel";
import './homepage.css'
import "react-multi-carousel/lib/styles.css";
import AssetCard from "../components/AssetCards/asset-card-component";
import {
  assetCardData,
  responsive,
} from "../components/AssetCards/asst-card-data";

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
