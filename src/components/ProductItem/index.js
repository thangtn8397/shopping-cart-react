import React, { useState, useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addToWishlist, setAuthRedirectPath } from "../../store/actions";
import { selectedItem } from "../../helper";
import { toast } from "react-toastify";

const ProductItem = ({
  product,
  position,
  addToCart,
  onAddToWishlist,
  userId,
  isAuthenticated,
  inWishlist,
  openQuickview,
  onSetAuthRedirectPath,
}) => {
  const [isWishlist, setIsWishlist] = useState();
  const history = useHistory();

  useEffect(() => {
    setIsWishlist(inWishlist);
  }, [inWishlist]);

  const clickedWishlistIcon = () => {
    if (isAuthenticated) {
      if (!isWishlist) {
        const wishlistItem = selectedItem(product, 1, product.colors[0]);
        onAddToWishlist(wishlistItem, userId);
        setIsWishlist(true);
      } else {
        toast.warn("Item In Wishlist", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    } else {
      history.push("/auth");

      onSetAuthRedirectPath();
    }
  };

  return (
    <>
      <div className="product-item">
        <div className="product-item__wrapper">
          <div
            className="product-item__background"
            onClick={() => history.push(`/products/${position}`)}
            style={{
              backgroundImage: `url(${product.image})`,
            }}
          ></div>
          <div className="product-item__actions">
            <button
              className="product-item__actions--wishlist"
              disabled={isWishlist}
              onClick={() => {
                clickedWishlistIcon();
              }}
            >
              <span>
                <FavoriteBorderIcon
                  style={isWishlist ? { color: "red" } : { color: "#fff" }}
                />
              </span>
            </button>

            <button
              className="product-item__actions--addtocart"
              onClick={addToCart}
            >
              <span>Add To Cart</span>
              <ShoppingCartIcon />
            </button>
            <button
              className="product-item__actions--quickview"
              onClick={openQuickview}
            >
              <span>
                <VisibilityIcon />
              </span>
            </button>
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlistReducer.items,
    userId: state.authReducer.userId,
    isAuthenticated: state.authReducer.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddToWishlist: (item, userId) => dispatch(addToWishlist(item, userId)),
    onSetAuthRedirectPath: () => dispatch(setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
