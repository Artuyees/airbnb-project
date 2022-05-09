import { Autocomplete, TextField } from "@mui/material";
import React, { useContext } from "react";
import { hotels } from "../../../../data/hotels";
import { QueryContext } from "../../../../pages/_app";

const AutoCompletePicker = () => {
  const cities: string[] = hotels.map((hotel) => hotel.city);
  let uniqueCities = [...new Set(cities)];
  const query = useContext(QueryContext);
  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      value={query?.query.city}
      options={uniqueCities}
      onChange={(event, newValue) => {
        query?.setQuery({ ...query.query, city: newValue });
      }}
      sx={{ width: "100%" }}
      renderInput={(params) => (
        <TextField {...params} label="Where do you want to travel?" />
      )}
    />
  );
};

export default AutoCompletePicker;
