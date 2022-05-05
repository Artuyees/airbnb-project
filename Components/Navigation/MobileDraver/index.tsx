import { Avatar, Button, Stack, SwipeableDrawer } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import { UserContext } from "../../../pages/_app";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Logo from "../../Logo";

const MobileDrawer = () => {
  const checkLogin = useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Fragment>
      <Button
        sx={{
          color: "secondary.contrastText",
        }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        sx={{ position: "absolute" }}
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      >
        {checkLogin?.isLoggedIn ? (
          <Stack spacing={2}>
            {" "}
            <Logo />
            <Link href="/profile" passHref>
              <Avatar>JD</Avatar>
            </Link>
            <Button
              variant="contained"
              onClick={() => {
                checkLogin?.setIsLoggedIn(false);
              }}
            >
              Log Out
            </Button>
          </Stack>
        ) : (
          <Stack spacing={2} padding={4}>
            <Logo />
            <Button variant="contained">Register</Button>
            <Button
              variant="outlined"
              onClick={() => {
                checkLogin?.setIsLoggedIn(true);
              }}
            >
              Login
            </Button>
          </Stack>
        )}
      </SwipeableDrawer>
    </Fragment>
  );
};

export default MobileDrawer;
