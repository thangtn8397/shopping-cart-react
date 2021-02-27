import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const WishlistItem = ({ item, removeItem }) => {
  return (
    <div className="wishlist-item">
      <span className="wishlist-item__removeIcon">
        <CloseIcon onClick={removeItem} />
      </span>
      <div className="wishlist-item__detail">
        <Link to="/products">
          <img src={item.image} />
        </Link>
        <div>
          <h4>{item.name}</h4>
          <p>${item.price}</p>
          <span
            className="select-color"
            style={{ backgroundColor: `${item.selectedColor}` }}
          ></span>
        </div>
      </div>
      <button>Add to cart</button>
      <p className="wishlist-item__removeText">Remove from wishlist</p>
    </div>
  );
};

export default WishlistItem;
