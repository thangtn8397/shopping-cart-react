import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { removeItemInCart } from "../../../../store/actions";
import { connect } from "react-redux";

const CheckoutSummaryItem = ({ cartItem, onRemoveItem }) => {
  return (
    <li className="checkout-summary-item">
      <img
        src={cartItem.image}
        alt="image"
        className="checkout-summary-item__image"
      />
      <div className="checkout-summary-item__detail">
        <h4 className="checkout-summary-item__name">{cartItem.name}</h4>
        <h6>
          Quantity: <span>{cartItem.quantity}</span>
        </h6>
        <h6 className="checkout-summary-item__color">
          Color:
          <span
            className="select-color"
            style={{
              backgroundColor: `${cartItem.selectedColor}`,
              width: "10px",
              height: "10px",
            }}
          ></span>
        </h6>
        <span className="checkout-summary-item__price">${cartItem.price}</span>
      </div>
      <CloseIcon onClick={() => onRemoveItem(cartItem.cartItemId)} />
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (id) => dispatch(removeItemInCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutSummaryItem);
