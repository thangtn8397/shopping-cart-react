import React from "react";

const Input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = <input {...props.elementConfig} value={props.value} />;
    case "textarea":
      inputElement = <textarea {...props.elementConfig} value={props.value} />;
    default:
      inputElement = <input {...props.elementConfig} value={props.value} />;
  }
  return (
    <div className="input">
      <label></label>
      {inputElement}
    </div>
  );
};

export default Input;
