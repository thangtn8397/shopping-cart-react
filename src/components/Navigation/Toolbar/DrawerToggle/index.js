import React from "react";

const DrawerToggle = ({ clickedToggle, active }) => {
  return (
    <div
      className={
        active
          ? "drawer-toggle hide-for-desktop active"
          : "drawer-toggle hide-for-desktop"
      }
      onClick={() => clickedToggle()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default DrawerToggle;
