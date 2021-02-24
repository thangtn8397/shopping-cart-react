import { AUTH_FAILED, AUTH_SUCCESS } from "../../../constants";
const initialState = {
  data: {},
  loading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return {
        ...state,
        data: action.data,
      };
    }
    case AUTH_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
