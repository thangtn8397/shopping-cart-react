import React, { useState, useEffect } from "react";
import PageHero from "../../PageHero";
import UserInfoItem from "./UserInfoItem";
import Wishlist from "./Wishlist";
import { updatePasswordForm, userInfoAccount } from "../../../constants/form";
import { logout } from "../../../store/actions";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserInfo = ({ isAuthenticated, onLogout }) => {
  const [editing, setEditing] = useState(1);
  const [active, setActive] = useState("account");
  let userInfoElement = null;
  if (active === "account") {
    userInfoElement = (
      <>
        <UserInfoItem
          id={1}
          title="Edit your information account"
          form={userInfoAccount}
          show={editing}
          clickedTitleHandler={() => setEditing(1)}
        />
        <UserInfoItem
          id={2}
          title="Change your password"
          form={updatePasswordForm}
          show={editing}
          clickedTitleHandler={() => setEditing(2)}
        />
        <UserInfoItem
          id={3}
          title="MODIFY YOUR ADDRESS BOOK ENTRIES"
          form={userInfoAccount}
          show={editing}
          clickedTitleHandler={() => setEditing(3)}
        />
      </>
    );
  }
  if (active === "wishlist") {
    userInfoElement = <Wishlist />;
  }
  if (active === "order") {
    userInfoElement = <div>order history</div>;
  }
  const redirect = isAuthenticated ? null : <Redirect to="/auth" />;

  return (
    <div className="userInfo">
      <PageHero products={false} link="My Account" />
      {redirect}
      <div className="userInfo__wrapper container wrapper">
        <button onClick={() => onLogout()}>Logout</button>
        <div className="userInfo__switch switch">
          <h3 onClick={() => setActive("account")}>My Account</h3>
          <span></span>
          <h3 onClick={() => setActive("wishlist")}>Wish List</h3>
          <span></span>
          <h3 onClick={() => setActive("order")}>Order History</h3>
        </div>
        {userInfoElement}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
