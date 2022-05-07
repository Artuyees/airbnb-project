import { Button, Grid, Paper, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Hotel } from "../../../data/hotels";

type Props = {
  data: Hotel;
};
const ListItem = (props: Props) => {
  const { data } = props;
  return (
    <Paper sx={{ margin: 2 }}>
      <Grid container padding={1}>
        <Grid
          item
          xs={12}
          md={3}
          position="relative"
          height="fit-content"
          minHeight={200}
        >
          <Image
            alt={data.image}
            src={`/Hotels/${data.image}`}
            layout="fill"
            objectFit="cover"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container padding={2} spacing={1}>
            <Grid item xs={12} md={12}>
              <Typography variant="h4">{data.name}</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="body1" color="primary.main">
                {data.city}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="body1">{data.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} textAlign="right">
              <Typography component="legend"></Typography>
              <Rating value={data.stars} readOnly />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" textAlign="right">
                {data.price}pln / night
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button variant="contained" color="primary" fullWidth>
                Click to Reserve
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ListItem;
