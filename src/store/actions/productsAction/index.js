import axios from "../../../axios";
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_SINGLE_PRODUCT_START,
  FETCH_SINGLE_PRODUCT_FAILED,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  SORT_PRODUCTS,
  UPDATE_SORT,
  FILTER_PRODUCTS,
  UPDATE_FILTER,
  CLEAR_FILTER,
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
      .get("/products.json")
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch((error) => dispatch(fetchProductsFailed(error)));
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

export const fetchSingleProduct = (position) => {
  return (dispatch) => {
    dispatch(fetchSingleProductStart());
    axios
      .get(`https://ecommerce-31a69.firebaseio.com/products/${position}.json`)
      .then((res) => dispatch(fetchSingleProductSuccess(res.data)))
      .catch((error) => dispatch(fetchSingleProductFailed(error)));
  };
};

export const sortProducts = () => {
  return {
    type: SORT_PRODUCTS,
  };
};

export const updateSort = (sort) => {
  return {
    type: UPDATE_SORT,
    sort,
  };
};

export const updateFilter = (key, value) => {
  return {
    type: UPDATE_FILTER,
    key,
    value,
  };
};
export const filterProducts = () => {
  return {
    type: FILTER_PRODUCTS,
  };
};
export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};
