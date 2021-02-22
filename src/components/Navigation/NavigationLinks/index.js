import React, { useState } from "react";
import CheckoutSummary from "../CheckoutSummary";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const NavigationLinks = ({ items }) => {
  const [openCheckoutSummary, setOpenCheckoutSummary] = useState(false);
  const history = useHistory();
  return (
    <div className="navigation-links">
      <div className="navigation-links__item">
        <AccountBoxIcon />
      </div>
      <div className="navigation-links__item navigation-links__cart">
        <ShoppingCartIcon
          className="hide-for-mobile"
          onClick={() => setOpenCheckoutSummary(!openCheckoutSummary)}
        />
        <ShoppingCartIcon
          className="hide-for-desktop"
          onClick={() => history.push("/cart")}
        />
        {items.length > 0 ? <span>{items.length}</span> : null}
        <CheckoutSummary items={items} open={openCheckoutSummary} />
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
