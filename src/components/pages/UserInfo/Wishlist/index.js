import React, { useEffect } from "react";
import WishlistItem from "./WishlistItem";
import { connect } from "react-redux";
import { removeFromWishlist } from "../../../../store/actions";

const Wishlist = ({ wishlist, onRemoveItem }) => {
  const wishlistElements = wishlist
    ? Object.keys(wishlist).map((key) => (
        <WishlistItem
          key={key}
          item={wishlist[key]}
          removeItem={() => onRemoveItem(key)}
        />
      ))
    : null;
  return <div className="wishlist">{wishlistElements}</div>;
};
const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlistReducer.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (id) => dispatch(removeFromWishlist(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
