import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const WishlistItem = ({ item, removeItem, addToCartFromWishlist }) => {
  return (
    <li className="wishlist-item">
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
      <button onClick={addToCartFromWishlist}>Add to cart</button>
      <p className="wishlist-item__removeText" onClick={removeItem}>
        Remove from wishlist
      </p>
    </li>
  );
};

export default WishlistItem;
