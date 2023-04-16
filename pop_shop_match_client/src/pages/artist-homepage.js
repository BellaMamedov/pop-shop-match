import React from "react";
import Carousel from "react-multi-carousel";
import './artist-homepage.css'
import "react-multi-carousel/lib/styles.css";
import AssetCard from "../components/AssetCards/asset-card-component";
import {
  assetCardData,
  responsive,
} from "../components/AssetCards/asst-card-data";
import { Button } from "antd";

function Homepage() {
  const assets = assetCardData.map((asset) => (
    <AssetCard
      key={asset.id}
     asset={asset}
    />
  ));

  return (
    <React.Fragment>
    <h1 className="app-slogan">Find your perfect pop-up space with <br/> ease - Rent, Pop, and Go!</h1>
    <div className="carousel-container">
      <Carousel responsive={responsive}>{assets}</Carousel>
    </div>
    </React.Fragment>
  );
}

export default Homepage;
