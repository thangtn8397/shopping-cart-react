import {
  ADD_TO_WISHLIST,
  FETCH_ITEM_WISHLIST_SUCCESS,
  FETCH_ITEM_WISHLIST_FAILED,
  FETCH_ITEM_WISHLIST_START,
  ADD_TO_WISHLIST_FAILED,
  ADD_TO_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_SUCCESS,
  CLEAR_WISHLIST,
  CLEAR_WISHLIST_SUCCESS,
  CLEAR_WISHLIST_FAILED,
} from "../../../constants";

const initialState = {
  items: {},
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
        items: { ...state.items, [action.item.id]: action.item },
        loading: false,
      };
    case ADD_TO_WISHLIST_FAILED: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case REMOVE_FROM_WISHLIST_SUCCESS: {
      const tempItems = state.items;
      delete tempItems[action.itemId];
      return {
        ...state,
        items: { ...tempItems },
        loading: false,
      };
    }

    case CLEAR_WISHLIST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CLEAR_WISHLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        items: { ...initialState.items },
      };
    }
    case CLEAR_WISHLIST_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

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
