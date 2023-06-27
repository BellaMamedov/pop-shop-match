import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistApp from "./pages/ArtisApp/artist-app";
import LoginPage from "./pages/LoginPage/login-page";
import RegisterPage from "./pages/RegisterPage/register-page";
import NewAssetApp from "./pages/NewAssetApp/new-asset-app";
import axios from "axios";
import AssetPage from "./pages/SingleAssetApp/asset-page";
import FindSpaceApp from "./pages/FindSpaceApp/find-space-app";
import SingleAssetApp from "./pages/SingleAssetApp/asset-page";

axios.defaults.baseURL = 'http://127.0.0.1:4000/';
axios.defaults.withCredentials = true;




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArtistApp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-new-asset" element={<NewAssetApp />} />
        <Route path="/asset-page" element={<AssetPage />} />
        <Route path="/find-a-space" element={<FindSpaceApp />} />
        <Route path="/asset" element={<SingleAssetApp />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
