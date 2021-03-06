import React from "react";
import NavigationLinks from "../NavigationLinks";
import NavigationItems from "../NavigationItems";

const SideDrawer = ({ open }) => {
  return (
    <div className={open ? "side-drawer open" : "side-drawer"}>
      <NavigationItems />
      <NavigationLinks />
    </div>
  );
};

export default SideDrawer;
