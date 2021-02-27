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
        dispatch(addToWishlistSuccess());
        dispatch(fetchItemWishlist(userId));
      })
      .catch((error) => dispatch(addToWishlistFailed(error)));
  };
};

export const addToWishlistSuccess = () => {
  return (dispatch) => {
    dispatch({ type: ADD_TO_WISHLIST_SUCCESS });
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

export const removeFromWishlist = (userId, id) => {
  return (dispatch) => {
    axios
      .delete(
        `https://ecommerce-31a69.firebaseio.com/wishlist/${userId}/${id}.json`
      )
      .then((res) => {
        dispatch(removeFromWishlistSucces());
        dispatch(fetchItemWishlist(userId));
      });
  };
};

export const removeFromWishlistSucces = () => {
  return {
    type: REMOVE_FROM_WISHLIST_SUCCESS,
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
