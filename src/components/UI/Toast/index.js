import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import CheckIcon from "@material-ui/icons/Check";

const Toast = ({ message, type }) => {
  return (
    <div className="toast">
      <div className="toast__icon">
        {type === "error" ? <ErrorIcon /> : <CheckIcon />}
      </div>
      <div className="toast__message">{message}</div>
      <div className="toast__cancel"></div>
    </div>
  );
};

export default Toast;
