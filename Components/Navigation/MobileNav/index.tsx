import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import Logo from "../../Logo";
import MobileDrawer from "../MobileDraver";

const MobileNav = () => {
  return (
    <AppBar position="sticky" sx={{ top: 0 }}>
      <Toolbar>
        <MobileDrawer />
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default MobileNav;
