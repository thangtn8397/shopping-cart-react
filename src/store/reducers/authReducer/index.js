import {
  AUTH_FAILED,
  AUTH_SUCCESS,
  AUTH_START,
  AUTH_LOGOUT,
  ORDER_START,
  ORDER_SUCCESS,
  ORDER_FAILED,
  SET_AUTH_REDIRECT_PATH,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
} from "../../../constants";
const initialState = {
  token: null,
  userId: null,
  loading: false,
  error: null,
  authRedirectPath: "/my-account",
  orders: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        loading: false,
        error: null,
      };
    }
    case AUTH_FAILED: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        error: null,
      };
    case ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case ORDER_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case SET_AUTH_REDIRECT_PATH: {
      return {
        ...state,
        authRedirectPath: action.path,
      };
    }
    case FETCH_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ORDERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        orders: action.orders,
      };
    }

    case FETCH_ORDERS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
