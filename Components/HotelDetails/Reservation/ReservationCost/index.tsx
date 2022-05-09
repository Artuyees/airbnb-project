import { Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { QueryContext } from "../../../../pages/_app";

type Props = {
  pricePerDay: number;
  serviceCost: number;
};

const ReservationCost = (props: Props) => {
  const [days, setDays] = useState(1);
  const { pricePerDay, serviceCost } = props;
  const query = useContext(QueryContext);
  const { dateArrival, dateDeparture } = query!.query;

  useEffect(() => {
    const diff = dateDeparture!.getTime() - dateArrival!.getTime();
    setDays(Math.ceil(diff / (1000 * 3600 * 24)));
  }, [dateArrival, dateDeparture, days]);

  return (
    <Grid container padding={2}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="body1">Reservation cost</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider orientation="horizontal" flexItem />
      </Grid>

      <Grid item xs={6}>
        <Typography variant="body1">
          {days} days x {pricePerDay}pln
        </Typography>
      </Grid>
      <Grid item xs={6} textAlign="right">
        <Typography variant="body1">{days * pricePerDay} pln</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">Service Payment</Typography>
      </Grid>
      <Grid item xs={6} textAlign="right">
        <Typography variant="body1">{serviceCost} pln</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider orientation="horizontal" flexItem />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">Total</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1" textAlign="right">
          {days * pricePerDay + serviceCost} pln
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReservationCost;
