import React, { useState } from "react";
import "./artist-app.css";
import ArtistHomepage from "../../Components/ArtistHome/artist-homepage";
import ArtistNavbar from "../../Components/NavBar/aritst-navbar";
import ArtistMain from "../../Components/ArtistMain/artist-main";
import ArtistFooter from "../../Components/ArtistFooter/artist-footer";
const ArtistApp = () => {
  const [priceFilter, setPriceFilter] = useState(100);
  const setPriceRangeValue = (event) => {
    let newPriceValue = event.target.value;
    setPriceFilter(newPriceValue);
  }

  return (
    <>
      <ArtistNavbar />
      <ArtistHomepage priceFilter={priceFilter} setPriceRangeValue={setPriceRangeValue} />
      <ArtistMain priceFilter={priceFilter} />
      <ArtistFooter />
    </>
  );
};

export default ArtistApp;
