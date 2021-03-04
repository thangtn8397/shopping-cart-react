import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({ products, link }) => {
  return (
    <div className="page-hero">
      <div className="container">
        <div className="page-hero__wrapper">
          <Link to="/">Home</Link>
          {products ? (
            <Link to="/products">
              <span className="page-hero__slash">/</span> Products
            </Link>
          ) : null}
          {link ? (
            <>
              <span className="page-hero__slash">/</span>
              <span className="page-hero__link">{link}</span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
