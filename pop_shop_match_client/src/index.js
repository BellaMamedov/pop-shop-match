import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/artist-homepage";
import Navbar from "./components/NavBar/navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));