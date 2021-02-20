import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarRateIcon from "@material-ui/icons/StarRate";
import Modal from "../UI/Modal";
import QuickviewProduct from "../QuickviewProduct";
import { useHistory } from "react-router-dom";

const ProductItem = ({ product, addToCart }) => {
  const [openQuickview, setOpenQuickview] = useState(false);
  const history = useHistory();
  return (
    <>
      <div className="product-item">
        <div className="product-item__wrapper">
          <div
            className="product-item__background"
            onClick={() => history.push(`/products/${product.id}`)}
            style={{
              backgroundImage: `url(${product.image})`,
            }}
          ></div>
          <div className="product-item__actions">
            <div className="product-item__actions--wishlist">
              <FavoriteBorderIcon />
            </div>
            <div
              className="product-item__actions--addtocart"
              onClick={addToCart}
            >
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
          <p className="product-item__name">{product.name}</p>
          <div className="product-item__rate" style={{ color: "#ab7a5f" }}>
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </div>
          <span className="product-item__price">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
      <Modal isOpen={openQuickview} closeModal={() => setOpenQuickview(false)}>
        <QuickviewProduct
          closequickview={() => setOpenQuickview(false)}
          product={product}
        />
      </Modal>
    </>
  );
};

export default ProductItem;
