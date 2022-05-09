import React, { useContext } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Favorite, Login, Search } from "@mui/icons-material";
import { useRouter } from "next/router";
import { UserContext } from "../../../pages/_app";
const MobileBottomNav = () => {
  const [value, setValue] = React.useState(0);

  const router = useRouter();
  const checkLogin = useContext(UserContext);
  return (
    <Box sx={{ position: "fixed", width: "100%", bottom: 0, zIndex: 2 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue: number) => {
          setValue(newValue);
        }}
      >
        {checkLogin?.isLoggedIn && (
          <BottomNavigationAction
            label="Register"
            aria-label="Register"
            icon={<Favorite />}
          />
        )}
        <BottomNavigationAction
          label="Search"
          aria-label="Search"
          icon={<Search />}
          onClick={() => {
            router.push("/");
          }}
        />
        <BottomNavigationAction
          label={checkLogin?.isLoggedIn ? "log in" : "Log out"}
          aria-label="log in"
          icon={<Login />}
          onClick={() => {
            checkLogin?.setIsLoggedIn(!checkLogin?.isLoggedIn);
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default MobileBottomNav;
