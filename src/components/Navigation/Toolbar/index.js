import React from "react";
import Logo from "../Logo";
import NavigationItems from "../NavigationItems";
import NavigationLinks from "../NavigationLinks";
import DrawerToggle from "./DrawerToggle";

const Toolbar = ({ clickedToggleHandle, openSideDrawer }) => {
  return (
    <div className="toolbar">
      <div className="toolbar__wrapper container">
        <Logo />
        <div className="toolbar__hide-for-mobile">
          <NavigationItems />
        </div>
        <div className="toolbar__hide-for-mobile">
          <NavigationLinks />
        </div>
        <DrawerToggle
          clickedToggle={() => clickedToggleHandle()}
          active={openSideDrawer}
        />
      </div>
    </div>
  );
};

export default Toolbar;
