import {
  ADD_TO_WISHLIST,
  FETCH_ITEM_WISHLIST_SUCCESS,
  FETCH_ITEM_WISHLIST_FAILED,
  FETCH_ITEM_WISHLIST_START,
  ADD_TO_WISHLIST_FAILED,
  ADD_TO_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_SUCCESS,
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
      let temp = {};
      temp[action.item.id] = action.item;
      const newItems = Object.assign(state.items, temp);
      return {
        ...state,
        items: newItems,
        loading: false,
      };
    case ADD_TO_WISHLIST_FAILED: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case REMOVE_FROM_WISHLIST_SUCCESS:
      const tempItems = state.items;
      delete tempItems[action.itemId];
      return {
        ...state,
        items: { ...tempItems },
        loading: false,
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
