import type { AppProps } from "next/app";
import { useMemo, useState, createContext } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import Navigation from "../Components/Navigation";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

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
            main: "#fc3c5c",
            contrastText: "#fff",
          },
          secondary: {
            main: "#f5f5f5",
            contrastText: prefersDarkMode ? "#fc3c5c" : "#fff",
          },
        },
      }),
    [prefersDarkMode]
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const smallScreen = useMediaQuery("(min-width: 640px)");

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Navigation isSmallScreen={smallScreen} />
          <Component {...pageProps} />
        </UserContext.Provider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
