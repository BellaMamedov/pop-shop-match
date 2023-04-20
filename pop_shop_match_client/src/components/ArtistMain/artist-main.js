import React from "react";
import "./artist-main.scss";
import { assetCardData } from "../AssetCards/asset-card-data";
import AssetCard from "../AssetCards/asset-card-component";

const ArtistMain = () => {
  console.log(assetCardData);
  const assets = assetCardData.map((asset) => (
    <AssetCard key={asset.id} asset={asset} />
  ));

  return (
    <section className="main container section">
      <div className="cards-title-div">
        <h3 className="cards-title">Launch your pop-up idea</h3>
      </div>

    <div className="sec-content grid">{assets}</div> 
    </section>
  );
};

export default ArtistMain;
