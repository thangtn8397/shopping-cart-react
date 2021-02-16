import React from "react";
import Sidebar from "./Sidebar";
import ProductItem from "../../ProductItem";

const Products = () => {
  return (
    <div className="products">
      <header className="products__header"></header>
      <div className="products__wrapper container wrapper">
        <Sidebar />
        <div className="products__items products__grid">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default Products;
