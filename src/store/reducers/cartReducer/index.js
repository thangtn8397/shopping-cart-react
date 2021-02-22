import { ADD_TO_CART } from "../../../constants/index";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  items: [],
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
    default:
      return state;
  }
};
