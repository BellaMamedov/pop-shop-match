import React from "react";
import "./artist-main.scss";
import { assetCardData } from "../AssetCards/asset-card-data";
import AssetCard from "../AssetCards/asset-card-component";

const ArtistMain = (props) => {
  let isShowNoResult = true;
  const assets = assetCardData.map((asset) => {
    if (
      asset.costPerDay > props.priceFilter ||
      !asset.storeCity.toLowerCase().includes(props.cityFilter.toLowerCase())
    ) {
      return null;
    }

    isShowNoResult = false;
    
    return <AssetCard key={asset.id} asset={asset} />;
  });

  return (
    <section className="main container section">
      <div className="cards-title-div">
        <h3 className="cards-title">Launch your pop-up idea</h3>
      </div>

      <div className="sec-content grid">
        {assets}
        {isShowNoResult ? (
          <div style={{ textAlign: "center" }}>
            <h1>No Results!</h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ArtistMain;
