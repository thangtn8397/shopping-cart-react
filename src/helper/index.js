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

export const checkValidityInput = (value, rules) => {
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }
  if (rules.minLength) {
    isValid = value.length > rules.minLength && isValid;
  }
  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }
  return isValid;
};
