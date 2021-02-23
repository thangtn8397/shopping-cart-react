export const selectedItem = (product, selectedQuantity, selectedColor) => {
  let { category, colors, company, description, ...cartItem } = product;

  cartItem = {
    ...cartItem,
    selectedColor: selectedColor,
    quantity: selectedQuantity,
  };
  return cartItem;
};

export const getTotalPrice = (items) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return totalPrice;
};
