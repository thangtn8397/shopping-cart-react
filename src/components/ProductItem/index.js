import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarRateIcon from "@material-ui/icons/StarRate";
import Modal from "../UI/Modal";
import QuickviewProduct from "../QuickviewProduct";

const ProductItem = () => {
  const [openQuickview, setOpenQuickview] = useState(false);
  return (
    <>
      <div className="product-item">
        <div
          className="product-item__image"
          style={{
            backgroundImage: `url(
            "https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af"
          )`,
          }}
        >
          <div className="product-item__actions">
            <div className="product-item__actions--wishlist">
              <FavoriteBorderIcon />
            </div>
            <div className="product-item__actions--addtocart">
              Add To Cart
              <ShoppingCartIcon />
            </div>
            <div
              className="product-item__actions--quickview"
              onClick={() => setOpenQuickview(true)}
            >
              <VisibilityIcon />
            </div>
          </div>
        </div>
        <div className="product-item__info">
          <p className="product-item__name">entertainment center</p>
          <div className="product-item__rate" style={{ color: "#ab7a5f" }}>
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </div>
          <span className="product-item__price">$19.00</span>
        </div>
      </div>
      <Modal isOpen={openQuickview} closeModal={() => setOpenQuickview(false)}>
        <QuickviewProduct closequickview={() => setOpenQuickview(false)} />
      </Modal>
    </>
  );
};

export default ProductItem;
