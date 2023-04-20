import React from "react";
import ReactDOM from "react-dom";
import './index.css';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistApp from "./pages/ArtisApp/artist-app";

// function AllApp() {
//   return (
//     <BrowserRouter>
//     <Navbar />
//       <Routes>
//         <Route path="/" element={<ArtistHomepage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<ArtistApp />);