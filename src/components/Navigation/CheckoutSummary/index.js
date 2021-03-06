import React from "react";
import { getTotalPrice } from "../../../helper";
import CheckoutSummaryItem from "./CheckoutSummaryItem";
import { Link } from "react-router-dom";

const CheckoutSummary = ({ items, open }) => {
  const total = items ? getTotalPrice(items) : 0;
  const checkoutSummaryElement =
    items.length > 0 ? (
      <>
        <ul>
          {items.map((item) => (
            <CheckoutSummaryItem cartItem={item} key={item.cartItemId} />
          ))}
          <div className="checkout-summary__process">
            <h4 className="checkout-summary__total">
              Total<span>${total}</span>
            </h4>
            <button>
              <Link to="/cart">view cart</Link>
            </button>
            <button>
              <Link to="/checkout">checkout</Link>
            </button>
          </div>
        </ul>
      </>
    ) : (
      <p>No items in cart</p>
    );
  return (
    <div className={open ? "checkout-summary open" : "checkout-summary"}>
      {checkoutSummaryElement}
    </div>
  );
};

export default CheckoutSummary;
