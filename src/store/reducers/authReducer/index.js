import {
  AUTH_FAILED,
  AUTH_SUCCESS,
  AUTH_START,
  AUTH_LOGOUT,
} from "../../../constants";
const initialState = {
  token: null,
  userId: null,
  loading: false,
  error: null,
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
      };
    default: {
      return state;
    }
  }
};
