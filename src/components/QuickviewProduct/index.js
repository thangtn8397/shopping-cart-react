import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import SliderImage from "../UI/SliderImage";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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
            <div className="quickview__info-rate">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </div>

            <h3 className="quickview__info-price">$19.00</h3>
            <div className="quickview__info-detail">
              <p>
                Cloud bread VHS hell of banjo bicycle rights jianbing umami
                mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                typewriter fingerstache pinterest pork belly narwhal. Schlitz
                venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                trust fund hashtag kinfolk microdosing gochujang live-edge
              </p>
              <div className="quickview__info-sku">
                <label htmlFor="sku">SKU:</label>
                <p>RecNZ0koOqEmilmoz</p>
              </div>
              <div className="quickview__info-brand">
                <label htmlFor="brand">Brand:</label>
                <p>Ikea</p>
              </div>
            </div>
          </div>
          <hr className="quickview__separator" />
          <div className="quickview__actions">
            <div className="quickview__options">
              <div className="quickview__options-color">
                <p>Color</p>
                <span
                  className="select-color"
                  style={{ backgroundColor: "#ccc" }}
                ></span>
              </div>
              <div className="quickview__options-size">
                <p>Size</p>
                <span>X</span>
                <span>M</span>
                <span>XL</span>
              </div>
            </div>
            <div className="quickview__addtocart">
              <div className="quickview__addtocart-quantity">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <button className="quickview__addtocart-btn">Add to cart</button>
              <span className="quickview__addtocart-wishlist">
                <FavoriteBorderIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickviewProduct;
