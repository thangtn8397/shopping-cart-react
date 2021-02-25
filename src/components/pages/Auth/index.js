import React, { useState } from "react";
import PageHero from "../../PageHero";
import Input from "../../UI/Input";
import Spinner from "../../UI/Spinner";
import { authFormConfig } from "../../../constants";
import { checkValidityInput } from "../../../helper";
import { connect } from "react-redux";
import { auth } from "../../../store/actions/authAction";
import { Redirect } from "react-router-dom";

const Auth = ({ onAuth, loading, isAuthenticated, error }) => {
  const [isLogin, setIsLogin] = useState(true);
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

  const submitFormHandler = (e) => {
    e.preventDefault();
    const email = authForm.form.email.value;
    const password = authForm.form.password.value;
    onAuth(email, password, isLogin);
  };

  const errorMessage = error ? (
    <p className="auth__form-error">{error.message}</p>
  ) : null;
  const authRedirect = isAuthenticated ? <Redirect to="/account" /> : null;

  const formElements = !loading ? (
    <div className="auth__form-wrapper">
      {authRedirect}
      <div className="auth__form-switch">
        <h3
          className={isLogin ? "active" : ""}
          onClick={() => setIsLogin(true)}
        >
          Login
        </h3>
        <span></span>
        <h3
          className={!isLogin ? "active" : ""}
          onClick={() => setIsLogin(false)}
        >
          Register
        </h3>
      </div>
      {errorMessage}
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
        {isLogin ? "Login" : "Register"}
      </button>
    </div>
  ) : (
    <Spinner />
  );
  return (
    <div className="auth">
      <PageHero products={false} link="Auth" />
      <section className="container wrapper">
        <form
          className="auth__form"
          onSubmit={(e) => {
            e.preventDefault();
            submitFormHandler(e);
          }}
        >
          {formElements}
        </form>
      </section>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isLogin) =>
      dispatch(auth(email, password, isLogin)),
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    isAuthenticated: state.authReducer.token !== null,
    error: state.authReducer.error,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
