import React, { useState } from "react";
import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";

const Navigation = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  return (
    <header>
      <Toolbar
        clickedToggleHandle={() => setOpenSideDrawer(!openSideDrawer)}
        openSideDrawer={openSideDrawer}
      />
      <SideDrawer open={openSideDrawer} />
    </header>
  );
};

export default Navigation;
