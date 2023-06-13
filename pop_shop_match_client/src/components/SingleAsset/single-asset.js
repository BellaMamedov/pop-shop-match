import React from "react";
import {ImLocation} from "react-icons/im";
import "./single-asset.scss";



const SingleAsset = () => {
  return (
<section className="single-asset-home">
<div className="overlay-single-asset"></div>
<div className="asset-address-title">
<h1> <ImLocation className="icon"/>Allenby Street 11</h1>
</div>
<div className="img-grid">
    {/* <img src={} alt=""/>
    <img src={} alt=""/>
    <img src={} alt=""/>
    <img src={} alt=""/>
    <img src={} alt=""/> */}
</div>
<div className="address-map">
    <div className="map"></div>
</div>
<div className="asset-details-container">
<div className="asset-details"></div>
</div>
<div className="extra-information-container">
    <div className="size-i"></div>
    <div className="est-daily-traffic-i"></div>
<div className="parking-i"></div>
</div>
<div className="asset-price-per-day-container">
    <div className="asset-price">70₪</div>
    <div className="per-day-title">PER DAY</div>
</div>
{/* <DateRangePicker/> */}
    </section>
  );
}

export default SingleAsset;
