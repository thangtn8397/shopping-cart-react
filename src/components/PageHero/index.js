import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({ products, link }) => {
  return (
    <div className="page-hero">
      <div className="container">
        <div className="page-hero__wrapper">
          <Link to="/">Home</Link>
          {products ? <Link to="/products"> / Products</Link> : null}/{link}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
