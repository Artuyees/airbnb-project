import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Hotel } from "../../../data/hotels";
import CardWithData from "../Card";

type Props = {
  data?: Hotel[];
  title: string;
};

const Cards = (props: Props) => {
  const { data, title } = props;
  const cards = data?.splice(0, 4);
  return (
    <Grid container marginY={1} gap={1}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h3">{title}</Typography>
      </Grid>
      <Grid container columns={16} gap={1} justifyContent="center">
        {cards?.map((item, idx) => {
          const href = `/Photo${idx}`;
          return (
            <Grid key={idx} justifyContent="center" item md={3} xs={12}>
              <CardWithData
                href={href}
                name={item.name}
                image={`/${item.image}${idx + 1}.jpg`}
              ></CardWithData>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Cards;
