import {
  ADD_TO_WISHLIST,
  FETCH_ITEM_WISHLIST_SUCCESS,
  FETCH_ITEM_WISHLIST_FAILED,
} from "../../../constants";

const initialState = {
  items: [],
  loading: false,
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        items: [...state.items, action.item],
      };

    case FETCH_ITEM_WISHLIST_SUCCESS: {
      return {
        ...state,
        items: [...action.items],
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
