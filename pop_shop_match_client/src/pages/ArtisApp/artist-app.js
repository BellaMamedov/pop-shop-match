import React from "react";
import "./artist-app.css";
import ArtistHomepage from "../../Components/ArtistHome/artist-homepage";
import ArtistNavbar from "../../Components/NavBar/aritst-navbar";
import ArtistMain from "../../Components/ArtistMain/artist-main";
import ArtistFooter from "../../Components/ArtistFooter/artist-footer";
const ArtistApp = () => {
  return (
    <>
      <ArtistNavbar />
      <ArtistHomepage />
       <ArtistMain />
      <ArtistFooter />  
    </>
  );
};

export default ArtistApp;
