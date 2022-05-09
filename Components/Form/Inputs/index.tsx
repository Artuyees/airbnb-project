import { Grid } from "@mui/material";
import AutoCompletePicker from "./Autocomplete";
import RangePicker from "./DatePicker";
import GuestPicker from "./GuestTypePicker";

const FormInputs = () => {
  return (
    <Grid container spacing={2} columns={2}>
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
