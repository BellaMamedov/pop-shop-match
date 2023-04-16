import React from "react";
import "./asset-card.css";

const AssetCard = (props) => {
  const { storeImgUrl, streetName, costPerDay, storeOwnerImgUrl, ownerName } =
    props.asset;

  return (
    <div className="card">
    <div className="product--img-container">
      <img className="product--image" src={storeImgUrl} />
    </div>
      <h2 className="street-name">{streetName}</h2>
      <div className="price-container">
      <p className="price">{costPerDay} PER DAY</p>
      </div>
      <div className="store-owmer-img-container">
        <img className="store-owner-img" src={storeOwnerImgUrl} />
      </div>
      <h3 className="owner-name"> {ownerName}</h3>
      <div className="card-contact-owner" >
<i className="tel"></i>
<i className="message"></i>
<i className="mail"></i>
      </div>
    </div>
      );
};

export default AssetCard;
