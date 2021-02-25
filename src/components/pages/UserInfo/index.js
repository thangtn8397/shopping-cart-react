import React, { useState } from "react";
import PageHero from "../../PageHero";
import Input from "../../UI/Input";
import UserInfoItem from "./UserInfoItem";
import { updatePasswordForm, userInfoAccount } from "../../../constants/form";

const UserInfo = () => {
  const [editing, setEditing] = useState(1);

  return (
    <div className="userInfo">
      <PageHero products={false} link="My Account" />
      <div className="userInfo__wrapper container wrapper">
        <div className="userInfo__switch switch">
          <h3>My Account</h3>
          <span></span>
          <h3>Wish List</h3>
        </div>
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
      </div>
    </div>
  );
};

export default UserInfo;
