import React, { useState } from "react";
import PageHero from "../../components/PageHero";
import UserInfoItem from "./UserInfoItem";
import Wishlist from "./Wishlist";
import { updatePasswordForm, userInfoAccount } from "../../constants/form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import OrderHistory from "./OrderHistory";

const UserInfo = ({ isAuthenticated }) => {
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
      </>
    );
  }
  if (active === "wishlist") {
    userInfoElement = <Wishlist />;
  }
  if (active === "order") {
    userInfoElement = <OrderHistory />;
  }
  const redirect = isAuthenticated ? null : <Redirect to="/auth" />;

  return (
    <div className="userInfo">
      <PageHero products={false} link="My Account" />
      {redirect}
      <div className="userInfo__wrapper container wrapper">
        <div className="userInfo__switch switch">
          <h3
            className={active === "account" ? "active" : ""}
            onClick={() => setActive("account")}
          >
            My Account
          </h3>
          <span></span>
          <h3
            className={active === "wishlist" ? "active" : ""}
            onClick={() => setActive("wishlist")}
          >
            Wishlist
          </h3>
          <span></span>
          <h3
            className={active === "order" ? "active" : ""}
            onClick={() => setActive("order")}
          >
            Order History
          </h3>
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

export default connect(mapStateToProps)(UserInfo);
