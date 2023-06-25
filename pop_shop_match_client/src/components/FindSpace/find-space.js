import React, { useState } from "react";
import "./find-space.scss";


const FindSpace = () => {
  {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [business, setBusiness] = useState("");
    const [tel, setTel] = useState("");
    const [description, setDescription] = useState("");

    const onChangeHandlerLastName = (event) => {
      setLastName(event.target.value);
    };

    const onChangeHandlerFirstName = (event) => {
      setFirstName(event.target.value);
    };
    const onChangeHandlerJobTitle = (event) => {
      setJobTitle(event.target.value);
    };
    const onChangeHandlerBusiness = (event) => {
      setBusiness(event.target.value);
    };

    const onChangeHandlerTel = (event) => {
      setTel(event.target.value);
    };

    const onChangeHandlerDescription = (event) => {
      setDescription(event.target.value);
    };


    return (
      <main className="all-find-a-space">
        <form className="all-form container section flex">
          <div className="find-a-space">
            <div className="section-container">
              <div className="title-div">
                <h2>Get extra help with our Premium offer</h2>
                <p>
                Premium users get access to exclusive spaces and a dedicated Account Manager to search for spaces, organise viewings and negotiate with landlords on their behalf.
                </p>
              </div>

              <div className="info-div grid">
                <div className="text-div grid">
                  <div className="single-info">
                    <span className="number color-one ">01</span>
                    <h4>First name*</h4>
                    <div className="input-box">
                      <input
                        type="text"
                        value={firstName}
                        onChange={onChangeHandlerFirstName}
                      />
                    </div>
                  </div>

                  <div className="single-info">
                    <span className="number color-two">02</span>
                    <h4>Last name*</h4>
                    <div className="input-box">
                      <input
                        type="text"
                        value={lastName}
                        onChange={onChangeHandlerLastName}
                      />
                    </div>
                  </div>

                  <div className="single-info">
                    <span className="number color-two">03</span>
                    <h4>Job title*</h4>
                    <div className="input-box">
                      <input
                        type="text"
                        value={jobTitle}
                        onChange={onChangeHandlerJobTitle}
                      />
                    </div>
                  </div>

                  <div className="single-info">
                    <span className="number color-two">04</span>
                    <h4>Please provide your phone number*</h4>
                    <div className="input-box">
                      <input
                        type="tel"
                        value={tel}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        onChange={onChangeHandlerTel}
                      />
                    </div>
                  </div>


                  <div className="single-info">
                    <span className="number color-two">05</span>
                    <h4>Business e-mail*</h4>
                    <div className="input-box">
                      <input
                        type="text"
                        value={business}
                        onChange={onChangeHandlerBusiness}
                      />
                    </div>
                  </div>

                
                  <div className="single-info">
                    <span className="number color-four">06</span>
                    <h4>Please tell us a bit more about your project (max 200 characters)</h4>
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
        </form>
      </main>
    );
  }
};
export default FindSpace;
