import React from "react";
import "./asset-card.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {HiOutlineClipboardCheck} from "react-icons/hi";
import {MdPhoneInTalk} from 'react-icons/md';
import {BsFillChatFill} from 'react-icons/bs';
import {IoMail} from 'react-icons/io5';
const AssetCard = (props) => {
  const {
    storeImgUrl,
    storeCity,
    streetName,
    costPerDay,
    storeOwnerImgUrl,
    ownerName,
  } = props.asset;

  return (
    <div key={props.id} className="single-asset">
      <div className="asset-img-div">
        <img src={storeImgUrl} alt={streetName} />
      </div>

      <div className="card-info">
        <h4 className="street-title"> {streetName}</h4>
        <span className="continent flex">
          <HiOutlineLocationMarker className="icon" />
          <span className="city-name"> {storeCity}</span>
        </span>

        <div className="cost-per-day flex">
        <div className="left-div flex">
          <div className="store-owner-img">
            <img src={storeOwnerImgUrl} alt={ownerName}/>
          </div>
          <div className="owner-about">
          <span className="name">{ownerName}</span>
        
          <div className="owner-contact">
          <MdPhoneInTalk className="icon"/>
          <BsFillChatFill className="icon"/>
          <IoMail className="icon" />
          </div>
          </div>
        </div>
          <div className="price">
            <h5 className="cost-per-day-price">{costPerDay}₪</h5>
            <h3 className="cost-per-day-title">PER DAY</h3> 
          </div>
        </div>
        <button className="btn flex">
DETAILS <HiOutlineClipboardCheck className="icon"/>
        </button>
      </div>
    </div>
  );
};

export default AssetCard;

