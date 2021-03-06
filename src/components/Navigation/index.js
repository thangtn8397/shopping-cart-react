import React, { useState } from "react";
import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UI/Backdrop";

const Navigation = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  return (
    <header className="navigation">
      <Toolbar
        clickedToggleHandle={() => setOpenSideDrawer(!openSideDrawer)}
        openSideDrawer={openSideDrawer}
      />
      <SideDrawer
        open={openSideDrawer}
        closeSideDrawer={() => setOpenSideDrawer(false)}
      />
      <Backdrop
        open={openSideDrawer}
        clickedBackdrop={() => setOpenSideDrawer(false)}
      />
    </header>
  );
};

export default Navigation;
