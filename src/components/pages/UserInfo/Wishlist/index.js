import React from "react";
import WishlistItem from "./WishlistItem";
import { connect } from "react-redux";
import {
  addToCart,
  clearWishlist,
  removeFromWishlist,
} from "../../../../store/actions";

const Wishlist = ({
  wishlist,
  onRemoveItem,
  userId,
  loading,
  onAddToCart,
  onClearWishlist,
}) => {
  const wishlistElements = wishlist
    ? Object.keys(wishlist).map((key) => (
        <WishlistItem
          key={key}
          item={wishlist[key]}
          removeItem={() => onRemoveItem(userId, key, false)}
          addToCartFromWishlist={() => {
            onRemoveItem(userId, key, true);
            onAddToCart(wishlist[key]);
          }}
        />
      ))
    : null;
  return (
    <div className="wishlist">
      <div className="wishlist__wrapper">{wishlistElements}</div>
      <div className="wishlist__clearItems">
        <button
          disabled={loading || !Object.keys(wishlist).length}
          onClick={() => onClearWishlist()}
        >
          Clear wishlist
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlistReducer.items,
    loading: state.wishlistReducer.loading,
    userId: state.authReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (userId, id, isAddToCart) =>
      dispatch(removeFromWishlist(userId, id, isAddToCart)),
    onAddToCart: (item) => dispatch(addToCart(item)),
    onClearWishlist: () => dispatch(clearWishlist()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
