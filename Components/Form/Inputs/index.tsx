import {
  Autocomplete,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import { useContext } from "react";
import { hotels } from "../../../data/hotels";
import { QueryContext } from "../../../pages/_app";
import AutoCompletePicker from "./Autocomplete";
import RangePicker from "./DatePicker";
import GuestPicker from "./GuestTypePicker";

const FormInputs = () => {
  const query = useContext(QueryContext);
  /* map through cities in hotels */
  const cities: string[] = hotels.map((hotel) => hotel.city);
  let uniqueCities = [...new Set(cities)];
  return (
    <Grid
      container
      rowSpacing={2}
      columns={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={2} md={2} textAlign="center">
        <AutoCompletePicker />
      </Grid>
      <Grid item xs={2} md={1} textAlign="center">
        <RangePicker isArrival={true} />
      </Grid>
      <Grid item xs={2} md={1} textAlign="center">
        <RangePicker isArrival={false} />
      </Grid>
      <Grid item xs={2} md={1} textAlign="center">
        <GuestPicker isAdult={true} />
      </Grid>
      <Grid item xs={2} md={1} textAlign="center">
        <GuestPicker isAdult={false} />
      </Grid>
    </Grid>
  );
};

export default FormInputs;
