import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistApp from "./pages/ArtisApp/artist-app";
import LoginPage from "./pages/LoginPage/login-page";
import RegisterPage from "./pages/RegisterPage/register-page";
import axios from "axios";


axios.defaults.baseURL = 'http://localhost:4000/';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArtistApp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
