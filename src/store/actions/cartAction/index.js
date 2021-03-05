import {
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  REMOVE_ITEM_IN_CART,
  CLEAR_CART,
} from "../../../constants/types";
import { toast } from "react-toastify";
export const addToCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      item,
    });
    toast.success("Added to cart", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
};

export const removeItemInCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITEM_IN_CART,
      id,
    });
    toast.warn("Removed from cart", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
};

export const clearCart = (isCheckout) => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_CART,
    });
    if (!isCheckout)
      toast.error("Removed all from cart", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
  };
};

export const incrementQuantity = (id) => {
  return {
    type: INCREMENT_QUANTITY,
    id,
  };
};
export const decrementQuantity = (id) => {
  return {
    type: DECREMENT_QUANTITY,
    id,
  };
};
