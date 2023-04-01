import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Homepage";
import Navbar from "./components/Navbar";

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