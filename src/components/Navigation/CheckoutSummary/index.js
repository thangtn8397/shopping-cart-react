import React from "react";
import { useHistory } from "react-router-dom";
import { getTotalPrice } from "../../../helper";
import CheckoutSummaryItem from "./CheckoutSummaryItem";

const CheckoutSummary = ({ items, open }) => {
  const history = useHistory();
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
            <button onClick={() => history.push("/cart")}>
              <span>view cart</span>
            </button>
            <button>
              <span>checkout</span>
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
