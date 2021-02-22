import React from "react";
import CheckoutSummaryItem from "./CheckoutSummaryItem";

const CheckoutSummary = ({ items, open }) => {
  const checkoutSummaryElement =
    items.length > 0 ? (
      <>
        <ul>
          {items.map((item) => (
            <CheckoutSummaryItem cartItem={item} key={item.cartItemId} />
          ))}
          <div className="checkout-summary__process">
            <h4 className="checkout-summary__total">
              Total<span>$100</span>
            </h4>
            <button>
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
