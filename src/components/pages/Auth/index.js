import React, { useState } from "react";
import PageHero from "../../PageHero";
import { authFormConfig } from "../../../constants";
import Input from "../../UI/Input";

const Auth = () => {
  const [authForm, setAuthForm] = useState(authFormConfig);
  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key],
    });
  }
  return (
    <div className="auth">
      <PageHero />
      <section className="container wrapper">
        <form className="auth__form">
          <div className="auth__switch">
            <h3>Register</h3>
            <span></span>
            <h3>Login</h3>
          </div>
          {formElementsArray.map((element) => (
            <Input
              elementType={element.config.elementType}
              elementConfig={element.config.elementConfig}
              value={element.config.value}
              label={element.config.label}
            />
          ))}
          <button className="auth__form-btn">Login</button>
        </form>
      </section>
    </div>
  );
};

export default Auth;
