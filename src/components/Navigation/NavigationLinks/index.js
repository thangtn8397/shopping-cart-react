import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { connect } from "react-redux";

const NavigationLinks = ({ items }) => {
  return (
    <div className="navigation-links">
      <div className="navigation-links__item">
        <span>Cart</span>
        <div className="navigation-links__cart">
          <ShoppingCartIcon />
          {items.length > 0 ? <span>{items.length}</span> : null}
        </div>
      </div>
      <div className="navigation-links__item">
        <span>Login</span>
        <AccountBoxIcon />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.items,
  };
};

export default connect(mapStateToProps)(NavigationLinks);
