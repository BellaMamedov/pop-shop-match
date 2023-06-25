import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from "axios";
import "./add-new-asset-new.scss";

import storesimg from "./add-new-asset-media/storeimg.gif";

const AddNewAssetNew = () => {
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
      <main className="all-add-new-asset">
        <form className="all-form container section flex">
          <div className="add-new-asset ">
            <div className="section-container">
              <div className="title-div">
                <h1>welcome bella 👋</h1>
                <h2>Let's get started listing your space</h2>
                <p>
                  Earn money and find clients by listing your space in less than
                  five minutes
                </p>
              </div>

              <div className="info-div grid">
                <div className="text-div grid">
                  <div className="single-info">
                    <span className="number color-one ">01</span>
                    <h4>Which city is your store located in?</h4>
                    <div className="input-box">
                      <input
                        type="text"
                        value={city}
                        onChange={onChangeHandlerCity}
                        placeholder="city, for example: Tel Aviv"
                      />
                    </div>
                  </div>

                  <div className="single-info">
                    <span className="number color-two">02</span>
                    <h4>What is the address of your space?</h4>
                    <div className="input-box">
                      <input
                        type="text"
                        value={address}
                        onChange={onChangeHandlerCity}
                        placeholder="exmple: Rothschild Boulevard 54"
                      />
                    </div>
                  </div>

                  <div className="single-info">
                    <span className="number color-three">03</span>
                    <h4>Showcase your space</h4>
                    <div className="input-box">
                      <input
                        className="add-link-photo-input"
                        type="text"
                        value={photoLink}
                        onChange={onChangeHandlerPhotoLink}
                        placeholder={"Add using a link..."}
                      />
                      <button
                        onClick={addPhotoByLink}
                        className="add-photo-btn"
                      >
                        Add photo
                      </button>
                      <div className="add-photo-link-btn-div"></div>
                    </div>
                    <div className="asset-photos grid">
                      <button className="upload-photos-btn">
                        Upload from your device
                        <AiOutlineCloudUpload className="icon" />
                      </button>
                    </div>
                  </div>

                  <div className="single-info">
                    <span className="number color-four">04</span>
                    <h4>What vibes does your space give off?</h4>
                    <textarea
                      className="text-area"
                      rows={7}
                      cols={60}
                      value={description}
                      onChange={onChangeHandlerDescription}
                    />
                  </div>

                  <div className="save-btn-container">
                    <button type="submit" className="save-form-new-asset-btn">
                      Let's go
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="add-new-asset-img-container flex">
          <img src={storesimg} alt="store-img"/>
        </div>
        </form>
      </main>
    );
  }
};
export default AddNewAssetNew;