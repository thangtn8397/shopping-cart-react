import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const WishlistItem = () => {
  return (
    <div className="wishlist-item">
      <span className="wishlist-item__removeIcon">
        <CloseIcon />
      </span>
      <div className="wishlist-item__detail">
        <Link to="/products">
          <img src="https://dl.airtable.com/.attachmentThumbnails/1e222e36e935db2695c33e3d30c2e482/91b542e0" />
        </Link>
        <div>
          <h4>emperor bed</h4>
          <p>$400</p>
        </div>
      </div>
      <button>Add to cart</button>
      <p className="wishlist-item__removeText">Remove from wishlist</p>
    </div>
  );
};

export default WishlistItem;
