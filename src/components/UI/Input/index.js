import React from "react";

const Input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className="input__inputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
    case "textarea":
      inputElement = (
        <textarea
          className="input__inputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
    default:
      inputElement = (
        <input
          className="input__inputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className="input">
      {inputElement}
      <label className="input__label">{props.label}</label>
    </div>
  );
};

export default Input;
