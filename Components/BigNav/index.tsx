import { DiamondSharp } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const BigNav = () => {
  return (
    <AppBar position="fixed" sx={{ top: 0 }}>
      <Toolbar>
        <DiamondSharp color="secondary" />
        <Typography variant="h6" color="secondary">
          {" "}
          Earthbnb
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default BigNav;
