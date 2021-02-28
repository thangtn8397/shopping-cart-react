import React, { useState, useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarRateIcon from "@material-ui/icons/StarRate";
import Modal from "../UI/Modal";
import QuickviewProduct from "../QuickviewProduct";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addToWishlist } from "../../store/actions";
import { selectedItem } from "../../helper";
import { toast } from "react-toastify";

const ProductItem = ({
  product,
  addToCart,
  onAddToWishlist,
  userId,
  isAuthenticated,
  inWishlist,
}) => {
  const [isWishlist, setIsWishlist] = useState();
  const [openQuickview, setOpenQuickview] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log(inWishlist);
    setIsWishlist(inWishlist);
  }, [inWishlist]);

  const wishlistItem = selectedItem(product, 1, product.colors[0]);
  const clickedWishlistIcon = () => {
    if (isAuthenticated) {
      if (!inWishlist) {
        onAddToWishlist(product.id, wishlistItem, userId);
        setIsWishlist(true);
      } else {
        toast.warn("Item In Wishlist", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    } else {
      history.push("/auth");
    }
  };

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
            <button
              className="product-item__actions--wishlist"
              onClick={() => clickedWishlistIcon()}
            >
              <FavoriteBorderIcon
                style={isWishlist ? { color: "red" } : { color: "#fff" }}
              />
            </button>

            <button
              className="product-item__actions--addtocart"
              onClick={addToCart}
            >
              Add To Cart
              <ShoppingCartIcon />
            </button>
            <button
              className="product-item__actions--quickview"
              onClick={() => setOpenQuickview(true)}
            >
              <VisibilityIcon />
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
      <Modal isOpen={openQuickview} closeModal={() => setOpenQuickview(false)}>
        <QuickviewProduct
          closequickview={() => setOpenQuickview(false)}
          product={product}
        />
      </Modal>
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
    onAddToWishlist: (id, item, userId) =>
      dispatch(addToWishlist(id, item, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
