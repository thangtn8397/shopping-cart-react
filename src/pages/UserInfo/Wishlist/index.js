import React from "react";
import WishlistItem from "./WishlistItem";
import { connect } from "react-redux";
import {
  addToCart,
  clearWishlist,
  removeFromWishlist,
} from "../../../store/actions";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Wishlist = ({
  wishlist,
  onRemoveItem,
  userId,
  loading,
  onAddToCart,
  onClearWishlist,
}) => {
  const wishlistElements =
    Object.keys(wishlist).length !== 0 ? (
      <>
        <ul className="wishlist__items">
          {Object.keys(wishlist).map((key) => (
            <WishlistItem
              key={key}
              item={wishlist[key]}
              removeItem={() => onRemoveItem(userId, key, false)}
              addToCartFromWishlist={() => {
                onRemoveItem(userId, key, true);
                onAddToCart(wishlist[key]);
              }}
            />
          ))}
        </ul>
        <div className="wishlist__clearItems">
          <button
            disabled={loading || !Object.keys(wishlist).length}
            onClick={() => onClearWishlist(userId)}
          >
            Clear wishlist
          </button>
        </div>
      </>
    ) : (
      <div className="cart__noItems">
        <span className="cart__noItems-icon">
          <ShoppingCartOutlinedIcon />
        </span>
        <p className="cart__noItems-text">Whoops...Nothing in here!!!</p>
        <Link className="btn" to="/products">
          Shop now
        </Link>
      </div>
    );
  return (
    <div className="wishlist">
      <div className="wishlist__wrapper">{wishlistElements}</div>
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
    onClearWishlist: (userId) => dispatch(clearWishlist(userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
