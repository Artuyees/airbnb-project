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
import Head from "next/head";

type contextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

type hotelQueryType = {
  city: string | null;
  dateArrival: Date | null | undefined;
  dateDeparture: Date | null;
  children: number;
  adults: number;
};

type queryType = {
  query: hotelQueryType;
  setQuery: (query: hotelQueryType) => void;
};

export const QueryContext = createContext<null | queryType>(null);

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
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [query, setQuery] = useState<hotelQueryType>({
    city: "Warsaw",
    dateArrival: new Date(),
    dateDeparture: tomorrow,
    children: 0,
    adults: 2,
  });
  const smallScreen = useMediaQuery("(min-width: 640px)");

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Head>
        <title>Hotel Booking</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Author: Artur Kucinski, Placeholder description"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Navigation isSmallScreen={smallScreen} />
          <QueryContext.Provider value={{ query, setQuery }}>
            <Component {...pageProps} />
          </QueryContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
