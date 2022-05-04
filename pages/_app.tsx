import type { AppProps } from "next/app";
import { useMemo, useState, createContext } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import Navigation from "../Components/Navigation";
import { green, purple } from "@mui/material/colors";

type contextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const UserContext = createContext<null | contextType>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: purple[500],
          },
          secondary: {
            main: green[500],
          },
        },
      }),
    [prefersDarkMode]
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const smallScreen = useMediaQuery("(min-width: 640px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navigation isSmallScreen={smallScreen} />
        <Component {...pageProps} />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
