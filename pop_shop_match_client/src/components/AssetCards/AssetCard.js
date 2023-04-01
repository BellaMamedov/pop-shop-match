import React from 'react';
import '../../media/assetCard.css';

const AssetCard = (props) => {
  return (
    <div className='card'>
    <img className = 'product--image' src={props.storeImgUrl} />
    <h2 className='street-name'>{props.streetName}</h2>
    <p className='price'>{props.costPerDay} PER DAY</p>
    <img className='store-owner-img' src={props.storeOwnerImgUrl} />
    <h3 className='owner-name'> {props.ownerName}</h3>
    </div>
  )
};

export default AssetCard;
