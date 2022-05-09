import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import RangePicker from "../../../Form/Inputs/DatePicker";
import GuestPicker from "../../../Form/Inputs/GuestTypePicker";
import TextInput from "../TextInputs";

const ReservationForm = () => {
  const [reservationStatus, setReservationStatus] = React.useState(false);
  return (
    <Grid container columns={2} padding={2} rowSpacing={2}>
      <Grid item xs={2} md={2}>
        <Typography variant="h5">Confirm your reservation</Typography>
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
      <Grid item xs={2} md={2} textAlign="center">
        <TextInput label={"First and Last Name"} />
      </Grid>
      <Grid item xs={2} md={2} textAlign="center">
        <TextInput label={"Email"} />
      </Grid>
      <Grid item xs={2} md={2} textAlign="center">
        <TextInput label={"phone number"} />
      </Grid>
      <Grid item xs={2} md={2} textAlign="center">
        {reservationStatus && (
          <Typography variant="body1" color="primary.main">
            Reservation successful
          </Typography>
        )}
        <Button
          disabled={reservationStatus}
          variant="contained"
          fullWidth
          color="primary"
          onClick={() => {
            setReservationStatus(true);
          }}
        >
          Reserve
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReservationForm;
