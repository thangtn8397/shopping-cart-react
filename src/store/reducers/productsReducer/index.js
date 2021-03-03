import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FETCH_SINGLE_PRODUCT_START,
  FETCH_SINGLE_PRODUCT_FAILED,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  UPDATE_SORT,
  UPDATE_FILTER,
} from "../../../constants/";

const initialState = {
  products: [],
  filteredProducts: [],
  product: null,
  loading: false,
  error: null,
  sort: "",
  filters: {
    text: "",
    category: "all",
    color: "all",
    company: "all",
    min_price: 0,
    max_price: 0,
    shipping: false,
  },
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PRODUCTS_SUCCESS:
      //  let tempProducts = [...state.products];
      // const { text } = state.filters;
      // if (text !== "") {
      //       tempProducts = tempProducts.filter((product) =>
      //         product.name.startsWith(text)
      //       );
      //     }

      return {
        ...state,
        loading: false,
        products: action.products,
        filteredProducts: action.products,
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

    case UPDATE_SORT: {
      return {
        ...state,
        sort: action.sort,
      };
    }
    case SORT_PRODUCTS:
      let sortedProducts = [...state.filteredProducts];

      if (state.sort === "price-lowest") {
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
      }
      if (state.sort === "price-highest") {
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
      }
      if (state.sort === "a-z") {
        sortedProducts = sortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (state.sort === "z-a") {
        sortedProducts = sortedProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return {
        ...state,
        filteredProducts: sortedProducts,
      };
    case UPDATE_FILTER: {
      const { key, value } = action;
      return {
        ...state,
        filters: { ...state.filters, [key]: value },
      };
    }
    case FILTER_PRODUCTS: {
      let tempProducts = [...state.products];
      const { text } = state.filters;
      if (text !== "") {
        tempProducts = tempProducts.filter((product) =>
          product.name.startsWith(text)
        );
      }
      return {
        ...state,
        filteredProducts: tempProducts,
      };
    }

    default:
      return state;
  }
};
