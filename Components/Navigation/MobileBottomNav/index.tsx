import React from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Favorite, Login, Search } from "@mui/icons-material";
const MobileBottomNav = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ position: "fixed", width: "100%", bottom: 0, zIndex: 2 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Search" icon={<Search />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="log in" icon={<Login />} />
      </BottomNavigation>
    </Box>
  );
};

export default MobileBottomNav;
