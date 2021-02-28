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
} from "../../../constants";

export const addToWishlist = (id, item, userId) => {
  console.log(id);
  return (dispatch) => {
    dispatch({
      type: ADD_TO_WISHLIST,
    });
    axios
      .put(
        `https://ecommerce-31a69.firebaseio.com/wishlist/${userId}/${id}.json`,
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

export const removeFromWishlist = (userId, itemId) => {
  return (dispatch) => {
    axios
      .delete(
        `https://ecommerce-31a69.firebaseio.com/wishlist/${userId}/${itemId}.json`
      )
      .then((res) => {
        dispatch(removeFromWishlistSucces(itemId));
      });
  };
};

export const removeFromWishlistSucces = (itemId) => {
  return (dispatch) => {
    dispatch({ type: REMOVE_FROM_WISHLIST_SUCCESS, itemId });
    toast.error("remove from wishlist", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
};

export const fetchItemWishlist = (userId) => {
  console.log(userId);
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
