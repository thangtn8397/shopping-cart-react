import axios from "axios";
import { toast } from "react-toastify";
import {
  ADD_TO_WISHLIST,
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_FAILED,
  REMOVE_FROM_WISHLIST_SUCCESS,
  FETCH_ITEM_WISHLIST_SUCCESS,
  FETCH_ITEM_WISHLIST_FAILED,
  REMOVE_FROM_WISHLIST,
  CLEAR_WISHLIST,
  CLEAR_WISHLIST_SUCCESS,
  CLEAR_WISHLIST_FAILED,
} from "../../../constants";

export const addToWishlist = (item, userId) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_WISHLIST,
    });
    axios
      .put(
        `https://ecommerce-31a69.firebaseio.com/wishlist/${userId}/${item.id}.json`,
        item
      )
      .then((res) => {
        dispatch(addToWishlistSuccess(item));
        // dispatch(fetchItemWishlist(userId));
      })
      .catch((error) => dispatch(addToWishlistFailed(error)));
  };
};

export const addToWishlistSuccess = (item) => {
  return (dispatch) => {
    dispatch({ type: ADD_TO_WISHLIST_SUCCESS, item });
    toast.success("Added to wishlist", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
};

export const addToWishlistFailed = (error) => {
  return {
    type: ADD_TO_WISHLIST_FAILED,
    error: error,
  };
};

export const removeFromWishlist = (userId, itemId, isAddToCart) => {
  return (dispatch) => {
    axios
      .delete(
        `https://ecommerce-31a69.firebaseio.com/wishlist/${userId}/${itemId}.json`
      )
      .then((res) => {
        dispatch(removeFromWishlistSucces(itemId, isAddToCart));
      });
  };
};

export const removeFromWishlistSucces = (itemId, isAddToCart) => {
  return (dispatch) => {
    dispatch({ type: REMOVE_FROM_WISHLIST_SUCCESS, itemId });
    if (!isAddToCart) {
      toast.error("Remove from wishlist", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };
};

export const clearWishlist = (userId) => {
  return (dispatch) => {
    axios
      .delete(`https://ecommerce-31a69.firebaseio.com/wishlist/${userId}.json`)
      .then((res) => dispatch(clearWishlistSuccess()))
      .then((error) => dispatch(clearWishlistFailed(error)));
  };
};

export const clearWishlistSuccess = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_WISHLIST_SUCCESS,
    });
    toast.error("Clear wishlist", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
};

export const clearWishlistFailed = (error) => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_WISHLIST_FAILED,
      error: error,
    });
  };
};

export const fetchItemWishlist = (userId) => {
  return (dispatch) => {
    axios
      .get(`https://ecommerce-31a69.firebaseio.com/wishlist/${userId}.json`)
      .then((res) => dispatch(fetchItemWishlistSuccess(res.data)))
      .catch((error) => dispatch(fetchItemWishlistFailed(error)));
  };
};

export const fetchItemWishlistSuccess = (items) => {
  return {
    type: FETCH_ITEM_WISHLIST_SUCCESS,
    items,
  };
};

export const fetchItemWishlistFailed = (error) => {
  return {
    type: FETCH_ITEM_WISHLIST_FAILED,
    error,
  };
};
