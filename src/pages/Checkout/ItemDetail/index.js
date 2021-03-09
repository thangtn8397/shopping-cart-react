import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div className="checkout__item">
      <div
        className="checkout__item-image"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div>
        <p className="checkout__item-name">{item.name}</p>
        <div className="checkout__item-color">
          <p>Color:</p>
          <span
            className="select-color"
            style={{ backgroundColor: item.selectedColor }}
          ></span>
        </div>
        <p className="checkout__item-quantity"> Quantity: {item.quantity}</p>
      </div>
      <p className="checkout__item-price">${item.price}</p>
    </div>
  );
};

export default ItemDetail;
