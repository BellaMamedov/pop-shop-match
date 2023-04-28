import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUnlock } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import video from "../../Components/AssetCards/asset-card-media/stores-media/streetview.mp4";
import "./login-page.scss";
import axios from "axios";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onchangeHandlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const onchangeHandlerPassword = (event) => {
    setPassword(event.target.value);
  };

  async function handelLoginSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("/login", { email, password });
      alert("Login successful");
      setRedirect(true);
    } catch (e) {
      alert("Login failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

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
            <form action="/login" onSubmit={handelLoginSubmit}>
              <div className="input-box">
                <span className="icon">
                  <i>
                    <HiOutlineMail />
                  </i>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={onchangeHandlerEmail}
                />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <i>
                    <AiOutlineUnlock />
                  </i>
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={onchangeHandlerPassword}
                />
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
