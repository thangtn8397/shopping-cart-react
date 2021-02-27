import {
  ADD_TO_WISHLIST,
  FETCH_ITEM_WISHLIST_SUCCESS,
  FETCH_ITEM_WISHLIST_FAILED,
  FETCH_ITEM_WISHLIST_START,
  ADD_TO_WISHLIST_FAILED,
  ADD_TO_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST,
} from "../../../constants";

const initialState = {
  items: null,
  error: null,
  loading: false,
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_TO_WISHLIST_FAILED: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
      };
    case FETCH_ITEM_WISHLIST_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_ITEM_WISHLIST_SUCCESS: {
      return {
        ...state,
        items: { ...action.items },
        loading: false,
      };
    }
    case FETCH_ITEM_WISHLIST_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
