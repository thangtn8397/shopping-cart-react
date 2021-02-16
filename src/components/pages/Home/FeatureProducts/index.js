import React from "react";
import ProductItem from "../../../ProductItem";
import { Link } from "react-router-dom";

const FeatureProducts = () => {
  return (
    <section className="feature-products">
      <div className="container wrapper">
        <div className="feature-products__header">
          <h2>Feature Products</h2>
          <span></span>
        </div>
        <div className="feature-products__grid">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <button className="feature-products__btn btn">
          <Link to="/products">All Products</Link>
        </button>
      </div>
    </section>
  );
};

export default FeatureProducts;
