import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Layout;
