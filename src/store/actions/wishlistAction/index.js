import axios from "axios";
import {
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_FAILED,
  FETCH_ITEM_WISHLIST_SUCCESS,
  FETCH_ITEM_WISHLIST_FAILED,
} from "../../../constants";

export const addToWishlist = (item, userId) => {
  return (dispatch) => {
    axios
      .post(
        `https://ecommerce-31a69.firebaseio.com/wishlist/${userId}.json`,
        item
      )
      .then((res) => dispatch(addToWishlistSuccess()))
      .catch((error) => dispatch(addToWishlistFailed(error)));
  };
};

export const addToWishlistSuccess = () => {
  return {
    type: ADD_TO_WISHLIST_SUCCESS,
  };
};

export const addToWishlistFailed = (error) => {
  return {
    type: ADD_TO_WISHLIST_FAILED,
    error: error,
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
