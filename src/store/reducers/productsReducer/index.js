import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_SINGLE_PRODUCT_START,
  FETCH_SINGLE_PRODUCT_FAILED,
  FETCH_SINGLE_PRODUCT_SUCCESS,
} from "../../../constants/";

const initialState = {
  products: null,
  product: null,
  loading: false,
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      };
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_SINGLE_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.product,
        loading: false,
      };

    case FETCH_SINGLE_PRODUCT_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
