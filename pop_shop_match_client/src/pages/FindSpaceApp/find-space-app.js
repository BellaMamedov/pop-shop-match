import React from "react";
import "./find-space.scss";
import FindSpace from '../../Components/FindSpace/find-space';
import FindSpaceNavbar from "../../Components/NavBar/find-space-navbar";

const FindSpaceApp = () => {
  return (
    <>
    <FindSpaceNavbar />
   <FindSpace />
    </>
  );
};

export default FindSpaceApp;
