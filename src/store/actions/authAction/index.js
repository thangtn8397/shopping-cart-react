import { AUTH_FAILED, AUTH_SUCCESS } from "../../../constants";
import axios from "axios";
export const auth = (email, password) => {
  return (dispatch) => {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYIimUiEKh8d1Zthn5xIHOihyzcw0FuMs",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .then((res) => dispatch(authSuccess(res.data)))
      .catch((error) => dispatch(authFailed(error)));
  };
};

export const authSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    data,
  };
};

export const authFailed = (error) => {
  return {
    type: AUTH_FAILED,
    error,
  };
};
