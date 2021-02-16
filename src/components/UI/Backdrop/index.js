import React from "react";

const Backdrop = ({ open, clickedBackdrop }) => {
  return (
    <div
      className={open ? "backdrop open" : "backdrop"}
      onClick={clickedBackdrop}
    ></div>
  );
};

export default Backdrop;
