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
  const cards = data?.slice(0, 4);
  return (
    <Grid container marginY={1} gap={1}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid container columns={16} gap={1} justifyContent="center">
        {cards?.map((item, idx) => {
          const href = `/hotels/${item.id}`;
          return (
            <Grid key={idx} justifyContent="center" item md={3} xs={12}>
              <CardWithData
                href={href}
                name={item.city}
                image={`/Cards/Photo${idx + 1}.jpg`}
                index={idx}
              ></CardWithData>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Cards;
