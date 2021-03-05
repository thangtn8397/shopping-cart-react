import React from "react";
import PageHero from "../../PageHero";
import CartItem from "./CartItem";
import { getTotalPrice } from "../../../helper";
import { connect } from "react-redux";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link, useHistory } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  clearCart,
  removeItemInCart,
  setAuthRedirectPath,
} from "../../../store/actions";

function Cart({
  cartItems,
  onIncrementQuantity,
  onDecrementQuantity,
  onRemoveItemInCart,
  onClearCart,
  onSetAuthRedirectPath,
  isAuthenticated,
}) {
  const history = useHistory();
  const totalPrice = getTotalPrice(cartItems);
  let shippingFee = 0;
  let cartElement = null;
  if (cartItems.length > 0) {
    const temp = cartItems.filter((item) => item.shipping === undefined);
    shippingFee = temp.reduce((fee, item) => fee + 5.4, 0);
    cartElement = (
      <>
        <div className="cart__header">
          <h5>Item</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Subtotal</h5>
          <span></span>
        </div>
        {cartItems.map((item) => (
          <CartItem
            cartItem={item}
            clickedAddIcon={() => onIncrementQuantity(item.cartItemId)}
            clickedRemoveIcon={() => onDecrementQuantity(item.cartItemId)}
            removeItem={() => onRemoveItemInCart(item.cartItemId)}
          />
        ))}
        <article className="cart__button">
          <button>
            <Link to="/products">Continue shopping</Link>
          </button>
          <button onClick={() => onClearCart()}>clear shopping cart</button>
        </article>
        <article className="cart__bill">
          <div className="cart__bill-wrapper">
            <div className="cart__bill-form">
              <div className="cart__bill-element">
                <label>Subtotal:</label>
                <p>${totalPrice}</p>
              </div>
              <div className="cart__bill-element">
                <label>Shipping Fee:</label>
                <p>${shippingFee.toFixed(2)}</p>
              </div>
              <div className="cart__bill-ordertotal">
                <label>Order Total: </label>
                <p>${totalPrice + shippingFee}</p>
              </div>
            </div>
            <button
              className="cart__bill-btnProceed"
              onClick={() => {
                history.push("/checkout");
                if (!isAuthenticated) {
                  onSetAuthRedirectPath("/checkout");
                }
              }}
            >
              Proceed to checkout
            </button>
          </div>
        </article>
      </>
    );
  } else {
    cartElement = (
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
  }

  return (
    <div className="cart">
      <PageHero products={false} link="Cart" />
      <div className="cart__wrapper container wrapper">{cartElement}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.items,
    isAuthenticated: state.authReducer.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementQuantity: (id) => dispatch(incrementQuantity(id)),
    onDecrementQuantity: (id) => dispatch(decrementQuantity(id)),
    onRemoveItemInCart: (id) => dispatch(removeItemInCart(id)),
    onClearCart: () => dispatch(clearCart()),
    onSetAuthRedirectPath: (path) => dispatch(setAuthRedirectPath(path)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
