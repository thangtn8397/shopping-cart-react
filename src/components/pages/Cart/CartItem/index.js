import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CartItem = ({
  cartItem,
  clickedAddIcon,
  clickedRemoveIcon,
  removeItem,
}) => {
  return (
    <article className="cart-item">
      <div className="cart-item__detail">
        <img src={cartItem.image} alt="img" />
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
        <button disabled={cartItem.quantity <= 1} onClick={clickedRemoveIcon}>
          <RemoveIcon />
        </button>
        <p>{cartItem.quantity}</p>
        <button onClick={clickedAddIcon}>
          <AddIcon />
        </button>
      </div>
      <div className="cart-item__subtotal">
        ${cartItem.price * cartItem.quantity}
      </div>
      <div className="cart-item__remove" onClick={removeItem}>
        X
      </div>
    </article>
  );
};

export default CartItem;
