import React from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
} from "@mui/material";
import { Restore, Favorite, LocationOn } from "@mui/icons-material";
const SmallNav = () => {
  const [value, setValue] = React.useState(0);

  const matches = useMediaQuery("(min-width:600px)");
  console.log(matches);

  if (matches) {
    return <></>;
  }
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        position: "fixed",
        top: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </Box>
  );
};

export default SmallNav;
