import { Button, Grid, Paper, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Hotel } from "../../../data/hotels";

type Props = {
  data: Hotel;
};
const ListItem = (props: Props) => {
  const { data } = props;
  return (
    <Link href={`hotel/${data.id}`} passHref>
      <Paper sx={{ margin: 2 }}>
        <Grid
          container
          padding={1}
          sx={{
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            },
          }}
        >
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
          <Grid container item xs={12} alignContent="space-between" md={3}>
            <Grid item xs={12} md={12} textAlign="right">
              <Typography component="legend"></Typography>
              <Rating value={data.stars} readOnly />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" textAlign="right">
                {data.price}pln / night
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};

export default ListItem;
