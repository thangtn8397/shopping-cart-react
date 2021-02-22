import React from "react";
import CheckoutSummary from "../CheckoutSummary";
import Toast from "../UI/Toast";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Toast />
    </>
  );
};

export default Layout;
