import React, { useState } from "react";
import PageHero from "../../PageHero";
import Input from "../../UI/Input";
import Spinner from "../../UI/Spinner";
import { authFormConfig } from "../../../constants";
import { connect } from "react-redux";
import { auth } from "../../../store/actions/authAction";
import { Redirect } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

const Auth = ({ onAuth, loading, isAuthenticated, error }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { formElementsArray, inputChangedHandler, formData } = useForm(
    authFormConfig
  );
  const submitFormHandler = (e) => {
    e.preventDefault();
    const email = formData.formDetail.email.value;
    const password = formData.formDetail.password.value;
    onAuth(email, password, isLogin);
  };

  const errorMessage = error ? (
    <p className="auth__form-error">{error.message}</p>
  ) : null;
  const authRedirect = isAuthenticated ? <Redirect to="/my-account" /> : null;

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
          shouldValidate={element.config.rules}
          touched={element.config.touched}
          invalid={!element.config.valid}
          onChanged={(event) => inputChangedHandler(event, element.id)}
        />
      ))}
      <button
        type="submit"
        className="auth__form-btn"
        disabled={!formData.formValid}
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
