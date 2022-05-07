import {
  Avatar,
  Box,
  Button,
  Divider,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
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
          <Stack
            alignItems="center"
            alignContent="center"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
            margin={4}
          >
            <Logo />
            <Link href="profile" as={`/profile`} passHref>
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {/* Button */}
                <Avatar>JD</Avatar>
                <Typography>John Doe</Typography>
              </Button>
            </Link>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="" passHref>
                <Typography
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      color: "primary.main",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Home
                </Typography>
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="favourites" passHref>
                <Typography
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      color: "primary.main",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Favorites
                </Typography>
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                onClick={() => {
                  checkLogin?.setIsLoggedIn(false);
                }}
              >
                Log Out
              </Button>
            </Box>
          </Stack>
        ) : (
          <Stack
            spacing={2}
            divider={<Divider orientation="horizontal" flexItem />}
            margin={4}
            alignItems="center"
            alignContent="center"
          >
            <Logo />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="" passHref>
                <Typography
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      color: "primary.main",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Home
                </Typography>
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="favourites" passHref>
                <Typography
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      color: "primary.main",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Favorites
                </Typography>
              </Link>
            </Box>
            <Stack spacing={2}>
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
          </Stack>
        )}
      </SwipeableDrawer>
    </Fragment>
  );
};

export default MobileDrawer;
