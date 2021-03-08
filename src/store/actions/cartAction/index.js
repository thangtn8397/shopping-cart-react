import {
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  REMOVE_ITEM_IN_CART,
  CLEAR_CART,
  ORDER_START,
  ORDER_SUCCESS,
  ORDER_FAILED,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
} from "../../../constants/types";
import { toast } from "react-toastify";
import axios from "../../../axios";
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

export const order = (userId, orderDetail) => {
  return (dispatch) => {
    dispatch(orderStart());
    axios
      .post(`/orders/${userId}.json`, orderDetail)
      .then((res) => {
        dispatch(orderSuccess());
        dispatch(clearCart(true));
      })
      .catch((error) => dispatch(orderFailed(error)));
  };
};

export const orderStart = () => {
  return {
    type: ORDER_START,
  };
};

export const orderSuccess = () => {
  return (dispatch) => {
    dispatch({
      type: ORDER_SUCCESS,
    });
    toast.success("Order success", { position: toast.POSITION.BOTTOM_LEFT });
  };
};

export const orderFailed = (error) => {
  return (dispatch) => {
    dispatch({
      type: ORDER_FAILED,
      error,
    });
    toast.error("Order failed", { position: toast.POSITION.BOTTOM_LEFT });
  };
};

export const fetchOrders = (userId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_ORDERS_START });
    axios
      .get(`https://ecommerce-31a69.firebaseio.com/orders/${userId}.json`)
      .then((res) => dispatch(fetchOrdersSuccess(res.data)))
      .catch((error) => dispatch(fetchOrdersFailed(error)));
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders,
  };
};

export const fetchOrdersFailed = (error) => {
  return {
    type: FETCH_ORDERS_FAILED,
    error,
  };
};
