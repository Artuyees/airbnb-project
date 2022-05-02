import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { ArrowForward, DiamondSharp } from "@mui/icons-material";
import type { NextPage } from "next";
import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import Lorem from "../Components/Lorem";
import BottomNav from "../Components/SmallNav";
import BigNav from "../Components/BigNav";
import SmallNav from "../Components/SmallNav";

const Home: NextPage = () => {
  const router = useRouter();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const smallScreen = useMediaQuery("(min-width: 640px)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      {smallScreen ? <BigNav /> : <SmallNav />}
      <Container maxWidth="md">
        <CssBaseline />
        <Button
          endIcon={<ArrowForward />}
          color="primary"
          onClick={() => router.push("/about")}
          style={{ fontSize: 25 }}
          variant="contained"
        >
          App
        </Button>
        <Lorem />
      </Container>
      <BottomNav />
    </ThemeProvider>
  );
};

export default Home;
