import { Box, Grid, Paper, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const Form = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const [secondValue, setSecondValue] = React.useState<Date | null>(new Date());
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Grid container my={2} spacing={2} maxWidth="md">
        <Grid item xs={12} md={12}>
          <TextField
            id="outlined-basic"
            label="Where are you going?"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker
            disableFuture
            label="Responsive"
            openTo="year"
            views={["year", "month", "day"]}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker
            disableFuture
            label="Responsive"
            openTo="year"
            views={["year", "month", "day"]}
            value={secondValue}
            onChange={(newSecondValue) => {
              setSecondValue(newSecondValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField id="filled-basic" label="Filled" variant="filled" />
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
        console.log("dzialas", target.name.value, target.email.value);
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
