import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUnlock } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import video from "../../Components/AssetCards/asset-card-media/stores-media/streetview.mp4";
import "./register-page.scss";

const RegisterPage = () => {
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

            <form action="#">
              <div className="input-box">
                <span className="icon">
                  <i>
                    <AiOutlineUser />
                  </i>
                </span>
                <input type="text" required />
                <label>Full Name</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i>
                    <HiOutlineMail />
                  </i>
                </span>
                <input type="password" required />
                <label>Email</label>
              </div>

              <div className="input-box">
                <span className="icon">
                  <i>
                    <AiOutlineUnlock />
                  </i>
                </span>
                <input type="password" required />
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
