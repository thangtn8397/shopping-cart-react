import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import FeatureProducts from "./FeatureProducts";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home container wrapper">
      <Banner />
      <FeatureProducts />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
