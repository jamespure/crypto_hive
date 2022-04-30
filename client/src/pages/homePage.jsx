import React from "react";
import Helmet from "react-helmet";
import Banner from "../components/Banner/Banner";
import Coins from "../components/Coins/Coins";

const homePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Coins />
    </>
  );
};

export default homePage;
