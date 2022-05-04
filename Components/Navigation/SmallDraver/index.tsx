import { AppBar, Avatar, Button, SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useContext, useState } from "react";
import { UserContext } from "../../../pages/_app";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Logo from "../../Logo";

type Anchor = "right";

const SmallDrawer = () => {
  const checkLogin = useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Fragment>
      <Button color="secondary" onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon color="inherit" />
      </Button>
      <SwipeableDrawer
        color="secondary"
        sx={{ position: "absolute" }}
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      >
        {checkLogin?.isLoggedIn ? (
          <Box
            p={2}
            textAlign="center"
            role="presentation"
            alignItems="center"
            display="flex"
            flexDirection="column"
            minWidth={200}
            gap={2}
          >
            {" "}
            <Logo />
            <Link href="/profile" passHref>
              <Avatar>JD</Avatar>
            </Link>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                checkLogin?.setIsLoggedIn(false);
              }}
            >
              Log Out
            </Button>
          </Box>
        ) : (
          <Box
            p={2}
            textAlign="center"
            role="presentation"
            alignItems="center"
            display="flex"
            flexDirection="column"
            minWidth={200}
            gap={2}
          >
            <Logo />
            <Button color="secondary" variant="contained">
              Register
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => {
                checkLogin?.setIsLoggedIn(true);
              }}
            >
              Login
            </Button>
          </Box>
        )}
      </SwipeableDrawer>
    </Fragment>
  );
};

export default SmallDrawer;
