import {
  ADD_TO_CART,
  REMOVE_ITEM_IN_CART,
  CLEAR_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
  ORDER_START,
  ORDER_SUCCESS,
  ORDER_FAILED,
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
  orders: null,
  loading: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const tempItem = state.items.filter(
        (item) =>
          item.id === action.item.id &&
          item.selectedColor === action.item.selectedColor
      )[0];
      console.log(tempItem);
      if (tempItem) {
        const newQuantity = tempItem.quantity + action.item.quantity;
        return {
          ...state,
          items: state.items.map((item) =>
            item.cartItemId === tempItem.cartItemId
              ? { ...item, quantity: newQuantity }
              : item
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
    case ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case ORDER_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    case FETCH_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ORDERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        orders: action.orders,
        isOrdered: true,
      };
    }

    case FETCH_ORDERS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
};
