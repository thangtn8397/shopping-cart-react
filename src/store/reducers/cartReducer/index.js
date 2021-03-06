import {
  ADD_TO_CART,
  REMOVE_ITEM_IN_CART,
  CLEAR_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "../../../constants/index";
import { v4 as uuidv4 } from "uuid";

const getItemStorage = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

const initialState = {
  items: [...getItemStorage()],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const tempItem = state.items.filter(
        (item) =>
          item.id === action.item.id &&
          item.selectedColor === action.item.selectedColor
      )[0];
      if (tempItem) {
        const newQuantity = tempItem.quantity + action.item.quantity;
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === tempItem.id ? { ...item, quantity: newQuantity } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...action.item,
              cartItemId: uuidv4(),
              quantity: action.item.quantity,
              selectedColor: action.item.selectedColor,
            },
          ],
        };
      }
    }
    case REMOVE_ITEM_IN_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.cartItemId !== action.id),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartItemId === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartItemId === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
