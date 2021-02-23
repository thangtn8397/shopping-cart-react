import React from "react";
import PageHero from "../../PageHero";
import CartItem from "./CartItem";
import { connect } from "react-redux";

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <PageHero products={false} link="Cart" />
      <div className="cart__wrapper container wrapper">
        <div className="cart__header">
          <h5>Item</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Subtotal</h5>
          <span></span>
        </div>
        {cartItems.map((item) => (
          <CartItem cartItem={item} />
        ))}
        <article className="cart__button">
          <button>Continue shopping</button>
          <button>clear shopping cart</button>
        </article>
        <article className="cart__bill">
          <div className="cart__bill-wrapper">
            <div className="cart__bill-form">
              <div className="cart__bill-element">
                <label>Subtotal:</label>
                <p>$2379</p>
              </div>
              <div className="cart__bill-element">
                <label>Shipping Fee:</label>
                <p>$2379</p>
              </div>
              <div className="cart__bill-ordertotal">
                <label>Order Total: </label>
                <p>$1231</p>
              </div>
            </div>
            <button className="cart__bill-btnProceed">
              Proceed to checkout
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.items,
  };
};
export default connect(mapStateToProps)(Cart);
