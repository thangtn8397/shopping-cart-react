import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, onCheckAuthState }) => {
  return (
    <>
      {children}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Layout;
