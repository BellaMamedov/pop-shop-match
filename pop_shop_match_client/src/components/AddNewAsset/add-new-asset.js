import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from "axios";
import "./add-new-asset.scss";

const AddNewAsset = () => {
  {
    const [address, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState("");
    const [description, setDescription] = useState("");

    const onChangeHandlerAddress = (event) => {
      setAdress(event.target.value);
    };

    const onChangeHandlerCity = (event) => {
      setCity(event.target.value);
    };

    const onChangeHandlerPhotoLink = (event) => {
      setPhotoLink(event.target.value);
    };

    const onChangeHandlerDescription = (event) => {
      setDescription(event.target.value);
    };

    async function addPhotoByLink(event) {
      event.preventDefault();
      await axios.post("/upload-by-link", { link: photoLink });
    }

    return (
      <div className="new-asset-form-container">
        <div className="all-form-body-content">


          <h2>Let's get started listing your space.</h2>
          <form>
            <p>Your space characteristics</p>
            <div className="input-box">
              <input
                type="text"
                value={address}
                onChange={onChangeHandlerAddress}
                placeholder="exmple: Rothschild Boulevard 54"
              />
              <label className="store-address">
                What is the address of your space?
              </label>
            </div>
            <div className="input-box">
              <input
                type="text"
                value={city}
                onChange={onChangeHandlerCity}
                placeholder="city, for example: Tel Aviv"
              />
              <label className="store-city">Store city</label>
            </div>
            <p>Showcase your space</p>
            <div className="input-box">
              <input
                className="add-link-photo-input"
                type="text"
                value={photoLink}
                onChange={onChangeHandlerPhotoLink}
                placeholder={"Add using a link..."}
              />
              <button onClick={addPhotoByLink} className="add-photo-btn">
                Add photo
              </button>
              <label className="store-photos">Add photo by link </label>
              <div className="add-photo-link-btn-div"></div>
            </div>
            <div className="asset-photos grid">
              <button className="upload-photos-btn">
                Upload from your device
                <AiOutlineCloudUpload className="icon" />
              </button>
            </div>
            <p className="mini-place-desc">What best describes your space?</p>
            <textarea
              rows={7}
              cols={60}
              value={description}
              onChange={onChangeHandlerDescription}
            />
            <div className="save-btn-div">
              <button className="save-form-new-asset-btn" type="submit">
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default AddNewAsset;
