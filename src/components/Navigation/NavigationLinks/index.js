import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const NavigationLinks = () => {
  return (
    <div className="navigation-links">
      <div className="navigation-links__item">
        <span>Cart</span>
        <ShoppingCartIcon />
      </div>
      <div className="navigation-links__item">
        <span>Login</span>
        <AccountBoxIcon />
      </div>
    </div>
  );
};

export default NavigationLinks;
