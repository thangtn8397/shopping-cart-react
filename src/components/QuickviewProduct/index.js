import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SliderImage from "../UI/SliderImage";

const QuickviewProduct = ({ closequickview }) => {
  return (
    <section className="quickview">
      <header className="quickview__header">
        <CloseIcon onClick={closequickview} />
      </header>
      <div className="quickview__product">
        <div className="quickview__image">
          <div className="quickview__slider">
            <SliderImage />
          </div>
        </div>
        <div className="quickview__right">
          <div className="quickview__info">
            <h2 className="quickview__info-name">Lorem ipsum seat</h2>
            <h2 className="quickview__info-price">$19.00</h2>
            <div className="quickview__info-rate"></div>
            <p className="quickview__info-detail">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur.
            </p>
          </div>
          <div className="quickview__actions">
            <div className="quickview__options">
              <div className="quickview__options-color">
                <p>Color</p>
                <span
                  className="select-color"
                  style={{ backgroundColor: "#ccc" }}
                ></span>
              </div>
              <div className="quickview__option-size">
                <p>Size</p>
                <span>X</span>
                <span>M</span>
                <span>XL</span>
              </div>
              <div className="quickview__addtocart">
                <div className="quickview__addtocart-quantity">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
                <button className="quickview__addtocart-btn">
                  Add to cart
                </button>
                <span className="quickview__addtocart-wishlist"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickviewProduct;
