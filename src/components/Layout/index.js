import React from "react";
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
