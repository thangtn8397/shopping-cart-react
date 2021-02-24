import React, { useState } from "react";
import PageHero from "../../PageHero";
import { authFormConfig } from "../../../constants";
import Input from "../../UI/Input";
import { checkValidityInput } from "../../../helper";
import { connect } from "react-redux";
import { auth } from "../../../store/actions/authAction";

const Auth = ({ onAuth }) => {
  const [authForm, setAuthForm] = useState({
    form: authFormConfig,
    formValid: true,
  });
  const formElementsArray = [];
  for (let key in authForm.form) {
    formElementsArray.push({
      id: key,
      config: authForm.form[key],
    });
  }
  const inputChangedHandler = (event, key) => {
    const tempForm = { ...authForm.form };
    const tempValue = { ...tempForm[key] };
    tempValue.value = event.target.value;
    tempValue.valid = checkValidityInput(event.target.value, tempValue.rules);
    tempValue.touched = true;
    tempForm[key] = tempValue;
    let formValid = true;
    for (let key in authForm.form) {
      formValid = authForm.form[key].valid && formValid;
    }

    setAuthForm({ form: tempForm, formValid: formValid });
  };
  return (
    <div className="auth">
      <PageHero products={false} link="Auth" />
      <section className="container wrapper">
        <form
          className="auth__form"
          onSubmit={(e) => {
            console.log("submi");
            e.preventDefault();
            onAuth(
              authForm.form["email"].value,
              authForm.form["password"].value
            );
          }}
        >
          <div className="auth__switch">
            <h3>Register</h3>
            <span></span>
            <h3>Login</h3>
          </div>
          {formElementsArray.map((element) => (
            <Input
              key={element.id}
              elementType={element.config.elementType}
              elementConfig={element.config.elementConfig}
              value={element.config.value}
              label={element.config.label}
              touched={element.config.touched}
              invalid={!element.config.valid}
              onChanged={(event) => inputChangedHandler(event, element.id)}
            />
          ))}
          <button
            type="submit"
            className="auth__form-btn"
            disabled={authForm.formValid}
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(auth(email, password)),
  };
};
export default connect(null, mapDispatchToProps)(Auth);
