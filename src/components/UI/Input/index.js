import React from "react";

const Input = (props) => {
  let inputElement = null;
  const classNameInput = ["input__inputElement"];
  if (props.touched) classNameInput.push("touched");
  if (props.invalid && props.touched) classNameInput.push("invalid");
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classNameInput.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={(event) => props.onChanged(event)}
        />
      );
    case "textarea":
      inputElement = (
        <textarea
          className={classNameInput.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={(event) => props.onChanged(event)}
        />
      );
    default:
      inputElement = (
        <input
          className={classNameInput.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={(event) => props.onChanged(event)}
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
