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
  CLEAR_FILTER,
} from "../../../constants/";
import { getUniquevalue } from "../../../helper";

const initialState = {
  products: [],
  filteredProducts: [],
  featureProducts: [],
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
    price: 0,
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
      const prices = getUniquevalue(action.products, "price");
      const maxPrice = Math.max(...prices);
      const minPrice = Math.min(...prices);
      const featuredProducts = action.products.filter((item) => item.featured);
      return {
        ...state,
        loading: false,
        products: action.products,
        filteredProducts: action.products,
        featureProducts: featuredProducts,
        filters: {
          ...state.filters,
          max_price: maxPrice,
          min_price: minPrice,
          price: maxPrice,
        },
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
        loading: true,
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
      const {
        text,
        category,
        company,
        color,
        shipping,
        price,
        min_price,
      } = state.filters;
      if (text !== "") {
        tempProducts = tempProducts.filter((product) =>
          product.name.startsWith(text)
        );
      }
      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
      if (company !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        );
      }
      if (color !== "all") {
        tempProducts = tempProducts.filter((product) =>
          product.colors.includes(color)
        );
      }
      if (price) {
        tempProducts = tempProducts.filter(
          (product) => product.price <= price && product.price >= min_price
        );
      }
      if (shipping) {
        tempProducts = tempProducts.filter(
          (product) => product.shipping === true
        );
      }

      return {
        ...state,
        filteredProducts: tempProducts,
      };
    }

    case CLEAR_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          color: "all",
          company: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };
    }

    default:
      return state;
  }
};
