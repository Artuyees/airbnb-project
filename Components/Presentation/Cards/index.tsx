import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Hotel } from "../../../data/hotels";
import CardWithData from "../Card";

type CardsProps = {
  data?: Hotel[];
};

const Cards = (props: CardsProps) => {
  const { data } = props;
  const hotels = data?.slice(0, 4);
  console.log(hotels, data);
  return (
    <Grid container marginY={1} gap={1}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h3">Cards</Typography>
      </Grid>
      <Grid container columns={16} gap={1} justifyContent="center">
        {hotels?.map((hotel) => {
          return (
            <Grid key={hotel.id} justifyContent="center" item md={3} xs={12}>
              <CardWithData
                description={hotel.description}
                name={hotel.name}
                image={hotel.image}
              ></CardWithData>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Cards;
