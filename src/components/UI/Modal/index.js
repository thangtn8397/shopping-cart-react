import React from "react";
import Backdrop from "../Backdrop";

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <>
      <Backdrop open={isOpen} clickedBackdrop={closeModal} />
      <div className={isOpen ? "modal open" : "modal"}>{children}</div>
    </>
  );
};

export default Modal;
