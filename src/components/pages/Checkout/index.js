import React, { useEffect } from "react";
import PageHero from "../../PageHero";
import BillingDetails from "./BillingDetails";
import ItemDetail from "./ItemDetail";
import Spinner from "../../UI/Spinner";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { connect } from "react-redux";
import { getTotalPrice } from "../../../helper";
import { setAuthRedirectPath } from "../../../store/actions";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems, isAuthenticated, loading }) => {
  const totalPrice = getTotalPrice(cartItems);
  const temp = cartItems.filter((item) => item.shipping === undefined);
  const shippingFee = temp.reduce((fee, item) => fee + 5.4, 0);
  const checkoutElement = !loading ? (
    <>
      <BillingDetails
        cartItems={cartItems}
        totalOrder={totalPrice + shippingFee}
      />
      <div className="checkout__itemsDetails">
        {cartItems.map((item) => (
          <ItemDetail item={item} />
        ))}
        <hr />
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
          </div>
        </article>
      </div>
    </>
  ) : (
    <Spinner />
  );

  return (
    <div className="checkout">
      <PageHero products={false} link="checkout" />
      <div className="checkout__wrapper container wrapper">
        {cartItems.length ? (
          checkoutElement
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
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.items,
    isAuthenticated: state.authReducer.token !== null,
    loading: state.authReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSetAuthRedirectPath: (path) => dispatch(setAuthRedirectPath(path)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
