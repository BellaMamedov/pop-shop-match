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
    const [cityFilter, setCityFilter] = useState("");
    const setCityNameValue = (event) => {
      let newCityValue = event.target.value;
      setCityFilter(newCityValue);
    }
  

  return (
    <>
      <ArtistNavbar />
      <ArtistHomepage
        priceFilter={priceFilter}
        setPriceRangeValue={setPriceRangeValue}
        cityFilter={cityFilter}
        setCityNameValue={setCityNameValue}
      />
      <ArtistMain priceFilter={priceFilter} cityFilter={cityFilter} />
      <ArtistFooter />
    </>
  );
};

export default ArtistApp;
