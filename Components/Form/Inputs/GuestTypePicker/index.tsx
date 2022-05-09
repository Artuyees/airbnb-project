import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { QueryContext } from "../../../../pages/_app";

type Props = {
  isAdult: boolean;
};

const GuestPicker = (props: Props) => {
  const query = useContext(QueryContext);
  if (props.isAdult) {
    return (
      <TextField
        id="outlined-basic"
        type="number"
        label="How many adults?"
        inputProps={{
          min: 1,
          max: 10,
        }}
        onChange={(event) => {
          query?.setQuery({
            ...query.query,
            adults: Number(event.target.value),
          });
        }}
        sx={{ width: "100%" }}
        value={query?.query.adults}
        variant="outlined"
      />
    );
  } else {
    return (
      <TextField
        id="outlined-basic"
        type="number"
        label="How many children?"
        value={query?.query.children}
        inputProps={{
          min: 0,
          max: 10,
        }}
        onChange={(event) => {
          query?.setQuery({
            ...query.query,
            children: Number(event.target.value),
          });
        }}
        sx={{ width: "100%" }}
        variant="outlined"
      />
    );
  }
};

export default GuestPicker;
