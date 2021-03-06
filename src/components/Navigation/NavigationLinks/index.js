import React, { useState } from "react";
import CheckoutSummary from "../CheckoutSummary";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../../store/actions";

const NavigationLinks = ({ isAuthenticated, items, onLogOut }) => {
  const [openCheckoutSummary, setOpenCheckoutSummary] = useState(false);
  const [openAccountToggle, setOpenAccountToggle] = useState(false);
  const history = useHistory();
  return (
    <div className="navigation-links">
      <div className="navigation-links__item">
        <AccountBoxIcon
          onClick={() => setOpenAccountToggle(!openAccountToggle)}
        />
        <ul
          className={
            openAccountToggle
              ? "navigation-links__item-accountToggle open"
              : "navigation-links__item-accountToggle"
          }
        >
          <li>
            <Link to="/auth">{isAuthenticated ? "My Account" : "Login"}</Link>
          </li>
          {isAuthenticated ? <li onClick={() => onLogOut()}>Logout</li> : null}
        </ul>
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
    isAuthenticated: state.authReducer.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationLinks);
