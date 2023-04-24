import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUnlock } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import axios from 'axios';
import video from "../../Components/AssetCards/asset-card-media/stores-media/streetview.mp4";
import "./register-page.scss";

const RegisterPage = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');



const onchangeHandlerName = (event) => {
setName(event.target.value);
}

const onchangeHandlerEmail =(event) => {
  setEmail(event.target.value);
  }

  const onchangeHandlerPassword =(event) => {
    setPassword(event.target.value);
    }

const registerUser = (event) => {
  event.preventDefault();
axios.post('/register', {
name,
email,
password
});
}


  return (
    <section className="register-section">
      <video className="register-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="register-warpper">
        <div className="logreg-box">
          <div className="form-box register">
            <div className="logreg-title">
              <h2>Registration</h2>
              <p>Plase provide the following to verify your identity</p>
            </div>

            <form onSubmit={registerUser}>
              <div className="input-box">
                <span className="icon">
                  <i>
                    <AiOutlineUser />
                  </i>
                </span>
                <input type="text" value={name} onChange={onchangeHandlerName}  />
                <label>Full Name</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i>
                    <HiOutlineMail />
                  </i>
                </span>
                <input type="email" value={email} onChange={onchangeHandlerEmail} />
                <label>Email</label>
              </div>

              <div className="input-box">
                <span className="icon">
                  <i>
                    <AiOutlineUnlock />
                  </i>
                </span>
                <input type="password" value={password} onChange={onchangeHandlerPassword} />
                <label>Password</label>
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />I agree to the terms & conditions
                </label>
              </div>

              <button type="submit" className="btn">
                Register
              </button>
              <div className="logreg-link">
                <p>
                  Already have an account?
                  <a href="/login" className="login-link">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="media-login-options">
          <a href="#">
            <i>
              <AiOutlineGoogle />
            </i>
            <span>Login with google</span>
          </a>
          <a href="#">
            <i>
              <BsFacebook />
            </i>
            <span>Login with facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
