import React, { useEffect, useState } from "react";
import SliderImage from "../UI/SliderImage";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Spinner from "../UI/Spinner";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { selectedItem } from "../../helper/index";
import {
  addToCart,
  addToWishlist,
  setAuthRedirectPath,
} from "../../store/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductInfo = ({
  product,
  onAddToCart,
  onAddToWishlist,
  userId,
  isAuthenticated,
  onSetAuthRedirectPath,
  wishlist,
}) => {
  const array = wishlist ? Object.keys(wishlist) : [];
  const check = array.includes(product.id);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(check);
  const history = useHistory();

  useEffect(() => {
    if (!selectedColor) setSelectedColor(product.colors[0]);
  }, []);

  const clickedWishlistIconHandle = () => {
    if (isAuthenticated) {
      onAddToWishlist(selectedItem(product, 1, selectedColor), userId);
      setIsInWishlist(true);
    } else {
      history.push("/auth");
      onSetAuthRedirectPath();
    }
  };

  const productInfo = product ? (
    <>
      <div className="product-info__image">
        <div className="product-info__slider">
          <SliderImage img={product.image} />
        </div>
      </div>
      <div className="product-info__right">
        <div className="product-info__info">
          <h2 className="product-info__info-name">{product.name}</h2>
          <div className="product-info__info-rate">
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </div>

          <h3 className="product-info__info-price">
            ${product.price.toFixed(2)}
          </h3>
          <div className="product-info__info-detail">
            <p>{product.description}</p>
            <div className="product-info__info-sku">
              <label htmlFor="sku">SKU:</label>
              <p>{product.id}</p>
            </div>
            <div className="product-info__info-brand">
              <label htmlFor="brand">Brand:</label>
              <p>{product.company}</p>
            </div>
          </div>
        </div>
        <hr className="product-info__separator" />
        <div className="product-info__actions">
          <div className="product-info__options">
            <div className="product-info__options-colors">
              <p>Color</p>
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="select-color"
                  style={{ backgroundColor: `${color}` }}
                  onClick={() => setSelectedColor(color)}
                >
                  {color === selectedColor ? <CheckIcon /> : null}
                </span>
              ))}
            </div>
            <div className="product-info__options-quantity">
              <button onClick={() => setSelectedQuantity(selectedQuantity - 1)}>
                <RemoveIcon />
              </button>
              <span>{selectedQuantity}</span>
              <button onClick={() => setSelectedQuantity(selectedQuantity + 1)}>
                <AddIcon />
              </button>
            </div>
          </div>
          <div className="product-info__addtocart">
            <button
              disabled={!selectedColor}
              className="product-info__addtocart-btn"
              onClick={() =>
                onAddToCart(
                  selectedItem(product, selectedQuantity, selectedColor)
                )
              }
            >
              Add to cart
            </button>
            <button
              disabled={isInWishlist}
              className="product-info__addtocart-wishlist"
              onClick={() => clickedWishlistIconHandle()}
            >
              <FavoriteBorderIcon
                style={isInWishlist ? { color: "red" } : { color: "#000" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Spinner />
  );

  return <div className="product-info__product container">{productInfo}</div>;
};

const mapDispathToProps = (dispatch) => {
  return {
    onAddToCart: (item) => dispatch(addToCart(item)),
    onAddToWishlist: (item, userId) => dispatch(addToWishlist(item, userId)),
    onSetAuthRedirectPath: () => dispatch(setAuthRedirectPath("/my-account")),
  };
};
const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlistReducer.items,
    userId: state.authReducer.userId,
    isAuthenticated: state.authReducer.token !== null,
  };
};
export default connect(mapStateToProps, mapDispathToProps)(ProductInfo);
