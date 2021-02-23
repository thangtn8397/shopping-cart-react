import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CartItem = ({ cartItem }) => {
  return (
    <article className="cart-item">
      <div className="cart-item__detail">
        <img
          src="https://dl.airtable.com/.attachments/6229f1049e9b652f1a10aba2e7428b0a/8274ec55/shelf.jpeg"
          alt="img"
        />
        <div>
          <h5 className="cart-item__name">{cartItem.name}</h5>
          <p className="cart-item__color">
            Color:
            <span
              className="select-color"
              style={{ backgroundColor: `${cartItem.selectedColor}` }}
            ></span>
          </p>
          <p className="cart-item__priceSmall">${cartItem.price}</p>
        </div>
      </div>
      <div className="cart-item__price">${cartItem.price}</div>
      <div className="cart-item__quantity">
        <span>
          <RemoveIcon />
        </span>
        <p>{cartItem.quantity}</p>
        <span>
          <AddIcon />
        </span>
      </div>
      <div className="cart-item__subtotal">
        ${cartItem.price * cartItem.quantity}
      </div>
      <div>X</div>
    </article>
  );
};

export default CartItem;
