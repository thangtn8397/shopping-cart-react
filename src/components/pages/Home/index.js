import React from "react";
import Banner from "./Banner";
import Custom from "./Custom";
import FeatureProducts from "./FeatureProducts";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <FeatureProducts />
      <Custom />
    </div>
  );
};

export default Home;
