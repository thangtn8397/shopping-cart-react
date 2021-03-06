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

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }
  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }
  return isValid;
};

export const getUniquevalue = (array, identifier) => {
  let tempArray = [];
  array.map((item) => {
    if (Array.isArray(item[identifier])) {
      item[identifier].map((value) => {
        if (!tempArray.includes(value)) {
          tempArray.push(value);
        }
      });
    } else {
      if (!tempArray.includes(item[identifier])) {
        tempArray.push(item[identifier]);
      }
    }
  });
  return tempArray;
};
