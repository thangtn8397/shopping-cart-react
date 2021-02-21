import axios from "axios";
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_SINGLE_PRODUCT_START,
  FETCH_SINGLE_PRODUCT_FAILED,
  FETCH_SINGLE_PRODUCT_SUCCESS,
} from "../../../constants/";
export const fetchProductsStart = () => {
  return {
    type: FETCH_PRODUCTS_START,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products,
  };
};

export const fetchProductsFailed = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILED,
    error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    axios
      .get("https://ecommerce-31a69.firebaseio.com/products.json")
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data));
      });
  };
};

export const fetchSingleProductStart = () => {
  return {
    type: FETCH_SINGLE_PRODUCT_START,
  };
};

export const fetchSingleProductSuccess = (product) => {
  return {
    type: FETCH_SINGLE_PRODUCT_SUCCESS,
    product,
  };
};

export const fetchSingleProductFailed = (error) => {
  return {
    type: FETCH_SINGLE_PRODUCT_FAILED,
    error,
  };
};

export const fetchSingleProduct = (id) => {
  return (dispatch) => {
    dispatch(fetchSingleProductStart());
    axios
      .get(`https://ecommerce-31a69.firebaseio.com/products/${id}.json`)
      .then((res) => dispatch(fetchSingleProductSuccess(res.data)))
      .catch((error) => dispatch(fetchSingleProductFailed(error)));
  };
};
