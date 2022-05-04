import { DiamondSharp } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../../pages/_app";
import SmallDrawer from "../SmallDraver";

const SmallNav = () => {
  return (
    <AppBar position="fixed" sx={{ top: 0 }}>
      <Toolbar>
        <SmallDrawer />
        <DiamondSharp color="secondary" />
        <Typography
          variant="h6"
          color="secondary"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          {" "}
          Earthbnb
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SmallNav;
