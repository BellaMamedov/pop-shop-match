import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUnlock } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import video from "../../Components/AssetCards/asset-card-media/stores-media/streetview.mp4";
import "./login-page.scss";

const LoginPage = () => {
  return (
    <section className="login-section">
    <video className="login-video" autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
      <div className="login-warpper">
        <div className="logreg-box">
          <div className="form-box login">
            <div className="logreg-title">
              <h2>Login</h2>
              <p>Plase Login to use the platform</p>
            </div>
            <form action="#">
              <div className="input-box">
                <span className="icon">
                  <i>
                    <HiOutlineMail />
                  </i>
                </span>
                <input type="email" required />
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
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>

              <button type="submit" className="btn">
                Login
              </button>
              <div className="logreg-link">
                <p>
                  Don't have an account? 
                  <a href="/register" className="register-link">
                      Register
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
              {" "}
              <BsFacebook />
            </i>
            <span>Login with facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
