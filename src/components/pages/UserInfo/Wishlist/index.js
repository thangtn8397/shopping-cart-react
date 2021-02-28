import React from "react";
import WishlistItem from "./WishlistItem";
import { connect } from "react-redux";
import { removeFromWishlist } from "../../../../store/actions";

const Wishlist = ({ wishlist, onRemoveItem, userId }) => {
  const wishlistElements = wishlist
    ? Object.keys(wishlist).map((key) => (
        <WishlistItem
          key={key}
          item={wishlist[key]}
          removeItem={() => onRemoveItem(userId, key)}
        />
      ))
    : null;
  return <div className="wishlist">{wishlistElements}</div>;
};
const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlistReducer.items,
    userId: state.authReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (userId, id) => dispatch(removeFromWishlist(userId, id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
