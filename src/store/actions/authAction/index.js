import {
  AUTH_FAILED,
  AUTH_SUCCESS,
  AUTH_START,
  AUTH_LOGOUT,
  SET_AUTH_REDIRECT_PATH,
} from "../../../constants";
import axios from "../../../axios";
import { toast } from "react-toastify";
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
      .then((res) => {
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("localId", res.data.localId);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
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

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("localId");
  return (dispatch) => {
    dispatch({
      type: AUTH_LOGOUT,
    });
    toast.warn("Logged out", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
};

export const checkAuthTimeout = (expirationTime) => {
  console.log("time", expirationTime);
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const checkAuthState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const localId = localStorage.getItem("localId");
        const temp = expirationDate.getTime();
        console.log(temp);
        dispatch(authSuccess(token, localId));
        dispatch(checkAuthTimeout((temp - new Date().getTime()) / 1000));
      }
    }
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: SET_AUTH_REDIRECT_PATH,
    path,
  };
};
