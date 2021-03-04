import {
  AUTH_FAILED,
  AUTH_SUCCESS,
  AUTH_START,
  AUTH_LOGOUT,
  ORDER_START,
  ORDER_SUCCESS,
  ORDER_FAILED,
} from "../../../constants";
const initialState = {
  token: null,
  userId: null,
  loading: false,
  error: null,
  authPath: "/",
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

    default: {
      return state;
    }
  }
};
