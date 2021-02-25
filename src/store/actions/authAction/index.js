import { AUTH_FAILED, AUTH_SUCCESS, AUTH_START } from "../../../constants";
import axios from "axios";
export const auth = (email, password, isLogin) => {
  const url = isLogin
    ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYIimUiEKh8d1Zthn5xIHOihyzcw0FuMs"
    : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYIimUiEKh8d1Zthn5xIHOihyzcw0FuMs";
  return (dispatch) => {
    dispatch({ type: AUTH_START });
    axios
      .post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .then((res) => dispatch(authSuccess(res.data.token, res.data.localId)))
      .catch((error) => dispatch(authFailed(error)));
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};

export const authFailed = (error) => {
  return {
    type: AUTH_FAILED,
    error,
  };
};
