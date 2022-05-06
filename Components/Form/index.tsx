import {
  Autocomplete,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useEffect } from "react";

const Form = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const [secondValue, setSecondValue] = React.useState<Date | null>(new Date());
  const [cities, setCities] = React.useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api/cities");
      const data = await result.json();
      setCities(data);
    };
    fetchData().catch(console.error);
  }, []);
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
            options={cities}
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
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2} md={1} textAlign="center">
          <TextField
            id="outlined-basic"
            label="How many children?"
            defaultValue={0}
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
