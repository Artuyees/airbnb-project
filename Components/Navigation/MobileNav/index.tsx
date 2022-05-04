import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import Logo from "../../Logo";
import MobileDrawer from "../MobileDraver";

const MobileNav = () => {
  return (
    <AppBar position="sticky" sx={{ top: 0 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "full",
        }}
      >
        <MobileDrawer />
        {/* Center logo */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Logo />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MobileNav;
