import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Layout;
