import {
  Autocomplete,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { hotels, Hotel } from "../../data/hotels";

type Cities = string[];

type Props = {
  data?: Hotel[];
};

const Form = (props: Props) => {
  /* map through cities in hotels */
  const cities: Cities = hotels.map((hotel) => hotel.city);
  let uniqueCities = [...new Set(cities)];
  const [value, setValue] = React.useState<Date | null>(new Date());
  const [secondValue, setSecondValue] = React.useState<Date | null>(new Date());
  const [selectedCity, setSelectedCity] = React.useState<any>();

  return (
    <Paper
      sx={{
        paddingX: "2rem",
        paddingTop: "2rem",
        paddingBottom: "1rem",
        marginY: "2rem",
        maxWidth: "sm",
      }}
    >
      <Grid
        container
        rowSpacing={2}
        columns={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={2} md={2} textAlign="center">
          <Typography textAlign="center" variant="h5">
            Find hotel from your dreams.{" "}
          </Typography>
        </Grid>
        <Grid item xs={2} md={2} textAlign="center">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            value={selectedCity}
            onChange={(event, newValue) => {
              setSelectedCity(newValue);
            }}
            options={uniqueCities}
            sx={{ minWidth: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Where do you want to travel?" />
            )}
          />
        </Grid>
        <Grid item xs={2} md={1} textAlign="center">
          <DatePicker
            disablePast
            label="Date of arrival"
            openTo="day"
            maxDate={secondValue}
            views={["day", "month", "year"]}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={2} md={1} textAlign="center">
          <DatePicker
            disablePast
            label="Data of departure"
            openTo="day"
            views={["day", "month", "year"]}
            value={secondValue}
            onChange={(newSecondValue) => {
              setSecondValue(newSecondValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={2} md={1} textAlign="center">
          <TextField
            id="outlined-basic"
            label="How many adults?"
            defaultValue={2}
            sx={{ minWidth: 258 }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2} md={1} textAlign="center">
          <TextField
            id="outlined-basic"
            label="How many children?"
            defaultValue={0}
            sx={{ minWidth: 258 }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2} md={2} textAlign="center" justifyContent="center">
          <Button
            sx={{ paddingX: 4, paddingY: 1, fontSize: "1rem" }}
            variant="contained"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );

  {
    /* <form
      onSubmit={async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLFormElement & {
          email: HTMLInputElement;
          name: HTMLInputElement;
        };
        console.log("dziala", target.name.value, target.email.value);
      }}
    >
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <input
        id="email"
        name="email"
        type="text"
        autoComplete="email"
        required
      />
      <button type="submit">Register</button>
    </form> */
  }
};

export default Form;
